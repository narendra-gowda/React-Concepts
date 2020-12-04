import React,{useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  post: {},
  error: ''
}
const reducer = (currState, action) => {
  switch(action.type){
    case 'Fetch_Successful': return {
      loading: false,
      post: action.payload,
      error: ''
    }
    case 'Fetch_Error': return{
      loading: false,
      post: {},
      error: 'Something went wrong!'
    }
    default: return currState
  }
}
function DataFetchWithReducer() {
  const[state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response =>{
      dispatch({ type:'Fetch_Successful', payload: response.data })
    }).catch(err =>{
      dispatch({ type:'Fetch_Error' })
    })
  }, [])
  return(
    <div>
      {state.loading? 'Loading...' : state.post.title}
      {state.error? state.error : null}
    </div>
  )
}
export default DataFetchWithReducer;