import React from 'react';
import UserGrid from './UserGrid';
import Footer from './ExitModal';
import TextBox from './TextBox'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <UserGrid />
      <TextBox />
     
    </div>
  );
}

export default App;
