import { conversation } from '../data'

export default function AgentView() {
  return (
    <div className="view chat">
      <div className="stream">
        {conversation.map((m, i) =>
          'kind' in m ? (
            <ol className="qs" key={i}>
              {m.items.map((q, j) => (
                <li key={j}>{q}</li>
              ))}
            </ol>
          ) : (
            <div className={m.role} key={i} style={m.mt ? { marginTop: 22 } : undefined}>
              {m.text}
            </div>
          ),
        )}
      </div>

      <div className="composer">
        <span className="caret" />
        <span className="ph">Press ⌘ to talk or start typing…</span>
      </div>
    </div>
  )
}
