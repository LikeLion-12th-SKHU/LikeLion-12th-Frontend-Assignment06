import React, { useState, useEffect } from "react";

const Timer = ({ onClose }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    //1초 간격으로 1초씩 줄어들게 구현하였습니다.

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      onClose();
      // 타이머가 0이 되면 자동으로 닫히게끔 구현하였어요.
    }
  }, [seconds, onClose]);

  return (
    <div className="modal">
      <div className="modal-content">
        <p>이 메시지는 {seconds}초 후에 폭파됩니다.</p>
      </div>
    </div>
  );
};

export default Timer;
