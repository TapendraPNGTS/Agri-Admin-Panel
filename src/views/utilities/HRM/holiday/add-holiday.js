import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import formatDate from "../../Date-Formet/date-formet";
import { toast } from "react-hot-toast";
import HolidayApi from "../../../../api/holiday.api";

function App() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const holidayApi = new HolidayApi();

  React.useEffect(() => {}, []);

   async function handleSubmit(event) {
     setIsLoading(true);
     event.preventDefault();
     const addServiceRequestResponse = await holidayApi.addHoliday({
       occasion: name,
       date: selectedDate,
     });
     if (
       addServiceRequestResponse &&
       addServiceRequestResponse?.data?.code === 200
     ) {
       toast.success(`Added successsfully`);
       navigate("/holidays", { replace: true });
     } else {
       return toast.error(`Something went wrong!`);
     }
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
