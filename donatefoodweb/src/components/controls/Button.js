import React from 'react'
import {Button as MuiButton} from '@mui/material';
import { makeStyles} from '@material-ui/styles';


const useStyles = makeStyles(theme =>({
    // root : {
    //     margin:theme.spacing(0.5)
    // },
    label : {
        textTransform:'none'
    }
}))
export default function Button(props) {

    const {text,size,color,variant,onClick,type, ...other} = props;
    const classes = useStyles();

  return (
    <MuiButton
    variant={variant || "contained"}
     size={size || "large"}
     color={color || "primary"}
     onClick={onClick}
     type={"submit"}
     classes={{root: classes.root,label: classes.label}}>
         
         {/* {...other} */}
         {text}

    </MuiButton>
  )
}
