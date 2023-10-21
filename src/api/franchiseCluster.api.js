import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Cluster extends HttpClient {
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

  AllFranchiseClusterConfig = ApiRoutes.FranchiseCluster.AllFranchiseCluster;
  FranchiseClusterByIdConfig = ApiRoutes.FranchiseCluster.FranchiseClusterById;
  AddFranchiseClusterConfig = ApiRoutes.FranchiseCluster.AddFranchiseCluster;
  EditFranchiseClusterConfig = ApiRoutes.FranchiseCluster.EditFranchiseCluster;
  DeleteFranchiseClusterConfig =
    ApiRoutes.FranchiseCluster.DeleteFranchiseCluster;

  getAllClusterFranchise = async (data) => {
    return this.instance({
      method: this.AllFranchiseClusterConfig.Method,
      url: this.AllFranchiseClusterConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getClusterFranchiseById = async (data) => {
    return this.instance({
      method: this.FranchiseClusterByIdConfig.Method,
      url: this.FranchiseClusterByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addClusterFranchise = async (data) => {
    return this.instance({
      method: this.AddFranchiseClusterConfig.Method,
      url: this.AddFranchiseClusterConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editClusterFranchise = async (data) => {
    return this.instance({
      method: this.EditFranchiseClusterConfig.Method,
      url: this.EditFranchiseClusterConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteClusterFranchise = async (data) => {
    return this.instance({
      method: this.DeleteFranchiseClusterConfig.Method,
      url: this.DeleteFranchiseClusterConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Cluster;
