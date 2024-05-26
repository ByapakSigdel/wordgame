import React, { useState } from 'react';

function GameBox({ profilePicture, username }) {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
        const data = await response.json();
        console.log(data);
        
        // Check if the input value matches any of the words returned from the API
        const isValid = Array.isArray(data) && data.some(entry => entry.word.toLowerCase() === inputValue.toLowerCase());
        
        setResult({ text: inputValue, isValid });
      } catch (error) {
        console.error('Error fetching word data:', error);
        setResult({ text: inputValue, isValid: false });
      }
      
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 m-2 bg-gray-900 rounded-lg shadow-lg">
      <img
        src={profilePicture}
        alt="Profile"
        className="w-24 h-24 rounded-full"
      />
      <p className="text-xl font-semibold">{username}</p>
      <input
        type="text"
        placeholder="Type a word"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {result && (
        <p className={`text-xl ${result.isValid ? 'text-green-500' : 'text-red-500'}`}>
          {result.text}
        </p>
      )}
    </div>
  );
}

export default GameBox;
