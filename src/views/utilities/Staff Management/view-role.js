import React, { useState, useEffect, useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { Grid, Stack, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import RoleApi from "../../../api/role.api";

function App() {
  const params = useParams();
  const roleApi = new RoleApi();
  const [name, setName] = useState("");
  const [rows, setRows] = useState([]);

  const getRoleById = useCallback(async () => {
    try {
      const getRoleByIdResponse = await roleApi.getRoleById({
        roleId: params.id,
      });
      if (getRoleByIdResponse && getRoleByIdResponse?.data?.code === 200) {
        setName(getRoleByIdResponse.data.data.Name);
        setRows(getRoleByIdResponse.data.data.IsPermission);
      } else {
        return toast.error(`Something went wrong!`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

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
                  <label htmlFor="toggle-9">
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
      </TableBody>
      <br />
    </MainCard>
  );
}

export default App;
