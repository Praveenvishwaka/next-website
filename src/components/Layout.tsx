'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/forms', label: 'Forms & Inputs' },
  { to: '/buttons', label: 'Buttons & Links' },
  { to: '/iframes', label: 'Iframes' },
  { to: '/shadow-dom', label: 'Shadow DOM' },
  { to: '/media', label: 'Media & Graphics' },
  { to: '/tables', label: 'Tables & Lists' },
  { to: '/interactive', label: 'Interactive' },
  { to: '/accessibility', label: 'Accessibility' },
  { to: '/misc', label: 'Misc Elements' },
]

function isActive(pathname: string, to: string, end?: boolean) {
  if (end || to === '/') return pathname === to
  return pathname === to || pathname.startsWith(`${to}/`)
}

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/'

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Main navigation">
        <div className="sidebar-header">
          <h1>Test Playground</h1>
          <p>SPA navigation · All elements</p>
        </div>
        <nav>
          <ul className="nav-list">
            {navItems.map(({ to, label, end }) => (
              <li key={to}>
                <Link
                  href={to}
                  className={isActive(pathname, to, end) ? 'active' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="main-content" id="main-content">
        {children}
      </main>
    </div>
  )
}
