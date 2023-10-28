import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Order extends HttpClient {
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

  AllFranchisCompleteConfig = ApiRoutes.Order.AllFranchiseComplete;
  AllFranchisPendingConfig = ApiRoutes.Order.AllFranchisePending;
  AllUserCompleteConfig = ApiRoutes.Order.AllUserComplete;
  AllUserPendingConfig = ApiRoutes.Order.AllUserPending;

  getAllFranchisComplete = async () => {
    return this.instance({
      method: this.AllFranchisCompleteConfig.Method,
      url: this.AllFranchisCompleteConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getAllFranchisPending = async () => {
    return this.instance({
      method: this.AllFranchisPendingConfig.Method,
      url: this.AllFranchisPendingConfig.Endpoint,
      headers: {},
      data: null,
    });
  };

  getAllUserOrderComplete = async () => {
    return this.instance({
      method: this.AllUserCompleteConfig.Method,
      url: this.AllUserCompleteConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getAllUserOrderPending = async () => {
    return this.instance({
      method: this.AllUserPendingConfig.Method,
      url: this.AllUserPendingConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
}

export default Order;
