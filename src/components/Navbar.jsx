import React from "react"
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const backFunction = () => {
        navigate(-1);
    }
    return (
        <nav className="navbar">
            <div className="icon-container">
                <img src="https://cdn-icons-png.flaticon.com/512/0/340.png" alt="back" onClick={backFunction} className="nav-icon"/>
            </div>
            <h1 className="nav-title">IRONBEERS</h1>
            <div className="icon-container">
                <Link to="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home" className="nav-icon"/>
                </Link>
            </div>
        </nav>
    )
};

export default Navbar;
