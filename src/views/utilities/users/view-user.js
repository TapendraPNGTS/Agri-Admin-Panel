import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { Button, Grid, MenuItem, Select, Stack ,TextField } from "@mui/material";

function App() {
  const params = useParams();
  const navigate = useNavigate();
  const [active, setActive] = React.useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getBannerById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      userId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getUserById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setActive(result.data.IsActive);
        setName(result.data.Name);
        setEmail(result.data.Email);
        setContact(result.data.Contact);
        setCity(result.data.City);
        setState(result.data.State);
      })
      .catch((error) => console.log("error", error));
  }
  React.useEffect(() => {
    getBannerById();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      userId: params.id,
      Isactive: active,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}userActive`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/users");
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
    <MainCard title="Edit User">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
        <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Name</InputLabel>
              <TextField
                fullWidth
                id="name"
                name="name"
                inputProps={{ maxLength: 250 }}
                rows={3}
                disabled
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Stack>
          </Grid>
        <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Email</InputLabel>
              <TextField
                fullWidth
                id="email"
                name="email"
                inputProps={{ maxLength: 250 }}
                rows={3}
                disabled
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Stack>
          </Grid>
        <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Contact</InputLabel>
              <TextField
                fullWidth
                id="contact"
                name="contact"
                inputProps={{ maxLength: 250 }}
                rows={3}
                disabled
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Stack>
          </Grid>
        <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>City</InputLabel>
              <TextField
                fullWidth
                id="city"
                name="city"
                inputProps={{ maxLength: 250 }}
                rows={3}
                disabled
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Stack>
          </Grid>
        <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>State</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                inputProps={{ maxLength: 250 }}
                rows={3}
                disabled
                value={state}
                onChange={(e) => setState(e.target.value)}
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
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Block">Block</MenuItem>
              </Select>
            </Stack>
          </Grid>
        </Grid>
        <br></br>
        <center>
          {isLoading ? (
            <Spinner animation="grow" />
          ) : (
            <Button variant="contained" type="submit">
              Update User
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
