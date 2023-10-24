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

  AllClusterConfig = ApiRoutes.Cluster.AllCluster;
  ClusterByIdConfig = ApiRoutes.Cluster.ClusterById;
  AddClusterConfig = ApiRoutes.Cluster.AddCluster;
  EditClusterConfig = ApiRoutes.Cluster.EditCluster;
  DeleteClusterConfig = ApiRoutes.Cluster.DeleteCluster;

  getAllCluster = async (data) => {
    return this.instance({
      method: this.AllClusterConfig.Method,
      url: this.AllClusterConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getClusterById = async (data) => {
    return this.instance({
      method: this.ClusterByIdConfig.Method,
      url: this.ClusterByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addCluster = async (data) => {
    return this.instance({
      method: this.AddClusterConfig.Method,
      url: this.AddClusterConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editCluster = async (data) => {
    return this.instance({
      method: this.EditClusterConfig.Method,
      url: this.EditClusterConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteCluster = async (data) => {
    return this.instance({
      method: this.DeleteClusterConfig.Method,
      url: this.DeleteClusterConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Cluster;
