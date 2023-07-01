import React, { useReducer, useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import FooterFunc from '../Footer'
import Header from '../Header';
import NavBar from '../Nav'
import BookingForm from './BookingForm'
import './index.css'

const BookingPage = () => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(0);
    const [occassion, setOccasion] = useState('');

    const navigate = useNavigate();

    function randomint() {
        return Math.floor(Math.random() * 31)
    }

    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(randomint());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function (formData) {
        return true;
    };

    const initializeTimes = () => { return fetchAPI(new Date()) }

    const updateTimes = (date) => {
        return fetchAPI(date)
    };

    const availableTimesReducer = (state = initializeTimes(), action) => {
        switch (action.type) {
            case 'UPDATE':
                return updateTimes(action.date)
            default:
                return state
        }
    }

    const [availableTimes, timesDispatcher] = useReducer(availableTimesReducer, initializeTimes())

    useEffect(() => {

        timesDispatcher({ type: 'UPDATE', date });

    }, [date]);

    return (
        <main className='hpmain'>
            <Header />
            <NavBar />
            <section className='hpsection'>
                <h2>Reservation</h2>
                <p style={{width: '400px', textAlign: 'center'}}>Check available times, dine at your leisure!</p>
            </section>
            <BookingForm availableTimes={availableTimes} date={date} setDate={setDate}
                time={time} setTime={setTime} guests={guests} setGuests={setGuests} occassion={occassion} setOccasion={setOccasion}
                submitAPI={submitAPI} timesDispatcher={timesDispatcher}/>
            <FooterFunc />
        </main>
    )
}

export default BookingPage;