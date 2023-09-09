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
import { IconButton, Stack, Tooltip, Typography, Chip } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StaffManagement = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState("");

  // const exportToExcel = () => {
  //   const workbook = new ExcelJS.Workbook();
  //   const worksheet = workbook.addWorksheet('Sheet 1');
  //   // Get the table data
  //   const table = document.getElementById('my-table');
  //   const rows = table.getElementsByTagName('tr');
  //   worksheet.addRow([
  //     'S.No',
  //     'Category ID',
  //     'Category Name',
  //     'Status'
  //   ]
  //   );

  //   // Iterate over the rows and cells of the table
  //   for (let i = 0; i < rows.length; i++) {
  //     const cells = rows[i].getElementsByTagName('td');
  //     const rowData = [];

  //     for (let j = 0; j < cells.length; j++) {
  //       if (j !== 2) {
  //         rowData.push(cells[j].innerText);
  //       }
  //     }
  //     worksheet.addRow(rowData);
  //   }
  //   // Create a buffer and save the workbook
  //   workbook.xlsx.writeBuffer().then((buffer) => {
  //     const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = 'category.xlsx';
  //     a.click();
  //   });
  // };

  function getAllStaff() {
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append("token", localStorage.getItem("token"));
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
    fetch(`${process.env.REACT_APP_API_URL}getAllStaff`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    getAllStaff();
  }, []);

  // useEffect(() => {
  // }, [rows]);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  // // const style = {
  // //   position: "absolute",
  // //   top: "50%",
  // //   left: "50%",
  // //   transform: "translate(-50%, -50%)",
  // //   width: 400,
  // //   bgcolor: "background.paper",
  // //   border: "2px solid #000",
  // //   boxShadow: 24,
  // //   p: 2,
  // // };

  // const DeleteCategory = (str) => () => {
  //   swal({
  //     title: "Are you sure want to delete?",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       toast.success("Deleted Successfully", {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true
  //       });
  //       var myHeaders = new Headers();
  //       myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  //       myHeaders.append("token", localStorage.getItem("token"));
  //       myHeaders.append("Content-Type", "application/json");

  //       var raw = JSON.stringify({
  //         adminId: localStorage.getItem("userId"),
  //         categoryId: str,
  //       });

  //       var requestOptions = {
  //         method: "POST",
  //         headers: myHeaders,
  //         body: raw,
  //         redirect: "follow",
  //       };

  //       fetch(`${process.env.REACT_APP_API_URL}deleteCategory`, requestOptions
  //       )
  //         .then((response) => response.text())
  //         .then((result) => {
  //           getalldata();
  //         })
  //         .catch((error) => console.log("error", error));
  //     } else {
  //     }
  //   });
  // };

  return (
    <>
      <TextField
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
                      <TableCell>Status </TableCell>
                      <TableCell>Roll ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
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

                            <TableCell align="start">
                              {row.RoleID.IsActive ? (
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
                            <TableCell>{row.RoleID.RoleID}</TableCell>
                            <TableCell>{row.UserName}</TableCell>
                            <TableCell align="start">{row.Email}</TableCell>
                            <TableCell align="start">{row.Contact}</TableCell>
                            <TableCell align="center" sx={{ pr: 3 }}>
                              <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <Tooltip
                                  placement="top"
                                  title="Edit"
                                  // onClick={(e)=>{
                                  //   navigate(`/edit-category/${row.CategoryID}`)
                                  // }}
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

                                <Tooltip
                                  placement="top"
                                  title="delete"
                                  // onClick={DeleteCategory(`${row.CategoryID}`)}
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
