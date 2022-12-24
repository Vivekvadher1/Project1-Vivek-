import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent() {
  return (
    <Box component="span" sx={{ p: 6, border: '4px dashed black',margin: 6}}>
      <Button>Save Me!!!</Button>
      
    </Box>
  );
}