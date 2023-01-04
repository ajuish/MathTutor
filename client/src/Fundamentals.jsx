import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {Dropdown, Card, Radio} from 'semantic-ui-react'

function Fundamentals(){

   const currentUser = sessionStorage.getItem('user_id')
   const navigate = useNavigate()
   const [digits, setDigits] = useState(10)
   const [num1, setNum1] = useState(getRandomInt(digits))
   const [num2, setNum2] = useState(getRandomInt(digits))
   const [negative, setNegative] = useState(false)
   const [currentOperation, setCurrentOperation] = useState('')
   const [symbol, setSymbol] = useState('')
   const [userAnswer, setUserAnswer] = useState('')
   const [score, setScore] = useState({
      addition: [0,0],
      subtraction:[0,0],
      multiplication:[0,0],
      division: [0,0]
   })
   
   useEffect(()=> {

      if (currentUser == null){
         navigate('/login')
      }
      else
         fetch(`/users/${currentUser}`)
         .then(resp => resp.json())
         .then(data => setScore({
            addition: data.addition,
            subtraction: data.subtraction,
            multiplication: data.multiplication,
            division: data.division
         }))
   }, [currentUser, navigate])

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
      if (negative == false){
         if (num2 > num1){
            question = `${num2} ${symbol} ${num1}`
         }
         else {
            question = `${num1} ${symbol} ${num2}`
         }
      }
      else 
         question = `${num1} ${symbol} ${num2}`
   }
   else 
      {question = `${num1} ${symbol} ${num2}`}

   //checks solution onSubmit
   function findSolution(e){
      e.preventDefault()
      
      if (eval(question) === Number(userAnswer)){
         //runs if answer is correct
         score[currentOperation] = [Number(score[currentOperation][0])+1, Number(score[currentOperation][1])+1]
         setScore(score)
      }
      else {
         //runs if answer is incorrect
         score[currentOperation] = [Number(score[currentOperation][0]), Number(score[currentOperation][1])+1]
         setScore(score)
      }
      
      setNum1(getRandomInt(digits))
      setNum2(getRandomInt(digits))
      
      setUserAnswer('')
   }
   
   function saveScore(){
      
      fetch(`/users/${currentUser}`, {
         method: 'PATCH', 
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(score)
      })
      .then(resp=>resp.json())
   }

   function resetScore(){
      fetch(`/users/${currentUser}`, {
         method: 'PATCH', 
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            addition: [0,0],
            subtraction:[0,0],
            multiplication:[0,0],
            division: [0,0]
         })
      })
      .then(resp=>resp.json())
      .then(window.location.reload())
   }
console.log(digits)
   return (
      <div>
         {/* <Card.Group className='ui centered grid'> */}
         <Card className='ui centered grid'>
            <Dropdown 
               onChange={(e, data)=>{
                  setCurrentOperation(e.target.textContent.toLowerCase())
                  // saveScore(e.target.textContent)
                  setNum1(getRandomInt(digits))
                  setNum2(getRandomInt(digits))
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
               <h3>{symbol? question : null}</h3>
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
         </Card>
         <Card className='ui centered grid' onChange={(e)=> setDigits(Number(e.target.value))}>
            <div className='center aligned content'>
               <h4>How many digits?</h4>
               <div>
                  <input type='radio' value='10' name='digits' defaultChecked/> Single Digit
               </div>
               <div>
                  <input type='radio' value='100' name='digits'/> Two Digits
               </div>
               <div>
                  <input type='radio' value='1000' name='digits'/> Three Digits
               </div>
            </div>
           {(currentOperation == 'subtraction') ? 
               <div className='ui center aligned'> 
                  <h4>Include Negative Results?</h4>
                  <Radio toggle className='ui center aligned' onChange={()=>setNegative(!negative)}/>
               </div> 
            : null}
         </Card>
         {/* </Card.Group> */}
         <Card className='ui centered grid'>
         <h3>Scores:</h3>
            <div><b>Addition: </b> {score.addition[0]}/{score.addition[1]}</div>
            <div><b>Subtraction: </b> {score.subtraction[0]}/{score.subtraction[1]}</div>
            <div><b>Multiplication: </b> {score.multiplication[0]}/{score.multiplication[1]}</div>
            <div><b>Division: </b>{score.division[0]}/{score.division[1]}</div>
            <br></br>
            <div className='ui blue submit button' onClick={saveScore}> Save Score</div>
            <div className='ui red button' onClick={resetScore}>Reset Scores</div>
         </Card>
      </div>
   )
}

export default Fundamentals