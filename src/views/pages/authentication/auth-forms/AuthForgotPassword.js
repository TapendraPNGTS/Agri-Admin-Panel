// material-ui
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useDispatch } from "store";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { toast } from "react-toastify";
// project imports
import AnimateButton from "ui-component/extended/AnimateButton";
import useAuth from "hooks/useAuth";
import useScriptRef from "hooks/useScriptRef";
import { openSnackbar } from "store/slices/snackbar";

// ========================|| FIREBASE - FORGOT PASSWORD ||======================== //

const AuthForgotPassword = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      email: email,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}resetToken`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/verify-otp");
          toast.success("Change Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else if (result.code == 201) {
          setIsLoading(false)
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
    <Formik
      initialValues={{
        email: "",
        password: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await resetPassword(values.email);
          if (scriptedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
            dispatch(
              openSnackbar({
                open: true,
                message: "Check mail for reset password link",
                variant: "alert",
                alert: {
                  color: "success",
                },
                close: false,
              })
            );
            setTimeout(() => {
              navigate("/login", { replace: true });
            }, 500);
          }
        } catch (err) {
          console.error(err);
          if (scriptedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }
      }}
    >
      <form noValidate onSubmit={handleSubmit} {...others}>
        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-email-forgot">
            Email Address
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email-forgot"
            type="email"
            name="email"
            label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <center>
            <AnimateButton>
              {isLoading ? (
                <Spinner animation="grow" />
              ) : (
                <Button
                  disableElevation
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Send Mail
                </Button>
              )}
            </AnimateButton>
          </center>
        </Box>
      </form>
    </Formik>
  );
};

export default AuthForgotPassword;
