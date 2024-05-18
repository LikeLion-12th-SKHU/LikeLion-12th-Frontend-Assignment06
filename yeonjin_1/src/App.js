import React, { useState } from 'react';
import Modal from './Modal'; // 만약 Modal 컴포넌트를 다른 파일에 정의했다면 임포트해야 합니다.

function App() {
  // 모달의 열림 상태를 관리하는 상태 변수
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달을 열기 위한 함수
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫기 위한 함수, Modal 컴포넌트에서 호출됩니다.
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>모달 보기</button> {/* 모달 열기 버튼 */}
      {isModalOpen && <Modal onClose={handleCloseModal} />} {/* 모달 상태에 따라 Modal 컴포넌트 렌더링 */}
    </div>
  );
}

export default App;
