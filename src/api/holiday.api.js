import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Holiday extends HttpClient {
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

  AllHolidayConfig = ApiRoutes.Holiday.All;
  HolidayByIdConfig = ApiRoutes.Holiday.HolidayById;
  AddHolidayConfig = ApiRoutes.Holiday.AddHoliday;
  EditHolidayConfig = ApiRoutes.Holiday.EditHoliday;
  DeleteHolidayConfig = ApiRoutes.Holiday.DeleteHoliday;

  getAllHoliday = async () => {
    return this.instance({
      method: this.AllHolidayConfig.Method,
      url: this.AllHolidayConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getHolidayById = async (data) => {
    return this.instance({
      method: this.HolidayByIdConfig.Method,
      url: this.HolidayByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addHoliday = async (data) => {
    return this.instance({
      method: this.AddHolidayConfig.Method,
      url: this.AddHolidayConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editHoliday = async (data) => {
    return this.instance({
      method: this.EditHolidayConfig.Method,
      url: this.EditHolidayConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteHoliday = async (data) => {
    return this.instance({
      method: this.DeleteHolidayConfig.Method,
      url: this.DeleteHolidayConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Holiday;
