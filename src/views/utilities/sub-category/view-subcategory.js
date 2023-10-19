import React, { useState, useEffect, useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";

import { toast } from "react-hot-toast";
import SubCategoryApi from "../../../api/sub-category.api";


function App() {
  const params = useParams();
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [categoryImage, setCategoryImage] = React.useState("");
  const subcategory = new SubCategoryApi();

  // setName(result.data.name);
  // setDate(result.data.createdAt);
  // setStatus(result.data.isActive);
  // // setCategoryImage(result.data.image);

  const getSubCategoryById = useCallback(async () => {
    try {
      const getSubCategoryByIdResponse = await subcategory.getSubCategoryById({
        subCategoryId: params.id,
      }); 
      if (getSubCategoryByIdResponse && getSubCategoryByIdResponse?.data?.code === 200) {
        setName(getSubCategoryByIdResponse.data.data.Name);
        setStatus(getSubCategoryByIdResponse.data.data.IsActive);
        setCategoryImage(getSubCategoryByIdResponse.data.data.Image);
        setDate(getSubCategoryByIdResponse.data.data.createdAt);
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
    getSubCategoryById();
  }, []);


  function formatDate(date) {
    return new Date(date).toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <MainCard title="Category Details">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel required>Date</InputLabel>
            <TextField id="date" name="date" value={formatDate(date)} disabled></TextField>
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
            <InputLabel required>Status</InputLabel>
            <TextField
              id="status"
              name="status"
              value={status}
              disabled
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel required>Image</InputLabel>
          <Stack>
            <a
              href={`${categoryImage}`}
              target="_blank"
            >
              <img
                src={`${categoryImage}`}
                width={200}
                height={200}
              />
            </a>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default App;
