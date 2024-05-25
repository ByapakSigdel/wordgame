import React from 'react';
import TextBox from './TextBox';
import UserGrid from './UserGrid';

function Game() {
  return (
    <div className="App">
      <header className="App-header">
        <p>GamePage</p>
        
        <UserGrid />
        <TextBox />
      </header>
    </div>
  );
}

export default Game;
