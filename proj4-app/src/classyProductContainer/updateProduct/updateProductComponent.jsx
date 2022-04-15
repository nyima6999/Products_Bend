const UpdateProduct = (props) => {
  return (
    <div>
      <h3>Edit {props.product.title}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.updateProduct(props.product.id);
        }}
      >
        <input
          onChange={props.handleUpdateProductInputChange}
          name="title"
          type="text"
          placeholder="title"
          //   value={props.product.title}
        ></input>
        <br />{" "}
        <textarea
          onChange={props.handleUpdateProductInputChange}
          name="description"
          cols="30"
          rows="10"
          placeholder="description"
          //   value={props.product.description}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
