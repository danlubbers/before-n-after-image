import React from 'react';
import './App.scss';
import RetouchingExample from './Components/RetouchingExample/RetouchingExample';

function App() {
  return (
    <div className="App">
      <div className='retouching-container'>
        <h1>Click Image to see Before and After Retouching</h1>
        <RetouchingExample />
      </div>
    </div>
  );
}

export default App;
