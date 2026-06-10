import Reveal from "./Reveal";
import StoreButtons from "./StoreButtons";
import DeviceFrame from "./DeviceFrame";

export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="wrap">
        <div className="hero-grid">
          <Reveal immediate className="hero-copy">
            <span className="eyebrow">Portfolio tracking for collectors</span>
            <h1>
              Your collection is
              <br />
              an <span className="hl">asset class.</span>
              <br />
              Track it like one.
            </h1>
            <div className="hero-sub">
              <p className="lead">
                TrackVest fetches live market prices for everything you own, charts
                each asset&apos;s value over time, and shows how your whole portfolio
                is performing — automatically.
              </p>
            </div>
            <StoreButtons />
            <span className="soon">Free on iOS &amp; Android</span>
            <div className="hero-trust">
              <span>Live market pricing</span>
              <span className="dot" />
              <span>Performance analytics</span>
              <span className="dot" />
              <span>Price alerts</span>
            </div>
          </Reveal>

          <Reveal immediate delay={1} className="app-stage">
            <div className="phone-glow" />
            <DeviceFrame
              src="/assets/screen-portfolio.png"
              alt="TrackVest dashboard showing a $52,048 portfolio, 30-day return and a list of tracked assets"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
