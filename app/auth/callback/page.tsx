'use client'

import { useEffect } from 'react'
import styles from './callback.module.css'

export default function AuthCallback() {
  useEffect(() => {
    // Try to open the app via deep link
    window.location.href = 'trackvest://auth/callback' + window.location.search
    
    // If deep link doesn't work, show the page
    setTimeout(() => {
      // Page will show after 2 seconds if app didn't open
    }, 2000)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Opening TrackVest...</h1>
        <p className={styles.subtitle}>Redirecting you to the app</p>
        
        <div className={styles.spinner}></div>
        
        <div className={styles.fallback}>
          <p>App not opening?</p>
          <a href="trackvest://auth/callback" className={styles.button}>
            Open App Manually
          </a>
          <p className={styles.downloadText}>
            Don't have the app? Download it from the <a href="/">App Store</a> or <a href="/">Google Play</a>
          </p>
        </div>
      </div>
    </div>
  )
}
