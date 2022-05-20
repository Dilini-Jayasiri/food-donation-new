import React from 'react'
import { TextField } from '@mui/material';

export default function TextArea(props) {
    const{name,label,value,onChange} = props;
  return (

        <TextField
            variant="outlined"
            multiline
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        />

    )
}
