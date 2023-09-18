import React from "react";
// material-ui
import {
  Card,
  Grid,
  Typography,
  Chip,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import Paper from "@mui/material/Paper";
// project imports
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
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
// ===============================|| COLOR BOX ||=============================== //
// ===============================|| UI COLOR ||=============================== //

export default function Users() {
  const navigate = useNavigate();
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

  function getAllFrencise() {
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

    fetch(`${process.env.REACT_APP_API_URL}getAllFrencise`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          setRows(result.data);
        }
      })
      .catch((error) => {});
  }
  useEffect(() => {
    getAllFrencise();
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
              <Typography variant="h3">Franchise Request</Typography>
            </Grid>
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
                      <TableCell>Address</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>State</TableCell>
                      <TableCell>Pin Code</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="center" sx={{ pr: 3 }}>
                        Action
                      </TableCell>
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
                              {row.Address ? row.Address : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.City ? row.City : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.State ? row.State : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.State ? row.State : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.Status === "Pending" ? (
                                <Chip
                                  label="Pending"
                                  color="warning"
                                  size="small"
                                />
                              ) : row.Status === "Reject" ? (
                                <Chip
                                  label="Reject"
                                  color="error"
                                  size="small"
                                />
                              ) : (
                                <Chip
                                  label="Accept"
                                  color="success"
                                  size="small"
                                />
                              )}
                            </TableCell>
                            <TableCell align="center" sx={{ pr: 3 }}>
                              <Link
                                to={`/view-franchise-request/${row.FrenchiseID}`}
                              >
                                <IconButton
                                  color="primary"
                                  title="view User"
                                  aria-label="view"
                                  size="large"
                                >
                                  <VisibilityIcon sx={{ fontSize: "1.1rem" }} />
                                </IconButton>
                              </Link>
                              <Tooltip
                                placement="top"
                                title="Edit"
                                onClick={(e) => {
                                  navigate(
                                    `/edit-franchise-request/${row.FrenchiseID}`
                                  );
                                }}
                                data-target={`#`}
                              >
                                <IconButton
                                  color="primary"
                                  aria-label="edit"
                                  size="large"
                                >
                                  <EditIcon sx={{ fontSize: "1.1rem" }} />
                                </IconButton>
                              </Tooltip>
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
