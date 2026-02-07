import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>TrackVest</div>
          <nav className={styles.nav}>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Your Personal Asset Portfolio Tracker
          </h1>
          <p className={styles.subtitle}>
            Track your valuable collectibles with real-time market prices, 
            performance analytics, and smart alerts.
          </p>
          
          <div className={styles.badgeContainer}>
            <a href="#" className={styles.badge}>
              <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <span>App Store</span>
            </a>
            
            <a href="#" className={styles.badge}>
              <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span>Google Play</span>
            </a>
          </div>

          <p className={styles.comingSoon}>Coming soon</p>
        </div>

        {/* App Screenshots */}
        <div className={styles.screenshots}>
          <div className={styles.phoneWrapper}>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.screenshotPlaceholder}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>Portfolio</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.phoneWrapper}>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.screenshotPlaceholder}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>Analytics</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.phoneWrapper}>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.screenshotPlaceholder}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>Alerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <a href="/privacy">Privacy</a>
          <span className={styles.separator}>•</span>
          <a href="/terms">Terms</a>
          <span className={styles.separator}>•</span>
          <a href="mailto:support@trackvest.app">support@trackvest.app</a>
        </div>
        <p className={styles.copyright}>&copy; 2026 TrackVest</p>
      </footer>
    </main>
  )
}
