import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {

  return (
    <>
      <Routes>

        <Route exact path="/confirmed" element={
          <ConfirmedBooking />
        } />

        <Route path="/" element={
          <>
            <Header />
            <Nav />
            <Main />
            <Footer />
          </>
        } />
        
      </Routes>
    </>

  );
}

export default App;
