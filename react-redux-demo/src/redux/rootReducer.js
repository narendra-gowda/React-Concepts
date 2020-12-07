import {combineReducers} from 'redux';
import cakeReducer from './cake/CakeReducer';
import iceCreamReducer from './iceCream/IceCreamReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer
})
export default rootReducer;