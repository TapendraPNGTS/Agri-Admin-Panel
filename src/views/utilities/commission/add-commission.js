import React, { useState, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import CommissiomApi from "../../../api/commission.api";
import {
  Button,
  Grid,
  Stack,
  MenuItem,
  Select,
  TextField,
  CircularProgress,
} from "@mui/material";

function App() {
  const navigate = useNavigate();
  const commissionApi = new CommissiomApi();
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const addServiceRequestResponse = await commissionApi.addCommissiom({
      commission: amount,
      name: name,
    });
    if (
      addServiceRequestResponse &&
      addServiceRequestResponse?.data?.code === 200
    ) {
      toast.success(`Added successsfully`);
      navigate("/commission", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  return (
    <MainCard title="Add Commission">
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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
              Add Commissiom
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
