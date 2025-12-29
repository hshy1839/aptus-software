// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function esc(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

type ContactPayload = {
  name: string;
  company?: string;
  contact: string; // email or phone
  message: string;
  timeline?: string;
  budget?: string;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hongjeongmin1839@gmail.com";

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, message: "ENV_MISSING_RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as Partial<ContactPayload>;
    const name = (body.name || "").trim();
    const company = (body.company || "").trim();
    const contact = (body.contact || "").trim();
    const message = (body.message || "").trim();
    const timeline = (body.timeline || "").trim();
    const budget = (body.budget || "").trim();

    if (!name || !contact || !message) {
      return NextResponse.json(
        { ok: false, message: "REQUIRED_FIELDS_MISSING" },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const subject = `[Aptus 문의] ${name}${company ? ` / ${company}` : ""}`;

    const html = `
      <div style="font-family:system-ui,-apple-system;line-height:1.6">
        <h2>새 프로젝트 문의</h2>
        <table style="border-collapse:collapse;width:100%;max-width:680px">
          <tr><td style="padding:10px;border:1px solid #eee;width:140px">이름</td><td style="padding:10px;border:1px solid #eee">${esc(name)}</td></tr>
          <tr><td style="padding:10px;border:1px solid #eee">회사</td><td style="padding:10px;border:1px solid #eee">${esc(company || "-")}</td></tr>
          <tr><td style="padding:10px;border:1px solid #eee">연락처</td><td style="padding:10px;border:1px solid #eee">${esc(contact)}</td></tr>
          <tr><td style="padding:10px;border:1px solid #eee">희망 일정</td><td style="padding:10px;border:1px solid #eee">${esc(timeline || "-")}</td></tr>
          <tr><td style="padding:10px;border:1px solid #eee">예산</td><td style="padding:10px;border:1px solid #eee">${esc(budget || "-")}</td></tr>
        </table>

        <h3 style="margin-top:18px">문의 내용</h3>
        <div style="white-space:pre-wrap;padding:14px;border:1px solid #eee;border-radius:10px;background:#fafafa">
          ${esc(message)}
        </div>

        <p style="margin-top:16px;color:#666;font-size:12px">
          ※ 이 메일은 Aptus 사이트 문의 폼에서 발송되었습니다.
        </p>
      </div>
    `;

    // replyTo는 "이메일일 때만" 넣어야 안전함
    const replyTo = isEmail(contact) ? contact : undefined;

    const result = await resend.emails.send({
      from: "Aptus 문의 <onboarding@resend.dev>", // 테스트/임시 from
      to: [toEmail],
      subject,
      html,
      ...(replyTo ? { replyTo } : {}),
    });

    // ✅ 여기 중요: error 체크
    if (result.error) {
      console.error("RESEND_SEND_ERROR:", result.error);
      return NextResponse.json(
        { ok: false, message: "RESEND_SEND_FAILED", error: result.error },
        { status: 500 }
      );
    }

    // 성공이면 id 반환(대시보드 추적용)
    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
  } catch (e) {
    console.error("CONTACT API ERROR:", e);
    return NextResponse.json(
      { ok: false, message: "MAIL_FAILED" },
      { status: 500 }
    );
  }
}
