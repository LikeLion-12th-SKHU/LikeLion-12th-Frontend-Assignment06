import React, { useState, useEffect } from "react";

const Timer = ({ onExplosion }) => {
  const [count, setCount] = useState(5);

  // 초가 남아있을 때, 1초씩 감소시키는 useEffect
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      // clearTimeout 함수로 타이머 취소
      return () => clearTimeout(timer);
    } else {
      onExplosion();
    }
    // count나 onExplosion에서 변화가 일어났을 경우 useEffect 콜백
  }, [count, onExplosion]);

  return (
    <div>
      {count > 0 && (
        <p>
          안녕하세요 <br />이 메시지는 {count}초 뒤에 폭발합니다!
        </p>
      )}
    </div>
  );
};

export default Timer;
