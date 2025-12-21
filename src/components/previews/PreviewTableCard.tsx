// src/components/previews/PreviewTableCard.tsx
export default function PreviewTableCard() {
  return (
    <div className="rounded-[32px] border border-black/10 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.14)] overflow-hidden">
      <div className="p-7 md:p-8">
        <div className="flex items-center justify-between">
          <div className="h-3 w-32 rounded bg-black/10" />
          <div className="h-8 w-24 rounded-full bg-black/5" />
        </div>

        <div className="mt-6 rounded-2xl border border-black/10 overflow-hidden">
          <div className="grid grid-cols-12 bg-black/5 px-4 py-3 text-xs text-black/45 font-semibold">
            <div className="col-span-5">Client</div>
            <div className="col-span-3">Status</div>
            <div className="col-span-4 text-right">Amount</div>
          </div>

          <div className="divide-y divide-black/10">
            {[
              { w1: "w-28", w2: "w-16", w3: "w-20" },
              { w1: "w-24", w2: "w-20", w3: "w-24" },
              { w1: "w-32", w2: "w-14", w3: "w-16" },
              { w1: "w-20", w2: "w-24", w3: "w-28" },
            ].map((r, idx) => (
              <div key={idx} className="grid grid-cols-12 px-4 py-4">
                <div className="col-span-5">
                  <div className={`h-3 ${r.w1} rounded bg-black/10`} />
                  <div className="mt-2 h-2 w-20 rounded bg-black/5" />
                </div>
                <div className="col-span-3 flex items-center">
                  <div className={`h-3 ${r.w2} rounded bg-black/10`} />
                </div>
                <div className="col-span-4 flex items-center justify-end">
                  <div className={`h-3 ${r.w3} rounded bg-black/10`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="h-12 rounded-2xl bg-black/5" />
          <div className="h-12 rounded-2xl bg-black/5" />
          <div className="h-12 rounded-2xl bg-black/5" />
        </div>
      </div>
    </div>
  );
}
