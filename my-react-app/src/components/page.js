import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardHeader, Container, TextField, Grid } from '@mui/material';



export default function BasicCard() {
  return (
    <Container fluid sx={{bgcolor : "black"}}>

    <Card sx={{ minWidth: 275, bgcolor : "orange", color :"whitesmoke"}} 
    >



      <CardHeader
       title = "USER DETAILS :"
      />

      <CardContent>

        <Grid container  spacing={2} >

            <Grid item xs={12} sm={6} md={6}>
            <TextField outlined ="outlined-basic"
                            label="Name"
                            variant="outlined" 
                            helperText="Name"
                            margin="normal"
                             /> </Grid>

            <Grid item xs={12} sm={6} md={6}>               
            <TextField outlined = "outlined-basic"
                            label="Email"
                            variant="outlined"
                            helperText="xyz@gmail.com"
                            margin="normal"/> </Grid>
          
            <Grid item xs={12} sm={6} md={6}>               
            <TextField outlined="outlined-basic"
                            label="Phone No."
                            varient="outlined"
                            margin="normal" /> </Grid>

            <Grid item xs={12} sm={6} md={6}> 
            <TextField outlined="outlined-basic"
                            label="Address"
                            varient="outlined"
                            margin="normal" /> </Grid>

        </Grid>

      </CardContent>

    
        
        <CardActions sx={{bgcolor : "chocolate"}} >
          <Button size="small" sx={{bgcolor : "black"}}>Submit</Button>
          <Button size="small" sx={{bgcolor : "black"}}>Cancel</Button>
        </CardActions>

     
    </Card>
    
    </Container>
  );
}
