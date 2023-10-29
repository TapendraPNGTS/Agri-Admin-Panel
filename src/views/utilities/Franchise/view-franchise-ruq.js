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
import { useDispatch, useSelector } from "react-redux";
import FrenciseApi from "../../../api/franchise.api";
import { updateAllFrencise } from "../../../redux/redux-slice/frenchise.slice";

import StateApi from "../../../api/state.api";
import { updateAllState } from "../../../redux/redux-slice/state.slice";
import DistrictApi from "../../../api/district.api";
import { updateAllDistrict } from "../../../redux/redux-slice/district.slice";
import FranchiseClusterApi from "../../../api/franchiseCluster.api";
import { updateAllFranchiseCluster } from "../../../redux/redux-slice/franchiseCluster.slice";

function App() {
  const dispatch = useDispatch();
  const frenciseApi = new FrenciseApi();
  const rows = useSelector((state) => state.frencise.Frencise);

  const params = useParams();
  const navigate = useNavigate();
  const [firmName, setFirmName] = React.useState("");
  const [person, setPerson] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [firmType, setFirmType] = React.useState(false);
  const [gstNo, setGstNo] = React.useState(false);
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [pinCode, setPinCode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [village, setVillage] = React.useState("");
  const [tehsil, setTehsil] = React.useState("");
  const [block, setBlock] = React.useState("");
  const [allClusters, setAllCluster] = React.useState([]);

  //   bank ariable
  const [bankName, setBankName] = useState("");
  const [acNumber, setAcNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [branchName, setBranchName] = useState("");

  // license
  const [pstLicense, setPstLicense] = useState("");
  const [pstDate, setPstDate] = useState("");
  const [pstValidDate, setPstValidDate] = useState("");

  const [seedLicense, setSeedLicense] = useState("");
  const [seedDate, setSeedDate] = useState("");
  const [seedValidDate, setSeedValidDate] = useState("");

  const [fertiLicense, setFertiLicense] = useState("");
  const [fertiDate, setFertiDate] = useState("");
  const [fertiValidDate, setFertiValidDate] = useState("");

  const [accept, setAccept] = useState("Accept");
  const [discription, setDiscription] = useState('');

  const getFrenciseById = useCallback(async () => {
    try {
      const getFrenciseResponse = await frenciseApi.getFrenciseById({
        frenchiseId: params.id,
      });
      if (getFrenciseResponse && getFrenciseResponse?.data?.code === 200) {
        setFirmName(getFrenciseResponse.data.data.FirmName);
        setPerson(getFrenciseResponse.data.data.Name);
        setEmail(getFrenciseResponse.data.data.Email);
        setGstNo(getFrenciseResponse.data.data.GstNumber);
        setFirmType(getFrenciseResponse.data.data.FirmType);
        setNumber(getFrenciseResponse.data.data.Contact);
        setAddress(getFrenciseResponse.data.data.Address);

        setCity(getFrenciseResponse.data.data.CityID.DistrictID);
        setState(getFrenciseResponse.data.data.StateID.StateID);
        fetchDistrict(state);
        setPinCode(getFrenciseResponse.data.data.PinCode);
        setBlock(getFrenciseResponse.data.data.ClusterID)
        // bank details
        setBankName(getFrenciseResponse.data.data.Bank.BankName);
        setAcNumber(getFrenciseResponse.data.data.Bank.AccountNumber);
        setIfscCode(getFrenciseResponse.data.data.Bank.IFSCCode);
        setBranchName(getFrenciseResponse.data.data.Bank.BranchName);


      
        // pestricid details
        setPstLicense(getFrenciseResponse.data.data.Presticide.LicenseNumber);
        setPstDate(getFrenciseResponse.data.data.Presticide.StartDate);
        setPstValidDate(getFrenciseResponse.data.data.Presticide.ValidUpto);
        // Seed details
        console.log("sanfsdjfs",getFrenciseResponse.data.data)
        setSeedLicense(getFrenciseResponse.data.data.Seed.LicenseNumber);
        setSeedDate(getFrenciseResponse.data.data.Seed.StartDate);
        setSeedValidDate(getFrenciseResponse.data.data.Seed.ValidUpto);
        // Fretilizer details
        setFertiLicense(getFrenciseResponse.data.data.Fretilizer.LicenseNumber);
        setFertiDate(getFrenciseResponse.data.data.Fretilizer.StartDate);
        setFertiValidDate(getFrenciseResponse.data.data.Fretilizer.ValidUpto);
      } else {
        return toast.error(`Something went wrong!`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  React.useEffect(() => {
    getAllDistrict();
    getFrenciseById();
  
  }, []);

  const stateApi = new StateApi();
  const allState = useSelector((state) => state.state.State);

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


  const checkFrenchise = useCallback(async () => {
    try {
      const state = await frenciseApi.checkFrenchise({
        frenchiseId: params.id,
        status :accept,
        description : discription
      });
      if (!state || !state.data.data) {
        return toast.error("no latest state available");
      } else {
       
        return toast.success("Franchise Update Successfully.");
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

  const districtApi = new DistrictApi();
  const allDistrict = useSelector((state) => state.district.District);

  async function handledistrict(event) {
    event.preventDefault();
    fetchDistrict(state)
  }

  const fetchDistrict = useCallback(async (stateID) => {
    const district = await districtApi.getDistrictByStateId({
        stateId: stateID,
      });
      if (district && district?.data?.code === 200) {
        return dispatch(updateAllDistrict(district.data.data));
      } else {
        return;
      }
  })

  const clusterApi = new FranchiseClusterApi();
  const clusterrows = useSelector(
    (state) => state.franchiseCluster.FranchiseCluster
  );

  const getAllDistrict = useCallback(async () => {
    try {
      const state = await clusterApi.getAllClusterFranchise({});
      if (!state || !state.data.data) {
        return toast.error("no latest state available");
      } else {
        dispatch(updateAllFranchiseCluster(state.data.data));
        setAllCluster(state.data.data);
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

  // Validation
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [isGstValid, setIsGstValid] = useState(false);
  const [gstMessage, setGstMessage] = useState("");
  const [isIfscValid, setIsIfscValid] = useState(false);
  const [ifscMessage, setIfscMessage] = useState("");

  const phoneValidation = () => {
    const regex = /^[6-9]\d{9}$/;
    return !(!number || regex.test(number) === false);
  };

  const phoneValid = () => {
    const isPhoneValid = phoneValidation();
    setIsValid(isPhoneValid);
    setMessage(isPhoneValid ? <></> : "Phone Number not valid!");
  };
  const emailValidation = () => {
    const regexEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i;
    return !(!email || regexEmail.test(email) === false);
  };

  const emailValid = () => {
    const isEmailValid = emailValidation();
    setIsEmailValid(isEmailValid);
    setEmailMessage(isEmailValid ? <></> : "Email not valid!");
  };
  const gstValidation = () => {
    const regexGst =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return !(!gstNo || regexGst.test(gstNo) === false);
  };

  const gstValid = () => {
    const isGstValid = gstValidation();
    setIsGstValid(isGstValid);
    setGstMessage(isGstValid ? <></> : "Gst number not valid!");
  };

  const ifscValidation = () => {
    const regexIfsc = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return !(!ifscCode || regexIfsc.test(ifscCode) === false);
  };

  const ifscValid = () => {
    const isIfscValid = ifscValidation();
    setIsIfscValid(isIfscValid);
    setIfscMessage(isIfscValid ? <></> : "Ifsc not valid!");
  };

  const handleAccept = (e) =>{
    setAccept(e.target.value);
}

 async function handleSubmit(event) {

    if(accept === "reject" && !discription){
        return toast.error('Please enter description...');
    }else{
        setIsLoading(true);
        event.preventDefault();
       
        const addFrenciseResponse = await frenciseApi.frenciseCheck({
         frenchiseId: params.id,
         status :accept,
         description : discription
       });
        if (addFrenciseResponse && addFrenciseResponse?.data?.code === 200) {
         setIsLoading(false);
          toast.success(`Updated successsfully`);
          navigate("/franchise-request");
        } else {
         setIsLoading(false);
          return toast.error(`Something went wrong!`);
        }
    }
   
 }

  return (
    <MainCard title="View Franchise Form">
      <form
        action="#"
        onSubmit={handleSubmit}
      >
        <Grid item>
          <Typography variant="h3">Company & User Detail</Typography>
        </Grid>
        <br />
        <br />
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Firm Name</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                disabled
                inputProps={{ maxLength: 30 }}
                value={firmName}
                onChange={(e) => setFirmName(e.target.value)}
                placeholder="Enter Firm Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Contact Person Name</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                disabled
                inputProps={{ maxLength: 30 }}
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                placeholder="Enter Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Address</InputLabel>
              <TextField
                fullWidth
                id="address"
                name="address"
                disabled
                inputProps={{ maxLength: 30 }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Email address</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                disabled
                type="email"
                onBlur={emailValid}
                inputProps={{ maxLength: 40 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
              <p style={{ color: "red" }}>{emailMessage}</p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Contact No.</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="number"
                disabled
                onBlur={phoneValid}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 10);
                }}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter Contact No."
              />
              <p style={{ color: "red" }}>{message}</p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Firm Type</InputLabel>
              <Select
                id="active"
                name="active"
                value={firmType}
                key={firmType}
                disabled
                onChange={(e) => setFirmType(e.target.value)}
              >
                <MenuItem value="Prop">Prop</MenuItem>
                <MenuItem value="LLP">LLP</MenuItem>
                <MenuItem value="PVT. LTD.">PVT. LTD.</MenuItem>
                <MenuItem value="FPO">FPO</MenuItem>
                <MenuItem value="Corporative">Corporative</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>GST No.</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="text"
                disabled
                onBlur={gstValid}
                value={gstNo}
                onChange={(e) => setGstNo(e.target.value)}
                placeholder="Enter GST No."
              />
              <p style={{ color: "red" }}>{gstMessage}</p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Village</InputLabel>
              <TextField
                fullWidth
                id="address"
                name="address"
                disabled
                inputProps={{ maxLength: 30 }}
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                placeholder="Enter Village"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Tehsil</InputLabel>
              <TextField
                fullWidth
                id="address"
                name="address"
                disabled
                inputProps={{ maxLength: 30 }}
                value={tehsil}
                onChange={(e) => setTehsil(e.target.value)}
                placeholder="Enter Tehsil"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Cluster</InputLabel>
              <Select
                id="state"
                name="state"
                value={block}
                disabled
                onChange={(e) => setBlock(e.target.value)}
              >
                {allClusters.map((state) => {
                  return (
                    <MenuItem value={state.BlockID}>{state.Name}</MenuItem>
                  );
                })}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>State</InputLabel>
              <Select
                id="state"
                name="state"
                value={state}
                disabled
                onChange={(e) => setState(e.target.value)}
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
                disabled
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
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Pin Code</InputLabel>
              <TextField
                fullWidth
                id="address"
                name="address"
                type="number"
                disabled
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="Enter Pin Code"
              />
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
                disabled
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
                disabled
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
                disabled
                onBlur={ifscValid}
                inputProps={{ maxLength: 15 }}
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                placeholder="Enter IFSC Code"
              />
              <p style={{ color: "red" }}>{ifscMessage}</p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Branch Name</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                disabled
                inputProps={{ maxLength: 30 }}
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                placeholder="Enter Branch Name"
              />
            </Stack>
          </Grid>
        </Grid>
        {/* license section */}
        <br />
        <br />
        <Grid item>
          <Typography variant="h3">License Info</Typography>
        </Grid>
        <br />
        <Grid container spacing={gridSpacing}>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Pesticide License No.</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="number"
                disabled
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 14);
                }}
                value={pstLicense}
                onChange={(e) => setPstLicense(e.target.value)}
                placeholder="Enter Pesticide License No."
              />
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Date</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                disabled
                type="date"
                inputProps={{ maxLength: 30 }}
                value={pstDate}
                onChange={(e) => setPstDate(e.target.value)}
                placeholder="Enter State Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Valid Upto</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="date"
                disabled
                inputProps={{ maxLength: 30 }}
                value={pstValidDate}
                onChange={(e) => setPstValidDate(e.target.value)}
                placeholder="Enter State Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Seed License No.</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="text"
                disabled
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 14);
                }}
                value={seedLicense}
                onChange={(e) => setSeedLicense(e.target.value)}
                placeholder="Enter Seed License No."
              />
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Date</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="date"
                disabled
                inputProps={{ maxLength: 30 }}
                value={seedDate}
                onChange={(e) => setSeedDate(e.target.value)}
                placeholder="Enter State Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Valid Upto</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="date"
                disabled
                inputProps={{ maxLength: 30 }}
                value={seedValidDate}
                onChange={(e) => setSeedValidDate(e.target.value)}
                placeholder="Enter State Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Fertilizer License No.</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                disabled
                type="number"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 14);
                }}
                value={fertiLicense}
                onChange={(e) => setFertiLicense(e.target.value)}
                placeholder="Enter Fertilizer License No."
              />
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Date</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="date"
                disabled
                inputProps={{ maxLength: 30 }}
                value={fertiDate}
                onChange={(e) => setFertiDate(e.target.value)}
                placeholder="Enter State Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={4} md={4}>
            <Stack>
              <InputLabel required>Valid Upto</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                type="date"
                disabled
                inputProps={{ maxLength: 30 }}
                value={fertiValidDate}
                onChange={(e) => setFertiValidDate(e.target.value)}
                placeholder="Enter State Name"
              />
            </Stack>
          </Grid>
        </Grid>
        <br />
        {/* <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Accept Or Reject</InputLabel>
              <Select
                id="accept"
                name="accept"
                
                value={accept}
                onChange={(e) => handleAccept(e)}
              >
                <MenuItem value="accept">Accept</MenuItem>
                <MenuItem value="reject">Reject</MenuItem>
              </Select>
            </Stack>
          </Grid>
          {accept === 'Reject' ? (
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
        <br />
        <center>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Button variant="contained" type="submit">
                Update Status
              </Button>
            </>
          )}
        </center> */}
      </form>
    </MainCard>
  );
}

export default App;
