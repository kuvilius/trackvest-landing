import Reveal from "./Reveal";
import StoreButtons from "./StoreButtons";

export default function FinalCta() {
  return (
    <section className="section" id="download" data-screen-label="Download">
      <div className="wrap">
        <Reveal className="cta-band">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Get started
          </span>
          <h2 style={{ marginTop: 16, maxWidth: "18ch", marginLeft: "auto", marginRight: "auto" }}>
            Start tracking your collection.
          </h2>
          <StoreButtons appStoreHref="https://apps.apple.com/app/id6759809673" googlePlayHref="#download" />
          <span className="soon">Free to download on iOS &amp; Android</span>
        </Reveal>
      </div>
    </section>
  );
}
