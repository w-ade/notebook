import { note } from '../data'
import { IconCheck, IconCube, IconChevron } from './icons'

export default function NotebookView() {
  return (
    <div className="view panel">
      <div className="panel-inner">
        {/* 1 — Source */}
        <div className="step done">
          <div className="head">
            <span className="n">1</span>
            <span className="t">Source</span>
            <span className="tick on">
              <IconCheck />
            </span>
          </div>
          <div className="src">{note.source}</div>
        </div>

        {/* 2 — Breakdown (Concept folds into the header, Frontier into "The new part") */}
        <div className="step active">
          <div className="head">
            <span className="n">2</span>
            <span className="t">Breakdown</span>
            <span className="tick on">
              <IconCheck />
            </span>
          </div>
          <div className="card">
            <span className="ico" aria-hidden="true">
              <IconCube />
            </span>
            <span className="name">{note.concept}</span>

            <div className="cols">
              <div className="field">
                <h4>What it is</h4>
                <p>{note.whatItIs}</p>
                <h4>The new part</h4>
                <p>{note.theNewPart}</p>
              </div>

              <div>
                {note.controls.map((c, i) => (
                  <div className="ctl" key={i}>
                    <label>{c.label}</label>
                    <div className="select">
                      <span className="lab">
                        <span className="dot" />
                        {c.value}
                      </span>
                      <span className="chev">
                        <IconChevron />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 — Connections (real graph = the global Constellation) */}
        <div className="step">
          <div className="head">
            <span className="n">3</span>
            <span className="t">Connections</span>
            <span className="tick off" />
          </div>
        </div>
      </div>
    </div>
  )
}
