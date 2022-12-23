import React, {useState, useEffect} from 'react'

function getRandomInt(max){
    return Math.floor(Math.random() * max)
 }

const num1 = getRandomInt(100)
const num2 = getRandomInt(100)

function Addition(){

    const [answer, setAnswer] = useState('')
    const [userAnswer, setUserAnswer] = useState('')
    
    // function getRandomInt(max){
    //    return Math.floor(Math.random() * max)
    // }

    // const num1 = getRandomInt(100)
    // const num2 = getRandomInt(100)

    useEffect(()=> {
        fetch(`https://newton.now.sh/api/v2/simplify/${num1 + num2}`)
        .then(resp => resp.json())
        .then(data => setAnswer(data.result))
    }, [])

    console.log(userAnswer)

    //write logic to check and keep track of correct answers
   function findSolution(e){
        e.preventDefault()

        answer === userAnswer ? console.log('Correct') : console.log('Incorrect')
        // if (answer === userAnswer){
        //     console.log('Correct')
        // }
        //     else
        //     console.log('Incorrect')
   }

   function newQuestion(){
        window.location.reload(false)
   }

return (
    <>
    <div>{num1} + {num2}</div>
    <form onSubmit={(e)=>findSolution(e)}>
        <input 
            type='text' 
            placeholder='Enter Answer' 
            value={userAnswer} 
            onChange={(e)=>setUserAnswer(e.target.value)}
        />
        <input type='submit' value='Submit'/>
    </form>
    <button onClick={newQuestion}>new question</button>
    <div>{answer}</div>
    </>
)
}

export default Addition