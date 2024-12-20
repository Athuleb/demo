import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
  flexShrink: 0,
});

export default function AppNavbar() {
  const navItems = ['Home', 'About', 'Gallery', 'Contact', 'Feedback'];

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'background.paper',
        backgroundImage: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        top: 0,
      }}
    >
      <Toolbar variant="regular">
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            flexGrow: 1,
            width: '90%',
            gap: 1,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: 'center', mr: 'auto', alignItems: 'center' }}
          >
            <CustomIcon />
            <Typography
              variant="h4"
              component="h1"
              sx={{
                color: '#fac107',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 'bold',
                fontSize: '36px',
              }}
            >
              A
            </Typography>
          </Stack>

          {/* Desktop and Mobile Navigation */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: { xs: 'center', md: 'flex-end' }, // Align right on desktop
            }}
          >
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => {
                  const section = document.getElementById(item.toLowerCase());
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  color: 'black',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  textTransform: 'none', 
                  backgroundColor: 'none',
                  outline: 'none',
                  padding: '4px 8px',
                  position: 'relative',
                  '&:hover': {
                    color: '#fac107',
                    backgroundColor: 'none',
                  },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    backgroundColor: '#fac107',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover:after': {
                    width: '100%',
                  },
                  '&.selected:after': {
                    width: '100%',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export function CustomIcon() {
  return (
    <Box
      sx={{
        width: '1.5rem',
        height: '1.5rem',
        bgcolor: 'black',
        borderRadius: '999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(135deg, hsl(210, 98%, 60%) 0%, hsl(210, 100%, 35%) 100%)',
        color: 'hsla(210, 100%, 95%, 0.9)',
        border: '1px solid',
        borderColor: 'hsl(210, 100%, 55%)',
        boxShadow: 'inset 0 2px 5px rgba(255, 255, 255, 0.3)',
      }}
    />
  );
}
