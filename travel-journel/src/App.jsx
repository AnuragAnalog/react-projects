import React from "react";

import data from "/src/assets/data.jsx";
import NavBar from "/src/components/NavBar.jsx";
import Card from "/src/components/Card.jsx";

function App() {
    const cardElements = data.map(card => {
        <Card
            title={card.title}
            location={card.location}
            googleMapsUrl={card.googleMapsUrl}
            startDate={card.startDate}
            endDate={card.endDate}
            description={card.description}
            imageUrl={card.imageUrl}
        />
    });

    return (
        <div className="App">
            <NavBar />
            {cardElements}
        </div>
    )
}

export default App;