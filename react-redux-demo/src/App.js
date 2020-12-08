import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContWithHooks from './components/CakeContWithHooks';
import IceCreamComponent from './components/IceCreamComponent';
import CakeActionPayload from './components/CakeActionPayload';
import MapStateToPropsComp from './components/MapStateToPropsComp';
import AsyncContainer from './components/AsyncContainer';

function App() {
  return ( //Keeping Provider on top will provide the store to all the components in the APP tree
    <Provider store = {store}> 
      <div className="App">
        {/* <CakeContainer />
        <CakeContWithHooks />
        <IceCreamComponent/>
        <CakeActionPayload />
        <MapStateToPropsComp cake/>
        <MapStateToPropsComp /> */}
        <AsyncContainer />
      </div>
    </Provider>
  );
}

export default App;
