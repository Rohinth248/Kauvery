import { Container } from '@mui/material'
import React, { useState , useEffect} from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Thanks() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDisplayed(true);
    }, 2200); // Render after 1.2 seconds

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <Container maxWidth="sm" style={{height:'70vh', display: 'flex', justifyContent: 'center', alignItems: 'senter'}}>
      <Stack direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%' }} spacing={2}>
        {!isDisplayed && (<Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box> )}
        { isDisplayed && <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Thank You for Contacting Kauvery hospital. You will get a callback in 30 minutes.
        </Alert>}

      </Stack>
    </Container>
  )
}

export default Thanks