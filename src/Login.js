import React,{useState} from 'react'
import axios from 'axios'

export default function Login() {
const [data,setData]=useState({
    userName:'',
    passWord:'',
    phoneNumber:'',
    email:''
})
 const {userName,passWord,phoneNumber,email}=data;
 const  changeHandler = e =>{
     setData({...data,[e.target.name]:[e.target.value]})
 } 
 const submitHandler = e =>{
     e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts",data).then(res=>console.log(res))
 }  
     
    return (
        <div>
   <form onSubmit={submitHandler}>
       <input type="text" name="userName" value={userName} onChange={changeHandler}/><br/>
       <input type="passWord" name="passWord" value={passWord} onChange={changeHandler}/><br/>
       <input type="tel" name="phoneNumber" value={phoneNumber} onChange={changeHandler}/><br/>
       <input type="email" name="email" value={email} onChange={changeHandler}/><br/>
       <input type="submit" name="submit"/>
   </form>
        </div>
    )
    }
