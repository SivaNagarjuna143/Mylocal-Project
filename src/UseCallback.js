import React,{useState,useCallback} from 'react'

function UseCallback() {
    const [count,setCount]=useState(0);
    const[a,setA]=useState(0);
    const [b,setB]=useState(0)
const sum=useCallback(()=>{
    return[parseInt(a)+parseInt(b)]
},[a,b])
  return (
    <div>
        <h2>{count}</h2>
        <h1>{sum}</h1>
        <input type='number' value={a} onChange={(e)=>setA(e.target.value)}/>
        <input type='number' value={b} onChange={(e)=>setB(e.target.value)}/>
{/* <button onClick={()=>setCount(count+1)}>Click</button> */}
<button onClick={()=>setCount(sum())}>Click</button>
    </div>
  )
}

export default UseCallback