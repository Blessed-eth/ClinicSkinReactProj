import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // Import your CSS styles here
import './MyCalendar.css'; // Import the CSS file
import { Button } from '../Common/Button';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';


function MyCalendar() {
  const [date, setDate] = useState(new Date());
  

  return (
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date} locale="es"/>
      <Button />
    </div>
  );
}

export default MyCalendar;
