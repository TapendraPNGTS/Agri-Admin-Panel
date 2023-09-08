import React, { useCallback } from "react";
// material-ui
import { Card, Grid, Typography, Button, Chip } from "@mui/material";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
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
import FamilyApi from "apis/family-list.api";
import { updateAllFamily } from "redux/redux-slice/family-list.slice";

// ===============================|| COLOR BOX ||=============================== //
// ===============================|| UI COLOR ||=============================== //
export default function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const FamilyList = new FamilyApi();

  const rows = useSelector((state) => state.family.Family);
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

  const handleDelete = async (familyId) => {
    try {
      const deleteFamilyResponse = await FamilyList.deleteFamily({ familyId });
      if (deleteFamilyResponse && deleteFamilyResponse?.data?.code === 200) {
        getAllFamily();
        return toast.success("Deleted Successfully");
      } else {
        return toast.error(deleteFamilyResponse.data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  };

  const getAllFamily = useCallback(async () => {
    try {
      const news = await FamilyList.getAllFamily();
      if (!news || !news.data.data) {
        return toast.error("no latest Families available");
      } else {
        dispatch(updateAllFamily(news.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getAllFamily();
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
            <Grid item></Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={(e) => {
                  navigate("/add-family");
                }}
                startIcon={<AddIcon />}
              >
                Add Family
              </Button>
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
                      <TableCell>Ward Number</TableCell>
                      <TableCell>Caste</TableCell>
                      <TableCell>Address</TableCell>
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
                            <TableCell align="start">
                              {row.wardNumber}
                            </TableCell>
                            <TableCell align="start">{row.caste}</TableCell>
                            <TableCell align="start">{row.address}</TableCell>

                            <TableCell>
                              <Link to={`/add-member/${row.familyId}`}>
                                <IconButton
                                  color="primary"
                                  aria-label="view"
                                  size="large"
                                  tooltip="Add Member"
                                >
                                  <AddCircleOutlineIcon
                                    sx={{ fontSize: "1.1rem" }}
                                  />
                                </IconButton>
                              </Link>
                              <Link to={`/edit-family/${row.familyId}`}>
                                <IconButton
                                  color="primary"
                                  aria-label="view"
                                  size="large"
                                  tooltip="Edit Family"
                                >
                                  <EditIcon sx={{ fontSize: "1.1rem" }} />
                                </IconButton>
                              </Link>
                              <IconButton
                                onClick={(e) => {
                                  handleDelete(row.familyId);
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
