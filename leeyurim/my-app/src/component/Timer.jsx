import React, { useEffect } from "react";

const Timer = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    const interval = setInterval(() => {
      console.log("타이머가 돌아가는중...");
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      console.log("타이머가 종료되었습니다.");
    };
  }, [onClose]);

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2>🍀 완전 럭키비키자나 🍀</h2>
        <p>5초 후에 폭파됩니다!</p>
      </div>
    </div>
  );
};

const modalStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "5px",
  textAlign: "center",
};

export default Timer;
