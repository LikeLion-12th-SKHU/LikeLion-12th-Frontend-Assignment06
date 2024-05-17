import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./Timer";

function App() {
  const [showBoomTimer, setShowBoomTimer] = useState(false);
  const handleTimeEnd = () => {
    setShowBoomTimer(false);
  };
  return (
    <div className="start_button">
      {showBoomTimer && <Timer />}
      <button
        className="start"
        onClick={() => setShowBoomTimer(!showBoomTimer)}
      >
        (+)폭탄추가
      </button>
    </div>
  );
}

export default App;
