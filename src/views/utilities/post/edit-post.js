import React, { useEffect, useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import PostApi from "apis/post.api";

import {
  Button,
  Grid,
  Stack,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";

function AddPost() {
  const navigate = useNavigate();
  const params = useParams();

  const postApi = new PostApi();
  const [title, setTitle] = React.useState("");
  const [type, setType] = React.useState(0);
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
    formdata.append("postId", params.id);
    formdata.append("title", title);
    formdata.append("type", type);
    formdata.append("image", selectedImage);

    const editPostResponse = await postApi.editPost(formdata);
    if (editPostResponse && editPostResponse?.data?.code === 200) {
      toast.success(`Updated successsfully`);
      navigate("/post", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }
  const getPostById = useCallback(async () => {
    try {
      const getPostByIdResponse = await postApi.getPostById({
        postId: params.id,
      });
      if (getPostByIdResponse && getPostByIdResponse?.data?.code === 200) {
        setTitle(getPostByIdResponse.data.data.title);
        setType(getPostByIdResponse.data.data.type);
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
    getPostById();
  }, []);

  return (
    <MainCard>
      <form onSubmit={handleSubmit} action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Type</InputLabel>
              <Select
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value={0} disabled>
                  Select Type
                </MenuItem>
                <MenuItem value={"Image"}>Image</MenuItem>
                <MenuItem value={"Video"}>Video</MenuItem>
              </Select>
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

export default AddPost;
