import React from "react"
class Square extends React.Component { 
    render(){ 
        const squareStyle = { 
            gridRow: this.props.gridRow,
            gridColumn: this.props.gridColumn,
            height: "350px",
            width: "auto",
            backgroundColor: this.props.color,
            border: "2px solid black"
        }
    
        
        return (
            <div>
                <div style={squareStyle}></div>
            </div>
        
        )
    }
}
export default Square