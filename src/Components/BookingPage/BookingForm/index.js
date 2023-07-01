import React, { useState, useEffect } from 'react';
import './index.css'

const BookingForm = ({ availableTimes, date, setDate, time, setTime, guests, setGuests, occassion, setOccasion, submitter }) => {
  
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
      <input type="submit" value="Make your reservation" onClick={submitter}/>
    </form>
  );
};

export default BookingForm;