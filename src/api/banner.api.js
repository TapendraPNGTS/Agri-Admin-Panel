import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Banner extends HttpClient {
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

  AllBannerConfig = ApiRoutes.Banner.All;
  BannerByIdConfig = ApiRoutes.Banner.BannerById;
  AddBannerConfig = ApiRoutes.Banner.AddBanner;
  EditBannerConfig = ApiRoutes.Banner.EditBanner;
  DeleteBannerConfig = ApiRoutes.Banner.DeleteBanner;

  getAllBanner = async (data) => {
    return this.instance({
      method: this.AllBannerConfig.Method,
      url: this.AllBannerConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getBannerById = async (data) => {
    return this.instance({
      method: this.BannerByIdConfig.Method,
      url: this.BannerByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addBanner = async (data) => {
    return this.instance({
      method: this.AddBannerConfig.Method,
      url: this.AddBannerConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  editBanner = async (data) => {
    return this.instance({
      method: this.EditBannerConfig.Method,
      url: this.EditBannerConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  deleteBanner = async (data) => {
    return this.instance({
      method: this.DeleteBannerConfig.Method,
      url: this.DeleteBannerConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Banner;
