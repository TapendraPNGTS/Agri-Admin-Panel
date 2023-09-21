import React, { useState } from "react";
import InputLabel from "ui-component/extended/Form/InputLabel";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import {
  Stack,
  MenuItem,
  Select,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import "../Toggle-Switch/ToggleSwitch.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Permission = () => {
  const navigate = useNavigate();

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

  const [role, setRole] = useState();
  const [rows, setRows] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function getAllRole() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getAllRole`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    getAllRole();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      roleId: role,
      permission: [
        {
          Module: "Management",
          Create: isChecked,
          Read: readManage,
          Update: updateManage,
          Delete: deleteManage,
        },
        {
          Module: "Course",
          Create: roleCreate,
          Read: courseRead,
          Update: courseUpdate,
          Delete: courseDelete,
        },
        {
          Module: "Free Course",
          Create: userCreate,
          Read: freecourseRead,
          Update: freecourseUpdate,
          Delete: freecourseDelete,
        },
        {
          Module: "Report",
          Create: leadCreate,
          Read: reportRead,
          Update: reportUpdate,
          Delete: reportDelete,
        },
      ],
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}addPermission`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
        } else {
        }
      })
      .catch((error) => {});
  }

  return (
    <>
      <MainCard>
        {
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          >
            <Grid item>
              <Typography variant="h3">Manage Permission</Typography>
            </Grid>
          </Grid>
        }
        <form onSubmit={handleSubmit} action="#">
        <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Select Role to Get and Set Permissions</InputLabel>
              <Select
                id="role"
                name="role"
                defaultValue="Sales Manager"
                onChange={(e) => setRole(e.target.value)}
              >
                {rows.map((row, index) => (
                  <MenuItem value={row.RoleID} key={index}>
                    {row.Name}
                  </MenuItem>
                  ))}
              </Select>
            </Stack>
          </Grid>
          <hr />
          <TableBody>
            <TableRow hover role="checkbox">
              <TableCell align="start">Management</TableCell>
              <TableCell align="start">
                <div className="switcher">
                  <label htmlFor="toggle-1">
                    <span>
                      <small></small>
                    </span>
                    <small>Create&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-1"
                      checked={isChecked}
                      onChange={(e) => {
                        setIsChecked(e.target.checked);
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
                  <label htmlFor="toggle-7">
                    <span>
                      <small></small>
                    </span>
                    <small>Read&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-7"
                      checked={readManage}
                      onChange={(e) => {
                        setReadManage(e.target.checked);
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
                  <label htmlFor="toggle-8">
                    <span>
                      <small></small>
                    </span>
                    <small>Update&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-8"
                      checked={updateManage}
                      onChange={(e) => {
                        setUpdateManage(e.target.checked);
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
                  <label htmlFor="toggle-9">
                    <span>
                      <small></small>
                    </span>
                    <small>Delete&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-9"
                      checked={deleteManage}
                      onChange={(e) => {
                        setDeleteManage(e.target.checked);
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
              <TableCell align="start">Course</TableCell>
              <TableCell align="start">
                <div className="switcher">
                  <label htmlFor="toggle-2">
                    <span>
                      <small></small>
                    </span>
                    <small>Create&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-2"
                      checked={roleCreate}
                      onChange={(e) => {
                        setRoleCreate(e.target.checked);
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
                  <label htmlFor="toggle-10">
                    <span>
                      <small></small>
                    </span>
                    <small>Read&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-10"
                      checked={courseRead}
                      onChange={(e) => {
                        setCourseRead(e.target.checked);
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
                  <label htmlFor="toggle-11">
                    <span>
                      <small></small>
                    </span>
                    <small>Update&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-11"
                      checked={courseUpdate}
                      onChange={(e) => {
                        setCourseUpdate(e.target.checked);
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
                  <label htmlFor="toggle-12">
                    <span>
                      <small></small>
                    </span>
                    <small>Delete&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-12"
                      checked={courseDelete}
                      onChange={(e) => {
                        setCourseDelete(e.target.checked);
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
              <TableCell align="start">Free Course</TableCell>
              <TableCell align="start">
                <div className="switcher">
                  <label htmlFor="toggle-3">
                    <span>
                      <small></small>
                    </span>
                    <small>Create&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-3"
                      checked={userCreate}
                      onChange={(e) => {
                        setUserCreate(e.target.checked);
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
                  <label htmlFor="toggle-13">
                    <span>
                      <small></small>
                    </span>
                    <small>Read&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-13"
                      checked={freecourseRead}
                      onChange={(e) => {
                        setFreeCourseRead(e.target.checked);
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
                  <label htmlFor="toggle-14">
                    <span>
                      <small></small>
                    </span>
                    <small>Update&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-14"
                      checked={freecourseUpdate}
                      onChange={(e) => {
                        setFreeCourseUpdate(e.target.checked);
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
                  <label htmlFor="toggle-15">
                    <span>
                      <small></small>
                    </span>
                    <small>Delete&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-15"
                      checked={freecourseDelete}
                      onChange={(e) => {
                        setFreeCourseDelete(e.target.checked);
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
              <TableCell align="start">Report</TableCell>
              <TableCell align="start">
                <div className="switcher">
                  <label htmlFor="toggle-4">
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
                  <label htmlFor="toggle-16">
                    <span>
                      <small></small>
                    </span>
                    <small>Read&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-16"
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
                  <label htmlFor="toggle-17">
                    <span>
                      <small></small>
                    </span>
                    <small>Update&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-17"
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
                  <label htmlFor="toggle-18">
                    <span>
                      <small></small>
                    </span>
                    <small>Delete&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-18"
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
          </TableBody>
          <Button variant="contained" type="submit">
            Add Permission
          </Button>
        </form>
      </MainCard>
    </>
  );
};

export default Permission;
