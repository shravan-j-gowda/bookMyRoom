import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate
import firebase from './firebase';
import './Home.css'; // Import Home styling
import RoomList from './components/RoomList';
import Booking from './components/Booking';
import BookingDetails from './components/BookingDetails';

const Home = () => {
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      console.log('Signout successful!');
      // Navigate to the login page after signout
      window.location.href = '/login';
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  // Check if the user is authenticated, and if not, redirect to the login page
  if (!firebase.auth().currentUser) {
    return <Navigate to="/login" />;
  }

  // Handle room selection
  const handleRoomSelect = (room) => {
    console.log('Selected room:', room);
    // Implement the logic to handle the selected room
  };

  return (
    <div id="home-page">
      <h1>Welcome to the Home Page</h1>
      <button className="button-signout" onClick={handleSignOut}>Sign Out</button>
      
      {/* Render RoomList component to display available rooms */}
      <RoomList onSelectRoom={handleRoomSelect} />
      
      {/* Render Booking component for users to book rooms */}
      <Booking />
      
      {/* Render BookingDetails component to display user's booking details */}
      <BookingDetails />
    </div>
  );
};

export default Home;
