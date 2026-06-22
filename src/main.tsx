import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

// When running inside Electron, the native window IS the frame — let our
// content fill it and hand the traffic lights back to macOS.
if (navigator.userAgent.includes('Electron')) {
  document.documentElement.setAttribute('data-electron', '')
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
