// App.js
import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <div className="App">
      {!isHomePage && (
        <header className="App-header">
          <h1>Book My Room</h1>
        </header>
      )}
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
      <footer className="App-footer">
        <p>&copy; 2024 TruAd VideoStore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
