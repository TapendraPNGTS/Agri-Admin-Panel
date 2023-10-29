"use strict";(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[1565],{82539:function(e,t,n){var d=n(15861),i=n(43144),o=n(15671),r=n(60136),a=n(27277),l=n(64687),s=n.n(l),c=n(9890),h=n(21156),p=n(76397),u=function(e){(0,r.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this,"https://admin-api.myagriinput.com/api/v1/"))._initializeRequestInterceptor=function(){e.instance.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat((0,c.aO)()),e.headers.Authkey="U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks=",e}))},e._initializeResponseInterceptor=function(){e.instance.interceptors.response.use((function(e){return e}),(function(e){return Promise.resolve(e)}))},e.AllBannerConfig=h.Z.Banner.All,e.BannerByIdConfig=h.Z.Banner.BannerById,e.AddBannerConfig=h.Z.Banner.AddBanner,e.EditBannerConfig=h.Z.Banner.EditBanner,e.DeleteBannerConfig=h.Z.Banner.DeleteBanner,e.getAllBanner=function(){var t=(0,d.Z)(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AllBannerConfig.Method,url:e.AllBannerConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getBannerById=function(){var t=(0,d.Z)(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.BannerByIdConfig.Method,url:e.BannerByIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addBanner=function(){var t=(0,d.Z)(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AddBannerConfig.Method,url:e.AddBannerConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editBanner=function(){var t=(0,d.Z)(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.EditBannerConfig.Method,url:e.EditBannerConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteBanner=function(){var t=(0,d.Z)(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.DeleteBannerConfig.Method,url:e.DeleteBannerConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e._initializeRequestInterceptor(),e._initializeResponseInterceptor(),e}return(0,i.Z)(n)}(p.Z);t.Z=u},76397:function(e,t,n){var d=n(15861),i=n(43144),o=n(15671),r=n(64687),a=n.n(r),l=n(74569),s=n.n(l),c=(0,i.Z)((function e(t){var n=this;(0,o.Z)(this,e),this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n._handleError)},this._handleResponse=function(e){return e},this._handleError=function(){var e=(0,d.Z)(a().mark((function e(t){var d,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d=t.response,i=t.config,o=i,401!==(null===d||void 0===d?void 0:d.status)||o._retry){e.next=5;break}return o._retry=!0,e.abrupt("return",n.instance(o));case 5:return e.abrupt("return",Promise.resolve(d));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.instance=s().create({baseURL:t}),this._initializeResponseInterceptor()}));t.Z=c},21156:function(e,t,n){var d="POST",i={Dashboard:{Data:{Endpoint:"/dashboard",Method:d}},Auth:{Login:{Endpoint:"/login",Method:d}},User:{All:{Endpoint:"/getAllUser",Method:d},UserById:{Endpoint:"/getUserById",Method:d}},Transaction:{AllFrTransaction:{Endpoint:"/getAllFranchiseTransaction",Method:d},AllUserTransaction:{Endpoint:"/getAllUserTransaction",Method:d},FranchiseTransaction:{Endpoint:"/getFranchiseTransaction ",Method:d},UserTransaction:{Endpoint:"/getUserTransaction ",Method:d},CommissionHistory:{Endpoint:"/getAllInchargeCommission",Method:d}},CheckOut:{Data:{Endpoint:"/addAllCart",Method:d}},Order:{AllFranchiseComplete:{Endpoint:"/getAllFranchiseOnline",Method:d},AllFranchisePending:{Endpoint:"/getAllFranchiseCOD",Method:d},AllUserComplete:{Endpoint:"/getAllUserOnline",Method:d},AllUserPending:{Endpoint:"/getAllUserCOD",Method:d}},Cod:{Cod:{Endpoint:"/frenchiseProductCOD",Method:d},PhonePay:{Endpoint:"/payment",Method:d}},Banner:{All:{Endpoint:"/getAllBanner",Method:d},BannerById:{Endpoint:"/getBannerById",Method:d},AddBanner:{Endpoint:"/addBanner",Method:d},EditBanner:{Endpoint:"/updateBanner",Method:d},DeleteBanner:{Endpoint:"/deleteBanner",Method:d}},Category:{All:{Endpoint:"/getAllCategory",Method:d},CategoryById:{Endpoint:"/getCategoryById",Method:d},AddCategory:{Endpoint:"/addCategory",Method:d},EditCategory:{Endpoint:"/updateCategory",Method:d},DeleteCategory:{Endpoint:"/deleteCategory",Method:d}},Attendence:{All:{Endpoint:"/getAllAttendence",Method:d},AttendenceById:{Endpoint:"/getAttendenceById",Method:d},AddAttendence:{Endpoint:"/addAttendence",Method:d},EditAttendence:{Endpoint:"/updateAttendence",Method:d},DeleteAttendence:{Endpoint:"/deleteAttendence",Method:d}},Holiday:{All:{Endpoint:"/getAllHoliday",Method:d},HolidayById:{Endpoint:"/getHolidayById",Method:d},AddHoliday:{Endpoint:"/addHoliday",Method:d},EditHoliday:{Endpoint:"/updateHoliday",Method:d},DeleteHoliday:{Endpoint:"/deleteHoliday",Method:d}},Service:{All:{Endpoint:"/getAllService",Method:d},ServiceById:{Endpoint:"/getServiceById",Method:d},AddService:{Endpoint:"/addService",Method:d},EditService:{Endpoint:"/updateService",Method:d},DeleteService:{Endpoint:"/deleteService",Method:d}},SubCategory:{All:{Endpoint:"/getAllSubCategory",Method:d},SubCategoryById:{Endpoint:"/getSubCategoryById",Method:d},subCategoryByCategoryIdConfig:{Endpoint:"/getSubCategoryByCategoryId",Method:d},AddSubCategory:{Endpoint:"/addSubCategory",Method:d},EditSubCategory:{Endpoint:"/updateSubCategory",Method:d},DeleteSubCategory:{Endpoint:"/deleteCategory",Method:d}},Product:{All:{Endpoint:"/getAllProduct",Method:d},AllProductFrencise:{Endpoint:"/getFranchiseProduct",Method:d},ProductById:{Endpoint:"/getProductById",Method:d},AddProduct:{Endpoint:"/addProduct",Method:d},addProductVarients:{Endpoint:"/addProductVarients",Method:d},EditProduct:{Endpoint:"/updateProduct",Method:d},EditProductVariant:{Endpoint:"/updateProductVarients",Method:d},DeleteProduct:{Endpoint:"/deleteProduct",Method:d}},Frencise:{All:{Endpoint:"/getAllFrencise",Method:d},FrenciseAccept:{Endpoint:"/getAllFrencisePending",Method:d},FrenciseById:{Endpoint:"/getFrenciseById",Method:d},FrenciseCheck:{Endpoint:"/frenciseCheck",Method:d},AddFrencise:{Endpoint:"/addFrencise",Method:d},EditFrencise:{Endpoint:"/editFrencise",Method:d},DeleteFrencise:{Endpoint:"/deleteFrencise",Method:d}},Role:{All:{Endpoint:"/getAllRole",Method:d},RoleById:{Endpoint:"/getRoleById",Method:d},AddRole:{Endpoint:"/addRole",Method:d},EditRole:{Endpoint:"/updateRole",Method:d},DeleteRole:{Endpoint:"/deleteRole",Method:d}},Staff:{All:{Endpoint:"/getAllStaff",Method:d},StaffById:{Endpoint:"/getStaffById",Method:d},AddStaff:{Endpoint:"/addStaff",Method:d},EditStaff:{Endpoint:"/updateStaff",Method:d},DeleteStaff:{Endpoint:"/deleteStaff",Method:d}},Farmer:{All:{Endpoint:"/getAllServiceRequest",Method:d},FarmerById:{Endpoint:"/getServiceRequestById",Method:d},AddFarmer:{Endpoint:"/addServiceRequest",Method:d},EditFarmer:{Endpoint:"/updateFarmer",Method:d},DeleteFarmer:{Endpoint:"/deleteFarmer",Method:d}},District:{AllDistrict:{Endpoint:"/getAllDistrict",Method:d},DistrictById:{Endpoint:"/getDistrictById",Method:d},DistrictByStateId:{Endpoint:"/getCityByStateId",Method:d},AddDistrict:{Endpoint:"/addDistrict",Method:d},EditDistrict:{Endpoint:"/updateDistrict",Method:d},DeleteDistrict:{Endpoint:"/deleteDistrict",Method:d}},State:{AllState:{Endpoint:"/getAllState",Method:d},StateById:{Endpoint:"/getStateById",Method:d},AddState:{Endpoint:"/addState",Method:d},EditState:{Endpoint:"/updateState",Method:d},DeleteState:{Endpoint:"/deleteState",Method:d}},Block:{AllBlock:{Endpoint:"/getAllBlock",Method:d},BlockById:{Endpoint:"/getBlockById",Method:d},AddBlock:{Endpoint:"/addBlock",Method:d},EditBlock:{Endpoint:"/editBlock",Method:d},DeleteBlock:{Endpoint:"/deleteBlock",Method:d}},Cluster:{AllCluster:{Endpoint:"/getAllCluster",Method:d},ClusterById:{Endpoint:"/getClusterById",Method:d},AddCluster:{Endpoint:"/addCluster",Method:d},EditCluster:{Endpoint:"/editCluster",Method:d},DeleteCluster:{Endpoint:"/deleteCluster",Method:d}},FranchiseState:{AllFranchiseState:{Endpoint:"/getAllStateFranchise",Method:d},FranchiseStateById:{Endpoint:"/getStateFranchiseById",Method:d},AddFranchiseState:{Endpoint:"/addStateFranchise",Method:d},EditFranchiseState:{Endpoint:"/editStateFranchise",Method:d},DeleteFranchiseState:{Endpoint:"/deleteStateFranchise",Method:d},PendingStateFranchise:{Endpoint:"/getAllPendingStateFranchise",Method:d},frenciseStateAccept:{Endpoint:"/frenciseStateAccept",Method:d}},FranchiseDistrict:{AllFranchiseDistrict:{Endpoint:"/getAllDistrictFranchise",Method:d},FranchiseDistrictById:{Endpoint:"/getDistrictFranchiseById",Method:d},AddFranchiseDistrict:{Endpoint:"/addDistrictFranchise",Method:d},EditFranchiseDistrict:{Endpoint:"/editDistrictFranchise",Method:d},DeleteFranchiseDistrict:{Endpoint:"/deleteDistrictFranchise",Method:d},PendingDistrictFranchise:{Endpoint:"/getAllPendingDistrictFranchise",Method:d},frenciseDistrictAccept:{Endpoint:"/frenciseDistrictAccept",Method:d}},FranchiseBlock:{AllFranchiseBlock:{Endpoint:"/getAllBlockFranchise",Method:d},FranchiseBlockById:{Endpoint:"/getBlockFranchiseById",Method:d},AddFranchiseBlock:{Endpoint:"/addBlockFranchise",Method:d},EditFranchiseBlock:{Endpoint:"/editBlockFranchise",Method:d},DeleteFranchiseBlock:{Endpoint:"/deleteBlockFranchise",Method:d},PendingBlockFranchise:{Endpoint:"/getAllPendingBlockFranchise",Method:d}},FranchiseCluster:{AllFranchiseCluster:{Endpoint:"/getAllClusterFranchise",Method:d},FranchiseClusterById:{Endpoint:"/getClusterFranchiseById",Method:d},AddFranchiseCluster:{Endpoint:"/addClusterFranchise",Method:d},EditFranchiseCluster:{Endpoint:"/editClusterFranchise",Method:d},DeleteFranchiseCluster:{Endpoint:"/deleteClusterFranchise",Method:d},PendingClusterFranchise:{Endpoint:"/getAllPendingClusterFranchise",Method:d},frenciseClusterAccept:{Endpoint:"/frenciseClusterAccept",Method:d}},FranchiseVillage:{AllFranchiseVillage:{Endpoint:"/getAllVillageFranchise",Method:d},FranchiseVillageById:{Endpoint:"/getVillageFranchiseById",Method:d},AddFranchiseVillage:{Endpoint:"/addVillageFranchise",Method:d},EditFranchiseVillage:{Endpoint:"/editVillageFranchise",Method:d},DeleteFranchiseVillage:{Endpoint:"/deleteVillageFranchise",Method:d}},Commissiom:{All:{Endpoint:"/getAllCommission",Method:d},CommissiomById:{Endpoint:"/getCommissionById",Method:d},AddCommissiom:{Endpoint:"/addCommission",Method:d},EditCommissiom:{Endpoint:"/updateCommission",Method:d},DeleteCommissiom:{Endpoint:"/deleteCommission",Method:d}}};t.Z=i},62248:function(e,t,n){var d=n(45987),i=n(1413),o=n(60277),r=n(40508),a=n(80184),l=["children","horizontal"],s=(0,o.ZP)((function(e){return(0,a.jsx)(r.Z,(0,i.Z)({},e))}),{shouldForwardProp:function(e){return"horizontal"!==e}})((function(e){var t=e.theme,n=e.horizontal;return{color:t.palette.text.primary,fontWeight:500,marginBottom:n?0:8}})),c=function(e){var t=e.children,n=e.horizontal,o=(0,d.Z)(e,l);return(0,a.jsx)(s,(0,i.Z)((0,i.Z)({horizontal:n},o),{},{children:t}))};c.defaultProps={horizontal:!1},t.Z=c},71565:function(e,t,n){n.r(t);var d=n(15861),i=n(29439),o=n(64687),r=n.n(o),a=n(72791),l=n(23735),s=n(62248),c=n(91923),h=n(57689),p=n(75985),u=n(45953),E=n(94162),g=n(96580),M=n(61091),f=n(82539),B=n(9890),A=n(80184);t.default=function(){var e=(0,h.s0)(),t=(0,a.useState)(),n=(0,i.Z)(t,2),o=n[0],y=n[1],C=(0,a.useState)(),F=(0,i.Z)(C,2),m=F[0],S=F[1],I=(0,a.useState)(!1),D=(0,i.Z)(I,2),v=D[0],k=D[1],Z=new f.Z,P=(0,B.qp)();function b(){return(b=(0,d.Z)(r().mark((function t(n){var d,i,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),n.preventDefault(),(i=new FormData).append("img",o),i.append("adminId",P.StaffID),t.next=7,Z.addBanner(i);case 7:if(!(a=t.sent)||200!==(null===a||void 0===a||null===(d=a.data)||void 0===d?void 0:d.code)){t.next=13;break}p.Am.success("Added successsfully"),e("/banner",{replace:!0}),t.next=14;break;case 13:return t.abrupt("return",p.Am.error("Something went wrong!"));case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,A.jsx)(l.Z,{title:"Add Banner",children:(0,A.jsxs)("form",{action:"#",onSubmit:function(e){return b.apply(this,arguments)},children:[(0,A.jsx)(u.ZP,{container:!0,spacing:c.dv,children:(0,A.jsx)(u.ZP,{item:!0,xs:6,md:6,children:(0,A.jsxs)(E.Z,{children:[(0,A.jsx)(s.Z,{children:"Choose Multiple Image"}),(0,A.jsxs)("div",{className:"custom-file",children:[(0,A.jsx)("input",{type:"file",className:"custom-file-input",id:"thumbnail",accept:"image/png, image/jpeg",onChange:function(e){y(e.target.files[0]),S(e.target.value)},value:m,required:!0}),(0,A.jsx)("label",{className:"custom-file-label",for:"thumbnail",children:m})]})]})})}),(0,A.jsx)("br",{}),(0,A.jsx)("center",{children:v?(0,A.jsx)(g.Z,{}):(0,A.jsx)(M.Z,{variant:"contained",type:"submit",children:"Add Banner"})})]})})}}}]);
//# sourceMappingURL=1565.00fe5d45.chunk.js.map