import React, { useState, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { Grid, Stack, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

function App() {
  const params = useParams();
  const [name, setName] = useState("");
  const [rows, setRows] = useState([]);

  // Manage State
  const [isChecked, setIsChecked] = useState(false);
  const [readManage, setReadManage] = useState(false);
  const [updateManage, setUpdateManage] = useState(false);
  const [deleteManage, setDeleteManage] = useState(false);

  // Course State
  const [roleCreate, setRoleCreate] = useState(false);
  const [courseRead, setCourseRead] = useState(false);
  const [courseUpdate, setCourseUpdate] = useState(false);
  const [courseDelete, setCourseDelete] = useState(false);

  //Free Course State
  const [userCreate, setUserCreate] = useState(false);
  const [freecourseRead, setFreeCourseRead] = useState(false);
  const [freecourseUpdate, setFreeCourseUpdate] = useState(false);
  const [freecourseDelete, setFreeCourseDelete] = useState(false);

  //Report State
  const [leadCreate, setLeadCreate] = useState(false);
  const [reportRead, setReportRead] = useState(false);
  const [reportUpdate, setReportUpdate] = useState(false);
  const [reportDelete, setReportDelete] = useState(false);

  React.useEffect(() => {}, []);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getRoleById() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      roleId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}getRoleById`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setName(result.data.Name);
        setRows(result.data.IsPermission);
      })
      .catch((error) => {});
  }

  useEffect(() => {
    getRoleById();
  }, []);

  return (
    <MainCard title="View Roles">
      <Grid item xs={6} md={6}>
        <Stack>
          <InputLabel>{name}</InputLabel>
        </Stack>
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
                  <label for="toggle-1">
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
                  <label for="toggle-7">
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
                  <label for="toggle-8">
                    <small>Update&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-8"
                      checked={row.Update}
                    />
                    <span>
                      <small></small>
                    </span>
                  </label>
                </div>
              </TableCell>
              <TableCell align="start">
                <div className="switcher">
                  <label for="toggle-9">
                    <span>
                      <small></small>
                    </span>
                    <small>Delete&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-9"
                      checked={row.Delete}
                    />
                    <span>
                      <small></small>
                    </span>
                  </label>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
        {/* <TableRow hover role="checkbox">
          <TableCell align="start">Product</TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-2">
                <span>
                  <small></small>
                </span>
                <small>Create&nbsp;&nbsp;</small>
                <input type="checkbox" id="toggle-2" checked={roleCreate} />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-10">
                <span>
                  <small></small>
                </span>
                <small>Read&nbsp;&nbsp;</small>
                <input type="checkbox" id="toggle-10" checked={courseRead} />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-11">
                <span>
                  <small></small>
                </span>
                <small>Update&nbsp;&nbsp;</small>
                <input type="checkbox" id="toggle-11" checked={courseUpdate} />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-12">
                <span>
                  <small></small>
                </span>
                <small>Delete&nbsp;&nbsp;</small>
                <input type="checkbox" id="toggle-12" checked={courseDelete} />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
        </TableRow>
        <TableRow hover role="checkbox">
          <TableCell align="start">Franchise</TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-3">
                <span>
                  <small></small>
                </span>
                <small>Create&nbsp;&nbsp;</small>
                <input type="checkbox" id="toggle-3" checked={userCreate} />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-13">
                <span>
                  <small></small>
                </span>
                <small>Read&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-13"
                  checked={freecourseRead}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-14">
                <span>
                  <small></small>
                </span>
                <small>Update&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-14"
                  checked={freecourseUpdate}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-15">
                <span>
                  <small></small>
                </span>
                <small>Delete&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-15"
                  checked={freecourseDelete}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
        </TableRow>
        <TableRow hover role="checkbox">
          <TableCell align="start">Staff</TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-4">
                <span>
                  <small></small>
                </span>
                <small>Create&nbsp;&nbsp;</small>
                <input type="checkbox" id="toggle-4" checked={leadCreate} />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-16">
                <span>
                  <small></small>
                </span>
                <small>Read&nbsp;&nbsp;</small>
                <input type="checkbox" id="toggle-16" checked={reportRead} />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-17">
                <span>
                  <small></small>
                </span>
                <small>Update&nbsp;&nbsp;</small>
                <input type="checkbox" id="toggle-17" checked={reportUpdate} />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-18">
                <span>
                  <small></small>
                </span>
                <small>Delete&nbsp;&nbsp;</small>
                <input type="checkbox" id="toggle-18" checked={reportDelete} />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
        </TableRow>
        <TableRow hover role="checkbox">
          <TableCell align="start">User</TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-4">
                <span>
                  <small></small>
                </span>
                <small>Create&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-4"
                  checked={leadCreate}
                  onChange={(e) => {
                    setLeadCreate(e.target.checked);
                  }}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-19">
                <span>
                  <small></small>
                </span>
                <small>Read&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-19"
                  checked={reportRead}
                  onChange={(e) => {
                    setReportRead(e.target.checked);
                  }}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-20">
                <span>
                  <small></small>
                </span>
                <small>Update&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-20"
                  checked={reportUpdate}
                  onChange={(e) => {
                    setReportUpdate(e.target.checked);
                  }}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-21">
                <span>
                  <small></small>
                </span>
                <small>Delete&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-22"
                  checked={reportDelete}
                  onChange={(e) => {
                    setReportDelete(e.target.checked);
                  }}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
        </TableRow>
        <TableRow hover role="checkbox">
          <TableCell align="start">Order</TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-4">
                <span>
                  <small></small>
                </span>
                <small>Create&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-4"
                  checked={leadCreate}
                  onChange={(e) => {
                    setLeadCreate(e.target.checked);
                  }}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-23">
                <span>
                  <small></small>
                </span>
                <small>Read&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-23"
                  checked={reportRead}
                  onChange={(e) => {
                    setReportRead(e.target.checked);
                  }}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-24">
                <span>
                  <small></small>
                </span>
                <small>Update&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-24"
                  checked={reportUpdate}
                  onChange={(e) => {
                    setReportUpdate(e.target.checked);
                  }}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
          <TableCell align="start">
            <div className="switcher">
              <label for="toggle-25">
                <span>
                  <small></small>
                </span>
                <small>Delete&nbsp;&nbsp;</small>
                <input
                  type="checkbox"
                  id="toggle-25"
                  checked={reportDelete}
                  onChange={(e) => {
                    setReportDelete(e.target.checked);
                  }}
                />
                <span>
                  <small></small>
                </span>
              </label>
            </div>
          </TableCell>
        </TableRow> */}
      </TableBody>
      <br />
    </MainCard>
  );
}

export default App;
