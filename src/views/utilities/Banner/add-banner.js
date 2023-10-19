import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Grid, Stack, CircularProgress } from "@mui/material";
import BannerApi from "../../../api/banner.api";
import { getUserLocal } from "utils/localStorage.util";

function App() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const bannerApi = new BannerApi();

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFileName(event.target.value);
  }

  const userId = getUserLocal();

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("img", file);
    formdata.append("adminId", userId.StaffID);
    const addBannerResponse = await bannerApi.addBanner(formdata);
    if (addBannerResponse && addBannerResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/banner", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  return (
    <MainCard title="Add Banner">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel>Choose Multiple Image</InputLabel>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="thumbnail"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                  value={fileName}
                  required
                />
                <label className="custom-file-label" for="thumbnail">
                  {fileName}
                </label>
              </div>
            </Stack>
          </Grid>
        </Grid>
        <br></br>
        <center>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" type="submit">
              Add Banner
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
