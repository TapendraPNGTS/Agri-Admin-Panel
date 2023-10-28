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
import FranchiseBlockApi from "../../../../api/franchiseCluster.api";
import { useDispatch, useSelector } from "react-redux";
import FranchiseDistrictApi from "../../../../api/franchiseDistrict.api";
import { updateAllFranchiseDistrict } from "../../../../redux/redux-slice/franchiseDistrict.slice";

import StateApi from "../../../../api/state.api";
import { updateAllState } from "../../../../redux/redux-slice/state.slice";
import DistrictApi from "../../../../api/district.api";
import { updateAllDistrict } from "../../../../redux/redux-slice/district.slice";

function App() {
  const blockApi = new FranchiseBlockApi();
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [active, setActive] = React.useState(true);
  const [district, setDistrict] = useState("");
  const [city, setCity] = React.useState("");
  const [userState, setUserState] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [accept, setAccept] = useState("Accept");
  const [discription, setDiscription] = useState("");

  const handleAccept = (e) => {
    setAccept(e.target.value);
  };

  //   bank ariable
  const [bankName, setBankName] = useState("");
  const [acNumber, setAcNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [branchName, setBranchName] = useState("");

  const getBlockById = useCallback(async () => {
    try {
      const getStateFranchiseByIdResponse =
        await blockApi.getClusterFranchiseById({
          clusterId: params.id,
        });
      if (
        getStateFranchiseByIdResponse &&
        getStateFranchiseByIdResponse?.data?.code === 200
      ) {
        setName(getStateFranchiseByIdResponse.data.data.Name);
        setEmail(getStateFranchiseByIdResponse.data.data.Email);
        setContact(getStateFranchiseByIdResponse.data.data.Contact);
        setUserState(getStateFranchiseByIdResponse.data.data.StateID.StateID);
        setCity(getStateFranchiseByIdResponse.data.data.CityID.DistrictID);
        setAddress(getStateFranchiseByIdResponse.data.data.Address);
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
    const addServiceRequestResponse = await blockApi.frenciseClusterAccept({
      frenchiseId: params.id,
      status: accept,
      description: discription,
    });
    if (
      addServiceRequestResponse &&
      addServiceRequestResponse?.data?.code === 200
    ) {
      toast.success(`Added successsfully`);
      navigate("/franchise-cluster", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  const dispatch = useDispatch();
  const FranchisedistrictApi = new FranchiseDistrictApi();
  const rows = useSelector(
    (state) => state.franchiseDistrict.FranchiseDistrict
  );

  const getAllState = useCallback(async () => {
    try {
      const state = await FranchisedistrictApi.getAllDistrictFranchise({});
      if (!state || !state.data.data) {
        return toast.error("no latest state available");
      } else {
        dispatch(updateAllFranchiseDistrict(state.data.data));
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
    <MainCard title="Edit Block Incharge">
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
              <InputLabel required>District InCharge</InputLabel>
              <Select
                id="state"
                name="state"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                {rows.map((state) => {
                  return (
                    <MenuItem value={state.DistrictID}>{state.Name}</MenuItem>
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
                id="dist"
                name="dist"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {allDistrict.map((dist, index) => {
                  return (
                    <MenuItem value={dist.DistrictID} key={index}>
                      {dist.Name}
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
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Accept Or Reject</InputLabel>
              <Select
                id="accept"
                name="accept"
                value={accept}
                onChange={(e) => handleAccept(e)}
              >
                <MenuItem value="Accept">Accept</MenuItem>
                <MenuItem value="Reject">Reject</MenuItem>
              </Select>
            </Stack>
          </Grid>
          {accept === "Reject" ? (
            <>
              <Grid item xs={12} md={12}>
                <Stack>
                  <InputLabel required>Reason For Reject</InputLabel>
                  <TextField
                    fullWidth
                    id="discription"
                    name="discription"
                    inputProps={{ maxLength: 30 }}
                    value={discription}
                    onChange={(e) => setDiscription(e.target.value)}
                    placeholder="Reason for rejection"
                  />
                </Stack>
              </Grid>
            </>
          ) : (
            <></>
          )}
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
