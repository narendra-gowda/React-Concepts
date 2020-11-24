import React, {useState} from 'react';

function HookCounterArray() {
  const [item, setItem] = useState([]);
  const addItem = () =>{
    setItem([...item, {
      id : item.length,
      value : Math.floor(Math.random() * 10) + 1
    }]);
  }
  return (
    <div>
      <button  onClick={addItem}>Add Item</button>
      <ul>
        {item.map(i => (
          <li key={i.id}>{i.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterArray;
