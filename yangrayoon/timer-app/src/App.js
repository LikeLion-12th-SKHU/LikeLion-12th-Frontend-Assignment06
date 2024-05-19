import Timer from "./component/Timer";
import React from "react";
import { useState } from "react";
import "./component/Timer.css";

function App() {
  const [showModal, setShowModal] = useState(false); //showModal 상태 업데이트

  const handleOpenModal = () => {
    //모달 열기
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    // 모달 닫기
    setShowModal(false);
  };
  return (
    <div>
      {showModal && <Timer onClose={handleCloseModal} />}{" "}
      {/*showModal이 true이면 Timer 렌더링*/}
      <button onClick={handleOpenModal}>모달 보기</button>{" "}
      {/*버튼 누르면 모달 여는 함수 작동*/}
    </div>
  );
}

export default App;
