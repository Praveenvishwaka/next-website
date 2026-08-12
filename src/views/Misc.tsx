'use client'

import { useState } from 'react'

export default function Misc() {
  const [calcValue, setCalcValue] = useState(10)

  return (
    <>
      <h1 className="page-title" data-testid="page-misc">Misc Elements</h1>
      <p className="page-desc">Progress, meter, output, semantic text, maps, and more.</p>

      <section className="section">
        <h2>Progress &amp; Meter</h2>
        <label htmlFor="progress-bar">Progress (70%)</label>
        <progress id="progress-bar" value={70} max={100} data-testid="progress-bar" style={{ width: '100%', marginBottom: '1rem' }} />
        <label htmlFor="meter-element">Meter (0.6)</label>
        <meter id="meter-element" value={0.6} min={0} max={1} low={0.3} high={0.7} optimum={0.8} data-testid="meter-element" style={{ width: '100%' }} />
      </section>

      <section className="section">
        <h2>Output &amp; Calculator</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          data-testid="calc-form"
          style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <input
            type="number"
            value={calcValue}
            onChange={(e) => setCalcValue(Number(e.target.value))}
            data-testid="calc-input"
            aria-label="Number input"
          />
          <span>× 2 =</span>
          <output htmlFor="calc-input" data-testid="calc-output">{calcValue * 2}</output>
        </form>
      </section>

      <section className="section">
        <h2>Semantic Text</h2>
        <p>
          The <abbr title="HyperText Markup Language" data-testid="abbr-html">HTML</abbr> spec defines many elements.
        </p>
        <p>
          <mark data-testid="mark-highlight">Highlighted text</mark> with <strong>strong</strong>, <em>emphasis</em>, <small>small</small>, <del>deleted</del>, and <ins>inserted</ins>.
        </p>
        <p><s>Strikethrough</s> · <u>Underlined</u> · <sub>sub</sub> · <sup>sup</sup></p>
        <p><time dateTime="2026-06-11" data-testid="time-element">June 11, 2026</time></p>
        <p><var data-testid="var-element">x</var> = <code data-testid="code-inline">y + 1</code></p>
        <pre data-testid="pre-block">{`function greet(name) {
  return \`Hello, \${name}!\`;
}`}</pre>
        <p><kbd data-testid="kbd-element">Ctrl</kbd> + <kbd>C</kbd></p>
        <p><samp data-testid="samp-element">Program output sample</samp></p>
      </section>

      <section className="section">
        <h2>Address &amp; Blockquote</h2>
        <address data-testid="address-block">
          Test Playground<br />
          123 QA Street<br />
          <a href="mailto:qa@example.com">qa@example.com</a>
        </address>
        <blockquote cite="https://example.com" data-testid="blockquote">
          <p>Quality is not an act, it is a habit.</p>
        </blockquote>
      </section>

      <section className="section">
        <h2>HR &amp; BR</h2>
        <p>Line one</p>
        <hr data-testid="hr-element" />
        <p>Line after horizontal rule<br data-testid="br-element" />Line after break</p>
      </section>

      <section className="section">
        <h2>Fieldset with nested form controls</h2>
        <fieldset data-testid="misc-fieldset">
          <legend>Preferences</legend>
          <label><input type="checkbox" name="pref-dark" data-testid="pref-dark" /> Dark mode</label><br />
          <label><input type="checkbox" name="pref-notify" data-testid="pref-notify" defaultChecked /> Notifications</label>
        </fieldset>
      </section>

      <section className="section">
        <h2>Map (image map)</h2>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100'%3E%3Crect fill='%23334155' width='200' height='100'/%3E%3Ctext x='30' y='55' fill='%23f1f5f9'%3EImage Map%3C/text%3E%3C/svg%3E"
          alt="Image map test"
          useMap="#test-map"
          data-testid="img-map"
        />
        <map name="test-map" data-testid="image-map">
          <area shape="rect" coords="0,0,100,100" href="#" alt="Left area" data-testid="map-area-left" />
          <area shape="rect" coords="100,0,200,100" href="#" alt="Right area" data-testid="map-area-right" />
        </map>
      </section>

      <section className="section">
        <h2>Iframe (inline reference)</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Quick iframe on misc page for cross-page testing.</p>
        <iframe title="Misc iframe" src="/iframe-nested.html" width="100%" height="80" className="iframe-box" data-testid="misc-iframe" />
      </section>
    </>
  )
}
