import React, { useState, useEffect } from "react";
import Timer from "./component/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  const handleCloseTimer = () => {
    setShowTimer(false);
  };

  return (
    <div style={appStyle}>
      <h1>행운 메시지</h1>
      <button onClick={() => setShowTimer(!showTimer)}>확인하기</button>
      {showTimer && <Timer onClose={handleCloseTimer} />}
    </div>
  );
}

const appStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#fff0f5",
};

export default App;
