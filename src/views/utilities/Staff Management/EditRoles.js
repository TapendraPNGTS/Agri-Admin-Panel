import React from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Grid, MenuItem, Select, Stack } from "@mui/material";

function App() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [active, setActive] = React.useState(true);
  React.useEffect(() => {}, []);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("token", localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function handleSubmit(event) {
    event.preventDefault();
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      name: name,
      active: active,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}updateRole`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/role");
          toast.success("Added Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          if (result.code === 201) {
            navigate("/role");
            toast.danger("User already exits", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          } else {
          }
        }
      })
      .catch((error) => {});
  }
  return (
    <MainCard title="Update Role">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={4}>
            <Stack>
              <InputLabel required>Enter a Unique Role</InputLabel>
              <TextField
                fullWidth
                id="title"
                name="title"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Role"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <InputLabel required>Active</InputLabel>
              <Select
                id="active"
                name="active"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              >
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </Stack>
          </Grid>
        </Grid>
        <br />
        {/* <center> */}
        <Button variant="contained" type="submit">
          Add Roles
        </Button>
        {/* </center> */}
      </form>
    </MainCard>
  );
}

export default App;
