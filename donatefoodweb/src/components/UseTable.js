import { useTheme } from '@emotion/react'
import {  Table, TableCell, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(({
    table: {
        //marginTop:spacing(3),
        '& thead th': {
            fontWeight:'600',
            // color:palatte.primary.main,
            backgroundColor : '#74F9FF',

        },
        '& tbody td' : {
            fontWeight:'300',
        },
        '& tbody tr:hover': {
            backgroundColor:'#fffbf2',
            cursor:'pointer',
        },
       
       //color:primary,

    },
}))

export default function UseTable(records, headCells) {

 const classes = useStyles();

 const pages = [5,10,15]
 const [page,setPage] = useState(0);
 const [rowsPerPage,setRowsPerPage] = useState(pages[page])

    const TblContainer = props => (
        <Table className={classes.table}>
           {props.children}
        </Table>
    )

    
    const TblHead = props => {
         
        return (<TableHead>
            <TableRow>
                {
                    headCells.map(headCell => (<TableCell key={headCell.id}>
                        {headCell.label}
                    </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }

    const handleChangePage=(event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value,10))
        setPage(0);
    }

    const TblPagination = () => (<TablePagination
    component='div'
    page={page}
    rowsPerPageOptions={pages}
    rowsPerPage={rowsPerPage}
    count={records.length}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
     />)

     const recordsAfterPaginAndSorting = () => {
         return records.slice(page*rowsPerPage,(page+1)*rowsPerPage)
     }
  return {
      TblContainer,
      TblHead,
      TblPagination,
      recordsAfterPaginAndSorting
  }
}
