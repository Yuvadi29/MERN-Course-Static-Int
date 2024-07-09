import React from 'react'
import Header from './components/Header';
import Car from './components/Car';
import Mobile from './components/Mobile';
// import './App.css';

const App = () => {
  const x = 5;
  let text = 'Goodbye';
  if (x < 10) {
    text = 'Hello';
  }

  const myElement = <h1>{text}</h1>

  return (
    <> {/*JSX Fragment <></> */}
      <div>
        <Car brand="Ford" model="Fiesta" />
        <Mobile
          brand="Apple"
          price="75000"
          rating="4.5"
          color="white"
          location="Virar"
        />
        <h1>App</h1>
        <h2>Hey</h2>
        <h3>{myElement}</h3>
        <Header />
      </div>

      <div>
        {/* Expressions */}
        <h3>Addition of 5 and 5 is {5 + 5}</h3>
        {/* Self Closing Tag */}
        <input />
        <textarea />
        <img src='https://i.ytimg.com/vi/LhzkG0COLr0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqSEApwkv8u4KmRT91QDjbnBIDbg' />

        {/* <iframe src='https://www.youtube.com/watch?v=btQO6bPkrXE' height={200} width={200} /> */}


      </div>
    </>
  )
}

export default App