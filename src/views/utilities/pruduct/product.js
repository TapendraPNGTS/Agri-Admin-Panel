import React, { useCallback } from "react";
// material-ui
import { Card, Grid, Typography, Button, Chip } from "@mui/material";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PdfIcon from "@mui/icons-material/PictureAsPdf";
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
import TextField from "@mui/material/TextField";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ProductApi from "apis/product.api";
import { updateAllProduct } from "redux/redux-slice/product.slice";

// ===============================|| COLOR BOX ||=============================== //
// ===============================|| UI COLOR ||=============================== //
export default function Users() {
  const dispatch = useDispatch();
  const productApi = new productApi();
  const rows = useSelector((state) => state.product.product);
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

  const handleDelete = async (productId) => {
    try {
      const deleteProductResponse = await productApi.deleteProduct({ productId });
      if (deleteProductResponse && deleteProductResponse?.data?.code === 200) {
        getAllProduct();
        return toast.success("Deleted Successfully");
      } else {
        return toast.error(deleteProductResponse.data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  };

  const getAllProduct = useCallback(async () => {
    try {
      const products = await productApi.getAllProduct();
      console.log(products.data.data);
      if (!products || !products.data.data) {
        return toast.error("no latest products available");
      } else {
        dispatch(updateAllProduct(products.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getAllProduct();
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
                      <TableCell>Product</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>BLO</TableCell>
                      <TableCell>DEO</TableCell>
                      <TableCell>ERO</TableCell>
                      <TableCell>PDF</TableCell>
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
                              {row.boothNumber}
                            </TableCell>
                            <TableCell align="start">{row.title}</TableCell>
                            <TableCell align="start">
                              {row.BLO ? row.BLO : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.DEO ? row.DEO : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.ERO ? row.ERO : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row.pdf ? (
                                <>
                                  <a href={row.pdf} target="_blank">
                                    <PdfIcon />
                                  </a>
                                </>
                              ) : (
                                "-"
                              )}
                            </TableCell>

                            <TableCell>
                              <Link to={`/edit-product/${row.productId}`}>
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
                                  handleDelete(row.productId);
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
