// const updateProduct = (props) => {
//   return (
//     <div>
//       <h3>update {props.product.title}</h3>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           props.updateProduct(props.product.id);
//         }}
//       >
//         <input
//           onChange={props.handleUpdateProductInputChange}
//           name="name"
//           type="text"
//           placeholder="title"
//           value={props.product.title}
//         ></input>
//         <br />{" "}
//         <textarea
//           onChange={props.handleUpdateProductInputChange}
//           name=""
//           cols="30"
//           rows="10"
//           placeholder="description"
//           value={props.product.description}
//         ></textarea>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default updateProduct;
