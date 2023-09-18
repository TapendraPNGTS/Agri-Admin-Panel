import React from 'react'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import swal from "sweetalert";
import {  Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { IconButton, Stack, Tooltip, Typography, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

export default function PurchaseHistory() {
  const [page, setPage] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [active, setActive] = React.useState("");
  const [file, setFile] = useState();
  const [editcategoryname, setEditCategoryName] = React.useState("");
  const [editcategoryid, setEditCategoryId] = React.useState("");
  const [editActive, setEditActive] = React.useState("");
  const [editopen, setEditOpen] = React.useState(false);
  const handleEditClose = () => setEditOpen(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState("");
const params = useParams();

  function getalldata() {
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
    fetch(`${process.env.REACT_APP_API_URL}purchaseCartHistory`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // setData(result.data)
        setRows(result.data);
      })
      .catch((error) => console.log("error", error));
  }


//   function handleHistory(PaymentID) {
//     var myHeaders = new Headers();
//     myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
//     myHeaders.append("token", localStorage.getItem("token"));
//     myHeaders.append("Content-Type", "application/json");
//     var raw = JSON.stringify({
//       adminId: localStorage.getItem("userId"),
//       paymentId: PaymentID
//     });
//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };
//     fetch(`${process.env.REACT_APP_API_URL}purchaseCartById`, requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         // setData(result.data)
//         setRows(result.data);
//       })
//       .catch((error) => console.log("error", error));
//   }

  useEffect(() => {
    getalldata();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const DeleteCategory = (str) => () => {
    swal({
      title: "Are you sure want to delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleClose();
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
        myHeaders.append("token", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          adminId: localStorage.getItem("userId"),
          EbookId: str,
        });

        console.log(raw, "emp");

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(`${process.env.REACT_APP_API_URL}deleteEbook`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            getalldata();
          })
          .catch((error) => console.log("error", error));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append("token", localStorage.getItem("token"));
    var formdata = new FormData();
    formdata.append("adminId", localStorage.getItem("userId"));
    formdata.append("title", email);
    formdata.append("description", "");

    formdata.append("active", active);

    formdata.append("image", file);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}addEbook`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "alreadyExists") {
          handleClose();
          toast.error("Title Already Exists", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          handleClose();
          toast.success("Ebook Added Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          getalldata();
        }
      })
      .catch((error) => {
        handleClose();
        toast.success(error, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  }

  function EditCategory(event) {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append("token", localStorage.getItem("token"));

    var formdata = new FormData();
    formdata.append("adminId", localStorage.getItem("userId"));
    formdata.append("title", editcategoryname);
    formdata.append("EbookId", editcategoryid);
    formdata.append("image", file);
    formdata.append("active", editActive);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}updateEbook`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        getalldata();
        handleEditClose();
      })
      .catch((error) => console.log("error", error));
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
          <Grid item>
            <Typography variant="h3">Purchase History</Typography>
          </Grid>
          {/* <Grid item>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="container mt-4">
                  <div class="row">
                    <form action="#" onSubmit={handleSubmit}>
                      <div class="col-12">
                        <TextField
                          id="outlined-required"
                          label="Ebook Title"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) => setActive(e.target.value)}
                        >
                          <option selected>Pleas Select</option>
                          <option value="true">Active</option>
                          <option value="false">Inactive</option>
                        </select>

                        <br></br>
                        <div class="input-group mb-3">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="inputGroupFile01"
                              onChange={handleChange}
                              accept="application/pdf"
                              required
                            />
                            <label
                              class="custom-file-label"
                              for="inputGroupFile01"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                      </div>
                      <br></br>

                      <div class="col-12">
                        <center>
                          <Button type="submit" variant="contained">
                            Add Ebook
                          </Button>
                        </center>
                      </div>
                    </form>
                  </div>
                </div>
              </Box>
            </Modal>

            <Modal
              open={editopen}
              onClose={handleEditClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <center>
                  <h4 id="modal-modal-title">Edit Ebook</h4>
                </center>
                <div className="container mt-4">
                  <div class="row">
                    <form action="#" onSubmit={EditCategory}>
                      <div class="col-12">
                        <TextField
                          id="outlined-required"
                          label="Ebook Title"
                          value={editcategoryname}
                          onChange={(e) =>
                            setEditCategoryName(e.target.value)
                          }
                          required
                        />
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={editActive}
                          onChange={(e) => setEditActive(e.target.value)}
                        >
                          <option selected>Please Select</option>
                          <option value="true">Active</option>
                          <option value="false">Inactive</option>
                        </select>

                        <br></br>
                        <div class="input-group mb-3">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="inputGroupFile01"
                              onChange={handleChange}
                              accept="application/pdf"
                            />
                            <label
                              class="custom-file-label"
                              for="inputGroupFile01"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                      </div>
                      <br></br>

                      <div class="col-12">
                        <center>
                          <Button type="submit" variant="contained">
                            Update Ebook
                          </Button>
                        </center>
                      </div>
                    </form>
                  </div>
                </div>
              </Box>
            </Modal>
          </Grid> */}
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
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Transaction ID</TableCell>
                    <TableCell>Payment Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                    {/* <TableCell align="center" sx={{ pr: 3 }}>
                      Actions
                    </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
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
                          <TableCell align="start">{index + 1}</TableCell>
                          <TableCell align="start">{row.UserID.Name}</TableCell>
                          <TableCell align="start">{row.UserID.Email}</TableCell>
                          <TableCell align="start">{row.Amount}</TableCell>
                          <TableCell align="start">{row.TransacationId}</TableCell>
                          <TableCell align="start">{format(new Date(row.PaymentDate), 'E, MMM d yyyy')}</TableCell>
                          <TableCell align="start">{row.Status}</TableCell>
                          <TableCell align="center" sx={{ pr: 3 }}>
                            <Stack
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                            >
                                  <Tooltip placement="top" title="view">
                                  <Link to={`/view-purchase-history/${row.PaymentID}`} 
                                //   onClick={()=>handleHistory(row.PaymentID)}
                                  >

                                    <IconButton color="primary" aria-label="view" size="large" >
                                      <RemoveRedEyeIcon sx={{ fontSize: '1.1rem' }} />
                                    </IconButton>
                                  </Link>
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
  )
}

// export default PurchaseHistory