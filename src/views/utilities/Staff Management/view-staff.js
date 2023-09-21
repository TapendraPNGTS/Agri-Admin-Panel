import React, { useState, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { Grid, Stack, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { gridSpacing } from "store/constant";

function App() {
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
  const [roleName, setRoleName] = useState("");
  const [rows, setRows] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getAllStaffPermission() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      staffId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_API_URL}getAllStaffPermission`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setName(result.data.UserName);
        setEmail(result.data.Email);
        setNumber(result.data.Contact);
        setType(result.data.Type);
        setRoleName(result.data.RoleID.Name);
        setRows(result.data.RoleID.IsPermission);
    })
      .catch((error) => {});
  }

  useEffect(() => {
    getAllStaffPermission();
  }, []);

  return (
    <MainCard title="View Staff Permission">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6} md={6}>
          <Stack>
            <InputLabel required>Name</InputLabel>
            <TextField id="name" name="name" value={name} disabled></TextField>
          </Stack>
        </Grid>
        <Grid item xs={6} md={6}>
          <Stack>
            <InputLabel required>Email</InputLabel>
            <TextField id="name" name="name" value={email} disabled></TextField>
          </Stack>
        </Grid>
        <Grid item xs={4} md={4}>
          <Stack>
            <InputLabel required>Contact</InputLabel>
            <TextField
              id="name"
              name="name"
              type="number"
              value={number}
              disabled
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={4} md={4}>
          <Stack>
            <InputLabel required>Type</InputLabel>
            <TextField id="name" name="name" value={type} disabled></TextField>
          </Stack>
        </Grid>
        <Grid item xs={4} md={4}>
          <Stack>
            <InputLabel required>Role Name</InputLabel>
            <TextField id="name" name="name" value={roleName} disabled></TextField>
          </Stack>
        </Grid>
      </Grid>
      <hr />
      <TableBody>
        {rows.map((row, i) => {
          return (
            <TableRow hover role="checkbox">
              <TableCell align="start" key={i}>
                {row.Module}
              </TableCell>
              <TableCell align="start">
                <div className="switcher">
                  <label htmlFor="toggle-1">
                    <small>Create&nbsp;&nbsp;</small>
                    <input type="checkbox" id="toggle-1" checked={row.Create} />
                    <span>
                      <small></small>
                    </span>
                  </label>
                </div>
              </TableCell>
              <TableCell align="start">
                <div className="switcher">
                  <label htmlFor="toggle-7">
                    <small>Read&nbsp;&nbsp;</small>
                    <input type="checkbox" id="toggle-7" checked={row.Read} />
                    <span>
                      <small></small>
                    </span>
                  </label>
                </div>
              </TableCell>
              <TableCell align="start">
                <div className="switcher">
                  <label htmlFor="toggle-8">
                    <small>Update&nbsp;&nbsp;</small>
                    <input type="checkbox" id="toggle-8" checked={row.Update} />
                    <span>
                      <small></small>
                    </span>
                  </label>
                </div>
              </TableCell>
              <TableCell align="start">
                <div className="switcher">
                  <label htmlFor="toggle-9">
                    <span>
                      <small></small>
                    </span>
                    <small>Delete&nbsp;&nbsp;</small>
                    <input type="checkbox" id="toggle-9" checked={row.Delete} />
                    <span>
                      <small></small>
                    </span>
                  </label>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <br />
    </MainCard>
  );
}

export default App;
