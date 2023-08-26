import React from 'react';
import TeamPage from "./component/TeamPage"
import { Container, Box, Typography } from '@mui/material';

function App() {
  return (
    <>
      <Box sx={{textAlign:"center", bgcolor: '#111C2B', color:"#FFF", padding:1}}>
        <Typography variant="h6">Team Page</Typography>
      </Box>
      <Container >
        <Box sx={{ bgcolor: '#FAFAFA', height: '100%', }} >
          <TeamPage />
        </Box>
      </Container>

    </>

  );
}

export default App;
