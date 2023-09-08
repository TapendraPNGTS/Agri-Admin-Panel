import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Post extends HttpClient {
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

  AllPostConfig = ApiRoutes.Post.All;
  PostByIdConfig = ApiRoutes.Post.PostById;
  EditPostConfig = ApiRoutes.Post.EditPost;
  AddPostConfig = ApiRoutes.Post.AddPost;
  DeletePostConfig = ApiRoutes.Post.DeletePost;

  getAllPost = async () => {
    return this.instance({
      method: this.AllPostConfig.Method,
      url: this.AllPostConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getPostById = async (data) => {
    return this.instance({
      method: this.PostByIdConfig.Method,
      url: this.PostByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addPost = async (data) => {
    return this.instance({
      method: this.AddPostConfig.Method,
      url: this.AddPostConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  editPost = async (data) => {
    return this.instance({
      method: this.EditPostConfig.Method,
      url: this.EditPostConfig.Endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  };
  deletePost = async (data) => {
    return this.instance({
      method: this.DeletePostConfig.Method,
      url: this.DeletePostConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Post;
