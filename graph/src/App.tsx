import React from 'react';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
      <Graph min={0.000001} max={2.5} delta={0.001}/>
    </div>
  );
}

export default App;
