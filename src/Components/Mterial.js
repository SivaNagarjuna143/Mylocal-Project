import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios';
function Mterial() {
    const [data,setData]=useState([]);
    const columns=[
        {title:"ID",field:'id'},
        {title:"Name",field:'name'},
        {title:"UserName",field:'username'},
        
    ]
    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setData(res.data))
    },[]);
   
  return (
    <div >
        <MaterialTable 
        columns={columns}
        title="Employee Data"
        data={data}/>
    </div>
  )
}

export default Mterial