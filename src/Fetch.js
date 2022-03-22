import react,{useEffect,useState} from 'react';

const App = () =>{
  const [data,setData]=useState([]);
  const tableData=['Name','Username','Email','City','Zipcode','Suite','Street']
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(responce=>setData(responce))
    },[])
  return(
<div>
  <table  className='table table-hover'>
    <thead>
      {tableData.map((item)=>{
        return( 
          <>
          <th>{item}</th>
          
          </>
        )
      })}
    </thead>
    <tbody>
      {data.map((item)=>{
        return(
          <tr>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
            <td>{item.address.zipcode}</td>
            <td>{item.address.suite}</td>
            <td>{item.address.street}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
</div>
  )
}
export default App