import React from "react";
import "./Modal.css";
import Timer from "./component/Timer";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null; // 모달이 열려 있지 않으면 랜더링하지 않음
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <Timer initialCount={5} onCountdownComplete={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
