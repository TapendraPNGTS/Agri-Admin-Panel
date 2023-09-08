import React, { useEffect, useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import NewsApi from "apis/news.api";

import { Button, Grid, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

function AddNews() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const newsApi = new NewsApi();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Check if a file was selected
    if (file) {
      // Validate the file format
      if (file.type === "image/png") {
        // File is a valid PNG image
        setSelectedImage(file);
      } else {
        toast.error("Please select a PNG image.");
        e.target.value = ""; // Clear the file input
      }
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("newsId", params.id);
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("image", selectedImage);

    const editNewsResponse = await newsApi.editNews(formdata);
    if (editNewsResponse && editNewsResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/news", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }
  const getNewsById = useCallback(async () => {
    try {
      const getNewsByIdResponse = await newsApi.getNewsById({
        newsId: params.id,
      });
      if (getNewsByIdResponse && getNewsByIdResponse?.data?.code === 200) {
        setTitle(getNewsByIdResponse.data.data.title);
        setDescription(getNewsByIdResponse.data.data.description);
      } else {
        return toast.error(`Something went wrong!`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getNewsById();
  }, []);

  return (
    <MainCard>
      <form onSubmit={handleSubmit} action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Title</InputLabel>
              <TextField
                fullWidth
                id="title"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Description</InputLabel>
              <TextField
                multiline
                minRows={4}
                maxRows={6}
                fullWidth
                id="description"
                name="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Image</InputLabel>
              <TextField
                fullWidth
                id="file"
                type="file"
                name="file"
                onChange={(e) => {
                  setSelectedImage(e.target.value);
                  handleImageChange(e);
                }}
              />
            </Stack>
          </Grid>

          <br />
        </Grid>
        <br />
        <center>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </center>
      </form>
    </MainCard>
  );
}

export default AddNews;
