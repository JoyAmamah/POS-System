import { Box, TextField, Typography, Button } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.jpg";

const Setup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md md:w-1/2 lg:w-full flex flex-col items-center">
        <img className="w-24 mb-2" src={logo} alt="Company Logo" />
        <Typography variant="h4" className="mb-4 text-center">Company Setup</Typography>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
          noValidate
          autoComplete="off"
          // onSubmit={handleSubmit}
        >
          <TextField fullWidth label="Company Name" variant="outlined" />
          <TextField fullWidth label="Phone Number" variant="outlined" />
          <TextField fullWidth label="Email Address" variant="outlined" />
          <TextField fullWidth label="Password" type="password" variant="outlined" />
          <TextField fullWidth label="" type="file" variant="outlined" />

          <Button variant="contained" color="primary" fullWidth>
            SUBMIT AND CONTINUE
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Setup;
