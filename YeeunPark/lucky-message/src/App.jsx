import React, { useState } from "react";
import Message from "./components/Message";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      {showMessage && <Message onClose={() => setShowMessage(false)} />}
      <button
        className='seeModal'
        onClick={() => setShowMessage(true)}>
        모달 보기
      </button>
    </div>
  );
}

export default App;
