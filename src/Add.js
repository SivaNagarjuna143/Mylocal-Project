import react, { Component } from 'react';

class Add extends Component{
    constructor(){
        super()
        {
            this.state={
             addTextbox:[{}]
            }
        }
    }
    addControls(){
        this.setState({
            addTextbox:[...this.state.addTextbox,{}]
        })
    }
    deleteControls(i){
        this.state.addTextbox.splice(i,1);
        this.setState({

        })
    }
    render(){
        return(
            <center>
                <h1>Add Delete </h1>
                <h3>React Js</h3>
                <hr></hr>
                {this.state.addTextbox.map((index)=>(
                  <div>
 <input type="text" placeholder="Enter Something..."/>
 <button onClick={()=>this.deleteControls(index)} className='btn btn-danger'>Delete</button>
                  </div>  
                ))}
               
                <hr></hr>
                <button onClick={()=>this.addControls()} className='btn btn-primary'>Add Cart</button>
               
            </center>
        )
    }
}
export default Add;