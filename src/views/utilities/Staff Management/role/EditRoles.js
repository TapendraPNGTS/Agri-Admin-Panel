import React from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  CircularProgress
} from "@mui/material";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import RoleApi from "../../../../api/role.api";

function App() {
  const navigate = useNavigate();
  const roleApi = new RoleApi();
  const params = useParams();
  const [name, setName] = React.useState("");
  const [active, setActive] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const updateRoleResponse = await roleApi.editRole({
      roleId: params.id,
      name: name,
      active: active,
    });
    if (updateRoleResponse && updateRoleResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/role", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  return (
    <MainCard title="Update Role">
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
        <br />
        {/* <center> */}
        {isLoading ? (
            <CircularProgress />
        ) : (
          <>
            <Button variant="contained" type="submit">
              Update Roles
            </Button>
          </>
        )}
        {/* </center> */}
      </form>
    </MainCard>
  );
}

export default App;
