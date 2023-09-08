import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Maps extends HttpClient {
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

  MapsConfig = ApiRoutes.Map.GetMap;
  UpdateMapsConfig = ApiRoutes.Map.UpdateMap;

  getMap = async (data) => {
    return this.instance({
      method: this.MapsConfig.Method,
      url: this.MapsConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  UpdateMap = async (data) => {
    return this.instance({
      method: this.UpdateMapsConfig.Method,
      url: this.UpdateMapsConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
}

export default Maps;
