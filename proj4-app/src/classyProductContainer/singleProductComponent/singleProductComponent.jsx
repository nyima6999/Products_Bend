const SingleProductComponent = (props) => {
  return (
    <div>
      <h3>{props.product.title}</h3>
      <p>{props.product.description}</p>
      <button
        onClick={() => {
          props.deleteProduct(props.product.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
};
export default SingleProductComponent;
