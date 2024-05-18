import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머가 돌아가는중...");
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(timer); // 타이머 중복 및 메모리 누수 방지를 위해 타이머 정리
      console.log("펑");
    }, 5000);

    return () => {
      // cleanup 함수
      clearInterval(timer);
      clearTimeout(timeout);
      console.log("5초 뒤 폭파");
    };
  }, []); // 빈 의존성 배열 []

  return (
    <div>
      <span>타이머를 시작합니다.</span>
    </div>
  );
};

export default Timer;
