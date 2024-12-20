import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppNavbar from '../component/navbar/Navbar';
import { keyframes } from '@emotion/react';



const MainLayout = () => {
  return (
    <div>
      <AppNavbar />
      <main>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'auto',
            
            backgroundColor: '#f5f5f5',
            maxHeight:'100vh',
          }}
        >
          <Outlet /> {/* Renders the matched component (Home, About, Contact, etc.) */}
        </Box>
      </main>
    </div>
  );
};

export default MainLayout;
