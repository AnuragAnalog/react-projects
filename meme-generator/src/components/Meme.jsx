import React from "react";
import memeData from '/src/memeData';

function Meme() {
    function getRandomMeme() {
        const { memes } = memeData["data"];
        const randomNumber = Math.floor(Math.random() * memes.length);
        console.log(memes[randomNumber].url);

        return memes[randomNumber].url;
    };

    return (
        <div className="meme">
            <div className="meme-form">
                <input className="meme--input" type="text" placeholder="Top Text" />
                <input className="meme--input" type="text" placeholder="Bottom Text" />
                <button className="meme--button">Get a new meme image 🖼</button>
            </div>
            <img className="meme--img" src={ getRandomMeme() } alt="Meme" />
        </div>
    )
}

export default Meme;