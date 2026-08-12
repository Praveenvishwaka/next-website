'use client'

import { useEffect, useRef } from 'react'
import { registerTestGreeting } from './CustomGreeting'

export default function TestGreetingElement({ name = 'World' }: { name?: string }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const mountedRef = useRef(false)

  useEffect(() => {
    registerTestGreeting()
    const host = hostRef.current
    if (!host || mountedRef.current) return
    mountedRef.current = true

    const el = document.createElement('test-greeting')
    el.setAttribute('name', name)
    el.setAttribute('data-testid', 'custom-element-greeting')
    host.appendChild(el)
  }, [name])

  return <div ref={hostRef} data-testid="custom-greeting-host" />
}
