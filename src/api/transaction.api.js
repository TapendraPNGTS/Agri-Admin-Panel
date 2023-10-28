import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Transaction extends HttpClient {
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

  AllTransactionConfig = ApiRoutes.Transaction.AllFrTransaction;
  AllUserTransactionConfig = ApiRoutes.Transaction.AllUserTransaction;
  FranchiseTransactionConfig = ApiRoutes.Transaction.FranchiseTransaction;
  UserTransactionConfig = ApiRoutes.Transaction.UserTransaction;

  getAllFranchiseTransaction = async () => {
    return this.instance({
      method: this.AllTransactionConfig.Method,
      url: this.AllTransactionConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getAllUserTransaction = async () => {
    return this.instance({
      method: this.AllUserTransactionConfig.Method,
      url: this.AllUserTransactionConfig.Endpoint,
      headers: {},
      data: null,
    });
  };

  // franchise

  getFranchiseTransaction = async () => {
    return this.instance({
      method: this.FranchiseTransactionConfig.Method,
      url: this.FranchiseTransactionConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getUserTransaction = async () => {
    return this.instance({
      method: this.UserTransactionConfig.Method,
      url: this.UserTransactionConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
}

export default Transaction;
