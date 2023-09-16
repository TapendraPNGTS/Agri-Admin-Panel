import { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";

// third party
import { Formik } from "formik";

// project imports
import useScriptRef from "hooks/useScriptRef";
import AnimateButton from "ui-component/extended/AnimateButton";

// import Google from 'assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ loginProp, ...others }) => {
  const navigate = useNavigate();
  const params = useParams();
  if (!localStorage.getItem("token") === "") {
    window.location.href = "/dashboard";
  } else if (localStorage.getItem("token") === "") {
    window.location.href = "/";
  }

  const theme = useTheme();
  const scriptedRef = useScriptRef();
  // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [isLoading, setIsLoading] = useState(false);
  const [isVerify, setIsVerify] = useState(false);

  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [staffId, setStaffId] = useState("");

  const handleNewPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validatePasswords = () => {
    if (newPassword !== confirmPassword) {
      return "Passwords do not match.";
    }

    if (newPassword.length < 6) {
      return "Password must be at least 6 characters.";
    }

    return ""; // No errors
  };

  function getAllBanner() {
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      token: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}verifyEmailToken`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          setStaffId(result.data.StaffID);
          setIsVerify(true);
        } else {
          setIsVerify(false);
        }
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getAllBanner();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const error = validatePasswords();

    if (error) {
      setPasswordError(error);
    } else {
      setPasswordError(""); // Clear any previous error
      alert("Passwords are valid!"); // Replace with your actual submission logic
    }
    setIsLoading(true);
    var myHeaders = new Headers();

    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      adminId: staffId,
      password: newPassword,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}forgetPassword`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/");
          toast.success("Change Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else if (result.code == 201) {
          setIsLoading(false);
          toast.error(result.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      })
      .catch((error) => {});
  }

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
      >
        {isVerify ? (
          <>
            <form noValidate onSubmit={handleSubmit} {...others}>
              <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-password-login">
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type={"number"}
                  name="new-password"
                  value={newPassword}
                  label="New Password"
                  onChange={handleNewPasswordChange}
                />
              </FormControl>
              <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-password-login">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type={"number"}
                  name="confirm-password"
                  value={confirmPassword}
                  label="Confirm Password"
                  onChange={handleConfirmPasswordChange}
                />
              </FormControl>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
              ></Stack>

              <Box sx={{ mt: 2 }}>
                {isLoading ? (
                  <Spinner animation="grow" />
                ) : (
                  <AnimateButton>
                    <Button
                      disableElevation
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="secondary"
                    >
                      Verify OTP
                    </Button>
                  </AnimateButton>
                )}
              </Box>
            </form>
          </>
        ) : (
          <><center><span style={{color:'red'}}>The Token Is expire</span></center></>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
