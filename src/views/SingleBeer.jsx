import React from "react"
import { useState, useEffect } from "react";
import beerService from "../services/beerService";
import { useParams } from "react-router-dom";
import IndividualBeer from "../components/IndividualBeer";

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
        <IndividualBeer beer={beer}/>
    )
};

export default SingleBeer;
