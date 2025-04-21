import Modal from "react-modal";
const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // напівпрозорий фон
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "12px",
    border: "none",
    background: "#fff",
    maxWidth: "800px",
    width: "90%",
    maxHeight: "90vh",
    overflow: "auto",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
};
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onWishClose, selectedImage }) => {
  return (
    <Modal style={styles} isOpen={isOpen} onWishClose={onWishClose}>
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </Modal>
  );
};
export default ImageModal;
