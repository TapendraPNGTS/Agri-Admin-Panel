"use strict";(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[3777],{91943:function(e,t,n){var i=n(15861),d=n(43144),r=n(15671),o=n(60136),a=n(27277),s=n(64687),c=n.n(s),l=n(9890),h=n(21156),p=n(76397),u=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.call(this,"https://admin-api.myagriinput.com/api/v1/"))._initializeRequestInterceptor=function(){e.instance.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat((0,l.aO)()),e.headers.Authkey="U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks=",e}))},e._initializeResponseInterceptor=function(){e.instance.interceptors.response.use((function(e){return e}),(function(e){return Promise.resolve(e)}))},e.AllCategoryConfig=h.Z.Category.All,e.CategoryByIdConfig=h.Z.Category.CategoryById,e.AddCategoryConfig=h.Z.Category.AddCategory,e.EditCategoryConfig=h.Z.Category.EditCategory,e.DeleteCategoryConfig=h.Z.Category.DeleteCategory,e.getAllCategory=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AllCategoryConfig.Method,url:e.AllCategoryConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getCategoryById=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.CategoryByIdConfig.Method,url:e.CategoryByIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addCategory=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AddCategoryConfig.Method,url:e.AddCategoryConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editCategory=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.EditCategoryConfig.Method,url:e.EditCategoryConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteCategory=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.DeleteCategoryConfig.Method,url:e.DeleteCategoryConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e._initializeRequestInterceptor(),e._initializeResponseInterceptor(),e}return(0,d.Z)(n)}(p.Z);t.Z=u},76397:function(e,t,n){var i=n(15861),d=n(43144),r=n(15671),o=n(64687),a=n.n(o),s=n(74569),c=n.n(s),l=(0,d.Z)((function e(t){var n=this;(0,r.Z)(this,e),this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n._handleError)},this._handleResponse=function(e){return e},this._handleError=function(){var e=(0,i.Z)(a().mark((function e(t){var i,d,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.response,d=t.config,r=d,401!==(null===i||void 0===i?void 0:i.status)||r._retry){e.next=5;break}return r._retry=!0,e.abrupt("return",n.instance(r));case 5:return e.abrupt("return",Promise.resolve(i));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.instance=c().create({baseURL:t}),this._initializeResponseInterceptor()}));t.Z=l},21156:function(e,t,n){var i="POST",d={Dashboard:{Data:{Endpoint:"/dashboard",Method:i}},Auth:{Login:{Endpoint:"/login",Method:i}},User:{All:{Endpoint:"/getAllUser",Method:i},UserById:{Endpoint:"/getUserById",Method:i}},Transaction:{AllFrTransaction:{Endpoint:"/getAllFranchiseTransaction",Method:i},AllUserTransaction:{Endpoint:"/getAllUserTransaction",Method:i},FranchiseTransaction:{Endpoint:"/getFranchiseTransaction ",Method:i},UserTransaction:{Endpoint:"/getUserTransaction ",Method:i},CommissionHistory:{Endpoint:"/getAllInchargeCommission",Method:i}},CheckOut:{Data:{Endpoint:"/addAllCart",Method:i}},Order:{AllFranchiseComplete:{Endpoint:"/getAllFranchiseOnline",Method:i},AllFranchisePending:{Endpoint:"/getAllFranchiseCOD",Method:i},AllUserComplete:{Endpoint:"/getAllUserOnline",Method:i},AllUserPending:{Endpoint:"/getAllUserCOD",Method:i}},Cod:{Cod:{Endpoint:"/frenchiseProductCOD",Method:i},PhonePay:{Endpoint:"/payment",Method:i}},Banner:{All:{Endpoint:"/getAllBanner",Method:i},BannerById:{Endpoint:"/getBannerById",Method:i},AddBanner:{Endpoint:"/addBanner",Method:i},EditBanner:{Endpoint:"/updateBanner",Method:i},DeleteBanner:{Endpoint:"/deleteBanner",Method:i}},Category:{All:{Endpoint:"/getAllCategory",Method:i},CategoryById:{Endpoint:"/getCategoryById",Method:i},AddCategory:{Endpoint:"/addCategory",Method:i},EditCategory:{Endpoint:"/updateCategory",Method:i},DeleteCategory:{Endpoint:"/deleteCategory",Method:i}},Attendence:{All:{Endpoint:"/getAllAttendence",Method:i},AttendenceById:{Endpoint:"/getAttendenceById",Method:i},AddAttendence:{Endpoint:"/addAttendence",Method:i},EditAttendence:{Endpoint:"/updateAttendence",Method:i},DeleteAttendence:{Endpoint:"/deleteAttendence",Method:i}},Holiday:{All:{Endpoint:"/getAllHoliday",Method:i},HolidayById:{Endpoint:"/getHolidayById",Method:i},AddHoliday:{Endpoint:"/addHoliday",Method:i},EditHoliday:{Endpoint:"/updateHoliday",Method:i},DeleteHoliday:{Endpoint:"/deleteHoliday",Method:i}},Service:{All:{Endpoint:"/getAllService",Method:i},ServiceById:{Endpoint:"/getServiceById",Method:i},AddService:{Endpoint:"/addService",Method:i},EditService:{Endpoint:"/updateService",Method:i},DeleteService:{Endpoint:"/deleteService",Method:i}},SubCategory:{All:{Endpoint:"/getAllSubCategory",Method:i},SubCategoryById:{Endpoint:"/getSubCategoryById",Method:i},subCategoryByCategoryIdConfig:{Endpoint:"/getSubCategoryByCategoryId",Method:i},AddSubCategory:{Endpoint:"/addSubCategory",Method:i},EditSubCategory:{Endpoint:"/updateSubCategory",Method:i},DeleteSubCategory:{Endpoint:"/deleteCategory",Method:i}},Product:{All:{Endpoint:"/getAllProduct",Method:i},AllProductFrencise:{Endpoint:"/getFranchiseProduct",Method:i},ProductById:{Endpoint:"/getProductById",Method:i},AddProduct:{Endpoint:"/addProduct",Method:i},addProductVarients:{Endpoint:"/addProductVarients",Method:i},EditProduct:{Endpoint:"/updateProduct",Method:i},EditProductVariant:{Endpoint:"/updateProductVarients",Method:i},DeleteProduct:{Endpoint:"/deleteProduct",Method:i}},Frencise:{All:{Endpoint:"/getAllFrencise",Method:i},FrenciseAccept:{Endpoint:"/getAllFrencisePending",Method:i},FrenciseById:{Endpoint:"/getFrenciseById",Method:i},FrenciseCheck:{Endpoint:"/frenciseCheck",Method:i},AddFrencise:{Endpoint:"/addFrencise",Method:i},EditFrencise:{Endpoint:"/editFrencise",Method:i},DeleteFrencise:{Endpoint:"/deleteFrencise",Method:i}},Role:{All:{Endpoint:"/getAllRole",Method:i},RoleById:{Endpoint:"/getRoleById",Method:i},AddRole:{Endpoint:"/addRole",Method:i},EditRole:{Endpoint:"/updateRole",Method:i},DeleteRole:{Endpoint:"/deleteRole",Method:i}},Staff:{All:{Endpoint:"/getAllStaff",Method:i},StaffById:{Endpoint:"/getStaffById",Method:i},AddStaff:{Endpoint:"/addStaff",Method:i},EditStaff:{Endpoint:"/updateStaff",Method:i},DeleteStaff:{Endpoint:"/deleteStaff",Method:i}},Farmer:{All:{Endpoint:"/getAllServiceRequest",Method:i},FarmerById:{Endpoint:"/getServiceRequestById",Method:i},AddFarmer:{Endpoint:"/addServiceRequest",Method:i},EditFarmer:{Endpoint:"/updateFarmer",Method:i},DeleteFarmer:{Endpoint:"/deleteFarmer",Method:i}},District:{AllDistrict:{Endpoint:"/getAllDistrict",Method:i},DistrictById:{Endpoint:"/getDistrictById",Method:i},DistrictByStateId:{Endpoint:"/getCityByStateId",Method:i},AddDistrict:{Endpoint:"/addDistrict",Method:i},EditDistrict:{Endpoint:"/updateDistrict",Method:i},DeleteDistrict:{Endpoint:"/deleteDistrict",Method:i}},State:{AllState:{Endpoint:"/getAllState",Method:i},StateById:{Endpoint:"/getStateById",Method:i},AddState:{Endpoint:"/addState",Method:i},EditState:{Endpoint:"/updateState",Method:i},DeleteState:{Endpoint:"/deleteState",Method:i}},Block:{AllBlock:{Endpoint:"/getAllBlock",Method:i},BlockById:{Endpoint:"/getBlockById",Method:i},AddBlock:{Endpoint:"/addBlock",Method:i},EditBlock:{Endpoint:"/editBlock",Method:i},DeleteBlock:{Endpoint:"/deleteBlock",Method:i}},Cluster:{AllCluster:{Endpoint:"/getAllCluster",Method:i},ClusterById:{Endpoint:"/getClusterById",Method:i},AddCluster:{Endpoint:"/addCluster",Method:i},EditCluster:{Endpoint:"/editCluster",Method:i},DeleteCluster:{Endpoint:"/deleteCluster",Method:i}},FranchiseState:{AllFranchiseState:{Endpoint:"/getAllStateFranchise",Method:i},FranchiseStateById:{Endpoint:"/getStateFranchiseById",Method:i},AddFranchiseState:{Endpoint:"/addStateFranchise",Method:i},EditFranchiseState:{Endpoint:"/editStateFranchise",Method:i},DeleteFranchiseState:{Endpoint:"/deleteStateFranchise",Method:i},PendingStateFranchise:{Endpoint:"/getAllPendingStateFranchise",Method:i},frenciseStateAccept:{Endpoint:"/frenciseStateAccept",Method:i}},FranchiseDistrict:{AllFranchiseDistrict:{Endpoint:"/getAllDistrictFranchise",Method:i},FranchiseDistrictById:{Endpoint:"/getDistrictFranchiseById",Method:i},AddFranchiseDistrict:{Endpoint:"/addDistrictFranchise",Method:i},EditFranchiseDistrict:{Endpoint:"/editDistrictFranchise",Method:i},DeleteFranchiseDistrict:{Endpoint:"/deleteDistrictFranchise",Method:i},PendingDistrictFranchise:{Endpoint:"/getAllPendingDistrictFranchise",Method:i},frenciseDistrictAccept:{Endpoint:"/frenciseDistrictAccept",Method:i}},FranchiseBlock:{AllFranchiseBlock:{Endpoint:"/getAllBlockFranchise",Method:i},FranchiseBlockById:{Endpoint:"/getBlockFranchiseById",Method:i},AddFranchiseBlock:{Endpoint:"/addBlockFranchise",Method:i},EditFranchiseBlock:{Endpoint:"/editBlockFranchise",Method:i},DeleteFranchiseBlock:{Endpoint:"/deleteBlockFranchise",Method:i},PendingBlockFranchise:{Endpoint:"/getAllPendingBlockFranchise",Method:i}},FranchiseCluster:{AllFranchiseCluster:{Endpoint:"/getAllClusterFranchise",Method:i},FranchiseClusterById:{Endpoint:"/getClusterFranchiseById",Method:i},AddFranchiseCluster:{Endpoint:"/addClusterFranchise",Method:i},EditFranchiseCluster:{Endpoint:"/editClusterFranchise",Method:i},DeleteFranchiseCluster:{Endpoint:"/deleteClusterFranchise",Method:i},PendingClusterFranchise:{Endpoint:"/getAllPendingClusterFranchise",Method:i},frenciseClusterAccept:{Endpoint:"/frenciseClusterAccept",Method:i}},FranchiseVillage:{AllFranchiseVillage:{Endpoint:"/getAllVillageFranchise",Method:i},FranchiseVillageById:{Endpoint:"/getVillageFranchiseById",Method:i},AddFranchiseVillage:{Endpoint:"/addVillageFranchise",Method:i},EditFranchiseVillage:{Endpoint:"/editVillageFranchise",Method:i},DeleteFranchiseVillage:{Endpoint:"/deleteVillageFranchise",Method:i}},Commissiom:{All:{Endpoint:"/getAllCommission",Method:i},CommissiomById:{Endpoint:"/getCommissionById",Method:i},AddCommissiom:{Endpoint:"/addCommission",Method:i},EditCommissiom:{Endpoint:"/updateCommission",Method:i},DeleteCommissiom:{Endpoint:"/deleteCommission",Method:i}}};t.Z=d},23777:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var i=n(15861),d=n(29439),r=n(64687),o=n.n(r),a=n(72791),s=n(56650),c=n(21680),l=n(19773),h=n(24390),p=n(69963),u=n(9827),g=n(27161),E=n(60807),y=n(48928),C=(n(62062),n(42419)),M=n(59911),f=n(41286),A=n(45953),m=n(61091),F=n(91923),B=n(23735),I=n(73978),v=n(9890),x=n(4565),Z=n(65209),S=n(94162),D=n(75814),j=n(13811),k=n(96580),P=n(57689),b=n(11087),w=n(3746),R=n(65218),z=n(59434),V=n(91943),_=n(89698),H=n(80184);function U(){var e=(0,P.s0)(),t=a.useState(0),n=(0,d.Z)(t,2),r=n[0],U=n[1],T=(0,a.useState)(""),O=(0,d.Z)(T,2),q=O[0],L=O[1],N=a.useState(10),X=(0,d.Z)(N,2),G=X[0],J=X[1],W=(0,z.I0)(),Y=new V.Z,K=(0,z.v9)((function(e){return e.category.Category})),Q=(0,v.qp)(),$=(0,a.useCallback)((0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.getAllCategory({adminId:Q.StaffID});case 3:if((t=e.sent)&&t.data.data){e.next=8;break}return e.abrupt("return",R.Am.error("no latest banners available"));case 8:return W((0,_.wX)(t.data.data)),e.abrupt("return");case 10:e.next=17;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),R.Am.error("Something went wrong"),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,12]])}))));(0,a.useEffect)((function(){$()}),[]),(0,a.useEffect)((function(){}),[K]);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(M.Z,{id:"outlined-search",label:"Search field",type:"search",fullWidth:!0,onChange:function(e){L(e.target.value)}}),(0,H.jsx)(B.Z,{title:(0,H.jsxs)(A.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:F.dv,children:[(0,H.jsx)(A.ZP,{item:!0,children:(0,H.jsx)(x.Z,{variant:"h3",children:"Category List"})}),(0,H.jsx)(A.ZP,{item:!0,children:(0,H.jsx)(m.Z,{variant:"outlined",onClick:function(t){e("/add-category")},startIcon:(0,H.jsx)(C.Z,{}),children:"Add Category"})})]}),content:!1,children:K?(0,H.jsxs)(y.Z,{children:[(0,H.jsx)(A.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:F.dv,children:(0,H.jsx)(A.ZP,{item:!0})}),(0,H.jsxs)(s.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,H.jsx)(p.Z,{sx:{maxHeight:540},children:(0,H.jsxs)(c.Z,{stickyHeader:!0,"aria-label":"sticky table",id:"my-table",children:[(0,H.jsx)(u.Z,{children:(0,H.jsxs)(E.Z,{children:[(0,H.jsx)(h.Z,{sx:{pl:3},children:"S. No."}),(0,H.jsx)(h.Z,{children:"Date"}),(0,H.jsx)(h.Z,{hidden:!0,children:"Category ID"}),(0,H.jsx)(h.Z,{children:"Category Image"}),(0,H.jsx)(h.Z,{children:"Category Name"}),(0,H.jsx)(h.Z,{children:"Status "}),(0,H.jsx)(h.Z,{align:"center",sx:{pr:3},children:"Actions"})]})}),(0,H.jsx)(l.Z,{children:K.filter((function(e){return""===q?e:e.Name.toLowerCase().includes(q.toLowerCase())})).slice(r*G,r*G+G).map((function(t,n){return(0,H.jsxs)(E.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,H.jsx)(h.Z,{sx:{pl:3},align:"start",children:n+1}),(0,H.jsx)(h.Z,{children:(i=t.createdAt,new Date(i).toLocaleString("en-us",{day:"numeric",month:"short",year:"numeric"}))}),(0,H.jsx)(h.Z,{hidden:!0,children:t.CategoryID}),(0,H.jsx)(h.Z,{align:"start",children:(0,H.jsx)("a",{href:t.Image,target:"_blank",children:(0,H.jsx)(I.Z,{alt:"Agri Input",variant:"rounded",size:"md",src:t.Image,sx:{width:60,height:60}})})}),(0,H.jsx)(h.Z,{align:"start",children:t.Name}),(0,H.jsx)(h.Z,{align:"start",children:t.IsActive?(0,H.jsx)(Z.Z,{label:"Active",color:"success",size:"small"}):(0,H.jsx)(Z.Z,{label:"Inactive",color:"warning",size:"small"})}),(0,H.jsx)(h.Z,{align:"center",sx:{pr:3},children:(0,H.jsxs)(S.Z,{direction:"row",justifyContent:"center",alignItems:"center",children:[(0,H.jsx)(D.Z,{placement:"top",title:"Edit",onClick:function(n){e("/edit-category/".concat(t.CategoryID))},"data-target":"#",children:(0,H.jsx)(j.Z,{color:"primary","aria-label":"edit",size:"large",children:(0,H.jsx)(f.Z,{sx:{fontSize:"1.1rem"}})})}),(0,H.jsx)(b.rU,{to:"/view-category/".concat(t.CategoryID),children:(0,H.jsx)(j.Z,{color:"primary",title:"view Product","aria-label":"view",size:"large",children:(0,H.jsx)(w.Z,{sx:{fontSize:"1.1rem"}})})})]})})]},t.code);var i}))})]})}),(0,H.jsx)(g.Z,{rowsPerPageOptions:[10,20,100],component:"div",count:K.length,rowsPerPage:G,page:r,onPageChange:function(e,t){U(t)},onRowsPerPageChange:function(e){J(+e.target.value),U(0)}})]})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("br",{}),(0,H.jsx)("center",{children:(0,H.jsx)(k.Z,{})})]})})]})}},42419:function(e,t,n){var i=n(64836);t.Z=void 0;var d=i(n(45649)),r=n(80184),o=(0,d.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=o},41286:function(e,t,n){var i=n(64836);t.Z=void 0;var d=i(n(45649)),r=n(80184),o=(0,d.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=o},3746:function(e,t,n){var i=n(64836);t.Z=void 0;var d=i(n(45649)),r=n(80184),o=(0,d.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=o}}]);
//# sourceMappingURL=3777.02b93168.chunk.js.map