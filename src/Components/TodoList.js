import React,{useEffect, useState} from 'react';

const TodoList = () => {
    const LOCAL_STROGE="add";
    const[data,setData]=useState('');
    const [add,setAdd]=useState([]);
    const changeHandler= e =>{
        setData(e.target.value)
    }
    const submitHandler = e=>{
        e.preventDefault();
        
        const newAdd=[...add,data];
        setAdd(newAdd);
        setData('');
        

console.log(add)
    }
    //getdata in localstroge
    useEffect(()=>{
    
        let myData=JSON.parse(localStorage.getItem(LOCAL_STROGE)); 
       if(myData) setAdd(myData)
    },[])
    // setdata in localstroge
    useEffect(()=>{
        
        localStorage.setItem(LOCAL_STROGE ,JSON.stringify(add)); 
       
    },[add])
   
    const deleteHandler = (event,indexValue)=>{
const newDelete= add.filter((index)=>index !== indexValue);
setAdd(newDelete);
    }
    
    
  return (
      <div className='container'>
      <div className='card'>
<div className='card-title'>
<h2>TodoList-App</h2>
</div>
<div className='card-body'>
<form onSubmit={submitHandler}>
    <input type="text"  value={data} required onChange={changeHandler}/>&nbsp;&nbsp;
    <button className='btn btn-primary'>Add</button>
</form>
</div>
      </div>
      <div>
          {add.map((item,index)=>
          <div>{item} &nbsp;&nbsp; <button onClick={(event)=>deleteHandler(event,item,index)} className='btn btn-danger' style={{position:"relative",marginLeft:"11px",marginTop:"18px"}}>X</button></div>
          )}
      </div>
      </div>

  )
};

export default TodoList;
