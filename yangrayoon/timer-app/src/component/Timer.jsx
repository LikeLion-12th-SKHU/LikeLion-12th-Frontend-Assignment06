import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ onClose }) => {
  //onclose 객체 받음
  const [count, setCount] = useState(5); // 초기값을 5로 설정

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000); // 1초마다 한번씩 감소

    return () => clearInterval(id); // 타이머 해제
  }, []);

  useEffect(() => {
    if (count === 0) {
      // 남은 초가 0이라면 모달 닫기
      onClose();
    }
  }, [count, onClose]);

  return (
    //모달 내용 반환
    <div className="modal">
      <p>행운의 편지</p>
      <p>이 편지는 {count}초 후에 폭파됩니다.</p>
    </div>
  );
};

export default Timer;
