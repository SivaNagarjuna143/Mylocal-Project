import React,{useState} from 'react';


function FInterview() {
    const [A,setA]=useState([10]);
    const [B,setB]=useState([20]);
    const [C,setC]=useState([30]);
  return (
    <div>
        <table>
            <tr>
                <input type="number" value={A} onChange={(e)=>setA(e.target.value)}/>
            </tr>
            <tr>
                <input type="number" value={B} onChange={(e)=>setB(e.target.value)}/>
            </tr>
            <tr>
                <input type="number" value={C} onChange={(e)=>setC(e.target.value)}/>
            </tr>
        </table>
    </div>
  )
}

export default FInterview