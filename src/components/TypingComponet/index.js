import React, { useState } from 'react';
import './index.css'

const TypingExercise = ({ exercise, onInputChange }) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    const userInput = event.target.value;
    setInput(userInput);
    onInputChange(userInput);
  };

  return (
    <div className="typing-container">
      <label htmlFor="typing-input"></label>
      <input className="type-con"
      placeholder="Please enter the above listed keys"
        id="typing-input"
        type="text"
        value={input}
        onChange={handleChange}
      />
      
    </div>
  );
};

export default TypingExercise;
