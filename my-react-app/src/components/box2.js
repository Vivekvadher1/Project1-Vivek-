import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent() {
  return (
    <Box mt={2} component="span" sx={{ p: 3, border: '2px dashed black' }}>
      <Button>Save Me!!!</Button>
    </Box>
  );
}