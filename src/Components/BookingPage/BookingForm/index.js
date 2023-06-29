import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './index.css'

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(0);
  const [occassion, setOccasion] = useState('');
  const [availableTimes, setAvaileableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00'])

  return (
    <form>
      <label>Choose date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
      </label>
      <label>Choose time:
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map(el => {
            return (
              <option value={el}>{el}</option>
            )
          })}
        </select>
      </label>
      <label>Number of guests (min 1, max 20):
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder='1' min="1" max="20"></input>
      </label>
      <label>What's the occassion?:
        <select value={occassion} onChange={(e) => setOccasion(e.target.value)}>
          <option value={"Birthday"}>Birthday</option>
          <option value={"Anniversary"}>Anniversary</option>
        </select>
      </label>
      <input type="submit" value="Make your reservation" />
    </form>
  );
};

export default BookingForm;