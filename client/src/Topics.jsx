import React, {useState, useEffect} from 'react'

function Topics(){
    
    const [allConcepts, setAllConcepts] = useState([])

    useEffect(() => {
    fetch('/topics')
    .then(resp => resp.json())
    .then(data => setAllConcepts(data))
    }, [])
console.log(allConcepts)
    const mapConcepts = allConcepts.map(subj => 
        <div>
            <div>{subj.concept}</div>
            <div>{subj.review}</div>
            <ul>{subj.examples.map(example=><li>{example}</li>)}</ul>
        </div>)

    return(
        <div>{mapConcepts}</div>
    )
}

export default Topics