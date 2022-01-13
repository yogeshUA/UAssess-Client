import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Divider, Container, Link, Grid } from '@mui/material';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import useStyles from './styles.js';
import OTPinput from '../../components/OTP/OTP';
import landingImg from '../../assets/images/Rectangle278.png';
import Footer from '../../components/footer/Footer';



const LandingPage = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const params = useParams();

    const [OTP, setOTP] = useState(" ");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isWrong, setisWrong] = useState(false);

    useEffect(() => {
        if (OTP.length === 6) {
            if (OTP === "123456") {
                setIsAuthenticated(true)
            } else {
                setisWrong(true)
            }
            }else{
                setIsAuthenticated(false)
                setisWrong(false)
            }
    }, [OTP])

    const handleProceed = () => {
        navigate('/confirmation')
    }

    
    const handleChange = (otp) => {
        setOTP(otp);

    };

    console.log(OTP);

    return (


           <Box >

            <Box sx={{ width: '100%' }} className={classes.otp_page} mb={3}>
            <Grid container rowSpacing={1}  >
                <Grid item xs={12} md={6} lg={6} className={classes.landingImg_container} >
                    <img alt="otp-image" src={landingImg} className={classes.otp_image} />
                </Grid>
                <Grid item xs={12} md={6} lg={6} className={classes.otp_container}  >
                    <Container className={classes.otp_component}>
                        <Typography mt={3} align="center" variant="h5" >Hey Darshan</Typography>
                        <Typography mt={1} align="center" variant="h6">You're invited to the Digital Marketing Assessment</Typography>
                        <Typography mt={1} mb={2} align="center" variant="subtitle1" >Estimated time 10 mins</Typography>
                        <Divider />
                        <Container >
                            <Typography align="center" variant="subtitle1" mt={3} >Please enter the six digit code sent to your email</Typography>
                            

                                <OTPinput
                                    value={OTP}
                                    handleChange={handleChange}
                                    isAuthenticated={isAuthenticated}
                                    isWrong={isWrong}
                                    />
                            

                            <Typography mt={3} mb={3} variant="body2" align="center">By clicking proceed you agree to the &nbsp;
                                <Link href="#" underline="always" color="primary"  >
                                    Terms and Conditions
                                </Link>
                            </Typography>

                            <Box textAlign="center" >
                                <Button sx={{ width: "200px" }} variant="contained" disabled={!isAuthenticated}  onClick={handleProceed}>
                                    Proceed
                                </Button>
                            </Box>
                        </Container>
                    </Container>
                </Grid>

            </Grid>
        </Box>
            <Footer/>
                                    </Box> 
        


    )
}

export default LandingPage
