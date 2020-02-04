import React from "react"

function BadgeMaker({badgeStyle,firstName,lastName,email,placeOfBirth,phone,favFood,aboutMe}) {
    return (
        <div style = {badgeStyle}>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{email}</div>
            <div>{placeOfBirth}</div>
            <div>{phone}</div>
            <div>{favFood}</div>
            <div>{aboutMe}</div>
        </div>
    )


}
export default BadgeMaker