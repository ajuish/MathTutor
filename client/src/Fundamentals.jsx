import React, {useState} from 'react'
import {Dropdown, Card, Form, Radio} from 'semantic-ui-react'
// import Solve from './Solve'

function Fundamentals(){

   const [num1, setNum1] = useState(getRandomInt(100))
   const [num2, setNum2] = useState(getRandomInt(100))
   // const [currentOperation, setCurrentOperation] = useState('')
   const [symbol, setSymbol] = useState('')
   //  const [digits, setDigits] = useState('')
   const [userAnswer, setUserAnswer] = useState('')
   const [score, setScore] = useState(0)
   // const [total, setTotal] = useState(0)
   //  const question = `${num1} ${symbol} ${num2}`

   //dropdown array
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
   
   //randomly generates numbers
   function getRandomInt(max){
      return Math.floor(Math.random() * max)
   }

   //creates question
   let question

   if (symbol === '-'){
      if (num2 > num1){
         question = `${num2} ${symbol} ${num1}`
      }
      else {
         question = `${num1} ${symbol} ${num2}`
      }
   }
   else 
      {question = `${num1} ${symbol} ${num2}`}

   //checks solution onSubmit
   function findSolution(e){
      e.preventDefault()

      if (eval(question) === Number(userAnswer)){
         // console.log('Correct')
         setScore(score + 1)
         setTotal(total + 1)
      }
      else {
         // console.log('Incorrect')
         setTotal(total + 1)
      }

     setNum1(getRandomInt(100))
     setNum2(getRandomInt(100))
     
     setUserAnswer('')
   

   }

     return (
      <div>
         <Card className='ui centered grid'>
            <Dropdown 
               onChange={(e, data)=>{
                  // saveScore(e.target.textContent)
                  setSymbol(data.value)
               }}
               placeholder="Choose Concept"
               // fluid
               // value={currentOperation} 
               selection 
               options={operations}
            />
            <div>
               <br></br>
               <div>{question}</div>
               <br></br>
               <form onSubmit={(e)=>findSolution(e)}>
                     <input 
                        type='text' 
                        placeholder='Enter Answer' 
                        value={userAnswer} 
                        onChange={(e)=>setUserAnswer(e.target.value)}
                     />
                     <input type='submit' value='Submit'/>
               </form>
               <br></br>
            </div>
            {/* <Solve setNum1={setNum1} setNum2={setNum2} getRandomInt={getRandomInt} question={question}/> */}
         </Card>
         {/* <Form>
               <Form.Field>
                  <Radio
                     label='Single Digits'
                     name='radioGroup'
                     value='single'
                     checked='single'
                     onChange={(e, data)=>console.log(data.value)}
                  />
               </Form.Field>
               <Form.Field>
                  <Radio
                     label='Two Digits'
                     name='radioGroup'
                     value='double'
                     checked='double'
                     onChange={(e, data)=>console.log(data.value)}
                  />
               </Form.Field>
            </Form> */}
      </div>
     )
}

export default Fundamentals