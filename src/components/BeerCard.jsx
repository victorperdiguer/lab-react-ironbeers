import React from "react"
import { useNavigate } from "react-router-dom";

const BeerCard = ({props}) => {
    const {image_url, name, tagline, contributed_by, _id } = props;
    const navigate = useNavigate();
    const beerDetail = () => {
        navigate(`/beers/${_id}`);
    }
    return (
        <div className="beer-card" onClick={beerDetail}>
            <div className="beer-image-container">
                <img src={image_url} alt={name} />
            </div>
            <div className="beer-card-text">
                <h1>{name}</h1>
                <h2>{tagline}</h2>
                <h6><span style={{fontWeight: 800}}>Created by: </span>{contributed_by ? contributed_by : 'Community post'}</h6>
            </div>
        </div>
    )
};

export default BeerCard;
