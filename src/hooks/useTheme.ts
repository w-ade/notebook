import { useCallback, useState } from 'react'

export type Theme = 'light' | 'dark'

function current(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

/**
 * Theme lives on <html data-theme>, resolved before paint by the inline script
 * in index.html (no flash). This hook flips it and persists the choice.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(current)

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* storage unavailable — fine, just don't persist */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
