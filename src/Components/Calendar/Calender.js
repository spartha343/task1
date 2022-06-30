import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

const Calender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='h-screen calendar'>
            <div className='shadow-2xl'>
                <Calendar onChange={onChange} value={value}></Calendar>
            </div>
        </div>
    );
};

export default Calender;