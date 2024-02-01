import React from 'react';
import ReactDOM from 'react-dom/client';
import trollFace from './images/troll-face.png';
import './Header.css';

export default function header(){
    return (
        <header className = "header">
             <img 
                src={trollFace}
                className="header--image"
            />
            <h1 className="header--title">Meme Generator</h1>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}