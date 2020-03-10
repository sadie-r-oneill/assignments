import React, {useContext} from "react"
import {RickAndMortyContext} from './Context/RickAndMortyContext'
import EpisodeDisplay from './EpisodeDisplay'

export default function Episodes(){
    const {episodeState, switchEpisode} = useContext(RickAndMortyContext)
    return(
        <div>
            {episodeState && episodeState.map(episode => {
                return(
                    <EpisodeDisplay key = {episode.id}
                    name = {episode.name}
                    air_date = {episode.air_date}
                    episode = {episode}
                    />
                )
            })}
            <button onClick = {() => switchEpisode()} className = "nextPage1">Load More!</button>
            
        </div>
    )
}