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
  const [commission, setCommission] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getCommissionById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      commissionId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getCommissionById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setName(result.data.Name);
        setCommission(result.data.Commission);
      })
      .catch((error) => console.log("error", error));
  }

  React.useEffect(() => {
    getCommissionById();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      commission: commission,
      name: name,
      commissionId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}updateCommission`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/commission");
          toast.success("Added Successfully", {
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
    <MainCard title="Add District">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Role</InputLabel>
              <Select
                id="active"
                name="active"
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                <MenuItem value="State">State</MenuItem>
                <MenuItem value="District">District</MenuItem>
                <MenuItem value="Block">Block</MenuItem>
                <MenuItem value="Cluster">Cluster</MenuItem>
                <MenuItem value="Village">Village</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Commissiom (in%)</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="number"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                placeholder="Enter State Name"
              />
            </Stack>
          </Grid>
        </Grid>
        <br />
        <br />
        <center>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" type="submit">
              Update Commissiom
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
