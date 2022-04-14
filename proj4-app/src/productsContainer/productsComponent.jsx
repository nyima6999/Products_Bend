import { useState, useEffect } from "react";
import SingleProductComponent from "./singleProductComponent/singleProductComponent";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const getProductsApiResponse = await fetch(
      "http://localhost:8000/api/products"
    );
    const parsedProducts = await getProductsApiResponse.json();
    setProducts(parsedProducts);
  };
  return (
    <div>
      <h2>Products</h2>
      <button onClick={getProducts}>Get Products</button>
      {products.map((product) => {
        return (
          <SingleProductComponent
            product={product}
            key={`product-${product.id}`}
          />
        );
      })}
    </div>
  );
};
export default ProductsComponent;
