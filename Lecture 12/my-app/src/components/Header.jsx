import React from 'react'
import Nested from './Nested';
import './Header.css'
import styles from './Header.module.css';

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };


  return (
    <>
      {/* Inline Styling */}
      <h1 style={{
        color: "red",
        background: "green"
      }}>Header</h1>
      {/* External Styling */}
      <h2 className='line'>Second Line</h2>
      {/* Object Based Styling */}
      <h3 style={myStyle}>Third Line</h3>
      <h4 className={styles.bigBlue}>Last Method</h4>
      <Nested />
    </>
  )
}

export default Header