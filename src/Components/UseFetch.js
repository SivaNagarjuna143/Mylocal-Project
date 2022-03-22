import React,{useEffect,useState} from'react';
import axios from 'axios';

const UseFetch=()=>{
  const [data,setData]=useState([]);
  const [count,setCount]=useState(0)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setData(res.data))
  })
  return(
    <div>
     <table className='table table-hover'>
       <thead>
        <th>Id</th>
        <th>Name</th>
        <th>UserName</th>
        <th>City</th>
       </thead>
       <tbody>
         {data.map((item,index)=>{
           return(
             <tr>
               <td key={index}>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.username}</td>
               <td>{item.address.city}</td>
             </tr>
           )
         })}
       </tbody>

     </table>
   Count: {count} <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
export default UseFetch