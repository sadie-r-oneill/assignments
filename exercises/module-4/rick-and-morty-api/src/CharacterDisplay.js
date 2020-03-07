import React from 'react'

export default function CharacterDisplay(props){
    const {name, status, species, type, gender,image } = props
    return (
        <div>
           <h2>Name : {name}</h2>
            <h2>Status : {status}</h2>
            <h2>Species : {species}</h2>
            <h2>Type : {type}</h2>
            <h2>Gender : {gender}</h2>
            <img src = "">{image}</img> 
        </div>
    )
}
    
            