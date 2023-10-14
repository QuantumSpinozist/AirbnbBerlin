import React from "react";
import '../index.css';
import logo from '../images/logo.png';


export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <h1>Berlin Airbnb Pricing</h1>
        </nav>
    )
}