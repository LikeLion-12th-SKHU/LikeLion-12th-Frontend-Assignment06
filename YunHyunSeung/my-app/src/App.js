import React, { useState } from "react";
import "./App.css";
import Timer from "./component/Timer";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExplosionVisible, setIsExplosionVisible] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  // openModal 함수는 isModalOpen과 isExplosionVisible 변수를 true로 바꿔줌
  const openModal = () => {
    setIsModalOpen(true);
    setIsExplosionVisible(true);
  };

  // closeModal 함수는 isModalOpen과 isExplosionVisible, isMessageVisible 변수를 false로 바꿔줌
  const closeModal = () => {
    setIsModalOpen(false);
    setIsExplosionVisible(false);
    setIsMessageVisible(false);
  };

  const handleExplosion = () => {
    setIsExplosionVisible(false);
    setIsMessageVisible(true);
  };

  const handleMessageClose = () => {
    setIsMessageVisible(false);
  };

  // && : 앞의 조건이 참이면 뒤에 코드가 실행되는 조건문의 역할
  return (
    <div className="App">
      <button onClick={openModal}>모달열기</button>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {isExplosionVisible && <Timer onExplosion={handleExplosion} />}
            {isMessageVisible && (
              <p className="message" onClick={handleMessageClose}>
                폭파되었습니다!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
