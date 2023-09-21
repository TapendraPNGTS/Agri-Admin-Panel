import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;

class ProductList extends HttpClient {
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

  AllProductListConfig = ApiRoutes.ProductList.All;
  ProductListByIdConfig = ApiRoutes.ProductList.ProductById;
  AddProductListConfig = ApiRoutes.ProductList.AddProduct;
  EditProductListConfig = ApiRoutes.ProductList.EditProduct;
  DeleteProductListConfig = ApiRoutes.ProductList.DeleteProduct;

  getAllProduct = async () => {
    return this.instance({
      method: this.AllProductListConfig.Method,
      url: this.AllProductListConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getProductById = async (data) => {
    return this.instance({
      method: this.ProductListByIdConfig.Method,
      url: this.ProductListByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  addProduct = async (data) => {
    return this.instance({
      method: this.AddProductListConfig.Method,
      url: this.AddProductListConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  editProduct = async (data) => {
    return this.instance({
      method: this.EditProductListConfig.Method,
      url: this.EditProductListConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  deleteProduct = async (data) => {
    return this.instance({
      method: this.DeleteProductListConfig.Method,
      url: this.DeleteProductListConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default ProductList;
