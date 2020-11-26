import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchHook() {
  const url = "https://jsonplaceholder.typicode.com/posts/";

  const [post, setPost] = useState({});
  const [id, setID] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios.get(url + idFromButton).then(function(response){
      console.log(response.data);
      setPost(response.data);
    }).catch(function(error){
      console.log(error);
    })
  },[idFromButton])

  const clickHandler = () => {
    setIdFromButton(id);
  }

  return(
  <div>
    <input type="text" value={id} onChange={(e) => setID(e.target.value)}/>
    <button onClick= {clickHandler}>Fetch</button>
    <pre>{post.title}</pre>

    {/* <ul>    -- When we fetched array from response--
      {post.map(post => (      
        <li key={post.id}>{post.title}</li>
       ))}
    </ul> */}
  </div>);
}
export default DataFetchHook;