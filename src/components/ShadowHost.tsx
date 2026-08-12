'use client'

import { useEffect, useRef } from 'react'

type ShadowHostProps = {
  mode?: 'open' | 'closed'
  testId?: string
  variant?: 'form' | 'buttons' | 'slots'
}

export default function ShadowHost({ mode = 'open', testId = 'shadow-host', variant = 'form' }: ShadowHostProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const attachedRef = useRef(false)

  useEffect(() => {
    const host = hostRef.current
    // Closed roots hide shadowRoot, so Strict Mode would call attachShadow twice and crash.
    if (!host || attachedRef.current || host.shadowRoot) return
    attachedRef.current = true

    if (variant === 'slots') {
      const header = document.createElement('h4')
      header.slot = 'header'
      header.textContent = 'Slotted Header'
      const body = document.createElement('p')
      body.textContent = 'Default slotted content passed from light DOM.'
      host.append(header, body)
    }

    const shadow = host.attachShadow({ mode })

    if (variant === 'buttons') {
      shadow.innerHTML = `
        <style>
          :host { display: block; }
          .wrap { padding: 1rem; background: #1a2e1a; border-radius: 8px; font-family: system-ui, sans-serif; color: #e2e8f0; }
          button { margin: 0.25rem; padding: 0.5rem 1rem; border-radius: 6px; border: 1px solid #4ade80; background: #166534; color: white; cursor: pointer; }
          button:hover { background: #15803d; }
          #shadow-counter { margin-top: 0.5rem; font-size: 0.9rem; }
        </style>
        <div class="wrap" data-testid="shadow-buttons-wrap">
          <p data-testid="shadow-buttons-label">Shadow DOM buttons (mode: ${mode})</p>
          <button type="button" data-testid="shadow-btn-increment" id="shadow-inc">Increment</button>
          <button type="button" data-testid="shadow-btn-reset" id="shadow-reset">Reset</button>
          <p id="shadow-counter" data-testid="shadow-counter">Count: 0</p>
        </div>
      `
      let count = 0
      const counter = shadow.getElementById('shadow-counter')
      shadow.getElementById('shadow-inc')?.addEventListener('click', () => {
        count++
        if (counter) counter.textContent = `Count: ${count}`
      })
      shadow.getElementById('shadow-reset')?.addEventListener('click', () => {
        count = 0
        if (counter) counter.textContent = `Count: ${count}`
      })
      return
    }

    if (variant === 'slots') {
      shadow.innerHTML = `
        <style>
          :host { display: block; }
          .card { padding: 1rem; background: #2d1f3d; border-radius: 8px; color: #f3e8ff; font-family: system-ui, sans-serif; }
          ::slotted(h4) { color: #c084fc; margin: 0 0 0.5rem; }
          ::slotted(p) { margin: 0; font-size: 0.9rem; }
          .footer { margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid #6b21a8; font-size: 0.85rem; color: #d8b4fe; }
        </style>
        <div class="card" data-testid="shadow-slots-card">
          <slot name="header"></slot>
          <slot></slot>
          <div class="footer" data-testid="shadow-slots-footer">Shadow slot footer</div>
        </div>
      `
      return
    }

    shadow.innerHTML = `
      <style>
        :host { display: block; }
        .form-wrap { padding: 1rem; background: #1e3a5f; border-radius: 8px; font-family: system-ui, sans-serif; color: #e2e8f0; }
        label { display: block; margin-bottom: 0.25rem; font-size: 0.85rem; color: #94a3b8; }
        input, textarea, select { width: 100%; padding: 0.5rem; margin-bottom: 0.75rem; border-radius: 6px; border: 1px solid #475569; background: #0f172a; color: #f1f5f9; box-sizing: border-box; }
        button { padding: 0.5rem 1rem; border-radius: 6px; border: none; background: #0284c7; color: white; cursor: pointer; }
        #shadow-output { margin-top: 0.5rem; font-size: 0.85rem; color: #7dd3fc; }
      </style>
      <form class="form-wrap" data-testid="shadow-form" id="shadow-form">
        <p data-testid="shadow-form-label">Form inside Shadow DOM (mode: ${mode})</p>
        <label for="shadow-name">Name</label>
        <input type="text" id="shadow-name" name="shadowName" data-testid="shadow-name" placeholder="Enter name" />
        <label for="shadow-email">Email</label>
        <input type="email" id="shadow-email" name="shadowEmail" data-testid="shadow-email" placeholder="email@example.com" />
        <label for="shadow-notes">Notes</label>
        <textarea id="shadow-notes" name="shadowNotes" rows="2" data-testid="shadow-notes"></textarea>
        <label for="shadow-priority">Priority</label>
        <select id="shadow-priority" name="shadowPriority" data-testid="shadow-priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" data-testid="shadow-submit">Shadow Submit</button>
        <output id="shadow-output" data-testid="shadow-output"></output>
      </form>
    `

    shadow.getElementById('shadow-form')?.addEventListener('submit', (e) => {
      e.preventDefault()
      const form = e.target as HTMLFormElement
      const data = new FormData(form)
      const output = shadow.getElementById('shadow-output')
      if (output) {
        output.textContent = `Submitted: ${data.get('shadowName')} <${data.get('shadowEmail')}>`
      }
    })
  }, [mode, variant])

  return <div ref={hostRef} className="shadow-host-box" data-testid={testId} />
}
