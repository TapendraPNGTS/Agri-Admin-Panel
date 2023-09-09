import React , {useState , useEffect} from 'react'
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import {Stack,Typography , Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputLabel from "ui-component/extended/Form/InputLabel";

const PermissionHistory = () => {
  const navigate = useNavigate();
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
  myHeaders.append("token", localStorage.getItem("token"));
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
    fetch(`${process.env.REACT_APP_API_URL}getAllPermission`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setIsChecked(result.data.Create)
        setReadManage(result.data.Read)
        setUpdateManage(result.data.Update)
        setDeleteManage(result.data.Delete)
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    getAllRole();
  }, []);

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
              <Typography variant="h3">Permission History</Typography>
            </Grid>

            <Grid item>
              <Button
                variant="outlined"
                onClick={(e) => {
                  navigate("/permission");
                }}
                startIcon={<AddIcon />}
              >
               Add Permission
              </Button>
              &nbsp; &nbsp;
            </Grid>
          </Grid>
        }
        content={false}
      >
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
                  <label for="toggle-1">
                    <small>Create&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-1"
                      checked={isChecked}
                    />
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
                    <input
                      type="checkbox"
                      id="toggle-7"
                      checked={readManage}
                    />
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
                      checked={updateManage}
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
                      checked={deleteManage}
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
                  <label for="toggle-2">
                    <span>
                      <small></small>
                    </span>
                    <small>Create&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-2"
                      checked={roleCreate}
                    />
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
                    <input
                      type="checkbox"
                      id="toggle-10"
                      checked={courseRead}
                    />
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
                    <input
                      type="checkbox"
                      id="toggle-11"
                      checked={courseUpdate}
                    />
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
                    <input
                      type="checkbox"
                      id="toggle-12"
                      checked={courseDelete}
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
                  <label for="toggle-3">
                    <span>
                      <small></small>
                    </span>
                    <small>Create&nbsp;&nbsp;</small>
                    <input
                      type="checkbox"
                      id="toggle-3"
                      checked={userCreate}
                    />
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
              <TableCell align="start">Report</TableCell>
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
                    />
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
                    <input
                      type="checkbox"
                      id="toggle-16"
                      checked={reportRead}
                    />
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
                    <input
                      type="checkbox"
                      id="toggle-17"
                      checked={reportUpdate}
                    />
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
                    <input
                      type="checkbox"
                      id="toggle-18"
                      checked={reportDelete}
                    //   onChange={(e) => {
                    //     setReportDelete(e.target.checked);
                    //   }}
                    />
                    <span>
                      <small></small>
                    </span>
                  </label>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
      </MainCard>
   </>
  )
}

export default PermissionHistory