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
import {
  IconButton,
  Stack,
  Tooltip,
  Typography,
  CircularProgress,
  Chip,
} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import FranchiseStateApi from "../../../../api/franchiseState.api";
import { updateAllFranchiseState } from "../../../../redux/redux-slice/franchiseState.slice";

export default function DataTable() {
  const params = useParams();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  const stateApi = new FranchiseStateApi();
  const rows = useSelector((state) => state.franchiseState.FranchiseState);

  const getAllState = useCallback(async () => {
    try {
      const state = await stateApi.getAllPendingStateFranchise({});
      if (!state || !state.data.data) {
        return toast.error("no latest state available");
      } else {
        dispatch(updateAllFranchiseState(state.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  const getCategoryById = useCallback(async () => {
    try {
      const getStateFranchiseByIdResponse =
        await stateApi.getStateFranchiseById({
          stateFId: params.id,
        });
      if (
        getStateFranchiseByIdResponse &&
        getStateFranchiseByIdResponse?.data?.code === 200
      ) {
        setName(getStateFranchiseByIdResponse.data.data.Name);
        setEmail(getStateFranchiseByIdResponse.data.data.Email);
        setContact(getStateFranchiseByIdResponse.data.data.Contact);
        setState(getStateFranchiseByIdResponse.data.data.StateID.StateID);
        setCity(getStateFranchiseByIdResponse.data.data.CityID.DistrictID);
        setAddress(getStateFranchiseByIdResponse.data.data.Address);
      } else {
        return toast.error(`Something went wrong!`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getAllState();
  }, []);

  useEffect(() => {}, [rows]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const handleDelete = async (stateId) => {
  //   try {
  //     const deleteStateResponse = await stateApi.deleteState({ stateId });
  //     if (deleteStateResponse && deleteStateResponse?.data?.code === 200) {
  //       getAllState();
  //       return toast.success("Deleted Successfully");
  //     } else {
  //       return toast.error(deleteStateResponse.data?.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Something went wrong");
  //     throw error;
  //   }
  // };

  return (
    <>
      <TextField
        fullWidth
        id="outlined-search"
        label="Search field"
        type="search"
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
              <Typography variant="h3">Pending Request</Typography>
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
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Contact</TableCell>
                      <TableCell>State</TableCell>
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
                            <TableCell sx={{ pl: 3 }} align="start">
                              {row.Name}
                            </TableCell>
                            <TableCell sx={{ pl: 3 }} align="start">
                              {row.Email}
                            </TableCell>
                            <TableCell sx={{ pl: 3 }} align="start">
                              {row.Contact}
                            </TableCell>
                            <TableCell sx={{ pl: 3 }} align="start">
                              {row.StateID.Name}
                            </TableCell>
                            <TableCell align="start">
                              {row.Status === "Complete" ? (
                                <Chip
                                  label="Active"
                                  color="success"
                                  size="small"
                                />
                              ) : (
                                <Chip
                                  label="Pending"
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
                                      `/edit-franchise-state/${row.StateFID}`
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

                                {/* <Tooltip
                                  placement="top"
                                  title="delete"
                                  onClick={DeleteCategory(`${row.StateID}`)}
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
