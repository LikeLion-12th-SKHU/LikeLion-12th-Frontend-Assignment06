import React, { useState, useEffect } from "react";
import Timer from "./component/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>
        절대 누르지 마세요
      </button>
    </div>
  );
}

export default App;
