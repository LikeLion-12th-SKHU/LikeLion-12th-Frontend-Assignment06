import React, { useState } from "react";
import Timer from "./component/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  const handleCloseTimer = () => {
    setShowTimer(false);
  };

  return (
    <div style={buttonStyle}>
      {showTimer && <Timer onClose={handleCloseTimer} />}
      <button style={buttonModal} onClick={() => setShowTimer(!showTimer)}>
        모달 보기
      </button>
    </div>
  );
}

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
};

const buttonModal = {
  padding: "10px",
  border: "1px solid #000",
  borderRadius: "10px",
  backgroundColor: "#fff",
};

export default App;
