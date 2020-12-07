import {createStore} from 'redux';
// import cakeReducer from './cake/CakeReducer';  //ES6 import method
import rootReducer from './rootReducer';

const store = createStore(rootReducer)

export default store;