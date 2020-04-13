import React, {useState} from 'react'

export default function AddMovieForm(){
    const initInputs = { title:"", genre:""}
    const [inputs, setInputs] = useState(initInputs)
    console.log(inputs)

    function handleChange(e){
        e.preventDefault()
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        setInputs(initInputs)
        console.log()
    }

    return(
        <form onSubmit= {handleSubmit}>
            <input className = "form"
                type="text"
                name=""
                value ={setInputs.title}
                onChange={handleChange}
                placeholder= "Title" />
            <input className = "form"
                type="text"
                name=""
                value={setInputs.genre}
                onChange={handleChange}
                placeholder = "Genre" />
            <button onClick = {handleSubmit}>Add Movie</button>
        </form>
    )
}