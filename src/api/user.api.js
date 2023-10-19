import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../conffigs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class User extends HttpClient {
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

  AllUserConfig = ApiRoutes.User.All;
  AllUserCodConfig = ApiRoutes.User.AllUserCod;
  AllFrenchiseCodConfig = ApiRoutes.User.AllFrenchiseCod;
  addAcceptPaymentConfig = ApiRoutes.User.AddAcceptPayment;
  AllCartDetailConfig = ApiRoutes.User.AllCartDetail;
  UserByIdConfig = ApiRoutes.User.UserById;
  EditUserConfig = ApiRoutes.User.EditUser;
  AddUserConfig = ApiRoutes.User.AddUser;
  DeleteUserConfig = ApiRoutes.User.DeleteUser;

  getAllUser = async () => {
    return this.instance({
      method: this.AllUserConfig.Method,
      url: this.AllUserConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getAllUserCod = async () => {
    return this.instance({
      method: this.AllUserCodConfig.Method,
      url: this.AllUserCodConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getAllFrenchieCod = async () => {
    return this.instance({
      method: this.AllFrenchiseCodConfig.Method,
      url: this.AllFrenchiseCodConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getCartDetail = async (data) => {
    return this.instance({
      method: this.AllCartDetailConfig.Method,
      url: this.AllCartDetailConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addAcceptPayment = async (data) => {
    return this.instance({
      method: this.addAcceptPaymentConfig.Method,
      url: this.addAcceptPaymentConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getUserById = async (data) => {
    return this.instance({
      method: this.UserByIdConfig.Method,
      url: this.UserByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addUser = async (data) => {
    return this.instance({
      method: this.AddUserConfig.Method,
      url: this.AddUserConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editUser = async (data) => {
    return this.instance({
      method: this.EditUserConfig.Method,
      url: this.EditUserConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteUser = async (data) => {
    return this.instance({
      method: this.DeleteUserConfig.Method,
      url: this.DeleteUserConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default User;
