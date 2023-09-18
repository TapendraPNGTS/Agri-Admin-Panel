import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import { Chip, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Attenance() {
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState("");

  function getAllAttendence() {
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
    fetch(`${process.env.REACT_APP_API_URL}getAllAttendence`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getAllAttendence();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function formatDate(date) {
    return new Date(date).toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

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
              <Typography variant="h3">Attendance List</Typography>
            </Grid>

            {/* <Grid item>
              <Button
                variant="outlined"
                onClick={(e) => {
                  navigate("/add-product");
                }}
                startIcon={<AddIcon />}
              >
                Add Product
              </Button>
            </Grid> */}
          </Grid>
        }
        content={false}
      >
        {rows ? (
          <Card>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={gridSpacing}
            >
              <Grid item></Grid>
            </Grid>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 540 }}>
                <Table stickyHeader aria-label="sticky table" id="my-table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ pl: 3 }}>S. No.</TableCell>
                      <TableCell>Start Date</TableCell>
                      <TableCell>End Date</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Status </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .filter((row) =>
                        search === ""
                          ? row
                          : row.Title.toLowerCase().includes(
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
                            key={row.code}
                          >
                            <TableCell sx={{ pl: 3 }} align="start">
                              {index + 1}
                            </TableCell>
                            <TableCell>{formatDate(row.StartDate)}</TableCell>
                            <TableCell>{formatDate(row.EndDate)}</TableCell>
                            <TableCell align="start">{row.StaffID.UserName}</TableCell>
                            <TableCell align="start">{row.StaffID.Email}</TableCell>
                            <TableCell align="start">
                              {row.Status ? (
                                <Chip
                                  label="ON"
                                  color="success"
                                  size="small"
                                />
                              ) : (
                                <Chip
                                  label="OFF"
                                  chipcolor="orange"
                                  size="small"
                                />
                              )}
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
            <h5 className="text-center">Please Wait Data Loading...</h5>
          </>
        )}
      </MainCard>
    </>
  );
}
