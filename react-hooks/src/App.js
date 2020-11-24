import './App.css';
import ClassCounter from './useStateComponents/ClassCounter';
import HookCounter from './useStateComponents/HookCounter';
import HookCounterPrevState from './useStateComponents/HookCounterPrevState';
import HookCounterObject from './useStateComponents/HookCounterObject';
import HookCounterArray from './useStateComponents/HookCounterArray';

function App() {
  return (
    <div className="App">
      <h1>Hello From REACT!</h1>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterPrevState /> */}
      {/* <HookCounterObject /> */}
      <HookCounterArray />
    </div>
  );
}

export default App;
