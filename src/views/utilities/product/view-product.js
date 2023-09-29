import React, { useState, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
function App() {
  const params = useParams();
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [categoryImage, setCategoryImage] = React.useState("");
  const [categoryName, setCategoryName] = React.useState("");
  const [categoryImg, setCategoryImg] = React.useState("");
  const [proImage, setProImage] = React.useState([]);
  const [franchisePrice, setFranchisePrice] = useState("");
  const [description, setDescription] = useState("");

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
        setName(result.data.Name);
        setDate(result.data.createdAt);
        setStatus(result.data.IsActive);
        setPrice(result.data.Price);
        setQuantity(result.data.Quantity);
        setFranchisePrice(result.data.FrenchisePrice);
        setCategoryImage(result.data.CoverImage);
        setCategoryName(result.data.CategoryID.Name);
        setCategoryImg(result.data.CategoryID.Image);
        setProImage(result.data.Images);
        setDescription(result.data.Description);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getProductById();
  }, []);

  function formatDate(date) {
    return new Date(date).toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <MainCard title="Product Details">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel required>Date</InputLabel>
            <TextField
              id="date"
              name="date"
              value={formatDate(date)}
              disabled
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel required>Caegory Name</InputLabel>
            <TextField
              id="cateName"
              name="cateName"
              value={categoryName}
              disabled
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel required>Name</InputLabel>
            <TextField
              id="username"
              name="username"
              value={name}
              disabled
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel required>Price</InputLabel>
            <TextField
              id="price"
              name="price"
              value={price}
              disabled
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={6} md={6}>
          <Stack>
            <InputLabel required>Franchise Price</InputLabel>
            <TextField
              fullWidth
              id="price"
              name="price"
              disabled
              type="number"
              value={franchisePrice}
              onChange={(e) => setFranchisePrice(e.target.value)}
              placeholder="Enter product price"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel required>Quantity</InputLabel>
            <TextField
              id="quantity"
              name="quantity"
              value={quantity}
              disabled
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={6} md={6}>
          <Stack>
            <InputLabel required>Status</InputLabel>
            <TextField
              id="status"
              name="status"
              value={status}
              disabled
            ></TextField>
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
              rows={3}
              disabled
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add Description"
            />
          </Stack>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={4} md={4}>
          <InputLabel required>Cover Image</InputLabel>
          <Stack>
            <a
              href={`${process.env.REACT_APP_IMAGE_URL}${categoryImage}`}
              target="_blank"
            >
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}${categoryImage}`}
                width={200}
                height={200}
              />
            </a>
          </Stack>
        </Grid>
        {proImage.map((img, index) => {
          return (
            <Grid item xs={12} md={4}>
              <InputLabel required key={index}>
                Image
              </InputLabel>
              <Stack>
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}${img}`}
                  width={200}
                  height={200}
                />
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      <br />
    </MainCard>
  );
}

export default App;
