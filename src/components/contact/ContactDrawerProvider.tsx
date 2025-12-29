"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ContactDrawerContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const ContactDrawerContext =
  createContext<ContactDrawerContextValue | null>(null);

export function useContactDrawer() {
  const ctx = useContext(ContactDrawerContext);
  if (!ctx) {
    throw new Error(
      "useContactDrawer must be used within ContactDrawerProvider"
    );
  }
  return ctx;
}

function lockBodyScroll(locked: boolean) {
  const body = document.body;
  if (locked) {
    const gap =
      window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
  } else {
    body.style.overflow = "";
    body.style.paddingRight = "";
  }
}

export default function ContactDrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((v) => !v);

  const value = useMemo(
    () => ({ isOpen, open, close, toggle }),
    [isOpen]
  );

  // ESC 닫기
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // body scroll lock
  useEffect(() => {
    lockBodyScroll(isOpen);
    return () => lockBodyScroll(false);
  }, [isOpen]);

  return (
    <ContactDrawerContext.Provider value={value}>
      {children}
      <ContactDrawer />
    </ContactDrawerContext.Provider>
  );
}

/* =========================
   Drawer UI
========================= */

function ContactDrawer() {
  const { isOpen, close } = useContactDrawer();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);
    return () => clearTimeout(t);
  }, [isOpen]);

  const onOverlayDown = (e: React.MouseEvent) => {
    if (panelRef.current?.contains(e.target as Node)) return;
    close();
  };

  return (
    <div
      className={`fixed inset-0 z-[80] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onMouseDown={onOverlayDown}
        className={`absolute inset-0 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/35 backdrop-blur-sm" />
      </div>

      {/* Panel */}
      <div
        ref={panelRef}
        className={`absolute right-0 top-0 h-full w-full sm:w-[520px]
        bg-white shadow-[0_30px_80px_rgba(15,23,42,0.22)]
        transition-transform duration-300 ease-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-black/40">
              CONTACT
            </div>
            <div className="mt-1 text-xl font-bold">
              프로젝트 상담 요청
            </div>
          </div>
          <button
            onClick={close}
            className="rounded-xl border px-3 py-2 text-sm hover:bg-black/5"
          >
            닫기
          </button>
        </div>

        {/* Body */}
        <div className="h-[calc(100%-72px)] overflow-y-auto px-6 py-6">
          <p className="text-sm text-black/60">
            간단히 적어주셔도 충분합니다.
          </p>

          {/* =========================
              FORM
          ========================= */}
          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              if (loading) return;

              const form = e.currentTarget;
              const formData = new FormData(form);
              const payload = Object.fromEntries(formData.entries());

              try {
                setLoading(true);

                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });

                if (!res.ok) throw new Error();

                alert(
                  "문의가 접수되었습니다.\n빠르게 회신드리겠습니다."
                );
                form.reset();
                close();
              } catch {
                alert(
                  "문의 전송에 실패했습니다.\n잠시 후 다시 시도해주세요."
                );
              } finally {
                setLoading(false);
              }
            }}
          >
            <Field label="이름">
              <input
                ref={firstInputRef}
                name="name"
                required
                className="input"
                placeholder="홍길동"
              />
            </Field>

            <Field label="회사 / 브랜드">
              <input
                name="company"
                className="input"
                placeholder="OOO"
              />
            </Field>

            <Field label="연락처 (이메일 또는 전화)">
              <input
                name="contact"
                required
                className="input"
                placeholder="example@email.com"
              />
            </Field>

            <Field label="프로젝트 내용">
              <textarea
                name="message"
                required
                className="textarea"
                placeholder="예) 웹+관리자 / MVP / 결제 기능"
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="희망 일정">
                <input
                  name="timeline"
                  className="input"
                  placeholder="예) 6주"
                />
              </Field>
              <Field label="예산 범위">
                <select name="budget" className="input">
                  <option value="">선택</option>
                  <option value="under-300">300만원 이하</option>
                  <option value="300-700">300~700만원</option>
                  <option value="700-1500">700~1500만원</option>
                  <option value="1500+">1500만원 이상</option>
                </select>
              </Field>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-2xl bg-black text-white font-semibold disabled:opacity-50"
            >
              {loading ? "전송 중..." : "문의 내용 보내기"}
            </button>
          </form>

          <div className="mt-8 rounded-2xl bg-black/5 p-4 text-xs text-black/60">
            • 범위·일정 문서화 후 진행<br />
            • 주간 진행 공유<br />
            • 배포·운영까지 책임
          </div>
        </div>
      </div>

      <style jsx>{`
        .input {
          height: 48px;
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0 16px;
          font-size: 14px;
        }
        .textarea {
          min-height: 120px;
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 12px 16px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-black/45">
        {label}
      </div>
      {children}
    </label>
  );
}
