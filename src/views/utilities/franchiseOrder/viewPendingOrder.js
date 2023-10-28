import React from "react";
import {
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Container,    
} from "@mui/material";

import Avatar from "ui-component/extended/Avatar";
// import { useTheme } from "@mui/material/styles";

const viewPendingOrder = () => {
  //   const theme = useTheme();
  return (
    <Grid item xs={12}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              borderTop: "1px solid",
              //   color:
              //     theme.palette.mode === "dark"
              //       ? theme.palette.dark.light + 15
              //       : "grey.200",
            }}
          >
            <TableRow>
              <TableCell>Farmer Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="center">OrderId</TableCell>
              <TableCell align="right">Transaction Id</TableCell>
              <TableCell align="right">Mode Of Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row, index) => {
              const colorsData = row.color ? getColor(row.color) : false;
              return ( */}
            <TableRow
              //   key={index}
              sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Stack spacing={0}>
                      <Typography variant="subtitle1">
                        {/* {row.name} */}
                        Abhi
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align="right">
                <Stack>
                  {/* {row.offerPrice && ( */}
                  <Typography variant="subtitle1">
                    {/* ₹{row.offerPrice} */}
                    21 Vijay Nagar Indore
                  </Typography>
                  {/* )} */}
                </Stack>
              </TableCell>
              <TableCell align="center">
                {/* <Increment
                  quantity={row.quantity}
                  itemId={row.itemId}
                  updateQuantity={updateQuantity}
                /> */}
                264564fjddjfs
              </TableCell>
              <TableCell align="right">
                {/* {row.offerPrice && row.quantity && ( */}
                <Typography variant="subtitle1">
                  {/* ₹{row.offerPrice * row.quantity} */}
                  6545455kASDJS5545
                </Typography>
                {/* )} */}
              </TableCell>
              <TableCell align="right">
                {/* {row.offerPrice && row.quantity && ( */}
                <Typography variant="subtitle1">
                  {/* ₹{row.offerPrice * row.quantity} */}
                  Cash
                </Typography>
                {/* )} */}
              </TableCell>
            </TableRow>
            {/* );
            })} */}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              borderTop: "1px solid",
              //   color:
              //     theme.palette.mode === "dark"
              //       ? theme.palette.dark.light + 15
              //       : "grey.200",
            }}
          >
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row, index) => {
              const colorsData = row.color ? getColor(row.color) : false;
              return ( */}
            <TableRow
              //   key={index}
              sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar
                      size="md"
                      variant="rounded"
                      //   src={`${process.env.REACT_APP_IMAGE_URL}${row.image}`}
                    />
                  </Grid>
                  <Grid item>
                    <Stack spacing={0}>
                      <Typography variant="subtitle1">
                        {/* {row.name} */}
                        Rama Zyme
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align="right">
                <Stack>
                  {/* {row.offerPrice && ( */}
                  <Typography variant="subtitle1">
                    {/* ₹{row.offerPrice} */}
                    ₹2051
                  </Typography>
                  {/* )} */}
                </Stack>
              </TableCell>
              <TableCell align="center">
                {/* <Increment
                  quantity={row.quantity}
                  itemId={row.itemId}
                  updateQuantity={updateQuantity}
                /> */}
                2
              </TableCell>
              <TableCell align="right">
                {/* {row.offerPrice && row.quantity && ( */}
                <Typography variant="subtitle1">
                  {/* ₹{row.offerPrice * row.quantity} */}
                  ₹4102
                </Typography>
                {/* )} */}
              </TableCell>
            </TableRow>
            {/* );
            })} */}
          </TableBody>
        </Table>
      </TableContainer>

      <section style={{ backgroundColor: "#eee" }}>
        <Container>
          <Typography variant="h4" sx={{ color: "#f37a27", mt: 4, pb: 2 }}>
            Tracking Order
          </Typography>

          <Grid container>
            <Grid item lg={8}>
              <div>
                <ul
                  className="list-inline items d-flex justify-content-between"
                  sx={{ listStyleType: "none", padding: 0 }}
                >
                  <li className="list-inline-item items-list">
                    <Paper
                      elevation={0}
                      sx={{ backgroundColor: "#39AD4A", px: 2, py: 1 }}
                      style={{ color: "white" }}
                    >
                      Ordered
                    </Paper>
                  </li>
                  <li className="list-inline-item items-list">
                    <Paper elevation={0} sx={{ px: 2, py: 1 }}>
                      Shipped
                    </Paper>
                  </li>
                  <li className="list-inline-item items-list">
                    <Paper
                      elevation={0}
                      sx={{ backgroundColor: "#f37a27", px: 2, py: 1 }}
                      style={{ color: "white" }}
                    >
                      On the way
                    </Paper>
                  </li>
                  <li className="list-inline-item items-list">
                    <Paper
                      elevation={0}
                      sx={{ backgroundColor: "#f37a27", px: 2, py: 1 }}
                      style={{ color: "white" }}
                    >
                      Delivered
                    </Paper>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>

          <Typography variant="body1" sx={{ mt: 4, mb: 0 }}>
            Want any help?{" "}
            <a href="#!" style={{ color: "#f37a27" }}>
              Please contact us
            </a>
          </Typography>
        </Container>
      </section>
    </Grid>
  );
};

export default viewPendingOrder;
