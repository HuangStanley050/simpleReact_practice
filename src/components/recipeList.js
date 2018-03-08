import React from "react";
import "./recipeList.css";
import Recipe from "./recipe.js";
import Form from "./form.js";
import Nav from "./nav.js";

//var counter=0;
export default class RecipeList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isHidden: true,
            recipes:[{
                name:"Pizza",
                ingredients:"cheese, olives and dough",
                picture:"https://images.unsplash.com/photo-1511516412963-801b050c92aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f23e22ac67f9dd47c1471491abfdda84&auto=format&fit=crop&w=500&q=60"
            },
            {
                name:"Burger",
                ingredients:"Beef, tomatoe and bread",
                picture:"https://images.unsplash.com/photo-1456418047667-56bcd35b1a88?ixlib=rb-0.3.5&s=71a1eb4aaa6bff6b97a2dc487d7705ac&auto=format&fit=crop&w=500&q=60"
            },
            {
                name:"Dumpling",
                ingredients:"Pork, spinach and chives",
                picture:"https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=500&q=60"
            }
            ]
            
        };
        this.toggleHidden=this.toggleHidden.bind(this);
        this.updateRecipes=this.updateRecipes.bind(this);
    }
    
    toggleHidden () {
        this.setState({
        isHidden: !this.state.isHidden
        });
        //alert(this.state.isHidden);
    }
    
    updateRecipes(name,ingredients,url){
        //alert(name+"--"+ingredients+"---"+url);
        var newRecipes=this.state.recipes;
        var newFood={};
        newFood.name=name;
        newFood.ingredients=ingredients;
        newFood.picture=url;
        newRecipes.push(newFood);
        console.log(newRecipes);
        this.setState({recipes:newRecipes});
    }
    
    render(){
        //{!this.state.isHidden && <Child />}
        
        var list=this.state.recipes.map(function(recipe,i){
            //counter++;
           return <Recipe key={recipe.name+" "+i}recipes={recipe} /> 
        });
        
        return (
                <div className="recipeWrapper">
                    
                    <Nav toggle={this.toggleHidden} />
                    {!this.state.isHidden && <Form update={this.updateRecipes} />}
                    {list}
                   
                    
                </div>
            );
    }
}