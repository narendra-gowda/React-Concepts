import React from 'react';
import { buyCake } from '../redux/cake/CakeAction';
import {connect} from 'react-redux';

function CakeContainer(props){
  return(
    <div>
      <h2>Number Of Cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy</button>
    </div>
  )
}
//The below fucntion is similar to store.getState()
const mapStateToProps = (state) =>{
  return {
    numOfCakes: state.numOfCakes //Creating a props for CakeContainer, which is mapped with state from redux store
  }
}
//The below function is similar to store.dispatch(action())
const mapDispatchToProps = (dispatch) => {
  return{
    buyCake: () => dispatch(buyCake()) //Mapping this props dispatch() from redux
  }
}
//Connect function connects react component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)