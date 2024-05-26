import React from 'react';

function ExitModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-20">
      <div className="bg-gray-800 p-6 rounded-lg text-white">
        <h2 className="text-lg mb-4">Confirm Exit</h2>
        <p className="mb-4">Are you sure you want to exit?</p>
        <div className="flex space-x-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 px-3 py-1 rounded-lg"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-600 px-3 py-1 rounded-lg"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExitModal;
