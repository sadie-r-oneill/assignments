import React from "react"

function BadgeMaker(props) {
    return (
        <div style = {props.badgeStyle}>
            <div>{props.firstName}</div>
            <div>{props.lastName}</div>
            <div>{props.email}</div>
            <div>{props.placeOfBirth}</div>
            <div>{props.phone}</div>
            <div>{props.favFood}</div>
            <div>{props.aboutMe}</div>
        </div>
    )


}
export default BadgeMaker