import React, { useState } from 'react';
import GameBox from './GameBox';
import ExitModal from './ExitModal';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';

const users = [
  { id: 1, username: 'User1', profilePicture: 'path/to/profile-picture1.jpg' },
];

function calculatePositions(count, radius) {
  const angleStep = (2 * Math.PI) / count;
  return Array.from({ length: count }, (_, i) => {
    const angle = i * angleStep;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  });
}

function UserGrid() {
  const [isModalVisible, setModalVisible] = useState(false);

  const radius = 300;
  const shiftLeft = 100;
  const positions = calculatePositions(users.length, radius);

  const handleExitClick = () => {
    setModalVisible(true);
  };

  const handleConfirmExit = () => {
    setModalVisible(false);
    window.location.href = '/';
  };

  const handleCancelExit = () => {
    setModalVisible(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white relative">
      <button
        onClick={handleExitClick}
        className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg z-10"
      >
        Exit
      </button>
      <div className="flex-grow relative max-h-[calc(100vh-100px)] overflow-hidden">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="absolute transform"
            style={{
              top: `calc(40% + ${positions[index].y}px)`,
              left: `calc(40% + ${positions[index].x}px - ${shiftLeft}px)`,
            }}
          >
            <GameBox profilePicture={user.profilePicture} username={user.username} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-4 flex space-x-4 z-10">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="opacity-75 hover:opacity-100 transition-opacity duration-200" size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="opacity-75 hover:opacity-100 transition-opacity duration-200" size={30} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="opacity-75 hover:opacity-100 transition-opacity duration-200" size={30} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="opacity-75 hover:opacity-100 transition-opacity duration-200" size={30} />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="opacity-75 hover:opacity-100 transition-opacity duration-200" size={30} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="opacity-75 hover:opacity-100 transition-opacity duration-200" size={30} />
        </a>
      </div>
      {isModalVisible && <ExitModal onConfirm={handleConfirmExit} onCancel={handleCancelExit} />}
    </div>
  );
}

export default UserGrid;
