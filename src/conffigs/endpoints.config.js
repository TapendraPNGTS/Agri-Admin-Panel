export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

const ApiRoutes = {
  Dashboard: {
    Data: {
      Endpoint: "/dashboard",
      Method: HttpMethod.Post,
    },
  },
  Auth: {
    Login: {
      Endpoint: "/login",
      Method: HttpMethod.Post,
    },
  },
  User: {
    All: {
      Endpoint: "/getAllUser",
      Method: HttpMethod.Post,
    },
    UserById: {
      Endpoint: "/getUserById",
      Method: HttpMethod.Post,
    },
  },
  Banner: {
    All: {
      Endpoint: "/getAllBanner",
      Method: HttpMethod.Post,
    },
    BannerById: {
      Endpoint: "/getBannerById",
      Method: HttpMethod.Post,
    },
    AddBanner: {
      Endpoint: "/addBanner",
      Method: HttpMethod.Post,
    },
    EditBanner: {
      Endpoint: "/updateBanner",
      Method: HttpMethod.Post,
    },
    DeleteBanner: {
      Endpoint: "/deleteBanner",
      Method: HttpMethod.Post,
    },
  },
  Category: {
    All: {
      Endpoint: "/getAllCategory",
      Method: HttpMethod.Post,
    },
    CategoryById: {
      Endpoint: "/getCategoryById",
      Method: HttpMethod.Post,
    },
    AddCategory: {
      Endpoint: "/addCategory",
      Method: HttpMethod.Post,
    },
    EditCategory: {
      Endpoint: "/updateCategory",
      Method: HttpMethod.Post,
    },
    DeleteCategory: {
      Endpoint: "/deleteCategory",
      Method: HttpMethod.Post,
    },
  },
  Attendence: {
    All: {
      Endpoint: "/getAllAttendence",
      Method: HttpMethod.Post,
    },
    AttendenceById: {
      Endpoint: "/getAttendenceById",
      Method: HttpMethod.Post,
    },
    AddAttendence: {
      Endpoint: "/addAttendence",
      Method: HttpMethod.Post,
    },
    EditAttendence: {
      Endpoint: "/updateAttendence",
      Method: HttpMethod.Post,
    },
    DeleteAttendence: {
      Endpoint: "/deleteAttendence",
      Method: HttpMethod.Post,
    },
  },
  Holiday: {
    All: {
      Endpoint: "/getAllHoliday",
      Method: HttpMethod.Post,
    },
    HolidayById: {
      Endpoint: "/getHolidayById",
      Method: HttpMethod.Post,
    },
    AddHoliday: {
      Endpoint: "/addHoliday",
      Method: HttpMethod.Post,
    },
    EditHoliday: {
      Endpoint: "/updateHoliday",
      Method: HttpMethod.Post,
    },
    DeleteHoliday: {
      Endpoint: "/deleteHoliday",
      Method: HttpMethod.Post,
    },
  },
  Service: {
    All: {
      Endpoint: "/getAllService",
      Method: HttpMethod.Post,
    },
    ServiceById: {
      Endpoint: "/getServiceById",
      Method: HttpMethod.Post,
    },
    AddService: {
      Endpoint: "/addService",
      Method: HttpMethod.Post,
    },
    EditService: {
      Endpoint: "/updateService",
      Method: HttpMethod.Post,
    },
    DeleteService: {
      Endpoint: "/deleteService",
      Method: HttpMethod.Post,
    },
  },  SubCategory: {
    All: {
      Endpoint: "/getAllSubCategory",
      Method: HttpMethod.Post,
    },
    SubCategoryById: {
      Endpoint: "/getSubCategoryById",
      Method: HttpMethod.Post,
    },
    subCategoryByCategoryIdConfig: {
      Endpoint: "/getSubCategoryByCategoryId",
      Method: HttpMethod.Post,
    },
    AddSubCategory: {
      Endpoint: "/addSubCategory",
      Method: HttpMethod.Post,
    },
    EditSubCategory: {
      Endpoint: "/updateSubCategory",
      Method: HttpMethod.Post,
    },
    DeleteSubCategory: {
      Endpoint: "/deleteCategory",
      Method: HttpMethod.Post,
    },
  },
  Product: {
    All: {
      Endpoint: "/getAllProduct",
      Method: HttpMethod.Post,
    },
    AllProductFrencise: {
      Endpoint: "/getFranchiseProduct",
      Method: HttpMethod.Post,
    },
    ProductById: {
      Endpoint: "/getProductById",
      Method: HttpMethod.Post,
    },
    AddProduct: {
      Endpoint: "/addProduct",
      Method: HttpMethod.Post,
    },
    addProductVarients: {
      Endpoint: "/addProductVarients",
      Method: HttpMethod.Post,
    },
    EditProduct: {
      Endpoint: "/updateProduct",
      Method: HttpMethod.Post,
    },
    EditProductVariant: {
      Endpoint: "/updateProductVarients",
      Method: HttpMethod.Post,
    },
    DeleteProduct: {
      Endpoint: "/deleteProduct",
      Method: HttpMethod.Post,
    },
  },
  Frencise: {
    All: {
      Endpoint: "/getAllFrencise",
      Method: HttpMethod.Post,
    },
    FrenciseAccept: {
      Endpoint: "/getAllFrenciseAccept",
      Method: HttpMethod.Post,
    },
    FrenciseById: {
      Endpoint: "/getFrenciseById",
      Method: HttpMethod.Post,
    },
    FrenciseCheck: {
      Endpoint: "/frenciseCheck",
      Method: HttpMethod.Post,
    },
    AddFrencise: {
      Endpoint: "/addFrencise",
      Method: HttpMethod.Post,
    },
    EditFrencise: {
      Endpoint: "/editFrencise",
      Method: HttpMethod.Post,
    },
    DeleteFrencise: {
      Endpoint: "/deleteFrencise",
      Method: HttpMethod.Post,
    },
  },
  Role: {
    All: {
      Endpoint: "/getAllRole",
      Method: HttpMethod.Post,
    },
    RoleById: {
      Endpoint: "/getRoleById",
      Method: HttpMethod.Post,
    },
    AddRole: {
      Endpoint: "/addRole",
      Method: HttpMethod.Post,
    },
    EditRole: {
      Endpoint: "/updateRole",
      Method: HttpMethod.Post,
    },
    DeleteRole: {
      Endpoint: "/deleteRole",
      Method: HttpMethod.Post,
    },
  },
  Staff: {
    All: {
      Endpoint: "/getAllStaff",
      Method: HttpMethod.Post,
    },
    StaffById: {
      Endpoint: "/getStaffById",
      Method: HttpMethod.Post,
    },
    AddStaff: {
      Endpoint: "/addStaff",
      Method: HttpMethod.Post,
    },
    EditStaff: {
      Endpoint: "/updateStaff",
      Method: HttpMethod.Post,
    },
    DeleteStaff: {
      Endpoint: "/deleteStaff",
      Method: HttpMethod.Post,
    },
  },
  Farmer: {
    All: {
      Endpoint: "/getAllServiceRequest",
      Method: HttpMethod.Post,
    },
    FarmerById: {
      Endpoint: "/getServiceRequestById",
      Method: HttpMethod.Post,
    },
    AddFarmer: {
      Endpoint: "/addServiceRequest",
      Method: HttpMethod.Post,
    },
    EditFarmer: {
      Endpoint: "/updateFarmer",
      Method: HttpMethod.Post,
    },
    DeleteFarmer: {
      Endpoint: "/deleteFarmer",
      Method: HttpMethod.Post,
    },
  },
};

export default ApiRoutes;
