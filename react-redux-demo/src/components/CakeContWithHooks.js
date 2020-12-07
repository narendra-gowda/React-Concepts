import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from '../redux/cake/CakeAction';

function CakeContWithHooks(){
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return(
    <div>
      <h2>No of Cakes with Hooks: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy</button>
    </div>
  )
}
export default CakeContWithHooks;