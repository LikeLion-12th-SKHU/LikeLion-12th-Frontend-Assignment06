import React, { useEffect } from 'react';

function Modal({ onClose }) {
  // 모달 5초후에 닫게해줌
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();  // 모달을 닫는함수
    }, 5000); 

    // 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
        }}>
      <div style={{ 
        background: 'white', 
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }}>
        <h2>🍀 오늘의 행운 메시지 🍀</h2>
        <p>5초 후에 이 메시지는 사라집니다! 뽕~!</p>
      </div>
    </div>
  );
}

export default Modal;
