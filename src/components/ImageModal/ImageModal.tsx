import s from "./ImageModal.module.css";
import Modal from "react-modal";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  // console.log(isOpen, onClose, image);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.container} onClick={onClose}>
        <img
          src={image}
          alt="Image"
          className={s.image}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
