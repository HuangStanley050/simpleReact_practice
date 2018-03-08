import React from "react";
import "./form.css";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            ingredients:"",
            picUrl:""
        }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleChange (e) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [e.target.name]: e.target.value });
    }
    
    handleSubmit(){
        this.props.update(this.state.name,this.state.ingredients,this.state.picUrl);
    }
    
    
    
    
    
    render(){
        return (
            <div className="formWrapper">
             <span>Name of food</span><input name="name"type="text" onChange={this.handleChange}  />
             <span>Ingredients</span><input name="ingredients"type="text" onChange={this.handleChange} />
             <span>Picture Url</span><input name="picUrl"type="text" onChange={this.handleChange} />
             <button onClick={this.handleSubmit}>Submit</button>
            </div>
            );
    }
}

export default Form;