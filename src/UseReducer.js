import React, { useReducer, useRef } from 'react'

const initialState={count:0};

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1};
            case 'decrement':
                return {count:state.count-1};
                default:
    }
}
 function Appl(){
      const [state,dispatch]=useReducer(reducer,initialState);
  return (
   <div>
      <center>
Count:{state.count}
          <button onClick={()=>dispatch({type:'increment'})}>+</button>
          <button onClick={()=>dispatch({type:'decrement'})}>-</button>
      </center>

       </div>

  )
}

export default Appl