
  
import React from 'react';

const Parent  = () => {
  return(
    <div>
        <Child name="Siva"/>
    </div>
  );
}
 export const  Child =(props)=>{
     return(
<div>
<Grandchild name={props.name}/>
</div>
     )
 }
 export const Grandchild=(props)=>{
     return(
<div>

<Grandchild2 name={props.name}/>
</div>
     )
 }
 export const Grandchild2 = (props) =>{
return(
   <div><Grandchild3 name={props.name}/></div>
)
 }
 export const Grandchild3 = (props) =>{
    return(
       <div>Name:{props.name}</div>
    )
     }

export default Parent;
