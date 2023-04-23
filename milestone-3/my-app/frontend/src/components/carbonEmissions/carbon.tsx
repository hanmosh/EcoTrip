import React from "react";
import { Link } from 'react-router-dom';
import './carbon.css';
import Graph from './Screen Shot 2023-04-23 at 7.05.42 AM.png';


export default function Carbon() {
  return(
    
    <div className="Graph">
      <a href="https://replit.com/@rajaadil07/GranularAllAccounting?from=notifications#index.html" target="_blank">       
       <img src= {Graph} alt= "carbon emissions graph" height="700" width="900"/>
      </a>
    </div>

  );
}