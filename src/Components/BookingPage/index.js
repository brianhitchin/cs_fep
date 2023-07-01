import React, { useReducer, useState } from 'react'
import BookingForm from './BookingForm'

const BookingPage = () => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(0);
    const [occassion, setOccasion] = useState('');

    const updateTimes = (date) => {
        // add logic to change availableTimes
        return initializeTimes();
    };

    const initializeTimes = () => { return ['17:00', '18:00', '19:00', '20:00', '21:00'] }

    const availableTimesReducer = (state = initializeTimes(), action) => {
        switch (action.type) {
            case 'UPDATE':
                return updateTimes(action.date)
            default:
                return state
        }
    }

    const [availableTimes, timesDispatcher] = useReducer(availableTimesReducer, initializeTimes())

    const submitter = (e) => {
        timesDispatcher({ type: 'UPDATE', date: e.target.value })
    }

    return (
        <main>
            <BookingForm availableTimes={availableTimes} date={date} setDate={setDate} 
                time={time} setTime={setTime} guests={guests} setGuests={setGuests} occassion={occassion} setOccasion={setOccasion}
                submitter={submitter} />
        </main>
    )
}
export default BookingPage;