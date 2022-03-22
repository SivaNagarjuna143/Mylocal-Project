import axios from 'axios';
import React, { Component } from 'react'

export default class Json extends Component {
    handleSubmit=e=>{
        e.preventDefault();
        const data={
        email:this.email,
        password:this.password
        }
axios.post('http://localhost:3000',data).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
    };
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <input type='password' onChange={e=>this.password=e.target.value}/>
              <br></br>
              <input type='email'  onChange={e=>this.email=e.target.value}/><br></br>
              <button>submit</button>
          </form>

      </div>
    )
  }
}
