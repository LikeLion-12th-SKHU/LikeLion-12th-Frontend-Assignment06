import React, { useState, useEffect } from "react";
import "./timer.css";

function BoomComponent() {
  const [Boom, setBoom] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  //timeLeft => "남은 시간" setTimeLeft => "시간 업데이트"

  //onClick에 showBoomTimer 를 넣어서 클릭할 시 setBoom(true) => 즉 setBoom 버튼이 보이게 된다
  const showBoomTimer = () => {
    setBoom(true);
    setTimeLeft(5);
    //setTimeLeft(5) => 남은 시간이 5로 초기화된다.
  };

  useEffect(() => {
    let Timer;
    //Boom이 보이고 시간이 남아 있을 떄 실행되는 조건문
    //useEffect 는 상태가 업데이트 될 때마다 자동으로 반복되기 때문에 if조건문 밖에 반복문을 사용할 필요가 없음
    if (Boom && timeLeft > 0) {
      Timer = setInterval(() => {
        //정확하게 초를 세기 위해서 이러한 형식으로 1초식 감소시켰습니다.
        setTimeLeft((TimeLeft) => TimeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // 시간이 0이되면 Boom 버튼을 숨기고 시간은 다시 5초
      setBoom(false);
      setTimeLeft(5);
    }

    // 함수형 BoomComponent() 컴포넌트가 종료된 후에 계속하여 타이머가 도는 경우를 방지하여 예외처리? 오류처리를 하기 위해 사용된 코드이다.
    return () => clearInterval(Timer);
  });

  return (
    <div className="design_container">
      <button className="BoomButton" onClick={showBoomTimer}>
        💣🦁
      </button>
      {Boom && (
        <div className="Boom">
          <p>
            못 참고 누르셨네요 선배님. <br />
            {timeLeft}초 후 LIKELION🦁은 폭파됩니다.
          </p>
        </div>
      )}
    </div>
  );
}
export default BoomComponent;
