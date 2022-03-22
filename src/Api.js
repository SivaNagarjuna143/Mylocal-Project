import React,{useState} from 'react'

 const Api = () => {
     const [data,setdata]=useState({
     username:'',
     password:''
     });
     const [tableData,setTableData]=useState([])
     const {username,password}=data;
     const changeHandler = (e) => {
      setdata({...data,[e.target.name]:e.target.value})
     }
     const submitHandler = (e) => {
     e.preventDefault();
     let empArr=[];
    empArr.push(data);
    setTableData([...tableData,...empArr]);
    setdata({
        username:'',
        password:''
    })
     }
     const deleteHandler = (event, index) =>{
        // event.preventDefault();
    let tempTabledata=tableData;
    tempTabledata.splice(index,1);
    setTableData([...tempTabledata])
     }
    return (
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <input type='text' name='username' value={username} placeholder='Username' onChange={changeHandler}/><br/><br/>
                    <input type='password' name='password' value={password}  placeholder='Password'onChange={changeHandler}/><br/><br/>
                    <input type='submit' name='submit' value='submit'/>
                </form>
            </center>
            <table className='table table-hover'>
                <thead>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {tableData.map((item,index)=>{
                        return(
                            <tr>
                                <td>{item.username}</td>  
                                 <td>{item.password}</td>
                                 <td><button className='btn btn-danger'onClick={(event)=>deleteHandler(event,item,index)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
} 
export default Api
