import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
function App() {
  const [showCart, setShowCart] = useState(false);
  const handleShowState = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="App">
      <Navbar handleState={handleShowState} showCart={showCart} />
      <ProductPage showCart={showCart} />
    </div>
  );
}

export default App;
