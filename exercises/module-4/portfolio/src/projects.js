import React from "react"


export default function Projects(){
    return(
        <div>
            <a className = "api"href = "http://last-push.surge.sh/">Rick and Morty API</a>
            <div className = "box1">
                <img className = "rick" src = "/photos/morty.png"></img>
                <img className = "morty" src = "/photos/rick.png"></img>
            </div>
            <a className = "cg" href = "http://pale-legs.surge.sh/">City Ghost Band Website</a>
            <div className = "box1">
                <img className = "ghosts"src ="/photos/ghosts.png"></img>
                <img className = "ghosts1"src ="/photos/ghosts1.png"></img>
            </div>
        </div>
    )
}