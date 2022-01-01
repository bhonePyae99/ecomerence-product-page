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
const Cart = ({ showCart }) => {
  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          className="cart shadow text-center p-3 align-center"
          variants={cartVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="border-bottom text-start">
            <h6>Cart</h6>
          </div>
          <div className="cart-body">
            <p className="text-muted">Your cart is empty</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
