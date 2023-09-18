import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  CircularProgress,
} from "@mui/material";
function App() {
  const params = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [active, setActive] = React.useState(true);
  const [brImage, setBrImagee] = React.useState(true);
  const [isLoading, setIsLoading] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getBannerById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      bannerId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getBannerById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setActive(result.data.IsActive);
        setBrImagee(result.data.Image);
      })
      .catch((error) => console.log("error", error));
  }
  React.useEffect(() => {
    getBannerById();
  }, []);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    var formdata = new FormData();
    formdata.append("adminId", localStorage.getItem("userId"));
    formdata.append("bannerId", params.id);
    formdata.append("active", active);
    formdata.append("img", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}updateBanner`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/banner");
          toast.success("Updated Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {});
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
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="thumbnail"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                />
                <label class="custom-file-label" for="thumbnail">
                  Choose file
                </label>
              </div>
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <InputLabel required>Banner Image</InputLabel>
            <Stack>
              <a
                href={`${process.env.REACT_APP_IMAGE_URL}${brImage}`}
                target="_blank"
              >
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}${brImage}`}
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
