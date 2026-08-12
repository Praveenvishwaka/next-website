'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Buttons() {
  const [clickCount, setClickCount] = useState(0)
  const [lastAction, setLastAction] = useState('No action yet')

  return (
    <>
      <h1 className="page-title" data-testid="page-buttons">Buttons &amp; Links</h1>
      <p className="page-desc">Button types, states, and every link variant for interaction testing.</p>

      <section className="section">
        <h2>Button Types</h2>
        <div className="btn-row">
          <button type="button" className="btn" data-testid="btn-default" onClick={() => { setClickCount((c) => c + 1); setLastAction('Default clicked') }}>
            Default Button
          </button>
          <button type="button" className="btn btn-primary" data-testid="btn-primary" onClick={() => setLastAction('Primary clicked')}>
            Primary
          </button>
          <button type="button" className="btn btn-success" data-testid="btn-success" onClick={() => setLastAction('Success clicked')}>
            Success
          </button>
          <button type="button" className="btn btn-danger" data-testid="btn-danger" onClick={() => setLastAction('Danger clicked')}>
            Danger
          </button>
          <button type="button" className="btn btn-ghost" data-testid="btn-ghost" onClick={() => setLastAction('Ghost clicked')}>
            Ghost
          </button>
          <button type="button" className="btn" disabled data-testid="btn-disabled">
            Disabled
          </button>
          <button type="button" className="btn" aria-pressed="true" data-testid="btn-pressed">
            Toggle (pressed)
          </button>
          <button type="button" className="btn" aria-expanded="false" data-testid="btn-expandable">
            Expandable
          </button>
        </div>
        <div className="status-bar" data-testid="button-status">
          Clicks: {clickCount} · Last: {lastAction}
        </div>
      </section>

      <section className="section">
        <h2>Input Buttons</h2>
        <div className="btn-row">
          <input type="button" value="Input type=button" className="btn" data-testid="input-button" onClick={() => setLastAction('Input button')} />
          <input type="submit" value="Input type=submit" className="btn btn-primary" data-testid="input-submit" />
          <input type="reset" value="Input type=reset" className="btn" data-testid="input-reset" />
          <input type="image" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='30'%3E%3Crect fill='%230284c7' width='80' height='30' rx='4'/%3E%3Ctext x='8' y='20' fill='white' font-size='12'%3EImage Btn%3C/text%3E%3C/svg%3E" alt="Image button" data-testid="input-image" />
        </div>
      </section>

      <section className="section">
        <h2>Links</h2>
        <ul>
          <li><Link href="/" data-testid="link-internal-home">Internal SPA link (Home)</Link></li>
          <li><Link href="/forms" data-testid="link-internal-forms">Internal SPA link (Forms)</Link></li>
          <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" data-testid="link-external">External link (example.com)</a></li>
          <li><a href="mailto:test@example.com" data-testid="link-mailto">mailto:test@example.com</a></li>
          <li><a href="tel:+15550100" data-testid="link-tel">tel:+15550100</a></li>
          <li><a href="#anchor-section" data-testid="link-anchor">Anchor link (#anchor-section)</a></li>
          <li><a href="/iframe-same-origin.html" data-testid="link-same-origin-html">Same-origin static HTML</a></li>
          <li><a role="button" href="#" onClick={(e) => { e.preventDefault(); setLastAction('Role button link') }} data-testid="link-role-button">Link with role=button</a></li>
          <li><span tabIndex={0} role="link" data-testid="span-role-link" onKeyDown={(e) => e.key === 'Enter' && setLastAction('Span role link')}>Span with role=link (keyboard)</span></li>
        </ul>
      </section>

      <section className="section" id="anchor-section" data-testid="anchor-section">
        <h2>Anchor Target Section</h2>
        <p>You navigated here via the anchor link above.</p>
      </section>
    </>
  )
}
