import React,{useState,useEffect} from "react";

const ComponentA = () =>{
    const LOCAL_STORAGE_KEY= [];
    const [user,setUser]=useState({
        username:'',
        email:''
    });
    const {username,email}=user;
const changeHandler = e =>{
  setUser({...user,[e.target.name]:[e.target.value]})
    
}
const submitHandler = e =>{
    e.preventDefault();
    console.log(user)
}
useEffect(()=>{
LOCAL_STORAGE_KEY.push(user)
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(user))
},[user]);


    return(
<div>
    <center>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="name" value={username} name="username"required onChange={changeHandler}/><br></br>
        <input type="text" placeholder="email" value={email} name="email" required onChange={changeHandler}/><br></br>
        <button>Submit</button>
        </form>
    </center>

    <br></br>
   
    
</div>
    )
}
export default ComponentA