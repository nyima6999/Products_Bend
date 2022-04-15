const NewProductComponent = (props) => {
  return (
    <div>
      <h3>Create</h3>
      <form onSubmit={props.createNewProduct}>
        <input
          onChange={props.handleNewProductInputChange}
          name="title"
          type="text"
          placeholder="title"
        ></input>
        <br />{" "}
        <textarea
          onChange={props.handleNewProductInputChange}
          name="description"
          cols="30"
          rows="10"
          placeholder="description"
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewProductComponent;
