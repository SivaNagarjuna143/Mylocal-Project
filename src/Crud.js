
import React,{useEffect, useState} from 'react';

const Crud = () => {
    const myKey="table";

 const [table,setTable] =useState([]) ; 

const [data,setData]=useState({
    username:'',
    password:''
})
const {username,password}=data;
const changeHandler = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler = (e) =>{
    e.preventDefault();
    
    let newTable=[...table,data]
   setTable(newTable);
   setData({
       username:'',
       password:''
   });
   console.log(table)
}
useEffect(()=>{
    let myData=JSON.parse(localStorage.getItem(myKey))
    if(myData) setTable(myData)
    },[])
useEffect(()=>{
localStorage.setItem(myKey,JSON.stringify(table))
},[table])

const deleteHandler =(event,indexvalue)=>{
  let deleteTable=table.filter((index)=>index!== indexvalue);
  setTable(deleteTable)
    
     setData({
        username:'',
        password:''
    });
    console.log(table)
    
}

  return (
    <div> 
        <center>
<form onSubmit={submitHandler}>
    <input type='text' name='username' value={username} onChange={changeHandler}  required/><br></br>
    <input type='password' name='password' value={password} onChange={changeHandler} required/><br></br>
     
 <input type="submit" name="submit" value="Submit"className='btn btn-primary' />
       

</form>
<div>
   <table className='table table-hover'>
       <thead>
           <th>Name</th>
           <th>Password</th>
           <th>Actions</th>
       </thead>
       <tbody>
           {table.map((item,index)=>
           <tr>
               <td key={item.id}>{item.username}</td>
               <td>{item.password}</td>
               <td><button className='btn btn-danger' onClick={(event)=>deleteHandler(event,item,index)}>Delete</button></td>
           </tr>
           )}
       </tbody>
   </table>
</div>
</center>
    </div>
  )
           }

export default Crud;
