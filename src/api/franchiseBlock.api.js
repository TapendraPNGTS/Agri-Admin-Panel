import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Block extends HttpClient {
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

  AllFranchiseBlockConfig = ApiRoutes.FranchiseBlock.AllFranchiseBlock;
  FranchiseBlockByIdConfig = ApiRoutes.FranchiseBlock.FranchiseBlockById;
  AddFranchiseBlockConfig = ApiRoutes.FranchiseBlock.AddFranchiseBlock;
  EditFranchiseBlockConfig = ApiRoutes.FranchiseBlock.EditFranchiseBlock;
  DeleteFranchiseBlockConfig = ApiRoutes.FranchiseBlock.DeleteFranchiseBlock;

  getAllBlockFranchise = async (data) => {
    return this.instance({
      method: this.AllFranchiseBlockConfig.Method,
      url: this.AllFranchiseBlockConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getBlockFranchiseById = async (data) => {
    return this.instance({
      method: this.FranchiseBlockByIdConfig.Method,
      url: this.FranchiseBlockByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addBlockFranchise = async (data) => {
    return this.instance({
      method: this.AddFranchiseBlockConfig.Method,
      url: this.AddFranchiseBlockConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editBlockFranchise = async (data) => {
    return this.instance({
      method: this.EditFranchiseBlockConfig.Method,
      url: this.EditFranchiseBlockConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteBlockFranchise = async (data) => {
    return this.instance({
      method: this.DeleteFranchiseBlockConfig.Method,
      url: this.DeleteFranchiseBlockConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Block;
