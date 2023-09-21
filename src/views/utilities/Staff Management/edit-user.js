import React, { useState, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Grid,
  Stack,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
function App() {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState();
  const [password, setPassword] = useState("");
  const [data, setData] = React.useState([]);
  const [rows, setRows] = React.useState([]);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getAllRole() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getAllRole`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
      })
      .catch((error) => console.log("error", error));
  }

  function getStaffById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      staffId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getStaffById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setName(result.data.UserName);
        setRole(result.data.Type);
        setEmail(result.data.Email);
        setPhone(result.data.Contact);
        setPassword(result.data.Password);
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    getStaffById();
    getAllRole();
  }, []);

  function updateStaff(e) {
    e.preventDefault();
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      staffId: params.id,
      roleId: role,
      password: password,
      userName: name,
      email: email,
      phone: phone,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}updateStaff`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        navigate("/staff-users");
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <MainCard title="Edit User">
      <form onSubmit={updateStaff} action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Name</InputLabel>
              <TextField
                fullWidth
                id="title"
                name="title"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Choose Role</InputLabel>
              <Select
                id="role"
                name="role"
                defaultValue={role}
                key={role}
                onChange={(e) => setRole(e.target.value)}
              >
                {rows.map((row, index) => (
                  <MenuItem value={row.RoleID} key={index}>
                    {row.Name}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Email</InputLabel>
              <TextField
                type="email"
                fullWidth
                id="Email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Phone</InputLabel>
              <TextField
                type="number"
                fullWidth
                id="Phone"
                name="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Password</InputLabel>
              <TextField
                type="password"
                fullWidth
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Stack>
          </Grid>
        </Grid>
        <br />
        <Button variant="contained" type="submit">
          Update User
        </Button>
      </form>
    </MainCard>
  );
}

export default App;
