import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel'; // You need to install this package: npm install react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Include the carousel CSS
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100dvh',
        backgroundColor: '#f5f5f5',
        color: 'black',
        padding: 2,
       overflow: 'hidden', // Disables scrolling
      }}
    >
      {/* Carousel Section */}
      <Box sx={{ width: '80%', marginBottom: 4 }}>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          <div>
            <img src="https://via.placeholder.com/800x400.png?text=Demo+Image+1" alt="Demo 1" />
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                color: 'white',
                fontSize: { xs: '1rem', md: '1.5rem' },
              }}
            >
              Image 1
            </Typography>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400.png?text=Demo+Image+2" alt="Demo 2" />
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                color: 'white',
                fontSize: { xs: '1rem', md: '1.5rem' },
              }}
            >
              Image 2
            </Typography>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400.png?text=Demo+Image+3" alt="Demo 3" />
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                color: 'white',
                fontSize: { xs: '1rem', md: '1.5rem' },
              }}
            >
              Image 3
            </Typography>
          </div>
        </Carousel>
      </Box>

      {/* Quote Section */}
      <Container sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontStyle: 'italic',
            color: '#3f51b5',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          }}
        >
          "Education is the most powerful weapon which you can use to change the world."
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: 2,
            fontStyle: 'italic',
            color: '#757575',
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          - Nelson Mandela
        </Typography>
      </Container>

      <Container sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontStyle: 'italic',
            color: '#3f51b5',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          }}
        >
          "The future belongs to those who believe in the beauty of their dreams."
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: 2,
            fontStyle: 'italic',
            color: '#757575',
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          - Eleanor Roosevelt
        </Typography>
      </Container>

      {/* Button Section */}
      <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#3f51b5',
            '&:hover': {
              backgroundColor: '#303f9f',
            },
          }}
        >
          <Link to="/explore" style={{ textDecoration: 'none', color: 'white' }}>
            Explore Now
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
