import React from "react"

class Dicebox extends React.Component {

    render(){
        const dice = {
            gridColumn: this.props.gridColumn,
            gridRow: this.props.gridRow,
            height: "150px",
            width: "150px",
            backgroundColor: "white",
            border:"3px solid black",
            borderRadius: "15%",
            textAlign: "center",
            marginTop: "20%",
            fontSize: "50px"
        }

        return(
            <div>
                <div style = {dice}>{this.props.num}</div>
            </div>
        )
    }
   
}

export default Dicebox