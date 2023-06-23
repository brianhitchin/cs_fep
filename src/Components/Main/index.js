import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './index.css'

export default function Main() {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('2023-07-22')
    const [guests, setGuests] = useState(0)
    const [availtimes, setAvailtimes] = useState(["17", "18", "19", "20", "21", "22"])
    const [updateTimes, setUpdatetimes] = useState([])

    /*
    function initializeTimes() {
        const today = new Date();

        fetchAPI(today)
            .then((available_times) => {
                setAvailtimes([...available_times]);
            })
            .catch((_error) => {
                console.error('Error fetching available times at this particular date.');
            });
    }

    function updateTimes(selectedDate) {
        fetchAPI(selectedDate)
            .then((times) => {
                setUpdatetimes([...times])
            })
            .catch((_error) => {
                console.error('Error updating available times at this particular date.');
            });
    }
    */

    function handler(e) {
        e.preventDefault();
        console.log(name, date, time, guests)
    }

    function parser(e) {
        const num = Number(e) - 12
        return `${num}:00PM`
    }

    return (
        <div>
            <Helmet>
                <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
            </Helmet>
            Hello from Main!
            <form className='mainform'>
                <label>What is your name?
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                </label>
                <label>What time?
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min="2023-01-01"></input>
                </label>
                <label>
                    What time?
                    <select value={time} onChange={(e) => setTime(e.target.value)}>
                        {availtimes.map((el) => {
                            return (
                                <option value={el}>{parser(el)}</option>
                            )
                        })}
                    </select>
                </label>
                <label>
                    How many people? (Minimum of 1, maximum of 30)
                    <input type="number" min="1" max="30" value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                </label>
                <input type="submit" value="Reserve" onClick={handler}/>
            </form>
        </div>
    )
}