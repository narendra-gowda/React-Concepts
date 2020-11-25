// This is show how useEffect can be called only once, just like componentDidMount()
import React, {useState, useEffect} from 'react';

function MouseHookComponent() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseMoveHandler = (e) =>{
    console.log("handler called");
    setX(e.clientX);
    setY(e.clientY);
  }
  useEffect(() =>{
    console.log("didMount called");
    window.addEventListener('mousemove', mouseMoveHandler);
    // Mimics componentWillUnmount() 
    return () => {
      console.log("willUnmount called");
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, []);  // Passing empty array to mimic componentDidMount()
  return(<div>
      Mouse Co-ordinates: 
        X - {x} , Y - {y}
  </div>);
}
export default MouseHookComponent;