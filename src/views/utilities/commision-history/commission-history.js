import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { formatDate } from "utils/common.utils";
import {
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TransactionAPi from "../../../api/transaction.api";
import { useEffect, useCallback } from "react";

export default function CommissionHistory() {

  const [search, setSearch] = useState("");

  const [all, setAll] = useState('all')
  const [transaction, setTransaction] = useState([])
  const transactionApi = new TransactionAPi();

  function handleClick(index) {
    // setAll(index);
    // getTransaction();
  }


  const getTransaction = useCallback(async (allvalue) => {
    try {
      const block = await transactionApi.getAllCommissionHistory();
      if (!block || !block.data.data) {
        return toast.error("no latest user available");
      } else {
        
        setTransaction(block.data.data)
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  })


  useEffect(() => {
    getTransaction(all);
  }, []);



  return (
    <>
    <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        fullWidth
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <MainCard
        // title={
        //   // <Grid
        //   //   container
        //   //   alignItems="center"
        //   //   justifyContent="space-between"
        //   //   spacing={gridSpacing}
        //   // >
        //   //   <Grid item style={{ cursor: "pointer" }}>
        //   //     <Typography
        //   //       variant="h5"
        //   //       style={all === "all" ? { color: "blue" } : { color: "" }}
        //   //       onClick={(e) => {
        //   //         setAll("all");
        //   //         getTransaction("all");
        //   //        }}
        //   //     >
        //   //       All
        //   //     </Typography>
        //   //   </Grid>
        //   //   {/* <Grid item style={{ cursor: "pointer" }}>
        //   //     <Typography
        //   //       variant="h5"
        //   //       style={all === "completed" ? { color: "blue" } : { color: "" }}
        //   //       onClick={(e) => {
        //   //          setAll("completed");
        //   //          getTransaction("complete");
        //   //         }}
        //   //     >
        //   //       Completed
        //   //     </Typography>
        //   //   </Grid>
        //   //   <Grid item style={{ cursor: "pointer" }}>
        //   //     <Typography
        //   //       variant="h5"
        //   //       style={all === "pending" ? { color: "blue" } : { color: "" }}
        //   //       onClick={(e) => 
        //   //       {setAll("pending");
        //   //       getTransaction("pending");}
        //   //     }
        //   //     >
        //   //       Pending
        //   //     </Typography>
        //   //   </Grid>
        //   //   <Grid item style={{ cursor: "pointer" }}>
        //   //     <Typography
        //   //       variant="h5"
        //   //       style={all === "cod" ? { color: "blue" } : { color: "" }}
        //   //       onClick={(e) => {setAll("cod");
        //   //       getTransaction("cod");}}
        //   //     >
        //   //       COD
        //   //     </Typography>
        //   //   </Grid>
        //   //   <Grid item style={{ cursor: "pointer" }}>
        //   //     <Typography
        //   //       variant="h5"
        //   //       style={
        //   //         all === "Payment Gateway" ? { color: "blue" } : { color: "" }
        //   //       }
        //   //       onClick={(e) => {setAll("Payment Gateway");
        //   //       getTransaction("Payment Gateway");}}
        //   //     >
        //   //       Payment Gateway
        //   //     </Typography>
        //   //   </Grid> */}
        //   //   <br />
        //   //   <hr />
        //   //   <Grid item>
        //   //     {/* <Typography
        //   //       variant="h3"
        //   //       style={all === 5 ? { color: "blue" } : { color: "" }}
        //   //       onClick={() => handleClick(5)}
        //   //     >
        //   //       Transaction History
        //   //     </Typography> */}
        //   //   </Grid>
        //   // </Grid>
        // }
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
                    <TableCell>Product Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Incharage </TableCell>
                    <TableCell>Incharage Name </TableCell>
                    <TableCell>Commission Amount</TableCell>
                    <TableCell>Commission %</TableCell>
                    <TableCell>Amount</TableCell>
                  
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

                  {transaction
                  .filter((row) =>
                  search === ""
                    ? row
                    :  row.ProductID.Name.toLowerCase().includes(
                      search.toLowerCase()
                    ) || row.CommissionPer.toString().toLowerCase().includes(
                      search.toLowerCase()
                    ) || row.CommissionPer.toString().includes(
                      search
                    ) || row.Type.toLowerCase().includes(
                      search.toLowerCase()
                    ) || row.FranchiseID.UserName.toLowerCase().includes(
                      search.toLowerCase()
                    )
                ).map((row, index) => {
                    return (
                      <>
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                        // key={row.code}
                        >
                          <TableCell align="center">

                            {index + 1}
                          </TableCell>
                          <TableCell align="start">
                            {row.ProductID.Name}
                          </TableCell>
                          <TableCell align="start">
                            {formatDate(row.createdAt)}
                          </TableCell>
                          <TableCell align="start">
                            {row.Type}
                          </TableCell>
                          <TableCell align="start">
                            {row.FranchiseID.UserName}
                          </TableCell>
                          <TableCell align="start">
                          <b> ₹ {row.Commission} /-</b>
                          </TableCell>
                          <TableCell align="start">
                         <b> {row.CommissionPer} % </b>

                          </TableCell>
                          <TableCell align="start" 
                           >
                            <b> ₹ {row.Amount} /-</b>
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
                        </TableRow>
                      </>
                    )
                  })

                  }

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

// export default CommissionHistory
