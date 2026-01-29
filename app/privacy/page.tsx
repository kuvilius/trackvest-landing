import styles from '../legal.module.css'

export default function Privacy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: January 29, 2026</p>
        
        <section>
          <h2>1. Information We Collect</h2>
          <p>TrackVest collects the following information:</p>
          <ul>
            <li>Account information (email address, username)</li>
            <li>Asset information (photos, descriptions, purchase prices)</li>
            <li>Usage data (app interactions, features used)</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Track your asset portfolio</li>
            <li>Send price alerts and notifications</li>
            <li>Communicate important updates</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. All data is encrypted in transit and at rest.</p>
        </section>

        <section>
          <h2>4. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Request data deletion</li>
            <li>Export your data</li>
            <li>Opt out of notifications</li>
          </ul>
        </section>

        <section>
          <h2>5. Contact Us</h2>
          <p>For privacy concerns, contact us at: <a href="mailto:support@trackvest.app">support@trackvest.app</a></p>
        </section>

        <div className={styles.back}>
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
