import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Dropdown, Card} from 'semantic-ui-react'
import {v4 as uuidv4} from 'uuid'

function Topics(){
    
    const currentUser = sessionStorage.getItem('user_id')
    const navigate = useNavigate()
    const [allTopics, setAllTopics] = useState([])
    const [currentTopic, setCurrentTopic] = useState('')
    const [currentProblem, setCurrentProblem] = useState({})
    const [userAnswer, setUserAnswer] = useState('')
    const [answerResult, setAnswerResult] = useState('')
    const [showQuestion, setShowQuestion] = useState(false)
    const [showSolution, setShowSolution] = useState(false)

    useEffect(() => {
        if (currentUser == null){
            navigate('/login')
        }
        else
            fetch('/topics')
            .then(resp => resp.json())
            .then(data => setAllTopics(data))
    }, [])

    // map topics for dropdown menu
    const mapTopics = allTopics.map(subj => ({key: subj.id, text:subj.concept, value:subj.id}))

    // grabs selected topic
    const findTopic = currentTopic ? allTopics.filter(topic => topic.concept === currentTopic) : null
   
    // grabs the problems for the topic
    const findProblems = findTopic ? findTopic[0].problems.map(problem => problem) : null

    //checks answer to practice problems
    function checkAnswer(e){
        e.preventDefault()

        if (userAnswer === currentProblem.answer)
            setAnswerResult('Correct')
        else
            setAnswerResult('Incorrect, Try Again')
        
        setShowSolution(true)
    }

    //use showTopic to write logic to display info
    const showTopic = findTopic ? 
        <div className='ui container'>
            <h1  className='ui centered grid'>{findTopic[0].concept}</h1>
            <br></br>
            <div>{findTopic[0].review}</div>
            <br></br>
            <h3>Examples: </h3>
            <ul>
                {findTopic[0].examples.map(example=> <li key={uuidv4()}>{example}</li>)}
            </ul>
            <br></br>
            <h3>Practice Problems: </h3>
            {findProblems.map((problem, index) =>
                <div 
                    className='ui blue submit button' 
                    onClick={()=>{
                        setCurrentProblem(problem)
                        setAnswerResult('')
                        setUserAnswer('')
                        setShowQuestion(true)
                        setShowSolution(false)
                        }} 
                    key={uuidv4()}
                >
                    Problem {index+1}
                </div>
            )}

            {/* displays practice problems on click */}
            {showQuestion ?
                <Card.Group className='ui centered grid stacked segment'>
                <Card className='stacked segment'>
                    <div>{currentProblem.question}</div>
                    <br></br> 
                    <form onSubmit={(e)=>checkAnswer(e)}>
                        <input 
                            type='text' 
                            placeholder='Enter Answer' 
                            value={userAnswer} 
                            onChange={(e)=>setUserAnswer(e.target.value)}
                        />
                        <input type='submit' value='Submit'/>
                    </form>
                    <br></br>
                    <div style={{color:'red', fontWeight:'bold'}}>{answerResult}</div>
                </Card>
                {showSolution ?
                    <Card>{currentProblem.solution[0]}</Card>
                    : null
                }
                </Card.Group>
            : null}

        </div> 
        : null

    return(
        <div className='ui container'>
            <div className='ui centered grid'>
                <Dropdown 
                    onChange={(e)=>{
                        setCurrentTopic(e.target.textContent)
                        setCurrentProblem({})
                        setShowQuestion(false)
                        setShowSolution(false)
                    }} 
                    placeholder="Choose Concept"
                    value={currentTopic} 
                    search 
                    selection 
                    options={mapTopics}
                />
            </div>
            {/* <br></br> */}
            <br></br>
            <div className='ui stacked segment'>
                {showTopic ? 
                    <div  className='ui container'> {showTopic} </div> :
                    <h1 className='ui centered grid'>Select a Concept</h1>
                }
            </div>
        </div>
    )
}

export default Topics