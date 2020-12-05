const redux = require('redux')
const createStore = redux.createStore
const axios = require('axios')
const applyMiddleware = redux.applyMiddleware
const thunk = require('redux-thunk').default

//Declaring application state
const initState = {
  loading: false,
  users: [],
  err: ''
}
//Declaring action constants
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//Declaring Action Creators that return actions
function fetchRequest(){
  return{
    type: FETCH_USERS_REQUEST
  }
}
function fetchSuccess(users){
  return{
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}
function fetchFailure(err){
  return{
    type: FETCH_USERS_FAILURE,
    payload: err
  }
}
//Creating Async Action Creator enabled by Thunk
const asyncAction = () => {
  return function(dispatch) {
      dispatch(fetchRequest())
      //Making API Calls to JSON PlaceHolder
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        //response.data gives users list
        const users = response.data.map(user => user.id)
        dispatch(fetchSuccess(users))
      })
      .catch(error => {
        dispatch(fetchFailure(error.message))
      })
    }
}
//Creating Reducers that accepts action type to manipulate data
const reducer = (state = initState, action) => {
  switch(action.type){
    case FETCH_USERS_REQUEST: return{
      ...state,
      loading: true
    }
    case FETCH_USERS_SUCCESS: return{
      loading: false,
      users: action.payload,
      err: ''
    }
    case FETCH_USERS_FAILURE: return{
      loading: false,
      err: action.payload,
      users: []
    }
  }
}

//Creating Redux store
const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(asyncAction())