import React from "react";
import SingleProductComponent from "./singleProductComponent/singleProductComponent";
import NewProductComponent from "./newProductComponent/newProductComponent";

class ClassyProductsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      newProduct: {
        title: "",
        description: "",
      },
    };
  }

  handleNewProductInputChange = (e) => {
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [e.target.name]: e.target.value,
      },
    });
  };

  //   create route
  createNewProduct = async (e) => {
    e.preventDefault();
    console.log(this.state.newProduct);
    const apiResponse = await fetch("http://localhost:8000/api/products/", {
      method: "POST",
      body: JSON.stringify(this.state.newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const createResponseParsed = await apiResponse.json();
    console.log(createResponseParsed);
    this.setState({
      products: [...this.state.products, createResponseParsed],
    });
  };

  // index route
  async getProducts() {
    const getProductsApiResponse = await fetch(
      "http://localhost:8000/api/products/"
    );
    const parsedProducts = await getProductsApiResponse.json();
    this.setState({
      products: parsedProducts,
    });
  }

  // delete route
  deleteProduct = async (idToDelete) => {
    const deleteResponse = await fetch(
      `http://localhost:8000/api/products/${idToDelete}/`,
      {
        method: "DELETE",
      }
    );
    console.log(deleteResponse.status);
    if (deleteResponse.status == 204) {
      this.setState({
        products: this.state.products.filter((p) => p.id == idToDelete),
      });
    }
  };

  // update route
  //   handleUpdateProductInputChange = (e) => {
  //   this.setState({
  //     updateProduct: {
  //       ...this.state.updateProduct,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };
  // updateProduct = async => {
  //   const apiResponse = await fetch(`http://localhost:8000/api/products/${idToUpdate}/`, {
  //     method: "PUT",
  //     body: JSON.stringify(this.state.updateProduct),
  //     headers: {
  //        "Content-Type": "application/json"
  //     }
  //   })
  // }

  componentDidMount() {
    this.getProducts();
    console.log("doing api call now that its been rendered");
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        <NewProductComponent
          createNewProduct={this.createNewProduct}
          handleNewProductInputChange={this.handleNewProductInputChange}
        />

        {this.state.products.map((product) => {
          return (
            <SingleProductComponent
              deleteProduct={this.deleteProduct}
              product={product}
              key={`product-${product.id}`}
            />
          );
        })}
      </div>
    );
  }
}
export default ClassyProductsContainer;
