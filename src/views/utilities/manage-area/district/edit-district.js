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
  const [rows, setRows] = React.useState([]);
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = React.useState("");

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getDistrictById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      districtId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getDistrictById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setName(result.data.Name);
      })
      .catch((error) => console.log("error", error));
  }

  function getAllState() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getAllState`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
      })
      .catch((error) => console.log("error", error));
  }

  React.useEffect(() => {
    getDistrictById();
    getAllState();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      name: name,
      stateId: state,
      districtId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}editDistrict`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/district");
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
    <MainCard title="Edit District">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
        <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Choose State</InputLabel>
              <Select
                id="active"
                name="active"
                value={state}
                key={state}
                onChange={(e) => setState(e.target.value)}
              >
                {rows.map((row, i) => {
                  return (
                    <MenuItem key={i} value={row.StateID}>
                      {row.Name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>District Name</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                inputProps={{ maxLength: 30 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter District Name"
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
              Update District
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
