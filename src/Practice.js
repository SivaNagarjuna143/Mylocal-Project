import React, { useState } from 'react'

function Practice() {
    const [table,setTable]=useState([]);
    const [data,setData]=useState({
        username:'',
        password:''
    })
    const{username,password}=data;
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault();
        let newTable=[...table,data];
        setTable(newTable);
        setData({
            username:'',
            password:''
        })
    }
    const deleteHandler=(event,indexvalue)=>{
        let deleteItem=table.filter((index)=>index!==indexvalue);
        setTable(deleteItem)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text'  name='username'value={username} onChange={changeHandler}/><br></br>
            <input type='password' name='password'value={password} onChange={changeHandler}/><br></br>
            <button className='btn btn-primary'>Add</button>
       </form>
       <table className='table table-hover'>
           <tr>
               <th>UserName</th>
               <th>Password</th>
           </tr>
           <tbody >
             
                   {
                   table.map((item,index)=>
                   <tr>
                   <td key={index}>{item.username}</td>
                   <td>{item.password}</td>
                   <button className='btn btn-danger' onClick={(event)=>deleteHandler(event,item,index)}>Delete</button>
                   </tr>
                   )}
               
           </tbody>
       </table>
    </div>
  )
}

export default Practice