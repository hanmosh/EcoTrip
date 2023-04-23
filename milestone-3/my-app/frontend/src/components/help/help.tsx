import React from "react";
import { Link } from 'react-router-dom';
import './help.css';
import co2 from './co2.jpeg';
import petitionpic from './petitionpic.jpeg'

export default function Help() {
  return(
    <>
    <p className="title">How You Can Help</p>
    <div className="image-container">
      <img src={co2} style={{ width: "30%", height: "30%", borderRadius: "10px" }}></img>
      <div style={{textAlign: "center"}}>
        <h2>Reduce Your Carbon Footprint, Travel Responsibly</h2>
        <ul>
          <li>Use public transportation whenever possible.</li>
          <li>Bike, walk or carpool for shorter trips.</li>
          <li>Choose eco-friendly hotels that implement sustainable practices.</li>
          <li>Offset your carbon emissions by supporting projects that reduce greenhouse gases.</li>
        </ul>
      </div>
    </div>
    <div style={{float:"left", padding: "10px"}} className="image-container">
      <img src={petitionpic} style={{ width: "40%", height: "40%", borderRadius: "20px", padding: "5px" } }></img>
      <div style={{textAlign: "center"}}>
        <h2>Take Action! Sign Petitions for CO2 Emission Reduction</h2>
        <ul style={{fontSize: "24px"}}>
          <li><a href="https://www.change.org/p/the-people-of-this-planet-stop-carbon-dioxide-usage?source_location=search">
      Petition to Stop CO2 Usage
    </a></li>
    <li><a href="https://www.change.org/p/greenpeace-reduce-carbon-dioxide-in-the-atmosphere-and-stop-the-climate-change-and-extreme-weather?source_location=search">
      Petition for Climate Change Prevention
    </a></li>
          <li><a href = "https://www.change.org/p/more-trees-in-canada-less-carbon-dioxide?source_location=search">Petition to prevent deforestation in Canada</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}












