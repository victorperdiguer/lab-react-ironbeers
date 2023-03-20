import React from "react"
import { useEffect, useState } from "react";
import beerService from "../services/beerService";
import BeerCard from "../components/BeerCard";
import axios from "axios";

const ListBeers = (props) => {
    const [beers, setBeers] = useState([]);
    const getBeers = async () => {
        try {
            const response = await beerService.getBeers();
            setBeers(response);
        } catch (error) {
            console.error(error);
        }
    }
    //this use effect hook will be triggered on loading this ListBeers component, because the activation array for the hook is empty
    useEffect(() => {
        getBeers();
    }, [])

    return (
        <div className="beer-list">
        {beers.map((beer) => {
            return (
                <div key={beer._id}>
                <BeerCard props={beer}/>
                <hr></hr>
                </div>
            )
        })}
        </div>
    )
};

export default ListBeers;
