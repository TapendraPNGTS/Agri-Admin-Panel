import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Frencise extends HttpClient {
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

  AllFrenciseConfig = ApiRoutes.Frencise.All;
  AllFrenciseAcceptConfig = ApiRoutes.Frencise.FrenciseAccept;
  FrenciseByIdConfig = ApiRoutes.Frencise.FrenciseById;
  AddFrenciseConfig = ApiRoutes.Frencise.AddFrencise;
  EditFrenciseConfig = ApiRoutes.Frencise.EditFrencise;
  DeleteFrenciseConfig = ApiRoutes.Frencise.DeleteFrencise;
  FrenciseCheckConfig = ApiRoutes.Frencise.FrenciseCheck;

  getAllFrencise = async () => {
    return this.instance({
      method: this.AllFrenciseConfig.Method,
      url: this.AllFrenciseConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getAllFrenciseAccept = async () => {
    return this.instance({
      method: this.AllFrenciseAcceptConfig.Method,
      url: this.AllFrenciseAcceptConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getFrenciseById = async (data) => {
    return this.instance({
      method: this.FrenciseByIdConfig.Method,
      url: this.FrenciseByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  frenciseCheck = async (data) => {
    return this.instance({
      method: this.FrenciseCheckConfig.Method,
      url: this.FrenciseCheckConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addFrencise = async (data) => {
    return this.instance({
      method: this.AddFrenciseConfig.Method,
      url: this.AddFrenciseConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editFrencise = async (data) => {
    return this.instance({
      method: this.EditFrenciseConfig.Method,
      url: this.EditFrenciseConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteFrencise = async (data) => {
    return this.instance({
      method: this.DeleteFrenciseConfig.Method,
      url: this.DeleteFrenciseConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Frencise;
