import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="title-container">
      <div className="ecoTrip-title">
      <h1>
        <a href="/">Eco Trip</a>
      </h1> 
      </div>

      <div className="nav-links">
        <nav>
            <Link className = "nav-item" to='/logIn'>Login</Link>
            <Link className = "nav-item" to='/signIn'>Sign Up</Link>
        </nav>
        </div>  
    </div>
  );
}