import React, { useState } from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export const Example:React.FC =()=>{
    const [from,setFrom]=useState(new Date(Date.UTC(2012, 11, 20, 3, 0, 0)))
    const [to,setTo]=useState(new Date(Date.UTC(2012, 11, 20, 3, 0, 0)))
    const modifiers = { start: from, end: to };

    
    function handleDayClick(day:any) {
     
        
      }

  return(
    <div className="RangeExample">
    <p>
      {!from && !to && 'Please select the first day.'}
      {from && !to && 'Please select the last day.'}
      {from &&
        to &&
        `Selected from ${from.toLocaleDateString()} to
            ${to.toLocaleDateString()}`}{' '}
      {from && to && (
        <button className="link">
          Reset
        </button>
      )}
    </p>
    <DayPicker
      className="Selectable"
      numberOfMonths={2}
      selectedDays={[from, { from, to }]}
      modifiers={modifiers}
      
    />
    <Helmet>
      <style>{`
.Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
background-color: #f0f8ff !important;
color: #4a90e2;
}
.Selectable .DayPicker-Day {
border-radius: 0 !important;
}
.Selectable .DayPicker-Day--start {
border-top-left-radius: 50% !important;
border-bottom-left-radius: 50% !important;
}
.Selectable .DayPicker-Day--end {
border-top-right-radius: 50% !important;
border-bottom-right-radius: 50% !important;
}
`}</style>
    </Helmet>
  </div>
  )
  
}