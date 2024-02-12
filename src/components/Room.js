// Room.js
import React from 'react';

const Room = ({ room, onBook }) => {
  const { id, number, capacity, isAvailable } = room;

  const handleBookRoom = () => {
    onBook(id);
  };

  return (
    <div className="room">
      <h3>Room {number}</h3>
      <p>Capacity: {capacity}</p>
      <p>Status: {isAvailable ? 'Available' : 'Not Available'}</p>
      {isAvailable && <button onClick={handleBookRoom}>Book</button>}
    </div>
  );
};

export default Room;
