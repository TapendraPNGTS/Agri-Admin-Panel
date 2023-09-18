import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import swal from "sweetalert";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import { toast } from "react-toastify";
import { IconButton, Stack, Tooltip, Chip, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

const StaffManagement = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState("");

  function getAllRole() {
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
    fetch(`${process.env.REACT_APP_API_URL}getAllRole`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    getAllRole();
  }, []);

  useEffect(() => {}, [rows]);

  const DeleteCategory = (str) => () => {
    swal({
      title: "Are you sure want to delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        toast.success("Deleted Successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        var myHeaders = new Headers();
        myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
        myHeaders.append(
          "Authorization",
          "Bearer " + localStorage.getItem("token")
        );
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          adminId: localStorage.getItem("userId"),
          roleId: str,
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        fetch(`${process.env.REACT_APP_API_URL}deleteRole`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            getAllRole();
          })
          .catch((error) => console.log("error", error));
      } else {
      }
    });
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
              <Typography variant="h3">Manage Roles</Typography>
            </Grid>

            <Grid item>
              <Button
                variant="outlined"
                onClick={(e) => {
                  navigate("/add-roles");
                }}
                startIcon={<AddIcon />}
              >
                New Role
              </Button>
              &nbsp; &nbsp;
            </Grid>
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
                      <TableCell>S. No.</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Roll ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="center" sx={{ pr: 3 }}>
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .filter((row) =>
                        search === ""
                          ? row
                          : row.Name.toLowerCase().includes(
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
                            <TableCell>{formatDate(row.createdAt)}</TableCell>
                            <TableCell sx={{ pl: 3 }} align="start">
                              {row.RoleID}
                            </TableCell>
                            <TableCell sx={{ pl: 3 }} align="start">
                              {row.Name}
                            </TableCell>
                            <TableCell align="start">
                              {row.IsActive ? (
                                <Chip
                                  label="Active"
                                  color="success"
                                  size="small"
                                />
                              ) : (
                                <Chip
                                  label="Inactive"
                                  chipcolor="orange"
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
                                <Tooltip
                                  placement="top"
                                  title="Edit"
                                  onClick={(e) => {
                                    navigate(`/edit-roles/${row.RoleID}`);
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
                                <Link to={`/view-roles/${row.RoleID}`}>
                                  <IconButton
                                    color="primary"
                                    title="view Product"
                                    aria-label="view"
                                    size="large"
                                  >
                                    <VisibilityIcon
                                      sx={{ fontSize: "1.1rem" }}
                                    />
                                  </IconButton>
                                </Link>
                                <Tooltip
                                  placement="top"
                                  title="delete"
                                  onClick={DeleteCategory(`${row.RoleID}`)}
                                >
                                  <IconButton
                                    color="primary"
                                    aria-label="edit"
                                    size="large"
                                  >
                                    <DeleteIcon sx={{ fontSize: "1.1rem" }} />
                                  </IconButton>
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
                //   onPageChange={handleChangePage}
                //   onRowsPerPageChange={handleChangeRowsPerPage}
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
};

export default StaffManagement;
