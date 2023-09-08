import React, { useEffect, useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import MapApi from "apis/maps.api";

import { Button, Grid, Stack, TextField } from "@mui/material";

function UpdateMap() {
  const navigate = useNavigate();
  const params = useParams();

  const mapsApi = new MapApi();
  const [image, setImage] = React.useState("");
  const [file, setFile] = React.useState("");

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("image", file);

    const mapsResponse = await mapsApi.UpdateMap(formdata);
    if (mapsResponse && mapsResponse?.data?.code === 200) {
      toast.success(`Updated successsfully`);
      navigate("/maps", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  return (
    <MainCard>
      <form onSubmit={handleSubmit} action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Image</InputLabel>
              <TextField
                fullWidth
                id="file"
                type="file"
                name="file"
                onChange={(e) => {
                  setImage(e.target.value);
                  handleChange(e);
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

export default UpdateMap;
