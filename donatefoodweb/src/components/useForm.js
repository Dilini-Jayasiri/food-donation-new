import React, {useState} from 'react'
import { makeStyles} from '@material-ui/styles';
//import { createTheme,ThemeProvider } from '@mui/material';

import { ThemeProvider,createTheme } from '@material-ui/core/styles';


export function useForm(initialValues,validateOnChange=false,validate) {

    
    const [values,setValues] = useState(initialValues);
    const [errors,setErrors] = useState({});

    const handleInputChange = e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
        validate({[name] : value})
    }

    const resetForm = () => {
      setValues(initialValues);
      setErrors({})
    }

  return {
      values,
      setValues,
      errors,
      setErrors,
      handleInputChange,
      resetForm
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
    const {children,...other} = props; 

  return (
    <form  className={classes.root} autoComplete="off" {...other}> 
   
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>

    </form>
  )
}
