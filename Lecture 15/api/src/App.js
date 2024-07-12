import axios from 'axios';
import React, { useEffect, useState } from 'react';
import loader from './assets/loader.svg'
import Youtube from './components/Youtube';
import Query from './components/Query';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          setData(res.data);
          console.log(res.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(true);
        });
    }

    setTimeout(() => {
      fetchData();
    }, 5000);
  }, []);

  // useEffect(() => {
  //   console.log('Hi');
  // }, []);

  return (
    <div>
      {/* Hello World
      {loading && <img src={loader} />}
      {error && <p>Error : {error.message}</p>}
      {data.map(user => (
        <li key={user.id} style={{ border: '2px solid red', color: 'blue', background: 'yellow' }}>
          {user.name}
        </li>
      ))}; */}
      {/* <Youtube /> */}
      <Query />
    </div>
  )
}

export default App
