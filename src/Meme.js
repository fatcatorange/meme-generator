import React from "react";
import './Meme.css'

export default function Meme(){

    

    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>{
            setAllMemes(data.data.memes)
            console.log(data);
        })
    },[])

    function changeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prev=>{
            return{
                ...prev,
                randomImage:url
            }
        })
    }

    function changeInput(event){
        setMeme(prev=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }

    return (
        <main>
            <div className="input-container">
                <input
                    type = "text"
                    placeholder="Top Text"
                    className="input-field"
                    name = "topText"
                    value = {meme.topText}
                    onChange={changeInput}
                />
                <input
                    type = "text"
                    placeholder="Bottom Text"
                    className="input-field"
                    name = "bottomText"
                    value = {meme.bottomText}
                    onChange={changeInput}
                />
                <button className="submit" onClick={changeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img 
                    src = {meme.randomImage} className="memeImage"
                />
                <h1 className="top-text">{meme.topText}</h1>
                <h1 className="bottom-text">{meme.bottomText}</h1>
            </div>
            
        </main>
    )
    
}