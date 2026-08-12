export function registerTestGreeting() {
  if (customElements.get('test-greeting')) return

  class TestGreeting extends HTMLElement {
    #shadow: ShadowRoot | null = null

    static get observedAttributes() {
      return ['name']
    }

    connectedCallback() {
      this.render()
    }

    attributeChangedCallback() {
      this.render()
    }

    render() {
      const name = this.getAttribute('name') || 'World'
      if (!this.#shadow) {
        this.#shadow = this.attachShadow({ mode: 'open' })
      }
      this.#shadow.innerHTML = `
        <style>
          :host { display: block; margin-top: 0.5rem; }
          .greeting { padding: 1rem; background: #713f12; border-radius: 8px; color: #fef3c7; font-family: system-ui, sans-serif; }
          input { margin-top: 0.5rem; padding: 0.5rem; width: 100%; box-sizing: border-box; border-radius: 4px; border: 1px solid #d97706; }
        </style>
        <div class="greeting" data-testid="custom-greeting-wrap">
          <p data-testid="custom-greeting-text">Hello, ${name}!</p>
          <input type="text" data-testid="custom-greeting-input" placeholder="Custom element input" />
        </div>
      `
    }
  }

  customElements.define('test-greeting', TestGreeting)
}
