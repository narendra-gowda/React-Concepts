import {connect} from 'react-redux';
import { buyCake } from '../redux/cake/CakeAction';
import buyIcecream from '../redux/iceCream/IceCreamAction';

function MapStateToPropsComp(props){
  return(
    <div>
      <p>Passing second parameter to mapStateToProps, This props belongs to the component itself</p>
  <h2>Item {props.name} - {props.item}</h2>
  <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  const itemValue = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecreams
  const itemName = ownProps.cake ? 'Cake' : 'Ice Cream'
  return{
    item: itemValue,
    name: itemName
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunc = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream())
  return{
    buyItem: dispatchFunc
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapStateToPropsComp);