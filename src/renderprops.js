import React, { Component } from 'react'

class RenderProps extends Component {
    constructor(props) {
      super(props)
    this.inputRef=React.createRef();
    }
    click =()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
          <Child ref={this.inputRef}/>
<button onClick={this.click}>click</button>
      </div>
    )
  }
}
const Child= React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})
export default RenderProps;