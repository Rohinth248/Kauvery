import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import { Container, Stack, Typography } from '@mui/material';
import DemoPaper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuItem from '@mui/material/MenuItem';

// import logo from '../Assets/logo.jpeg'
function Home() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState(0);
    const [apartmentName , setApartmentName]=useState('None');
    const currencies = [
        {
            value: 'None',
            label: 'None',
        },
        {
            value: 'Apartment A',
            label: 'Apartment A',
        },
        {
            value: 'Apartment B',
            label: 'Apartment B',
        },
        {
            value: 'Apartment C',
            label: 'Apartment C',
        },
        {
            value: 'Apartment D',
            label: 'Apartment D',
        },
    ];
    const handelGetServices = () => {

       
        navigate('/Services')
    }
    return (
        <>
            <Container maxWidth="sm" style={{height:'70vh'}}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Box style={{ padding: '20px' }} >
                        <Button style={{ padding: '50px', borderRadius: '60%', fontSize: '30px' }} href='tel:+914440504050' color="error" size="large" variant="contained">SOS</Button>
                    </Box>
                </Stack>
                <DemoPaper square={false} variant='elevation' elevation={8} style={{ padding: '10px' }}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant="h4" component="h2">
                            Other Services
                        </Typography>

                        <TextField id="outlined-required" onChange={(e) => { setName(e.target.value) }} fullWidth required label="Name" variant="outlined" />
                        <TextField
                            id="outlined-number"
                            label="Mobile No."
                            type="number"
                            fullWidth
                            required
                            onChange={(e) => { setMobileNo(e.target.value) }}
                        // InputLabelProps={{
                        //     shrink: true,
                        // }}
                        />
                        <TextField
                        fullWidth
                            id="outlined-select-currency"
                            select
                            label="Apatment Name"
                            defaultValue="None"
                           onChange={(e)=>{setApartmentName(e.target.value)}}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button fullWidth color="primary" disabled={name === "" || mobileNo < 1000000000 || apartmentName === 'None'} endIcon={<ArrowForwardIcon />} onClick={handelGetServices} size="large" variant="contained">
                            Get Services
                        </Button>

                    </Stack>
                </DemoPaper>
            </Container>
        </>
    )
}

export default Home