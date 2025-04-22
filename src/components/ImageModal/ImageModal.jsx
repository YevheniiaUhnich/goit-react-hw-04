import Modal from "react-modal";
const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "90wv",
    width: "auto",
    maxHeight: "90hv",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "12px",
    overflow: "auto",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
  },
};
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <Modal style={styles} isOpen={isOpen} onRequestClose={onRequestClose}>
      {selectedImage && (
        <img
          src={selectedImage.urls?.small}
          alt={selectedImage.alt_description || "Image"}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
    </Modal>
  );
};
export default ImageModal;
