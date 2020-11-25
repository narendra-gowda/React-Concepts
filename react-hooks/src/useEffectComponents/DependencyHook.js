import React,{useState, useEffect} from 'react';

function DependencyHook(){
  const [count, setCount] = useState(0);
  useEffect(() =>{
    console.log("didMount()")
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    }
  },[])
  const tick = () =>{
    console.log("tick ()")
    setCount(prevCount => prevCount + 1);
  }
  return(
    <div>
      Hook Counter : {count}
    </div>
  );
}
export default DependencyHook;