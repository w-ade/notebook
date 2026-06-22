import type { View } from '../App'
import { IconPanelOpen, IconPanelClose, IconGlobe, IconTheme } from './icons'

interface Props {
  view: View
  settingsOpen: boolean
  onToggleView: () => void
  onToggleTheme: () => void
  onToggleSettings: () => void
}

export default function TopBar({
  view,
  settingsOpen,
  onToggleView,
  onToggleTheme,
  onToggleSettings,
}: Props) {
  const note = view === 'notebook'
  return (
    <div className="bar">
      <div className="lights">
        <i className="r" />
        <i className="y" />
        <i className="g" />
      </div>

      <div className="crumb">
        Notebook
        {note && (
          <>
            <span>/</span>
            <b>Zustand</b>
          </>
        )}
      </div>

      <div className="barR">
        <button
          className="iconbtn"
          onClick={onToggleView}
          title={note ? 'Back to Agent' : 'Open Notebook'}
          aria-label={note ? 'Back to Agent' : 'Open Notebook'}
        >
          {note ? <IconPanelClose /> : <IconPanelOpen />}
        </button>

        <button className="iconbtn" title="Constellation" aria-label="Constellation">
          <IconGlobe />
        </button>

        <button
          className="iconbtn"
          onClick={onToggleTheme}
          title="Toggle light or dark"
          aria-label="Toggle light or dark"
        >
          <IconTheme />
        </button>

        <button
          className={'avatar' + (settingsOpen ? ' active' : '')}
          onClick={onToggleSettings}
          title={settingsOpen ? 'Close settings' : 'Settings'}
          aria-label="Settings"
        />
      </div>
    </div>
  )
}
