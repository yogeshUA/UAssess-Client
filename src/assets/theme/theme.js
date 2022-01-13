import {createTheme} from '@mui/material';

const theme =  createTheme({
    palette:{
        primary:{
            main:'#0b75f0'
        }
    },
    typography:{
        fontFamily:'Inter'
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius:"1px",
              shadow: '0',
              textTransform:"none",
              fontSize:"14px",
              paddingLeft:"50px",
              paddingRight:"50px",
              margin:"20px"
            },
          },
        },
      },
});

export default theme;