import React, { useCallback } from "react";
// material-ui
import { Card, Grid, Typography, Button, Chip } from "@mui/material";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import UserApi from "apis/user.api";
import { updateAllUser } from "redux/redux-slice/user.slice";

// ===============================|| COLOR BOX ||=============================== //
// ===============================|| UI COLOR ||=============================== //
export default function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userApi = new UserApi();

  const rows = useSelector((state) => state.user.User);
  const [search, setSearch] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async (userId) => {
    try {
      const deleteUserResponse = await userApi.deleteUser({ userId });
      if (deleteUserResponse && deleteUserResponse?.data?.code === 200) {
        getAllUser();
        return toast.success("Deleted Successfully");
      } else {
        return toast.error(deleteUserResponse.data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  };

  const getAllUser = useCallback(async () => {
    try {
      const users = await userApi.getAllUser();
      if (!users || !users.data.data) {
        return toast.error("no latest users available");
      } else {
        dispatch(updateAllUser(users.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getAllUser();
  }, []);

  function formatDate(date) {
    return new Date(date).toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
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
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                id="outlined-search"
                label="Search field"
                type="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
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
                      <TableCell>Date Time</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Contact</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .filter((row) =>
                        search.toLowerCase() === ""
                          ? row
                          : row.title.toLowerCase().includes(search)
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
                              {row.createdAt ? formatDate(row.createdAt) : "-"}
                            </TableCell>
                            <TableCell align="start">{row.name}</TableCell>
                            <TableCell align="start">{row.email}</TableCell>
                            <TableCell align="start">{row.number}</TableCell>
                            <TableCell align="start">{row.type}</TableCell>
                            <TableCell>
                              <Link to={`/edit-user/${row.userId}`}>
                                <IconButton
                                  color="primary"
                                  aria-label="view"
                                  size="large"
                                >
                                  <EditIcon sx={{ fontSize: "1.1rem" }} />
                                </IconButton>
                              </Link>
                              <IconButton
                                onClick={(e) => {
                                  handleDelete(row.userId);
                                }}
                                color="primary"
                                aria-label="view"
                                size="large"
                              >
                                <DeleteIcon sx={{ fontSize: "1.1rem" }} />
                              </IconButton>
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
          <h6>Loading...</h6>
        )}
      </MainCard>
    </>
  );
}
