import { useState } from 'react'
import TopBar from './components/TopBar'
import AgentView from './components/AgentView'
import NotebookView from './components/NotebookView'
import { useTheme } from './hooks/useTheme'

export type View = 'agent' | 'notebook'

export default function App() {
  const [view, setView] = useState<View>('agent')
  const { toggle } = useTheme()

  return (
    <div className="win">
      <TopBar
        view={view}
        onToggleView={() => setView((v) => (v === 'agent' ? 'notebook' : 'agent'))}
        onToggleTheme={toggle}
      />

      {/* fixed stage — views slide through it (01 horizontal slide) */}
      <div className={'body' + (view === 'notebook' ? ' is-note' : '')}>
        <div className="stage">
          <AgentView />
          <NotebookView />
        </div>
      </div>
    </div>
  )
}
