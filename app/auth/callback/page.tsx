'use client'

import { useEffect, useState } from 'react'
import styles from './callback.module.css'

type CallbackState = 'loading' | 'success' | 'error'

export default function AuthCallback() {
  const [state, setState] = useState<CallbackState>('loading')

  useEffect(() => {
    const hash = window.location.hash
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    const type = params.get('type')
    const error = params.get('error')

    if (hash.includes('access_token')) { setState('success'); return }
    if (hash.includes('error') || error) { setState('error'); return }

    if (!code) {
      const t = setTimeout(() => setState('error'), 2200)
      return () => clearTimeout(t)
    }

    if (type === 'recovery') {
      window.location.href = `/reset-password?code=${code}`
      return
    }

    // Email verification — deep link into app
    const deepLink = `trackvest://auth/callback?code=${code}`
    window.location.href = deepLink
    setTimeout(() => {
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.src = deepLink
      document.body.appendChild(iframe)
      setTimeout(() => document.body.removeChild(iframe), 1000)
    }, 500)
    setState('success')
  }, [])

  const bgClass = state === 'success' ? styles.bgSuccess : state === 'error' ? styles.bgError : styles.bgLoading

  return (
    <div className={styles.shell}>
      <div className={`${styles.bg} ${bgClass}`} />

      {/* SUCCESS */}
      <div className={`${styles.stage} ${styles.success} ${state === 'success' ? styles.visible : ''}`}>
        <a className={styles.logo} href="/">
          <img src="/assets/logo-icon.png" alt="TrackVest" width={36} height={36} />
          <span>TrackVest</span>
        </a>
        <div className={styles.iconWrap}>
          <div className={`${styles.iconRing} ${styles.iconRing1}`} />
          <div className={`${styles.iconRing} ${styles.iconRing2}`} />
          <div className={styles.iconCore}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path className={styles.checkPath} d="M20 6 9 17l-5-5" />
            </svg>
          </div>
        </div>
        <h1 className={styles.headline}>You&apos;re in.</h1>
        <p className={styles.subline}>Email verified. Open TrackVest and start tracking your collection.</p>
        <div className={styles.storeRow}>
          <a className={styles.appbtn} href="#" aria-label="Download on the App Store">
            <svg className={styles.appbtnIc} viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <span className={styles.appbtnTx}><small>Download on the</small><strong>App Store</strong></span>
          </a>
          <a className={styles.appbtn} href="#" aria-label="Get it on Google Play">
            <svg className={styles.appbtnIc} viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.5 4.2v15.6c0 .86.94 1.4 1.68.95l12.86-7.8a1.1 1.1 0 0 0 0-1.9L8.18 3.25c-.74-.45-1.68.08-1.68.95z"/>
            </svg>
            <span className={styles.appbtnTx}><small>Get it on</small><strong>Google Play</strong></span>
          </a>
        </div>
      </div>

      {/* ERROR */}
      <div className={`${styles.stage} ${styles.error} ${state === 'error' ? styles.visible : ''}`}>
        <a className={styles.logo} href="/">
          <img src="/assets/logo-icon.png" alt="TrackVest" width={36} height={36} />
          <span>TrackVest</span>
        </a>
        <div className={styles.iconWrap}>
          <div className={styles.iconCore}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </div>
        </div>
        <h1 className={styles.headline}>Link expired.</h1>
        <p className={styles.subline}>This verification link has expired or already been used. Request a new one from the app.</p>
        <a className={styles.supportLink} href="mailto:support@trackvest.app">
          Need help? support@trackvest.app
        </a>
      </div>

      {/* LOADING */}
      <div className={`${styles.stage} ${state === 'loading' ? styles.visible : ''}`}>
        <div className={styles.spinner} />
        <p className={styles.verifying}>Verifying…</p>
      </div>
    </div>
  )
}
