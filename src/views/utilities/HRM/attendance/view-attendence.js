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
import { IconButton, Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import { Chip, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export default function Attenance() {
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState("");

  //   function getAllAttendence() {
  //     var myHeaders = new Headers();
  //     myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  //     myHeaders.append(
  //       "Authorization",
  //       "Bearer " + localStorage.getItem("token")
  //     );
  //     myHeaders.append("Content-Type", "application/json");
  //     var raw = JSON.stringify({
  //       adminId: localStorage.getItem("userId"),
  //     });
  //     var requestOptions = {
  //       method: "POST",
  //       headers: myHeaders,
  //       body: raw,
  //       redirect: "follow",
  //     };
  //     fetch(`${process.env.REACT_APP_API_URL}getAllAttendence`, requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setRows(result.data);
  //       })
  //       .catch((error) => console.log("error", error));
  //   }

  //   useEffect(() => {
  //     getAllAttendence();
  //   }, []);

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
              <Typography variant="h3">User Attendance</Typography>
            </Grid>
          </Grid>
        }
        content={false}
      >
        {/* {rows ? ( */}
        <Card>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          ></Grid>
          <br />
          <br />
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView={"dayGridMonth"}
              headerToolbar={{
                left: "prev,today,next",
                center: "title",
                right: "",
              }}
              themeSystem="Simplex"
              // events={events}
              editable={false}
              nowIndicator={true}
              dayMaxEvents={true}
              selectable={true}
              displayEventEnd="true"
              eventColor={
                "#" + Math.floor(Math.random() * 16777215).toString(16)
              }
            />
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
        {/* // ) : (
        //    <>
        //       <br></br>
                     <center>
                        <CircularProgress />
                     </center>
              </>
        //   </>
        // )} */}
      </MainCard>
    </>
  );
}
