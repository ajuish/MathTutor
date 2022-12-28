import React, {useState} from 'react'
import {Dropdown, Card} from 'semantic-ui-react'
import Solve from './Solve'

function Fundamentals(){

    const [num1, setNum1] = useState(getRandomInt(100))
    const [num2, setNum2] = useState(getRandomInt(100))
    const [currentOperation, setCurrentOperation] = useState('')
    const [symbol, setSymbol] = useState('')
   //  const question = `${num1} ${symbol} ${num2}`

   let question

   if (currentOperation === 'Subtraction'){
      if (num2 > num1){
         question = `${num2} ${symbol} ${num1}`
      }
      else {
         question = `${num1} ${symbol} ${num2}`
      }
   }
   else 
      {question = `${num1} ${symbol} ${num2}`}
    
    const operations = [
      {
         key: 'Addition',
         text: 'Addition',
         value: '+'
      }, 
      {
         key: 'Subtraction',
         text: 'Subtraction',
         value: '-'
      }, 
      {
         key: 'Multiplication',
         text: 'Multiplication',
         value: '*'
      },
      {
         key: 'Division',
         text: 'Division',
         value: '/'
      }
   ]
    
    function getRandomInt(max){
        return Math.floor(Math.random() * max)
     }

     return (
         <Card>
            <Dropdown 
               onChange={(e, data)=>{
                  setCurrentOperation(e.target.textContent)
                  setSymbol(data.value)
               }}
               placeholder="Choose Concept"
               // fluid
               // value={currentOperation} 
               selection 
               options={operations}
            />
            <Solve setNum1={setNum1} setNum2={setNum2} getRandomInt={getRandomInt} question={question}/>
         </Card>
     )
}

export default Fundamentals