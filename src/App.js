import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import GallaryModal from "./components/GallaryModal";
function App() {
  const [showCart, setShowCart] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const handleShowState = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="App">
      <GallaryModal
        setShowModal={setShowModal}
        showModal={showModal}
        selectedImage={selectedImage}
      />
      <Navbar
        handleState={handleShowState}
        showCart={showCart}
        selectedCount={selectedCount}
      />
      <ProductPage
        showCart={showCart}
        setSelectedCount={setSelectedCount}
        setShowModal={setShowModal}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
}

export default App;
