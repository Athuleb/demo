import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

// Sample images for demo
const images = [
  'https://via.placeholder.com/400x300.png?text=Image+1',
  'https://via.placeholder.com/400x300.png?text=Image+2',
  'https://via.placeholder.com/400x300.png?text=Image+3',
  'https://via.placeholder.com/400x300.png?text=Image+4',
  'https://via.placeholder.com/400x300.png?text=Image+5',
  'https://via.placeholder.com/400x300.png?text=Image+6',
];

function Gallery() {
  return (
    <Box
    id='gallery'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f2',
        padding: 3,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
        Our Gallery
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {images.map((image, index) => (
          <Grid item xs={4} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={`Image ${index + 1}`}
                sx={{
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: '0.3s',
                  },
                }}
              />
              <CardContent>
                <Typography variant="h6">Image {index + 1}</Typography>
                <Typography variant="body2" color="textSecondary">
                  A beautiful photo showcasing stunning visuals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Gallery;
