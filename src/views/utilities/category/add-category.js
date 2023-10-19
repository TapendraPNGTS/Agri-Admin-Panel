import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  CircularProgress
} from "@mui/material";

import { toast } from "react-hot-toast";
import CategoryApi from "../../../api/category.api";

function App() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [name, setName] = React.useState("");
  const [active, setActive] = React.useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const categoryApi = new CategoryApi();

  React.useEffect(() => {}, []);

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFileName(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("active", active);
    formdata.append("img", file);
    const addBannerResponse = await categoryApi.addCategory(formdata);
    if (addBannerResponse && addBannerResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/category", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  return (
    <MainCard title="Add Category">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Category Title</InputLabel>
              <TextField
                fullWidth
                inputProps={{ maxLength: 30 }}
                id="category"
                name="category"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              <InputLabel>Choose ThumbnailImage</InputLabel>
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
              Add Category
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
