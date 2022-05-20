import { Paper } from '@material-ui/core'
import React from 'react'

import RequestForm from './RequestForm'
//import { makeStyles } from '@mui/styles';
import { makeStyles} from '@material-ui/styles';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { Box,Grid } from '@mui/material';


const theme = createTheme({
  pageContent : {
    spacing:1
}
});

theme.spacing(5)
//theme.spacing(3)

const useStyles = makeStyles((theme) => ({
  
  }
))


export default function Requests() {

  const classes = useStyles();
  return (
      <>
      <Box mx={4} mt={4}>
        <h1>Requests</h1>
      </Box>

      <Box ml={10} marginRight={5} my={4} pt={3}>
       
        <Paper className={classes.pageContent} >
          <ThemeProvider theme={theme}>
            {/* <Box width={'60%'}> */}
              {/* <Grid item={center}> */}
              <Box ml={10} marginRight={5} pt={3}>
            <RequestForm />
            </Box>
            {/* </Grid> */}
            {/* </Box> */}
          </ThemeProvider>

        </Paper>
        
     </Box>
    </>
  )
}
