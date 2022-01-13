import React from 'react';
import OtpInput from 'react-otp-input';
import { Box,Grow,FormHelperText } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import DangerousIcon from '@mui/icons-material/Dangerous';



const inputStyle = {
    border: 0,
    borderBottom: "2px solid #cdcdcd",
    fontSize: "27px",
    color: "#0b75f0",
    marginLeft: "6px",
    width: "35px",

}
const focusStyle = {
    outline: "none",
    borderBottom: "2px solid #0b75f0",
}

function OTP({ value, handleChange, isAuthenticated,isWrong }) {

    
    return (
        <Box mt={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <OtpInput
                value={value}
                onChange={handleChange}
                focusStyle={focusStyle}
                inputStyle={inputStyle}
                isInputNum="true"
                autoFocus={true}
                numInputs={6}
                otpType="number"
                shouldAutoFocus={true}
                 />
          
            {isAuthenticated && (
                   <Grow in >
                    <VerifiedIcon sx={{ color: "#17ebbc", marginBottom:"15px" }} />
                   </Grow>
                
            )}
            {isWrong && (
                <Grow in >
                    <DangerousIcon sx={{ color: "#d21404", marginBottom:"15px" }} ></DangerousIcon>
                </Grow>
            )}
        
        </Box >
    );

}

export default OTP;