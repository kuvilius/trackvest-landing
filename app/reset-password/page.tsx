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
        // Debug: log the full URL
        const fullUrl = window.location.href
        const hash = window.location.hash
        const search = window.location.search
        console.log('Full URL:', fullUrl)
        console.log('Hash fragment:', hash)
        console.log('Query string:', search)
        
        // Check for query parameter code (PKCE flow from Supabase)
        const queryParams = new URLSearchParams(search)
        const code = queryParams.get('code')
        
        if (code) {
          console.log('Found code in query params, attempting to exchange')
          // For password recovery, try exchanging with empty code verifier
          const { data, error } = await supabase.auth.exchangeCodeForSession(code)
          
          if (error) {
            console.error('Code exchange error:', error)
            setError('This reset link cannot be opened in a browser. Please use the mobile app or request a new reset link.')
            setInitializing(false)
            return
          }
          
          if (data.session) {
            console.log('Session established from code exchange')
            setHasSession(true)
            setInitializing(false)
            return
          }
        }
        
        // Parse hash parameters manually
        const hashParams = new URLSearchParams(hash.substring(1)) // Remove the '#'
        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')
        const type = hashParams.get('type')
        
        console.log('Hash params:', { 
          accessToken: accessToken ? 'present' : 'missing',
          refreshToken: refreshToken ? 'present' : 'missing', 
          type 
        })
        
        // If we have an access token in the hash (even without refresh token)
        if (accessToken) {
          console.log('Found access token, attempting verification')
          
          // The token is actually a token_hash for OTP verification
          // Use verifyOtp instead of setSession
          try {
            const { data, error: verifyError } = await supabase.auth.verifyOtp({
              token_hash: accessToken,
              type: 'recovery',
            })
            
            if (verifyError) {
              console.error('OTP verification error:', verifyError)
              setError('Failed to verify reset link. The link may have expired.')
              setInitializing(false)
              return
            }
            
            if (data.session) {
              console.log('Session established from OTP verification')
              setHasSession(true)
              setInitializing(false)
              return
            }
          } catch (err) {
            console.error('Verification error:', err)
            setError('Failed to process reset link.')
            setInitializing(false)
            return
          }
        }
        
        // Fallback: check if session already exists
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          console.error('Session error:', sessionError)
          setError('Failed to establish reset session. Please request a new reset link.')
          setInitializing(false)
          return
        }

        if (session) {
          console.log('Reset session already established')
          setHasSession(true)
        } else {
          console.log('No session found and no tokens in URL')
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
