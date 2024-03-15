class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :host {
          display: block;
          width: 100%;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        p {
          font-weight: 600;
          font-size: 1.2rem;
          padding: 1rem;
        }

        p span {
          color:var(--primary);
        }
      </style>
      
      <p>Savory<span>Bites</span></p>
    `;
  }
}

customElements.define("app-bar", AppBar);
