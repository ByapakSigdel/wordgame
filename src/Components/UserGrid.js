import React from 'react';
import GameBox from './GameBox';

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
  const radius = 300;
  const shiftLeft = 100;
  const positions = calculatePositions(users.length, radius);

  return (
    <div className="relative min-h-screen bg-gray-800 text-white">
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
  );
}

export default UserGrid;
