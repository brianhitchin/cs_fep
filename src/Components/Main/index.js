import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';
import './index.css'

export default function Main() {

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
        const selectedDate = new Date(event.target.value);
        setSelectedDate(selectedDate);
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

    function handler(e) {
        e.preventDefault();
        setErrors([])
        if (!date) { setErrors(["Please select a date."]) }
        if (!guests) { setErrors([...errors, "Please indicate the size of your party."]) }
        if (!desiredtime) { setErrors([...errors, "Please select a time."]) }
        if (errors.length == 0) {
            const newTimes = times.filter(el => el !== desiredtime)
            setTimes([...newTimes])
            submitForm(e.target)
        }
    }

    return (
        <div>
            <Helmet>
                <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
            </Helmet>
            <ul>
                {errors.length && errors.map((error, index) => {
                    return (
                        <li key={index}>{error}</li>
                    )
                })}
            </ul>
            <form className='mainform'>
                <label>
                    What is your name?
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                </label>
                <label>
                    What Date?
                    <input type="date" value={selectedDate.toISOString().split('T')[0]}
                        onChange={handleDateChange} min="2023-01-01"></input>
                </label>
                <label>
                    What time?
                    <select id="timeSelect" onChange={(e) => setDesiredtime(e.target.value)}>
                        {times.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    How many people? (Minimum of 1, maximum of 30)
                    <input type="number" min="1" max="30" value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                </label>
                <input type="submit" value="Reserve" className='bme' onClick={handler} />
            </form>
        </div>
    )
}