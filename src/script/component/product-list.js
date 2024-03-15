import "./product-item.js";

class ProductList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set products(products) {
    this._products = products;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";

    this._products.forEach((product) => {
      const productItemElement = document.createElement("product-item");
      productItemElement.product = product;
      this.shadowDOM.appendChild(productItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("product-list", ProductList);
