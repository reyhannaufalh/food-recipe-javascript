class HeroBar extends HTMLElement {
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
          text-align: center;
        }

        h1 span {
          color:var(--primary);
        }

        p {
          color: var(--gray-300);
          margin: 1rem 0 2rem 0;
        }
      </style>
      
      <h1>Savory<span>Bites</span></h1>
      <p>"Unleash your inner chef with Savory Bites - your ultimate source for English recipes, tips, and tricks. Discover new flavors and elevate your cooking game today!"</p>
    `;
  }
}

customElements.define("hero-bar", HeroBar);
