import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Commissiom extends HttpClient {
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

  AllCommissiomConfig = ApiRoutes.Commissiom.All;
  CommissiomByIdConfig = ApiRoutes.Commissiom.CommissiomById;
  AddCommissiomConfig = ApiRoutes.Commissiom.AddCommissiom;
  EditCommissiomConfig = ApiRoutes.Commissiom.EditCommissiom;
  DeleteCommissiomConfig = ApiRoutes.Commissiom.DeleteCommissiom;

  getAllCommissiom = async () => {
    return this.instance({
      method: this.AllCommissiomConfig.Method,
      url: this.AllCommissiomConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getCommissiomById = async (data) => {
    return this.instance({
      method: this.CommissiomByIdConfig.Method,
      url: this.CommissiomByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addCommissiom = async (data) => {
    return this.instance({
      method: this.AddCommissiomConfig.Method,
      url: this.AddCommissiomConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editCommissiom = async (data) => {
    return this.instance({
      method: this.EditCommissiomConfig.Method,
      url: this.EditCommissiomConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteCommissiom = async (data) => {
    return this.instance({
      method: this.DeleteCommissiomConfig.Method,
      url: this.DeleteCommissiomConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Commissiom;
