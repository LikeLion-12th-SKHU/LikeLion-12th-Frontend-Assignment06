import React, { useState, useEffect } from "react";

export default function Message({ onClose }) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const handleCount = () => {
      if (count === 1) {
        onClose();
      } else {
        setCount(count - 1);
        setTimeout(handleCount, 1000);
      }
    };

    setTimeout(handleCount, 1000);
  }, [count, onClose]);

  return (
    <div className='container'>
      <div className='openModal'>
        <div className='modalText'>
          이 메세지는 행운의 편지입니다. <br />이 메세지는 {count}초 후에
          폭파합니다.
        </div>
      </div>
    </div>
  );
}
