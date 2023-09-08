import React, { useEffect, useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import BoothApi from "apis/product.api";

import { Button, Grid, Stack, TextField } from "@mui/material";

function AddBooth() {
  const navigate = useNavigate();
  const params = useParams();

  const boothApi = new BoothApi();
  const [title, setTitle] = React.useState("");
  const [boothNumber, setBoothNumber] = React.useState(0);
  const [BLO, setBLO] = React.useState("");
  const [DEO, setDEO] = React.useState("");
  const [ERO, setERO] = React.useState("");
  const [image, setImage] = React.useState("");
  const [file, setFile] = React.useState("");

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("boothId", params.id);
    formdata.append("boothNumber", boothNumber);
    formdata.append("title", title);
    formdata.append("BLO", BLO);
    formdata.append("DEO", DEO);
    formdata.append("ERO", ERO);
    formdata.append("pdf", file);

    const editBoothResponse = await boothApi.editBooth(formdata);
    if (editBoothResponse && editBoothResponse?.data?.code === 200) {
      toast.success(`Updated successsfully`);
      navigate("/booth", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }
  const getBoothById = useCallback(async () => {
    try {
      const getBoothByIdResponse = await boothApi.getBoothById({
        boothId: params.id,
      });
      if (getBoothByIdResponse && getBoothByIdResponse?.data?.code === 200) {
        setBoothNumber(getBoothByIdResponse.data.data.boothNumber);
        setTitle(getBoothByIdResponse.data.data.title);
        setBLO(getBoothByIdResponse.data.data.BLO);
        setDEO(getBoothByIdResponse.data.data.DEO);
        setERO(getBoothByIdResponse.data.data.ERO);
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
    getBoothById();
  }, []);

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

          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>BLO</InputLabel>
              <TextField
                fullWidth
                id="blo"
                name="blo"
                value={BLO}
                onChange={(e) => {
                  setBLO(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>DEO</InputLabel>
              <TextField
                fullWidth
                id="deo"
                name="deo"
                value={DEO}
                onChange={(e) => {
                  setDEO(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>ERO</InputLabel>
              <TextField
                fullWidth
                id="ero"
                name="ero"
                value={ERO}
                onChange={(e) => {
                  setERO(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
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

export default AddBooth;
