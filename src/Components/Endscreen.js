import { useContext } from "react"
import React from 'react'
import { QuizContext } from "../Helper/Context"
import "../App.css"
import { Questions } from "../Helper/Questions" 
function Endscreen() {
  const{score,setScore,setGameState} = useContext(QuizContext);
  const restartQuiz =()=>{
    setScore(0);
    setGameState("menu");
  }
  return (
    <div className="EndScreen">
      <h1>Quiz finished</h1>
      <h3>{score}/{Questions.length}</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default Endscreen