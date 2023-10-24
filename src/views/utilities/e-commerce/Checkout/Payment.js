import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "store";

// material-ui
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  RadioGroup,
  Radio,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

// third-party
import currency from "currency.js";

// project imports
import OrderSummary from "./OrderSummary";
import AddressCard from "./AddressCard";
import PaymentSelect from "./PaymentSelect";
import ColorOptions from "../ColorOptions";
import PaymentOptions from "./PaymentOptions";
import PaymentCard from "./PaymentCard";
import AddPaymentCard from "./AddPaymentCard";
import OrderComplete from "./OrderComplete";
import SubCard from "ui-component/cards/SubCard";
import Avatar from "ui-component/extended/Avatar";
import { openSnackbar } from "store/slices/snackbar";
import { gridSpacing } from "store/constant";

// assets
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { setPaymentCard, setPaymentMethod } from "store/slices/cart";

import { toast } from "react-hot-toast";
import CodApi from "../../../../api/cod.api";

const prodImage = require.context("assets/images/e-commerce", true);

// product color select
function getColor(color) {
  return ColorOptions.filter((item) => item.value === color);
}

// ==============================|| CHECKOUT PAYMENT - MAIN ||============================== //

const Payment = ({ checkout, onBack, onNext, handleShippingCharge }) => {
  const dispatch = useDispatch();
  const codApi = new CodApi();
  const [type, setType] = useState(checkout.payment.type);
  const [payment, setPayment] = useState(checkout.payment.method);
  const [rows, setRows] = useState(checkout.products);
  const [cards, setCards] = useState(checkout.payment.card);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (checkout.step > 2) {
      setComplete(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setRows(checkout.products);
  }, [checkout.products]);

  const cardHandler = (card) => {
    if (payment === "card") {
      setCards(card);
      dispatch(setPaymentCard(card));
    }
  };

  const handlePaymentMethod = (value) => {
    setPayment(value);
    dispatch(setPaymentMethod(value));
  };

  const completeHandler = async (event) => {
    event.preventDefault();
    // setComplete(true);
    // setIsLoading(true);
    if (payment === "cod") {
      const addServiceRequestResponse = await codApi.getCod({
        cartId: localStorage.getItem("cartKey"),
      });
      if (
        addServiceRequestResponse &&
        addServiceRequestResponse?.data?.code === 200
      ) {
        toast.success(`Order completed`);
        // localStorage.clear();
        // onNext();
      } else {
        return toast.error(`Something went wrong!`);
      }
    } else if (payment === "phonepe") {
      const paymentResponse = await codApi.getPhonePay({
        cartId: localStorage.getItem("cartKey"),
        type: "Franchise",
      });
      if (paymentResponse && paymentResponse.data.code == 200) {
        // toast.success(`Payment successfull`)
        // localStorage.clear();
        window.location.href = `${paymentResponse.data.data.data.instrumentResponse.redirectInfo.url}`;
      }
    }
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={6} lg={8} xl={9}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Payment Options</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl>
              <RadioGroup
                aria-label="delivery-options"
                value={payment}
                onChange={(e) => handlePaymentMethod(e.target.value)}
                name="delivery-options"
              >
                <Grid container spacing={gridSpacing} alignItems="center">
                  {PaymentOptions.map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <PaymentSelect item={item} />
                    </Grid>
                  ))}
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <Button
                  variant="text"
                  startIcon={<KeyboardBackspaceIcon />}
                  onClick={onBack}
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={completeHandler}>
                  Complete Order
                </Button>
                <OrderComplete open={complete} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Stack>
              <Typography variant="subtitle1" sx={{ pb: 2 }}>
                Cart Items
              </Typography>
              <TableContainer>
                <Table sx={{ minWidth: 280 }} aria-label="simple table">
                  <TableBody>
                    {rows.map((row, index) => {
                      return (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-of-type td, &:last-of-type th": {
                              border: 0,
                            },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Grid container alignItems="center" spacing={2}>
                              <Grid item>
                                <Avatar
                                  size="md"
                                  variant="rounded"
                                  src={row.image}
                                />
                              </Grid>
                              <Grid item>
                                <Stack spacing={0}>
                                  <Typography variant="subtitle1">
                                    {row.name}
                                  </Typography>
                                  <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={1}
                                  ></Stack>
                                </Stack>
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="right">
                            {row.offerPrice && row.quantity && (
                              <Typography variant="subtitle1">
                                {currency(
                                  row.offerPrice * row.quantity
                                ).format()}
                              </Typography>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <OrderSummary checkout={checkout} />
          </Grid>
          <Grid item xs={12}>
            <AddressCard
              single
              change
              address={checkout.billing}
              onBack={onBack}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Payment.propTypes = {
  checkout: PropTypes.object,
  handleShippingCharge: PropTypes.func,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};

export default Payment;
