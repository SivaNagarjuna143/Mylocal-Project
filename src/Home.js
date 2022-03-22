import axios from 'axios';
import React,{useState} from 'react'


const FetchData = () =>{
 
const [tableData,setTableData]=useState([]);

const employeeData=['ID','Name','Password','Phonenumber','Email']
const [data,Setdata]=useState({
  userName:'',
  password:'',
  phoneNumber:'',
  email:''
});
const {userName,phoneNumber,password,email}=data;
const chaneHandler =(e)=>{
Setdata({...data,[e.target.name]:e.target.value});

}
const submitHandler= async (e)=>{
  e.preventDefault();
let emptyArr=[];

    const result= await axios.post('https://jsonplaceholder.typicode.com/posts',data);

emptyArr.push(result.data)
 setTableData([...tableData,...emptyArr]);

}
console.log(tableData)
  return(
<div>

  <form onSubmit={submitHandler}>
    <input type='text' name='userName' placeholder='Enter your name' value={userName} onChange={chaneHandler}/><br/><br/>
    <input type='password' name='password' placeholder='Enter your password' value={password} onChange={chaneHandler}/><br/><br/>
    <input type='tel' name='phoneNumber' placeholder='Enter your number' value={phoneNumber} onChange={chaneHandler}/><br/><br/>
    <input type='email' name='email' placeholder='Enter your email' value={email}  onChange={chaneHandler}/><br/><br/>
    <input type='submit' name='submit' className='btn btn-primary'/>
  </form>

<div>
  <h1>Welcome</h1>
 
  <table className='table table-hover '>
    <thead>
      <tr>{ employeeData.map((item)=>{
       return(
         <th>{item}</th>
       )
      })
      }
    </tr>
    </thead>
    <tbody>
          {tableData.map((item)=>{
            return(
              <tr>
            <td>{item.id}</td>
            <td>{item.userName}</td>
            <td>{item.password}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.email}</td>
            </tr>
            )
          })}
    </tbody>
  </table>
</div>
</div>
  )
    }
export default FetchData;