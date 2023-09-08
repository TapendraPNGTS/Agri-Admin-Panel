import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Task extends HttpClient {
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

  AllTaskConfig = ApiRoutes.Task.All;
  TaskByIdConfig = ApiRoutes.Task.TaskById;
  AddTaskConfig = ApiRoutes.Task.AddTask;
  EditTaskConfig = ApiRoutes.Task.EditTask;
  DeleteTaskConfig = ApiRoutes.Task.DeleteTask;

  getAllTask = async () => {
    return this.instance({
      method: this.AllTaskConfig.Method,
      url: this.AllTaskConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getTaskById = async (data) => {
    return this.instance({
      method: this.TaskByIdConfig.Method,
      url: this.TaskByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addTask = async (data) => {
    return this.instance({
      method: this.AddTaskConfig.Method,
      url: this.AddTaskConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  editTask = async (data) => {
    return this.instance({
      method: this.EditTaskConfig.Method,
      url: this.EditTaskConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  deleteTask = async (data) => {
    return this.instance({
      method: this.DeleteTaskConfig.Method,
      url: this.DeleteTaskConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Task;
