import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/cake/store';

function App() {
  return ( //Keeping Provider on top will provide the store to all the components in the APP tree
    <Provider store = {store}> 
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
