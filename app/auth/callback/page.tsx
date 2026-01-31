'use client'

import { useEffect, useState } from 'react'
import styles from './callback.module.css'

export default function AuthCallback() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (!mounted) return
    
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    const error = params.get('error')
    const errorDescription = params.get('error_description')
    
    // Log for debugging
    console.log('Callback params:', { code, error, errorDescription })
    
    if (error) {
      console.error('Auth error:', error, errorDescription)
    }
    
    // Build the deep link with all parameters
    const deepLink = 'trackvest://auth/callback' + window.location.search
    
    // Try to open the app via deep link
    console.log('Opening deep link:', deepLink)
    window.location.href = deepLink
    
    // If deep link doesn't work, show the page
    setTimeout(() => {
      // Page will show after 2 seconds if app didn't open
    }, 2000)
  }, [mounted])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Opening TrackVest...</h1>
        <p className={styles.subtitle}>Redirecting you to the app</p>
        
        <div className={styles.spinner}></div>
        
        <div className={styles.fallback}>
          <p>App not opening?</p>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = 'trackvest://auth/callback' + window.location.search
              }
            }}
            className={styles.button}
          >
            Open App Manually
          </button>
          <p className={styles.downloadText}>
            Don't have the app? Download it from the <a href="/">App Store</a> or <a href="/">Google Play</a>
          </p>
        </div>
      </div>
    </div>
  )
}
