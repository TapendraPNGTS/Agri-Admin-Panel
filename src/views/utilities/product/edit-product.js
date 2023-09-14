import React, { useState , useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
function App() {
  const params = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [proImage, setProImage] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [active, setActive] = React.useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getProductById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      productId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getProductById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTitle(result.data.Name);
        setActive(result.data.IsActive);
        setPrice(result.data.Price);
        setProImage(result.data.Images);
        setQuantity(result.data.Quantity);
      })
      .catch((error) => console.log("error", error));
  }
  React.useEffect(() => {
    getProductById();
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
    formdata.append("productId", params.id);
    formdata.append("name", title);
    formdata.append("active", active);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    formdata.append("categoryId", category);
    formdata.append("img", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}updateProduct`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/product");
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
    <MainCard title="Edit Product">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Product Name</InputLabel>
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
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Product Price</InputLabel>
              <TextField
                fullWidth
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Price"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Product Quantity</InputLabel>
              <TextField
                fullWidth
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter Quantity"
              />
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
        </Grid>
        <br/>
        <br/>
        <Grid container spacing={gridSpacing}>
          {proImage.map((primg, index) => {
            <Grid item xs={4} md={4} key={index}>
              <InputLabel required>Product Image</InputLabel>
              <Stack>
                <a
                  href={`${process.env.REACT_APP_IMAGE_URL}${primg}`}
                  target="_blank"
                >
                  <img
                    src={`${process.env.REACT_APP_IMAGE_URL}${primg}`}
                    width={200}
                    height={200}
                  />
                </a>
              </Stack>
            </Grid>;
          })}
        </Grid>
        <br></br>
        <center>
          {isLoading ? (
            <Spinner animation="grow" />
          ) : (
            <Button variant="contained" type="submit">
              Update Product
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
