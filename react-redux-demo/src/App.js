import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContWithHooks from './components/CakeContWithHooks';
import IceCreamComponent from './components/IceCreamComponent';

function App() {
  return ( //Keeping Provider on top will provide the store to all the components in the APP tree
    <Provider store = {store}> 
      <div className="App">
        <CakeContainer />
        <CakeContWithHooks />
        <IceCreamComponent/>
      </div>
    </Provider>
  );
}

export default App;
