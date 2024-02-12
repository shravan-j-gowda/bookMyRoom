// Booking.js

import React, { useState } from 'react';

const Booking = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    // Handle booking logic here
  };

  return (
    <div className="booking">
      <h2>Book a Room</h2>
      <form onSubmit={handleBookingSubmit}>
        <label htmlFor="fromDate">From Date:</label>
        <input
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={handleFromDateChange}
          required
        />
        <label htmlFor="toDate">To Date:</label>
        <input
          type="date"
          id="toDate"
          value={toDate}
          onChange={handleToDateChange}
          required
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default Booking;
