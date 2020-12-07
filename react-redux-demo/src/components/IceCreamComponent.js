import React from 'react';
import buyIcecream from '../redux/iceCream/IceCreamAction';
import {connect} from 'react-redux';

function IceCreamComponent(props){
  return(
    <div>
      <h2>Number of icecream: {props.numOfIcecreams}</h2>
      <button onClick={props.buyIcecream}>Buy icecream</button>
    </div>
  )
}
const mapStateToProps = state => {
  return{
    numOfIcecreams: state.icecream.numOfIcecreams
  }
}
const mapDispatchToProps = dispatch => {
  return{
    buyIcecream: () => dispatch(buyIcecream())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent);