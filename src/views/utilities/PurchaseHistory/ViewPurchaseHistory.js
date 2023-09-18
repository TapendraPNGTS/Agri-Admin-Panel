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
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Typography, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { SettingsSystemDaydreamRounded } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { format } from 'date-fns';

export default function ViewPurchaseHistory() {
  const [page, setPage] = React.useState(0);

  //   const [editopen, setEditOpen] = React.useState(false);
  //   const handleEditClose = () => setEditOpen(false);
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const params = useParams();

  function getalldata() {
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append("token", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      paymentId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}purchaseCartById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
        setName(result.data[0].UserID.Name);
        setEmail(result.data[0].UserID.Email);
        setAmount(result.data[0].Amount);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getalldata();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
              <Typography variant="h3">Purchase Cart Detail</Typography>
            </Grid>
            <tr>
              <td>Name :- {name}</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>Email :- {email}</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>Total Amount :- {amount}</td>
            </tr>
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
                      <TableCell>CourseID</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Code</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Payment Date</TableCell>
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
                            <TableCell align="start">{row.CourseID}</TableCell>
                            <TableCell align="start">{row.Title}</TableCell>
                            <TableCell align="start">{row.Code}</TableCell>
                            <TableCell align="start">{row.Price}</TableCell>
                            <TableCell align="start">
                            {format(new Date(row.PaymentDate), 'E, MMM d yyyy')}
                            </TableCell>
                            {/*                          
                          <TableCell align="center" sx={{ pr: 3 }}>
                            <Stack
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                            >
                                  <Tooltip placement="top" title="view">
                                  <Link to={`/view-course/${row.CourseID}`} >

                                    <IconButton color="primary" aria-label="view" size="large" >
                                      <RemoveRedEyeIcon sx={{ fontSize: '1.1rem' }} />
                                    </IconButton>
                                  </Link>
                                </Tooltip>

                            </Stack>
                          </TableCell> */}
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
