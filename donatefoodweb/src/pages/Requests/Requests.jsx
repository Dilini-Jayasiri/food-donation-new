import { Paper, TableBody, TableCell, TableRow } from '@material-ui/core'
import React, { useState } from 'react'

import RequestForm from './RequestForm'
//import { makeStyles } from '@mui/styles';
import { makeStyles} from '@material-ui/styles';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { Box,Grid } from '@mui/material';
import UseTable from "../../components/UseTable";
import * as OrgType from "../../organizations/orgType";


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

const headCells = [
  {id:'orgName',label:'Organization Name'},
  {id:'orgType',label:'Organization Type'},
  {id:'city',label:'City'},
  {id:'phone',label:'Contact Number'},
  {id:'orgEmail',label:'Email'},
  {id:'quantity',label:'Needed Food Parcels'},
]
export default function Requests() {


  const classes = useStyles();
  const [records,setRecords] = useState(OrgType.getAllRequests())

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPaginAndSorting

  }=UseTable(records,headCells); 

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
              {/* <Box ml={10} marginRight={5} pt={3}>
            <RequestForm />
            </Box> */}
            {/* </Grid> */}
            {/* </Box> */}

            <TblContainer>
              <TblHead className="tableHead"/>
                 <TableBody>
                   {
                     recordsAfterPaginAndSorting().map(item => 
                      (<TableRow key={item.id}>
                        <TableCell>{item.orgName}</TableCell>
                        <TableCell>{item.orgType}</TableCell>
                        <TableCell>{item.city}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.orgEmail}</TableCell>
                        <TableCell>{item.quantity}</TableCell>

                      </TableRow>))
                   }
                 </TableBody>

            </TblContainer>
            <TblPagination/>
          </ThemeProvider>

        </Paper>
        
     </Box>
    </>
  )
}
