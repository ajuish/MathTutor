import React, {useState, useEffect} from 'react'
import {Dropdown} from 'semantic-ui-react'

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
    const findProblems = findTopic ? findTopic[0].problems.map(problem => problem.question) : null

    console.log(findProblems)
    //use showTopic to write logic to display info
    const showTopic = findTopic ? 
        <div>
            <div>{findTopic[0].review}</div>
            <br></br>
            <div>Examples: </div>
            <ul>
                {findTopic[0].examples.map(example=> <li>{example}</li>)}
            </ul>
            <br></br>
            <div>Practice Problems: </div>
            <ol>
                {findProblems.map(question => <li>{question}</li>)}
            </ol>
        </div> 
        : null

    return(
        <>
        <Dropdown 
            onChange={(e)=>setCurrentTopic(e.target.textContent)} 
            placeholder="Choose Concept"
            value={currentTopic} 
            search 
            selection 
            options={mapTopics}
        />
        {showTopic}
        </>
    )
}

export default Topics