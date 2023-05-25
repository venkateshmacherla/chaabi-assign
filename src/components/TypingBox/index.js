import React from 'react';
import './index.css';

const TypingBox = ({ currentKey, onInputChange }) => {
  const handleChange = (e) => {
    const userInput = e.target.value;
    onInputChange(userInput);
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.key === currentKey) {
      onInputChange(e.key);
    }
  };

  return (
    <div className="typing-box">
      <input className="type-con"
        type="text"
        value={currentKey}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
};

export default TypingBox;
