import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import AgentView from './components/AgentView'
import NotebookView from './components/NotebookView'
import Settings from './components/Settings'
import { useTheme } from './hooks/useTheme'

export type View = 'agent' | 'notebook'

export default function App() {
  const [view, setView] = useState<View>('agent')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const { toggle } = useTheme()

  // Esc also closes Settings — but the avatar is the primary toggle.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSettingsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="win">
      <TopBar
        view={view}
        settingsOpen={settingsOpen}
        onToggleView={() => setView((v) => (v === 'agent' ? 'notebook' : 'agent'))}
        onToggleTheme={toggle}
        onToggleSettings={() => setSettingsOpen((o) => !o)}
      />

      {/* fixed stage — views slide through it (01 horizontal slide) */}
      <div className={'body' + (view === 'notebook' ? ' is-note' : '')}>
        <div className="stage">
          <AgentView />
          <NotebookView />
        </div>

        {/* Settings morphs out of the avatar (top-right) */}
        <Settings open={settingsOpen} />
      </div>
    </div>
  )
}
