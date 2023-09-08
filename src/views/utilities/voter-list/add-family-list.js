import React from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import FamilyApi from "apis/family-list.api";
import {
  Button,
  Grid,
  Stack,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";

function AddFamily() {
  const navigate = useNavigate();
  const familyApi = new FamilyApi();
  const [wardNumber, setWardNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [caste, setCaste] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const addFamilyResponse = await familyApi.addFamily({
      wardNumber,
      address,
      caste,
    });
    if (addFamilyResponse && addFamilyResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/family-list", { replace: true });
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
              <InputLabel required>Ward Number</InputLabel>
              <TextField
                fullWidth
                id="wardNumber"
                name="wardNumber"
                value={wardNumber}
                onChange={(e) => {
                  setWardNumber(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Caste</InputLabel>
              <TextField
                fullWidth
                id="caste"
                name="caste"
                value={caste}
                onChange={(e) => {
                  setCaste(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Address</InputLabel>
              <TextField
                minRows={4}
                maxRows={4}
                multiline
                fullWidth
                id="address"
                name="address"
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
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

export default AddFamily;
