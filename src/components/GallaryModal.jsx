import { motion, AnimatePresence } from "framer-motion";
const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};
const GallaryModal = ({ setShowModal, showModal, selectedImage }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="gallary-modal"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <div className="gallary-container position-absolute top-50 start-50 translate-middle">
            <img
              src={require(`../images/image-product-${selectedImage}.jpg`)}
              alt="img"
              className="img-fluid"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GallaryModal;
