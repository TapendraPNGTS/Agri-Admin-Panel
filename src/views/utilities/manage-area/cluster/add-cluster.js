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
import ClusterApi from "../../../../api/cluster.api";
import BlocktApi from "../../../../api/block.api";
import { updateAllBlock } from "../../../../redux/redux-slice/block.slice";

function App() {
  const params = useParams();
  const clusterApi = new ClusterApi();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const blockApi = new BlocktApi();
    const rows = useSelector((state) => state.cluster.Cluster);

    const getAllBlock = useCallback(async () => {
      try {
        const block = await blockApi.getAllBlock({});
        if (!block || !block.data.data) {
          return toast.error("no latest block available");
        } else {
          dispatch(updateAllBlock(block.data.data));
          return;
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
        throw error;
      }
    });

    useEffect(() => {
      getAllBlock();
    }, []);

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const addServiceRequestResponse = await clusterApi.addCluster({
      blockId: district,
      name: name,
    });
    if (
      addServiceRequestResponse &&
      addServiceRequestResponse?.data?.code === 200
    ) {
      toast.success(`Added successsfully`);
      navigate("/cluster", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  return (
    <MainCard title="Add Cluster">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Choose Block</InputLabel>
              <Select
                id="district"
                name="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                {rows.map((row, i) => {
                  return (
                    <MenuItem key={i} value={row.BlockLID}>
                      {row.Name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Cluster</InputLabel>
              <TextField
                fullWidth
                id="block"
                name="block"
                inputProps={{ maxLength: 30 }}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Cluster Name"
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
              Add Custer
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
