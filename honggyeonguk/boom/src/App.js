import { useState } from "react";
import Modal from "./component/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleShowModal}>모달 보기</button>
      <Modal show={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
