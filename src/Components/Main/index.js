import { useState } from 'react';

export default function Main() {

    const [availtimes, setAvailtimes] = useState([])
    const [updatetimes, setUpdatetimes] = useState([])

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

    return (
        <span>Hello from Main!</span>
    )
}