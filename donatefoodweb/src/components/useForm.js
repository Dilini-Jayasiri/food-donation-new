import React, {useState} from 'react'
import { makeStyles} from '@material-ui/styles';
//import { createTheme,ThemeProvider } from '@mui/material';

import { ThemeProvider,createTheme } from '@material-ui/core/styles';


export function useForm(initialValues) {

    
    const [values,setValues] = useState(initialValues);

    const handleInputChange = e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

  return {
      values,
      setValues,
      handleInputChange
  }
      
  
}

const theme = createTheme();
// const theme = createTheme({
//     spacing:2
// })

// theme.spacing(2);

const useStyles = makeStyles(() => ({
    root : {
       '& .MuiFormControl-root': {
           width:'80%',
          // outerHeight:'80%'
           //spacing:'2'
          // margin:theme.spacing(1)
       }
    }
}))





export function Form(props) {

    const classes = useStyles();

  return (
    <form  className={classes.root} autoComplete="off"> 
   
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>

    </form>
  )
}
