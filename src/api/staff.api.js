import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Staff extends HttpClient {
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

  AllStaffConfig = ApiRoutes.Staff.All;
  StaffByIdConfig = ApiRoutes.Staff.StaffById;
  AddStaffConfig = ApiRoutes.Staff.AddStaff;
  EditStaffConfig = ApiRoutes.Staff.EditStaff;
  DeleteStaffConfig = ApiRoutes.Staff.DeleteStaff;

  getAllStaff = async () => {
    return this.instance({
      method: this.AllStaffConfig.Method,
      url: this.AllStaffConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getStaffById = async (data) => {
    return this.instance({
      method: this.StaffByIdConfig.Method,
      url: this.StaffByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addStaff = async (data) => {
    return this.instance({
      method: this.AddStaffConfig.Method,
      url: this.AddStaffConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  editStaff = async (data) => {
    return this.instance({
      method: this.EditStaffConfig.Method,
      url: this.EditStaffConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  deleteStaff = async (data) => {
    return this.instance({
      method: this.DeleteStaffConfig.Method,
      url: this.DeleteStaffConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Staff;
