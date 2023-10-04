import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/checkout" Component={Checkout} />
      </Routes>
    </div>
  );
}

export default App;
