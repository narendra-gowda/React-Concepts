import {createStore} from 'redux';
import cakeReducer from './CakeReducer';  //ES6 import method

const store = createStore(cakeReducer)

export default store;