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

  AllBlockConfig = ApiRoutes.Block.AllBlock;
  BlockByIdConfig = ApiRoutes.Block.BlockById;
  AddBlockConfig = ApiRoutes.Block.AddBlock;
  EditBlockConfig = ApiRoutes.Block.EditBlock;
  DeleteBlockConfig = ApiRoutes.Block.DeleteBlock;

  getAllBlock = async (data) => {
    return this.instance({
      method: this.AllBlockConfig.Method,
      url: this.AllBlockConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getBlockById = async (data) => {
    return this.instance({
      method: this.BlockByIdConfig.Method,
      url: this.BlockByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addBlock = async (data) => {
    return this.instance({
      method: this.AddBlockConfig.Method,
      url: this.AddBlockConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editBlock = async (data) => {
    return this.instance({
      method: this.EditBlockConfig.Method,
      url: this.EditBlockConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteBlock = async (data) => {
    return this.instance({
      method: this.DeleteBlockConfig.Method,
      url: this.DeleteBlockConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Block;
