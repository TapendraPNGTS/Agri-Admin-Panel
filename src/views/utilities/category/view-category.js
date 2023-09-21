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
  const [categoryImage, setCategoryImage] = React.useState("");

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getKycDataById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      categoryId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getCategoryById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setName(result.data.Name);
        setDate(result.data.createdAt);
        setStatus(result.data.IsActive);
        setCategoryImage(result.data.Image);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getKycDataById();
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
      </Grid>
    </MainCard>
  );
}

export default App;
