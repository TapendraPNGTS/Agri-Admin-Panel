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

import { useDispatch, useSelector } from "react-redux";
import FranchiseClusterApi from "../../../../api/franchiseCluster.api";
import { updateAllFranchiseCluster } from "../../../../redux/redux-slice/franchiseCluster.slice";

import FranchiseVillageApi from "../../../../api/franchiseVillage.api";


function App() {
  const VillageApi = new FranchiseVillageApi();
  const ClusterApi = new FranchiseClusterApi();
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [active, setActive] = React.useState(true);
  const [block, setBlock] = useState("");

  const getBlockById = useCallback(async () => {
    try {
      const getStateFranchiseByIdResponse =
        await VillageApi.getVillageFranchiseById({
          villageId: params.id,
        });
      if (
        getStateFranchiseByIdResponse &&
        getStateFranchiseByIdResponse?.data?.code === 200
      ) {
        setName(getStateFranchiseByIdResponse.data.data.Name);
        setEmail(getStateFranchiseByIdResponse.data.data.Email);
        setContact(getStateFranchiseByIdResponse.data.data.Contact);
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
    getBlockById();
  }, []);

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const addServiceRequestResponse = await VillageApi.editVillageFranchise({
      villageId: params.id,
      clusterId: block,
      name: name,
      contact: contact,
      isActive: active,
    });
    if (
      addServiceRequestResponse &&
      addServiceRequestResponse?.data?.code === 200
    ) {
      toast.success(`Added successsfully`);
      navigate("/franchise-village", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  const dispatch = useDispatch();
  const clusterApi = new FranchiseClusterApi();
  const rows = useSelector((state) => state.franchiseCluster.FranchiseCluster);

  const getAllDistrict = useCallback(async () => {
    try {
      const state = await clusterApi.getAllClusterFranchise({});
      if (!state || !state.data.data) {
        return toast.error("no latest state available");
      } else {
        dispatch(updateAllFranchiseCluster(state.data.data));
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


  return (
    <MainCard title="Edit Village Incharge">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Name</InputLabel>
              <TextField
                fullWidth
                id="name"
                name="name"
                inputProps={{ maxLength: 30 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Email</InputLabel>
              <TextField
                fullWidth
                id="email"
                name="email"
                inputProps={{ maxLength: 30 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Contact</InputLabel>
              <TextField
                fullWidth
                id="contact"
                name="contact"
                type="number"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 10);
                }}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter Contact Number"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Active</InputLabel>
              <Select
                id="active"
                name="active"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              >
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Cluster</InputLabel>
              <Select
                id="state"
                name="state"
                value={block}
                onChange={(e) => setBlock(e.target.value)}
              >
                {rows.map((state) => {
                  return (
                    <MenuItem value={state.BlockID}>{state.Name}</MenuItem>
                  );
                })}
              </Select>
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
