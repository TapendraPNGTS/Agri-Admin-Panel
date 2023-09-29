import React, { useState, useEffect } from "react";
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
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
function App() {
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
        setBankName(result.data.Bank.BankName)
        setAcNumber(result.data.Bank.AccountNumber)
        setIfscCode(result.data.Bank.IFSCCode)
        setBranchName(result.data.Bank.BranchName)
        // pestricid details
        setPstLicense(result.data.Presticide.LicenseNumber)
        setPstDate(result.data.Presticide.StartDate)
        setPstValidDate(result.data.Presticide.ValidUpto)
        // Seed details
        setSeedLicense(result.data.Seed.LicenseNumber)
        setSeedDate(result.data.Seed.StartDate)
        setSeedValidDate(result.data.Seed.ValidUpto)
        // Fretilizer details
        setFertiLicense(result.data.Fretilizer.LicenseNumber)
        setFertiDate(result.data.Fretilizer.StartDate)
        setFertiValidDate(result.data.Fretilizer.ValidUpto)
      })
      .catch((error) => console.log("error", error));
  }

  React.useEffect(() => {
    getFrenciseById();
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
    const regex =  /^[6-9]\d{9}$/;
    return !(!number || regex.test(number) === false);
  };

  const phoneValid = () => {
    const isPhoneValid = phoneValidation();
    setIsValid(isPhoneValid);
    setMessage(isPhoneValid ? <></> : "Phone Number not valid!" );
  } 
  const emailValidation = () => {
    const regexEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i;
    return !(!email || regexEmail.test(email) === false);
  };

  const emailValid = () => {
    const isEmailValid = emailValidation();
    setIsEmailValid(isEmailValid);
    setEmailMessage(isEmailValid ? <></> : "Email not valid!" );
  } 
  const gstValidation = () => {
    const regexGst = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return !(!gstNo || regexGst.test(gstNo) === false);
  };

  const gstValid = () => {
    const isGstValid = gstValidation();
    setIsGstValid(isGstValid);
    setGstMessage(isGstValid ? <></> : "Gst number not valid!" );
  } 

  const ifscValidation = () => {
    const regexIfsc = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return !(!ifscCode || regexIfsc.test(ifscCode) === false);
  };

  const ifscValid = () => {
    const isIfscValid = ifscValidation();
    setIsIfscValid(isIfscValid);
    setIfscMessage(isIfscValid ? <></> : "Ifsc not valid!" );
  } 

  function handleSubmit(event) {
    event.preventDefault();
    const bank = {
      BankName: bankName,
      AccountNumber: acNumber,
      BranchName: branchName,
      IFSCCode: ifscCode,
    }
    const presticide = {
      LicenseNumber: pstLicense,
      StartDate: seedDate,
      ValidUpto: pstValidDate,
    }
    const seed = {
      LicenseNumber: seedLicense,
      StartDate: pstDate,
      ValidUpto: seedValidDate,
    }
    const fertilizer = {
      LicenseNumber: fertiLicense,
      StartDate: fertiDate,
      ValidUpto: fertiValidDate,
    }
    setIsLoading(true);
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      frenchiseId: params.id,
      name : person,
      firmName: firmName,
      address: address,
      email: email,
      contact: number,
      firmType: firmType,
      gst: gstNo,
      city: city,
      state: state,
      pincode: pinCode,
      bank: bank,
      presticide: presticide,
      seed: seed,
      fertilizer: fertilizer,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}editFrencise`, requestOptions)
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

  return (
    <MainCard title="Edit Franchise Form">
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
                type="email"
                onBlur={emailValid}
                inputProps={{ maxLength: 40 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
              <p style={{color:'red'}}>{emailMessage}</p>
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
              <p style={{color:"red"}}>{message}</p>
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
                onBlur={gstValid}
                value={gstNo}
                onChange={(e) => setGstNo(e.target.value)}
                placeholder="Enter GST No."
              />
              <p style={{color:"red"}}>{gstMessage}</p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>City</InputLabel>
              <TextField
                fullWidth
                id="address"
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
              <p style={{color:'red'}}>{ifscMessage}</p>
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
        <center>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Button variant="contained" type="submit">
                Update Request
              </Button>
            </>
          )}
        </center>
      </form>
    </MainCard>
  );
}

export default App;
