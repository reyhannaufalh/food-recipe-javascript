class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 1rem;
          border-radius: 0.5rem;
          display: flex;
          justify-content: space-between;
          position: sticky;
          top: 10px;
          background-color: white;
          margin: auto;
        }
        .search-container > input {
          width: 75%;
          padding: 16px;
          font-family: "Poppins", sans-serif;
          border: 0;
          border-bottom: 1px solid var(--gray-300);
          font-weight: bold;
        }
        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid var(--primary);
        }
        .search-container > input:focus::placeholder {
          color: var(--primary);
          font-weight: 600;
        }
        .search-container >  input::placeholder {
          color: var(--gray-300);
          font-weight: normal;
        }
        .search-container > button {
          width: 23%;
          cursor: pointer;
          padding: 16px;
          background-color: var(--primary);
          color: white;
          border: 0;
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          border-radius: 0.5rem;
          text-transform: uppercase;
        }
        @media screen and (max-width: 550px){
          .search-container {
            flex-direction: column;
            position: static;
          }
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
          .search-container > button {
            width: 100%;
          }
        }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Search recipe" id="searchElement" type="search">
        <button id="searchButton" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM
      .querySelector("#searchButton")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
