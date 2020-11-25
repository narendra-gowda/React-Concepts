import React, {Component} from 'react';

class EffectClassOne extends Component{
  constructor(){
    super();
    this.state = {
      count : 0,
      name : ''
    }
  }
  componentDidMount(){
    console.log("did mount");
    document.title =  this.state.count + ' times Clicked';
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      console.log("Update title");
      document.title = this.state.count + ' times Clicked';
    }
  }
  render(){
    return(<div>
        <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Clicked {this.state.count} times!</button>
    </div>);
  }
}
export default EffectClassOne;