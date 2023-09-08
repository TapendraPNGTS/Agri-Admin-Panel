import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class MemberList extends HttpClient {
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

  AllMemberListConfig = ApiRoutes.MemberList.All;
  MemberListByIdConfig = ApiRoutes.MemberList.MemberById;
  AddMemberListConfig = ApiRoutes.MemberList.AddMember;
  EditMemberListConfig = ApiRoutes.MemberList.EditMember;
  DeleteMemberListConfig = ApiRoutes.MemberList.DeleteMember;

  getAllMember = async () => {
    return this.instance({
      method: this.AllMemberListConfig.Method,
      url: this.AllMemberListConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getMemberById = async (data) => {
    return this.instance({
      method: this.MemberListByIdConfig.Method,
      url: this.MemberListByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addMember = async (data) => {
    return this.instance({
      method: this.AddMemberListConfig.Method,
      url: this.AddMemberListConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editMember = async (data) => {
    return this.instance({
      method: this.EditMemberListConfig.Method,
      url: this.EditMemberListConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteMember = async (data) => {
    return this.instance({
      method: this.DeleteMemberListConfig.Method,
      url: this.DeleteMemberListConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default MemberList;
