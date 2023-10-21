import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Village extends HttpClient {
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
  
  AllFranchiseVillageConfig = ApiRoutes.FranchiseVillage.AllFranchiseVillage;
  FranchiseVillageByIdConfig = ApiRoutes.FranchiseVillage.FranchiseVillageById;
  AddFranchiseVillageConfig = ApiRoutes.FranchiseVillage.AddFranchiseVillage;
  EditFranchiseVillageConfig = ApiRoutes.FranchiseVillage.EditFranchiseVillage;
  DeleteFranchiseVillageConfig =
    ApiRoutes.FranchiseVillage.DeleteFranchiseVillage;

  getAllVillageFranchise = async (data) => {
    return this.instance({
      method: this.AllFranchiseVillageConfig.Method,
      url: this.AllFranchiseVillageConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getVillageFranchiseById = async (data) => {
    return this.instance({
      method: this.FranchiseVillageByIdConfig.Method,
      url: this.FranchiseVillageByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addVillageFranchise = async (data) => {
    return this.instance({
      method: this.AddFranchiseVillageConfig.Method,
      url: this.AddFranchiseVillageConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editVillageFranchise = async (data) => {
    return this.instance({
      method: this.EditFranchiseVillageConfig.Method,
      url: this.EditFranchiseVillageConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteVillageFranchise = async (data) => {
    return this.instance({
      method: this.DeleteFranchiseVillageConfig.Method,
      url: this.DeleteFranchiseVillageConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Village;
