import { useState } from "react";
import Cart from "./Cart";
const ProductPage = ({ showCart }) => {
  const thumbnails = ["1", "2", "3", "4"];
  const [selectedImage, setSelectedImage] = useState(1);

  const thumbnailSelect = (selected) => {
    setSelectedImage(selected);
  };
  return (
    <div className="container-xl mt-4">
      <Cart showCart={showCart} />
      <div className="row justify-content-center gap-5">
        <div className="col-md-4">
          <img
            src={require(`../images/image-product-${selectedImage}.jpg`)}
            style={{ borderRadius: "16px" }}
            className="img-fluid"
            alt=""
          />
          <div className="container-fluid mt-3 p-0">
            <div className="row">
              {thumbnails.map((item) => (
                <div className="col-3" key={item}>
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
                <button type="button" className="btn btn-light">
                  <i className="bi bi-dash-lg orange-text"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm disable fw-bold"
                >
                  0
                </button>
                <button type="button" className="btn btn-light">
                  <i className="bi bi-plus-lg orange-text"></i>
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-grid">
                <button
                  className="btn orange"
                  type="button"
                  style={{ color: "white" }}
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
