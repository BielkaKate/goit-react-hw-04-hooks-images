import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
// import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ modalImg, onModalClose }) => {
  useEffect(() => {}, []);

  useEffect(() => {
    const closeModalOnEscape = (e) => {
      if (e.code === "Escape") {
        onModalClose();
      }
    };
    window.addEventListener("keydown", closeModalOnEscape);
    return () => {
      window.removeEventListener("keydown", closeModalOnEscape);
    };
  }, [onModalClose]);

  const onOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={onOverlayClick}>
      <div className={s.modal}>
        <img src={modalImg} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
