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
import swal from "sweetalert";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import Avatar from "@mui/material/Avatar";
import { getUserLocal } from "utils/localStorage.util";
import {
  IconButton,
  Stack,
  Tooltip,
  Chip,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import CategoryApi from "../../../api/category.api";
import { updateAllCategory } from "../../../redux/redux-slice/category.slice";

export default function DataTable() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const categoryApi = new CategoryApi();
  const rows = useSelector((state) => state.category.Category);
  const userId = getUserLocal();

  const getAllCategory = useCallback(async () => {
    try {
      const categories = await categoryApi.getAllCategory({
        adminId: userId.StaffID,
      });
      if (!categories || !categories.data.data) {
        return toast.error("no latest banners available");
      } else {
        dispatch(updateAllCategory(categories.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getAllCategory();
  }, []);
  useEffect(() => {}, [rows]);

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
              <Typography variant="h3">Category List</Typography>
            </Grid>

            <Grid item>
              <Button
                variant="outlined"
                onClick={(e) => {
                  navigate("/add-category");
                }}
                startIcon={<AddIcon />}
              >
                Add Category
              </Button>
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
                      <TableCell sx={{ pl: 3 }}>S. No.</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell hidden>Category ID</TableCell>
                      <TableCell>Category Image</TableCell>
                      <TableCell>Category Name</TableCell>
                      <TableCell>Status </TableCell>
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
                            key={row.code}
                          >
                            <TableCell sx={{ pl: 3 }} align="start">
                              {index + 1}
                            </TableCell>
                            <TableCell>{formatDate(row.createdAt)}</TableCell>
                            <TableCell hidden>{row.CategoryID}</TableCell>
                            <TableCell align="start">
                              <a
                                href={row.Image}
                                target="_blank"
                              >
                                <Avatar
                                  alt="Agri Input"
                                  variant="rounded"
                                  size="md"
                                  src={row.Image}
                                  sx={{ width: 60, height: 60 }}
                                />
                              </a>
                            </TableCell>
                            <TableCell align="start">{row.Name}</TableCell>
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
                                  color="warning"
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
                                    navigate(
                                      `/edit-category/${row.CategoryID}`
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
                                <Link to={`/view-category/${row.CategoryID}`}>
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
                                {/* <Tooltip
                                  placement="top"
                                  title="delete"
                                  onClick={DeleteCategory(`${row.CategoryID}`)}
                                >
                                  <IconButton
                                    color="primary"
                                    aria-label="edit"
                                    size="large"
                                  >
                                    <DeleteIcon sx={{ fontSize: "1.1rem" }} />
                                  </IconButton>
                                </Tooltip> */}
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
