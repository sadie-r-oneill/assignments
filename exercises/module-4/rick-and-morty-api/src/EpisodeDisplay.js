import React from "react"

export default function EpisodeDisplay(props){
    const {name,air_date,episode} = props
    return(
    <div>  
        <div className = "episodes">
            <h2>Name: {name}</h2>
            <h2>Air Date: {air_date}</h2>
            <h2>Episode: {episode.episode}</h2>
        </div>
    </div>  
        
    )
}
            
       
        