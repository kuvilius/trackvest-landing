import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.logo}>TrackVest</div>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Track Your Asset Portfolio
          </h1>
          <p className={styles.subtitle}>
            Monitor your watches, sneakers, and valuable assets.<br />
            Stay updated with real-time market prices.
          </p>
          
          <div className={styles.comingSoon}>
            <span className={styles.badge}>Coming Soon to iOS & Android</span>
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Portfolio Tracking</h3>
            <p>Track watches, sneakers, and valuable assets in one place.</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>💰</div>
            <h3>Real-Time Pricing</h3>
            <p>Stay updated with current market values and trends.</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔔</div>
            <h3>Price Alerts</h3>
            <p>Get notified when assets hit your target prices.</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📈</div>
            <h3>Performance Analytics</h3>
            <p>Track portfolio growth and individual asset performance.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/support">Support</a>
          </div>
          <p className={styles.copyright}>&copy; 2026 TrackVest</p>
        </footer>
      </div>
    </main>
  )
}
