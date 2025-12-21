// src/components/Footer.tsx
import Link from "next/link";
import Container from "./Container";

const cols: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    items: [
      { label: "Overview", href: "/" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#integrations" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 py-14">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-lg font-extrabold tracking-tight">APTUS</div>
            <p className="mt-3 text-sm text-black/55 max-w-sm">
              A clean system for clients, projects, and invoices—built for fast operators.
            </p>
            <p className="mt-6 text-xs text-black/45">
              © {new Date().getFullYear()} Aptus. All rights reserved.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-sm font-semibold text-black/70">{c.title}</div>
                <div className="mt-4 space-y-3">
                  {c.items.map((i) => (
                    <Link
                      key={i.label}
                      href={i.href}
                      className="block text-sm text-black/55 hover:text-black"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
