import React from 'react'
import ReactDOM from 'react-dom'
import RickAndMortyContext from './Context/RickAndMortyContext'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import './styles.css'


ReactDOM.render(
    <BrowserRouter>
        <RickAndMortyContext>
            <App />
        </RickAndMortyContext>
    </BrowserRouter>, document.getElementById('root'));


