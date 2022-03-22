
import react ,{Component}from 'react';

class Increment extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
            count:0
        
        };
    }
    deleteHandler = () =>{
this.setState({show: false});
    } 
    componentDidMount(){
        console.log("componentDidMoount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    render(){
        let myheader;
        if(this.state.show){
            myheader = <Child />;
        };
        return (
           <div> 
               {myheader}
          
<button onClick={()=>this.deleteHandler()}>Delete</button><hr></hr>
<h2>count:{this.state.count}</h2> 
<br></br>
<button onClick={()=>this.setState({count:this.state.count+1})}>Incriment</button> 
           </div>
        );
        }
    }
class  Child extends Component{
    componentWillMount(){
        console.log("componentWillUnmount");
    }
    render(){
        return(
<h1>Hello World</h1>
        );
    }
}

export default Increment;