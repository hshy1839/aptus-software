// src/components/FeaturesSection.tsx
import FeatureRow from "./FeatureRow";
import PreviewTableCard from "./previews/PreviewTableCard";
import PreviewChartCard from "./previews/PreviewChartCard";

export default function FeaturesSection() {
  return (
    <>
      <FeatureRow
        eyebrow="PROJECTS"
        title="Keep every client & invoice organized"
        description="Stop losing track of who owes what. Track clients, invoice status, and pipeline progress in a clean dashboard."
        bullets={[
          "Client pipeline with status at a glance",
          "Invoice totals and payment states",
          "Fast search and quick actions",
        ]}
        ctaText="Start organizing"
        ctaHref="/signup"
      >
        <PreviewTableCard />
      </FeatureRow>

      <FeatureRow
        eyebrow="INSIGHTS"
        title="Track income, cashflow & performance"
        description="A simple analytics view that tells you what matters—revenue, trends, and what to focus on next."
        bullets={[
          "Revenue trend overview",
          "Monthly performance snapshot",
          "Simple KPI cards",
        ]}
        ctaText="View dashboard"
        ctaHref="/signup"
        reverse
      >
        <PreviewChartCard />
      </FeatureRow>
    </>
  );
}
