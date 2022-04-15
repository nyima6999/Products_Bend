import UpdateProduct from "../updateProduct/updateProductComponent";

const SingleProductComponent = (props) => {
  return (
    <div>
      <h3>{props.product.name}</h3>
      <p>{props.product.description}</p>
      <button
        onClick={() => {
          props.deleteProduct(props.product.id);
        }}
      >
        DELETE {props.product.name}
      </button>
      <UpdateProduct
        product={props.product}
        handleUpdateProductInputChange={props.handleUpdateProductInputChange}
        updateProduct={props.updateProduct}
      />
    </div>
  );
};
export default SingleProductComponent;
