import React, { useEffect, useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import UserApi from "apis/user.api";

import {
  Button,
  Grid,
  Stack,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";

function AddUser() {
  const navigate = useNavigate();
  const params = useParams();

  const userApi = new UserApi();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [type, setType] = React.useState("");
  const [number, setNumber] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const editUserResponse = await userApi.editUser({
      userId: params.id,
      name,
      email,
      type,
      number,
    });
    if (editUserResponse && editUserResponse?.data?.code === 200) {
      toast.success(`Updated successsfully`);
      navigate("/user", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }
  const getUserById = useCallback(async () => {
    try {
      const getUserByIdResponse = await userApi.getUserById({
        userId: params.id,
      });
      if (getUserByIdResponse && getUserByIdResponse?.data?.code === 200) {
        setName(getUserByIdResponse.data.data.name);
        setEmail(getUserByIdResponse.data.data.email);
        setNumber(getUserByIdResponse.data.data.number);
        setType(getUserByIdResponse.data.data.type);
      } else {
        return toast.error(`Something went wrong!`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <MainCard>
      <form onSubmit={handleSubmit} action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Name</InputLabel>
              <TextField
                fullWidth
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Email</InputLabel>
              <TextField
                fullWidth
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Number</InputLabel>
              <TextField
                fullWidth
                id="number"
                name="number"
                type="number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Type</InputLabel>
              <Select
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value={0} disabled>
                  Select Type
                </MenuItem>
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"Volunteer"}>Volunteer</MenuItem>
              </Select>
            </Stack>
          </Grid>

          <br />
        </Grid>
        <br />
        <center>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </center>
      </form>
    </MainCard>
  );
}

export default AddUser;
