import './App.css';
import React from 'react';
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
import DataFetchHook from './useEffectComponents/dataFetch/DataFetchHook';
import ComponentC from './contextAPI/ComponentC';
import SimpleReducer from './useReducer/SimpleReducer';
import ComplexReducer from './useReducer/ComplexReducer';
import MultipleReducer from './useReducer/MultipleReducer';
import DataFetchWithState from './useReducer/DataFetchWithState';
import DataFetchWithReducer from './useReducer/DataFetchWithReducer';

const NameContext = React.createContext();
const FavContext = React.createContext();
export const SkillContext = React.createContext();

function App() {
  const passion = "Breaking";
  return (
    <div className="App">
      <h1>Hello From REACT!</h1>
      {/* <ClassCounter /> --useState-- */}  
      {/* <HookCounter /> */}
      {/* <HookCounterPrevState /> */}
      {/* <HookCounterObject /> */}
      {/* <HookCounterArray /> */}
      {/* <EffectClassOne /> --useEffect-- */}
      {/* <EffectHookOne /> */}
      {/* <MouseClassComponent /> */}
      {/* <MouseHookComponent /> */}
      {/* <HookUnmount /> */}
      {/* <DependencyClass /> */}
      {/* <DependencyHook /> */}
      {/* <DataFetchHook /> */}
      {/* <ComponentC data = {passion} /> */}
      {/* <NameContext.Provider value = {passion}>   -- useContext --
        <SkillContext.Provider value = 'PowerMove'>
          <FavContext.Provider value = {'Flare'}>
            <ComponentC />
          </FavContext.Provider>          
        </SkillContext.Provider>        
      </NameContext.Provider> */}
      {/* <SimpleReducer /> --useReducer-- */}
      {/* <ComplexReducer /> */}
      {/* <MultipleReducer /> */}
      {/* <DataFetchWithState /> */}
      <DataFetchWithReducer />
    </div>
  );
}

export default App;
export {NameContext, FavContext};
