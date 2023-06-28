import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';
import './index.css'

export default function BookingForm() {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [times, setTimes] = useState([]);
    const [desiredtime, setDesiredtime] = useState('')
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [guests, setGuests] = useState(0)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

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
        let random = seededRandom(date.getDate());

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

    const fetchAvailableTimes = async (date) => {
        try {
            const response = await fetchAPI(date);
            setTimes(response);
        } catch (error) {
            console.error('Error fetching available times:', error);
        }
    };

    const handleDateChange = (event) => {
        const newDate = new Date(event.target.value);
        setSelectedDate(newDate);
    };

    useEffect(() => {
        fetchAvailableTimes(selectedDate);
    }, [selectedDate]);


    function submitForm(data) {
        let resp = submitAPI(data)

        if (resp) {
            navigate('/confirmed')
        }
    }

    const handler = (e) => {

        e.preventDefault();
        setErrors([])
        let errorz = []

        if (!name.length) { 
            errorz.push("Please indicate your name.") 
        }

        if (!guests) {
            errorz.push("Please indicate the size of your party.") 
        }

        if (!desiredtime.length) { 
            errorz.push("Please select a time.") 
        }

        setErrors(errorz)

        if (errorz.length == 0) {
            const newTimes = times.filter(el => el !== desiredtime)
            setTimes([...newTimes])
            submitForm(e.target)
        }
        
    }

    return (
        <div>
            <form className='mainform'>
            <ul>
                {errors.length > 1 && errors.map((error, index) => {
                    return (
                        <li key={index}>{error}</li>
                    )
                })}
            </ul>
                <label htmlFor="nameInput">
                    What is your name?
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                </label>
                <label htmlFor="dateInput">
                    What Date?
                    <input type="date" value={selectedDate.toISOString().split('T')[0]}
                        onChange={handleDateChange} min="2023-01-01"></input>
                </label>
                <label htmlFor="timeSelect">
                    What time?
                    <select id="timeSelect" onChange={(e) => setDesiredtime(e.target.value)}>
                        {times.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="guestsInput">
                    How many people? (Minimum of 1, maximum of 30)
                    <input type="number" min="1" max="30" value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                </label>
                <input type="submit" value="Reserve" className='bme' aria-label="On Click" onClick={handler} />
            </form>
        </div>
    )
}