import { useState } from "react";
import Cart from "./Cart";
const ProductPage = ({ showCart, setSelectedCount }) => {
  const thumbnails = [1, 2, 3, 4];
  const [selectedImage, setSelectedImage] = useState(1);
  const [count, setCount] = useState(0);
  const product = {
    name: "Fall Limited Edition Sneakers",
    img: "../images/image-product-1-thumbnail.jpg",
    price: 125,
  };
  const [cartProduct, setCartProduct] = useState({});

  const thumbnailSelect = (selected) => {
    setSelectedImage(selected);
  };
  return (
    <div className="container-xl mt-4">
      <Cart
        showCart={showCart}
        cartProduct={cartProduct}
        count={count}
        setCartProduct={setCartProduct}
        setSelectedCount={setSelectedCount}
        setCount={setCount}
      />
      <div className="row justify-content-center gap-5">
        <div className="col-md-4 position-relative">
          <img
            src={require(`../images/image-product-${selectedImage}.jpg`)}
            style={{ borderRadius: "16px" }}
            className="img-fluid"
            alt=""
          />
          <div
            className="position-absolute bottom-50 start-0 ms-3 bg-light d-md-none"
            style={{ borderRadius: "100%", cursor: "pointer" }}
            onClick={() => {
              if (selectedImage > 1) {
                setSelectedImage(selectedImage - 1);
              }
            }}
          >
            <i className="bi bi-chevron-left fs-2"></i>
          </div>
          <div
            className="position-absolute bottom-50 end-0 me-3 bg-light d-md-none"
            style={{ borderRadius: "100%", cursor: "pointer" }}
            onClick={() => {
              if (selectedImage < thumbnails.length) {
                console.log(selectedImage);
                setSelectedImage(selectedImage + 1);
              }
            }}
          >
            <i className="bi bi-chevron-right fs-2"></i>
          </div>
          <div className="container-fluid mt-3 p-0">
            <div className="row">
              {thumbnails.map((item) => (
                <div className="col-3" key={item} style={{ cursor: "pointer" }}>
                  <div
                    className={
                      item === selectedImage
                        ? "image-container selected"
                        : "image-container"
                    }
                  >
                    <img
                      src={require(`../images/image-product-${item}-thumbnail.jpg`)}
                      className="img-fluid"
                      onClick={() => {
                        thumbnailSelect(item);
                      }}
                      alt=""
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-5 text-start p-4">
          <p className="fs-6 orange-text">SNEAKER COMPANY</p>
          <h2 className="fw-bold display-6">Fall Limited Edition Sneakers</h2>
          <p className="text-muted fs-6 mt-4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="pricing">
            <span className="fw-bolder fs-3 me-2 d-inline-block align-middle">
              $125.00
            </span>
            <span className="badge bg-warning text-dark rounded-1 align-middle orange-text">
              50%
            </span>
          </div>
          <p className="h6 fw-bold text-muted">
            <del>$250</del>
          </p>
          <div className="row">
            <div className="col-6">
              <div
                className="btn-group btn-group-lg"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => {
                    if (count > 0) setCount(count - 1);
                  }}
                >
                  <i className="bi bi-dash-lg orange-text"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm disable fw-bold"
                >
                  {count}
                </button>
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <i className="bi bi-plus-lg orange-text"></i>
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-grid">
                <button
                  className="btn orange"
                  disabled={count === 0}
                  type="button"
                  style={{ color: "white" }}
                  onClick={() => {
                    if (count !== 0) {
                      setSelectedCount(count);
                      setCartProduct(product);
                    }
                  }}
                >
                  <i className="bi bi-cart"></i> Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
