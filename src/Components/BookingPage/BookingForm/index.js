import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './index.css'

const BookingForm = ({ availableTimes, date, setDate, time, setTime, guests, setGuests, occassion, setOccasion, submitAPI, timesDispatcher }) => {

  const navigate = useNavigate();
  const [errorstate, setErrorstate] = useState([])

  const isValid = () => {
    return (date !== '' && time !== '' && guests > 0 && occassion !== '')
  }

  let errors = []

  const submitter = (e) => {

    e.preventDefault();
    setErrorstate([])
    errors = []
    timesDispatcher({ type: 'UPDATE', date: e.target.value })

    if (date.length == 0) errors.push('Please select a date.')
    if (time.length == 0) errors.push('Please select a time.')
    if (!guests) errors.push('Please select a party size.')
    if (guests > 20) errors.push('Party size cannot exceed 20.')
    if (occassion.length == 0) errors.push('Please select a occassion.')

    if (errors.length == 0) {
      if (submitAPI({ date, time, guests, occassion })) {
        navigate('/confirmed')
      }
    } else {
      console.log(errors)
      setErrorstate([...errors])
    }

  }

  return (
    <form className='mainform'>
      <ul style={{ listStyle: "none" }}>
        {errorstate.length > 0 && errorstate.map((el, id) => {
          return (
            <li key={id} style={{ color: "red" }}>{el}</li>
          )
        })}
      </ul>
      <label htmlFor="dateInput">Choose date:
        <input id="dateInput" type="date" value={date} onChange={(e) => setDate(e.target.value)} required></input>
      </label>
      <label htmlFor="timeInput">Choose time:
        <select value={time} id="timeInput" onChange={(e) => setTime(e.target.value)} required>
          {availableTimes.map(el => {
            return (
              <option value={el}>{el}</option>
            )
          })}
        </select>
      </label>
      <label htmlFor="guestInput">Number of guests (min 1, max 20):
        <input type="number" id="guestInput" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder='1' min="1" max="20" required></input>
      </label>
      <label htmlFor='occasionInput'>What's the occassion?:
        <select value={occassion} id="occasionInput" onChange={(e) => setOccasion(e.target.value)} required>
          <option value={"Birthday"}>Birthday</option>
          <option value={"Anniversary"}>Anniversary</option>
        </select>
      </label>
      <button type="submit" value="Make your reservation" aria-label="On Click" onClick={submitter} disabled={!isValid}>Make a reservation!</button>
    </form>
  );
};

export default BookingForm;