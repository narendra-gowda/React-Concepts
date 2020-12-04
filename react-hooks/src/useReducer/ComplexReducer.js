import React,{useReducer} from 'react';

const initialState = {
  firstCounter: 0,
  secondaryCounter: 10
}
const reducer = (currState, action) => {
  switch(action.type){
    case 'increment': return {...currState, firstCounter: currState.firstCounter + action.value}
    case 'decrement': return {...currState, firstCounter: currState.firstCounter - action.value}
    case 'increment2': return {...currState, secondaryCounter: currState.secondaryCounter + action.value}
    case 'decrement2': return {...currState, secondaryCounter: currState.secondaryCounter - action.value}
    case 'reset': return initialState;
    default : return currState;
  }
}
function ComplexReducer() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return(
    <div>
      First Count : {count.firstCounter} <br/>
      Second Count : {count.secondaryCounter} <br/>
      <button onClick={()=>dispatch({type: 'increment', value: 1})}>increment</button>
      <button onClick={()=>dispatch({type: 'decrement', value: 1})}>decrement</button>
      <button onClick={()=>dispatch({type: 'increment', value: 5})}>increment 5</button>
      <button onClick={()=>dispatch({type: 'decrement', value: 5})}>decrement 5</button><br/>
      <button onClick={()=>dispatch({type: 'increment2', value: 1})}>increment Counter 2</button>
      <button onClick={()=>dispatch({type: 'decrement2', value: 1})}>decrement Counter 2</button>
      <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
    </div>
  );
}
export default ComplexReducer;