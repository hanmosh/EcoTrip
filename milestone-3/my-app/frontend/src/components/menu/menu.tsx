import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="clickable-images">
      <Link to='/form'>
        <a>
          <img src= "https://cdn-icons-png.flaticon.com/512/2988/2988198.png" alt= "calculator" height="400" width="400"/>
        </a>
      </Link>

      <Link to='/form'>
        <a>
          <img src= "https://www.pngplay.com/wp-content/uploads/6/Airplane-Transparent-PNG.png" alt= "plane" height="400" width="400"/>
        </a>
      </Link>

      <Link to='/form'>
        <a>
          <img src= "https://starpng.com/public/uploads/preview/handshake-transparent-png-image-101577197248lxk7urbwp2.png" alt= "handshake" height="400" width="400"/>
        </a>
      </Link>
    
    </div>
  );
}