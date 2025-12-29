import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // ✅ env 체크 (여기서 대부분 걸린다)
    console.log("ENV:", {
      user: process.env.GMAIL_USER,
      passLen: process.env.GMAIL_APP_PASSWORD?.length,
    });

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("❌ Missing env", {
        user: process.env.GMAIL_USER,
        passExists: !!process.env.GMAIL_APP_PASSWORD,
      });
      return NextResponse.json(
        { ok: false, message: "ENV_MISSING" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const { name, company, contact, message, timeline, budget } = body ?? {};

    if (!name || !contact || !message) {
      return NextResponse.json(
        { ok: false, message: "REQUIRED_FIELDS_MISSING" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Aptus 문의" <${process.env.GMAIL_USER}>`,
      to: "hongjeongmin1839@gmail.com",
      subject: "[Aptus] 새로운 프로젝트 문의",
      html: `
        <h2>새 프로젝트 문의</h2>
        <p><b>이름:</b> ${name}</p>
        <p><b>회사:</b> ${company || "-"}</p>
        <p><b>연락처:</b> ${contact}</p>
        <p><b>일정:</b> ${timeline || "-"}</p>
        <p><b>예산:</b> ${budget || "-"}</p>
        <hr/>
        <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px;">${message}</pre>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("CONTACT API ERROR:", e);
    return NextResponse.json(
      { ok: false, message: "MAIL_FAILED" },
      { status: 500 }
    );
  }
}
