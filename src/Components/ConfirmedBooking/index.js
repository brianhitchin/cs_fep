import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../Header';
import Navbar from '../Nav';
import FooterFunc from '../Footer';
import './index.css'

const ConfirmedBooking = () => {

    const history = useNavigate();

    useEffect(() => {
        const pusher = setTimeout(() => {
            history('/')
        }, 5000)

        return () => {
            clearTimeout(pusher)
        }

    }, [])

    return (
        <main className='hpmain'>
            <Header />
            <Navbar />
            <div className='cbd'>
                <h1>Booking Confirmed</h1>
                <p>Your booking has been confirmed. Thank you! Redirecting you back to home in 5...</p>
            </div>
            <FooterFunc />
        </main>
    );
};

export default ConfirmedBooking;