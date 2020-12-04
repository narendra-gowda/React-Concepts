// console.log('Hello from index')
const redux = require('redux')
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){ // Action creator
  return {
    type: BUY_CAKE,
    info: 'First action'
  }
}
function buyIcecream(){
  return{
    type: BUY_ICECREAM
  }
}

const initialState = {
  numOfCake: 10,
  numOfIcecream: 20
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE: return{
      ...state,
      numOfCake: state.numOfCake - 1
    }
    case BUY_ICECREAM: return{
      ...state,
      numOfIcecream: state.numOfIcecream - 1
    }
    default: return state
  }
}

const store = createStore(reducer)
console.log('Initial state:', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe();


