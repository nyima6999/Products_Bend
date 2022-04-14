const SingleProductComponent = (props) => {
  return (
    <div>
      <h3>{props.product.title}</h3>
      <p>{props.product.description}</p>
    </div>
  );
};
export default SingleProductComponent;
