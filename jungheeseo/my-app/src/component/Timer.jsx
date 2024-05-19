import React, { useEffect, useState } from "react";

const Timer = ({ initialCount, onCountdownComplete }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // 카운트가 0 이하로 떨어지면 카운트다운 종료 후 onCountdownComplete 호출
    if (count <= 0) {
      onCountdownComplete();
      return;
    }

    // 1초마다 1씩 감소하는 타이머 설정
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count, onCountdownComplete]);

  return (
    <div className="countdown">이 메시지는 {count}초 후에 폭파됩니다.</div>
  );
};

export default Timer;
