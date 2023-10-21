import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Grid, MenuItem, Select, Stack } from "@mui/material";

function App() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [active, setActive] = React.useState(true);
  const [role, setRole] = useState();
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

  //User State
  const [createUser, setCreateUser] = useState(false);
  const [readUser, setReadUser] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  //Order State
  const [createOrder, setCreateOrder] = useState(false);
  const [readOrder, setReadOrder] = useState(false);
  const [updateOrder, setUpdateOrder] = useState(false);
  const [deleteOrder, setDeleteOrder] = useState(false);

  //Purchase State
  const [createPurchase, setCreatePurchase] = useState(false);
  const [readPurchase, setReadPurchase] = useState(false);
  const [updatePurchase, setUpdatePurchaser] = useState(false);
  const [deletePurchase, setDeletePurchase] = useState(false);

  React.useEffect(() => {}, []);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  function handleSubmit(event) {
    event.preventDefault();
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      name: name,
      active: active,
      permission: [
        {
          Module: "Inventory",
          Create: isChecked,
          Read: readManage,
          Update: updateManage,
          Delete: deleteManage,
        },
        {
          Module: "Product",
          Create: roleCreate,
          Read: courseRead,
          Update: courseUpdate,
          Delete: courseDelete,
        },
        {
          Module: "Franchise",
          Create: userCreate,
          Read: freecourseRead,
          Update: freecourseUpdate,
          Delete: freecourseDelete,
        },
        {
          Module: "Staff",
          Create: leadCreate,
          Read: reportRead,
          Update: reportUpdate,
          Delete: reportDelete,
        },
        {
          Module: "User",
          Create: createUser,
          Read: readUser,
          Update: updateUser,
          Delete: deleteUser,
        },
        {
          Module: "Order",
          Create: createOrder,
          Read: readOrder,
          Update: updateOrder,
          Delete: deleteOrder,
        },
        {
          Module: "Purchase-History",
          Create: createPurchase,
          Read: readPurchase,
          Update: updatePurchase,
          Delete: deletePurchase,
        },
      ],
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}addRole`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/role");
          toast.success("Added Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          if (result.code === 201) {
            navigate("/role");
            toast.danger("User already exits", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          } else {
          }
        }
      })
      .catch((error) => {});
  }
  return (
    <MainCard title="Add Roles">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={4}>
            <Stack>
              <InputLabel required>Name</InputLabel>
              <Select
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="salesPerson">Sales Person</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <InputLabel required>Active</InputLabel>
              <Select
                id="active"
                name="active"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              >
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </Stack>
          </Grid>
        </Grid>
        <hr />
        <TableBody>
          <TableRow hover role="checkbox">
            <TableCell align="start">Inventory</TableCell>
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
            <TableCell align="start">Product</TableCell>
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
            <TableCell align="start">Franchise</TableCell>
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
            <TableCell align="start">Staff</TableCell>
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
          <TableRow hover role="checkbox">
            <TableCell align="start">User</TableCell>
            <TableCell align="start">
              <div className="switcher">
                <label htmlFor="toggle-5">
                  <span>
                    <small></small>
                  </span>
                  <small>Create&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-5"
                    checked={createUser}
                    onChange={(e) => {
                      setCreateUser(e.target.checked);
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
                <label htmlFor="toggle-19">
                  <span>
                    <small></small>
                  </span>
                  <small>Read&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-19"
                    checked={readUser}
                    onChange={(e) => {
                      setReadUser(e.target.checked);
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
                <label htmlFor="toggle-20">
                  <span>
                    <small></small>
                  </span>
                  <small>Update&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-20"
                    checked={updateUser}
                    onChange={(e) => {
                      setUpdateUser(e.target.checked);
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
                <label htmlFor="toggle-21">
                  <span>
                    <small></small>
                  </span>
                  <small>Delete&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-22"
                    checked={deleteUser}
                    onChange={(e) => {
                      setDeleteUser(e.target.checked);
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
                <label htmlFor="toggle-6">
                  <span>
                    <small></small>
                  </span>
                  <small>Create&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-6"
                    checked={createOrder}
                    onChange={(e) => {
                      setCreateOrder(e.target.checked);
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
                <label htmlFor="toggle-23">
                  <span>
                    <small></small>
                  </span>
                  <small>Read&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-23"
                    checked={readOrder}
                    onChange={(e) => {
                      setReadOrder(e.target.checked);
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
                <label htmlFor="toggle-24">
                  <span>
                    <small></small>
                  </span>
                  <small>Update&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-24"
                    checked={updateOrder}
                    onChange={(e) => {
                      setUpdateOrder(e.target.checked);
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
                <label htmlFor="toggle-25">
                  <span>
                    <small></small>
                  </span>
                  <small>Delete&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-25"
                    checked={deleteOrder}
                    onChange={(e) => {
                      setDeleteOrder(e.target.checked);
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
            <TableCell align="start">Purchase-History</TableCell>
            <TableCell align="start">
              <div className="switcher">
                <label htmlFor="toggle-7">
                  <span>
                    <small></small>
                  </span>
                  <small>Create&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-7"
                    checked={createPurchase}
                    onChange={(e) => {
                      setCreatePurchase(e.target.checked);
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
                <label htmlFor="toggle-26">
                  <span>
                    <small></small>
                  </span>
                  <small>Read&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-26"
                    checked={readPurchase}
                    onChange={(e) => {
                      setReadPurchase(e.target.checked);
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
                <label htmlFor="toggle-27">
                  <span>
                    <small></small>
                  </span>
                  <small>Update&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-27"
                    checked={updatePurchase}
                    onChange={(e) => {
                      setUpdatePurchaser(e.target.checked);
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
                <label htmlFor="toggle-28">
                  <span>
                    <small></small>
                  </span>
                  <small>Delete&nbsp;&nbsp;</small>
                  <input
                    type="checkbox"
                    id="toggle-28"
                    checked={deletePurchase}
                    onChange={(e) => {
                      setDeletePurchase(e.target.checked);
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
        <br />
        {/* <center> */}
        <Button variant="contained" type="submit">
          Add Roles
        </Button>
        {/* </center> */}
      </form>
    </MainCard>
  );
}

export default App;
