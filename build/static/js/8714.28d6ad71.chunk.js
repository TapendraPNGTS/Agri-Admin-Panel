"use strict";(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[8714],{82539:function(e,t,n){var d=n(15861),r=n(43144),i=n(15671),o=n(60136),a=n(27277),s=n(64687),c=n.n(s),l=n(9890),h=n(21156),p=n(76397),u=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.call(this,"https://admin-api.myagriinput.com/api/v1/"))._initializeRequestInterceptor=function(){e.instance.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat((0,l.aO)()),e.headers.Authkey="U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks=",e}))},e._initializeResponseInterceptor=function(){e.instance.interceptors.response.use((function(e){return e}),(function(e){return Promise.resolve(e)}))},e.AllBannerConfig=h.Z.Banner.All,e.BannerByIdConfig=h.Z.Banner.BannerById,e.AddBannerConfig=h.Z.Banner.AddBanner,e.EditBannerConfig=h.Z.Banner.EditBanner,e.DeleteBannerConfig=h.Z.Banner.DeleteBanner,e.getAllBanner=function(){var t=(0,d.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AllBannerConfig.Method,url:e.AllBannerConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getBannerById=function(){var t=(0,d.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.BannerByIdConfig.Method,url:e.BannerByIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addBanner=function(){var t=(0,d.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AddBannerConfig.Method,url:e.AddBannerConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editBanner=function(){var t=(0,d.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.EditBannerConfig.Method,url:e.EditBannerConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteBanner=function(){var t=(0,d.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.DeleteBannerConfig.Method,url:e.DeleteBannerConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e._initializeRequestInterceptor(),e._initializeResponseInterceptor(),e}return(0,r.Z)(n)}(p.Z);t.Z=u},76397:function(e,t,n){var d=n(15861),r=n(43144),i=n(15671),o=n(64687),a=n.n(o),s=n(74569),c=n.n(s),l=(0,r.Z)((function e(t){var n=this;(0,i.Z)(this,e),this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n._handleError)},this._handleResponse=function(e){return e},this._handleError=function(){var e=(0,d.Z)(a().mark((function e(t){var d,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d=t.response,r=t.config,i=r,401!==(null===d||void 0===d?void 0:d.status)||i._retry){e.next=5;break}return i._retry=!0,e.abrupt("return",n.instance(i));case 5:return e.abrupt("return",Promise.resolve(d));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.instance=c().create({baseURL:t}),this._initializeResponseInterceptor()}));t.Z=l},21156:function(e,t,n){var d="POST",r={Dashboard:{Data:{Endpoint:"/dashboard",Method:d}},Auth:{Login:{Endpoint:"/login",Method:d}},User:{All:{Endpoint:"/getAllUser",Method:d},UserById:{Endpoint:"/getUserById",Method:d}},Transaction:{AllFrTransaction:{Endpoint:"/getAllFranchiseTransaction",Method:d},AllUserTransaction:{Endpoint:"/getAllUserTransaction",Method:d},FranchiseTransaction:{Endpoint:"/getFranchiseTransaction ",Method:d},UserTransaction:{Endpoint:"/getUserTransaction ",Method:d},CommissionHistory:{Endpoint:"/getAllInchargeCommission",Method:d}},CheckOut:{Data:{Endpoint:"/addAllCart",Method:d}},Order:{AllFranchiseComplete:{Endpoint:"/getAllFranchiseOnline",Method:d},AllFranchisePending:{Endpoint:"/getAllFranchiseCOD",Method:d},AllUserComplete:{Endpoint:"/getAllUserOnline",Method:d},AllUserPending:{Endpoint:"/getAllUserCOD",Method:d}},Cod:{Cod:{Endpoint:"/frenchiseProductCOD",Method:d},PhonePay:{Endpoint:"/payment",Method:d}},Banner:{All:{Endpoint:"/getAllBanner",Method:d},BannerById:{Endpoint:"/getBannerById",Method:d},AddBanner:{Endpoint:"/addBanner",Method:d},EditBanner:{Endpoint:"/updateBanner",Method:d},DeleteBanner:{Endpoint:"/deleteBanner",Method:d}},Category:{All:{Endpoint:"/getAllCategory",Method:d},CategoryById:{Endpoint:"/getCategoryById",Method:d},AddCategory:{Endpoint:"/addCategory",Method:d},EditCategory:{Endpoint:"/updateCategory",Method:d},DeleteCategory:{Endpoint:"/deleteCategory",Method:d}},Attendence:{All:{Endpoint:"/getAllAttendence",Method:d},AttendenceById:{Endpoint:"/getAttendenceById",Method:d},AddAttendence:{Endpoint:"/addAttendence",Method:d},EditAttendence:{Endpoint:"/updateAttendence",Method:d},DeleteAttendence:{Endpoint:"/deleteAttendence",Method:d}},Holiday:{All:{Endpoint:"/getAllHoliday",Method:d},HolidayById:{Endpoint:"/getHolidayById",Method:d},AddHoliday:{Endpoint:"/addHoliday",Method:d},EditHoliday:{Endpoint:"/updateHoliday",Method:d},DeleteHoliday:{Endpoint:"/deleteHoliday",Method:d}},Service:{All:{Endpoint:"/getAllService",Method:d},ServiceById:{Endpoint:"/getServiceById",Method:d},AddService:{Endpoint:"/addService",Method:d},EditService:{Endpoint:"/updateService",Method:d},DeleteService:{Endpoint:"/deleteService",Method:d}},SubCategory:{All:{Endpoint:"/getAllSubCategory",Method:d},SubCategoryById:{Endpoint:"/getSubCategoryById",Method:d},subCategoryByCategoryIdConfig:{Endpoint:"/getSubCategoryByCategoryId",Method:d},AddSubCategory:{Endpoint:"/addSubCategory",Method:d},EditSubCategory:{Endpoint:"/updateSubCategory",Method:d},DeleteSubCategory:{Endpoint:"/deleteCategory",Method:d}},Product:{All:{Endpoint:"/getAllProduct",Method:d},AllProductFrencise:{Endpoint:"/getFranchiseProduct",Method:d},ProductById:{Endpoint:"/getProductById",Method:d},AddProduct:{Endpoint:"/addProduct",Method:d},addProductVarients:{Endpoint:"/addProductVarients",Method:d},EditProduct:{Endpoint:"/updateProduct",Method:d},EditProductVariant:{Endpoint:"/updateProductVarients",Method:d},DeleteProduct:{Endpoint:"/deleteProduct",Method:d}},Frencise:{All:{Endpoint:"/getAllFrencise",Method:d},FrenciseAccept:{Endpoint:"/getAllFrencisePending",Method:d},FrenciseById:{Endpoint:"/getFrenciseById",Method:d},FrenciseCheck:{Endpoint:"/frenciseCheck",Method:d},AddFrencise:{Endpoint:"/addFrencise",Method:d},EditFrencise:{Endpoint:"/editFrencise",Method:d},DeleteFrencise:{Endpoint:"/deleteFrencise",Method:d}},Role:{All:{Endpoint:"/getAllRole",Method:d},RoleById:{Endpoint:"/getRoleById",Method:d},AddRole:{Endpoint:"/addRole",Method:d},EditRole:{Endpoint:"/updateRole",Method:d},DeleteRole:{Endpoint:"/deleteRole",Method:d}},Staff:{All:{Endpoint:"/getAllStaff",Method:d},StaffById:{Endpoint:"/getStaffById",Method:d},AddStaff:{Endpoint:"/addStaff",Method:d},EditStaff:{Endpoint:"/updateStaff",Method:d},DeleteStaff:{Endpoint:"/deleteStaff",Method:d}},Farmer:{All:{Endpoint:"/getAllServiceRequest",Method:d},FarmerById:{Endpoint:"/getServiceRequestById",Method:d},AddFarmer:{Endpoint:"/addServiceRequest",Method:d},EditFarmer:{Endpoint:"/updateFarmer",Method:d},DeleteFarmer:{Endpoint:"/deleteFarmer",Method:d}},District:{AllDistrict:{Endpoint:"/getAllDistrict",Method:d},DistrictById:{Endpoint:"/getDistrictById",Method:d},DistrictByStateId:{Endpoint:"/getCityByStateId",Method:d},AddDistrict:{Endpoint:"/addDistrict",Method:d},EditDistrict:{Endpoint:"/updateDistrict",Method:d},DeleteDistrict:{Endpoint:"/deleteDistrict",Method:d}},State:{AllState:{Endpoint:"/getAllState",Method:d},StateById:{Endpoint:"/getStateById",Method:d},AddState:{Endpoint:"/addState",Method:d},EditState:{Endpoint:"/updateState",Method:d},DeleteState:{Endpoint:"/deleteState",Method:d}},Block:{AllBlock:{Endpoint:"/getAllBlock",Method:d},BlockById:{Endpoint:"/getBlockById",Method:d},AddBlock:{Endpoint:"/addBlock",Method:d},EditBlock:{Endpoint:"/editBlock",Method:d},DeleteBlock:{Endpoint:"/deleteBlock",Method:d}},Cluster:{AllCluster:{Endpoint:"/getAllCluster",Method:d},ClusterById:{Endpoint:"/getClusterById",Method:d},AddCluster:{Endpoint:"/addCluster",Method:d},EditCluster:{Endpoint:"/editCluster",Method:d},DeleteCluster:{Endpoint:"/deleteCluster",Method:d}},FranchiseState:{AllFranchiseState:{Endpoint:"/getAllStateFranchise",Method:d},FranchiseStateById:{Endpoint:"/getStateFranchiseById",Method:d},AddFranchiseState:{Endpoint:"/addStateFranchise",Method:d},EditFranchiseState:{Endpoint:"/editStateFranchise",Method:d},DeleteFranchiseState:{Endpoint:"/deleteStateFranchise",Method:d},PendingStateFranchise:{Endpoint:"/getAllPendingStateFranchise",Method:d},frenciseStateAccept:{Endpoint:"/frenciseStateAccept",Method:d}},FranchiseDistrict:{AllFranchiseDistrict:{Endpoint:"/getAllDistrictFranchise",Method:d},FranchiseDistrictById:{Endpoint:"/getDistrictFranchiseById",Method:d},AddFranchiseDistrict:{Endpoint:"/addDistrictFranchise",Method:d},EditFranchiseDistrict:{Endpoint:"/editDistrictFranchise",Method:d},DeleteFranchiseDistrict:{Endpoint:"/deleteDistrictFranchise",Method:d},PendingDistrictFranchise:{Endpoint:"/getAllPendingDistrictFranchise",Method:d},frenciseDistrictAccept:{Endpoint:"/frenciseDistrictAccept",Method:d}},FranchiseBlock:{AllFranchiseBlock:{Endpoint:"/getAllBlockFranchise",Method:d},FranchiseBlockById:{Endpoint:"/getBlockFranchiseById",Method:d},AddFranchiseBlock:{Endpoint:"/addBlockFranchise",Method:d},EditFranchiseBlock:{Endpoint:"/editBlockFranchise",Method:d},DeleteFranchiseBlock:{Endpoint:"/deleteBlockFranchise",Method:d},PendingBlockFranchise:{Endpoint:"/getAllPendingBlockFranchise",Method:d}},FranchiseCluster:{AllFranchiseCluster:{Endpoint:"/getAllClusterFranchise",Method:d},FranchiseClusterById:{Endpoint:"/getClusterFranchiseById",Method:d},AddFranchiseCluster:{Endpoint:"/addClusterFranchise",Method:d},EditFranchiseCluster:{Endpoint:"/editClusterFranchise",Method:d},DeleteFranchiseCluster:{Endpoint:"/deleteClusterFranchise",Method:d},PendingClusterFranchise:{Endpoint:"/getAllPendingClusterFranchise",Method:d},frenciseClusterAccept:{Endpoint:"/frenciseClusterAccept",Method:d}},FranchiseVillage:{AllFranchiseVillage:{Endpoint:"/getAllVillageFranchise",Method:d},FranchiseVillageById:{Endpoint:"/getVillageFranchiseById",Method:d},AddFranchiseVillage:{Endpoint:"/addVillageFranchise",Method:d},EditFranchiseVillage:{Endpoint:"/editVillageFranchise",Method:d},DeleteFranchiseVillage:{Endpoint:"/deleteVillageFranchise",Method:d}},Commissiom:{All:{Endpoint:"/getAllCommission",Method:d},CommissiomById:{Endpoint:"/getCommissionById",Method:d},AddCommissiom:{Endpoint:"/addCommission",Method:d},EditCommissiom:{Endpoint:"/updateCommission",Method:d},DeleteCommissiom:{Endpoint:"/deleteCommission",Method:d}}};t.Z=r},48714:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var d=n(15861),r=n(29439),i=n(64687),o=n.n(i),a=n(72791),s=n(56650),c=n(21680),l=n(19773),h=n(24390),p=n(69963),u=n(9827),g=n(27161),E=n(60807),M=n(48928),f=(n(62062),n(42419)),B=n(59911),A=n(41286),y=n(27247),C=n(45953),F=n(61091),m=n(91923),v=n(23735),I=n(73978),S=n(4565),x=n(94162),Z=n(75814),D=n(13811),k=n(96580),b=n(57689),P=n(65218),j=n(59434),w=n(82539),R=n(79232),V=n(9890),z=n(80184);function H(){var e=(0,b.s0)(),t=a.useState(0),n=(0,r.Z)(t,2),i=n[0],H=n[1],_=(0,a.useState)(""),U=(0,r.Z)(_,2),T=U[0],O=U[1],q=a.useState(10),L=(0,r.Z)(q,2),G=L[0],J=L[1],N=(0,j.I0)(),W=new w.Z,X=(0,j.v9)((function(e){return e.banner.Banner})),Y=(0,V.qp)(),K=(0,a.useCallback)((0,d.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.getAllBanner({adminId:Y.StaffID});case 3:if((t=e.sent)&&t.data.data){e.next=8;break}return e.abrupt("return",P.Am.error("no latest banners available"));case 8:return N((0,R.be)(t.data.data)),e.abrupt("return");case 10:e.next=17;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),P.Am.error("Something went wrong"),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,12]])}))));(0,a.useEffect)((function(){K()}),[]);var Q=function(){var e=(0,d.Z)(o().mark((function e(t){var n,d,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.deleteBanner({adminId:Y.StaffID,bannerId:t});case 3:if(!(d=e.sent)||200!==(null===d||void 0===d||null===(n=d.data)||void 0===n?void 0:n.code)){e.next=9;break}return K(),e.abrupt("return",P.Am.success("Deleted Successfully"));case 9:return e.abrupt("return",P.Am.error(null===(r=d.data)||void 0===r?void 0:r.message));case 10:e.next=17;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),P.Am.error("Something went wrong"),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(B.Z,{fullWidth:!0,id:"outlined-search",label:"Search field",type:"search",onChange:function(e){O(e.target.value)}}),(0,z.jsx)(v.Z,{title:(0,z.jsxs)(C.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:m.dv,children:[(0,z.jsx)(C.ZP,{item:!0,children:(0,z.jsx)(S.Z,{variant:"h3",children:"Banner"})}),(0,z.jsx)(C.ZP,{item:!0,children:(0,z.jsx)(F.Z,{variant:"outlined",onClick:function(t){e("/add-banner")},startIcon:(0,z.jsx)(f.Z,{}),children:"Add Banner"})})]}),content:!1,children:X?(0,z.jsxs)(M.Z,{children:[(0,z.jsx)(C.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:m.dv,children:(0,z.jsx)(C.ZP,{item:!0})}),(0,z.jsxs)(s.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,z.jsx)(p.Z,{sx:{maxHeight:540},children:(0,z.jsxs)(c.Z,{stickyHeader:!0,"aria-label":"sticky table",id:"my-table",children:[(0,z.jsx)(u.Z,{children:(0,z.jsxs)(E.Z,{children:[(0,z.jsx)(h.Z,{sx:{pl:3},children:"S. No."}),(0,z.jsx)(h.Z,{children:"Banner Image"}),(0,z.jsx)(h.Z,{align:"center",sx:{pr:3},children:"Actions"})]})}),(0,z.jsx)(l.Z,{children:X.filter((function(e){return""===T?e:e.Title.toLowerCase().includes(T.toLowerCase())})).slice(i*G,i*G+G).map((function(t,n){return(0,z.jsxs)(E.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,z.jsx)(h.Z,{sx:{pl:3},align:"start",children:n+1}),(0,z.jsx)(h.Z,{align:"start",children:(0,z.jsx)("a",{href:t.Image,target:"_blank",children:(0,z.jsx)(I.Z,{alt:"Agri Input",variant:"rounded",size:"md",src:t.Image,sx:{width:60,height:60}})})}),(0,z.jsx)(h.Z,{align:"center",sx:{pr:3},children:(0,z.jsxs)(x.Z,{direction:"row",justifyContent:"center",alignItems:"center",children:[(0,z.jsx)(Z.Z,{placement:"top",title:"Edit",onClick:function(n){e("/edit-banner/".concat(t.BannerID))},"data-target":"#",children:(0,z.jsx)(D.Z,{color:"primary","aria-label":"edit",size:"large",children:(0,z.jsx)(A.Z,{sx:{fontSize:"1.1rem"}})})}),(0,z.jsx)(Z.Z,{placement:"top",title:"delete",onClick:function(){return Q("".concat(t.BannerID))},children:(0,z.jsx)(D.Z,{color:"primary","aria-label":"edit",size:"large",children:(0,z.jsx)(y.Z,{sx:{fontSize:"1.1rem"}})})})]})})]},n)}))})]})}),(0,z.jsx)(g.Z,{rowsPerPageOptions:[10,20,100],component:"div",count:X.length,rowsPerPage:G,page:i,onPageChange:function(e,t){H(t)},onRowsPerPageChange:function(e){J(+e.target.value),H(0)}})]})]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("br",{}),(0,z.jsx)("center",{children:(0,z.jsx)(k.Z,{})})]})})]})}},42419:function(e,t,n){var d=n(64836);t.Z=void 0;var r=d(n(45649)),i=n(80184),o=(0,r.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=o},27247:function(e,t,n){var d=n(64836);t.Z=void 0;var r=d(n(45649)),i=n(80184),o=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o},41286:function(e,t,n){var d=n(64836);t.Z=void 0;var r=d(n(45649)),i=n(80184),o=(0,r.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=o}}]);
//# sourceMappingURL=8714.28d6ad71.chunk.js.map