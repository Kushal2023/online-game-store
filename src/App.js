import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Checkout from "./componets/Checkout/Checkout";
import PaymentSuccess from "./componets/PaymentSuccess/PaymentSuccess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
