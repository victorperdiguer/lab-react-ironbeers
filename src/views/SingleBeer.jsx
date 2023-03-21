import React from "react"
import { useState, useEffect } from "react";
import beerService from "../services/beerService";
import { useParams } from "react-router-dom";

const SingleBeer = () => {
    const [beer, setBeer] = useState({})
    const {beerId} = useParams()
    const getBeer = async () => {
        const response = await beerService.getBeerById(beerId);
        console.log(response);
        setBeer(response);
    }
    useEffect(() => {
        getBeer();
    }, [])

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

export default SingleBeer;
