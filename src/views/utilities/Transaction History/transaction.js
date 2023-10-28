import React, {useState} from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function PurchaseHistory() {

const[all,setAll]= useState('all')


function handleClick(index){
    setAll(index);    
}

  return (
    <>
      <MainCard
        title={
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          >
            <Grid item style={{ cursor: "pointer" }}>
              <Typography
                variant="h5"
                style={all === "all" ? { color: "blue" } : { color: "" }}
                onClick={() => handleClick("all")}
              >
                All
              </Typography>
            </Grid>
            <Grid item style={{ cursor: "pointer" }}>
              <Typography
                variant="h5"
                style={all === "Completed" ? { color: "blue" } : { color: "" }}
                onClick={() => handleClick("Completed")}
              >
                Completed
              </Typography>
            </Grid>
            <Grid item style={{ cursor: "pointer" }}>
              <Typography
                variant="h5"
                style={all === "Pending" ? { color: "blue" } : { color: "" }}
                onClick={() => handleClick(2)}
              >
                Pending
              </Typography>
            </Grid>
            <Grid item style={{ cursor: "pointer" }}>
              <Typography
                variant="h5"
                style={all === "COD" ? { color: "blue" } : { color: "" }}
                onClick={() => handleClick(3)}
              >
                COD
              </Typography>
            </Grid>
            <Grid item style={{ cursor: "pointer" }}>
              <Typography
                variant="h5"
                style={
                  all === "Payment Gateway" ? { color: "blue" } : { color: "" }
                }
                onClick={() => handleClick(4)}
              >
                Payment Gateway
              </Typography>
            </Grid>
            <br />
            <hr />
            <Grid item>
              <Typography
                variant="h3"
                style={all === 5 ? { color: "blue" } : { color: "" }}
                onClick={() => handleClick(5)}
              >
                Transaction History
              </Typography>
            </Grid>
          </Grid>
        }
        content={false}
      >
        {/* {rows ? ( */}
        <Card>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 540 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ pl: 3 }}>S No.</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Invoice Id</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="center" sx={{ pr: 3 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return ( */}
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    // key={row.code}
                  >
                    {all === 0 ? (
                      <>
                        <TableCell align="start">
                          &nbsp;&nbsp;1.
                          {/* {index + 1} */}
                        </TableCell>
                        <TableCell align="start">
                          Abhishek Patel
                          {/* {row.UserID.Name} */}
                        </TableCell>
                        <TableCell align="start">
                          20-10-2023
                          {/* {row.Amount} */}
                        </TableCell>
                        <TableCell align="start">
                          12215455454848484
                          {/* {row.TransacationId} */}
                        </TableCell>
                        <TableCell align="start">
                          4015/-
                          {/* {format(
                                new Date(row.PaymentDate),
                                "E, MMM d yyyy"
                              )} */}
                        </TableCell>
                        <TableCell align="start">
                          Complete {/* {row.Status} */}
                        </TableCell>
                        <TableCell align="center" sx={{ pr: 3 }}>
                          <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Tooltip placement="top" title="view">
                              <Link
                              // to={`/view-purchase-history/${row.PaymentID}`}
                              //   onClick={()=>handleHistory(row.PaymentID)}
                              >
                                <IconButton
                                  color="primary"
                                  aria-label="view"
                                  size="large"
                                >
                                  <RemoveRedEyeIcon
                                    sx={{ fontSize: "1.1rem" }}
                                  />
                                </IconButton>
                              </Link>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </>
                    ) : all === 1 ? (
                      <>
                        <TableCell align="start">
                          &nbsp;&nbsp;1.
                          {/* {index + 1} */}
                        </TableCell>
                        <TableCell align="start">
                          Aman Patel
                          {/* {row.UserID.Name} */}
                        </TableCell>
                        <TableCell align="start">
                          20-10-2023
                          {/* {row.Amount} */}
                        </TableCell>
                        <TableCell align="start">
                          12215455454848484
                          {/* {row.TransacationId} */}
                        </TableCell>
                        <TableCell align="start">
                          4015/-
                          {/* {format(
                                new Date(row.PaymentDate),
                                "E, MMM d yyyy"
                              )} */}
                        </TableCell>
                        <TableCell align="start">
                          Complete {/* {row.Status} */}
                        </TableCell>
                        <TableCell align="center" sx={{ pr: 3 }}>
                          <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Tooltip placement="top" title="view">
                              <Link
                              // to={`/view-purchase-history/${row.PaymentID}`}
                              //   onClick={()=>handleHistory(row.PaymentID)}
                              >
                                <IconButton
                                  color="primary"
                                  aria-label="view"
                                  size="large"
                                >
                                  <RemoveRedEyeIcon
                                    sx={{ fontSize: "1.1rem" }}
                                  />
                                </IconButton>
                              </Link>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell align="start">
                          &nbsp;&nbsp;1.
                          {/* {index + 1} */}
                        </TableCell>
                        <TableCell align="start">
                          Ratnesh Patel
                          {/* {row.UserID.Name} */}
                        </TableCell>
                        <TableCell align="start">
                          20-10-2023
                          {/* {row.Amount} */}
                        </TableCell>
                        <TableCell align="start">
                          12215455454848484
                          {/* {row.TransacationId} */}
                        </TableCell>
                        <TableCell align="start">
                          4015/-
                          {/* {format(
                                new Date(row.PaymentDate),
                                "E, MMM d yyyy"
                              )} */}
                        </TableCell>
                        <TableCell align="start">
                          Complete {/* {row.Status} */}
                        </TableCell>
                        <TableCell align="center" sx={{ pr: 3 }}>
                          <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Tooltip placement="top" title="view">
                              <Link
                              // to={`/view-purchase-history/${row.PaymentID}`}
                              //   onClick={()=>handleHistory(row.PaymentID)}
                              >
                                <IconButton
                                  color="primary"
                                  aria-label="view"
                                  size="large"
                                >
                                  <RemoveRedEyeIcon
                                    sx={{ fontSize: "1.1rem" }}
                                  />
                                </IconButton>
                              </Link>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                  {/* );
                      })} */}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <TablePagination
                rowsPerPageOptions={[10, 20, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
          </Paper>
        </Card>
        {/* ) : ( */}
        <>
          {/* <br></br>
            <center>
              <CircularProgress />
            </center> */}
        </>
        {/* )} */}
      </MainCard>
    </>
  );
}

// export default PurchaseHistory
