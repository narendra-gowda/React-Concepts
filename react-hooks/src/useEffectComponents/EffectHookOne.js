import React, { useState, useEffect } from 'react';

function EffectHookOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log("Update title from Hook")
    document.title = count + ' times clicked'
  }, [count])                                  //-- TO conditionally run only when count value changes between renders

  return (
  <div>
    <input type="text" value={name} onChange={e => setName(e.target.value)} />
    <button onClick={() => setCount(count + 1)}>Clicked {count} Times!</button>
  </div>);
}
export default EffectHookOne;