import React from 'react'
import ReactDOM from 'react-dom'
import RickAndMortyProvider from './Context/RickAndMortyContext'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import './styles.css'


ReactDOM.render(
    <BrowserRouter>
        <RickAndMortyProvider>
            <App />
        </RickAndMortyProvider>
    </BrowserRouter>, document.getElementById('root'));


