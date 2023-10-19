import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class District extends HttpClient {
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

  AllDistrictConfig = ApiRoutes.District.AllDistrict;
  DistrictByIdConfig = ApiRoutes.District.DistrictById;
  DistrictByStateIdConfig = ApiRoutes.District.DistrictByStateId;
  AddDistrictConfig = ApiRoutes.District.AddDistrict;
  EditDistrictConfig = ApiRoutes.District.EditDistrict;
  DeleteDistrictConfig = ApiRoutes.District.DeleteDistrict;

  getAllDistrict = async (data) => {
    return this.instance({
      method: this.AllDistrictConfig.Method,
      url: this.AllDistrictConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getDistrictById = async (data) => {
    return this.instance({
      method: this.DistrictByIdConfig.Method,
      url: this.DistrictByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getDistrictByStateId = async (data) => {
    return this.instance({
      method: this.DistrictByStateIdConfig.Method,
      url: this.DistrictByStateIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addDistrict = async (data) => {
    return this.instance({
      method: this.AddDistrictConfig.Method,
      url: this.AddDistrictConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editDistrict = async (data) => {
    return this.instance({
      method: this.EditDistrictConfig.Method,
      url: this.EditDistrictConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteDistrict = async (data) => {
    return this.instance({
      method: this.DeleteDistrictConfig.Method,
      url: this.DeleteDistrictConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default District;
