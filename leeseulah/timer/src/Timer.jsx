import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let countdown;
    if (showModal) {
      setTimer(5);
      countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(countdown);
            setShowModal(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [showModal]);

  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>모달 보기</button>
      {showModal && <Modal timer={timer} onClose={() => setShowModal(false)} />}
    </div>
  );
}

function Modal({ timer, onClose }) {
  useEffect(() => {
    const timerId = setTimeout(onClose, timer * 1000);
    return () => clearTimeout(timerId);
  }, [timer, onClose]);

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <p>
          이 메시지는 행운의 편지입니다. 이 메시지는 {timer}초 후에 폭파됩니다.
        </p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default App;
