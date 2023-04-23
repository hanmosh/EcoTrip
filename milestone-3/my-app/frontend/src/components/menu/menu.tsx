import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './menu.css';
import plane from './images/plane.png';
import calculator from './images/calculator.png';
import handshake from './images/handshake.png';
   
export default function Menu() {
  return (
    <div className="clickable-images">

      <Link to='/form'>
        <a>
          <img src= {plane} alt= "plane" height="400" width="400"/>
        </a>
      </Link>
      
      <Link to='/form'>
        <a>
          <img src= {handshake} alt= "handshake" height="400" width="400"/>
        </a>
      </Link>
      
      <Link to='/form'>
        <a>
          <img src= {calculator} alt= "calculator" height="400" width="400"/>
        </a>
      </Link>

    </div>
  );
}