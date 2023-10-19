import React, { useState, useCallback } from "react";
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
  TextField,
  CircularProgress
} from "@mui/material";
import { toast } from "react-hot-toast";
import CategoryApi from "../../../api/category.api";

function App() {
  const params = useParams();
  const categoryApi = new CategoryApi();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [title, setTitle] = React.useState("");
  const [cateImage, setCateImage] = React.useState("");
  const [active, setActive] = React.useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFileName(event.target.value);
  }

  const getCategoryById = useCallback(async () => {
    try {
      const getCategoryByIdResponse = await categoryApi.getCategoryById({
        categoryId: params.id,
      });
      if (getCategoryByIdResponse && getCategoryByIdResponse?.data?.code === 200) {
        setTitle(getCategoryByIdResponse.data.data.Name);
        setActive(getCategoryByIdResponse.data.data.IsActive);
        setCateImage(getCategoryByIdResponse.data.data.Image);
      } else {
        return toast.error(`Something went wrong!`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  React.useEffect(() => {
    getCategoryById();
  }, []);

  async function handleSubmit(event) {
    setIsLoading(true)
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("adminId", localStorage.getItem("userId"));
    formdata.append("categoryId", params.id);
    formdata.append("name", title);
    formdata.append("active", active);
    formdata.append("img", file);
    const editCategoryResponse = await categoryApi.editCategory(formdata);
    if (editCategoryResponse && editCategoryResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/category", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
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
                href={cateImage}
                target="_blank"
              >
                <img
                  src={cateImage}
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
