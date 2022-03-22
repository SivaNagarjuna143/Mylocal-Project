import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  this.inputRef=React.createRef();

   
  }
  render() {
    return (
      <div>
        <App ref={this.inputRef}/>
        <button onClick={()=>alert(this.inputRef.current.value)}>Click</button>
      </div>
    )
  }
}
const App=React.forwardRef((props,ref)=>{
  return(
    <div>
<input type="text" ref={ref} />
    </div>
  )
})
export default Header
