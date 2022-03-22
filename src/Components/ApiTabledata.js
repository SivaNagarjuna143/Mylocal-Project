import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

const ApiTabledata = () => {
    const[data,setData]=useState([]);
    const columns=[
       {title:'Id',field:'id'},
       {title:'Name',field:'name'},
       {title:'UserName',field:'username'}
      ]
useEffect(()=>{
 axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setData(res.data))

},[]);
  return (
    <div> 
        
    <MaterialTable columns={columns} data={data}/>

    </div>
  )
};

export default ApiTabledata;
