import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Cod extends HttpClient {
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

  AllCodConfig = ApiRoutes.Cod.Cod;
  PhonePayConfig =ApiRoutes.Cod.PhonePay;

  getCod = async (data) => {
    return this.instance({
      method: this.AllCodConfig.Method,
      url: this.AllCodConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getPhonePay = async (data) => {
    return this.instance({
      method: this.PhonePayConfig.Method,
      url: this.PhonePayConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Cod;
