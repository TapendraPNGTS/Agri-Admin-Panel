import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class ZipCode extends HttpClient {
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

  AllZipCodeConfig = ApiRoutes.ZipCode.AllZipCode;
  ZipCodeByIdConfig = ApiRoutes.ZipCode.ZipCodeById;
  AddZipCodeConfig = ApiRoutes.ZipCode.AddZipCode;
  EditZipCodeConfig = ApiRoutes.ZipCode.EditZipCode;
  DeleteZipCodeConfig = ApiRoutes.ZipCode.DeleteZipCode;

  getAllZipCode = async (data) => {
    return this.instance({
      method: this.AllZipCodeConfig.Method,
      url: this.AllZipCodeConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getZipCodeById = async (data) => {
    return this.instance({
      method: this.ZipCodeByIdConfig.Method,
      url: this.ZipCodeByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addZipCode = async (data) => {
    return this.instance({
      method: this.AddZipCodeConfig.Method,
      url: this.AddZipCodeConfig.Endpoint,
      headers: { },
      data: data,
    });
  };
  editZipCode = async (data) => {
    return this.instance({
      method: this.EditZipCodeConfig.Method,
      url: this.EditZipCodeConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteZipCode = async (data) => {
    return this.instance({
      method: this.DeleteZipCodeConfig.Method,
      url: this.DeleteZipCodeConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default ZipCode;
