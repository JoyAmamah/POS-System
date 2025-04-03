import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
  Typography,
  TextField,
  Pagination,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Password } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "400px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const User = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [value, setValue] = useState({
    sNumber: "",
    name: "",
    userName: "",
    phone: "",
    email: "",
    password: "",
    role: "",
    store: "",
    action: "",
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
    setValue({
      sNumber: "",
      name: "",
      userName: "",
      phone: "",
      email: "",
      password: "",
      role: "",
      store: "",
      action: "",
    });
  };

  const handleEditOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleAdd = async () => {
    try {
      let res;
      if (selectedUser) {
        res = await axios.patch(
          `http://192.168.0.136:8001/api/v1/vendors/${selectedUser.id}`,
          { ...value, vendor_id: selectedUser?.id }
        );
      } else {
        res = await axios.post(
          "http://192.168.0.136:8001/api/v1/vendors",
          value
        );
      }

      console.log(res.data);

      setOpen(false);
      fetchUser();
    } catch (error) {
      console.error("Something went wrong. Please try again.", error);
    }
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://192.168.0.136:8001/api/v1/vendors");
      setUser(res.data.data);
    } catch (error) {
      console.error("Something went wrong. Please try again.", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      setValue({
        sNumber: selectedUser?.sNumber,
        name: selectedUser?.name,
        userName: selectedUser?.userName,
        phone: selectedUser?.phone,
        email: selectedUser?.email,
        role: selectedUser?.role,
        password: selectedUser?.password,
        store: selectedUser?.store,
        action: selectedUser?.action,
      });
    }
  }, [selectedUser]);

  return (
    <div className="p-4 flex flex-col h-full">
      <h1 className="text-lg sm:text-xl font-bold">User Information</h1>

      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <div className="flex flex-row gap-48 w-full">
          <TextField
            label="Search"
            type="search"
            variant="outlined"
            className="w-full rounded-lg shadow-md"
          />
          <Button onClick={handleOpen} variant="contained" color="primary">
            Add User
          </Button>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" className="mb-4">
            {selectedUser ? "Edit User" : "Create User Account"}
          </Typography>
          <div className="flex flex-col space-y-4">
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              required
              value={value.userName || ""}
              onChange={(e) => setValue({ ...value, userName: e.target.value })}
            />
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              required
              value={value.address || ""}
              onChange={(e) => setValue({ ...value, userName: e.target.value })}
            />
            <TextField
              fullWidth
              label="Role"
              variant="outlined"
              value={value.role || ""}
              onChange={(e) => setValue({ ...value, role: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              required
              value={value.email || ""}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={value.phone || ""}
              onChange={(e) => setValue({ ...value, phone: e.target.value })}
              required
            />
            <FormControl fullWidth>
              <InputLabel>Store</InputLabel>
              <Select
                value={value.store || ""} 
                onChange={(e) => setValue({ ...value, store: e.target.value })}
              >
                <MenuItem value="open">Open</MenuItem>
                <MenuItem value="close">Close</MenuItem>
              </Select>
            </FormControl>
            ;
            <div className="flex justify-end gap-4">
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
                Dismiss
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAdd}
                disabled={
                  !value.name ||
                  !value.userName ||
                  !value.email ||
                  !value.password
                }
              >
                {selectedUser ? "Save Changes" : "Submit"}
              </Button>
            </div>
          </div>
        </Box>
      </Modal>

      <TableContainer
        component={Paper}
        className="w-full max-h-100vh overflow-hidden"
      >
        <Table className="min-w-full">
          <TableHead>
            <TableRow>
              {["Name", "Manager", "Email", "Role", "Store", "Action"].map(
                (head) => (
                  <TableCell
                    key={head}
                    className="font-bold text-sm break-words"
                  >
                    {head}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {user?.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.manager}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.store}</TableCell>
                <TableCell>{user.action}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditOpen(user)}
                    >
                      Edit
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="w-full flex justify-center mt-auto bg-white shadow-md p-4 rounded-lg">
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
};

export default User;
