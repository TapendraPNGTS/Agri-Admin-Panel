import React from 'react';
// material-ui
import { Card, Grid, Typography, Chip, IconButton, CircularProgress } from "@mui/material";
import Paper from "@mui/material/Paper";
// project imports
import EditIcon from "@mui/icons-material/Edit";
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// ===============================|| COLOR BOX ||=============================== //
// ===============================|| UI COLOR ||=============================== //

export default function Users() {
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function getalldata() {
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}getAllUser`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          setRows(result.data);
        }
      })
      .catch((error) => {});
  }
  useEffect(() => {
    getalldata();
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
        title={
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          >
            <Grid item>
              <Typography variant="h3">Farmers</Typography>
            </Grid>
            {/* <Grid item>
              <Button
                variant="outlined"
                onClick={exportToExcel}
              >
                Export
              </Button>
            </Grid> */}
          </Grid>
        }
        content={false}
      >
        {rows ? (
          <Card>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 540 }}>
                <Table stickyHeader aria-label="sticky table" id="my-table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ pl: 3 }}>S No.</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>State</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="center" sx={{ pr: 3 }}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .filter((row) =>
                        search === ""
                          ? row
                          : row.Phone.toLowerCase().includes(
                              search.toLowerCase()
                            )
                      )
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
                            key={index}
                          >
                            <TableCell align="start">{index + 1}</TableCell>
                            <TableCell align="start">
                              {row.Name ? row.Name : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.Email ? row.Email : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.Contact ? row.Contact : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.City ? row.City : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.State ? row.State : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.IsActive === "Active" ? (
                                <Chip
                                  label="Active"
                                  color="success"
                                  size="small"
                                />
                              ) : (
                                <Chip
                                  label="Block"
                                  color="error"
                                  size="small"
                                />
                              )}
                            </TableCell>
                            <TableCell align="center" sx={{ pr: 3 }}>
                              {/*<Stack
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                            >
                                  <Tooltip placement="top" title="view">
                                  <Link to={`/view-user/${row.PaymentID}`} 
                                //   onClick={()=>handleHistory(row.PaymentID)}
                                  >
                                    <IconButton color="primary" aria-label="view" size="large" >
                                    <EditIcon sx={{ fontSize: "1.1rem" }} />
                                    </IconButton>
                                  </Link>
                                </Tooltip>
                            </Stack>*/}
                              <Link to={`/view-user/${row.UserID}`}>
                                {/* <IconButton
                                  color="edit"
                                  title="Edit User"
                                  aria-label="Edit"
                                  size="large"
                                > */}
                                  <EditIcon sx={{ fontSize: "1.1rem" }} />
                                {/* </IconButton> */}
                              </Link>
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
          <center>
              <CircularProgress />
            </center>
        )}
      </MainCard>
    </>
  );
}
