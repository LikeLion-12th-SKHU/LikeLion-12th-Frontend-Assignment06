import Timer from "./component/Timer"; // Timer import
import React, { useState } from "react"; // React/useState import
import LuckMessage from "./luckMessage"; // LuckMessage import

function App() {
  // useState 훅을 사용하여 showTimer 상태/setShowTimer 함수 정의 (처음: false)
  const [showTimer, setShowTimer] = useState(false);
  
  return (
    <div>
      {/* showTimer가 true인 경우에만 Timer 컴포넌트 렌더링 */}
      { showTimer && <Timer /> }
      {/* LuckMessage 렌더링 */}
      <LuckMessage />
    </div>
  );
}

// 외부에서 App 사용 가능하도록 export
export default App;
