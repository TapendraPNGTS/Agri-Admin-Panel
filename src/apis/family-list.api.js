import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class FamilyList extends HttpClient {
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

  AllFamilyListConfig = ApiRoutes.FamilyList.All;
  FamilyListByIdConfig = ApiRoutes.FamilyList.FamilyById;
  AddFamilyListConfig = ApiRoutes.FamilyList.AddFamily;
  EditFamilyListConfig = ApiRoutes.FamilyList.EditFamily;
  DeleteFamilyListConfig = ApiRoutes.FamilyList.DeleteFamily;

  getAllFamily = async () => {
    return this.instance({
      method: this.AllFamilyListConfig.Method,
      url: this.AllFamilyListConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getFamilyById = async (data) => {
    return this.instance({
      method: this.FamilyListByIdConfig.Method,
      url: this.FamilyListByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addFamily = async (data) => {
    return this.instance({
      method: this.AddFamilyListConfig.Method,
      url: this.AddFamilyListConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editFamily = async (data) => {
    return this.instance({
      method: this.EditFamilyListConfig.Method,
      url: this.EditFamilyListConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteFamily = async (data) => {
    return this.instance({
      method: this.DeleteFamilyListConfig.Method,
      url: this.DeleteFamilyListConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default FamilyList;
