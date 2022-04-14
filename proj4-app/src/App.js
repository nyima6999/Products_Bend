import store247 from "./store247 .png";
import "./App.css";
import ProductsComponent from "./productsContainer/productsComponent";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>FREE SHIPPING FOR ALL ORDERS</h1>
      </nav>
      <header className="App-header">
        <img src={store247} className="App-logo" alt="logo" />
      </header>
      <ProductsComponent />
    </div>
  );
}

export default App;
