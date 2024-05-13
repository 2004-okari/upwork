import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    {/* Navigation component */}
    <p>Hi honey! Im home..</p>
    <header>
      <h1>Okari ron</h1>
      {/* Dropdown menu for all features */}
      <p>Components</p> 
      <nav>
        <p>=</p>
      </nav>
    </header>
    {/* Features page */}
    <div>
      <div>
        {/* Outer nav bar that is not viscible on moble screen */}
        <div>
          <p>Okari Nyandika</p>
        </div>
        {/* the actual features */}
        <div>
          <p>Okari Nyandika</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
