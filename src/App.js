import React, { useState } from 'react';
import './App.css';
import Mainmenu from './Components/Mainmenu';
import Endscreen from './Components/Endscreen';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helper/Context';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score,setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState ,score,setScore}}>
        {gameState === "menu" && <Mainmenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <Endscreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
