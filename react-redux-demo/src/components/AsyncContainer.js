import React, {useEffect} from 'react';
import { asyncAction } from '../redux/async/asyncAction';
import {connect} from 'react-redux';

function AsyncContainer(props){   //( {userData, asyncCall} ) this by passes using props. and key

  useEffect(() => {
    props.asyncCall()   //asyncCall()
  }, [])

  return props.userData.loading ? (
    <h2>Loading...</h2>
  ) : props.userData.error ? (      //userData.error
  <h2>{props.userData.error}</h2>
  ) : (
    <div>
      <h2>Users</h2>
      <div>
        {
          props.userData.users.map(u => <p key={u.id}>{u.name}</p>)  //userData.users.map(u => <p>{u.name}</p>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    userData: state.async
  }
}

const mapDispatchToProps = dispatch => {
  return{
    asyncCall: () => dispatch(asyncAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AsyncContainer);