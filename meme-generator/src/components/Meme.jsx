import React, { useState } from "react";
import memeData from '/src/memeData';

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeimages] = React.useState(memeData);
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memesArray[randomNumber].url
            }
        });
    }

    function updateText(event) {
        const { name, value } = event.target;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        });
    }

    return (
        <main>
        <div className="meme-form">
            <input 
                type="text"
                placeholder="Top text"
                className="meme--input"
                name="topText"
                onChange={updateText}
                value={meme.topText}
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="meme--input"
                name="bottomText"
                onChange={updateText}
                value={meme.bottomText}
            />
            <button 
                className="meme--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme--img" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
    )
}

export default Meme;