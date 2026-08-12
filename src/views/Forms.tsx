'use client'

import { useState, type FormEvent } from 'react'

export default function Forms() {
  const [status, setStatus] = useState('Fill out the form and submit.')
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const entries = Object.fromEntries(data.entries())
    setStatus(`Submitted: ${JSON.stringify(entries)}`)
  }

  return (
    <>
      <h1 className="page-title" data-testid="page-forms">Forms &amp; Inputs</h1>
      <p className="page-desc">Every common form control with labels, validation, and states.</p>

      <section className="section" aria-labelledby="main-form-heading">
        <h2 id="main-form-heading">Main Test Form</h2>
        <form id="main-test-form" data-testid="main-test-form" onSubmit={handleSubmit} noValidate>
          <div className="grid-2">
            <div className="form-group">
              <label htmlFor="text-input">Text input</label>
              <input type="text" id="text-input" name="textInput" data-testid="text-input" placeholder="Enter text" defaultValue="Hello" />
            </div>
            <div className="form-group">
              <label htmlFor="email-input">Email</label>
              <input type="email" id="email-input" name="email" data-testid="email-input" required placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password-input">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password-input"
                name="password"
                data-testid="password-input"
                autoComplete="current-password"
              />
              <label style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  data-testid="toggle-password"
                />
                Show password
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="number-input">Number</label>
              <input type="number" id="number-input" name="number" data-testid="number-input" min={0} max={100} defaultValue={42} />
            </div>
            <div className="form-group">
              <label htmlFor="search-input">Search</label>
              <input type="search" id="search-input" name="search" data-testid="search-input" placeholder="Search..." />
            </div>
            <div className="form-group">
              <label htmlFor="tel-input">Telephone</label>
              <input type="tel" id="tel-input" name="tel" data-testid="tel-input" placeholder="+1 555-0100" />
            </div>
            <div className="form-group">
              <label htmlFor="url-input">URL</label>
              <input type="url" id="url-input" name="url" data-testid="url-input" placeholder="https://example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="date-input">Date</label>
              <input type="date" id="date-input" name="date" data-testid="date-input" />
            </div>
            <div className="form-group">
              <label htmlFor="time-input">Time</label>
              <input type="time" id="time-input" name="time" data-testid="time-input" />
            </div>
            <div className="form-group">
              <label htmlFor="datetime-input">Datetime-local</label>
              <input type="datetime-local" id="datetime-input" name="datetime" data-testid="datetime-input" />
            </div>
            <div className="form-group">
              <label htmlFor="month-input">Month</label>
              <input type="month" id="month-input" name="month" data-testid="month-input" />
            </div>
            <div className="form-group">
              <label htmlFor="week-input">Week</label>
              <input type="week" id="week-input" name="week" data-testid="week-input" />
            </div>
            <div className="form-group">
              <label htmlFor="color-input">Color</label>
              <input type="color" id="color-input" name="color" data-testid="color-input" defaultValue="#38bdf8" />
            </div>
            <div className="form-group">
              <label htmlFor="range-input">Range: <output htmlFor="range-input" id="range-output" data-testid="range-output">50</output></label>
              <input
                type="range"
                id="range-input"
                name="range"
                data-testid="range-input"
                min={0}
                max={100}
                defaultValue={50}
                onInput={(e) => {
                  const out = document.getElementById('range-output')
                  if (out) out.textContent = (e.target as HTMLInputElement).value
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file-input">File upload</label>
              <input type="file" id="file-input" name="file" data-testid="file-input" accept="image/*,.pdf" multiple />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="main-textarea">Textarea</label>
            <textarea
              id="main-textarea"
              name="textarea"
              data-testid="main-textarea"
              rows={4}
              placeholder="Multi-line text..."
              defaultValue="Default textarea content for testing."
            />
          </div>

          <div className="form-group">
            <label htmlFor="select-input">Select</label>
            <select id="select-input" name="select" data-testid="select-input" defaultValue="b">
              <option value="a">Option A</option>
              <option value="b">Option B</option>
              <option value="c">Option C</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="select-grouped">Grouped select</label>
            <select id="select-grouped" name="selectGrouped" data-testid="select-grouped">
              <optgroup label="Fruits">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
              </optgroup>
              <optgroup label="Vegetables">
                <option value="carrot">Carrot</option>
                <option value="pea">Pea</option>
              </optgroup>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="datalist-input">Datalist</label>
            <input list="browsers" id="datalist-input" name="datalist" data-testid="datalist-input" placeholder="Pick a browser" />
            <datalist id="browsers">
              <option value="Chrome" />
              <option value="Firefox" />
              <option value="Safari" />
              <option value="Edge" />
            </datalist>
          </div>

          <fieldset data-testid="fieldset-options">
            <legend>Checkbox group</legend>
            <label><input type="checkbox" name="optA" value="a" data-testid="checkbox-a" defaultChecked /> Option A</label><br />
            <label><input type="checkbox" name="optB" value="b" data-testid="checkbox-b" /> Option B</label><br />
            <label><input type="checkbox" name="optC" value="c" data-testid="checkbox-c" disabled /> Option C (disabled)</label>
          </fieldset>

          <fieldset data-testid="fieldset-radio" style={{ marginTop: '1rem' }}>
            <legend>Radio group</legend>
            <label><input type="radio" name="size" value="sm" data-testid="radio-sm" /> Small</label><br />
            <label><input type="radio" name="size" value="md" data-testid="radio-md" defaultChecked /> Medium</label><br />
            <label><input type="radio" name="size" value="lg" data-testid="radio-lg" /> Large</label>
          </fieldset>

          <input type="hidden" name="hiddenToken" value="secret-token-123" data-testid="hidden-input" />

          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label htmlFor="readonly-input">Readonly input</label>
            <input type="text" id="readonly-input" name="readonly" data-testid="readonly-input" readOnly value="Cannot edit this" />
          </div>

          <div className="form-group">
            <label htmlFor="disabled-input">Disabled input</label>
            <input type="text" id="disabled-input" name="disabled" data-testid="disabled-input" disabled value="Disabled field" />
          </div>

          <div className="btn-row" style={{ marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" data-testid="form-submit">Submit Form</button>
            <button type="reset" className="btn" data-testid="form-reset">Reset</button>
            <button type="button" className="btn btn-ghost" data-testid="form-cancel" onClick={() => setStatus('Cancelled.')}>Cancel</button>
          </div>

          <div className="status-bar" role="status" data-testid="form-status">{status}</div>
        </form>
      </section>

      <section className="section">
        <h2>Standalone Inputs (outside form)</h2>
        <input type="text" id="standalone-input" data-testid="standalone-input" placeholder="Standalone text input" aria-label="Standalone input" />
      </section>
    </>
  )
}
