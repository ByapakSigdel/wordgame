import React from 'react';

function PlayGame() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-6 p-6 bg-gray-300 rounded-lg">
          <span>Interactive BG Image</span>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            RoomName
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            Create Room
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            Play
          </button>
        </div>
        <div className="p-6 bg-gray-300 rounded-lg">
          <span>Interactive BG Image</span>
        </div>
      </div>
    </div>
  );
}

export default PlayGame;
