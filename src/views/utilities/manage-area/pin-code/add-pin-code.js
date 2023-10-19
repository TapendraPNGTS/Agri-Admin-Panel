import React, { useState, useEffect , useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import DistrictApi from "../../../../api/district.api";
import { updateAllDistrict } from "../../../../redux/redux-slice/district.slice";

function App() {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const districtApi = new DistrictApi();
    const rows = useSelector((state) => state.district.District);

    const getAllDistrict = useCallback(async () => {
      try {
        const district = await districtApi.getAllDistrict({});
        if (!district || !district.data.data) {
          return toast.error("no latest district available");
        } else {
          dispatch(updateAllDistrict(district.data.data));
          return;
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
        throw error;
      }
    });

    useEffect(() => {
      getAllDistrict();
    }, []);

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const addServiceRequestResponse = await districtApi.addDistrict({
      districtId: district,
      code: name,
    });
    if (
      addServiceRequestResponse &&
      addServiceRequestResponse?.data?.code === 200
    ) {
      toast.success(`Added successsfully`);
      navigate("/district", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  return (
    <MainCard title="Add Pin Code">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Choose District</InputLabel>
              <Select
                id="district"
                name="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                {rows.map((row, i) => {
                  return (
                    <MenuItem key={i} value={row.DistrictID}>
                      {row.Name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Pin Code</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                inputProps={{ maxLength: 30 }}
                type="number"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter State Name"
              />
            </Stack>
          </Grid>
        </Grid>
        <br />
        <br />
        <center>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" type="submit">
              Add Pin Code
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
