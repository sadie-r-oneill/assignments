import React, {useState} from "react"
export const RicknMorty = React.createContext()

export default function RicknMortyProvider(props) {
    const[ricknMoryState, ricknMorysetState] = useState({
        
    })
    return(
        <RicknMorty.Provider
        value = {{
            ...RicknMortyState
        }}>
            {props.children}
            
        </ RicknMorty.Provider>
    )
}