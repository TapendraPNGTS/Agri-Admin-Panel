import React, { useState, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  CircularProgress,
} from "@mui/material";
function App() {
  const navigate = useNavigate();
  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState([]);
  const [file1, setFile1] = useState();
  const [fileName1, setFileName1] = useState();
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [active, setActive] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  React.useEffect(() => {}, []);

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFileName(event.target.value);
  }
  function handleChange1(event) {
    setFile1(event.target.files[0]);
    setFileName1(event.target.value);
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
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);
    formdata.append("categoryId", category);
    formdata.append("quantity", quantity);
    formdata.append("active", active);
    formdata.append("img", file);
    formdata.append("images", file1);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}addProduct`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/product");
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

  function getAllCategory() {
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getAllCategory`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <MainCard title="Add Product">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Product Name</InputLabel>
              <TextField
                fullWidth
                id="product"
                inputProps={{ maxLength: 30 }}
                name="product"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter product name"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Product Price</InputLabel>
              <TextField
                fullWidth
                id="price"
                name="price"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter product price"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Quantity</InputLabel>
              <TextField
                fullWidth
                id="quantity"
                name="quantity"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 3);
                }}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
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
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Choose Category</InputLabel>
              <Select
                id="active"
                name="active"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {rows.map((row, i) => {
                  return (
                    <MenuItem key={i} value={row.CategoryID}>
                      {row.Name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Description</InputLabel>
              <TextField
                fullWidth
                id="discription"
                name="discription"
                inputProps={{ maxLength: 250 }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add Description"
              />
            </Stack>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel>Choose Thumbnail Image</InputLabel>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="thumbnail"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                  value={fileName}
                  required
                />
                <label class="custom-file-label" for="thumbnail">
                  {fileName}
                </label>
              </div>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel>Choose Multiple Image</InputLabel>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="thumbnail"
                  multiple
                  accept="image/png, image/jpeg"
                  onChange={handleChange1}
                  value={fileName1}
                  required
                />
                <label class="custom-file-label" for="thumbnail">
                  {fileName1}
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
              Add Product
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
