import Reveal from "./Reveal";

export default function Vision() {
  return (
    <section className="section vision" id="vault" data-screen-label="Vision">
      <div className="wrap">
        <div className="vision-grid">
          <Reveal className="head" style={{ maxWidth: "none" }}>
            <span className="eyebrow">Beyond the obvious</span>
            <h2>A home for everything worth holding onto.</h2>
            <p className="lead">
              Details end up scattered across screenshots, spreadsheets and old
              receipts. TrackVest brings it all together and keeps it current,
              whatever you collect.
            </p>
            <div className="taglist">
              <span className="live">Real-time value</span>
              <span className="live">Full price history</span>
              <span>One portfolio</span>
            </div>
          </Reveal>
          <Reveal className="vision-mark" delay={2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-icon.png" alt="TrackVest" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
