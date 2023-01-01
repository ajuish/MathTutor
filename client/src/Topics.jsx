import React, {useState, useEffect} from 'react'
import {Dropdown} from 'semantic-ui-react'
import {v4 as uuidv4} from 'uuid'

function Topics(){
    
    const [allTopics, setAllTopics] = useState([])
    const [currentTopic, setCurrentTopic] = useState('')
    

    useEffect(() => {
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

    function onSubmitAnswer(e){
        console.log(e.target.value)

    }
    //use showTopic to write logic to display info
    const showTopic = findTopic ? 
        <div className='ui container'>
            <h1  className='ui centered grid'>{findTopic[0].concept}</h1>
            <br></br>
            <div>{findTopic[0].review}</div>
            <br></br>
            <div>Examples: </div>
            <ul>
                {findTopic[0].examples.map(example=> <li key={uuidv4()}>{example}</li>)}
            </ul>
            <br></br>
            <div>Practice Problems: </div>
            <ol>
                {findProblems.map(problem => 
                    <div key={uuidv4()}>
                        <li>{problem.question}</li>
                        <button value={problem.id} onClick={(e)=>onSubmitAnswer(e)}>Click Me</button>
                    </div>
                )}
            </ol>
        </div> 
        : null

    return(
        <div className='ui container'>
            <div className='ui centered grid'>
                <Dropdown 
                    onChange={(e)=>setCurrentTopic(e.target.textContent)} 
                    placeholder="Choose Concept"
                    value={currentTopic} 
                    search 
                    selection 
                    options={mapTopics}
                />
            </div>
            <br></br>
            <br></br>
            <div>
                {showTopic ? 
                    <div  className='ui container'> {showTopic} </div> :
                    <h1 className='ui centered grid'>Select a Concept</h1>
                }
            </div>
        </div>
    )
}

export default Topics