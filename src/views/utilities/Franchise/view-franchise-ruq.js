import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

function App() {
  const params = useParams();
  const navigate = useNavigate();
  const [active, setActive] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      frenchiseId: params.id,
      status: active,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}frenciseCheck`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/franchise-request");
          toast.success("Updated Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {});
  }

  function getFrenciseById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      frenchiseId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getFrenciseById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setFirmName(result.data.FirmName);
        setPerson(result.data.Name);
        setEmail(result.data.Email);
        setGstNo(result.data.GstNumber);
        setFirmType(result.data.FirmType);
        setNumber(result.data.Contact);
        setAddress(result.data.Address);
        setCity(result.data.City);
        setState(result.data.State);
        setPinCode(result.data.PinCode);
        // bank details
        setBankName(result.data.Bank.BankName);
        setAcNumber(result.data.Bank.AccountNumber);
        setIfscCode(result.data.Bank.IFSCCode);
        setBranchName(result.data.Bank.BranchName);
        // pestricid details
        setPstLicense(result.data.Presticide.LicenseNumber);
        setPstDate(result.data.Presticide.StartDate);
        setPstValidDate(result.data.Presticide.ValidUpto);
        // Seed details
        setSeedLicense(result.data.Seed.LicenseNumber);
        setSeedDate(result.data.Seed.StartDate);
        setSeedValidDate(result.data.Seed.ValidUpto);
        // Fretilizer details
        setFertiLicense(result.data.Fretilizer.LicenseNumber);
        setFertiDate(result.data.Fretilizer.StartDate);
        setFertiValidDate(result.data.Fretilizer.ValidUpto);
      })
      .catch((error) => console.log("error", error));
  }

  React.useEffect(() => {
    getFrenciseById();
  }, []);

  return (
    <MainCard title="Accept Or Reject Franchise">
      <form action="#" onSubmit={handleSubmit}>
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
                disabled
                name="state"
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
                disabled
                name="state"
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
                disabled
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
              <InputLabel required>Email address</InputLabel>
              <TextField
                fullWidth
                id="state"
                name="state"
                disabled
                type="email"
                inputProps={{ maxLength: 40 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Contact No.</InputLabel>
              <TextField
                fullWidth
                id="state"
                disabled
                name="state"
                type="number"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 10);
                }}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter Contact No."
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Firm Type</InputLabel>
              <Select
                id="active"
                disabled
                name="active"
                value={firmType}
                key={firmType}
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
                disabled
                type="number"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 13);
                }}
                value={gstNo}
                onChange={(e) => setGstNo(e.target.value)}
                placeholder="Enter GST No."
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>City</InputLabel>
              <TextField
                fullWidth
                id="address"
                disabled
                name="address"
                inputProps={{ maxLength: 30 }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>State</InputLabel>
              <TextField
                fullWidth
                id="address"
                disabled
                name="address"
                inputProps={{ maxLength: 30 }}
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter State"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Pin Code</InputLabel>
              <TextField
                fullWidth
                id="address"
                disabled
                name="address"
                type="number"
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
                disabled
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
                disabled
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
                disabled
                type="text"
                inputProps={{ maxLength: 15 }}
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                placeholder="Enter IFSC Code"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Branch Name</InputLabel>
              <TextField
                fullWidth
                id="state"
                disabled
                name="state"
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
                disabled
                name="state"
                type="number"
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
                disabled
                name="state"
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
                disabled
                name="state"
                type="date"
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
                disabled
                type="number"
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
                disabled
                type="date"
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
                disabled
                type="date"
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
                disabled
                type="date"
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
        <br />

        <Grid item xs={6} md={6}>
          <Stack>
            <InputLabel required>Active</InputLabel>
            <Select
              id="active"
              name="active"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            >
              <MenuItem value="Accept">Accept</MenuItem>
              <MenuItem value="Reject">Reject</MenuItem>
            </Select>
          </Stack>
        </Grid>
        {/* </Grid> */}
        <br></br>
        <center>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" type="submit">
              Update User
            </Button>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
