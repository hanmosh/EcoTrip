import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="title-container">
      <div className="ecoTrip-title">
      <h1>
        <a href="/">EcoTrip</a>
      </h1> 
      </div>

      <div className="nav-links">
        <nav>
            <Link className = "btn btn-white btn-animate" to='/logIn'>Login</Link>
            <Link className="btn btn-white btn-animate" to= "/signIn">Sign Up</Link>

            {/* <a href="/signIn" className="btn btn-white btn-animate">Sign Up</a> */}
        </nav>
        </div>  
    </div>
  );
}