import React, { useState , useEffect, useCallback} from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAllCategory } from "../../../redux/redux-slice/category.slice";
import { toast } from "react-hot-toast";
import CategoryApi from "../../../api/category.api";//
import SubCategoryApi from "../../../api/sub-category.api";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  CircularProgress
} from "@mui/material";
import { Category } from "@mui/icons-material";

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const subcategoryApi = new SubCategoryApi();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [name, setName] = React.useState("");
  const [active, setActive] = React.useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");


  const categoryApi = new CategoryApi();
  const rows = useSelector((state) => state.category.Category);

  const getAllCategory = useCallback(async () => {
    try {
      const categories = await categoryApi.getAllCategory();
      if (!categories || !categories.data.data) {
        return toast.error("no available");
      } else {
        dispatch(updateAllCategory(categories.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getAllCategory();
  }, []);


  // React.useEffect(() => {}, []);

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFileName(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("active", active);
    formdata.append("img", file);
    formdata.append("categoryId", category);
    const addBannerResponse = await subcategoryApi.addSubCategory(formdata);
    if (addBannerResponse && addBannerResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/sub-category", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }


  return (
    <MainCard title="Add Sub Category">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Title</InputLabel>
              <TextField
                fullWidth
                inputProps={{ maxLength: 60}}
                id="subcategory"
                name="subcategory"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter subcategory title"
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
        {/* {console.log("===============",category} */}
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Choose Category</InputLabel>
              <Select
                id="active"
                name="active"
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
                defaultValue='Select'
                displayEmpty
                renderValue={category !== "" ? undefined : () => "--Select Category--"}
              >
                {rows.map((row, i) => {
                  return (
                    <MenuItem key={i} value={row.CategoryID} >
                      {row.Name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Stack>
          </Grid>
        </Grid>
        <br></br>
        <center>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" type="submit">
              Add Sub Category
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
