"use strict";(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[3906],{91943:function(t,e,n){var r=n(15861),o=n(43144),i=n(15671),d=n(60136),a=n(27277),c=n(64687),s=n.n(c),u=n(9890),l=n(21156),p=n(76397),h=function(t){(0,d.Z)(n,t);var e=(0,a.Z)(n);function n(){var t;return(0,i.Z)(this,n),(t=e.call(this,"https://admin-api.myagriinput.com/api/v1/"))._initializeRequestInterceptor=function(){t.instance.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat((0,u.aO)()),t.headers.Authkey="U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks=",t}))},t._initializeResponseInterceptor=function(){t.instance.interceptors.response.use((function(t){return t}),(function(t){return Promise.resolve(t)}))},t.AllCategoryConfig=l.Z.Category.All,t.CategoryByIdConfig=l.Z.Category.CategoryById,t.AddCategoryConfig=l.Z.Category.AddCategory,t.EditCategoryConfig=l.Z.Category.EditCategory,t.DeleteCategoryConfig=l.Z.Category.DeleteCategory,t.getAllCategory=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.AllCategoryConfig.Method,url:t.AllCategoryConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.getCategoryById=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.CategoryByIdConfig.Method,url:t.CategoryByIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.addCategory=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.AddCategoryConfig.Method,url:t.AddCategoryConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.editCategory=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.EditCategoryConfig.Method,url:t.EditCategoryConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.deleteCategory=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.DeleteCategoryConfig.Method,url:t.DeleteCategoryConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t._initializeRequestInterceptor(),t._initializeResponseInterceptor(),t}return(0,o.Z)(n)}(p.Z);e.Z=h},76397:function(t,e,n){var r=n(15861),o=n(43144),i=n(15671),d=n(64687),a=n.n(d),c=n(74569),s=n.n(c),u=(0,o.Z)((function t(e){var n=this;(0,i.Z)(this,t),this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n._handleError)},this._handleResponse=function(t){return t},this._handleError=function(){var t=(0,r.Z)(a().mark((function t(e){var r,o,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.response,o=e.config,i=o,401!==(null===r||void 0===r?void 0:r.status)||i._retry){t.next=5;break}return i._retry=!0,t.abrupt("return",n.instance(i));case 5:return t.abrupt("return",Promise.resolve(r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.instance=s().create({baseURL:e}),this._initializeResponseInterceptor()}));e.Z=u},2410:function(t,e,n){var r=n(15861),o=n(43144),i=n(15671),d=n(60136),a=n(27277),c=n(64687),s=n.n(c),u=n(9890),l=n(21156),p=n(76397),h=function(t){(0,d.Z)(n,t);var e=(0,a.Z)(n);function n(){var t;return(0,i.Z)(this,n),(t=e.call(this,"https://admin-api.myagriinput.com/api/v1/"))._initializeRequestInterceptor=function(){t.instance.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat((0,u.aO)()),t.headers.Authkey="U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks=",t}))},t._initializeResponseInterceptor=function(){t.instance.interceptors.response.use((function(t){return t}),(function(t){return Promise.resolve(t)}))},t.AllProductListConfig=l.Z.Product.All,t.AllProductFrenciseConfig=l.Z.Product.AllProductFrencise,t.ProductListByIdConfig=l.Z.Product.ProductById,t.AddProductListConfig=l.Z.Product.AddProduct,t.addProductVarientsListConfig=l.Z.Product.addProductVarients,t.EditProductListConfig=l.Z.Product.EditProduct,t.EditProductVariantListConfig=l.Z.Product.EditProductVariant,t.DeleteProductListConfig=l.Z.Product.DeleteProduct,t.getAllProduct=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.AllProductListConfig.Method,url:t.AllProductListConfig.Endpoint,headers:{},data:null}));case 1:case"end":return e.stop()}}),e)}))),t.getFranchiseProduct=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.AllProductFrenciseConfig.Method,url:t.AllProductFrenciseConfig.Endpoint,headers:{},data:null}));case 1:case"end":return e.stop()}}),e)}))),t.getProductById=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.ProductListByIdConfig.Method,url:t.ProductListByIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.addProduct=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.AddProductListConfig.Method,url:t.AddProductListConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.addProductVarients=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.addProductVarientsListConfig.Method,url:t.addProductVarientsListConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.editProduct=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.EditProductListConfig.Method,url:t.EditProductListConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.editProductVariant=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.EditProductVariantListConfig.Method,url:t.EditProductVariantListConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.deleteProduct=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.DeleteProductListConfig.Method,url:t.DeleteProductListConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t._initializeRequestInterceptor(),t._initializeResponseInterceptor(),t}return(0,o.Z)(n)}(p.Z);e.Z=h},48999:function(t,e,n){var r=n(15861),o=n(43144),i=n(15671),d=n(60136),a=n(27277),c=n(64687),s=n.n(c),u=n(9890),l=n(21156),p=n(76397),h=function(t){(0,d.Z)(n,t);var e=(0,a.Z)(n);function n(){var t;return(0,i.Z)(this,n),(t=e.call(this,"https://admin-api.myagriinput.com/api/v1/"))._initializeRequestInterceptor=function(){t.instance.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat((0,u.aO)()),t.headers.Authkey="U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks=",t}))},t._initializeResponseInterceptor=function(){t.instance.interceptors.response.use((function(t){return t}),(function(t){return Promise.resolve(t)}))},t.AllSubCategoryConfig=l.Z.SubCategory.All,t.SubCategoryByIdConfig=l.Z.SubCategory.SubCategoryById,t.SubCategoryByCategoryIdConfig=l.Z.SubCategory.subCategoryByCategoryIdConfig,t.AddSubCategoryConfig=l.Z.SubCategory.AddSubCategory,t.EditSubCategoryConfig=l.Z.SubCategory.EditSubCategory,t.DeleteSubCategoryConfig=l.Z.SubCategory.DeleteSubCategory,t.getAllSubCategory=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.AllSubCategoryConfig.Method,url:t.AllSubCategoryConfig.Endpoint,headers:{},data:null}));case 1:case"end":return e.stop()}}),e)}))),t.getSubCategoryById=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.SubCategoryByIdConfig.Method,url:t.SubCategoryByIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.getSubCategoryByCategoryId=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.SubCategoryByCategoryIdConfig.Method,url:t.SubCategoryByCategoryIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.addSubCategory=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.AddSubCategoryConfig.Method,url:t.AddSubCategoryConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.editSubCategory=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.EditSubCategoryConfig.Method,url:t.EditSubCategoryConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.deleteSubCategory=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.instance({method:t.DeleteSubCategoryConfig.Method,url:t.DeleteSubCategoryConfig.Endpoint,headers:{},data:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t._initializeRequestInterceptor(),t._initializeResponseInterceptor(),t}return(0,o.Z)(n)}(p.Z);e.Z=h},21156:function(t,e,n){var r="POST",o={Dashboard:{Data:{Endpoint:"/dashboard",Method:r}},Auth:{Login:{Endpoint:"/login",Method:r}},User:{All:{Endpoint:"/getAllUser",Method:r},UserById:{Endpoint:"/getUserById",Method:r}},Transaction:{AllFrTransaction:{Endpoint:"/getAllFranchiseTransaction",Method:r},AllUserTransaction:{Endpoint:"/getAllUserTransaction",Method:r},FranchiseTransaction:{Endpoint:"/getFranchiseTransaction ",Method:r},UserTransaction:{Endpoint:"/getUserTransaction ",Method:r},CommissionHistory:{Endpoint:"/getAllInchargeCommission",Method:r}},CheckOut:{Data:{Endpoint:"/addAllCart",Method:r}},Order:{AllFranchiseComplete:{Endpoint:"/getAllFranchiseOnline",Method:r},AllFranchisePending:{Endpoint:"/getAllFranchiseCOD",Method:r},AllUserComplete:{Endpoint:"/getAllUserOnline",Method:r},AllUserPending:{Endpoint:"/getAllUserCOD",Method:r}},Cod:{Cod:{Endpoint:"/frenchiseProductCOD",Method:r},PhonePay:{Endpoint:"/payment",Method:r}},Banner:{All:{Endpoint:"/getAllBanner",Method:r},BannerById:{Endpoint:"/getBannerById",Method:r},AddBanner:{Endpoint:"/addBanner",Method:r},EditBanner:{Endpoint:"/updateBanner",Method:r},DeleteBanner:{Endpoint:"/deleteBanner",Method:r}},Category:{All:{Endpoint:"/getAllCategory",Method:r},CategoryById:{Endpoint:"/getCategoryById",Method:r},AddCategory:{Endpoint:"/addCategory",Method:r},EditCategory:{Endpoint:"/updateCategory",Method:r},DeleteCategory:{Endpoint:"/deleteCategory",Method:r}},Attendence:{All:{Endpoint:"/getAllAttendence",Method:r},AttendenceById:{Endpoint:"/getAttendenceById",Method:r},AddAttendence:{Endpoint:"/addAttendence",Method:r},EditAttendence:{Endpoint:"/updateAttendence",Method:r},DeleteAttendence:{Endpoint:"/deleteAttendence",Method:r}},Holiday:{All:{Endpoint:"/getAllHoliday",Method:r},HolidayById:{Endpoint:"/getHolidayById",Method:r},AddHoliday:{Endpoint:"/addHoliday",Method:r},EditHoliday:{Endpoint:"/updateHoliday",Method:r},DeleteHoliday:{Endpoint:"/deleteHoliday",Method:r}},Service:{All:{Endpoint:"/getAllService",Method:r},ServiceById:{Endpoint:"/getServiceById",Method:r},AddService:{Endpoint:"/addService",Method:r},EditService:{Endpoint:"/updateService",Method:r},DeleteService:{Endpoint:"/deleteService",Method:r}},SubCategory:{All:{Endpoint:"/getAllSubCategory",Method:r},SubCategoryById:{Endpoint:"/getSubCategoryById",Method:r},subCategoryByCategoryIdConfig:{Endpoint:"/getSubCategoryByCategoryId",Method:r},AddSubCategory:{Endpoint:"/addSubCategory",Method:r},EditSubCategory:{Endpoint:"/updateSubCategory",Method:r},DeleteSubCategory:{Endpoint:"/deleteCategory",Method:r}},Product:{All:{Endpoint:"/getAllProduct",Method:r},AllProductFrencise:{Endpoint:"/getFranchiseProduct",Method:r},ProductById:{Endpoint:"/getProductById",Method:r},AddProduct:{Endpoint:"/addProduct",Method:r},addProductVarients:{Endpoint:"/addProductVarients",Method:r},EditProduct:{Endpoint:"/updateProduct",Method:r},EditProductVariant:{Endpoint:"/updateProductVarients",Method:r},DeleteProduct:{Endpoint:"/deleteProduct",Method:r}},Frencise:{All:{Endpoint:"/getAllFrencise",Method:r},FrenciseAccept:{Endpoint:"/getAllFrencisePending",Method:r},FrenciseById:{Endpoint:"/getFrenciseById",Method:r},FrenciseCheck:{Endpoint:"/frenciseCheck",Method:r},AddFrencise:{Endpoint:"/addFrencise",Method:r},EditFrencise:{Endpoint:"/editFrencise",Method:r},DeleteFrencise:{Endpoint:"/deleteFrencise",Method:r}},Role:{All:{Endpoint:"/getAllRole",Method:r},RoleById:{Endpoint:"/getRoleById",Method:r},AddRole:{Endpoint:"/addRole",Method:r},EditRole:{Endpoint:"/updateRole",Method:r},DeleteRole:{Endpoint:"/deleteRole",Method:r}},Staff:{All:{Endpoint:"/getAllStaff",Method:r},StaffById:{Endpoint:"/getStaffById",Method:r},AddStaff:{Endpoint:"/addStaff",Method:r},EditStaff:{Endpoint:"/updateStaff",Method:r},DeleteStaff:{Endpoint:"/deleteStaff",Method:r}},Farmer:{All:{Endpoint:"/getAllServiceRequest",Method:r},FarmerById:{Endpoint:"/getServiceRequestById",Method:r},AddFarmer:{Endpoint:"/addServiceRequest",Method:r},EditFarmer:{Endpoint:"/updateFarmer",Method:r},DeleteFarmer:{Endpoint:"/deleteFarmer",Method:r}},District:{AllDistrict:{Endpoint:"/getAllDistrict",Method:r},DistrictById:{Endpoint:"/getDistrictById",Method:r},DistrictByStateId:{Endpoint:"/getCityByStateId",Method:r},AddDistrict:{Endpoint:"/addDistrict",Method:r},EditDistrict:{Endpoint:"/updateDistrict",Method:r},DeleteDistrict:{Endpoint:"/deleteDistrict",Method:r}},State:{AllState:{Endpoint:"/getAllState",Method:r},StateById:{Endpoint:"/getStateById",Method:r},AddState:{Endpoint:"/addState",Method:r},EditState:{Endpoint:"/updateState",Method:r},DeleteState:{Endpoint:"/deleteState",Method:r}},Block:{AllBlock:{Endpoint:"/getAllBlock",Method:r},BlockById:{Endpoint:"/getBlockById",Method:r},AddBlock:{Endpoint:"/addBlock",Method:r},EditBlock:{Endpoint:"/editBlock",Method:r},DeleteBlock:{Endpoint:"/deleteBlock",Method:r}},Cluster:{AllCluster:{Endpoint:"/getAllCluster",Method:r},ClusterById:{Endpoint:"/getClusterById",Method:r},AddCluster:{Endpoint:"/addCluster",Method:r},EditCluster:{Endpoint:"/editCluster",Method:r},DeleteCluster:{Endpoint:"/deleteCluster",Method:r}},FranchiseState:{AllFranchiseState:{Endpoint:"/getAllStateFranchise",Method:r},FranchiseStateById:{Endpoint:"/getStateFranchiseById",Method:r},AddFranchiseState:{Endpoint:"/addStateFranchise",Method:r},EditFranchiseState:{Endpoint:"/editStateFranchise",Method:r},DeleteFranchiseState:{Endpoint:"/deleteStateFranchise",Method:r},PendingStateFranchise:{Endpoint:"/getAllPendingStateFranchise",Method:r},frenciseStateAccept:{Endpoint:"/frenciseStateAccept",Method:r}},FranchiseDistrict:{AllFranchiseDistrict:{Endpoint:"/getAllDistrictFranchise",Method:r},FranchiseDistrictById:{Endpoint:"/getDistrictFranchiseById",Method:r},AddFranchiseDistrict:{Endpoint:"/addDistrictFranchise",Method:r},EditFranchiseDistrict:{Endpoint:"/editDistrictFranchise",Method:r},DeleteFranchiseDistrict:{Endpoint:"/deleteDistrictFranchise",Method:r},PendingDistrictFranchise:{Endpoint:"/getAllPendingDistrictFranchise",Method:r},frenciseDistrictAccept:{Endpoint:"/frenciseDistrictAccept",Method:r}},FranchiseBlock:{AllFranchiseBlock:{Endpoint:"/getAllBlockFranchise",Method:r},FranchiseBlockById:{Endpoint:"/getBlockFranchiseById",Method:r},AddFranchiseBlock:{Endpoint:"/addBlockFranchise",Method:r},EditFranchiseBlock:{Endpoint:"/editBlockFranchise",Method:r},DeleteFranchiseBlock:{Endpoint:"/deleteBlockFranchise",Method:r},PendingBlockFranchise:{Endpoint:"/getAllPendingBlockFranchise",Method:r}},FranchiseCluster:{AllFranchiseCluster:{Endpoint:"/getAllClusterFranchise",Method:r},FranchiseClusterById:{Endpoint:"/getClusterFranchiseById",Method:r},AddFranchiseCluster:{Endpoint:"/addClusterFranchise",Method:r},EditFranchiseCluster:{Endpoint:"/editClusterFranchise",Method:r},DeleteFranchiseCluster:{Endpoint:"/deleteClusterFranchise",Method:r},PendingClusterFranchise:{Endpoint:"/getAllPendingClusterFranchise",Method:r},frenciseClusterAccept:{Endpoint:"/frenciseClusterAccept",Method:r}},FranchiseVillage:{AllFranchiseVillage:{Endpoint:"/getAllVillageFranchise",Method:r},FranchiseVillageById:{Endpoint:"/getVillageFranchiseById",Method:r},AddFranchiseVillage:{Endpoint:"/addVillageFranchise",Method:r},EditFranchiseVillage:{Endpoint:"/editVillageFranchise",Method:r},DeleteFranchiseVillage:{Endpoint:"/deleteVillageFranchise",Method:r}},Commissiom:{All:{Endpoint:"/getAllCommission",Method:r},CommissiomById:{Endpoint:"/getCommissionById",Method:r},AddCommissiom:{Endpoint:"/addCommission",Method:r},EditCommissiom:{Endpoint:"/updateCommission",Method:r},DeleteCommissiom:{Endpoint:"/deleteCommission",Method:r}}};e.Z=o},62248:function(t,e,n){var r=n(45987),o=n(1413),i=n(60277),d=n(40508),a=n(80184),c=["children","horizontal"],s=(0,i.ZP)((function(t){return(0,a.jsx)(d.Z,(0,o.Z)({},t))}),{shouldForwardProp:function(t){return"horizontal"!==t}})((function(t){var e=t.theme,n=t.horizontal;return{color:e.palette.text.primary,fontWeight:500,marginBottom:n?0:8}})),u=function(t){var e=t.children,n=t.horizontal,i=(0,r.Z)(t,c);return(0,a.jsx)(s,(0,o.Z)((0,o.Z)({horizontal:n},i),{},{children:e}))};u.defaultProps={horizontal:!1},e.Z=u}}]);
//# sourceMappingURL=3906.b407a174.chunk.js.map