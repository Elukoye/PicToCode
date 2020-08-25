import React from 'react';

function App() {

  const makeRequest = () => {
    fetch('https://pic-to-code-server.herokuapp.com/')
    // fetch('http://localhost:5000')
      .then(res => res.json())
      .then(data => console.log(data))
  }
  

  return (
    <button onClick={makeRequest}>
      Click to API
    </button>
  );
}

export default App;
