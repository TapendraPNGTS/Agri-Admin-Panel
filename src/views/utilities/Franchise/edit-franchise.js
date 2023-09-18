import React, { useState, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  CircularProgress,
} from "@mui/material";
function App() {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [pinCode, setPinCode] = React.useState("");
  const [active, setActive] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getFrenciseById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      frenchiseId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getFrenciseById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setName(result.data.Name);
        setEmail(result.data.Email);
        setNumber(result.data.Contact);
        setAddress(result.data.Address);
        setCity(result.data.City);
        setState(result.data.State);
        setPinCode(result.data.PinCode);
        setActive(result.data.Status);
      })
      .catch((error) => console.log("error", error));
  }

  React.useEffect(() => {
    getFrenciseById();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      status: name,
      frenchiseId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}frenciseCheck`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/franchise-request");
          toast.success("Updated Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {});
  }

  return (
    <MainCard title="Edit Franchise">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Name</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                inputProps={{ maxLength: 30 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter State Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Email</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Contact</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="number"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 10);
                }}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter email address"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Address</InputLabel>
              <TextField
                fullWidth
                id="address"
                name="address"
                inputProps={{ maxLength: 30 }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>City</InputLabel>
              <TextField
                fullWidth
                id="address"
                name="address"
                inputProps={{ maxLength: 30 }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter address"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>State</InputLabel>
              <TextField
                fullWidth
                id="address"
                name="address"
                inputProps={{ maxLength: 30 }}
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter address"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Pin Code</InputLabel>
              <TextField
                fullWidth
                id="address"
                name="address"
                inputProps={{ maxLength: 30 }}
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="Enter address"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Active</InputLabel>
              <Select
                id="active"
                name="active"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              >
                <MenuItem value="Accept">Accept</MenuItem>
                <MenuItem value="Reject">Reject</MenuItem>
              </Select>
            </Stack>
          </Grid>
        </Grid>
        <br />
        <br />
        <center>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {/* <Button variant="contained" type="submit"> */}
              Update Franchise
              {/* </Button> */}
            </>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
