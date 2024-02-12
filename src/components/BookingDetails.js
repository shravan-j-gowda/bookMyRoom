import React from 'react';

const BookingDetails = ({ bookings }) => {
  // Check if bookings is undefined, and if so, set it to an empty array
  const bookingData = bookings || [];

  return (
    <div className="booking-details">
      <h2>My Bookings</h2>
      <ul>
        {bookingData.map(booking => (
          <li key={booking.id}>
            Date: {booking.date}, Persons: {booking.persons}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingDetails;
