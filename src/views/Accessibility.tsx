'use client'

import { useState } from 'react'

export default function Accessibility() {
  const [liveMessage, setLiveMessage] = useState('')

  return (
    <>
      <h1 className="page-title" data-testid="page-accessibility">Accessibility</h1>
      <p className="page-desc">ARIA attributes, landmarks, live regions, and focus management.</p>

      <section className="section" role="region" aria-labelledby="landmarks-heading">
        <h2 id="landmarks-heading">Landmarks</h2>
        <header data-testid="landmark-header" style={{ padding: '0.5rem', background: 'var(--bg)', borderRadius: '6px', marginBottom: '0.5rem' }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>&lt;header&gt; landmark</p>
        </header>
        <nav aria-label="Breadcrumb" data-testid="landmark-nav">
          <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
            <li><a href="/">Home</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Accessibility</li>
          </ol>
        </nav>
        <aside data-testid="landmark-aside" style={{ marginTop: '0.75rem', padding: '0.75rem', background: 'var(--bg)', borderRadius: '6px', fontSize: '0.9rem' }}>
          &lt;aside&gt; complementary content
        </aside>
      </section>

      <section className="section">
        <h2>ARIA Roles &amp; States</h2>
        <div role="alert" data-testid="aria-alert" style={{ padding: '0.75rem', background: '#451a1a', borderRadius: '6px', marginBottom: '0.75rem' }}>
          role=&quot;alert&quot; — important message
        </div>
        <div role="status" aria-live="polite" data-testid="aria-live-region" className="status-bar">
          {liveMessage || 'Live region (polite) — click button to update'}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          data-testid="update-live-region"
          style={{ marginTop: '0.5rem' }}
          onClick={() => setLiveMessage(`Updated at ${new Date().toLocaleTimeString()}`)}
        >
          Update Live Region
        </button>
        <div style={{ marginTop: '1rem' }}>
          <span role="checkbox" aria-checked="false" tabIndex={0} data-testid="aria-checkbox" style={{ cursor: 'pointer' }}>
            ☐ ARIA checkbox (unchecked)
          </span>
        </div>
        <div role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} data-testid="aria-progressbar" style={{ marginTop: '1rem', height: '8px', background: 'var(--bg)', borderRadius: '4px' }}>
          <div style={{ width: '65%', height: '100%', background: 'var(--accent)', borderRadius: '4px' }} />
        </div>
      </section>

      <section className="section">
        <h2>Focus Order</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tab through these elements in order:</p>
        <div className="btn-row">
          <button type="button" className="btn" tabIndex={1} data-testid="focus-1">Focus 1</button>
          <button type="button" className="btn" tabIndex={2} data-testid="focus-2">Focus 2</button>
          <button type="button" className="btn" tabIndex={3} data-testid="focus-3">Focus 3</button>
          <button type="button" className="btn" tabIndex={-1} data-testid="focus-skip">Skipped (tabIndex=-1)</button>
        </div>
      </section>

      <section className="section">
        <h2>Screen Reader Only Text</h2>
        <button type="button" className="btn" data-testid="sr-button">
          <span className="sr-only">Screen reader only label: </span>
          Visible label
        </button>
        <label style={{ display: 'block', marginTop: '1rem' }}>
          <span className="sr-only">Hidden label for input</span>
          <input type="text" aria-label="Explicit aria-label input" data-testid="aria-label-input" placeholder="Has aria-label" />
        </label>
      </section>

      <section className="section">
        <h2>Describedby &amp; Labelledby</h2>
        <p id="input-desc" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>This description is linked via aria-describedby.</p>
        <input
          type="text"
          aria-labelledby="desc-label"
          aria-describedby="input-desc"
          data-testid="describedby-input"
          placeholder="Described input"
        />
        <span id="desc-label" className="sr-only">Labelled input</span>
      </section>
    </>
  )
}
