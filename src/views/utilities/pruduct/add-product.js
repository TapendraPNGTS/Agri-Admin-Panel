import React, { useState, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import BoothApi from "apis/product.api";

import { Button, Grid, Stack, TextField } from "@mui/material";
function AddBooth() {
  const navigate = useNavigate();
  const boothApi = new BoothApi();
  const [boothNumber, setBoothNumber] = React.useState(0);
  const [title, setTitle] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const addBoothResponse = await boothApi.addBooth({
      boothNumber: boothNumber,
      title: title,
    });
    if (addBoothResponse && addBoothResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/booth", { replace: true });
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
              <InputLabel required>Booth Number</InputLabel>
              <TextField
                fullWidth
                id="boothNumber"
                name="boothNumber"
                type="number"
                value={boothNumber}
                onChange={(e) => {
                  setBoothNumber(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Booth Title</InputLabel>
              <TextField
                fullWidth
                id="boothTitle"
                name="boothTitle"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
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

export default AddBooth;
