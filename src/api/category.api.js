import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Category extends HttpClient {
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

  AllCategoryConfig = ApiRoutes.Category.All;
  CategoryByIdConfig = ApiRoutes.Category.CategoryById;
  AddCategoryConfig = ApiRoutes.Category.AddCategory;
  EditCategoryConfig = ApiRoutes.Category.EditCategory;
  DeleteCategoryConfig = ApiRoutes.Category.DeleteCategory;

  getAllCategory = async (data) => {
    return this.instance({
      method: this.AllCategoryConfig.Method,
      url: this.AllCategoryConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getCategoryById = async (data) => {
    return this.instance({
      method: this.CategoryByIdConfig.Method,
      url: this.CategoryByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addCategory = async (data) => {
    return this.instance({
      method: this.AddCategoryConfig.Method,
      url: this.AddCategoryConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  editCategory = async (data) => {
    return this.instance({
      method: this.EditCategoryConfig.Method,
      url: this.EditCategoryConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  deleteCategory = async (data) => {
    return this.instance({
      method: this.DeleteCategoryConfig.Method,
      url: this.DeleteCategoryConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Category;
