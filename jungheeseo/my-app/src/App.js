import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // 모달 열기 함수
  const openModal = () => setModalOpen(true);
  // 모달 닫기 함수
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      <button onClick={openModal}>모달 보기</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3>오늘도 행복한 하루 보내세요!</h3>
      </Modal>
    </div>
  );
};

export default App;
