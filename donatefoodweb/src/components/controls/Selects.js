import { FormControl, FormHelperText, InputLabel, MenuItem,Select } from '@mui/material';
import React from 'react'

export default function Selects(props) {

    const {name, label, value,error=null, onChange,options} = props;

  return (
    <FormControl
    variant='outlined'
    {...(error && {error:true})}>
      <InputLabel>{label}</InputLabel>
      <Select
      label={label}
      name={name}
      value={value}
      onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {
          options.map(
            item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
          )
        }
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}

    </FormControl>
  )
}
