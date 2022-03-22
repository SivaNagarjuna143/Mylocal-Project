import React,{useState} from 'react'

export default function Count() {
    const [count,Setcount]=useState(0)

    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>Setcount(count+1)}>Click Here</button>
        </div>
    )
}
