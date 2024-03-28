import React from 'react'
import Home from './components/Home'
import Services from './components/Services'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thanks from './components/Thanks';
import { Box, Container, Typography } from '@mui/material';
import logo from './Assets/logo.jpeg'

function App() {
  return (
    <>
      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'end', alignItems: 'start',height:'20vh',marginTop:'0' }} >
        <Box >
          <img style={{ width: '150px' }} src={logo} alt='logo' />
        </Box>
      </Container>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Thanks' element={<Thanks />} />
        </Routes>
      </BrowserRouter>
      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'end', alignItems: 'start',height:'10vh',marginBottom:'0'}} >
        <Box>
          <Typography style={{ opacity: '0.3', padding: '10px' }}>Developed and © By Roginth B</Typography>
        </Box>
      </Container>
    </>
  )
}

export default App