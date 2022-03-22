 import React from "react";
import axios from "axios";
 class DeleteClassComponent extends React.Component{
     constructor(props){
         super(props);

     }
upDate = ()=> {
    
        
//     const Data = {
//     "userId": 102,
//     "id": 101,
//     "title": "MyTitle",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   } 
  axios.post('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },}).then((res)=>{
      console.log(res)
  }).catch((err)=>{
      console.log(err)
  })

    

}
     render(){
         return(
<button onClick={this.upDate}>Onclick</button>
         )
     }
 }
 export default DeleteClassComponent