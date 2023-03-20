import React from "react"
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const backFunction = () => {
        navigate(-1);
    }
    return (
        <nav className="navbar">
            <img src="https://cdn-icons-png.flaticon.com/512/0/340.png" alt="back" onClick={backFunction} className="nav-icon"/>
            <h1 className="nav-title">IRONBEERS</h1>
            <Link to="/">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home" className="nav-icon"/>
            </Link>
        </nav>
    )
};

export default Navbar;
