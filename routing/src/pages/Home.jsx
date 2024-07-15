import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ background: 'yellow', color: 'black' }}>
            Home
            <li>
                <Link to={'/about'}>
                    <ul>About</ul>
                </Link>
                <Link to={'/contact'}>
                    <ul>Contact</ul>
                </Link>
            </li>
        </div>
    )
}

export default Home