import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import Contact from "./component/Contact";
import About from "./component/About";
import NotFound from "./component/NotFound";
import PaymentSuccessful from "./component/PaymentSuccessful";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/checkout" Component={Checkout} />
        <Route exact path="paymentsuccessful" Component={PaymentSuccessful} />
        <Route exact path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
