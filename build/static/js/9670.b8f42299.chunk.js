"use strict";(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[9670],{87323:function(e,t,n){var i=n(15861),r=n(43144),d=n(15671),o=n(60136),a=n(27277),s=n(64687),c=n.n(s),l=n(9890),h=n(21156),p=n(76397),u=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,d.Z)(this,n),(e=t.call(this,"https://admin-api.myagriinput.com/api/v1/"))._initializeRequestInterceptor=function(){e.instance.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat((0,l.aO)()),e.headers.Authkey="U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks=",e}))},e._initializeResponseInterceptor=function(){e.instance.interceptors.response.use((function(e){return e}),(function(e){return Promise.resolve(e)}))},e.AllFranchiseStateConfig=h.Z.FranchiseState.AllFranchiseState,e.FranchiseStateByIdConfig=h.Z.FranchiseState.FranchiseStateById,e.AddFranchiseStateConfig=h.Z.FranchiseState.AddFranchiseState,e.EditFranchiseStateConfig=h.Z.FranchiseState.EditFranchiseState,e.DeleteFranchiseStateConfig=h.Z.FranchiseState.DeleteFranchiseState,e.PendingStateFranchiseConfig=h.Z.FranchiseState.PendingStateFranchise,e.frenciseStateAcceptConfig=h.Z.FranchiseState.frenciseStateAccept,e.frenciseClusterAcceptConfig=h.Z.FranchiseState.frenciseClusterAccept,e.getAllStateFranchise=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AllFranchiseStateConfig.Method,url:e.AllFranchiseStateConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getStateFranchiseById=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.FranchiseStateByIdConfig.Method,url:e.FranchiseStateByIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getAllPendingStateFranchise=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.PendingStateFranchiseConfig.Method,url:e.PendingStateFranchiseConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addStateFranchise=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AddFranchiseStateConfig.Method,url:e.AddFranchiseStateConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editStateFranchise=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.EditFranchiseStateConfig.Method,url:e.EditFranchiseStateConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.frenciseStateAccept=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.frenciseStateAcceptConfig.Method,url:e.frenciseStateAcceptConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.frenciseClusterAccept=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.frenciseClusterAcceptConfig.Method,url:e.frenciseClusterAcceptConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteStateFranchise=function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.DeleteFranchiseStateConfig.Method,url:e.DeleteFranchiseStateConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e._initializeRequestInterceptor(),e._initializeResponseInterceptor(),e}return(0,r.Z)(n)}(p.Z);t.Z=u},76397:function(e,t,n){var i=n(15861),r=n(43144),d=n(15671),o=n(64687),a=n.n(o),s=n(74569),c=n.n(s),l=(0,r.Z)((function e(t){var n=this;(0,d.Z)(this,e),this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n._handleError)},this._handleResponse=function(e){return e},this._handleError=function(){var e=(0,i.Z)(a().mark((function e(t){var i,r,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.response,r=t.config,d=r,401!==(null===i||void 0===i?void 0:i.status)||d._retry){e.next=5;break}return d._retry=!0,e.abrupt("return",n.instance(d));case 5:return e.abrupt("return",Promise.resolve(i));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.instance=c().create({baseURL:t}),this._initializeResponseInterceptor()}));t.Z=l},21156:function(e,t,n){var i="POST",r={Dashboard:{Data:{Endpoint:"/dashboard",Method:i}},Auth:{Login:{Endpoint:"/login",Method:i}},User:{All:{Endpoint:"/getAllUser",Method:i},UserById:{Endpoint:"/getUserById",Method:i}},Transaction:{AllFrTransaction:{Endpoint:"/getAllFranchiseTransaction",Method:i},AllUserTransaction:{Endpoint:"/getAllUserTransaction",Method:i},FranchiseTransaction:{Endpoint:"/getFranchiseTransaction ",Method:i},UserTransaction:{Endpoint:"/getUserTransaction ",Method:i},CommissionHistory:{Endpoint:"/getAllInchargeCommission",Method:i}},CheckOut:{Data:{Endpoint:"/addAllCart",Method:i}},Order:{AllFranchiseComplete:{Endpoint:"/getAllFranchiseOnline",Method:i},AllFranchisePending:{Endpoint:"/getAllFranchiseCOD",Method:i},AllUserComplete:{Endpoint:"/getAllUserOnline",Method:i},AllUserPending:{Endpoint:"/getAllUserCOD",Method:i}},Cod:{Cod:{Endpoint:"/frenchiseProductCOD",Method:i},PhonePay:{Endpoint:"/payment",Method:i}},Banner:{All:{Endpoint:"/getAllBanner",Method:i},BannerById:{Endpoint:"/getBannerById",Method:i},AddBanner:{Endpoint:"/addBanner",Method:i},EditBanner:{Endpoint:"/updateBanner",Method:i},DeleteBanner:{Endpoint:"/deleteBanner",Method:i}},Category:{All:{Endpoint:"/getAllCategory",Method:i},CategoryById:{Endpoint:"/getCategoryById",Method:i},AddCategory:{Endpoint:"/addCategory",Method:i},EditCategory:{Endpoint:"/updateCategory",Method:i},DeleteCategory:{Endpoint:"/deleteCategory",Method:i}},Attendence:{All:{Endpoint:"/getAllAttendence",Method:i},AttendenceById:{Endpoint:"/getAttendenceById",Method:i},AddAttendence:{Endpoint:"/addAttendence",Method:i},EditAttendence:{Endpoint:"/updateAttendence",Method:i},DeleteAttendence:{Endpoint:"/deleteAttendence",Method:i}},Holiday:{All:{Endpoint:"/getAllHoliday",Method:i},HolidayById:{Endpoint:"/getHolidayById",Method:i},AddHoliday:{Endpoint:"/addHoliday",Method:i},EditHoliday:{Endpoint:"/updateHoliday",Method:i},DeleteHoliday:{Endpoint:"/deleteHoliday",Method:i}},Service:{All:{Endpoint:"/getAllService",Method:i},ServiceById:{Endpoint:"/getServiceById",Method:i},AddService:{Endpoint:"/addService",Method:i},EditService:{Endpoint:"/updateService",Method:i},DeleteService:{Endpoint:"/deleteService",Method:i}},SubCategory:{All:{Endpoint:"/getAllSubCategory",Method:i},SubCategoryById:{Endpoint:"/getSubCategoryById",Method:i},subCategoryByCategoryIdConfig:{Endpoint:"/getSubCategoryByCategoryId",Method:i},AddSubCategory:{Endpoint:"/addSubCategory",Method:i},EditSubCategory:{Endpoint:"/updateSubCategory",Method:i},DeleteSubCategory:{Endpoint:"/deleteCategory",Method:i}},Product:{All:{Endpoint:"/getAllProduct",Method:i},AllProductFrencise:{Endpoint:"/getFranchiseProduct",Method:i},ProductById:{Endpoint:"/getProductById",Method:i},AddProduct:{Endpoint:"/addProduct",Method:i},addProductVarients:{Endpoint:"/addProductVarients",Method:i},EditProduct:{Endpoint:"/updateProduct",Method:i},EditProductVariant:{Endpoint:"/updateProductVarients",Method:i},DeleteProduct:{Endpoint:"/deleteProduct",Method:i}},Frencise:{All:{Endpoint:"/getAllFrencise",Method:i},FrenciseAccept:{Endpoint:"/getAllFrencisePending",Method:i},FrenciseById:{Endpoint:"/getFrenciseById",Method:i},FrenciseCheck:{Endpoint:"/frenciseCheck",Method:i},AddFrencise:{Endpoint:"/addFrencise",Method:i},EditFrencise:{Endpoint:"/editFrencise",Method:i},DeleteFrencise:{Endpoint:"/deleteFrencise",Method:i}},Role:{All:{Endpoint:"/getAllRole",Method:i},RoleById:{Endpoint:"/getRoleById",Method:i},AddRole:{Endpoint:"/addRole",Method:i},EditRole:{Endpoint:"/updateRole",Method:i},DeleteRole:{Endpoint:"/deleteRole",Method:i}},Staff:{All:{Endpoint:"/getAllStaff",Method:i},StaffById:{Endpoint:"/getStaffById",Method:i},AddStaff:{Endpoint:"/addStaff",Method:i},EditStaff:{Endpoint:"/updateStaff",Method:i},DeleteStaff:{Endpoint:"/deleteStaff",Method:i}},Farmer:{All:{Endpoint:"/getAllServiceRequest",Method:i},FarmerById:{Endpoint:"/getServiceRequestById",Method:i},AddFarmer:{Endpoint:"/addServiceRequest",Method:i},EditFarmer:{Endpoint:"/updateFarmer",Method:i},DeleteFarmer:{Endpoint:"/deleteFarmer",Method:i}},District:{AllDistrict:{Endpoint:"/getAllDistrict",Method:i},DistrictById:{Endpoint:"/getDistrictById",Method:i},DistrictByStateId:{Endpoint:"/getCityByStateId",Method:i},AddDistrict:{Endpoint:"/addDistrict",Method:i},EditDistrict:{Endpoint:"/updateDistrict",Method:i},DeleteDistrict:{Endpoint:"/deleteDistrict",Method:i}},State:{AllState:{Endpoint:"/getAllState",Method:i},StateById:{Endpoint:"/getStateById",Method:i},AddState:{Endpoint:"/addState",Method:i},EditState:{Endpoint:"/updateState",Method:i},DeleteState:{Endpoint:"/deleteState",Method:i}},Block:{AllBlock:{Endpoint:"/getAllBlock",Method:i},BlockById:{Endpoint:"/getBlockById",Method:i},AddBlock:{Endpoint:"/addBlock",Method:i},EditBlock:{Endpoint:"/editBlock",Method:i},DeleteBlock:{Endpoint:"/deleteBlock",Method:i}},Cluster:{AllCluster:{Endpoint:"/getAllCluster",Method:i},ClusterById:{Endpoint:"/getClusterById",Method:i},AddCluster:{Endpoint:"/addCluster",Method:i},EditCluster:{Endpoint:"/editCluster",Method:i},DeleteCluster:{Endpoint:"/deleteCluster",Method:i}},FranchiseState:{AllFranchiseState:{Endpoint:"/getAllStateFranchise",Method:i},FranchiseStateById:{Endpoint:"/getStateFranchiseById",Method:i},AddFranchiseState:{Endpoint:"/addStateFranchise",Method:i},EditFranchiseState:{Endpoint:"/editStateFranchise",Method:i},DeleteFranchiseState:{Endpoint:"/deleteStateFranchise",Method:i},PendingStateFranchise:{Endpoint:"/getAllPendingStateFranchise",Method:i},frenciseStateAccept:{Endpoint:"/frenciseStateAccept",Method:i}},FranchiseDistrict:{AllFranchiseDistrict:{Endpoint:"/getAllDistrictFranchise",Method:i},FranchiseDistrictById:{Endpoint:"/getDistrictFranchiseById",Method:i},AddFranchiseDistrict:{Endpoint:"/addDistrictFranchise",Method:i},EditFranchiseDistrict:{Endpoint:"/editDistrictFranchise",Method:i},DeleteFranchiseDistrict:{Endpoint:"/deleteDistrictFranchise",Method:i},PendingDistrictFranchise:{Endpoint:"/getAllPendingDistrictFranchise",Method:i},frenciseDistrictAccept:{Endpoint:"/frenciseDistrictAccept",Method:i}},FranchiseBlock:{AllFranchiseBlock:{Endpoint:"/getAllBlockFranchise",Method:i},FranchiseBlockById:{Endpoint:"/getBlockFranchiseById",Method:i},AddFranchiseBlock:{Endpoint:"/addBlockFranchise",Method:i},EditFranchiseBlock:{Endpoint:"/editBlockFranchise",Method:i},DeleteFranchiseBlock:{Endpoint:"/deleteBlockFranchise",Method:i},PendingBlockFranchise:{Endpoint:"/getAllPendingBlockFranchise",Method:i}},FranchiseCluster:{AllFranchiseCluster:{Endpoint:"/getAllClusterFranchise",Method:i},FranchiseClusterById:{Endpoint:"/getClusterFranchiseById",Method:i},AddFranchiseCluster:{Endpoint:"/addClusterFranchise",Method:i},EditFranchiseCluster:{Endpoint:"/editClusterFranchise",Method:i},DeleteFranchiseCluster:{Endpoint:"/deleteClusterFranchise",Method:i},PendingClusterFranchise:{Endpoint:"/getAllPendingClusterFranchise",Method:i},frenciseClusterAccept:{Endpoint:"/frenciseClusterAccept",Method:i}},FranchiseVillage:{AllFranchiseVillage:{Endpoint:"/getAllVillageFranchise",Method:i},FranchiseVillageById:{Endpoint:"/getVillageFranchiseById",Method:i},AddFranchiseVillage:{Endpoint:"/addVillageFranchise",Method:i},EditFranchiseVillage:{Endpoint:"/editVillageFranchise",Method:i},DeleteFranchiseVillage:{Endpoint:"/deleteVillageFranchise",Method:i}},Commissiom:{All:{Endpoint:"/getAllCommission",Method:i},CommissiomById:{Endpoint:"/getCommissionById",Method:i},AddCommissiom:{Endpoint:"/addCommission",Method:i},EditCommissiom:{Endpoint:"/updateCommission",Method:i},DeleteCommissiom:{Endpoint:"/deleteCommission",Method:i}}};t.Z=r},69670:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(15861),r=n(29439),d=n(64687),o=n.n(d),a=n(72791),s=n(56650),c=n(21680),l=n(19773),h=n(24390),p=n(69963),u=n(9827),g=n(27161),E=n(60807),f=n(48928),M=(n(62062),n(42419)),F=n(59911),A=n(45953),S=n(61091),C=n(91923),y=n(23735),B=n(4565),m=n(65209),v=n(96580),I=n(57689),Z=n(65218),x=n(59434),D=n(87323),k=n(13328),P=n(80184);function b(){var e=(0,I.s0)(),t=a.useState(0),n=(0,r.Z)(t,2),d=n[0],b=n[1],j=(0,a.useState)(""),w=(0,r.Z)(j,2),R=w[0],V=w[1],H=a.useState(10),_=(0,r.Z)(H,2),U=_[0],z=_[1],O=(0,x.I0)(),T=new D.Z,q=(0,x.v9)((function(e){return e.franchiseState.FranchiseState})),N=(0,a.useCallback)((0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.getAllStateFranchise({});case 3:if((t=e.sent)&&t.data.data){e.next=8;break}return e.abrupt("return",Z.Am.error("no latest state available"));case 8:return O((0,k.Qd)(t.data.data)),e.abrupt("return");case 10:e.next=17;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),Z.Am.error("Something went wrong"),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,12]])}))));(0,a.useEffect)((function(){N()}),[]),(0,a.useEffect)((function(){}),[q]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(F.Z,{fullWidth:!0,id:"outlined-search",label:"Search field",type:"search",onChange:function(e){V(e.target.value)}}),(0,P.jsx)(y.Z,{title:(0,P.jsxs)(A.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:C.dv,children:[(0,P.jsx)(A.ZP,{item:!0,children:(0,P.jsx)(B.Z,{variant:"h3",children:"State Incharge"})}),(0,P.jsx)(A.ZP,{item:!0,children:(0,P.jsx)(S.Z,{variant:"outlined",onClick:function(t){e("/add-franchise-state")},startIcon:(0,P.jsx)(M.Z,{}),children:"Add State Incharge"})})]}),content:!1,children:q?(0,P.jsxs)(f.Z,{children:[(0,P.jsx)(A.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:C.dv,children:(0,P.jsx)(A.ZP,{item:!0})}),(0,P.jsxs)(s.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,P.jsx)(p.Z,{sx:{maxHeight:540},children:(0,P.jsxs)(c.Z,{stickyHeader:!0,"aria-label":"sticky table",id:"my-table",children:[(0,P.jsx)(u.Z,{children:(0,P.jsxs)(E.Z,{children:[(0,P.jsx)(h.Z,{sx:{pl:3},children:"S. No."}),(0,P.jsx)(h.Z,{children:"Name"}),(0,P.jsx)(h.Z,{children:"Email"}),(0,P.jsx)(h.Z,{children:"Contact"}),(0,P.jsx)(h.Z,{children:"State"}),(0,P.jsx)(h.Z,{children:"Status"})]})}),(0,P.jsx)(l.Z,{children:q.filter((function(e){return""===R?e:e.Name.toLowerCase().includes(R.toLowerCase())})).slice(d*U,d*U+U).map((function(e,t){return(0,P.jsxs)(E.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,P.jsx)(h.Z,{sx:{pl:3},align:"start",children:t+1}),(0,P.jsx)(h.Z,{sx:{pl:3},align:"start",children:e.Name}),(0,P.jsx)(h.Z,{sx:{pl:3},align:"start",children:e.Email}),(0,P.jsx)(h.Z,{sx:{pl:3},align:"start",children:e.Contact}),(0,P.jsx)(h.Z,{sx:{pl:3},align:"start",children:e.StateID.Name}),(0,P.jsx)(h.Z,{align:"start",children:e.IsActive?(0,P.jsx)(m.Z,{label:"Active",color:"success",size:"small"}):(0,P.jsx)(m.Z,{label:"Inactive",color:"warning",size:"small"})})]},e.code)}))})]})}),(0,P.jsx)(g.Z,{rowsPerPageOptions:[10,20,100],component:"div",count:q.length,rowsPerPage:U,page:d,onPageChange:function(e,t){b(t)},onRowsPerPageChange:function(e){z(+e.target.value),b(0)}})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("br",{}),(0,P.jsx)("center",{children:(0,P.jsx)(v.Z,{})})]})})]})}},42419:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),d=n(80184),o=(0,r.default)((0,d.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=o}}]);
//# sourceMappingURL=9670.b8f42299.chunk.js.map