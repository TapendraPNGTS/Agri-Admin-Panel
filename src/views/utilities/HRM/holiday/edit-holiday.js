import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Grid, Stack, TextField } from "@mui/material";
import formatDate from "../../Date-Formet/date-formet"
function App() {
  const params = useParams();
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState();
  const [date, setDate] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  const handleDateChange = (date) => {
    setDate(date);
  };

  function getProductById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      holidayId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getHolidayById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setDate(result.data.Date);
        setOccasion(result.data.Occasion);
      })
      .catch((error) => console.log("error", error));
  }
  React.useEffect(() => {
    getProductById();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      holidayId: params.id,
      date: date,
      occasion: occasion,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}updateHoliday`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/holidays");
          toast.success("Updated Successfully", {
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

  return (
    <MainCard title="Edit Holiday">
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder="Enter Occasion"
              />
            </Stack>
          </Grid>
        </Grid>
        <br />
        <br />
        <center>
          {isLoading ? (
            <Spinner animation="grow" />
          ) : (
            <Button variant="contained" type="submit">
              Update Holiday
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
