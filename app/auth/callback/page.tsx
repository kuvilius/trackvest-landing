'use client'

import { useEffect, useState } from 'react'
import styles from './callback.module.css'

export default function AuthCallback() {
  const [mounted, setMounted] = useState(false)
  const [debugInfo, setDebugInfo] = useState<string>('')
  
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
    
    // Log for debugging
    const debug = `Code: ${code}, Type: ${type}, Error: ${error}`
    console.log('Callback params:', { code, type, error, errorDescription })
    setDebugInfo(debug)
    
    if (error) {
      console.error('Auth error:', error, errorDescription)
      return
    }
    
    if (!code) {
      console.error('No code received')
      return
    }
    
    // Build the deep link with all parameters
    const deepLink = `trackvest://auth/callback?code=${code}${type ? `&type=${type}` : ''}`
    
    // Try to open the app via deep link
    console.log('Opening deep link:', deepLink)
    
    // Try multiple methods to open the deep link
    const attemptDeepLink = () => {
      // Method 1: Direct assignment
      window.location.href = deepLink
      
      // Method 2: Create invisible iframe (backup)
      setTimeout(() => {
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = deepLink
        document.body.appendChild(iframe)
        setTimeout(() => document.body.removeChild(iframe), 1000)
      }, 500)
    }
    
    attemptDeepLink()
  }, [mounted])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Opening TrackVest...</h1>
        <p className={styles.subtitle}>Redirecting you to the app</p>
        
        <div className={styles.spinner}></div>
        
        {debugInfo && (
          <p style={{ fontSize: '12px', color: '#666', marginTop: '20px' }}>
            {debugInfo}
          </p>
        )}
        
        <div className={styles.fallback}>
          <p>App not opening?</p>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                const params = new URLSearchParams(window.location.search)
                const code = params.get('code')
                const type = params.get('type')
                const deepLink = `trackvest://auth/callback?code=${code}${type ? `&type=${type}` : ''}`
                window.location.href = deepLink
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
