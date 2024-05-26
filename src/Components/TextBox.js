import React, { useState, useEffect, useRef } from 'react';

function TextBox() {
  const [inputValue, setInputValue] = useState('');
  const [textArray, setTextArray] = useState([]);
  const userID = "user123"; // Example userID
  const messagesEndRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddText = () => {
    if (inputValue.trim()) {
      const newMessage = { userID, text: inputValue.trim() };
      setTextArray([...textArray, newMessage]);
      setInputValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddText();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [textArray]);

  return (
    <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-100 flex flex-col">
      <header className="flex-grow p-4 overflow-y-auto">
        {textArray.length === 0 ? (
          <p className="text-blue-500 text-2xl">Type a message to start a conversation</p>
        ) : (
          <ul className="space-y-2">
            {textArray.map((message, index) => (
              <li key={index} className="text-blue-500 text-lg border-b border-gray-300 p-2">
                {message.userID} : {message.text}
              </li>
            ))}
            <div ref={messagesEndRef} />
          </ul>
        )}
      </header>
      <footer className="p-4 relative">
        <div className="relative">
          <input
            type="text"
            className="w-full p-2 pr-10 border border-gray-300 rounded"
            placeholder="Enter text..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {inputValue && (
            <button 
              onClick={handleAddText}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
            >
              <img
                src="https://via.placeholder.com/20" // Replace with your logo URL
                alt="Logo"
              />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

export default TextBox;
