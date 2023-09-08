import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class News extends HttpClient {
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

  AllNewsConfig = ApiRoutes.News.All;
  NewsByIdConfig = ApiRoutes.News.NewsById;
  AddNewsConfig = ApiRoutes.News.AddNews;
  EditNewsConfig = ApiRoutes.News.EditNews;
  DeleteNewsConfig = ApiRoutes.News.DeleteNews;

  getAllNews = async () => {
    return this.instance({
      method: this.AllNewsConfig.Method,
      url: this.AllNewsConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getNewsById = async (data) => {
    return this.instance({
      method: this.NewsByIdConfig.Method,
      url: this.NewsByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addNews = async (data) => {
    return this.instance({
      method: this.AddNewsConfig.Method,
      url: this.AddNewsConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  editNews = async (data) => {
    return this.instance({
      method: this.EditNewsConfig.Method,
      url: this.EditNewsConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  deleteNews = async (data) => {
    return this.instance({
      method: this.DeleteNewsConfig.Method,
      url: this.DeleteNewsConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default News;
