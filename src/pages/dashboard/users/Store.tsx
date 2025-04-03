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

const Store = () => {
  const [open, setOpen] = useState(false);
  const [store, setStore] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [value, setValue] = useState({
    name: "",
    address: "",
    manager: "",
    email: "",
    phone: "",
    status: "",
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setSelectedStore(null);
    setValue({
      name: "",
      address: "",
      manager: "",
      email: "",
      phone: "",
      status: "",
    });
  };

  const handleEditOpen = (store) => {
    setSelectedStore(store);
    setOpen(true);
  };

  const handleAdd = async () => {
    try {
      let res;
      if (selectedStore) {
        res = await axios.patch(
          `http://192.168.0.136:8001/api/v1/vendors/${selectedStore.id}`,
          { ...value, vendor_id: selectedStore?.id }
        );
      } else {
        res = await axios.post(
          "http://192.168.0.136:8001/api/v1/vendors",
          value
        );
      }

      console.log(res.data);

      setOpen(false);
      fetchStore();
    } catch (error) {
      console.error("Something went wrong. Please try again.", error);
    }
  };

  const fetchStore = async () => {
    try {
      const res = await axios.get("http://192.168.0.136:8001/api/v1/vendors");
      setStore(res.data.data);
    } catch (error) {
      console.error("Something went wrong. Please try again.", error);
    }
  };

  useEffect(() => {
    fetchStore();
  }, []);

  useEffect(() => {
    if (selectedStore) {
      setValue({
        name: selectedStore?.name,
        email: selectedStore?.email,
        manager: selectedStore?.manager,
        phone: selectedStore?.phone,
        address: selectedStore?.address,
        status: selectedStore?.status,
      });
    }
  }, [selectedStore]);

  const handleDelete = async (storeId) => {
    try {
      await axios.delete(`http://192.168.0.136:8001/api/v1/vendors/${storeId}`);
      fetchStore();
    } catch (error) {
      console.error("Failed to delete store.", error);
      alert("Failed to delete store.");
    }
  };

  return (
    <div className="p-4 flex flex-col h-full">
      <h1 className="text-lg sm:text-xl font-bold">STORES</h1>

      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <div className="flex flex-row gap-48 w-full">
          <TextField
            label="Search"
            type="search"
            variant="outlined"
            className="w-full rounded-lg shadow-md"
          />
          <Button onClick={handleOpen} variant="contained" color="primary">
            Add Store
          </Button>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" className="mb-4">
            {selectedStore ? "Edit Store" : "Add New Store"}
          </Typography>
          <div className="flex flex-col space-y-4">
            <TextField
              fullWidth
              label="Store Name"
              variant="outlined"
              value={value.name || ""}
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              required
              value={value.address || ""}
              onChange={(e) => setValue({ ...value, address: e.target.value })}
            />
            <TextField
              fullWidth
              label="Manager Name"
              variant="outlined"
              value={value.manager || ""}
              onChange={(e) => setValue({ ...value, manager: e.target.value })}
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
              <InputLabel>Status</InputLabel>
              <Select
                value={value.status || ""}
                onChange={(e) => setValue({ ...value, status: e.target.value })}
              >
                <MenuItem value="open">Open</MenuItem>
                <MenuItem value="close">Close</MenuItem>
              </Select>
            </FormControl>

            <div className="flex justify-end gap-4">
              <Button variant="outlined" color="secondary" onClick={handleClose}>
                Dismiss
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAdd}
                disabled={!value.name || !value.address || !value.email || !value.phone}
              >
                {selectedStore ? "Save Changes" : "Submit"}
              </Button>
            </div>
          </div>
        </Box>
      </Modal>

      <TableContainer component={Paper} className="w-full max-h-100vh overflow-hidden">
        <Table className="min-w-full">
          <TableHead>
            <TableRow>
              {["Name", "Address", "Manager", "Email", "Phone", "Action"].map((head) => (
                <TableCell key={head} className="font-bold text-sm break-words">
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {store?.map((store, index) => (
              <TableRow key={index}>
                <TableCell>{store.name}</TableCell>
                <TableCell>{store.address}</TableCell>
                <TableCell>{store.manager}</TableCell>
                <TableCell>{store.email}</TableCell>
                <TableCell>{store.phone}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outlined" color="error" onClick={() => handleDelete(store.id)}>
                      Delete
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => handleEditOpen(store)}>
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

export default Store;



