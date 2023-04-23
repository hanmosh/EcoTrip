import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <Link to='/form'>
      <a>
      <img src= "https://images.photowall.com/products/64481/voguish-world-map-blue.jpg?h=699&q=85" alt= "map" />
      </a>
    </Link>

  );
}