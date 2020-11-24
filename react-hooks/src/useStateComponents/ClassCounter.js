import React, {Component} from 'react';

class ClassCounter extends Component{
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }
  countHandler = () =>{
    // this.setState({count : this.state.count + 1});   --Unsafe method of update state value.
    this.setState(prevCount => {                       // --Safer method of updating state value based on previous state value 
      return {count : prevCount.count + 1}             // by passing in a function that has access to previous state.
     });
  }
  render(){
    return(
      <div>
        <button onClick={this.countHandler}>Count {this.state.count}</button>
      </div>
    );
  }
}
export default ClassCounter;