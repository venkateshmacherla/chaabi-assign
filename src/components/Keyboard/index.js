import React from 'react';
import './index.css';

const Keyboard = ({ keys, onKeyPress }) => {
  return (
    <div className="keyboard-container">
      {keys.map((key, index) => (
        <button className="inner-keyboard-container" key={index} onClick={() => onKeyPress(key)}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
