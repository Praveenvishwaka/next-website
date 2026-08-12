'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sections = [
  { to: '/forms', title: 'Forms & Inputs', desc: 'All input types, textarea, select, validation, file upload' },
  { to: '/buttons', title: 'Buttons & Links', desc: 'Button variants, links, download, mailto, router links' },
  { to: '/iframes', title: 'Iframes', desc: 'Same-origin, nested, srcdoc, cross-origin, shadow in iframe' },
  { to: '/shadow-dom', title: 'Shadow DOM', desc: 'Open/closed shadow roots, forms, buttons, slots' },
  { to: '/media', title: 'Media & Graphics', desc: 'Images, video, audio, canvas, SVG, picture' },
  { to: '/tables', title: 'Tables & Lists', desc: 'Data tables, ul/ol/dl, definition lists' },
  { to: '/interactive', title: 'Interactive', desc: 'Dialogs, tabs, drag-drop, contenteditable, details' },
  { to: '/accessibility', title: 'Accessibility', desc: 'ARIA roles, landmarks, live regions, focus' },
  { to: '/misc', title: 'Misc Elements', desc: 'Progress, meter, output, abbr, blockquote, custom elements' },
]

export default function Home() {
  const pathname = usePathname() ?? '/'

  return (
    <>
      <h1 className="page-title" data-testid="page-home">React Test Playground</h1>
      <p className="page-desc">
        A comprehensive SPA for testing automation tools, browser extensions, accessibility audits,
        and manual QA. Navigate using the sidebar — routing is client-side (no full page reloads).
      </p>

      <section className="section" aria-labelledby="quick-stats">
        <h2 id="quick-stats">Quick Reference</h2>
        <ul className="tag-list" data-testid="element-tags">
          {[
            'iframe', 'shadow DOM', 'form', 'button', 'textarea', 'input', 'select',
            'checkbox', 'radio', 'dialog', 'table', 'canvas', 'svg', 'video', 'audio',
            'contenteditable', 'drag-drop', 'ARIA', 'custom element', 'nested iframe',
          ].map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="sections-grid">
        <h2 id="sections-grid">Test Sections</h2>
        <div className="grid-2">
          {sections.map(({ to, title, desc }) => (
            <article key={to} data-testid={`card-${to.slice(1)}`}>
              <h3>
                <Link href={to} data-testid={`link-${to.slice(1)}`}>{title}</Link>
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" data-testid="spa-indicator">
        <h2>SPA Navigation Test</h2>
        <p>
          Current route: <code id="current-path" data-testid="current-path">{pathname}</code>
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          This value updates without a full page reload when you navigate.
        </p>
        <div className="btn-row">
          <Link href="/forms" className="btn btn-primary" data-testid="home-nav-forms">Go to Forms</Link>
          <Link href="/iframes" className="btn" data-testid="home-nav-iframes">Go to Iframes</Link>
          <Link href="/shadow-dom" className="btn" data-testid="home-nav-shadow">Go to Shadow DOM</Link>
        </div>
      </section>
    </>
  )
}
