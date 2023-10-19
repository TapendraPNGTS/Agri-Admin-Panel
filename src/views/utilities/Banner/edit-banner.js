import React, { useState, useEffect , useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-hot-toast";
import BannerApi from "../../../api/banner.api";

function App() {
  const params = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [active, setActive] = React.useState(true);
  const [brImage, setBrImagee] = React.useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState();
  const bannerApi = new BannerApi();

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFileName(event.target.value)
  }

  const getBannerById = useCallback(async () => {
    try {
      const getBannerByIdResponse = await bannerApi.getBannerById({
        bannerId: params.id,
      });
      if (getBannerByIdResponse && getBannerByIdResponse?.data?.code === 200) {
        setActive(getBannerByIdResponse.data.data.IsActive);
        setBrImagee(getBannerByIdResponse.data.data.Image);
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
    getBannerById();
  }, []);
  
  async function handleSubmit(event) {
    setIsLoading(true)
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("img", file);
    formdata.append("bannerId", params.id);
    formdata.append("active", active);
    const editBannerResponse = await bannerApi.editBanner(formdata);
    if (editBannerResponse && editBannerResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/banner", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  return (
    <MainCard title="Edit Banner">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Active</InputLabel>
              <Select
                id="active"
                name="active"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              >
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel>Choose ThumbnailImage</InputLabel>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="thumbnail"
                  value={fileName}
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                />
                <label className="custom-file-label" for="thumbnail">
                  {fileName}
                </label>
              </div>
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <InputLabel required>Banner Image</InputLabel>
            <Stack>
              <a
                href={brImage}
                target="_blank"
              >
                <img
                  src={brImage}
                  width={200}
                  height={200}
                />
              </a>
            </Stack>
          </Grid>
        </Grid>
        <br></br>
        <center>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" type="submit">
              Update Banner
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
