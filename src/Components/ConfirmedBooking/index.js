import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const ConfirmedBooking = () => {

    const history = useNavigate();

    useEffect(() => {
        const pusher = setTimeout(() => {
            history('/')
        })

        return () => {
            clearTimeout(pusher)
        }

    }, [])

    return (
        <div>
            <h1>Booking Confirmed</h1>
            <p>Your booking has been confirmed. Thank you! Redirecting you back to home in 5...</p>
        </div>
    );
};

export default ConfirmedBooking;