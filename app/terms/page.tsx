import styles from '../legal.module.css'

export default function Terms() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Terms of Service</h1>
        <p className={styles.updated}>Last updated: January 29, 2026</p>
        
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By using TrackVest, you agree to these Terms of Service. If you do not agree, please do not use our app.</p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>TrackVest is a portfolio tracking application for valuable assets including watches and sneakers. We provide:</p>
          <ul>
            <li>Asset portfolio management</li>
            <li>Real-time price tracking from public sources</li>
            <li>Price alerts and notifications</li>
            <li>Portfolio analytics</li>
          </ul>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate information</li>
            <li>Keep your account secure</li>
            <li>Not misuse the service</li>
            <li>Not scrape or copy our data</li>
            <li>Comply with all applicable laws</li>
          </ul>
        </section>

        <section>
          <h2>4. Pricing Data Disclaimer</h2>
          <p><strong>Important:</strong> Price data is sourced from third-party websites and may not be 100% accurate. TrackVest is not responsible for pricing accuracy. Always verify prices before making purchase or sale decisions.</p>
        </section>

        <section>
          <h2>5. Content Ownership</h2>
          <p>You retain ownership of your content (photos, descriptions). By using TrackVest, you grant us a license to store and display your content within the app.</p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>TrackVest is provided "as is" without warranties. We are not liable for:</p>
          <ul>
            <li>Pricing inaccuracies</li>
            <li>Investment losses</li>
            <li>Service interruptions</li>
            <li>Data loss (we recommend backups)</li>
          </ul>
        </section>

        <section>
          <h2>7. Account Termination</h2>
          <p>We reserve the right to terminate accounts that violate these terms. You may delete your account at any time from the app settings.</p>
        </section>

        <section>
          <h2>8. Changes to Terms</h2>
          <p>We may update these terms. Continued use of the app constitutes acceptance of updated terms.</p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>Questions about these terms? Contact: <a href="mailto:support@trackvest.app">support@trackvest.app</a></p>
        </section>

        <div className={styles.back}>
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
