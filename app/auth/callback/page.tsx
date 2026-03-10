'use client'

import { useEffect, useState } from 'react'
import styles from './callback.module.css'

export default function AuthCallback() {
  const [mounted, setMounted] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isRecovery, setIsRecovery] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    const type = params.get('type')
    const error = params.get('error')
    const errorDescription = params.get('error_description')

    console.log('Callback params:', { code, type, error, errorDescription })

    if (error) {
      console.error('Auth error:', error, errorDescription)
      setIsError(true)
      return
    }

    if (!code) {
      console.error('No code received')
      setIsError(true)
      return
    }

    if (type === 'recovery') {
      setIsRecovery(true)
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
  }, [mounted])

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logo}>TrackVest</a>
          <nav className={styles.nav}>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>
        </div>
      </header>

      {/* Main card */}
      <main className={styles.main}>
        <div className={styles.card}>
          {isError ? (
            <>
              <div className={styles.iconWrap}>
                <svg className={styles.iconError} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
              </div>
              <h1 className={styles.title}>Something went wrong</h1>
              <p className={styles.subtitle}>This link may have expired or already been used. Please request a new verification email.</p>
              <a href="/" className={styles.button}>Back to Home</a>
            </>
          ) : (
            <>
              <div className={styles.iconWrap}>
                <svg className={styles.iconCheck} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="9 12 11.5 14.5 15.5 10"/>
                </svg>
              </div>
              <h1 className={styles.title}>
                {isRecovery ? 'Redirecting...' : 'Email Verified!'}
              </h1>
              <p className={styles.subtitle}>
                {isRecovery
                  ? 'Taking you to reset your password.'
                  : 'Opening TrackVest — you can close this tab once the app launches.'}
              </p>

              <div className={styles.spinner} />

              <div className={styles.fallback}>
                <p className={styles.fallbackLabel}>App not opening?</p>
                <button
                  className={styles.button}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      const params = new URLSearchParams(window.location.search)
                      const code = params.get('code')
                      const type = params.get('type')
                      const deepLink = `trackvest://auth/callback?code=${code}${type ? `&type=${type}` : ''}`
                      window.location.href = deepLink
                    }
                  }}
                >
                  Open App Manually
                </button>
                <p className={styles.downloadText}>
                  Don&apos;t have the app? Download it from the{' '}
                  <a href="/">App Store</a> or <a href="/">Google Play</a>
                </p>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <a href="/privacy">Privacy</a>
        <span>•</span>
        <a href="/terms">Terms</a>
        <span>•</span>
        <a href="mailto:support@trackvest.app">support@trackvest.app</a>
        <p className={styles.copyright}>&copy; 2026 TrackVest</p>
      </footer>
    </div>
  )
}
