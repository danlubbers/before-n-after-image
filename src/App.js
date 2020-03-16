import React from 'react';
import './App.scss';
import RetouchingExample from './Components/RetouchingExample/RetouchingExample';

function App() {
  return (
    <div className="App">
      <h1>Click Image to see Before and After Retouching</h1>
      <RetouchingExample />
    </div>
  );
}

export default App;
