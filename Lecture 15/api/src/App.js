import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        // const response = res.data[0].email;
        // console.log(response);
        .then(res => setData(res.data))
        // .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }

    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log('Hi');
  // }, []);

  return (
    <div>
      Hello World
      {data.map(user => (
        <li key={user.id} style={{ border: '2px solid red', color: 'blue', background: 'yellow' }}>
          {user.name}
        </li>
      ))};
    </div>
  )
}

export default App
