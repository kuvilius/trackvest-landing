import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Track Your<br />
            <span className={styles.gradient}>Asset Portfolio</span>
          </h1>
          <p className={styles.subtitle}>
            Monitor your valuable assets including watches and sneakers.<br />
            Stay updated with real-time market prices.
          </p>
          
          <div className={styles.comingSoon}>
            <div className={styles.badge}>Coming Soon</div>
            <p className={styles.comingSoonText}>Available on iOS & Android</p>
          </div>

          {/* QR Code Section - Will be enabled after app store launch */}
          {/* <div className={styles.qrSection}>
            <div className={styles.qrCode}>
              <img src="/qr-code.png" alt="Download TrackVest" />
            </div>
            <p className={styles.qrText}>Scan to download</p>
          </div> */}
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Portfolio Tracking</h3>
            <p>Track the value of your watches, sneakers, and other valuable assets in one place.</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>💰</div>
            <h3>Real-Time Pricing</h3>
            <p>Stay updated with current market prices from trusted sources like Chrono24 and StockX.</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📈</div>
            <h3>Price Alerts</h3>
            <p>Get notified when your assets reach target prices or experience significant changes.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2026 TrackVest. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/support">Support</a>
          </div>
        </footer>
      </div>
    </main>
  )
}
