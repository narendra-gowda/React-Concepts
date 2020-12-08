import {combineReducers} from 'redux';
import cakeReducer from './cake/CakeReducer';
import iceCreamReducer from './iceCream/IceCreamReducer';
import {asyncReducer} from './async/asyncReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
  async: asyncReducer
})
export default rootReducer;