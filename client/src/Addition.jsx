import React, {useState} from 'react'

function Addition(){

    const [answer, setAnswer] = useState('')
    
    function getRandomInt(max){
       return Math.floor(Math.random() * max)
    }

    const num1 = getRandomInt(100)
    const num2 = getRandomInt(100)

    console.log(num1)
    console.log(num2)

    //write logic to keep track of correct answers
   function findSolution(e){

        e.preventDefault()

        fetch(`https://newton.now.sh/api/v2/simplify/${num1 + num2}`)
        .then(resp => resp.json())
        .then(data => setAnswer(data.result))
   }

   function newQuestion(){
        // window.location.reload(false)
   }

return (
    <>
    <div>{num1} + {num2}</div>
    <form>
        <input type='text' placeholder='Enter Answer' />
        <input type='submit' value='Submit' onSubmit={()=>findSolution}/>
    </form>
    <button onClick={newQuestion}>new question</button>
    <div>{answer}</div>

    </>
)
}

export default Addition