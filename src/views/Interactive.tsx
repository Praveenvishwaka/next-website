'use client'

import { useRef, useState } from 'react'

export default function Interactive() {
  const [tab, setTab] = useState<'tab1' | 'tab2' | 'tab3'>('tab1')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dragStatus, setDragStatus] = useState('Drag items between zones')
  const [editableContent, setEditableContent] = useState('Edit this content directly.')
  const dialogRef = useRef<HTMLDialogElement>(null)

  function openDialog() {
    dialogRef.current?.showModal()
    setDialogOpen(true)
  }

  function closeDialog() {
    dialogRef.current?.close()
    setDialogOpen(false)
  }

  return (
    <>
      <h1 className="page-title" data-testid="page-interactive">Interactive Elements</h1>
      <p className="page-desc">Dialogs, tabs, drag-and-drop, contenteditable, and disclosure widgets.</p>

      <section className="section">
        <h2>Dialog (Modal)</h2>
        <button type="button" className="btn btn-primary" data-testid="open-dialog-btn" onClick={openDialog}>
          Open Dialog
        </button>
        <dialog ref={dialogRef} data-testid="test-dialog" id="test-dialog" aria-labelledby="dialog-title">
          <h2 id="dialog-title">Test Dialog</h2>
          <p>This is a native HTML dialog element.</p>
          <form method="dialog">
            <div className="form-group">
              <label htmlFor="dialog-input">Dialog input</label>
              <input type="text" id="dialog-input" data-testid="dialog-input" placeholder="Type in dialog" />
            </div>
            <div className="btn-row">
              <button type="submit" className="btn btn-primary" data-testid="dialog-confirm">Confirm</button>
              <button type="button" className="btn" data-testid="dialog-cancel" onClick={closeDialog}>Cancel</button>
            </div>
          </form>
        </dialog>
        <p className="status-bar" data-testid="dialog-status">Dialog open: {dialogOpen ? 'yes' : 'no'}</p>
      </section>

      <section className="section">
        <h2>Tabs</h2>
        <div role="tablist" aria-label="Sample tabs" data-testid="tablist">
          {(['tab1', 'tab2', 'tab3'] as const).map((t, i) => (
            <button
              key={t}
              role="tab"
              type="button"
              id={`tab-${t}`}
              aria-selected={tab === t}
              aria-controls={`panel-${t}`}
              data-testid={`tab-${t}`}
              className="btn"
              style={{ borderBottom: tab === t ? '2px solid var(--accent)' : undefined }}
              onClick={() => setTab(t)}
            >
              Tab {i + 1}
            </button>
          ))}
        </div>
        {(['tab1', 'tab2', 'tab3'] as const).map((t, i) => (
          <div
            key={t}
            role="tabpanel"
            id={`panel-${t}`}
            aria-labelledby={`tab-${t}`}
            hidden={tab !== t}
            data-testid={`panel-${t}`}
            style={{ padding: '1rem 0' }}
          >
            Content for tab {i + 1}. Active tab: <strong>{tab}</strong>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Details / Summary</h2>
        <details data-testid="details-widget">
          <summary data-testid="details-summary">Click to expand details</summary>
          <p data-testid="details-content">Hidden content revealed when details is open. Good for accordion-style testing.</p>
        </details>
      </section>

      <section className="section">
        <h2>Contenteditable</h2>
        <div
          contentEditable
          suppressContentEditableWarning
          data-testid="contenteditable-div"
          id="contenteditable-div"
          onInput={(e) => setEditableContent(e.currentTarget.textContent || '')}
          style={{
            padding: '1rem',
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            minHeight: '80px',
          }}
        >
          {editableContent}
        </div>
        <p className="status-bar" data-testid="editable-status">Content: {editableContent}</p>
      </section>

      <section className="section">
        <h2>Drag and Drop</h2>
        <div className="grid-2">
          <div
            data-testid="drag-source"
            draggable
            onDragStart={(e) => e.dataTransfer.setData('text/plain', 'dragged-item')}
            style={{ padding: '1rem', background: '#1e3a5f', borderRadius: '6px', cursor: 'grab' }}
          >
            Drag me →
          </div>
          <div
            data-testid="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => setDragStatus('Item dropped successfully!')}
            style={{ padding: '1rem', background: 'var(--bg)', border: '2px dashed var(--border)', borderRadius: '6px', minHeight: '60px' }}
          >
            Drop zone
          </div>
        </div>
        <p className="status-bar" data-testid="drag-status">{dragStatus}</p>
      </section>

      <section className="section">
        <h2>Popover (native)</h2>
        <button type="button" className="btn" popoverTarget="test-popover" data-testid="popover-trigger">
          Toggle Popover
        </button>
        <div id="test-popover" popover="auto" data-testid="test-popover" style={{ padding: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <p>Native popover content</p>
          <button type="button" className="btn" popoverTarget="test-popover" popoverTargetAction="hide" data-testid="popover-close">Close</button>
        </div>
      </section>
    </>
  )
}
