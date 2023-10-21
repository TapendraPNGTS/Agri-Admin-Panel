import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class State extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      config.headers["Authorization"] = `Bearer ${getTokenLocal()}`;
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

  AllStateConfig = ApiRoutes.State.AllState;
  StateByIdConfig = ApiRoutes.State.StateById;
  AddStateConfig = ApiRoutes.State.AddState;
  EditStateConfig = ApiRoutes.State.EditState;
  DeleteStateConfig = ApiRoutes.State.DeleteState;

  getAllState = async (data) => {
    return this.instance({
      method: this.AllStateConfig.Method,
      url: this.AllStateConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getStateById = async (data) => {
    return this.instance({
      method: this.StateByIdConfig.Method,
      url: this.StateByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addState = async (data) => {
    return this.instance({
      method: this.AddStateConfig.Method,
      url: this.AddStateConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  editState = async (data) => {
    return this.instance({
      method: this.EditStateConfig.Method,
      url: this.EditStateConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  deleteState = async (data) => {
    return this.instance({
      method: this.DeleteStateConfig.Method,
      url: this.DeleteStateConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default State;
