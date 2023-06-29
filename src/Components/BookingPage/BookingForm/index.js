import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';
import './index.css'

const Main = () => {
    const [date, setDate] = useState('');
    
    const initializeTimes = () => {
      return ['10:00 PM', '10:30 PM', '11:00 PM'];
    };
  
    const updateTimes = (date) => {
      return initializeTimes();
    };
  
    const [availableTimes, dispatch] = useReducer(
      (state, action) => {
        switch (action.type) {
          case 'UPDATE_TIMES':
            return updateTimes(action.date);
          default:
            return state;
        }
      },
      initializeTimes()
    );
  
    const handleDateChange = (event) => {
      const newDate = event.target.value;
      setDate(newDate);
      dispatch({ type: 'UPDATE_TIMES', date: newDate });
    };
  
    return (
      <div>
        <BookingForm
          selectedDate={selectedDate}
          availableTimes={availableTimes}
          onDateChange={handleDateChange}
        />
      </div>
    );
  };
  