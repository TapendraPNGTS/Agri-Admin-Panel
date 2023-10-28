import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import "react-toastify/dist/ReactToastify.css";
import {
  IconButton,
  Stack,
  Tooltip,
  Chip,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import OrderHistoryApi from "../../../../api/orderHistory.api";
import { updateAllOrderHistory } from "../../../../redux/redux-slice/orderHistory.slice";
import EditIcon from "@mui/icons-material/Edit";

export default function PurchaseHistory() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const params = useParams();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch();
  const orderHistoryApi = new OrderHistoryApi();
  const rows = useSelector((state) => state.orderHistory.OrderHistory);

  const getAllFranchisComplete = useCallback(async () => {
    try {
      const orderHistory = await orderHistoryApi.getAllFranchisPending({});
      if (!orderHistory || !orderHistory.data.data) {
        return toast.error("no latest order history available");
      } else {
        dispatch(updateAllOrderHistory(orderHistory.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getAllFranchisComplete();
  }, []);

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
            <Grid item>
              <Typography variant="h3">Pending Order</Typography>
            </Grid>
          </Grid>
        }
        content={false}
      >
        {rows ? (
          <Card>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 540 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ pl: 3 }}>S No.</TableCell>
                      <TableCell>Order Date</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Contact</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Payment Type</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="center" sx={{ pr: 3 }}>
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            <TableCell align="start">{index + 1}</TableCell>
                            <TableCell align="start">
                              {format(new Date(row.createdAt), "E, MMM d yyyy")}
                            </TableCell>
                            <TableCell align="start">
                              {row.userId.UserName}
                            </TableCell>
                            <TableCell align="start">
                              {row.userId.Contact}
                            </TableCell>
                            <TableCell align="start">
                              {row.totalPrice}
                            </TableCell>
                            <TableCell align="start">
                              {row.paymentType}
                            </TableCell>
                            <TableCell>
                              {row.status === "Paid" ? (
                                <Chip
                                  label="Completed"
                                  color="success"
                                  size="small"
                                />
                              ) : (
                                <Chip
                                  label="Pending"
                                  color="error"
                                  size="small"
                                />
                              )}
                            </TableCell>
                            <TableCell align="center" sx={{ pr: 3 }}>
                              <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <Tooltip placement="top" title="view">
                                  {/* <Link to={`/view-purchase-history/${row.PaymentID}`}  */}
                                  {/* onClick={()=>handleHistory(row.PaymentID)} */}
                                  {/* > */}
                                  {/* <a href={row.invoice} target="_blank"> */}
                                    <IconButton
                                      color="primary"
                                      aria-label="download"
                                      size="large"
                                    >
                                      <EditIcon sx={{ fontSize: "1.1rem" }} />
                                    </IconButton>
                                  {/* </a> */}
                                  {/* </Link> */}
                                </Tooltip>
                              </Stack>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 20, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Card>
        ) : (
          <>
            <br></br>
            <center>
              <CircularProgress />
            </center>
          </>
        )}
      </MainCard>
    </>
  );
}

// export default PurchaseHistory
