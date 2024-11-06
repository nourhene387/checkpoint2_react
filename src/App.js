import React from 'react';
import './App.css';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-decoration-underline display-4"> Players List </h1>
      <PlayersList />
    </div>
  );
}

export default App