import React from "react"
import { useState, useEffect } from "react";
import beerService from "../services/beerService";
import IndividualBeer from "../components/IndividualBeer";

const RandomBeer = () => {
    const [beer, setBeer] = useState({})
    const getBeer = async () => {
        const response = await beerService.getRandomBeer();
        console.log(response);
        setBeer(response);
    }
    useEffect(() => {
        getBeer();
    }, [])

    return (
        <IndividualBeer beer={beer}/>
    )
};

export default RandomBeer;
