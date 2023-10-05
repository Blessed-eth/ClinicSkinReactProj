import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // Import your CSS styles here
import './MyCalendar.css'; // Import the CSS file
import { Button } from '../Common/Button';


function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [locale, setLocale] = useState("es"); // Set default locale to "es" for Spanish
  

  return (
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date} />
      <Button />
    </div>
  );
}

export default MyCalendar;
