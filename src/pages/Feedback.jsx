import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

// Slide-in animation
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

function Feedback() {
  return (
    <Box
    id="feedback"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f1',
        animation: `${slideIn} 1s ease-out`,
        padding: 3,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
        We Value Your Feedback
      </Typography>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          maxWidth: 500,
          width: '100%',
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Your Feedback"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ padding: '10px 20px' }}
        >
          Submit Feedback
        </Button>
      </Box>
    </Box>
  );
}

export default Feedback;