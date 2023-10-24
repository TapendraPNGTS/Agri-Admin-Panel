import React, { useState, useCallback} from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
import { toast } from "react-hot-toast";
import ProductApi from "../../../api/product.api";
import parse from "html-react-parser";

function App() {
  const params = useParams();
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [categoryImage, setCategoryImage] = React.useState("");
  const [categoryName, setCategoryName] = React.useState("");
  const [proImage, setProImage] = React.useState([]);
  const [franchisePrice, setFranchisePrice] = useState("");
  const [description, setDescription] = useState("");
  const productApi = new ProductApi();

  console.log((description))

  const getProductById = useCallback(async () => {
    try {
      const getProductByIdResponse = await productApi.getProductById({
        productId: params.id,
      });
      if (
        getProductByIdResponse &&
        getProductByIdResponse?.data?.code === 200
      ) {
        setName(getProductByIdResponse.data.data.Name);
        setCategoryName(getProductByIdResponse.data.data.CategoryID.Name);
        setDate(getProductByIdResponse.data.data.CreatedAt);
        setStatus(getProductByIdResponse.data.data.IsActive);
        setPrice(getProductByIdResponse.data.data.Price);
        setQuantity(getProductByIdResponse.data.data.Quantity);
        setFranchisePrice(getProductByIdResponse.data.data.FrenchisePrice);
        setCategoryImage(getProductByIdResponse.data.data.CoverImage);
        setProImage(getProductByIdResponse.data.data.Images);
        // setCategoryName(getProductByIdResponse.data.data.categoryId.name);
        // setCategoryImg(getProductByIdResponse.data.data.categoryId.image);
        setDescription(getProductByIdResponse.data.data.Description);
        // setFeatures(getProductByIdResponse.data.data.feature);
        // console.log(getProductByIdResponse.data.data.images)
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
            <InputLabel required>Category Name</InputLabel>
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
              value={parse(description)}
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
            <a href={categoryImage} target="_blank">
              <img src={categoryImage} width={200} height={200} />
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
                <img src={img} width={200} height={200} />
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
