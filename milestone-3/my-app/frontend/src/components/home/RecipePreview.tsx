import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from "../recipeData"
import worldmap from './worldmap.png'

function RecipePreview (props: Recipe){
    let hRef = props.buttonHref
    return(     
        <div className = "recipe-container">
            <div className = "app" style={{ position: "relative" }}>
                <img src={worldmap} style={{ width: "100%" }} />
                <div style={{ position: "absolute", top: "75%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <Link to = {hRef}>
                        <button className='button-1'>
                            Get Started
                        </button>
                    </Link>
                    
                </div>
                <p style={{ position: "absolute", top: "10%", left: "50%", transform: "translate(-50%, -50%)" }}><span>Welcome</span> to a Eco-Friendly Tomorrow.</p>
            </div>
        </div>
    )
};

export default RecipePreview;