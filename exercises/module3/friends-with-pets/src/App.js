import React from "react"
import friendsArr from "./FriendList.js"
import Friend from "./Friend.js"

function App(){
    const animals = friendsArr.map(pet => 
    <Friend myLittleFriend ={pet}/>)
    
    return (
        <>
            {animals}
        </>
    )
}

export default App