import { useContext } from "react"
import React from 'react'
import { QuizContext } from "../Helper/Context"
import "../App.css"
function Mainmenu() {
    const{gameState,setGameState} = useContext(QuizContext);
  return (
    <div className='Menu'>
       
        <button onClick={()=> {
            setGameState("quiz");

        }}>Start the quiz</button>
        
    </div>
  )
}

export default Mainmenu