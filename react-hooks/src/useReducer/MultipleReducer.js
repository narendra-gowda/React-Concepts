import React, { useReducer} from 'react';

const intialState = 0;
const reducer = (currState, action) => {
  switch (action) {
    case 'increment': return currState + 1;
    case 'decrement': return currState - 1;
    case 'reset': return intialState;
  }
}
function MultipleReducer() {
  const [count, dispatch] = useReducer(reducer, intialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, intialState);
  return (
    <div>
      First Counter : {count}
      <button onClick={() => dispatch('increment')}>increment</button>
      <button onClick={() => dispatch('decrement')}>decrement</button>
      <button onClick={() => dispatch('reset')}>reset</button>
      <div>
        Second Counter : {countTwo}
        <button onClick={() => dispatchTwo('increment')}>increment</button>
        <button onClick={() => dispatchTwo('decrement')}>decrement</button>
        <button onClick={() => dispatchTwo('reset')}>reset</button>
      </div>
    </div>
  )
}
export default MultipleReducer;