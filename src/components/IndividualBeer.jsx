import React from "react"

const IndividualBeer = (props) => {
    const {beer} = props;
    return (
        <div className="beer-detail">
            <div className="detail-container">
                <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="detail-container">
                <h1 className="beer-name">{beer.name}</h1>
                <h2 className="beer-attenuation">{beer.attenuation_level}</h2>
            </div>
            <div className="detail-container">
                <h1 className="beer-tagline">{beer.tagline}</h1>
                <h2 className="beer-date">{beer.first_brewed}</h2>
            </div>
            <p>{beer.description}</p>
            <h3>{beer.contributed_by}</h3>
        </div>
    )
};

export default IndividualBeer;
