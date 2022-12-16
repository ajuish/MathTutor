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
    console.log(allTopics.filter(topic => topic.concept === currentTopic))
    
        // <div>
        //     <div>{subj.concept}</div>
        //     <div>{subj.review}</div>
        //     <ul>{subj.examples.map(example=><li>{example}</li>)}</ul>
        // </div>)

    return(
        <Dropdown 
            onChange={(e)=>setCurrentTopic(e.target.textContent)} 
            placeholder="Choose Concept" 
            search 
            selection 
            options={mapTopics}
        />
    )
}

export default Topics