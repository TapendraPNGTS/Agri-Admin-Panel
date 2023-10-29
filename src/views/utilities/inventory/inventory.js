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
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import Avatar from "@mui/material/Avatar";
import { CircularProgress, Typography } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ProductListApi from "../../../api/product.api";
import { updateAllProduct } from "../../../redux/redux-slice/product.slice";

export default function DataTable() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const dispatch = useDispatch();
  const productApi = new ProductListApi();
  const rows = useSelector((state) => state.product.Product);

  const getAllProduct = useCallback(async () => {
    try {
      const product = await productApi.getAllProduct({});
      if (!product || !product.data.data) {
        return toast.error("no latest banners available");
      } else {
        dispatch(updateAllProduct(product.data.data));
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

  useEffect(() => {}, [rows]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
              <Typography variant="h3">Inventory List</Typography>
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
                      <TableCell>Category</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>Product</TableCell>
                      <TableCell>Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .filter((row) =>
                        search === ""
                          ? row
                          : row.Name.toLowerCase().includes(
                              search.toLowerCase()
                            ) || row.Quantity.toString().toLowerCase().includes(
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
                            <TableCell>{row.CategoryID.Name}</TableCell>
                            <TableCell align="start">
                              <a
                                href={row.CoverImage}
                                target="_blank"
                              >
                                <Avatar
                                  alt="M21"
                                  src={row.CoverImage}
                                  sx={{ width: 50, height: 50 }}
                                />
                              </a>
                            </TableCell>
                            <TableCell align="start">{row.Name}</TableCell>
                            <TableCell align="start">{row.Quantity}</TableCell>
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
