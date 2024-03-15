class ProductItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set product(product) {
    this._product = product;
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
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          width: 48%; 
        }
        .image {
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
          object-position: center;
        }
        .product-info {
          padding: 1rem;
        }
        .product-info > h2 {
          font-weight: 600;
          font-size: 1.2rem;
        }

        .product-info > p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5; /* number of lines to show */
        }

        .category {
          font-size: 14px;
          margin: 0.5rem 0; 
        }

        .category span {
          font-weight: 600;
        }

        .tags {
          background-color: var(--gray-300);
          border-radius: 4px;
          width: fit-content;
          padding: 0 12px;
          color: white;
          font-size: 14px;
          margin-top: 1rem;
        }

        @media screen and (min-width: 1280px) {
          :host {
            width: 32%; 
          }
        }
      </style>
      
      <img class="image" src="${this._product.strMealThumb}" alt="Fan Art">
      <div class="product-info">
        <h2>${this._product.strMeal}</h2>
        <p class="category" >Category: <span>${this._product.strCategory}</span></p>
        <p>${this._product.strInstructions}</p>
        <div class="tags"><p>${this._product.strTags}</p></div>
      </div>
    `;
  }
}

customElements.define("product-item", ProductItem);
