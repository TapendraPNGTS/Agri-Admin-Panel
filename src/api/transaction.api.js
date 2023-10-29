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
  CommissionHistoryConfig = ApiRoutes.Transaction.CommissionHistory;

  getAllFranchiseTransaction = async () => {
    return this.instance({
      method: this.AllTransactionConfig.Method,
      url: this.AllTransactionConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getAllUserTransaction = async (reqBody) => {
    return this.instance({
      method: this.AllUserTransactionConfig.Method,
      url: this.AllUserTransactionConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };

  getAllCommissionHistory = async (reqBody) => {
    return this.instance({
      method: this.CommissionHistoryConfig.Method,
      url: this.CommissionHistoryConfig.Endpoint,
      headers: {},
      data: reqBody,
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
