import {BUY_ICECREAM} from './IceCreamType';

const initalState = {
  numOfIcecreams: 20
}
const iceCreamReducer = (state = initalState, action) => {
  switch(action.type){
    case BUY_ICECREAM: return{
      ...state,
      numOfIcecreams: state.numOfIcecreams - 1
    }
    default: return state
  }
}
export default iceCreamReducer;