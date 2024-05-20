import React, { useState } from "react";
import Timer from "./component/Timer";
import "./main.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="app">
      <button onClick={openModal}>모달 보기</button>
      {modalOpen && <Timer onClose={closeModal} />}
    </div>
  );
};

export default App;
