import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../App/App.types";
import { FC } from "react";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  modal: Image;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, closeModal, modal }) => {
  if (!modal) {
    return;
  }

  const { urls, alt_description, user, likes } = modal;

  return (
    <div className={css.modal}>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(255, 255, 255, 0.85",
            display: "flex",
            justifyContent: "center",
          },
          content: {
            top: "20px",
            left: "auto",
            right: "auto",
            bottom: "20px",
          },
        }}
      >
        <div className={css.container}>
          <img src={urls.regular} />
          <div>
            <p>
              Description: {alt_description} . Likes: {likes} .
            </p>
            <p>
              Name: {user.name} . Location: {user.location} .
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
