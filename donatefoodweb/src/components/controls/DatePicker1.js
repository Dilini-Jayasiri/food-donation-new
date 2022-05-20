import React from 'react'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import  AdapterDateFns  from '@mui/x-date-pickers/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

export default function DatePicker1(props) {

const {name, label, value, onChange} = props;

const convertToDefEventPara = (name,value) => ({
    target: {
        name,value
    }
})

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DesktopDatePicker disbleToolbar  inputVariant="outlined" 
       label={label}
       format="MMM/dd/yyyy"
       name={name}
       value={value}
       onChange={date => onChange(convertToDefEventPara(name,date))}
       />
  </LocalizationProvider>
   
       

  
  )
}
