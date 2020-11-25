// This is to exhibit componentDidMount()

import React, {Component} from 'react';

class MouseClassComponent extends Component{
  constructor(){
    super();
    this.state = {
      x : 0,
      y : 0
    }
  }
  mouseMoveHandler = (e) => {
    this.setState({x : e.clientX , y : e.clientY})
  }
  componentDidMount(){
    console.log("didMount() called")
    window.addEventListener('mousemove', this.mouseMoveHandler);
  }
  componentWillUnmount(){
    window.removeEventListener('mousemove', this.mouseMoveHandler);
  }
  render(){
    return(
      <div>
        Mouse Co-ordinates: 
        X - {this.state.x} , Y - {this.state.y}
      </div>
    )
  }
}
export default MouseClassComponent;
