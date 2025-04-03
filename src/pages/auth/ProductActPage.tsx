import React from 'react'
import logo from "../../assets/images/logo.jpg";
import { Box, TextField, Button, Typography } from '@mui/material';

const ProductActPage = () => {


    return (
      <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md md:w-1/2 lg:w-full flex flex-col items-center">
        <img className="w-24 mb-4" src={logo} alt="Company Logo" />
        <Typography variant="h4" className="mb-4 text-center">Product Activation</Typography>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
          noValidate
          autoComplete="off"
          // onSubmit={handleSubmit}
        >
              <TextField fullWidth label="Company Name" variant="outlined" />
              <TextField fullWidth label="Activation Code" variant="outlined" />
    
              <Button variant="contained" color="primary" fullWidth>
                ACTIVATE NOW
              </Button>
            </Box>
          </div>
        </div>
      );
    };

export default ProductActPage;