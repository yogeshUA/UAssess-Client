import React, {useState} from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import ReactPlayer from 'react-player'



import useStyles from './styles';



const ConfirmationPage = () => {

    const classes = useStyles()
    const [Start, setStart] = useState(false)
    const instructions = [1, 2, 3, 4, 5, 6]

    const handleStart = () => {
            setStart(true)
    }
    return (
        <Box>
          {!Start? (
            <Box className={classes.conf_container}>
                <Grid>

                    <Box className={classes.conf_Instructions} >
                        <Typography mb={3} variant="h5">Instructions</Typography>

                        {instructions.map((instruction) => (
                            <Typography mb={2}> &#9679; Loremxercitationem blanditiis corporis fuga molestias quibusdam veniam et  laboriosam dolor.</Typography>
                        ))}


                    </Box>
                    <Box textAlign="center" mt={3}>
                        <Button sx={{ width: "100px" }} variant="contained" color="primary" onClick={handleStart} >Start</Button>

                    </Box>
                </Grid>
            </Box>

          ):(
            <Box>
                <Grid align="center"> 

                  <ReactPlayer
                   url="https://www.youtube.com/watch?v=ZGb6xasktBg"
                   
                   />

                
                   </Grid>
                   <Grid textAlign="center" mt={3}  >
                       <Button variant="contained" color="error" >
                           Skip
                         
                       </Button >
                       <Button variant="contained" color="primary" >
                          Start
                       </Button>

                   </Grid>
            </Box>
          )}
        </Box>
    )
}

export default ConfirmationPage;
