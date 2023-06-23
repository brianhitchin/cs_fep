import { useState } from 'react';
import './App.css';

function App() {

  const [availtimes, setAvailtimes] = useState([])

  function initializeTimes() {
    const today = new Date();

    fetchAPI(today)
      .then((available_times) => {
        updateTimes(available_times);
      })
      .catch((_error) => {
        console.error('Error fetching available times at this particular date.');
      });
  }

  function updateTimes(selectedDate) {
    fetchAPI(selectedDate)
      .then((times) => {
        // Update the times in the booking form
        // ...
      })
      .catch((error) => {
        console.error('Error fetching available times:', error);
      });
  }

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
