import { Typography, Box, TextField, Button, Checkbox } from '@mui/material'
import React from 'react'
import logo from "../../assets/images/logo.jpg";


const Login = () => {



         return (
          <div className="flex justify-center items-center min-h-screen p-4">
          <div className="w-full max-w-md md:w-1/2 lg:w-full flex flex-col items-center">
            <img className="w-24 mb-4" src={logo} alt="Company Logo" />
            <Typography variant="h4" className="mb-4 text-center">Login Page</Typography>
    
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
              noValidate
              autoComplete="off"
              // onSubmit={handleSubmit}
            >
          <TextField fullWidth label="Email Address" variant="outlined" />
          <TextField fullWidth label="Password" type="password" variant="outlined" />
          <div className="flex items-center justify-between w-full">
  <label className="flex items-center gap-2">
    <Checkbox id="rememberMe" defaultChecked />
    <span>Remember Me</span>
  </label>
  <a href="/forgot-password" className="text-blue-500 hover:underline">
    Forgot Password?
  </a>
</div>



          <Button variant="contained" color="primary" fullWidth>
            login
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Login;