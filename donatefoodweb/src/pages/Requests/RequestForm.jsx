import React,{useState,useEffect} from 'react'

import {Grid, TextField} from '@mui/material';
// import '@material-ui/lab';
// import '@mui/icons-material';
//import '../../assets/partials/forms.scss';
//import { makeStyles } from '@material-ui/styles';
//import { makeStyles } from '@material-ui/styles';'
//import '../src/assets/partials/forms'

//import { makeStyles } from '@mui/styles';
//import { makeStyles } from '@mui/material/styles';
//import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

// const useStyle = makeStyles(theme => ({
//     root : {
//        '& .MuiFormControl-root': {
//            width:'80%',
//            margin:theme.spacing(1)
//        }
//     }
// }))
const initialValues = {
    id:0,
    orgName:'',
    orgSize:'',
    foodType:'',
    quantity:'',
    mobile:'',
    city:'',

}



export default function RequestForm() {

   // const [values,setValues] = useState(initialValues); 
    //const classes = useStyle();
  return (
   <form className='forms'> 
       <div>
       <Grid Container>
           <Grid item xs={6}>
               <TextField
                variant="outlined"
                label="Organization Name"
                // value={values.orgName}
               />
               <TextField
                variant="outlined"
                label="Email Address"
               />

              
           </Grid>
           <Grid item xs={6}>
               
           </Grid>
       </Grid>
       </div>
   </form>
  )
}


