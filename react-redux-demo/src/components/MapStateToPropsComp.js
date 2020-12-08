import {connect} from 'react-redux';
import buyIcecream from '../redux/iceCream/IceCreamAction';

function MapStateToPropsComp(ownProps){
  return(
    <div>
      <p>Passing second parameter to mapStateToProps, This props belongs to the component itself</p>
  <h2>Item {ownProps.name} - {ownProps.item}</h2>
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
export default connect(mapStateToProps)(MapStateToPropsComp);