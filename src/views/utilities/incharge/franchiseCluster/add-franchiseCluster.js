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
  Typography,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-hot-toast";
import FranchiseClusterApi from "../../../../api/franchiseCluster.api";
import { useDispatch, useSelector } from "react-redux";
import FranchiseBlockApi from "../../../../api/franchiseBlock.api";
import { updateAllFranchiseBlock } from "../../../../redux/redux-slice/franchiseBlock.slice";

import StateApi from "../../../../api/state.api";
import { updateAllState } from "../../../../redux/redux-slice/state.slice";
import DistrictApi from "../../../../api/district.api";
import { updateAllDistrict } from "../../../../redux/redux-slice/district.slice";

function App() {
  const ClusterApi = new FranchiseClusterApi();
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [block, setBlock] = useState("");
  const [city, setCity] = React.useState("");
  const [userState, setUserState] = React.useState("");
  const [address, setAddress] = React.useState("");

  //   bank ariable
  const [bankName, setBankName] = useState("");
  const [acNumber, setAcNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [branchName, setBranchName] = useState("");

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const bank = {
      BankName: bankName,
      AccountNumber: acNumber,
      BranchName: branchName,
      IFSCCode: ifscCode,
    };
    const addServiceRequestResponse = await ClusterApi.addClusterFranchise({
      name: name,
      email: email,
      contact: contact,
      blockId: block,
      bank: bank,
      stateId: userState,
      cityId: city,
      address: address,
    });
    if (
      addServiceRequestResponse &&
      addServiceRequestResponse?.data?.code === 200
    ) {
      toast.success(`Added successsfully`);
      navigate("/franchise-Cluster", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
      setIsLoading(false);
    }
  }

  const dispatch = useDispatch();
  const BlockApi = new FranchiseBlockApi();
  const rows = useSelector((state) => state.franchiseBlock.FranchiseBlock);

  const getAllBlock = useCallback(async () => {
    try {
      const state = await BlockApi.getAllBlockFranchise({});
      if (!state || !state.data.data) {
        return toast.error("no latest state available");
      } else {
        dispatch(updateAllFranchiseBlock(state.data.data));
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

  const stateApi = new StateApi();
  const allState = useSelector((state) => state.state.State);

  const getAllUserState = useCallback(async () => {
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
    getAllUserState();
  }, []);

  const districtApi = new DistrictApi();
  const allDistrict = useSelector((state) => state.district.District);

  async function handledistrict(event) {
    event.preventDefault();
    const district = await districtApi.getDistrictByStateId({
      stateId: userState,
    });
    if (district && district?.data?.code === 200) {
      return dispatch(updateAllDistrict(district.data.data));
    } else {
      return;
    }
  }

  const [isIfscValid, setIsIfscValid] = useState(false);
  const [ifscMessage, setIfscMessage] = useState("");

  const ifscValidation = () => {
    const regexIfsc = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return !(!ifscCode || regexIfsc.test(ifscCode) === false);
  };

  const ifscValid = () => {
    const isIfscValid = ifscValidation();
    setIsIfscValid(isIfscValid);
    setIfscMessage(isIfscValid ? <></> : "Ifsc not valid!");
  };

  return (
    <MainCard title="Add Cluster Incharge">
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
              <InputLabel required>Block InCharge</InputLabel>
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
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Address</InputLabel>
              <TextField
                fullWidth
                id="address"
                name="address"
                inputProps={{ maxLength: 30 }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>State</InputLabel>
              <Select
                id="state"
                name="state"
                value={userState}
                onChange={(e) => setUserState(e.target.value)}
                onBlur={handledistrict}
              >
                {allState.map((state, index) => {
                  return (
                    <MenuItem value={state.StateID} key={index}>
                      {state.Name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>District</InputLabel>
              <Select
                id="district"
                name="district"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {allDistrict.map((district, index) => {
                  return (
                    <MenuItem value={district.DistrictID} key={index}>
                      {district.Name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Stack>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid item>
          <Typography variant="h3">Bank Detail</Typography>
        </Grid>
        <br />
        {/* bank section */}
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Bank Name</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                inputProps={{ maxLength: 30 }}
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Enter Bank Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>A/C No.</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="number"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 14);
                }}
                value={acNumber}
                onChange={(e) => setAcNumber(e.target.value)}
                placeholder="Enter A/C No."
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>IFSC Code</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="text"
                onBlur={ifscValid}
                inputProps={{ maxLength: 15 }}
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                placeholder="Enter IFSC Code"
              />
              {/* <p style={{ color: "red" }}>{ifscMessage}</p> */}
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Branch Name</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                inputProps={{ maxLength: 30 }}
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                placeholder="Enter Branch Name"
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
              Add District
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
