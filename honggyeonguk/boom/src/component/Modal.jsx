import React, { useEffect, useState } from "react";

const Modal = ({ show, onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    if (!show) {
      setSecondsLeft(5); // 모달이 꺼져있을 떄 5로 초기화
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1); // 1초마다 감소
    }, 1000);

    if (secondsLeft === 0) {
      // secondsLeft가 0이 되었을떄 모달 닫기
      clearInterval(timer);
      onClose();
    }

    return () => clearInterval(timer);
  }, [secondsLeft, show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>이 메시지는 행운의 메시지입니다.</h2>
        <p>{secondsLeft}초 후에 이 메시지는 폭파됩니다!</p>
      </div>
    </div>
  );
};

export default Modal;
