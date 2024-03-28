import React, { useState ,useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import { Container, Typography, Grid } from '@mui/material';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DemoPaper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Services() {

    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsDisplayed(true);
        }, 1200); // Render after 1.2 seconds

        // Clean up the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [service, setService] = useState('');
    const handleClickOpen = (e) => {
        setService(e.target.innerText);

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handelSendMail = () => {
        navigate('/Thanks')
    }
    return (
        <>
            <Container maxWidth="sm" style={{ height: '70vh' , display: 'flex', justifyContent: 'center', alignItems: 'center'}} >

                {!isDisplayed && (<Box sx={{ display: 'flex' }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <CircularProgress />
                </Box>)}
                {isDisplayed && (

                <DemoPaper style={{ padding: '20px' }} elevation={8}>
                    <Typography variant="h4" component="h2">
                        Services
                    </Typography>
                    <Grid container style={{ padding: '20px 0' }} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Button fullWidth variant='contained' onClick={handleClickOpen} endIcon={<VideoCallIcon />}>Talk to docter </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth variant='contained' onClick={handleClickOpen} endIcon={<DeliveryDiningIcon />}>Medicine Delivery</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth variant='contained' onClick={handleClickOpen} endIcon={<HomeWorkIcon />}>Home Sample </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth variant='contained' onClick={handleClickOpen} endIcon={<FmdGoodIcon />}>Pickup / Drop</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth variant='contained' onClick={handleClickOpen} endIcon={<AccessTimeFilledIcon />}>Appointment Booking </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth variant='contained' onClick={handleClickOpen} endIcon={<Inventory2Icon />}>Package Booking</Button>
                        </Grid>
                    </Grid>
                </DemoPaper>
                )}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {service.toLocaleUpperCase()}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {`Do you want "${service.toLowerCase()}" service `}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>No</Button>
                        <Button onClick={handelSendMail} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>

        </>
    )
}

export default Services