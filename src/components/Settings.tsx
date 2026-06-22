import { IconChevronRight } from './icons'

interface Props {
  open: boolean
}

function Row({ k, v, chev }: { k: string; v: string; chev?: boolean }) {
  return (
    <div className="srow">
      <span className="rk">{k}</span>
      <span className="rv">
        {v}
        {chev && <IconChevronRight />}
      </span>
    </div>
  )
}

/**
 * Settings morphs out of the avatar (transform-origin: top right) and is
 * dismissed by clicking the avatar again — see App / TopBar.
 */
export default function Settings({ open }: Props) {
  return (
    <div className={'settings' + (open ? ' open' : '')}>
      <div className="sheet">
        <div className="shead">
          <b>Settings</b>
        </div>

        <div className="sbody">
          <div className="grp">
            <div className="glabel">Account</div>
            <div className="acc">
              <span className="av" />
              <div>
                <div className="nm">Briana Wade</div>
                <div className="sub">wa-de.org</div>
              </div>
            </div>
          </div>

          <div className="grp">
            <div className="glabel">Vault</div>
            <Row k="Save notes to" v="Logseq" chev />
            <Row k="Location" v="~/Brain" chev />
          </div>

          <div className="grp">
            <div className="glabel">Agent</div>
            <Row k="Model" v="Opus 4.8" chev />
            <Row k="Explain from" v="Assume basics" chev />
          </div>

          <div className="grp">
            <div className="glabel">Appearance</div>
            <div className="srow">
              <span className="rk">Theme</span>
              <span className="seg">
                <span className="on">Light</span>
                <span>Dark</span>
                <span>System</span>
              </span>
            </div>
          </div>

          <div className="grp">
            <div className="glabel">About</div>
            <Row k="Version" v="0.1.0" />
            <Row k="Source" v="w-ade/notebook" chev />
          </div>
        </div>
      </div>
    </div>
  )
}
