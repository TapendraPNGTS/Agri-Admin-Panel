import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import formatDate from "../../Date-Formet/date-formet";
function App() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  React.useEffect(() => {}, []);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      occasion: name,
      date: selectedDate,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}addHoliday`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/holidays");
          toast.success("Added Successfully", {
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

  const handleDateChange = (date) => {
    {
      formatDate(setSelectedDate(date));
    }
  };

  return (
    <MainCard title="Add Holiday">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Date</InputLabel>
              <TextField
                fullWidth
                id="date"
                name="date"
                type={`date`}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                placeholder="Enter Occasion"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Occasion</InputLabel>
              <TextField
                fullWidth
                id="occasion"
                name="occasion"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Occasion"
              />
            </Stack>
          </Grid>
        </Grid>
        <br />
        <center>
          {isLoading ? (
            <Spinner animation="grow" />
          ) : (
            <Button variant="contained" type="submit">
              Add Holiday
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
