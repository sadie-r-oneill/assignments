import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Movie from './components/Movie.js'
import AddMovieForm from './components/AddMovieForm.js'


export default function App(){
    const [movies, setMovies] = useState([])

    function getMovies(){
        axios.get("/movies")
        .then(res => setMovies(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMovies()
    }, [])
    
    return(
        <div className = "movie-container">
            <AddMovieForm />
            {movies.map(movie => <Movie {...movie}key = {movie.title}/>)}
        </div>
    )
}