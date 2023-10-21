import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  IconButton,
  Stack,
  Tooltip,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DownloadIcon from "@mui/icons-material/Download";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

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
          </Grid>
        }
        content={false}
      >
        {/* {rows ? ( */}
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
                    <TableCell align="center" sx={{ pr: 3 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return ( */}
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    // key={row.code}
                  >
                    <TableCell align="start">
                      {/* {index + 1} */}
                      1.
                    </TableCell>
                    <TableCell align="start">
                      {/* {row.UserID.Name} */}
                      Abhi
                    </TableCell>
                    <TableCell align="start">
                      {/* {row.UserID.Email} */}
                      abhi@gmail.com
                    </TableCell>
                    <TableCell align="start">
                      {/* {row.Amount} */}
                      2051 /-
                    </TableCell>
                    <TableCell align="start">
                      {/* {row.TransacationId} */}
                      25454512121515Id
                    </TableCell>
                    <TableCell align="start">
                      18-10-2023
                      {/* {format(new Date(row.PaymentDate), 'E, MMM d yyyy')} */}
                    </TableCell>
                    <TableCell align="start">
                      Pending
                      {/* {row.Status} */}
                    </TableCell>
                    <TableCell align="center" sx={{ pr: 3 }}>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Tooltip placement="top" title="view">
                          {/* <Link to={`/view-purchase-history/${row.PaymentID}`}  */}
                          {/* onClick={()=>handleHistory(row.PaymentID)} */}
                          {/* > */}

                          <IconButton
                            color="primary"
                            aria-label="view"
                            size="large"
                          >
                            <RemoveRedEyeIcon sx={{ fontSize: "1.1rem" }} />
                          </IconButton>
                          {/* </Link> */}
                        </Tooltip>
                        <Tooltip placement="top" title="view">
                          {/* <Link to={`/view-purchase-history/${row.PaymentID}`}  */}
                          {/* onClick={()=>handleHistory(row.PaymentID)} */}
                          {/* > */}

                          <IconButton
                            color="primary"
                            aria-label="download"
                            size="large"
                          >
                            <DownloadIcon sx={{ fontSize: "1.1rem" }} />
                          </IconButton>
                          {/* </Link> */}
                        </Tooltip>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  {/* );
                    })} */}
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
        {/* ) : (
        <>
          <br></br>
          <center>
              <CircularProgress />
            </center>
        </>
      )} */}
      </MainCard>
    </>
  );
}

// export default PurchaseHistory
