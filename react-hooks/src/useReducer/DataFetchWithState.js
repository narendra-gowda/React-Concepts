// FETCHING DATA USING EFFECTS AND STATES

import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchWithState() {
  const[post, setPost] = useState({})
  const[loading, setLoading] = useState(true)
  const[error, setError] = useState(false)

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res =>{
      setPost(res.data)
      setLoading(false)
    }).catch(err => {
      setError(true)
      setLoading(false)
      console.log(err)
    })
  }, [])
  return(
    <div>
      {loading? 'loading...' : post.title}
      {error? 'something went wrong!' : ''}
    </div>
  )
}
export default DataFetchWithState;