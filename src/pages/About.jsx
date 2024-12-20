import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

function About() {
  return (
    <Box
    id="about"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'black',
        backgroundColor: '#f5f5f4',
        animation: `${slideIn} 1s ease-out`,
        padding: 3,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '800px', marginBottom: 3 }}>
        We are dedicated to providing excellent services and an exceptional user experience. Our goal is to make sure that our users are always satisfied with our offerings and that they have the best tools at their disposal to achieve success.
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '800px' }}>
        Whether you're a new visitor or a long-time user, we are committed to continuous improvement and ensuring that every interaction with us is a positive one.
      </Typography>
    </Box>
  );
}

export default About;
