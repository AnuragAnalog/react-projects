import React, { useState } from "react";
import Navbar from "/src/components/Navbar";
import Main from "/src/components/Main";

function App() {
    const [darkMode, setDarkMode] = useState("");
    
    function toggleDarkMode() {
        setDarkMode(prevMode => prevMode === "" ? "dark" : "");
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}

export default App;