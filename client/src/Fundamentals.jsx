import React, {useState} from 'react'
import Addition from './Addition'

function Fundamentals(){

    const [num1, setNum1] = useState(getRandomInt(100))
    const [num2, setNum2] = useState(getRandomInt(100))
    const [symbol, setSymbol] = useState('+')
    const question = `${num1} ${symbol} ${num2}`
    
    // const [question, setQuestion] = useState(addQ)
    
    function getRandomInt(max){
        return Math.floor(Math.random() * max)
     }

     return (
        <Addition setNum1={setNum1} setNum2={setNum2} getRandomInt={getRandomInt} question={question}/>
     )
}

export default Fundamentals