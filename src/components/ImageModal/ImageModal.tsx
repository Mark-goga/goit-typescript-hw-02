import Modal from "react-modal"
import { FC } from 'react';
import css from './ImageModal.module.css';

type ImageModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  imgUrl: string;
}

const ImageModal: FC<ImageModalProps> = ({ modalIsOpen, closeModal, imgUrl })=> {
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Example Modal"
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <img className={css.img} src={imgUrl} alt="" />
    </Modal>
  );
}
export default ImageModal