import './App.css';
import ClassCounter from './useStateComponents/ClassCounter';
import HookCounter from './useStateComponents/HookCounter';
import HookCounterPrevState from './useStateComponents/HookCounterPrevState';
import HookCounterObject from './useStateComponents/HookCounterObject';
import HookCounterArray from './useStateComponents/HookCounterArray';
import EffectClassOne from './useEffectComponents/EffectClassOne';
import EffectHookOne from './useEffectComponents/EffectHookOne';
import MouseClassComponent from './useEffectComponents/MouseClassComponent';
import MouseHookComponent from './useEffectComponents/MouseHookComponent';
import HookUnmount from './useEffectComponents/HookUnmount';
import DependencyClass from './useEffectComponents/DependencyClass';
import DependencyHook from './useEffectComponents/DependencyHook';

function App() {
  return (
    <div className="App">
      <h1>Hello From REACT!</h1>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterPrevState /> */}
      {/* <HookCounterObject /> */}
      {/* <HookCounterArray /> */}
      {/* <EffectClassOne /> */}
      {/* <EffectHookOne /> */}
      {/* <MouseClassComponent /> */}
      {/* <MouseHookComponent /> */}
      {/* <HookUnmount /> */}
      <DependencyClass />
      <DependencyHook />
    </div>
  );
}

export default App;
