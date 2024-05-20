import React, { useEffect, useState } from "react";

const Timer = ({ onClose }) => {
  const [count, setCount] = useState(5); // 5초부터 시작

  useEffect(() => {
    if (count === 0) {
      // 0초 되면 onClose
      onClose();
      return;
    }

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1); // 1초씩 감소
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count, onClose]); // count, onClose 바뀔 때마다 useEffect 실행

  return (
    <div style={divStyle}>
      <span>이 메시지는 행운의 편지입니다. {count}초 후에 폭 파 됩 니 다</span>
    </div>
  );
};

const divStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  border: "1px solid #000",
  borderRadius: "10px",
  backgroundColor: "#fff",
  zIndex: 1000,
};

export default Timer;
