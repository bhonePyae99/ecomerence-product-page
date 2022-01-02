import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
function App() {
  const [showCart, setShowCart] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const handleShowState = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="App">
      <Navbar
        handleState={handleShowState}
        showCart={showCart}
        selectedCount={selectedCount}
      />
      <ProductPage showCart={showCart} setSelectedCount={setSelectedCount} />
    </div>
  );
}

export default App;
