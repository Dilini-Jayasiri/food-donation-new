import React from 'react'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import  AdapterDateFns  from '@material-ui/lab/AdapterDateFns';
import {DatePicker} from '@material-ui/lab'
import { TextField } from '@mui/material';

//import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

export default function DatePicker1(props) {

const {name, label, value, onChange} = props;

const convertToDefEventPara = (name,value) => ({
    target: {
        name,value
    }
})

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      disbleToolbar  
      varient="inline"
      inputVariant="outlined" 
       label={label}
       format="MMM/dd/yyyy"
       name={name}
       value={value}
       onChange={date => onChange(convertToDefEventPara(name,date))}
       renderInput={(props) => <TextField  {...props} helperText={null} />}
       />
  </LocalizationProvider>
   
       

  
  )
}
