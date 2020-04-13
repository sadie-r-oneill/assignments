import React, {useState, useEffect} from "react"
import axios from "axios"
import Bounty from "Bounty.js"

export default function App(){
    const [bounties, setBounties] = useState([])
    useEffect(() => {
        axios.get("/bounties")
        .then(res => setBounties(res.data))
        // .catch(console.log(err))
    },[])
    return (
        <div>
            {bounties.map(bounties => <Bounty{...bounties}/>)}
        </div>
    )
}