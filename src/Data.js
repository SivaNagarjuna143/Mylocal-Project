import react,{useState,useEffect} from 'react';
import axios from 'axios';
const App = () =>{
    const [data,setData]=useState([]);
    const myData=['Name','UserName','Email','City','Street','Zipcode','Suite']
useEffect (async ()=>{
    let data= await axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setData(res.data))
})
    return(
<div>
<table className='table table-hover'>
    <thead>
        <tr>
            {myData.map((item)=>{
                return(
                    <th>{item}</th>
                )
            })}
            </tr>
    </thead>
    <tbody>
        {data.map((item)=>{
            return(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                    <td>{item.address.street}</td>
                    <td>{item.address.zipcode}</td>
                    <td>{item.address.suite}</td>
                </tr>
            )
        })}
    </tbody>
</table>
</div>
    )
}
export default App