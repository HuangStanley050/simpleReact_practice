import React from "react";
import "./nav.css";

export default class Nav extends React.Component{
    
    handleClick(){
        this.props.toggle();
    }
    
    render(){
        return (
                <div className="NavContainer">
                    <h2>Recipe App</h2>
                    
                    <h2 onClick={this.handleClick.bind(this)} className="point">Add Recipe</h2>
                </div>
            );
    }
}