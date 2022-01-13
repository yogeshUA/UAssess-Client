import React from 'react';
import { Typography } from '@mui/material';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles()
    return (
        <div>
            <Typography className= {classes.footer} align="center" >Copyright &copy; UAssess. All rights reserved.</Typography> 
        </div>
    )
}

export default Footer;
