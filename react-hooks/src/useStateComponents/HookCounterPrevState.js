import React, {useState} from 'react';

function HookCounterPrevState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  function incrementByFive() {
    for(let i=0; i<5; i++){
      setCount(prevState => prevState + 1);
    }
  }
  return (
    <div>
      Count : {count} <br/>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={incrementByFive}>Increment  By 5</button>
    </div>
  );
}
export default HookCounterPrevState;