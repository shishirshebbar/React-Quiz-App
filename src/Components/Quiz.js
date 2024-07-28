import React, { useState,useContext } from 'react';
import { Questions } from '../Helper/Questions'; 
import { QuizContext } from '../Helper/Context';
function Quiz() {
  const{score,setScore,setGameState} = useContext(QuizContext);

  const [currentQuestion,setCurrentQuestion] = useState(0);
  const[optionChoosen,setoptionChoosen] = useState("");

  const nextQuestion = () =>
  {
    if
      (Questions[currentQuestion].answer == optionChoosen ){
          setScore(score+1);
      }
      alert(score);
      setCurrentQuestion(currentQuestion+1);
  };
  const finishQuiz = () => {
    if
      (Questions[currentQuestion].answer == optionChoosen ){
          setScore(score+1);
      }
      setGameState("endScreen");
  };
  return (
    <div className='Quiz'>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className = "options">
        <button onClick = {()=>setoptionChoosen("A")}>
          {Questions[currentQuestion].optionA}
        </button >
        <button onClick = {()=>setoptionChoosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick = {()=>setoptionChoosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick = {()=>setoptionChoosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>

      </div>
      {currentQuestion== Questions.length-1?(
        <button onClick={finishQuiz}>Finish the Quiz</button>
      ):(
      <button onClick={nextQuestion}>Next Question</button>
    )}
      </div>
  );
}

export default Quiz;
