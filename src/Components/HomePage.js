import React from 'react';
import PlayGame from './PlayGame';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header" >
      <p className="ml-4 text-red-500 text-xl">This is HomePage</p>
      <PlayGame/>
      </header>
    </div>
  );
}

export default HomePage;
