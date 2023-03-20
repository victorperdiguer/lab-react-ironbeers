import React from "react"
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

const Home = (props) => {
  return (
    <div className="home-page">
        <div className="all-beers home-card">
            <Link to="/beers">
                <img src={beers} alt="all beers" className="home-image"/>
            </Link>
            <h2>All Beers</h2>
            <p>Take a look at all the beers registered in IronBeers and pick your favorite.</p>
        </div>
        <div className="random-beer home-card">
            <Link to="/random-beer">
                <img src={randomBeer} alt="random beer" className="home-image"/>
            </Link>
            <h2>Random Beer</h2>
            <p>Feeling cheeky? Test your luck and enjoy a random beer!</p>
        </div>
        <div className="new-beer home-card">
            <Link to="/new-beer">
                <img src={newBeer} alt="new beer" className="home-image"/>
            </Link>
            <h2>New Beer</h2>
            <p>Not finding what you're looking for? Help IronBeers and add the missing brew!</p>
        </div>
    </div>
  )
};

export default Home;
