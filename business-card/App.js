import React from "react";

function App() {
    return (
        <div className="main-card">
            <img className="main-image" src="./images/profile.png" />

            <div className="info">
                <h2 className="name"> Anurag Peddi </h2>
                <h3 className="profession"> Student </h3>
                <a className="portfolio" href="anuraganalog.github.io"> anuraganalog.github.io </a>

                <div className="connect-icons">
                    <button className="connect-icon-email" onclick="window.location.href='mailto:anurag.peddi1998@gmail.com';">
                        <img src="./images/Mail.svg" />
                        Email
                    </button>
                    <button className="connect-icon-linkedin" onclick="window.location.href='https://www.linkedin.com/in/peddi-anurag-01767a166/';">
                        <img src="./images/LinkedIn.svg" />
                        LinkedIn
                    </button>
                </div>

                <h3 className="sub-title-about"> About </h3>
                <p className="info-para-about">
                    I am frontend developer, with a knowledge also in
                    machine and deep learning framworks.
                </p>

                <h3 className="sub-title-interests"> Interests </h3>
                <p className="info-para-interests">
                    I am interested in learning new technologies and
                    frameworks. I have started learning cooking, and skating
                    has also been one of my favourite hobbies.
                </p>
            </div>

            <footer className="footer-icons">
                <img className="footer-icon" src="./images/Twitter Icon.svg" />
                <img className="footer-icon" src="./images/Instagram Icon.svg" />
                <img className="footer-icon" src="./images/Facebook Icon.svg" />
                <img className="footer-icon" src="./images/GitHub Icon.svg" />
            </footer>
        </div>
    )
}

export default App;