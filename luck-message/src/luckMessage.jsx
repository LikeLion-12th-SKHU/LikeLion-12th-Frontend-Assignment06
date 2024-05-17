import React, { useState } from "react"; // React/useState import
import Timer from "./component/Timer"; // Timer import

// 외부에서 LuckMessage 사용 가능하도록 export
export default function LuckMessage() {

    // useState 훅을 사용하여 message 상태/setMessage 함수 정의 (처음: false)
    const [message, setMessage] = useState(false);

    //버튼 클릭 시 호출되는 handleMessage 함수
    const handleMessage = () => {
        // message 상태를 true로 변경하는 setMessage 함수
        setMessage(true);
        // 5초 후에 message 상태를 false로 변경하는 setTimeout 함수 
        setTimeout(() => {
            setMessage(false);
        }, 5000); 
    };

    return (
        <div className="effect">
            {/* message가 true인 경우에만 Timer 컴포넌트 렌더링 */}
            {message && <Timer />}
            {/* 버튼 클릭 시 handleMessage 함수 호출 */}
            <button className="button" onClick={handleMessage}>모달 보기</button>
            {/* message가 true인 경우에만 div (행운의 메시지창) 렌더링 */}
            {message && 
                <div className="message">
                    이 메시지는 행운의 편지입니다.
                    <br />
                    이 메시지는 5초 후에 폭파됩니다.
                    <img 
                        src="https://i.pinimg.com/736x/4d/ba/b8/4dbab85b56aaddbf8a4b1c040857f30d.jpg"
                        alt="Luck Message"
                    />
                </div>
            }
        </div>
    );
}
