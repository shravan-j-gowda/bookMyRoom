// RoomList.js
import React from 'react';

const rooms = [
  { id: 1, name: 'Deluxe Room', number: '101' },
  { id: 2, name: 'Standard Room', number: '102' },
  { id: 3, name: 'Executive Suite', number: '103' },
  // Add more rooms as needed
];

const RoomList = ({ onSelectRoom }) => {
  const handleRoomSelect = (room) => {
    onSelectRoom(room);
  };

  return (
    <div className="room-list">
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <span>{room.name}</span> - Room {room.number}
            <button onClick={() => handleRoomSelect(room)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
