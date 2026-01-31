'use client'

import { Suspense, useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import styles from './reset-password.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

function ResetPasswordForm() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [initializing, setInitializing] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [hasSession, setHasSession] = useState(false)

  // Supabase sends recovery links with URL hash fragments
  // Format: https://trackvest.app/reset-password#access_token=...&type=recovery
  useEffect(() => {
    const initializeSession = async () => {
      try {
        // Supabase client automatically detects and processes the hash fragment
        // Just check if we have a session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          console.error('Session error:', sessionError)
          setError('Failed to establish reset session. Please request a new reset link.')
          setInitializing(false)
          return
        }

        if (session) {
          console.log('Reset session established successfully')
          setHasSession(true)
        } else {
          console.log('No session found - reset link may be invalid or expired')
          setError('Reset link has expired or is invalid. Please request a new password reset.')
        }
      } catch (err) {
        console.error('Initialization error:', err)
        setError('An error occurred. Please request a new password reset.')
      } finally {
        setInitializing(false)
      }
    }

    initializeSession()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (!hasSession) {
      setError('No active session. Please click the reset link in your email again.')
      return
    }

    setLoading(true)

    try {
      // Update the password using the established session
      const { error: updateError } = await supabase.auth.updateUser({
        password: password,
      })

      if (updateError) {
        console.error('Password update error:', updateError)
        setError('Failed to update password: ' + updateError.message)
        return
      }

      setSuccess(true)
      
      // Sign out after password reset
      await supabase.auth.signOut()
      
      setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    } catch (err: any) {
      console.error('Password reset error:', err)
      setError(err.message || 'Failed to reset password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.successIcon}>✓</div>
          <h1 className={styles.title}>Password Reset Successful!</h1>
          <p className={styles.subtitle}>
            Your password has been updated. You can now log in to the TrackVest app with your new password.
          </p>
          <a href="/" className={styles.button}>
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  if (initializing) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.spinner}></div>
          <p className={styles.subtitle}>Verifying reset link...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Reset Your Password</h1>
        <p className={styles.subtitle}>Enter your new password below</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <div className={styles.inputGroup}>
            <label className={styles.label}>New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className={styles.input}
              minLength={6}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className={styles.input}
              minLength={6}
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className={styles.button}
            disabled={loading}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function ResetPassword() {
  return (
    <Suspense fallback={
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.spinner}></div>
          <p>Loading...</p>
        </div>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  )
}
