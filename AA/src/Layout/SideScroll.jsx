import React from 'react';
import { Box } from '@mui/material';
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Feedback from '../pages/Feedback';

const SideScroll = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
        overflowY:'hidden',
        scrollSnapType: 'x mandatory',
        backgroundColor:'blue',
        height: '100vh',
        maxHeight:'100vh',
        '& > *': {
          scrollSnapAlign: 'center',
          flex: '0 0 100%',
        },
        '&::-webkit-scrollbar': {
          display: 'none', // Optional: Hide scrollbar
        },
      }}
    >
      <Home />
      <About />
      <Gallery />
      <Contact />
      <Feedback />
    </Box>
  );
};

export default SideScroll;
