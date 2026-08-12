'use client'

import ShadowHost from '../components/ShadowHost'
import NestedShadow from '../components/NestedShadow'
import TestGreetingElement from '../components/TestGreetingElement'

export default function ShadowDom() {
  return (
    <>
      <h1 className="page-title" data-testid="page-shadow-dom">Shadow DOM</h1>
      <p className="page-desc">
        Open and closed shadow roots with forms, buttons, and slot composition.
      </p>

      <section className="section">
        <h2>Open Shadow Root — Form</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Elements inside open shadow roots are accessible via <code>element.shadowRoot</code>.
        </p>
        <ShadowHost mode="open" testId="shadow-host-open-form" variant="form" />
      </section>

      <section className="section">
        <h2>Open Shadow Root — Buttons</h2>
        <ShadowHost mode="open" testId="shadow-host-open-buttons" variant="buttons" />
      </section>

      <section className="section">
        <h2>Closed Shadow Root — Form</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Closed mode: <code>element.shadowRoot</code> returns <code>null</code>.
        </p>
        <ShadowHost mode="closed" testId="shadow-host-closed-form" variant="form" />
      </section>

      <section className="section">
        <h2>Shadow DOM with Slots</h2>
        <ShadowHost mode="open" testId="shadow-host-slots" variant="slots" />
      </section>

      <section className="section">
        <h2>Nested Shadow Hosts</h2>
        <NestedShadow />
      </section>

      <section className="section">
        <h2>Custom Element with Shadow DOM</h2>
        <TestGreetingElement name="Playwright" />
      </section>
    </>
  )
}
