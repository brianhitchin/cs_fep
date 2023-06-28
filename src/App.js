import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

function App() {

  useEffect(() => {
    document.title = "Little Lemon"
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>

  );
}

export default App;
