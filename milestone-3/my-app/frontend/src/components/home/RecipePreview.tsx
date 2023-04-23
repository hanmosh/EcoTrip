import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from "../recipeData"
import worldmap from './worldmap.png'
import backgroundImage from './worldmap.png';


function RecipePreview (props: Recipe){
    let hRef = props.buttonHref
    return(     
        <div className = "recipe-container">
            <div className = "app" style={{ position: "relative" }}>
                <img src={worldmap} alt= "map" style={{ width: "100%", height: "100%" }} />
                <div style={{ position: "absolute", top: "75%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <Link to = {hRef}>
                        <button className='button-1'>
                            Get Started
                        </button>
                    </Link>
                    
                </div>
                <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                    <p className="welcome-class" style={{ fontSize: "60px", fontWeight: "bold", fontFamily: "'Roboto Slab', seriff", margin: 0 }}>Welcome</p>
                    <p style={{ fontSize: "35px", fontFamily: "'Roboto Slab', serif", margin: 0 }}>to a Eco-Friendly Tomorrow.</p>
                </div>

            </div>
        </div>
    )
};

export default RecipePreview;