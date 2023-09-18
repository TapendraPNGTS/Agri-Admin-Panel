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
  const [district, setDistrict] = React.useState("");
  const [zipId, setZipId] = React.useState("");

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getZipById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      zipId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getZipById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setName(result.data.Code);
        setZipId(result.data.ZipID);
      })
      .catch((error) => console.log("error", error));
  }

  function getAllDistrict() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getAllDistrict`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
      })
      .catch((error) => console.log("error", error));
  }

  React.useEffect(() => {
    getAllDistrict();
    getZipById();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      code: name,
      districtId: district,
      zipId: zipId
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}editZip`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/pin-code");
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
    <MainCard title="Edit Pin Code">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
        <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Choose District</InputLabel>
              <Select
                id="active"
                name="active"
                value={district}
                key={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                {rows.map((row, i) => {
                  return (
                    <MenuItem key={i} value={row.DistrictID}>
                      {row.Name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Pin Code</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type='number'
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Pin Code"
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
              Update Pin Code
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
