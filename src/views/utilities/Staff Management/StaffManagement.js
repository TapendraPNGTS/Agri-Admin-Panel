import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
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
import TableBody from "@mui/material/TableBody";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import { IconButton, Stack, Tooltip, Typography, CircularProgress } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { useNavigate , Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import StaffApi from "../../../api/staff.api";
import { updateAllStaff } from "../../../redux/redux-slice/staff.slice";

const StaffManagement = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const staffApi = new StaffApi();
  const rows = useSelector((state) => state.staff.Staff);
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const getAllStaff = useCallback(async () => {
    try {
      const staff = await staffApi.getAllStaff();
      if (!staff || !staff.data.data) {
        return toast.error("no latest banners available");
      } else {
        dispatch(updateAllStaff(staff.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getAllStaff();
  }, []);

  const handleDelete = async (staffId) => {
    try {
      const deleteStaffResponse = await staffApi.deleteStaff({ staffId });
      if (deleteStaffResponse && deleteStaffResponse?.data?.code === 200) {
        getAllStaff();
        return toast.success("Deleted Successfully");
      } else {
        return toast.error(deleteStaffResponse.data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
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
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                fullWidth
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h3">Manage User</Typography>
            </Grid>

            <Grid item>
              <Button
                variant="outlined"
                onClick={(e) => {
                  navigate("/create-user");
                }}
                startIcon={<AddIcon />}
              >
                New User
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
                      <TableCell sx={{ pl: 3 }}>ID</TableCell>
                      {/* <TableCell>Status </TableCell> */}
                      <TableCell>Roll Name</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Type</TableCell>
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
                            key={row.Code}
                          >
                            <TableCell sx={{ pl: 3 }} align="start">
                              {index + 1}
                            </TableCell>
                            <TableCell>{row.RoleID.Name}</TableCell>
                            <TableCell>{row.Name}</TableCell>
                            <TableCell align="start">{row.Email}</TableCell>
                            <TableCell align="start">{row.Contact}</TableCell>
                            <TableCell align="start">{row.Type}</TableCell>
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
                                    navigate(`/edit-user/${row.StaffID}`);
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
                                <Link to={`/view-staff/${row.StaffID}`}>
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
                                  onClick={() => handleDelete(`${row.StaffID}`)}
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
            <center>
              <CircularProgress />
            </center>
          </>
        )}
      </MainCard>
    </>
  );
};

export default StaffManagement;
