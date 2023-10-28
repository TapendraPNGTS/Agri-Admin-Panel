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

  AllFranchiseStateConfig = ApiRoutes.FranchiseState.AllFranchiseState;
  FranchiseStateByIdConfig = ApiRoutes.FranchiseState.FranchiseStateById;
  AddFranchiseStateConfig = ApiRoutes.FranchiseState.AddFranchiseState;
  EditFranchiseStateConfig = ApiRoutes.FranchiseState.EditFranchiseState;
  DeleteFranchiseStateConfig = ApiRoutes.FranchiseState.DeleteFranchiseState;
  PendingStateFranchiseConfig = ApiRoutes.FranchiseState.PendingStateFranchise;
  frenciseStateAcceptConfig = ApiRoutes.FranchiseState.frenciseStateAccept;
  frenciseClusterAcceptConfig = ApiRoutes.FranchiseState.frenciseClusterAccept;

  getAllStateFranchise = async (data) => {
    return this.instance({
      method: this.AllFranchiseStateConfig.Method,
      url: this.AllFranchiseStateConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getStateFranchiseById = async (data) => {
    return this.instance({
      method: this.FranchiseStateByIdConfig.Method,
      url: this.FranchiseStateByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getAllPendingStateFranchise = async (data) => {
    return this.instance({
      method: this.PendingStateFranchiseConfig.Method,
      url: this.PendingStateFranchiseConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addStateFranchise = async (data) => {
    return this.instance({
      method: this.AddFranchiseStateConfig.Method,
      url: this.AddFranchiseStateConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editStateFranchise = async (data) => {
    return this.instance({
      method: this.EditFranchiseStateConfig.Method,
      url: this.EditFranchiseStateConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  frenciseStateAccept = async (data) => {
    return this.instance({
      method: this.frenciseStateAcceptConfig.Method,
      url: this.frenciseStateAcceptConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  frenciseClusterAccept = async (data) => {
    return this.instance({
      method: this.frenciseClusterAcceptConfig.Method,
      url: this.frenciseClusterAcceptConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteStateFranchise = async (data) => {
    return this.instance({
      method: this.DeleteFranchiseStateConfig.Method,
      url: this.DeleteFranchiseStateConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default State;
