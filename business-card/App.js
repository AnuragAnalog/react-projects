import React from "react";

function App() {
    return (
        <div class="main-card">
            <img class="main-image" src="./images/profile.png" />

            <div class="info">
                <h2 class="name"> Anurag Peddi </h2>
                <h3 class="profession"> Student </h3>
                <a class="portfolio" href="anuraganalog.github.io"> anuraganalog.github.io </a>

                <div class="connect-icons">
                    <button class="connect-icon-email" onclick="window.location.href='mailto:anurag.peddi1998@gmail.com';">
                        <img src="./images/Mail.svg" />
                        Email
                    </button>
                    <button class="connect-icon-linkedin" onclick="window.location.href='https://www.linkedin.com/in/peddi-anurag-01767a166/';">
                        <img src="./images/LinkedIn.svg" />
                        LinkedIn
                    </button>
                </div>

                <h3 class="sub-title-about"> About </h3>
                <p class="info-para-about">
                    I am frontend developer, with a knowledge also in
                    machine and deep learning framworks.
                </p>

                <h3 class="sub-title-interests"> Interests </h3>
                <p class="info-para-interests">
                    I am interested in learning new technologies and
                    frameworks. I have started learning cooking, and skating
                    has also been one of my favourite hobbies.
                </p>
            </div>

            <footer class="footer-icons">
                <img class="footer-icon" src="./images/Twitter Icon.svg" />
                <img class="footer-icon" src="./images/Instagram Icon.svg" />
                <img class="footer-icon" src="./images/Facebook Icon.svg" />
                <img class="footer-icon" src="./images/GitHub Icon.svg" />
            </footer>
        </div>
    )
}

export default App;