import React from "react";

import data from "./data";
import NavBar from "./components/NavBar";
import Card from "./components/Card";

function App() {
    const cardElements = data.map(card => {
        <Card
            title={card.title},
            location={card.location},
            googleMapsUrl={card.googleMapsUrl},
            startDate={card.startDate},
            endDate={card.endDate},
            description={card.description},
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