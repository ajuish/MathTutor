import React, {useState, useEffect} from 'react'
import {Dropdown} from 'semantic-ui-react'

function Topics(){
    
    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
    fetch('/topics')
    .then(resp => resp.json())
    .then(data => setAllTopics(data))
    }, [])

    const mapConcepts = allTopics.map(subj => ({key: subj.id, text:subj.concept, value:subj.id}))
        // <div>
        //     <div>{subj.concept}</div>
        //     <div>{subj.review}</div>
        //     <ul>{subj.examples.map(example=><li>{example}</li>)}</ul>
        // </div>)

    return(
        <Dropdown 
            onChange={(e)=>console.log(e.target.textContent)} 
            placeholder="Choose Concept" 
            search 
            selection 
            options={mapConcepts}
        />
    )
}

export default Topics