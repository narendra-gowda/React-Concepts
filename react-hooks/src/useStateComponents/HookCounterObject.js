import React, {useState} from 'react';

function HookCounterObject() {
  const [name, setName] = useState({firstName: '', lastName: ''});
  return(
    <form>
      <input type="text" onChange={event => setName({...name, firstName : event.target.value})} />
      <input type="text" onChange={event => setName({...name, lastName : event.target.value})}/>
  <h2>First Name: {name.firstName}</h2>
  <h2>Last Name: {name.lastName}</h2>
  <h3>{JSON.stringify(name)}</h3>
    </form>
  );
}
export default HookCounterObject;