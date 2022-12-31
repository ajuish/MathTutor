import React, {useState} from 'react'
import {Dropdown, Card, Form, Radio} from 'semantic-ui-react'

function Fundamentals(){

   const [num1, setNum1] = useState(getRandomInt(100))
   const [num2, setNum2] = useState(getRandomInt(100))
   const [currentOperation, setCurrentOperation] = useState('')
   const [symbol, setSymbol] = useState('')
   //  const [digits, setDigits] = useState('')
   const [userAnswer, setUserAnswer] = useState('')
   const [score, setScore] = useState({
         addition: [0,0],
         subtraction:[0,0],
         multiplication:[0,0],
         division: [0,0]
      })

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
         //runs if answer is correct
         score[currentOperation] = [score[currentOperation][0]+1, score[currentOperation][1]+1]
         setScore(score)
      }
      else {
         //runs if answer is incorrect
         score[currentOperation] = [score[currentOperation][0], score[currentOperation][1]+1]
         setScore(score)
      }

     setNum1(getRandomInt(100))
     setNum2(getRandomInt(100))
     
     setUserAnswer('')
   }

   function saveScore(){
      const user_id = sessionStorage.getItem('user_id')

      fetch(`/users/${user_id}`, {
         method: 'PATCH', 
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(score)
      })
      .then(resp=>resp.json())
      .then(data=>console.log(data))
   }

   return (
      <div>
         <Card className='ui centered grid'>
            <Dropdown 
               onChange={(e, data)=>{
                  setCurrentOperation(e.target.textContent.toLowerCase())
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
               <div>{symbol? question : null}</div>
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
            <div className='ui blue submit button' onClick={saveScore}> Save Score</div>
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
            {/* <div>{currentOperation ? score[currentOperation][0] : null}</div> */}
      </div>
   )
}

export default Fundamentals