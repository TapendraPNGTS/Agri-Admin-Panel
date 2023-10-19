import React, { useState, useEffect, useCallback } from "react";
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
  CircularProgress,
} from "@mui/material";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-hot-toast";
import ProductApi from "../../../api/product.api";
import CategoryApi from "../../../api/category.api";
import { updateAllCategory } from "../../../redux/redux-slice/category.slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const params = useParams();
  const navigate = useNavigate();
  const productApi = new ProductApi();
  const dispatch = useDispatch();
  const [file, setFile] = useState([]);
  const [file1, setFile1] = useState([]);
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [active, setActive] = React.useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryId, setCategoryId] = useState();
  const [franchisePrice, setFranchisePrice] = useState("");
  const [bestSeller, setBestSeller] = React.useState(false);
  const [newArrival, setNewArrival] = React.useState(false);
  const [bestDeal, setBestDeal] = React.useState(false);
  const [discount, setDiscount] = React.useState(false);
  const [discountPrice, setDiscountPrice] = React.useState(0);
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState([]);
  const [fileName1, setFileName1] = useState();
  const [coverImage, setCoverImage] = React.useState("");
  const [proImage, setProImage] = React.useState([]);
  const [features, setFeatures] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFileName(event.target.value);
  }
  function handleChange1(event) {
    setFile1(event.target.files);
    setFileName1(event.target.value);
  }
  const handleChangeDescription = (content, delta, source, editor) => {
    setDescription(content);
  };

  const handleChangeFeatures = (content, delta, source, editor) => {
    setFeatures(content);
  };
  
  const getProductById = useCallback(async () => {
    try {
      const getProductByIdResponse = await productApi.getProductById({
        productId: params.id,
      });
      if (
        getProductByIdResponse &&
        getProductByIdResponse?.data?.code === 200
      ) {
        setTitle(getProductByIdResponse.data.data.Name);
        setCategoryId(getProductByIdResponse.data.data.CategoryID.CategoryID);
        setTitle(getProductByIdResponse.data.data.Name);
        setActive(getProductByIdResponse.data.data.IsActive);
        setPrice(getProductByIdResponse.data.data.Price);
        setQuantity(getProductByIdResponse.data.data.Quantity);
        setDiscount(getProductByIdResponse.data.data.Discount);
        setFranchisePrice(getProductByIdResponse.data.data.FrenchisePrice);
        setCoverImage(getProductByIdResponse.data.data.CoverImage);
        setProImage(getProductByIdResponse.data.data.Images);
        // setBestSeller(getProductByIdResponse.data.data.isBestSeller);
        // setBestDeal(getProductByIdResponse.data.data.IsBestDeal);
        // setNewArrival(getProductByIdResponse.data.data.IsNewArrival);
        setDiscountPrice(getProductByIdResponse.data.data.DiscountPrice);
        setDescription(getProductByIdResponse.data.data.Description);
        // setFeatures(getProductByIdResponse.data.data.feature);
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

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("adminId", localStorage.getItem("userId"));
    formdata.append("productId", params.id);
    formdata.append("name", title);
    formdata.append("active", active);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    // formdata.append("feature", features);
    formdata.append("description", description);
    formdata.append("categoryId", categoryId);
    // formdata.append("subCategoryId", mainVarient);
    // formdata.append("categoryId", categoryId);
    formdata.append("img", file);

    for (const key of Object.keys(file1)) {
      formdata.append("images", file1[key]);
    }
    formdata.append("frenchisePrice", franchisePrice);
    formdata.append("discount", discount);
    formdata.append("discountPrice", discountPrice);
    // formdata.append("isNew", newArrival);
    // formdata.append("isBestSeller", bestSeller);
    // formdata.append("isBestDeal", bestDeal);
    const editProductResponse = await productApi.editProduct(formdata);
    if (editProductResponse && editProductResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/product", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

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
                inputProps={{ maxLength: 30 }}
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
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Price"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Franchise Price</InputLabel>
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
                value={franchisePrice}
                onChange={(e) => setFranchisePrice(e.target.value)}
                placeholder="Enter product price"
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
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 3);
                }}
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
                value={categoryId}
                key={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
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
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Best Seller</InputLabel>
              <Select
                id="best-seller"
                name="best-seller"
                value={bestSeller}
                onChange={(e) => setBestSeller(e.target.value)}
              >
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>New Arrival</InputLabel>
              <Select
                id="new-arrival"
                name="new-arrival"
                value={newArrival}
                onChange={(e) => setNewArrival(e.target.value)}
              >
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Best Deal</InputLabel>
              <Select
                id="best-deal"
                name="best-deal"
                value={bestDeal}
                onChange={(e) => setBestDeal(e.target.value)}
              >
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Description</InputLabel>
              <ReactQuill
                className="quill-editor"
                size={`lg`}
                theme="snow"
                value={description}
                onChange={handleChangeDescription}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Features</InputLabel>
              <ReactQuill
                className="quill-editor"
                size={`md`}
                theme="snow"
                value={features}
                onChange={handleChangeFeatures}
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Discount</InputLabel>
              <Select
                id="discount"
                name="discount"
                value={discount}
                key={discount}
                onChange={(e) => setDiscount(e.target.value)}
              >
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </Stack>
          </Grid>
          {discount ? (
            <Grid item xs={6} md={6}>
              <Stack>
                <InputLabel required>Discount Price</InputLabel>
                <TextField
                  fullWidth
                  id="price"
                  name="price"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseFloat(e.target.value))
                      .toString()
                      .slice(0, 6);
                  }}
                  type="number"
                  value={discountPrice}
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  placeholder="Enter product price"
                />
              </Stack>
            </Grid>
          ) : (
            <></>
          )}
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel>Cover Image</InputLabel>
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
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel>Choose Mutiple Image</InputLabel>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="thumbnail"
                  multiple
                  value={fileName1}
                  accept="image/png, image/jpeg"
                  onChange={handleChange1}
                />
                <label className="custom-file-label" for="thumbnail">
                  {fileName1}
                </label>
              </div>
            </Stack>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={gridSpacing}>
          <Grid item xs={4} md={4}>
            <InputLabel required>Cover Image</InputLabel>
            <Stack>
              <a href={`${coverImage}`} target="_blank">
                <img src={`${coverImage}`} width={200} height={200} />
              </a>
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <InputLabel required>Images</InputLabel>
            {proImage.map((image, index) => {
              return (
                <Stack>
                  <a href={image} target="_blank" key={index}>
                    <img src={image} width={200} height={200} />
                  </a>
                </Stack>
              );
            })}
          </Grid>
        </Grid>
        <br></br>
        <center>
          {isLoading ? (
            <CircularProgress />
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
