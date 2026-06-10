'use client'

import { useEffect } from 'react'
import styles from '../legal.module.css'

export default function Privacy() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')
    const links = document.querySelectorAll('[data-toc] a')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove('toc-active'))
          const a = document.querySelector(`[data-toc] a[href="#${e.target.id}"]`)
          if (a) a.classList.add('toc-active')
        }
      })
    }, { rootMargin: '-15% 0px -75% 0px' })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navIn}>
          <a className={styles.brand} href="/">
            <img src="/assets/logo-icon.png" alt="TrackVest" width={28} height={28} />
            TrackVest
          </a>
          <div className={styles.navRight}>
            <a className={`${styles.navLink} ${styles.navLinkActive}`} href="/privacy">Privacy</a>
            <a className={styles.navLink} href="/terms">Terms</a>
            <a className={styles.navLink} href="/">Home</a>
          </div>
        </div>
      </nav>

      <div className={styles.legalWrap}>
        <aside className={styles.toc} data-toc="">
          <div className={styles.tocLabel}>Contents</div>
          <ul className={styles.tocList}>
            <li><a href="#infocollect">1. Information We Collect</a></li>
            <li><a href="#infouse">2. How We Process It</a></li>
            <li><a href="#legalbases">3. Legal Bases</a></li>
            <li><a href="#whoshare">4. Who We Share With</a></li>
            <li><a href="#intltransfers">5. International Transfers</a></li>
            <li><a href="#inforetain">6. Retention</a></li>
            <li><a href="#infosafe">7. Security</a></li>
            <li><a href="#infominors">8. Minors</a></li>
            <li><a href="#privacyrights">9. Your Rights</a></li>
            <li><a href="#DNT">10. Do-Not-Track</a></li>
            <li><a href="#uslaws">11. US Residents</a></li>
            <li><a href="#clausea">12. Price Disclaimers</a></li>
            <li><a href="#policyupdates">13. Updates</a></li>
            <li><a href="#contact">14. Contact</a></li>
            <li><a href="#request">15. Data Requests</a></li>
          </ul>
        </aside>

        <main className={styles.legalContent}>
          <header className={styles.legalHeader}>
            <div className={styles.legalTag}>Legal</div>
            <h1 className={styles.legalTitle}>Privacy Policy</h1>
            <p className={styles.legalMeta}>Last updated February 07, 2026</p>
          </header>

          <p>This Privacy Notice for Vilius Kurtkus trading as TrackVest (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) describes how and why we might access, collect, store, use, and/or share your personal information when you use our services — including our mobile application for iOS and Android — or engage with us in other related ways.</p>
          <p><strong>Questions or concerns?</strong> Contact us at <a href="mailto:support@trackvest.app">support@trackvest.app</a>.</p>

          <div className={styles.legalDivider} />

          <section className={styles.legalSection} id="infocollect" data-section="">
            <div className={styles.sectionNum}>01</div>
            <h2 className={styles.sectionTitle}>What Information Do We Collect?</h2>
            <h3 className={styles.sectionSubtitle}>Information you provide</h3>
            <p>We collect personal information you voluntarily provide when you register or interact with our Services. This includes:</p>
            <ul>
              <li>Email addresses</li>
              <li>Passwords</li>
              <li>Usernames</li>
            </ul>
            <p><strong>Sensitive information.</strong> We do not process sensitive information.</p>
            <p><strong>Payment data.</strong> We do not collect or store payment information directly. All in-app purchases are processed by Apple (App Store) or Google (Google Play). See the <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</p>
            <p><strong>Application data.</strong> We may collect mobile device information (device ID, model, OS version, IP address) and, with your permission, send push notifications. You can opt out via your device settings.</p>
            <h3 className={styles.sectionSubtitle}>Information collected automatically</h3>
            <p>When you use our Services, we automatically collect certain technical information that does not directly identify you:</p>
            <ul>
              <li><strong>Log &amp; usage data</strong> — IP address, browser type, pages viewed, timestamps, crash reports</li>
              <li><strong>Device data</strong> — hardware model, OS, app version, ISP/carrier</li>
              <li><strong>Location data</strong> — approximate location based on IP address. You may disable this in device settings, though some features may be affected</li>
            </ul>
          </section>

          <section className={styles.legalSection} id="infouse" data-section="">
            <div className={styles.sectionNum}>02</div>
            <h2 className={styles.sectionTitle}>How Do We Process Your Information?</h2>
            <p>We process your personal information to provide, improve, and administer our Services, communicate with you, and comply with law. Specific purposes include:</p>
            <ul>
              <li><strong>Account creation &amp; authentication</strong> — so you can log in and keep your account in working order</li>
              <li><strong>Service delivery</strong> — to provide the features you request</li>
              <li><strong>Support</strong> — to respond to your inquiries and resolve issues</li>
              <li><strong>Administrative communications</strong> — product updates, policy changes</li>
              <li><strong>Fraud prevention &amp; security</strong> — to keep the platform safe</li>
              <li><strong>Usage analytics</strong> — to understand how features are used and improve them</li>
            </ul>
          </section>

          <section className={styles.legalSection} id="legalbases" data-section="">
            <div className={styles.sectionNum}>03</div>
            <h2 className={styles.sectionTitle}>What Legal Bases Do We Rely On?</h2>
            <p><strong>EU / UK users (GDPR).</strong> We rely on: <strong>Consent</strong> (withdrawable at any time), <strong>Contract performance</strong>, <strong>Legitimate interests</strong> (analytics, fraud prevention, UX improvement), <strong>Legal obligations</strong>, and <strong>Vital interests</strong> where applicable.</p>
            <p><strong>Canada.</strong> We rely on express or implied consent. In exceptional cases permitted by law, we may process your data without consent (e.g. fraud detection, legal compliance).</p>
          </section>

          <section className={styles.legalSection} id="whoshare" data-section="">
            <div className={styles.sectionNum}>04</div>
            <h2 className={styles.sectionTitle}>When and With Whom Do We Share Your Data?</h2>
            <p>We only share data with third-party service providers who operate under data processing agreements with us:</p>
            <ul>
              <li><strong>User Authentication:</strong> Supabase</li>
              <li><strong>Cloud Computing:</strong> Railway</li>
            </ul>
            <p>We may also share data in connection with a merger, acquisition, or sale of company assets, where you will be notified in advance.</p>
          </section>

          <section className={styles.legalSection} id="intltransfers" data-section="">
            <div className={styles.sectionNum}>05</div>
            <h2 className={styles.sectionTitle}>International Transfers</h2>
            <p>Our servers are located in the United States. If you are in the EEA, UK, or Switzerland, your data may be transferred to countries with different data protection standards. We mitigate this through the European Commission&apos;s <strong>Standard Contractual Clauses</strong>. Copies are available upon request.</p>
          </section>

          <section className={styles.legalSection} id="inforetain" data-section="">
            <div className={styles.sectionNum}>06</div>
            <h2 className={styles.sectionTitle}>How Long Do We Keep Your Information?</h2>
            <p>We retain your personal information for as long as your account is active, or as required by law. When we no longer have a legitimate need to process your data, we delete or anonymise it. Data stored in backup archives is isolated and deleted as soon as technically feasible.</p>
          </section>

          <section className={styles.legalSection} id="infosafe" data-section="">
            <div className={styles.sectionNum}>07</div>
            <h2 className={styles.sectionTitle}>How Do We Keep Your Information Safe?</h2>
            <p>We implement appropriate technical and organisational security measures. However, no internet transmission or storage system is 100% secure — we cannot guarantee that unauthorised third parties will never be able to circumvent our security. You should only access our Services within a secure environment.</p>
          </section>

          <section className={styles.legalSection} id="infominors" data-section="">
            <div className={styles.sectionNum}>08</div>
            <h2 className={styles.sectionTitle}>Do We Collect Information from Minors?</h2>
            <p>We do not knowingly collect data from or market to children under 18. If you become aware of any data collected from a minor, please contact us at <a href="mailto:support@trackvest.app">support@trackvest.app</a> and we will promptly delete it.</p>
          </section>

          <section className={styles.legalSection} id="privacyrights" data-section="">
            <div className={styles.sectionNum}>09</div>
            <h2 className={styles.sectionTitle}>What Are Your Privacy Rights?</h2>
            <p>Depending on your location (EEA, UK, Switzerland, Canada, or certain US states), you may have the right to:</p>
            <ul>
              <li>Access and obtain a copy of your personal information</li>
              <li>Correct inaccuracies</li>
              <li>Request erasure</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Not be subject to solely automated decision-making</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>EEA/UK residents may also lodge a complaint with their <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer">national data protection authority</a>. Swiss residents may contact the <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noopener noreferrer">FDPIC</a>.</p>
            <h3 className={styles.sectionSubtitle}>Account deletion</h3>
            <p>Upon requesting account termination, we will immediately deactivate your account and permanently delete all personally identifiable information, including contact details, credentials, and user-generated content. Portfolio data may be retained in anonymised, non-identifiable form for aggregate analytics only. This process is immediate and irreversible.</p>
            <p>To exercise any right, email <a href="mailto:support@trackvest.app">support@trackvest.app</a>.</p>
          </section>

          <section className={styles.legalSection} id="DNT" data-section="">
            <div className={styles.sectionNum}>10</div>
            <h2 className={styles.sectionTitle}>Controls for Do-Not-Track Features</h2>
            <p>No uniform DNT standard has been finalised. We do not currently respond to DNT browser signals. If a standard is adopted that we must follow, we will update this notice accordingly. California law requires us to disclose this.</p>
          </section>

          <section className={styles.legalSection} id="uslaws" data-section="">
            <div className={styles.sectionNum}>11</div>
            <h2 className={styles.sectionTitle}>US Residents — Specific Privacy Rights</h2>
            <p>Residents of California, Colorado, Connecticut, and other covered states may have additional rights to access, correct, delete, and opt out of certain processing of their personal data.</p>
            <h3 className={styles.sectionSubtitle}>Categories of data collected (last 12 months)</h3>
            <div className={styles.legalTableWrap}>
              <table>
                <thead>
                  <tr><th>Category</th><th>Examples</th><th>Collected</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A. Identifiers</td>
                    <td>Email address, IP address, account name</td>
                    <td><span className={styles.badgeYes}>Yes</span></td>
                  </tr>
                  <tr>
                    <td>B. California Customer Records</td>
                    <td>Name, contact information</td>
                    <td><span className={styles.badgeYes}>Yes</span></td>
                  </tr>
                  <tr>
                    <td>G. Geolocation data</td>
                    <td>Device location (IP-based)</td>
                    <td><span className={styles.badgeYes}>Yes</span></td>
                  </tr>
                  <tr>
                    <td>H. Audio/electronic/sensory</td>
                    <td>Images in connection with business activities</td>
                    <td><span className={styles.badgeYes}>Yes</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>All categories are retained for as long as the user has an account with us.</p>
            <h3 className={styles.sectionSubtitle}>Your rights</h3>
            <ul>
              <li>Right to know whether we are processing your data</li>
              <li>Right to access your data</li>
              <li>Right to correct inaccuracies</li>
              <li>Right to request deletion</li>
              <li>Right to obtain a copy of data you previously shared</li>
              <li>Right to non-discrimination for exercising your rights</li>
              <li>Right to opt out of targeted advertising or sale of personal data</li>
            </ul>
            <p>To exercise rights or appeal a decision, email <a href="mailto:support@trackvest.app">support@trackvest.app</a>. <strong>California &quot;Shine the Light&quot;:</strong> California residents may request information about disclosures to third parties for direct marketing. We do not make such disclosures.</p>
          </section>

          <section className={styles.legalSection} id="clausea" data-section="">
            <div className={styles.sectionNum}>12</div>
            <h2 className={styles.sectionTitle}>Market Price Disclaimers</h2>
            <p>Market price estimates and portfolio valuations provided by TrackVest are for <strong>informational purposes only</strong> and do not constitute financial, investment, or professional advice. Price data is sourced from third-party providers and public market sources. Actual market values may vary significantly. Users should conduct their own research and consult qualified professionals before making financial decisions. We are not liable for any losses or damages arising from reliance on price estimates or valuations.</p>
          </section>

          <section className={styles.legalSection} id="policyupdates" data-section="">
            <div className={styles.sectionNum}>13</div>
            <h2 className={styles.sectionTitle}>Do We Update This Notice?</h2>
            <p>Yes. We may update this Privacy Notice from time to time and will indicate the revised date at the top. Material changes will be communicated by prominent notice or direct notification. We encourage you to review this notice periodically.</p>
          </section>

          <section className={styles.legalSection} id="contact" data-section="">
            <div className={styles.sectionNum}>14</div>
            <h2 className={styles.sectionTitle}>How Can You Contact Us?</h2>
            <div className={styles.contactCard}>
              <div className={styles.contactTitle}>TrackVest</div>
              <p>Vilius Kurtkus trading as TrackVest<br />4 Culmington Road, London W13 9NR, United Kingdom<br /><a href="mailto:support@trackvest.app">support@trackvest.app</a></p>
            </div>
          </section>

          <section className={styles.legalSection} id="request" data-section="">
            <div className={styles.sectionNum}>15</div>
            <h2 className={styles.sectionTitle}>How Can You Review, Update, or Delete Your Data?</h2>
            <p>Based on applicable law, you may have the right to request access to, correction of, or deletion of your personal information. To submit a request, email <a href="mailto:support@trackvest.app">support@trackvest.app</a>.</p>
          </section>
        </main>
      </div>

      <footer className={styles.legalFooter}>
        <a href="/">Home</a>
        <span className={styles.sep}>·</span>
        <a href="/privacy">Privacy</a>
        <span className={styles.sep}>·</span>
        <a href="/terms">Terms</a>
        <span className={styles.sep}>·</span>
        <a href="mailto:support@trackvest.app">support@trackvest.app</a>
        <span className={styles.sep}>·</span>
        <span>© 2026 TrackVest</span>
      </footer>
    </>
  )
}
