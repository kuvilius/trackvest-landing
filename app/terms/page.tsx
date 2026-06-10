'use client'

import { useEffect } from 'react'
import styles from '../legal.module.css'

export default function Terms() {
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
            <a className={styles.navLink} href="/privacy">Privacy</a>
            <a className={`${styles.navLink} ${styles.navLinkActive}`} href="/terms">Terms</a>
            <a className={styles.navLink} href="/">Home</a>
          </div>
        </div>
      </nav>

      <div className={styles.legalWrap}>
        <aside className={styles.toc} data-toc="">
          <div className={styles.tocLabel}>Contents</div>
          <ul className={styles.tocList}>
            <li><a href="#services">1. Our Services</a></li>
            <li><a href="#ip">2. Intellectual Property</a></li>
            <li><a href="#userreps">3. User Representations</a></li>
            <li><a href="#userreg">4. Registration</a></li>
            <li><a href="#purchases">5. Purchases &amp; Payment</a></li>
            <li><a href="#subscriptions">6. Subscriptions</a></li>
            <li><a href="#software">7. Software</a></li>
            <li><a href="#prohibited">8. Prohibited Activities</a></li>
            <li><a href="#ugc">9. User Contributions</a></li>
            <li><a href="#license">10. Contribution Licence</a></li>
            <li><a href="#mobile">11. Mobile App Licence</a></li>
            <li><a href="#thirdparty">12. Third-Party Content</a></li>
            <li><a href="#sitemanage">13. Services Management</a></li>
            <li><a href="#ppyes">14. Privacy Policy</a></li>
            <li><a href="#copyrightyes">15. Copyright</a></li>
            <li><a href="#terms">16. Term &amp; Termination</a></li>
            <li><a href="#modifications">17. Modifications</a></li>
            <li><a href="#law">18. Governing Law</a></li>
            <li><a href="#disputes">19. Dispute Resolution</a></li>
            <li><a href="#corrections">20. Corrections</a></li>
            <li><a href="#disclaimer">21. Disclaimer</a></li>
            <li><a href="#liability">22. Liability</a></li>
            <li><a href="#indemnification">23. Indemnification</a></li>
            <li><a href="#userdata">24. User Data</a></li>
            <li><a href="#electronic">25. Electronic Comms</a></li>
            <li><a href="#california">26. California Users</a></li>
            <li><a href="#misc">27. Miscellaneous</a></li>
            <li><a href="#addclause">28. Price Disclaimer</a></li>
            <li><a href="#contact">29. Contact</a></li>
          </ul>
        </aside>

        <main className={styles.legalContent}>
          <header className={styles.legalHeader}>
            <div className={styles.legalTag}>Legal</div>
            <h1 className={styles.legalTitle}>Terms &amp; Conditions</h1>
            <p className={styles.legalMeta}>Last updated February 07, 2026</p>
          </header>

          <p>We are Vilius Kurtkus trading as TrackVest (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), registered in England at 4 Culmington Road, London W13 9NR. We operate <a href="https://www.trackvest.app">trackvest.app</a> and the TrackVest mobile app for iOS and Android.</p>
          <p>By accessing our Services, you confirm you have read, understood, and agreed to be bound by these Legal Terms. <strong>If you do not agree, please discontinue use immediately.</strong></p>
          <p>Contact us at <a href="mailto:support@trackvest.app">support@trackvest.app</a>.</p>

          <div className={styles.legalDivider} />

          <section className={styles.legalSection} id="services" data-section="">
            <div className={styles.sectionNum}>01</div>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p>Our Services are not intended for distribution in jurisdictions where such use would be contrary to law. Users who access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws. The Services are not tailored for HIPAA, FISMA, or GLBA-regulated interactions.</p>
          </section>

          <section className={styles.legalSection} id="ip" data-section="">
            <div className={styles.sectionNum}>02</div>
            <h2 className={styles.sectionTitle}>Intellectual Property Rights</h2>
            <p>We own or are licensed to use all intellectual property in our Services — including source code, designs, text, graphics, trademarks, and logos (&quot;Content&quot; and &quot;Marks&quot;). Content is provided for your personal, non-commercial use only.</p>
            <p>Subject to these Terms, we grant you a non-exclusive, non-transferable, revocable licence to access the Services and download content for personal use. Any other use requires our prior written permission.</p>
            <p><strong>Your submissions:</strong> By sending us feedback, suggestions, or other content, you assign us all intellectual property rights in that submission. We may use it for any lawful purpose without compensation to you.</p>
            <p><strong>Contributions:</strong> By posting Contributions, you grant us a worldwide, irrevocable, royalty-free licence to use, reproduce, distribute, and adapt your content across any media. You are solely responsible for your Contributions and warrant they do not infringe third-party rights.</p>
          </section>

          <section className={styles.legalSection} id="userreps" data-section="">
            <div className={styles.sectionNum}>03</div>
            <h2 className={styles.sectionTitle}>User Representations</h2>
            <p>By using the Services, you represent and warrant that: (1) registration information is true and accurate; (2) you have legal capacity to agree to these Terms; (3) you are not a minor, or have parental permission; (4) you will not access the Services through bots or automated means; (5) you will not use the Services for illegal or unauthorised purposes.</p>
          </section>

          <section className={styles.legalSection} id="userreg" data-section="">
            <div className={styles.sectionNum}>04</div>
            <h2 className={styles.sectionTitle}>User Registration</h2>
            <p>You must keep your password confidential and are responsible for all activity under your account. We reserve the right to remove or change usernames we deem inappropriate.</p>
          </section>

          <section className={styles.legalSection} id="purchases" data-section="">
            <div className={styles.sectionNum}>05</div>
            <h2 className={styles.sectionTitle}>Purchases &amp; Payment</h2>
            <p>We accept Visa, Mastercard, American Express, Discover, PayPal, Apple Pay, and Google Pay. All payments are in British pounds. You agree to provide accurate, current payment information and authorise us to charge your payment method for all purchases. We reserve the right to refuse or limit any order.</p>
          </section>

          <section className={styles.legalSection} id="subscriptions" data-section="">
            <div className={styles.sectionNum}>06</div>
            <h2 className={styles.sectionTitle}>Subscriptions</h2>
            <p><strong>Billing &amp; renewal.</strong> Subscriptions renew automatically on a monthly basis unless cancelled. You consent to recurring charges without prior approval for each cycle.</p>
            <p><strong>Cancellation.</strong> Cancel anytime from your account settings. Cancellation takes effect at the end of the current billing period.</p>
            <p><strong>Fee changes.</strong> We may change subscription fees and will communicate changes in accordance with applicable law.</p>
          </section>

          <section className={styles.legalSection} id="software" data-section="">
            <div className={styles.sectionNum}>07</div>
            <h2 className={styles.sectionTitle}>Software</h2>
            <p>Any software included in our Services is provided &quot;AS IS&quot; without warranty. If accompanied by a EULA, those terms govern. Otherwise, we grant a non-exclusive, revocable licence for use with our Services only. You may not reproduce or redistribute the software except as permitted by the applicable licence.</p>
          </section>

          <section className={styles.legalSection} id="prohibited" data-section="">
            <div className={styles.sectionNum}>08</div>
            <h2 className={styles.sectionTitle}>Prohibited Activities</h2>
            <p>You may not use the Services for any purpose other than for which they are made available. Prohibited activities include:</p>
            <ul>
              <li>Scraping or systematically extracting data without written permission</li>
              <li>Attempting to circumvent security or access controls</li>
              <li>Uploading viruses, malware, or disruptive code</li>
              <li>Impersonating other users or persons</li>
              <li>Using automated scripts, bots, or data mining tools</li>
              <li>Uploading false, misleading, or inaccurate asset information</li>
              <li>Attempting to manipulate market prices through false data</li>
              <li>Using the Services for money laundering, tax evasion, or any illegal activity</li>
              <li>Sharing account credentials with third parties</li>
              <li>Competing with us using our Services or Content</li>
              <li>Harassing, threatening, or abusing other users or our team</li>
            </ul>
          </section>

          <section className={styles.legalSection} id="ugc" data-section="">
            <div className={styles.sectionNum}>09</div>
            <h2 className={styles.sectionTitle}>User Generated Contributions</h2>
            <p>When you post Contributions, you represent and warrant that: they are original or you hold all necessary rights; they are not false, misleading, illegal, harassing, obscene, or discriminatory; they do not infringe any third-party intellectual property, privacy, or publicity rights; and they comply with these Terms.</p>
            <p>Any violation may result in termination or suspension of your access to the Services.</p>
          </section>

          <section className={styles.legalSection} id="license" data-section="">
            <div className={styles.sectionNum}>10</div>
            <h2 className={styles.sectionTitle}>Contribution Licence</h2>
            <p>By posting Contributions, you grant us an unrestricted, worldwide, irrevocable, royalty-free licence to host, use, reproduce, distribute, adapt, and sublicence your Contributions in any media or format. You waive all moral rights in your Contributions. You retain ownership of your content — we assert no ownership over it.</p>
          </section>

          <section className={styles.legalSection} id="mobile" data-section="">
            <div className={styles.sectionNum}>11</div>
            <h2 className={styles.sectionTitle}>Mobile Application Licence</h2>
            <p>We grant you a revocable, non-exclusive, non-transferable licence to install and use the App on devices you own or control, solely in accordance with these Terms. You may not decompile, reverse-engineer, modify, or distribute the App, or use it to build a competing product.</p>
            <p><strong>Apple &amp; Android.</strong> Your use is also subject to the applicable App Distributor&apos;s terms of service. App Distributors are third-party beneficiaries of this licence. We are responsible for maintenance and support, not the App Distributors.</p>
          </section>

          <section className={styles.legalSection} id="thirdparty" data-section="">
            <div className={styles.sectionNum}>12</div>
            <h2 className={styles.sectionTitle}>Third-Party Websites and Content</h2>
            <p>Our Services may contain links to third-party websites and content we do not control. We are not responsible for the accuracy, opinions, reliability, or privacy practices of third-party sites. Accessing third-party content is at your own risk and is governed by those parties&apos; own terms, not ours.</p>
          </section>

          <section className={styles.legalSection} id="sitemanage" data-section="">
            <div className={styles.sectionNum}>13</div>
            <h2 className={styles.sectionTitle}>Services Management</h2>
            <p>We reserve the right — without obligation — to monitor the Services for violations, take appropriate legal action, restrict or remove Contributions, and otherwise manage the Services to protect our rights and ensure proper functioning.</p>
          </section>

          <section className={styles.legalSection} id="ppyes" data-section="">
            <div className={styles.sectionNum}>14</div>
            <h2 className={styles.sectionTitle}>Privacy Policy</h2>
            <p>We care about data privacy. Please review our <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms. By using the Services, you agree to its terms. The Services are hosted in the Netherlands and United States — continued use constitutes consent to data transfer to those countries.</p>
          </section>

          <section className={styles.legalSection} id="copyrightyes" data-section="">
            <div className={styles.sectionNum}>15</div>
            <h2 className={styles.sectionTitle}>Copyright Infringements</h2>
            <p>If you believe material on our Services infringes your copyright, notify us immediately at <a href="mailto:support@trackvest.app">support@trackvest.app</a>. Note that under applicable law, making a false infringement claim may expose you to liability.</p>
          </section>

          <section className={styles.legalSection} id="terms" data-section="">
            <div className={styles.sectionNum}>16</div>
            <h2 className={styles.sectionTitle}>Term and Termination</h2>
            <p>These Terms remain in effect while you use our Services. We reserve the right to deny access, suspend, or terminate your account at any time and for any reason, without notice or liability. If your account is terminated, you may not re-register under any name. We may pursue civil, criminal, or injunctive remedies where appropriate.</p>
          </section>

          <section className={styles.legalSection} id="modifications" data-section="">
            <div className={styles.sectionNum}>17</div>
            <h2 className={styles.sectionTitle}>Modifications and Interruptions</h2>
            <p>We may change, suspend, or discontinue the Services at any time without notice. We are not liable for any resulting loss or inconvenience. We do not guarantee the Services will be available at all times.</p>
          </section>

          <section className={styles.legalSection} id="law" data-section="">
            <div className={styles.sectionNum}>18</div>
            <h2 className={styles.sectionTitle}>Governing Law</h2>
            <p>These Terms are governed by the laws of the United Kingdom. If you are an EU consumer, you retain the protections afforded by the mandatory provisions of your country of residence. Both parties agree to submit to the non-exclusive jurisdiction of the courts of England.</p>
          </section>

          <section className={styles.legalSection} id="disputes" data-section="">
            <div className={styles.sectionNum}>19</div>
            <h2 className={styles.sectionTitle}>Dispute Resolution</h2>
            <p><strong>Informal negotiation.</strong> Before initiating arbitration, parties agree to attempt to resolve disputes informally for at least 30 days via written notice.</p>
            <p><strong>Binding arbitration.</strong> Unresolved disputes shall be determined by a single arbitrator under the rules of the European Court of Arbitration, seated in England, conducted in English, and governed by English law.</p>
            <p><strong>Restrictions.</strong> All arbitration is limited to individual disputes — no class actions, collective proceedings, or representative claims.</p>
            <p><strong>Exceptions.</strong> Disputes involving intellectual property rights, theft, invasion of privacy, or injunctive relief are not subject to arbitration.</p>
          </section>

          <section className={styles.legalSection} id="corrections" data-section="">
            <div className={styles.sectionNum}>20</div>
            <h2 className={styles.sectionTitle}>Corrections</h2>
            <p>We reserve the right to correct any errors, inaccuracies, or omissions in our Services at any time without prior notice.</p>
          </section>

          <section className={styles.legalSection} id="disclaimer" data-section="">
            <div className={styles.sectionNum}>21</div>
            <h2 className={styles.sectionTitle}>Disclaimer</h2>
            <p>The Services are provided on an <strong>&quot;as-is&quot; and &quot;as-available&quot;</strong> basis. To the fullest extent permitted by law, we disclaim all warranties — express or implied — including merchantability, fitness for a particular purpose, and non-infringement. We are not liable for errors, personal injury, unauthorised access to our servers, service interruptions, bugs, or any content posted via the Services.</p>
          </section>

          <section className={styles.legalSection} id="liability" data-section="">
            <div className={styles.sectionNum}>22</div>
            <h2 className={styles.sectionTitle}>Limitations of Liability</h2>
            <p>In no event will we, our directors, employees, or agents be liable for any indirect, consequential, incidental, special, or punitive damages — including lost profits or data — arising from your use of the Services. Our aggregate liability is limited to the amount you paid us in the six months preceding the claim. Some jurisdictions do not allow these limitations — if they apply to you, some or all of the above may not apply.</p>
          </section>

          <section className={styles.legalSection} id="indemnification" data-section="">
            <div className={styles.sectionNum}>23</div>
            <h2 className={styles.sectionTitle}>Indemnification</h2>
            <p>You agree to defend, indemnify, and hold us harmless from any loss, claim, liability, or demand (including legal fees) arising from: your Contributions, use of the Services, breach of these Terms, violation of third-party rights, or any harmful act toward other users. We reserve the right to assume control of our own defence at your expense.</p>
          </section>

          <section className={styles.legalSection} id="userdata" data-section="">
            <div className={styles.sectionNum}>24</div>
            <h2 className={styles.sectionTitle}>User Data</h2>
            <p>We maintain certain data you transmit to the Services for operational purposes. While we perform routine backups, you are solely responsible for all data you transmit. We have no liability for any loss or corruption of user data.</p>
          </section>

          <section className={styles.legalSection} id="electronic" data-section="">
            <div className={styles.sectionNum}>25</div>
            <h2 className={styles.sectionTitle}>Electronic Communications</h2>
            <p>By using the Services, you consent to receive electronic communications and agree that all agreements, notices, and disclosures we provide electronically satisfy legal requirements for written communication. You waive any requirements for original signatures or non-electronic records.</p>
          </section>

          <section className={styles.legalSection} id="california" data-section="">
            <div className={styles.sectionNum}>26</div>
            <h2 className={styles.sectionTitle}>California Users and Residents</h2>
            <p>If a complaint is not satisfactorily resolved, California residents may contact the Complaint Assistance Unit of the Division of Consumer Services, California Department of Consumer Affairs, at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834, or by phone at (800) 952-5210.</p>
          </section>

          <section className={styles.legalSection} id="misc" data-section="">
            <div className={styles.sectionNum}>27</div>
            <h2 className={styles.sectionTitle}>Miscellaneous</h2>
            <p>These Terms constitute the entire agreement between you and us. Our failure to enforce any right is not a waiver. If any provision is found unlawful, the remaining provisions remain in full effect. No joint venture, partnership, or agency relationship is created by these Terms. We may assign our rights and obligations at any time.</p>
          </section>

          <section className={styles.legalSection} id="addclause" data-section="">
            <div className={styles.sectionNum}>28</div>
            <h2 className={styles.sectionTitle}>Market Price Estimates and Data Disclaimer</h2>
            <p>Market price estimates, valuations, and performance data provided by TrackVest are for <strong>informational and tracking purposes only</strong>. Price data is aggregated from third-party sources and public marketplaces. We make no warranties regarding its accuracy, completeness, timeliness, or reliability. Actual market values may vary significantly.</p>
            <p>TrackVest is not a financial advisor, investment platform, or marketplace. Users should conduct independent research and consult qualified professionals before making any financial or purchasing decisions. We are not liable for any losses, damages, or opportunity costs arising from reliance on our data.</p>
          </section>

          <section className={styles.legalSection} id="contact" data-section="">
            <div className={styles.sectionNum}>29</div>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <div className={styles.contactCard}>
              <div className={styles.contactTitle}>TrackVest</div>
              <p>Vilius Kurtkus trading as TrackVest<br />4 Culmington Road, London W13 9NR, England<br /><a href="mailto:support@trackvest.app">support@trackvest.app</a></p>
            </div>
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

export default function Terms() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')
    const links = document.querySelectorAll('[data-toc] a')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove('toc-active'))
          const a = document.querySelector('[data-toc] a[href="#' + e.target.id + '"]')
          if (a) a.classList.add('toc-active')
        }
      })
    }, { rootMargin: '-15% 0px -75% 0px' })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])
  return null
}
