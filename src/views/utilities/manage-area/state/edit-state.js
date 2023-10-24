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
import StateApi from "../../../../api/state.api";

function App() {
  const params = useParams();
  const stateApi = new StateApi();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);

    const getStateById = useCallback(async () => {
      try {
        const getStateByIddResponse = await stateApi.getStateById({
          stateFId: params.id,
        });
        if (
          getStateByIddResponse &&
          getStateByIddResponse?.data?.code === 200
        ) {
          setName(getStateByIddResponse.data.data.Name);
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
      const addServiceRequestResponse = await stateApi.updateState({
        stateId: params.id,
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
    <MainCard title="Edit State">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>State Name</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                inputProps={{ maxLength: 30 }}
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
              Update State
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
