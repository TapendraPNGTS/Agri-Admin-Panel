import React, { useState, useCallback, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Grid, Stack, TextField } from "@mui/material";
import formatDate from "../../Date-Formet/date-formet"
import { toast } from "react-hot-toast";
import HolidayApi from "../../../../api/holiday.api";

function App() {
  const params = useParams();
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState();
  const [date, setDate] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);

  const holidayApi = new HolidayApi();

  const handleDateChange = (date) => {
    setDate(date);
  };

  const getHolidayById = useCallback(async () => {
    try {
      const getHolidayByIdResponse = await holidayApi.getHolidayById({
        holidayId: params.id,
      });
      if (
        getHolidayByIdResponse &&
        getHolidayByIdResponse?.data?.code === 200
      ) {
        setDate(getHolidayByIdResponse.data.data.Date);
        setOccasion(getHolidayByIdResponse.data.data.Occasion);
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
    getHolidayById();
  }, []);

      
    async function handleSubmit(event) {
    setIsLoading(true)
    event.preventDefault();
    const editHolidayResponse = await holidayApi.editHoliday({
      holidayId: params.id,
      date: date,
      occasion: occasion,
    });
    if (editHolidayResponse && editHolidayResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/holidays", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  return (
    <MainCard title="Edit Holiday">
      <form action="#"  onSubmit={handleSubmit}>
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
