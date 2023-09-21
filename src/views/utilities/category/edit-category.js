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
  TextField,
  CircularProgress
} from "@mui/material";
function App() {
  const params = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [title, setTitle] = React.useState("");
  const [cateImage, setCateImage] = React.useState("");
  const [active, setActive] = React.useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState();

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getCategoryById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      categoryId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getCategoryById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTitle(result.data.Name);
        setActive(result.data.IsActive);
        setCateImage(result.data.Image);
      })
      .catch((error) => console.log("error", error));
  }
  React.useEffect(() => {
    getCategoryById();
  }, []);

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFileName(event.target.value);
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
    formdata.append("categoryId", params.id);
    formdata.append("name", title);
    formdata.append("active", active);
    formdata.append("img", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}updateCategory`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/category");
          toast.success("Added Successfully", {
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
    <MainCard title="Edit Category">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Category Name</InputLabel>
              <TextField
                fullWidth
                id="category"
                name="category"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter category title"
              />
            </Stack>
          </Grid>

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
        </Grid>
        <br />
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel>Choose Thumbnail Image</InputLabel>
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
            <InputLabel required>Cover Image</InputLabel>
            <Stack>
              <a
                href={`${process.env.REACT_APP_IMAGE_URL}${cateImage}`}
                target="_blank"
              >
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}${cateImage}`}
                  width={200}
                  height={200}
                />
              </a>
            </Stack>
          </Grid>
        </Grid>
        <br></br>
        <center>
          {isloading ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" type="submit">
              Update Category
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
