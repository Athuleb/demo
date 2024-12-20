// Welcome.jsx
import React, { useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Set a timer to navigate after 3-5 seconds
        const timer = setTimeout(() => {
            navigate('/main/home'); 
        }, 2500); 
        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: 'url(/gif.gif)', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: "#090b2e",
                color: '#fff',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
            }}
        >
            <Typography variant="h2" sx={{ fontWeight: 'bold', marginTop: '60vh' }}>
                Welcome
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    opacity: 0.5,
                    fontStyle: 'italic',
                    fontSize: '0.875rem',
                    padding: '0 2vh',
                    textAlign: 'center'
                }}
            >
                "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great." - Dr. A.P.J. Abdul Kalam
            </Typography>
            
            {/* Stylish loading indicator */}
            <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CircularProgress color="inherit" size={24} />
                <Typography variant="body2" sx={{ marginTop: '10px', opacity: 0.7 }}>
                    Loading...
                </Typography>
            </Box>
        </Box>
    );
};

export default Welcome;