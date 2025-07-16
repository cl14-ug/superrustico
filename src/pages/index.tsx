import React from 'react';
import { Box, CssBaseline } from '@mui/material';

/**
 * Landing page for superrustico.com
 * Displays a fullscreen, centered, auto-playing, looping video with no controls.
 */
const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          bgcolor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <video
          src="/superrustico.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            maxWidth: '100vw',
            maxHeight: '100vh',
            objectFit: 'contain',
            background: 'black',
            display: 'block',
          }}
        />
      </Box>
    </>
  );
};

export default Home; 