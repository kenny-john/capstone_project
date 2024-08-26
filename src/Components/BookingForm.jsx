import React, { useState } from 'react'
import axios from 'axios';


const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    noDinner: '',
    occasion: '',
    time: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/bookings', formData);
      console.log('Booking successful:', response.data);
      // Clear form after submission
      setSuccessMessage("Booked succefully")
      setFormData({
        date: '',
        noDinner: '',
        occasion: '',
        time: '',
      });
    } catch (error) {
      console.error('There was an error creating the booking!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div>
          <label htmlFor="book-date">Choose Date</label>
          <input
            type="date"
            id="book-date"
            name="date"
            value={formData.date}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="no-dinner">Number of Diners</label>
          <select
            id="no-dinner"
            name="noDinner"
            value={formData.noDinner}
            required
            onChange={handleChange}
          >
            <option value="">Select number of diners</option>
            <option value="1">1 Diner</option>
            <option value="2">2 Diners</option>
            <option value="3">3 Diners</option>
            <option value="4">4 Diners</option>
            <option value="5">5 Diners</option>
            <option value="6">6 Diners</option>
            <option value="7">7 Diners</option>
            <option value="8">8 Diners</option>
            <option value="9">9 Diners</option>
            <option value="10">10 Diners</option>
          </select>
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            required
            onChange={handleChange}
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            required
            onChange={handleChange}
          >
            <option value="">Select a time</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="5:30 PM">5:30 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="6:30 PM">6:30 PM</option>
            <option value="7:00 PM">7:00 PM</option>
            <option value="7:30 PM">7:30 PM</option>
            <option value="8:00 PM">8:00 PM</option>
            <option value="8:30 PM">8:30 PM</option>
            <option value="9:00 PM">9:00 PM</option>
            <option value="9:30 PM">9:30 PM</option>
            <option value="10:00 PM">10:00 PM</option>
          </select>
        </div>
      </fieldset>
      <button className="submit-btn" type="submit">Reserve a Table</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};

export default BookingForm;
