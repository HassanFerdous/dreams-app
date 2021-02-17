import React, { useEffect, useState } from 'react';

//Date picker
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CustomnDatePicker = ({className, placeholder}) => {
    const [startDate, setStartDate] = useState(new Date());
    useEffect(()=> {
        setStartDate(null)
    },[])
    
  return (
    <DatePicker className={className} selected={startDate} onChange={date => setStartDate(date)} showTimeSelect dateFormat="Pp" placeholderText={placeholder} />
  );
}


export default CustomnDatePicker;