import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Attendence extends HttpClient {
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

  AllAttendenceConfig = ApiRoutes.Attendence.All;
  AttAendanceByIdConfig = ApiRoutes.Attendence.AttendenceById;
  AddAttendenceConfig = ApiRoutes.Attendence.AddAttendence;
  EditAttendenceConfig = ApiRoutes.Attendence.EditAttendence;
  DeleteAttendenceConfig = ApiRoutes.Attendence.DeleteAttendence;

  getAllAttendence = async () => {
    return this.instance({
      method: this.AllAttendenceConfig.Method,
      url: this.AllAttendenceConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getAttendenceById = async (data) => {
    return this.instance({
      method: this.AttendenceByIdConfig.Method,
      url: this.AttendenceByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addAttendence = async (data) => {
    return this.instance({
      method: this.AddAttendenceConfig.Method,
      url: this.AddAttendenceConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  editAttendence = async (data) => {
    return this.instance({
      method: this.EditAttendenceConfig.Method,
      url: this.EditAttendenceConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  deleteAttendence = async (data) => {
    return this.instance({
      method: this.DeleteAttendenceConfig.Method,
      url: this.DeleteAttendenceConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Attendence;
