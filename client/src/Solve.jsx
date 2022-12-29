import React, {useState, useEffect} from 'react'

function Solve({setNum1, setNum2, getRandomInt, question}){

    // const [num1, setNum1] = useState(getRandomInt(100))
    // const [num2, setNum2] = useState(getRandomInt(100))
    const [userAnswer, setUserAnswer] = useState('')
    const [score, setScore] = useState(0)
    const [total, setTotal] = useState(0)

    // function getRandomInt(max){
    //     return Math.floor(Math.random() * max)
    //  }

    // useEffect(()=> {
    //     fetch(`https://newton.now.sh/api/v2/simplify/${num1 + num2}`)
    //     .then(resp => resp.json())
    //     .then(data => setAnswer(data.result))
    // }, [])

    //write logic to check and keep track of correct answers
   function findSolution(e){
        e.preventDefault()

        if (eval(question) === Number(userAnswer)){
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
    
   console.log('score:', score)
   console.log('total:', total)

//    function newQuestion(){
//         window.location.reload(false)
//    }

return (
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
)
}

export default Solve