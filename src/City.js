import React,{useState} from 'react'
import cityList from './cityList.json'
function City() {
    const[search,setSearch]=useState('');
    return (
        <div>
            <center>
                <h4>Enter Your City:</h4>
                <br/>
                <input style={{"borderRadius":"1px"}} type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <br/>
                {cityList.filter(item =>item.name.toLowerCase().includes(search.toLocaleLowerCase())).map(item =>{
                
                    return<div style={{"border":"1px solid red","padding":"10px","margin-top":"10px","maxWidth":"50"}}>
                        {item.name}
                    </div>
                })}
            </center>
            
        </div>
    )
}

export default City
