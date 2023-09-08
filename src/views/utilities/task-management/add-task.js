import React from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import TaskApi from "apis/task.api";

import { Button, Grid, Stack, TextField, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useSelector } from "react-redux";

function AddTask() {
  const navigate = useNavigate();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const taskApi = new TaskApi();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [booth, setBooth] = React.useState([]);
  const booths = useSelector((state) => state.booth.Booth);
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
    var formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    booth.map((row, index) => {
      formData.append(`boothId[${index}]`, row);
    });
    formData.append("image", selectedImage);
    const addTaskResponse = await taskApi.addTask(formData);
    if (addTaskResponse && addTaskResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/task", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  const handleChanged = (event) => {
    console.log(event.target.value);

    const {
      target: { value },
    } = event;
    setBooth(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
              <InputLabel required>Select Booth</InputLabel>
              <Select
                fullWidth
                id="booth"
                name="booth"
                value={booth}
                multiple
                onChange={handleChanged}
                MenuProps={MenuProps}
              >
                {booths.map((row) => (
                  <MenuItem value={row.boothId}>{row.title}</MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Description</InputLabel>
              <TextField
                multiline
                maxRows={4}
                minRows={4}
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
          <Grid item xs={12} md={6}>
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

export default AddTask;
