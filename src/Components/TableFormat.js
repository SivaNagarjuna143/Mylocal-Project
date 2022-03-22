import React,{useState} from 'react';
import MaterialTable from 'material-table';

const emplyList = [
  {name:'Raj',email:'raj@gmail.com',phonenumber:'852454758',age:'21',gender:'M',city:'Chennai'},
  {name:'Siva',email:'siva@gmail.com',phonenumber:'982454758',age:'20',gender:'M',city:'Hyderabad'},
  {name:'Ravi',email:'ravi@gmail.com',phonenumber:'852454758',age:'21',gender:'M',city:'Kolkata'},
  {name:'Sai',email:'sai@gmail.com',phonenumber:'852454758',age:'22',gender:'F',city:'Mumbai'},
  {name:'Ramya',email:'ramya@gmail.com',phonenumber:'852454758',age:'25',gender:'F',city:'Pune'},
  {name:'Kiran',email:'kiran@gmail.com',phonenumber:'852454758',age:'23',gender:'M',city:'Delhi'},
  {name:'Vivek',email:'vivek@gmail.com',phonenumber:'852454758',age:'22',gender:'M',city:'Bangulore'},
]
const TableFormat= ()=> {
 const [data,setData]=useState(emplyList)
  const columns=[
    {title:'Name',field:'name'},
    {title:'Emaile',field:'email'},
    {title:'Phomenumber',field:'phonenumber'},
    {title:'Age',field:'age'},
    {title:'Gender',field:'gender',lookup:{M:'Male',F:"Female"}},
    {title:'City',field:'city'},
  ]
  return (
<div>
  <h1 align="center">React-App</h1>
  <h4 align="center">Crash Course on MaterialTable</h4>
  <MaterialTable columns={columns} data={data} title="Student Information" editable={{
    onRowAdd:(newRow)=> new Promise((resolve,reject)=>{
    const updateRows= [...data,newRow]
    setTimeout(()=>{
      setData(updateRows)
    resolve()
    },2000)
    }),
    onRowDelete:selectedRow => new Promise((resolve,reject)=>{
     console.log(selectedRow)
    })
  }}
  options={{actionsColumnIndex:-1}}/>
  </div>
  )
}

export default TableFormat;
