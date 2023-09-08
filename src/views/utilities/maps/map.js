import React, { useCallback } from "react";
// material-ui
import { Card } from "@mui/material";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
// project imports
import MainCard from "ui-component/cards/MainCard";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import MapApi from "apis/maps.api";
import { updateMap } from "redux/redux-slice/maps.slice";

// ===============================|| COLOR BOX ||=============================== //
// ===============================|| UI COLOR ||=============================== //
export default function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mapApi = new MapApi();

  const rows = useSelector((state) => state.maps.Maps);

  const getMap = useCallback(async () => {
    try {
      const maps = await mapApi.getMap();
      if (maps || maps.data.data) {
        dispatch(updateMap(maps.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getMap();
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
      <MainCard content={false}>
        {rows ? (
          <Card>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 540 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ pl: 3 }}>S No.</TableCell>
                      <TableCell>Date Time</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => {
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
                            <img src={row.url} width="200px" />
                          </TableCell>

                          <TableCell>
                            <a href={row.url} target="_blank">
                              <IconButton
                                color="primary"
                                aria-label="view"
                                size="large"
                              >
                                <VisibilityIcon sx={{ fontSize: "1.1rem" }} />
                              </IconButton>
                            </a>
                            <Link to={`/edit-map/${row.mapId}`}>
                              <IconButton
                                color="primary"
                                aria-label="edit"
                                size="large"
                              >
                                <EditIcon sx={{ fontSize: "1.1rem" }} />
                              </IconButton>
                            </Link>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Card>
        ) : (
          <h6>Loading...</h6>
        )}
      </MainCard>
    </>
  );
}
