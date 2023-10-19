import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class SubCategory extends HttpClient {
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

  AllSubCategoryConfig = ApiRoutes.SubCategory.All;
  SubCategoryByIdConfig = ApiRoutes.SubCategory.SubCategoryById;
  SubCategoryByCategoryIdConfig = ApiRoutes.SubCategory.subCategoryByCategoryIdConfig;
  AddSubCategoryConfig = ApiRoutes.SubCategory.AddSubCategory;
  EditSubCategoryConfig = ApiRoutes.SubCategory.EditSubCategory;
  DeleteSubCategoryConfig = ApiRoutes.SubCategory.DeleteSubCategory;

  getAllSubCategory = async () => {
    return this.instance({
      method: this.AllSubCategoryConfig.Method,
      url: this.AllSubCategoryConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getSubCategoryById = async (data) => {
    return this.instance({
      method: this.SubCategoryByIdConfig.Method,
      url: this.SubCategoryByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getSubCategoryByCategoryId = async (data) => {
    return this.instance({
      method: this.SubCategoryByCategoryIdConfig.Method,
      url: this.SubCategoryByCategoryIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addSubCategory = async (data) => {
    return this.instance({
      method: this.AddSubCategoryConfig.Method,
      url: this.AddSubCategoryConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  editSubCategory = async (data) => {
    return this.instance({
      method: this.EditSubCategoryConfig.Method,
      url: this.EditSubCategoryConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  deleteSubCategory = async (data) => {
    return this.instance({
      method: this.DeleteSubCategoryConfig.Method,
      url: this.DeleteSubCategoryConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default SubCategory;
