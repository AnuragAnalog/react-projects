import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="pic-img" />
            <div className="loc-info">
                <img src="/src/assets/images/Location Icon.svg" className="card-img"/>
                <h3 className="card-location">{props.title}</h3>
                <a href={props.googleMapsUrl} className="card-link">View on Google Maps</a>
            </div>
            <h1 className="card-title">{props.title}</h1>
            <p className="card-date">{props.startDate}-{props.endDate}</p>
            <p className="card-description">{props.description}</p>
        </div>
    )
}

export default Card;