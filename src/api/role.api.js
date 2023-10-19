import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Role extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      config.headers["Authorization"] = `Bearer ${getTokenLocal()}`;
      config.headers["Authkey"] = process.env.REACT_APP_AUTH_KEY;
      return config;
    });
  };

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (response) => {
        return Promise.resolve(response);
      }
    );
  };

  AllRoleConfig = ApiRoutes.Role.All;
  RoleByIdConfig = ApiRoutes.Role.RoleById;
  AddRoleConfig = ApiRoutes.Role.AddRole;
  EditRoleConfig = ApiRoutes.Role.EditRole;
  DeleteRoleConfig = ApiRoutes.Role.DeleteRole;

  getAllRole = async () => {
    return this.instance({
      method: this.AllRoleConfig.Method,
      url: this.AllRoleConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getRoleById = async (data) => {
    return this.instance({
      method: this.RoleByIdConfig.Method,
      url: this.RoleByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addRole = async (data) => {
    return this.instance({
      method: this.AddRoleConfig.Method,
      url: this.AddRoleConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  editRole = async (data) => {
    return this.instance({
      method: this.EditRoleConfig.Method,
      url: this.EditRoleConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  deleteRole = async (data) => {
    return this.instance({
      method: this.DeleteRoleConfig.Method,
      url: this.DeleteRoleConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Role;
