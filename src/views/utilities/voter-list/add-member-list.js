import React from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import MemberApi from "apis/member-list.api";
import {
  Button,
  Grid,
  Stack,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { useSelector } from "react-redux";

function AddMember() {
  const params = useParams();
  const navigate = useNavigate();
  const memberApi = new MemberApi();
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [fatherName, setFatherName] = React.useState("");
  const [voterId, setVoterId] = React.useState("");
  const [boothId, setBoothId] = React.useState("");
  const booths = useSelector((state) => state.booth.Booth);

  async function handleSubmit(event) {
    event.preventDefault();
    const addMemberResponse = await memberApi.addMember({
      familyId: params.id,
      name,
      gender,
      fatherName,
      voterId,
      boothId,
    });
    if (addMemberResponse && addMemberResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/member-list", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

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
              <InputLabel required>Guardian Name</InputLabel>
              <TextField
                fullWidth
                id="fatherName"
                name="fatherName"
                value={fatherName}
                onChange={(e) => {
                  setFatherName(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Booth ID</InputLabel>
              <Select
                fullWidth
                id="boothId"
                name="boothId"
                value={boothId}
                onChange={(e) => {
                  setBoothId(e.target.value);
                }}
              >
                {booths.map((row) => (
                  <MenuItem value={row.boothId}>{row.title}</MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Voter ID</InputLabel>
              <TextField
                fullWidth
                id="voterId"
                name="voterId"
                value={voterId}
                onChange={(e) => {
                  setVoterId(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Select Gender</InputLabel>
              <Select
                fullWidth
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <MenuItem value={`Male`}>Male</MenuItem>
                <MenuItem value={`Female`}>Female</MenuItem>
                <MenuItem value={`Others`}>Others</MenuItem>
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

export default AddMember;
