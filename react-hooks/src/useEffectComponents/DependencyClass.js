import React, {Component} from 'react';

class DependencyClass extends Component {
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }
  tick = () =>{
    this.setState({count : this.state.count + 1})
  }
  componentDidMount(){
     this.interval = setInterval(this.tick, 1000);
    console.log("interval set")
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render(){
    return(
      <div>
        Class Counter: {this.state.count}
      </div>
    )
  }
}
export default DependencyClass;