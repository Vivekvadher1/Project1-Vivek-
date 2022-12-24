import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx() {
  return (
    <Box 
      sx={{
        width: 400,
        height: 400,
        margin : 10,
        backgroundColor: 'grey',
        
        '&:hover': {
          backgroundColor: 'black',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    
  );
}