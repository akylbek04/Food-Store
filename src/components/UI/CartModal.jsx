import classes from "./CartModal.module.css";
import { createPortal } from "react-dom";

const Backdrop = ({ handleClose }) => {
  return <div className={classes.backdrop} onClick={handleClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portal = document.getElementById("modal");

const CartModal = ({ children, handleClose }) => {
  return (
    <>
      {createPortal(<Backdrop handleClose={handleClose} />, portal)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portal)}
    </>
  );
};

export default CartModal;
