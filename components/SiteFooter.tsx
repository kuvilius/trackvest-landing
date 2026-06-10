export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-in">
          <div className="foot-brand">
            <a className="brand" href="#top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo-icon.png" alt="TrackVest logo" />
              TrackVest
            </a>
            <p>
              The portfolio tracker for collectors. Track the real value of
              everything you own — all in one place.
            </p>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <span className="ttl">Product</span>
              <a href="#features">Features</a>
              <a href="#how">How it works</a>
              <a href="#vault">The vault</a>
              <a href="#download">Download</a>
            </div>
            <div className="foot-col">
              <span className="ttl">Legal</span>
              <a href="https://www.trackvest.app/privacy">Privacy policy</a>
              <a href="https://www.trackvest.app/terms">Terms of service</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 TrackVest. All rights reserved.</span>
          <span>Available on iOS &amp; Android</span>
        </div>
      </div>
    </footer>
  );
}
