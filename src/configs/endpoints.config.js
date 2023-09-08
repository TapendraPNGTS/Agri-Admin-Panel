export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

const ApiRoutes = {
  Auth: {
    Login: {
      Endpoint: "/login",
      Method: HttpMethod.Post,
    },
  },
  Product: {
    All: {
      Endpoint: "product/getAllProduct",
      Method: HttpMethod.Post,
    },
    ProductById: {
      Endpoint: "product/getProductById",
      Method: HttpMethod.Post,
    },
    AddProduct: {
      Endpoint: "product/createProduct",
      Method: HttpMethod.Post,
    },
    EditProduct: {
      Endpoint: "product/editProduct",
      Method: HttpMethod.Post,
    },
    DeleteProduct: {
      Endpoint: "product/deleteProduct",
      Method: HttpMethod.Post,
    },
  },
  News: {
    All: {
      Endpoint: "news/getAllNews",
      Method: HttpMethod.Post,
    },
    NewsById: {
      Endpoint: "news/getNewsById",
      Method: HttpMethod.Post,
    },
    AddNews: {
      Endpoint: "news/createNews",
      Method: HttpMethod.Post,
    },
    EditNews: {
      Endpoint: "news/editNews",
      Method: HttpMethod.Post,
    },
    DeleteNews: {
      Endpoint: "news/deleteNews",
      Method: HttpMethod.Post,
    },
  },
  Post: {
    All: {
      Endpoint: "social/getAllPost",
      Method: HttpMethod.Post,
    },
    PostById: {
      Endpoint: "social/getPostById",
      Method: HttpMethod.Post,
    },
    AddPost: {
      Endpoint: "social/createPost",
      Method: HttpMethod.Post,
    },
    EditPost: {
      Endpoint: "social/editPost",
      Method: HttpMethod.Post,
    },
    DeletePost: {
      Endpoint: "social/deletePost",
      Method: HttpMethod.Post,
    },
  },
  Task: {
    All: {
      Endpoint: "task/getAllTask",
      Method: HttpMethod.Post,
    },
    TaskById: {
      Endpoint: "task/getTaskById",
      Method: HttpMethod.Post,
    },
    AddTask: {
      Endpoint: "task/createTask",
      Method: HttpMethod.Post,
    },
    EditTask: {
      Endpoint: "task/editTask",
      Method: HttpMethod.Post,
    },
    DeleteTask: {
      Endpoint: "task/deleteTask",
      Method: HttpMethod.Post,
    },
  },
  Map: {
    GetMap: {
      Endpoint: "map/getMap",
      Method: HttpMethod.Post,
    },
    UpdateMap: {
      Endpoint: "map/updateMap",
      Method: HttpMethod.Post,
    },
  },
  User: {
    All: {
      Endpoint: "user/getAllUser",
      Method: HttpMethod.Post,
    },
    UserById: {
      Endpoint: "user/getUserById",
      Method: HttpMethod.Post,
    },
    AddUser: {
      Endpoint: "user/createUser",
      Method: HttpMethod.Post,
    },
    EditUser: {
      Endpoint: "user/editUser",
      Method: HttpMethod.Post,
    },
    DeleteUser: {
      Endpoint: "user/deleteUser",
      Method: HttpMethod.Post,
    },
  },
  MemberList: {
    All: {
      Endpoint: "voter/getAllVoter",
      Method: HttpMethod.Post,
    },
    MemberById: {
      Endpoint: "voter/getVoterById",
      Method: HttpMethod.Post,
    },
    AddMember: {
      Endpoint: "voter/createVoter",
      Method: HttpMethod.Post,
    },
    EditMember: {
      Endpoint: "voter/editVoter",
      Method: HttpMethod.Post,
    },
    DeleteMember: {
      Endpoint: "voter/deleteVoter",
      Method: HttpMethod.Post,
    },
  },
  FamilyList: {
    All: {
      Endpoint: "family/getAllFamily",
      Method: HttpMethod.Post,
    },
    FamilyById: {
      Endpoint: "family/getFamilyById",
      Method: HttpMethod.Post,
    },
    AddFamily: {
      Endpoint: "family/createFamily",
      Method: HttpMethod.Post,
    },
    EditFamily: {
      Endpoint: "family/editFamily",
      Method: HttpMethod.Post,
    },
    DeleteFamily: {
      Endpoint: "family/deleteFamily",
      Method: HttpMethod.Post,
    },
  },
};

export default ApiRoutes;
