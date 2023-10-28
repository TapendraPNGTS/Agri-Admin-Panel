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

  AllFranchiseDistrictConfig = ApiRoutes.FranchiseDistrict.AllFranchiseDistrict;
  FranchiseDistrictByIdConfig =
    ApiRoutes.FranchiseDistrict.FranchiseDistrictById;
  AddFranchiseDistrictConfig = ApiRoutes.FranchiseDistrict.AddFranchiseDistrict;
  EditFranchiseDistrictConfig =
    ApiRoutes.FranchiseDistrict.EditFranchiseDistrict;
  DeleteFranchiseDistrictConfig =
    ApiRoutes.FranchiseDistrict.DeleteFranchiseDistrict;

  PendingDistrictFranchiseConfig =
    ApiRoutes.FranchiseDistrict.PendingDistrictFranchise;
  frenciseDistrictAcceptConfig =
    ApiRoutes.FranchiseDistrict.frenciseDistrictAccept;

  getAllDistrictFranchise = async (data) => {
    return this.instance({
      method: this.AllFranchiseDistrictConfig.Method,
      url: this.AllFranchiseDistrictConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  frenciseDistrictAccept = async (data) => {
    return this.instance({
      method: this.frenciseDistrictAcceptConfig.Method,
      url: this.frenciseDistrictAcceptConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getDistrictFranchiseById = async (data) => {
    return this.instance({
      method: this.FranchiseDistrictByIdConfig.Method,
      url: this.FranchiseDistrictByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getAllPendingDistrictFranchise = async (data) => {
    return this.instance({
      method: this.PendingDistrictFranchiseConfig.Method,
      url: this.PendingDistrictFranchiseConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addDistrictFranchise = async (data) => {
    return this.instance({
      method: this.AddFranchiseDistrictConfig.Method,
      url: this.AddFranchiseDistrictConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editDistrictFranchise = async (data) => {
    return this.instance({
      method: this.EditFranchiseDistrictConfig.Method,
      url: this.EditFranchiseDistrictConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteDistrictFranchise = async (data) => {
    return this.instance({
      method: this.DeleteFranchiseDistrictConfig.Method,
      url: this.DeleteFranchiseDistrictConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default District;
