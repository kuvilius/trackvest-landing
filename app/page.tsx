import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import FeatureSpot from "@/components/FeatureSpot";
import HowItWorks from "@/components/HowItWorks";
import Vision from "@/components/Vision";
import FinalCta from "@/components/FinalCta";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <Hero />

        <FeatureSpot
          id="features"
          screenLabel="Insights"
          eyebrow="The complete picture"
          title="See how your whole portfolio is performing."
          mediaSide="right"
          screen={{
            src: "/assets/screen-insights2.png",
            alt: "Portfolio insights: realized gains, an allocation donut, and performance broken down by category",
          }}
          features={[
            {
              title: "Allocation at a glance",
              body: "See how your value is spread across everything you hold.",
            },
            {
              title: "Gains, realized and on paper",
              body: "Track what you've earned, what you've sold, and what's still appreciating.",
            },
            {
              title: "Performance by category",
              body: "Spot which parts of your collection are doing the heavy lifting.",
            },
          ]}
        />

        <FeatureSpot
          screenLabel="Detail spotlight"
          eyebrow="Down to the individual asset"
          title="Know what every asset is worth — and how it got there."
          mediaSide="left"
          background="var(--paper-2)"
          screen={{
            src: "/assets/screen-detail.png",
            alt: "Asset detail screen: a Rolex Submariner valued at $17,688, up 4.66%, with its price-history chart",
          }}
          features={[
            {
              title: "Live market value",
              body: "Prices update automatically in the background, so the number is always current.",
            },
            {
              title: "Complete price history",
              body: "View any timeframe, from a single week to all-time, to see the real trend.",
            },
            {
              title: "Gain and ROI at a glance",
              body: "Your purchase price against today's value, in both dollars and percent.",
            },
          ]}
        />

        <HowItWorks />
        <Vision />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

