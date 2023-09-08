import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class Product extends HttpClient {
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

  AllProductConfig = ApiRoutes.Product.All;
  ProductByIdConfig = ApiRoutes.Product.ProductById;
  AddProductConfig = ApiRoutes.Product.AddProduct;
  EditProductConfig = ApiRoutes.Product.EditProduct;
  DeleteProductConfig = ApiRoutes.Product.DeleteProduct;

  getAllProduct = async () => {
    return this.instance({
      method: this.AllProductConfig.Method,
      url: this.AllProductConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getProductById = async (data) => {
    return this.instance({
      method: this.ProductByIdConfig.Method,
      url: this.ProductByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addProduct = async (data) => {
    return this.instance({
      method: this.AddProductConfig.Method,
      url: this.AddProductConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editProduct = async (data) => {
    return this.instance({
      method: this.EditProductConfig.Method,
      url: this.EditProductConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteProduct = async (data) => {
    return this.instance({
      method: this.DeleteProductConfig.Method,
      url: this.DeleteProductConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default Product;
