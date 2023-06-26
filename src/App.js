import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {

  useEffect(() => {
    document.title = "Little Lemon"
  }, [])

  return (
    <>
      <Routes>

        <Route exact path="/confirmed" element={
          <>
            <Header />
            <ConfirmedBooking />
          </>
        } />

        <Route path="/" element={
          <>
            <Header />
            <Nav />
            <BookingForm />
            <Footer />
          </>
        } />

      </Routes>
    </>

  );
}

export default App;
