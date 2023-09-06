import React from "react";

function Meme() {
    return (
        <div className="meme">
            <form className="meme-form">
                <input className="meme--input" type="text" placeholder="Top Text" />
                <input className="meme--input" type="text" placeholder="Bottom Text" />
                <button className="meme--button">Get a new meme image 🖼</button>
            </form>
            <img className="meme--img" src="http://i.imgflip.com/1bij.jpg" alt="Meme" />
        </div>
    )
}

export default Meme;