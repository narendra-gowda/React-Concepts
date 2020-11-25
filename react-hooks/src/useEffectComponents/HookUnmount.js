// This function aids in unmounting MouseHookComponent component
import React, {useState} from 'react';
import MouseHookComponent from './MouseHookComponent';

function HookUnmount(){
  const [display, setDisplay] = useState(true);
  
  return(<div>
    <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    {display == true && <MouseHookComponent />}
  </div>)
}
export default HookUnmount;