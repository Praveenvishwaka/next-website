'use client'

import { useState } from 'react'

const srcdocContent = `<!DOCTYPE html><html><head><style>body{font-family:system-ui;padding:1rem;background:#fef3c7;margin:0}button{padding:0.5rem 1rem}input{display:block;margin-top:0.5rem;padding:0.5rem;width:100%;box-sizing:border-box}</style></head><body><p data-testid="srcdoc-label">Srcdoc iframe content</p><input type="text" data-testid="srcdoc-input" placeholder="Srcdoc input" /><button type="button" data-testid="srcdoc-btn" onclick="this.textContent='Clicked!'">Srcdoc Button</button></body></html>`

export default function Iframes() {
  const [iframeKey, setIframeKey] = useState(0)

  return (
    <>
      <h1 className="page-title" data-testid="page-iframes">Iframes</h1>
      <p className="page-desc">
        Same-origin, nested, srcdoc, cross-origin, and shadow-DOM iframes for frame-switching tests.
      </p>

      <section className="section">
        <h2>Same-Origin Iframe</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Loaded from <code>/iframe-same-origin.html</code> — includes nested iframe inside.
        </p>
        <iframe
          title="Same-origin iframe"
          src="/iframe-same-origin.html"
          className="iframe-box"
          width="100%"
          height="380"
          data-testid="iframe-same-origin"
          id="iframe-same-origin"
        />
      </section>

      <section className="section">
        <h2>Srcdoc Iframe</h2>
        <iframe
          title="Srcdoc iframe"
          srcDoc={srcdocContent}
          className="iframe-box"
          width="100%"
          height="160"
          data-testid="iframe-srcdoc"
          sandbox="allow-scripts"
        />
      </section>

      <section className="section">
        <h2>Iframe with Shadow DOM inside</h2>
        <iframe
          title="Iframe shadow DOM"
          src="/iframe-shadow.html"
          className="iframe-box"
          width="100%"
          height="220"
          data-testid="iframe-shadow"
        />
      </section>

      <section className="section">
        <h2>Cross-Origin Iframe</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          External domain — automation tools cannot access cross-origin frame DOM.
        </p>
        <iframe
          title="Cross-origin iframe"
          src="https://example.com"
          className="iframe-box"
          width="100%"
          height="300"
          data-testid="iframe-cross-origin"
        />
      </section>

      <section className="section">
        <h2>Dynamic Iframe (reload)</h2>
        <div className="btn-row">
          <button type="button" className="btn btn-primary" data-testid="reload-iframe-btn" onClick={() => setIframeKey((k) => k + 1)}>
            Reload Iframe
          </button>
        </div>
        <iframe
          key={iframeKey}
          title="Reloadable iframe"
          src="/iframe-nested.html"
          className="iframe-box"
          width="100%"
          height="100"
          data-testid="iframe-reloadable"
          style={{ marginTop: '0.75rem' }}
        />
      </section>

      <section className="section">
        <h2>Object &amp; Embed (legacy embeds)</h2>
        <object
          data="/iframe-nested.html"
          type="text/html"
          width="100%"
          height="80"
          className="iframe-box"
          data-testid="object-embed"
        >
          <p>Object fallback</p>
        </object>
      </section>
    </>
  )
}
