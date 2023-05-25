import React, { useState, useEffect } from 'react';
import Keyboard from './components/Keyboard';
import TypingBox from './components/TypingBox';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'

const App = () => {
  const [keys, setKeys] = useState(['a', 's', 'd', 'f', 'j', 'k', 'l', ';']);
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [accuracy, setAccuracy] = useState(100);
  const [startTime, setStartTime] = useState(null);
  const [keyCount, setKeyCount] = useState(0);

  const handleKeyPress = (key) => {
    if (key === keys[currentKeyIndex]) {
      setCurrentKeyIndex((prevIndex) => prevIndex + 1);
      setUserInput((prevInput) => prevInput + key);
    }
  };

  const handleInputChange = (input) => {
    setUserInput(input);
  };

  useEffect(() => {
    if (currentKeyIndex === 0) {
      setStartTime(Date.now());
      setKeyCount(0);
    }

    if (currentKeyIndex === keys.length) {
      const endTime = Date.now();
      const timeDifference = (endTime - startTime) / 1000; // in a seconds
      const keysPerMinute = (keyCount / timeDifference) * 60;
      //console.log(`Keys per minute: ${keysPerMinute}`);

      const exerciseLength = keys.length;
      const correctCharacters = userInput
        .split('')
        .filter((char, index) => char === keys[index]);
      const accuracyPercentage = (correctCharacters.length / exerciseLength) * 100;
      setAccuracy(accuracyPercentage);

      setCurrentKeyIndex(0);
      setUserInput('');
    }
  }, [currentKeyIndex, keys, startTime, userInput, keyCount]);

  useEffect(() => {
    const keyCountTimer = setInterval(() => {
      setKeyCount(userInput.length);
    }, 1000);

    return () => {
      clearInterval(keyCountTimer);
    };
  }, [userInput]);

  return (
    <div className="app-container">
      <Header/>
      
      <Keyboard keys={keys} onKeyPress={handleKeyPress} />

      <TypingBox
        currentKey={keys[currentKeyIndex]}
        onInputChange={handleInputChange}
      />
      <p>Accuracy: {accuracy.toFixed(2)}%</p>
      <p>Keys Pressed: {keyCount}</p>

      <Footer/>
      
    </div>
    
  );
};

export default App;
































// import React, { useState } from 'react';
// import Keyboard from './components/Keyboard';
// import TypingExercise from './components/TypingComponet';
// import './App.css'

// const App = () => {
//   const [exercise, setExercise] = useState('Type the keys: asdfjkl;');
//   const [input, setInput] = useState('');
//   const [accuracy, setAccuracy] = useState(0);

//   const handleKeyPress = (key) => {
//     setInput((prevInput) => prevInput + key);
//   };

//   const handleInputChange = (userInput) => {
//     setInput(userInput);
//     const exerciseLength = exercise.length;
//     const inputLength = userInput.length;
//     const correctCharacters = userInput.split('').filter((char, index) => char === exercise[index]);
//     const accuracyPercentage = (correctCharacters.length / exerciseLength) * 100;
//     setAccuracy(accuracyPercentage.toFixed(2));
//   };

//   return (
//     <div className="app-container">
//       <Keyboard keys={['a', 's', 'd', 'f', 'j', 'k', 'l', ';']} onKeyPress={handleKeyPress} />
//       <TypingExercise exercise={exercise} onInputChange={handleInputChange} />
      
//       <p>Accuracy: {accuracy} %</p>
//       <p>Input: {input}</p>
//     </div>
//   );
// };

// export default App;





