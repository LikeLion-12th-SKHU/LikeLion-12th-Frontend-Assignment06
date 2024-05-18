import React, { useEffect } from "react"; // React/useEffect import

const Timer = () => {

   // useEffect 훅을 사용하여 컴포넌트 마운트 시 타이머 설정
    useEffect(() => {
        // 1초마다 한 번씩 '타이머가 돌아가는중...' 메시지 콘솔에 출력하는 setInterval 함수
        const timer = setInterval(() => {
            console.log("타이머가 돌아가는중...");
        }, 1000);

        // 5초 후에 실행될 setInterval 함수
        const timeout = setTimeout(() => {
        }, 5000); 

        // useEffect 훅을 사용하여 컴포넌트 언마운트 시 타이머 해제
        return () => {
            // 타이머와 타임아웃 해제
            clearInterval(timer);
            clearTimeout(timeout);
            // 메시지 출력
            console.log("타이머가 종료되었습니다...");
        };
    }, []); // 빈 배열 전달 시 마운트 한 번만 실행

    // 화면에 아무것도 렌더링 X
    return null;
};

// 외부에서 Timer 사용 가능하도록 export
export default Timer;
