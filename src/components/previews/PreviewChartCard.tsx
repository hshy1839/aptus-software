// src/components/previews/PreviewChartCard.tsx
export default function PreviewChartCard() {
  return (
    <div className="rounded-[32px] border border-black/10 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.14)] overflow-hidden">
      <div className="p-7 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-3 w-36 rounded bg-black/10" />
            <div className="mt-2 h-2 w-24 rounded bg-black/5" />
          </div>
          <div className="h-9 w-28 rounded-full bg-black/5" />
        </div>

        <div className="mt-6 h-64 rounded-3xl border border-black/10 bg-gradient-to-b from-black/10 to-black/5" />

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-black/5 p-4">
            <div className="h-2 w-20 rounded bg-black/10" />
            <div className="mt-3 h-5 w-24 rounded bg-black/15" />
          </div>
          <div className="rounded-2xl bg-black/5 p-4">
            <div className="h-2 w-24 rounded bg-black/10" />
            <div className="mt-3 h-5 w-20 rounded bg-black/15" />
          </div>
        </div>
      </div>
    </div>
  );
}
