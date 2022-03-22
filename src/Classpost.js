import axios from 'axios'
import React, { Component } from 'react'

export class Classpost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             passWord:'',
             phoneNumber:'',
             email:''
        }
    }
    changeHandler = e=>{
this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state).then(res=>console.log(res))
    }
    render() {
        const {userName,passWord,phoneNumber,email}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
            <input type="text" name="userName" value={userName} onChange={this.changeHandler}/><br/>
            <input type="password" name="passWord" value={passWord} onChange={this.changeHandler}/><br/>
            <input type="text" name="phoneNumber" value={phoneNumber} onChange={this.changeHandler}/><br/>
            <input type="text" name="email" value={email} onChange={this.changeHandler}/><br/>
            <input type="submit" name="submit"/><br/>
            </form>
            </div>
        )
    }
}

export default Classpost
