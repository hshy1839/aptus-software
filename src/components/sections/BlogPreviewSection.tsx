// src/components/sections/BlogPreviewSection.tsx
import Link from "next/link";
import Container from "../Container";

const posts = [
  { title: "How we built the Aptus workflow", date: "Apr 12, 2025", tag: "Product" },
  { title: "Freelance systems that actually scale", date: "Mar 28, 2025", tag: "Guide" },
  { title: "Invoice mistakes that cost money", date: "Mar 10, 2025", tag: "Finance" },
];

export default function BlogPreviewSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-black/40">BLOG</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Latest updates</h2>
            <p className="mt-4 text-base md:text-lg text-black/60 max-w-2xl">
              Product notes, workflow guides, and tactical writing for operators.
            </p>
          </div>

          <Link href="/blog" className="text-sm font-semibold text-black/70 hover:text-black">
            View all →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.title}
              href="/blog"
              className="group rounded-[32px] border border-black/10 bg-white p-7 shadow-[0_25px_80px_rgba(15,23,42,0.10)] hover:shadow-[0_35px_100px_rgba(15,23,42,0.14)] transition"
            >
              <div className="h-36 rounded-2xl bg-black/5" />
              <div className="mt-5 flex items-center justify-between text-xs text-black/45">
                <span className="rounded-full bg-black/5 px-3 py-1">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <div className="mt-3 text-lg font-bold tracking-tight text-black/80 group-hover:text-black">
                {p.title}
              </div>
              <div className="mt-2 text-sm text-black/55">
                Read the full post and see the exact system behind it.
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
