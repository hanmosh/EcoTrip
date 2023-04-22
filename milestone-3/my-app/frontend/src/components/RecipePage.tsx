import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import  { Recipe } from './recipeData';
import '../App.css';


export default function RecipePage (){

    const[recipe, setRecipe] = useState<Recipe>({
        buttonHref: ""
    }); 
    const {name} = useParams();

    // useEffect (() => {
    //     window.scrollTo(0, 0)
    //     fetch(`http://localhost:3001/recipes/`)
    //     .then(response => response.json()) 
    //     .then(recipeData => {
    //         setRecipe(recipeData[0])
    //         setAllIngredients(recipeData[0].ingredients)
    //         setAllSteps(recipeData[0].instructions)
    //         console.log(recipeData[0])})
    //     .catch(err => console.log(err))
    // },[name]);
  
    // const [newIngredient, setNewIngredient] = useState('');
    // const [allIngredients, setAllIngredients] = useState(recipe.ingredients); 
    // const [newStep, setNewStep] = useState('');
    // const [allSteps, setAllSteps] = useState(recipe.instructions);

    // const AddIngredient = () => {
    //     const requestOptions = {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ newIngredient })
    //     }
    //     fetch(`http://localhost:3001/recipes/ingredient`, requestOptions)
    //     .then(res => console.log(res));
    //     setAllIngredients([...allIngredients, newIngredient]);
    // }
    
    // const AddInstruction = () => {
    //     const requestOptions = {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ newStep })
    //     }
    //     fetch(`http://localhost:3001/recipes/instruction`, requestOptions)
    //     .then(res => console.log(res));
    //     setAllSteps([...allSteps, newStep]);
    // }

    return;         
        // <div className = "recipe-container">
 
        //                     <button onClick ={AddIngredient}>
        //                         add ingredient
        //                     </button>
        //                 </div>
       
};

