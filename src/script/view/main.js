import "../component/product-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const productListElement = document.querySelector("product-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchProduct(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    productListElement.products = results;
  };

  const fallbackResult = (message) => {
    productListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
