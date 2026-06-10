'use client'

import { Suspense, useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import styles from './reset-password.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type PageState = 'loading' | 'form' | 'success' | 'error'

function ResetPasswordForm() {
  const [pageState, setPageState] = useState<PageState>('loading')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [hasSession, setHasSession] = useState(false)
  const [pw1Error, setPw1Error] = useState('')
  const [pw2Error, setPw2Error] = useState('')
  const [showPw1, setShowPw1] = useState(false)
  const [showPw2, setShowPw2] = useState(false)

  useEffect(() => {
    const initializeSession = async () => {
      try {
        const hash = window.location.hash
        const search = window.location.search
        const queryParams = new URLSearchParams(search)
        const code = queryParams.get('code')

        if (code) {
          const { data, error } = await supabase.auth.exchangeCodeForSession(code)
          if (error || !data.session) { setPageState('error'); return }
          setHasSession(true); setPageState('form'); return
        }

        const hashParams = new URLSearchParams(hash.substring(1))
        const accessToken = hashParams.get('access_token')

        if (accessToken) {
          try {
            const { data, error: verifyError } = await supabase.auth.verifyOtp({
              token_hash: accessToken,
              type: 'recovery',
            })
            if (verifyError || !data.session) { setPageState('error'); return }
            setHasSession(true); setPageState('form'); return
          } catch {
            setPageState('error'); return
          }
        }

        const { data: { session } } = await supabase.auth.getSession()
        if (session) { setHasSession(true); setPageState('form') }
        else { setPageState('error') }
      } catch {
        setPageState('error')
      }
    }

    // No token in URL at all — show error after brief pause
    const hash = window.location.hash
    const search = window.location.search
    if (!hash && !new URLSearchParams(search).get('code')) {
      const t = setTimeout(() => setPageState('error'), 1200)
      initializeSession()
      return () => clearTimeout(t)
    }
    initializeSession()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPw1Error(''); setPw2Error('')
    let valid = true

    if (password.length < 8) { setPw1Error('Password must be at least 8 characters.'); valid = false }
    if (password !== confirmPassword) { setPw2Error("Passwords don't match."); valid = false }
    if (!valid) return

    if (!hasSession) { setPw1Error('No active session. Please click the reset link in your email again.'); return }

    setSubmitting(true)
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password })
      if (updateError) { setPw1Error('Failed to update password: ' + updateError.message); return }
      await supabase.auth.signOut()
      setPageState('success')
    } catch (err: any) {
      setPw1Error(err.message || 'Failed to reset password. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const bgClass = pageState === 'success' ? styles.bgSuccess
    : pageState === 'error' ? styles.bgError
    : styles.bgForm

  return (
    <div className={styles.shell}>
      <div className={`${styles.bg} ${bgClass}`} />

      {/* LOADING */}
      <div className={`${styles.stage} ${pageState === 'loading' ? styles.visible : ''}`}>
        <div className={styles.spinner} />
        <p className={styles.verifying}>Loading…</p>
      </div>

      {/* FORM */}
      <div className={`${styles.stage} ${pageState === 'form' ? styles.visible : ''}`}>
        <a className={styles.logo} href="/">
          <img src="/assets/logo-icon.png" alt="TrackVest" width={36} height={36} />
          <span>TrackVest</span>
        </a>
        <h1 className={styles.headline}>New password.</h1>
        <p className={styles.subline} style={{ marginBottom: '32px' }}>Almost there. Set a new password to get back into your account.</p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="pw1" className={styles.fieldLabel}>New password</label>
            <div className={styles.inputWrap}>
              <input
                id="pw1"
                type={showPw1 ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                className={`${styles.input} ${pw1Error ? styles.inputErr : ''}`}
                disabled={submitting}
              />
              <button type="button" className={styles.toggleVis} aria-label="Show password" onClick={() => setShowPw1(v => !v)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
            </div>
            {pw1Error && <span className={styles.fieldError}>{pw1Error}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="pw2" className={styles.fieldLabel}>Confirm password</label>
            <div className={styles.inputWrap}>
              <input
                id="pw2"
                type={showPw2 ? 'text' : 'password'}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Repeat your password"
                autoComplete="new-password"
                className={`${styles.input} ${pw2Error ? styles.inputErr : ''}`}
                disabled={submitting}
              />
              <button type="button" className={styles.toggleVis} aria-label="Show password" onClick={() => setShowPw2(v => !v)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
            </div>
            {pw2Error && <span className={styles.fieldError}>{pw2Error}</span>}
          </div>

          <button type="submit" className={styles.submitBtn} disabled={submitting}>
            {submitting ? 'Updating…' : 'Update password'}
          </button>
        </form>
      </div>

      {/* SUCCESS */}
      <div className={`${styles.stage} ${styles.success} ${pageState === 'success' ? styles.visible : ''}`}>
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
        <h1 className={styles.headline}>All done.</h1>
        <p className={styles.subline}>Your password has been updated. Open the app to sign in.</p>
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
      <div className={`${styles.stage} ${styles.error} ${pageState === 'error' ? styles.visible : ''}`}>
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
        <p className={styles.subline}>This reset link has expired or already been used. Request a new one from the app.</p>
        <a className={styles.supportLink} href="mailto:support@trackvest.app">
          Need help? support@trackvest.app
        </a>
      </div>
    </div>
  )
}

export default function ResetPassword() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper)' }}>
        <div style={{ width: 44, height: 44, border: '3px solid var(--line)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin .75s linear infinite' }} />
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  )
}
