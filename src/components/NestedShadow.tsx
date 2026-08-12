'use client'

import { useEffect, useRef } from 'react'

export default function NestedShadow() {
  const outerRef = useRef<HTMLDivElement>(null)
  const attachedRef = useRef(false)

  useEffect(() => {
    const el = outerRef.current
    if (!el || attachedRef.current || el.shadowRoot) return
    attachedRef.current = true

    const outer = el.attachShadow({ mode: 'open' })
    outer.innerHTML = `
      <style>
        .outer { padding: 1rem; background: #312e81; border-radius: 8px; color: #e0e7ff; font-family: system-ui, sans-serif; }
        #inner-host { margin-top: 0.75rem; }
      </style>
      <div class="outer" data-testid="outer-shadow-wrap">
        <p data-testid="outer-shadow-label">Outer shadow host</p>
        <div id="inner-host"></div>
      </div>
    `
    const innerHost = outer.getElementById('inner-host')
    if (innerHost) {
      const inner = innerHost.attachShadow({ mode: 'open' })
      inner.innerHTML = `
        <style>
          .inner { padding: 0.75rem; background: #4338ca; border-radius: 6px; }
          button { padding: 0.4rem 0.8rem; border: none; background: #818cf8; color: white; border-radius: 4px; cursor: pointer; }
        </style>
        <div class="inner" data-testid="inner-shadow-wrap">
          <p data-testid="inner-shadow-label">Inner nested shadow</p>
          <button type="button" data-testid="inner-shadow-btn">Inner Button</button>
        </div>
      `
    }
  }, [])

  return <div ref={outerRef} id="nested-shadow-outer" data-testid="nested-shadow-outer" className="shadow-host-box" />
}
