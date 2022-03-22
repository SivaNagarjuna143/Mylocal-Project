import React from "react";
import axios from "axios";
class ClassComponent extends React.Component{
  constructor(props){
    super(props);
this.state={
  username:'',
  email:'',
password:''

}
  }
  changeHandler = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  //Get,Post Method
  submitHandler = (e) =>{
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(res=>console.log(res))
    console.log(this.state)
  }
  
  render(){
    const {username,password,email}=this.state;
    return(
<div>
  <center>
    <form onSubmit={this.submitHandler}>
      <input type="text" name="username" value={username} onChange={this.changeHandler}/><br></br>
      <input type="email" name="email" value={email}  onChange={this.changeHandler}/><br></br>
      <input type="password" name="password" value={password}  onChange={this.changeHandler}/><br></br>
       <button>submit</button>
    </form>
  </center>
</div>
    )
  }
}
export default ClassComponent;