import React, { useState, useEffect, useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import ClusterApi from "../../../../api/cluster.api";

import { useDispatch, useSelector } from "react-redux";
import BlockApi from "../../../../api/block.api";
import { updateAllBlock } from "../../../../redux/redux-slice/block.slice";

function App() {

    const params = useParams();
    const clusterApi = new ClusterApi();
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [block , setBlock] = React.useState('');

  const dispatch = useDispatch();
  const blockApi = new BlockApi();
  const rows = useSelector((state) => state.block.Block);

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

     const getClusterById = useCallback(async () => {
       try {
         const getClusterByIddResponse = await clusterApi.getClusterById({
           clusterId: params.id,
         });
         if (
           getClusterByIddResponse &&
           getClusterByIddResponse?.data?.code === 200
         ) {
           setName(getClusterByIddResponse.data.data.Name);
           setBlock(getClusterByIddResponse.data.data.BlockLID);
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
       getClusterById();
     }, []);

     async function handleSubmit(event) {
       setIsLoading(true);
       event.preventDefault();
       const addServiceRequestResponse = await clusterApi.editCluster({
         blockId: block,
         clusterId: params.id,
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
    <MainCard title="Edit Cluster">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Choose Block</InputLabel>
              <Select
                id="active"
                name="active"
                value={block}
                onChange={(e) => setBlock(e.target.value)}
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
                id="state"
                name="state"
                type="text"
                inputProps={{ maxLength: 30 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Cluster"
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
              Update Cluster
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
