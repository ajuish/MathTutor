import React, {useState, useEffect} from 'react'

// function getRandomInt(max){
//     return Math.floor(Math.random() * max)
//  }

// const num1 = getRandomInt(100)
// const num2 = getRandomInt(100)

function Addition(){

    const [num1, setNum1] = useState(getRandomInt(100))
    const [num2, setNum2] = useState(getRandomInt(100))
    // const [answer, setAnswer] = useState(num1 + num2)
    const [userAnswer, setUserAnswer] = useState('')
    const [score, setScore] = useState(0)
    const [total, setTotal] = useState(0)

    function getRandomInt(max){
        return Math.floor(Math.random() * max)
     }

    // useEffect(()=> {
    //     fetch(`https://newton.now.sh/api/v2/simplify/${num1 + num2}`)
    //     .then(resp => resp.json())
    //     .then(data => setAnswer(data.result))
    // }, [])

    //write logic to check and keep track of correct answers
   function findSolution(e){
        e.preventDefault()

        // answer === Number(userAnswer) ? console.log('Correct') : console.log('Incorrect')
        if (Number(num1 + num2) === Number(userAnswer)){
            console.log('Correct')
            setScore(score + 1)
            setTotal(total + 1)
        }
        else {
            console.log('Incorrect')
            setTotal(total + 1)
        }

       setNum1(getRandomInt(100))
       setNum2(getRandomInt(100))
       
       setUserAnswer('')
     }
    
    //  console.log('num1:',num1)
    //  console.log('num2:', num2)
    //  console.log('answer:',answer)  
   console.log('score:', score)
   console.log('total:', total)

//    function newQuestion(){
//         window.location.reload(false)
//    }

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
    {/* <button onClick={newQuestion}>new question</button> */}
    {/* <div>{answer}</div> */}
    </>
)
}

export default Addition