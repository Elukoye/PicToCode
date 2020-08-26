import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <h1>Pic to Code</h1>
      <h2>Take a picture of your paper written code and get it on computer!</h2>
      <Link to="/camera">
        Take the picture!
      </Link>
    </main>
  );
};

export default HomePage;
