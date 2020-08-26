import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main class="text-center">
			<h2 class="font-mono text-2xl font-bold ">Convert your picture into code </h2>
      <p class="font-mono text-base pt-3 pb-12">Pic-to-Code is an app that converts a picture of hand written code into a text 
				<br/>which can be copied to your code editor.
			</p>
      
      <Link to="/camera" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-teal-700 rounded">
        Take the picture!
      </Link>
    </main>
  );
};

export default HomePage;
