import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const className = clsx(
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition",
    variant === "primary"
      ? "bg-black text-white hover:opacity-95"
      : "bg-black/5 text-black hover:bg-black/10"
  );

  // 👉 링크 버튼
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  // 👉 액션 버튼 (Drawer 열기 등)
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
