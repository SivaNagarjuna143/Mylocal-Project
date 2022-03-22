import React, { useState } from 'react';

const Header = ()=>{
    const [user,setUser]=useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [data,setData]=useState({
        username:'',
        email:'',
        passWord:'' 
    });
    const {username,email,passWord}=data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        // let emptyArr=[];
        // emptyArr.push(data);
        // setUser([...user, ...emptyArr]);
        const newUser=[...user,data];
        setUser(newUser);
        setData({
            username:'',
            email:'',
            passWord:''   
        });
        console.log(data)
    }
    const deleteHandler = (event,indexValue) =>{
     const newItem=user.filter((index)=>index !==indexValue)
     setUser(newItem);
   
    }
    const editHandler =(event,selectUser,index)=>{
        console.log("SelectedUser:",selectUser);
        setData(selectUser);
        setCurrentIndex(index);
             }
    return(
        <div>
           <center>
               <form onSubmit={submitHandler}>
                   <input type="text"  name="username" value={username} onChange={changeHandler}/><br></br>
                   <input type="email" name="email" value={email} onChange={changeHandler}/><br></br>
                     <input type="passWord" name="passWord" value={passWord} onChange={changeHandler}/><br></br>
                     <button className='btn btn-primary'>Submit</button>
               </form>
               <table className='table table-hover'>
                   <tr>
                       <th scope="col">Name</th>
                       <th scope="col">Email</th>
                       <th scope="col">password</th>
                       <th scope="col">Actions</th>
                   </tr>
                   <tbody>
                      {user.map((item,index)=>
                      <tr>
                          <td>{item.username}</td>
                          <td>{item.email}</td> 
                          <td>{item.passWord}</td>
                          <td><button className='btn btn-primary'onClick={(event)=>editHandler(event,item,index)}>Edit</button>&nbsp;<button onClick={(event)=>{deleteHandler(event,item,index)}} className='btn btn-danger'>Delete</button></td>
                      </tr>
                      )}
                   </tbody>
               </table>
           </center>

        </div>
    )
}
export default Header;