import React from "react";
import "./recipe.css";


const Recipe = function(props){
    
    
    var name=props.recipes.name;
    var ingredients=props.recipes.ingredients;
    var image=props.recipes.picture;
    
    function handleDelete(){
        props.delete(name);
    }
    
    return (
        <div className="recipe">
        <h4>Name: {name}</h4>
        <h4>Ingredients: {ingredients}</h4>
        <img alt="food"src={image} />
        
        <button onClick={handleDelete}>Delete</button>
        </div>
        );
}

export default Recipe;