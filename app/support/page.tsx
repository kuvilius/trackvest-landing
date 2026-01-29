import styles from '../legal.module.css'

export default function Support() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Support</h1>
        <p className={styles.updated}>Need help? We're here for you.</p>
        
        <section>
          <h2>Contact Us</h2>
          <p>For support inquiries, email us at:</p>
          <p className={styles.email}><a href="mailto:support@trackvest.app">support@trackvest.app</a></p>
          <p>We typically respond within 24 hours.</p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          
          <div className={styles.faq}>
            <h3>How do I add an asset?</h3>
            <p>Tap the "+" button on the home screen, select the asset type (watch or sneaker), and fill in the details. You can add photos and purchase information.</p>
          </div>

          <div className={styles.faq}>
            <h3>Where do prices come from?</h3>
            <p>We source watch prices from Chrono24 and sneaker prices from StockX. Prices are updated regularly but may not be real-time.</p>
          </div>

          <div className={styles.faq}>
            <h3>How do price alerts work?</h3>
            <p>Set a target price for any asset. When the market price reaches your target, you'll receive a push notification.</p>
          </div>

          <div className={styles.faq}>
            <h3>Can I delete my account?</h3>
            <p>Yes. Go to Settings → Account → Delete Account. This will permanently delete all your data.</p>
          </div>

          <div className={styles.faq}>
            <h3>Is my data secure?</h3>
            <p>Yes. We use industry-standard encryption and secure cloud storage (Supabase). Your data is private and never shared.</p>
          </div>

          <div className={styles.faq}>
            <h3>Can I export my data?</h3>
            <p>This feature is coming soon. Contact support if you need your data exported.</p>
          </div>

          <div className={styles.faq}>
            <h3>Why is pricing data different from what I see online?</h3>
            <p>Prices can vary by condition, location, and seller. Our data represents market averages and may not match specific listings.</p>
          </div>
        </section>

        <section>
          <h2>Report a Bug</h2>
          <p>Found a bug? Please email us with:</p>
          <ul>
            <li>Device model (iPhone 15, Pixel 8, etc.)</li>
            <li>App version</li>
            <li>Steps to reproduce</li>
            <li>Screenshots if possible</li>
          </ul>
        </section>

        <section>
          <h2>Feature Requests</h2>
          <p>Have an idea for a new feature? We'd love to hear it! Email your suggestions to support@trackvest.app</p>
        </section>

        <div className={styles.back}>
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
