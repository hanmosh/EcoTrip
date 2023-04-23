import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Menu from './components/menu/menu'
import Navbar from "./components/navBar/navbar";
import Account from "./components/account/account";
import Home from "./components/home/home";
import Form from "./components/form/form"; 
import Carbon from "./components/carbonEmissions/carbon"; 
import Help from "./components/help/help"; 

interface Recipe{ 
  name: string;
  image: string;
  description: string;
  imgAltName: string;
  ingredients: string[];
  instructions: string[];
  orig_link: string; 
  orig_link_name: string;
  buttonHref: string;
}



function App() {

  // const[recipes, setRecipes] = useState<Recipe[]>([]); 

  // useEffect (() => {
  //   fetch("http://localhost3001/recipes")
  //   .then(response => response.json()) 
  //   .then(recipeData => setRecipes(recipeData))
  //   .catch(err => console.log(err))
  // },[]);

  return (
    <body>
      <BrowserRouter>  
      <Navbar/>
        <Routes>
              <Route path = "/signIn" element ={<Account/>}/>
              <Route path = "/logIn" element ={<Account/>}/>
              <Route path = "/" element = {<Home/>} />
              <Route path = "/menu" element ={<Menu/>}/>
              <Route path = "/form" element ={<Form/>}/>
              <Route path = "/carbon" element ={<Carbon/>}/>
              <Route path = "/help" element ={<Help/>}/>
        </Routes>
      </BrowserRouter>
    </body>
  );
} 
export default App;
