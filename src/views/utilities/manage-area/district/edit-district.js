import React, { useState, useEffect, useCallback } from "react";
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
import DistrictApi from "../../../../api/district.api";
import { useDispatch, useSelector } from "react-redux";
import StateApi from "../../../../api/state.api";
import { updateAllState } from "../../../../redux/redux-slice/state.slice";

function App() {
  const params = useParams();
  const districtApi = new DistrictApi();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = React.useState("");

    const dispatch = useDispatch();
    const stateApi = new StateApi();
    const rows = useSelector((state) => state.state.State);

    const getAllState = useCallback(async () => {
      try {
        const state = await stateApi.getAllState({});
        if (!state || !state.data.data) {
          return toast.error("no latest state available");
        } else {
          dispatch(updateAllState(state.data.data));
          return;
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
        throw error;
      }
    });

    useEffect(() => {
      getAllState();
    }, []);

    const getStateById = useCallback(async () => {
      try {
        const getStateByIddResponse = await districtApi.getDistrictById({
          cityId: params.id,
        });
        if (
          getStateByIddResponse &&
          getStateByIddResponse?.data?.code === 200
        ) {
          setName(getStateByIddResponse.data.data.Name);
          setState(getStateByIddResponse.data.data.StateID);
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
      getStateById();
    }, []);

    async function handleSubmit(event) {
      setIsLoading(true);
      event.preventDefault();
      const addServiceRequestResponse = await districtApi.updateDistrict({
        stateId: state,
        cityId: params.id,
        name: name,
      });
      if (
        addServiceRequestResponse &&
        addServiceRequestResponse?.data?.code === 200
      ) {
        toast.success(`Added successsfully`);
        navigate("/franchise-state", { replace: true });
      } else {
        return toast.error(`Something went wrong!`);
      }
    }


  return (
    <MainCard title="Edit District">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
        <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Choose State</InputLabel>
              <Select
                id="active"
                name="active"
                value={state}
                key={state}
                onChange={(e) => setState(e.target.value)}
              >
                {rows.map((row, i) => {
                  return (
                    <MenuItem key={i} value={row.StateID}>
                      {row.Name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>District Name</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                inputProps={{ maxLength: 30 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter District Name"
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
              Update District
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
