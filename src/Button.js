import React from "react";

function Button(props){
   
    return(
        <button onClick={()=>alert({...props.title}) }>clickMe</button>

    )
    
}
export default Button;