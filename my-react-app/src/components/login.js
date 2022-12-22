import * as React from 'react';
import  { useState}  from 'react';
import { 
   Typography,
   TextField,
   Button,
   Grid,
   Container,
   ImageList,
   ImageListItem
    } from '@mui/material';
import useAxios from 'axios-hooks'
 
const c_username = "Vivek";
const c_password = "123456";

export default function Login() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

 
let login_object={
  username:username,
  password:password
}

 const [
  { data: loginData, loading: loginLoding, error: loginError },
  executeLogin
] = useAxios(
  {
    url: 'http://localhost:5000/users/loginUser',
    method: 'POST',
    data:login_object
  },
  { manual: true }
)
if(loginData){
  console.log(loginData)
  if(loginData.name){
    console.log("loggeedd in")
  }
}

  return (
    <Container fluid style={{backgroundColor:"black", borderRadius:10}}>
      <Grid container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center" 
          bgcolor='orange'
          sx={{marginTop:'20px', marginBottom :'30px'}}>

              <Grid item xs={12} md={6} padding={15}>
                <ImageList sx={{ width: 400, height: 300 }}    >
                    <ImageListItem>
                      <img
                        src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
                       // srcSet={`{}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt='Breakfast'
                        loading="eager"
                      />
                    </ImageListItem>
                </ImageList>
              </Grid>      

              <Grid container item xs={12} md={6} spacing={2} padding={1}>
                <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                  Login!!!
                </Typography>
                </Grid>

                <Grid item xs={12}>
                <TextField id="outlined-basic"
                label="User Name"
                variant="outlined" 
                margin="normal"
                onChange={(e)=>{setUsername(e.target.value);console.log(e.target.value)}}
                />
                </Grid>

                <Grid item xs={12}>      
                <TextField id="outlined-basic"
                      label="Password"
                      type="password" 
                      variant='outlined'
                      margin="normal"
                      onChange={(e)=>{
                        console.log(e.target.value)
                        setPassword(e.target.value)
                      }}
                      />
                </Grid>

                <Grid item xs={12}>
                <Button style={{
                                  borderRadius: 20,
                                  backgroundColor: "black",
                                  padding: "18px 36px",
                                  fontSize: "14px",
                                  color : "whitesmoke"
                              }} variant="contained" type="button" onClick={()=>{
                                executeLogin()
                              }}>Submit</Button>
                </Grid>
              </Grid>

      </Grid>
    </Container>

   
  );
}