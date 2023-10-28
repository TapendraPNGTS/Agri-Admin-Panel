import React, { useState, useEffect, useCallback, useRef } from "react";
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
  CircularProgress,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ProductApi from "../../../api/product.api";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import CategoryApi from "../../../api/category.api"; //
import { updateAllCategory } from "../../../redux/redux-slice/category.slice";
import SubCategoryApi from "../../../api/sub-category.api";
import { updateAllSubCategory } from "../../../redux/redux-slice/sub-category.slice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef();
  const productApi = new ProductApi();
  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState([]);
  const [file1, setFile1] = useState([]);
  const [fileName1, setFileName1] = useState();
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState();
  const [quantity, setQuantity] = React.useState("");
  const [active, setActive] = React.useState(true);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [franchisePrice, setFranchisePrice] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [bestSeller, setBestSeller] = React.useState(false);
  const [newArrival, setNewArrival] = React.useState(false);
  const [bestDeal, setBestDeal] = React.useState(false);
  const [features, setFeatures] = useState();
  const [mainVarient, setMainVerient] = React.useState("");
  const [salePrice, setSalePrice] = React.useState();
  const [message, setMessage] = React.useState("");
  const [frMessage, setFrMessage] = React.useState("");
  // const [variant, setVariant] = React.useState([]);
  const [stateComission, setStateComission] = React.useState('');
  const [districtComission, setDistrictComission] = React.useState("");
  const [blockComission, setBlockComission] = React.useState("");
  const [clusterComission, setClusterComission] = React.useState("");

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

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("feature", features);
    formdata.append("price", price);
    formdata.append("categoryId", category);
    formdata.append("subCategoryId", mainVarient);
    formdata.append("quantity", quantity);
    formdata.append("active", active);
    formdata.append("stateCommission", stateComission);
    formdata.append("districtCommission", districtComission);
    formdata.append("blockCommission", blockComission);
    formdata.append("clusterCommission", clusterComission);
    // Append each item in the variant array to the FormData object
    formdata.append("variant", []);
    formdata.append("img", file);
    for (const key of Object.keys(file1)) {
      formdata.append(`images`, file1[key]);
    }
    formdata.append("frenchisePrice", franchisePrice);
    // formdata.append("discount", discount);
    formdata.append("discountPrice", salePrice);
    formdata.append("isNew", newArrival);
    formdata.append("isBestSeller", bestSeller);
    formdata.append("isBestDeal", bestDeal);
    const addBannerResponse = await productApi.addProduct(formdata);
    if (addBannerResponse && addBannerResponse?.data?.code === 200) {
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

  const subCategoryApi = new SubCategoryApi();
  const rowses = useSelector((state) => state.subCategory.SubCategory);

  async function handleSetSubCategory(event) {
    event.preventDefault();
    const subCategories = await subCategoryApi.getSubCategoryByCategoryId({
      categoryId: category,
    });
    if (subCategories && subCategories?.data?.code === 200) {
      return dispatch(updateAllSubCategory(subCategories.data.data));
    } else {
      return;
    }
  }

  const checkMarketPrice = () => {
    if (salePrice < price) {
      setMessage("");
    } else {
      setMessage(
        <span style={{ color: "red" }}>Selling price doesn't greater than (Market Retail Price)MRP</span>
      );
    }
  };

  const checkFranchisePrice = () => {
    if (franchisePrice < price) {
      setFrMessage("");
    } else {
      setFrMessage(
        <span style={{ color: "red" }}>
          Franchise price doesn't greater than (Market Retail Price)MRP
        </span>
      );
    }
  };

  return (
    <MainCard title="Add Product">
      <form>
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
              <InputLabel required>Market Retail Price (MRP)</InputLabel>
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
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                placeholder="Enter product price"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Selling Price</InputLabel>
              <TextField
                fullWidth
                id="sale"
                name="sale"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                type="number"
                value={salePrice}
                onChange={(e) => setSalePrice(parseFloat(e.target.value))}
                onBlur={checkMarketPrice}
                placeholder="Enter Market price"
              />
              {message}
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
                onChange={(e) => setFranchisePrice(parseFloat(e.target.value))}
                onBlur={checkFranchisePrice}
                placeholder="Enter Franchise price"
              />
              {frMessage}
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
              <InputLabel required>State Comission</InputLabel>
              <TextField
                fullWidth
                id="state-commission"
                name="state-commission"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                value={stateComission}
                onChange={(e) => setStateComission(e.target.value)}
                placeholder="Enter State Comission"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>District Comission</InputLabel>
              <TextField
                fullWidth
                id="district-commission"
                name="district-commission"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                value={districtComission}
                onChange={(e) => setDistrictComission(e.target.value)}
                placeholder="Enter District Comission"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Block Comission</InputLabel>
              <TextField
                fullWidth
                id="block-commission"
                name="block-commission"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                value={blockComission}
                onChange={(e) => setBlockComission(e.target.value)}
                placeholder="Enter BLock Comission"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Cluster Comission</InputLabel>
              <TextField
                fullWidth
                id="cluster-commission"
                name="cluster-commission"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                value={clusterComission}
                onChange={(e) => setClusterComission(e.target.value)}
                placeholder="Enter cluster Comission"
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
          {/* <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Variant</InputLabel>
              <TextField
                fullWidth
                id="quantity"
                name="quantity"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
              />
              <br />
              <div>
                {tags.map((tag, index) => (
                  <span>
                    <span
                      key={index}
                      onClick={() => handleTagClick(index)}
                      style={{ border: "1px solid", borderRadius: "5px" }}
                    >
                      &nbsp; {tag} <span style={{ color: "red" }}>x</span>{" "}
                      &nbsp;
                    </span>
                    &nbsp; &nbsp;
                  </span>
                ))}
              </div>
            </Stack>
          </Grid> */}
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Choose Category</InputLabel>
              <Select
                id="active"
                name="active"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                onBlur={handleSetSubCategory}
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
          <Grid item xs={6} md={6}>
            {rowses.length > 0 ? (
              <Stack>
                <InputLabel required>Sub Category</InputLabel>
                <Select
                  id="mainVarient"
                  name="mainVarient"
                  value={mainVarient}
                  placeholder="Select Sub Category"
                  onChange={(e) => setMainVerient(e.target.value)}
                  // renderValue={
                  //   category !== "" ? undefined : () => "--Select SubCategory--"
                  // }
                >
                  {rowses.map((row, i) => {
                    return (
                      <MenuItem key={i} value={row.SubCategoryID}>
                        {row.Name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Stack>
            ) : (
              <> </>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Description</InputLabel>
              <ReactQuill
                className="quill-editor"
                size={`md`}
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
          {/* <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Discount</InputLabel>
              <Select
                id="discount"
                name="discount"
                value={discount}
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
                <InputLabel required>Discount Percent</InputLabel>
                <TextField
                  fullWidth
                  id="price"
                  name="price"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseFloat(e.target.value))
                      .toString()
                      .slice(0, 2);
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
          )} */}
        </Grid>
        <br />
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
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
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel>Choose Multiple Image</InputLabel>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="thumbnail"
                  multiple
                  accept="image/png, image/jpeg"
                  onChange={handleChange1}
                  value={fileName1}
                  required
                />
                <label className="custom-file-label" for="thumbnail">
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
            <Button variant="contained" onClick={handleSubmit}>
              Add Product
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
