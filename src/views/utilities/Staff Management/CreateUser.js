import React, { useState, useEffect, useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  Stack,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import RoleApi from "../../../api/role.api";
import { updateAllRole } from "../../../redux/redux-slice/role.slice";

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = React.useState([]);

  const dispatch = useDispatch();
  const roleApi = new RoleApi();
  const rows = useSelector((state) => state.role.Role);

  const getAllRole = useCallback(async () => {
    try {
      const role = await roleApi.getAllRole();
      if (!role || !role.data.data) {
        return toast.error("no latest banners available");
      } else {
        dispatch(updateAllRole(role.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getAllRole();
  }, []);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append(
    "Authorization",
    "Bearer " + localStorage.getItem("token")
  );
  myHeaders.append("Content-Type", "application/json");

  function addStaff(e) {
    e.preventDefault();
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
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
    fetch(`${process.env.REACT_APP_API_URL}addStaff`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        navigate("/staff-users")
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  }

  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const phoneValidation = () => {
    const regex =  /^[6-9]\d{9}$/;
    return !(!phone || regex.test(phone) === false);
  };

  const phoneValid = () => {
    const isPhoneValid = phoneValidation();
    setIsValid(isPhoneValid);
    setMessage(isPhoneValid ? <></> : "Phone Number not valid!" );
  } 

  const emailValidation = () => {
    const regexEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i;
    return !(!email || regexEmail.test(email) === false);
  };

  const emailValid = () => {
    const isEmailValid = emailValidation();
    setIsEmailValid(isEmailValid);
    setEmailMessage(isEmailValid ? <></> : "Email not valid!" );
  } 

  return (
    <MainCard title="Add User">
      <form onSubmit={addStaff} action="#">
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
                defaultValue="Sales Manager"
                onChange={(e) => setRole(e.target.value)}
              >
                {rows.map((row, index) => (
                  <MenuItem value={row.roleId} key={index}>
                    {row.name}
                  </MenuItem>
                 ))}
              </Select>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Email</InputLabel>
              <TextField
                fullWidth
                id="Email"
                name="Email"
                type="email"
                onBlur={emailValid}
                inputProps={{ maxLength: 40 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
              <p style={{color:'red'}}>{emailMessage}</p>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Phone</InputLabel>
              <TextField
                fullWidth
                id="Phone"
                name="Phone"
                type="number"
                onBlur={phoneValid}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 10);
                }}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
              />
              <p style={{color:'red'}}>{message}</p>
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
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Stack>
          </Grid>
        </Grid>
        <br/>
        <Button variant="contained" type="submit">
          Add User
        </Button>
      </form>
    </MainCard>
  );
}

export default App;
