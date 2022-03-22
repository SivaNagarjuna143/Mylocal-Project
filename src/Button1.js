import React, { Component } from "react";

class Button1 extends Component{
constructor(props){
    super(props);
    this.state={
        title:"Door Locked"
    }
}
componentDidMount(){
    this.setState({title:"Updated"});
}
    render(){
        return(
            <div>{this.state.title}</div>
            
        )
    }
}
export default Button1;