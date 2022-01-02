import { AnimatePresence, motion } from "framer-motion";

const cartVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
  },
  exit: {
    y: -500,
  },
};
const Cart = ({
  showCart,
  cartProduct,
  count,
  setCartProduct,
  setCount,
  setSelectedCount,
}) => {
  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          className="cart shadow text-center p-3 align-center"
          style={{ zIndex: 1 }}
          variants={cartVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="border-bottom text-start">
            <h6>Cart</h6>
          </div>
          <div className="cart-body">
            {Object.keys(cartProduct).length === 0 && (
              <p className="text-muted mt-5">Your cart is empty</p>
            )}
            {Object.keys(cartProduct).length !== 0 && (
              <div className="container-fluid mt-3">
                <div className="row">
                  <div className="col-3">
                    <img
                      src={require("../images/image-product-1-thumbnail.jpg")}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                  <div className="col-7 text-start px-0">
                    <small
                      className="text-muted"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Autumn Limited Edition...
                    </small>
                    <small className="d-inline-block text-muted">
                      ${cartProduct.price} x {count}{" "}
                      <strong className="text-dark fw-bolder">
                        ${cartProduct.price * count}
                      </strong>
                    </small>
                  </div>
                  <div
                    className="col-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setCartProduct({});
                      setCount(0);
                      setSelectedCount(0);
                    }}
                  >
                    <i className="bi fs-3 bi-trash"></i>
                  </div>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button
                    className="btn orange"
                    type="button"
                    style={{ color: "white" }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
