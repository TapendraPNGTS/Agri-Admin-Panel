"use strict";(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[7719],{76397:function(e,t,n){var d=n(15861),i=n(43144),r=n(15671),o=n(64687),a=n.n(o),l=n(74569),s=n.n(l),c=(0,i.Z)((function e(t){var n=this;(0,r.Z)(this,e),this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n._handleError)},this._handleResponse=function(e){return e},this._handleError=function(){var e=(0,d.Z)(a().mark((function e(t){var d,i,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d=t.response,i=t.config,r=i,401!==(null===d||void 0===d?void 0:d.status)||r._retry){e.next=5;break}return r._retry=!0,e.abrupt("return",n.instance(r));case 5:return e.abrupt("return",Promise.resolve(d));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.instance=s().create({baseURL:t}),this._initializeResponseInterceptor()}));t.Z=c},89074:function(e,t,n){var d=n(15861),i=n(43144),r=n(15671),o=n(60136),a=n(27277),l=n(64687),s=n.n(l),c=n(9890),h=n(21156),p=n(76397),u=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.call(this,"https://admin-api.myagriinput.com/api/v1/"))._initializeRequestInterceptor=function(){e.instance.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat((0,c.aO)()),e.headers.Authkey="U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks=",e}))},e._initializeResponseInterceptor=function(){e.instance.interceptors.response.use((function(e){return e}),(function(e){return Promise.resolve(e)}))},e.AllFranchisCompleteConfig=h.Z.Order.AllFranchiseComplete,e.AllFranchisPendingConfig=h.Z.Order.AllFranchisePending,e.AllUserCompleteConfig=h.Z.Order.AllUserComplete,e.AllUserPendingConfig=h.Z.Order.AllUserPending,e.getAllFranchisComplete=(0,d.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AllFranchisCompleteConfig.Method,url:e.AllFranchisCompleteConfig.Endpoint,headers:{},data:null}));case 1:case"end":return t.stop()}}),t)}))),e.getAllFranchisPending=(0,d.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AllFranchisPendingConfig.Method,url:e.AllFranchisPendingConfig.Endpoint,headers:{},data:null}));case 1:case"end":return t.stop()}}),t)}))),e.getAllUserOrderComplete=(0,d.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AllUserCompleteConfig.Method,url:e.AllUserCompleteConfig.Endpoint,headers:{},data:null}));case 1:case"end":return t.stop()}}),t)}))),e.getAllUserOrderPending=(0,d.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AllUserPendingConfig.Method,url:e.AllUserPendingConfig.Endpoint,headers:{},data:null}));case 1:case"end":return t.stop()}}),t)}))),e._initializeRequestInterceptor(),e._initializeResponseInterceptor(),e}return(0,i.Z)(n)}(p.Z);t.Z=u},21156:function(e,t,n){var d="POST",i={Dashboard:{Data:{Endpoint:"/dashboard",Method:d}},Auth:{Login:{Endpoint:"/login",Method:d}},User:{All:{Endpoint:"/getAllUser",Method:d},UserById:{Endpoint:"/getUserById",Method:d}},Transaction:{AllFrTransaction:{Endpoint:"/getAllFranchiseTransaction",Method:d},AllUserTransaction:{Endpoint:"/getAllUserTransaction",Method:d},FranchiseTransaction:{Endpoint:"/getFranchiseTransaction ",Method:d},UserTransaction:{Endpoint:"/getUserTransaction ",Method:d},CommissionHistory:{Endpoint:"/getAllInchargeCommission",Method:d}},CheckOut:{Data:{Endpoint:"/addAllCart",Method:d}},Order:{AllFranchiseComplete:{Endpoint:"/getAllFranchiseOnline",Method:d},AllFranchisePending:{Endpoint:"/getAllFranchiseCOD",Method:d},AllUserComplete:{Endpoint:"/getAllUserOnline",Method:d},AllUserPending:{Endpoint:"/getAllUserCOD",Method:d}},Cod:{Cod:{Endpoint:"/frenchiseProductCOD",Method:d},PhonePay:{Endpoint:"/payment",Method:d}},Banner:{All:{Endpoint:"/getAllBanner",Method:d},BannerById:{Endpoint:"/getBannerById",Method:d},AddBanner:{Endpoint:"/addBanner",Method:d},EditBanner:{Endpoint:"/updateBanner",Method:d},DeleteBanner:{Endpoint:"/deleteBanner",Method:d}},Category:{All:{Endpoint:"/getAllCategory",Method:d},CategoryById:{Endpoint:"/getCategoryById",Method:d},AddCategory:{Endpoint:"/addCategory",Method:d},EditCategory:{Endpoint:"/updateCategory",Method:d},DeleteCategory:{Endpoint:"/deleteCategory",Method:d}},Attendence:{All:{Endpoint:"/getAllAttendence",Method:d},AttendenceById:{Endpoint:"/getAttendenceById",Method:d},AddAttendence:{Endpoint:"/addAttendence",Method:d},EditAttendence:{Endpoint:"/updateAttendence",Method:d},DeleteAttendence:{Endpoint:"/deleteAttendence",Method:d}},Holiday:{All:{Endpoint:"/getAllHoliday",Method:d},HolidayById:{Endpoint:"/getHolidayById",Method:d},AddHoliday:{Endpoint:"/addHoliday",Method:d},EditHoliday:{Endpoint:"/updateHoliday",Method:d},DeleteHoliday:{Endpoint:"/deleteHoliday",Method:d}},Service:{All:{Endpoint:"/getAllService",Method:d},ServiceById:{Endpoint:"/getServiceById",Method:d},AddService:{Endpoint:"/addService",Method:d},EditService:{Endpoint:"/updateService",Method:d},DeleteService:{Endpoint:"/deleteService",Method:d}},SubCategory:{All:{Endpoint:"/getAllSubCategory",Method:d},SubCategoryById:{Endpoint:"/getSubCategoryById",Method:d},subCategoryByCategoryIdConfig:{Endpoint:"/getSubCategoryByCategoryId",Method:d},AddSubCategory:{Endpoint:"/addSubCategory",Method:d},EditSubCategory:{Endpoint:"/updateSubCategory",Method:d},DeleteSubCategory:{Endpoint:"/deleteCategory",Method:d}},Product:{All:{Endpoint:"/getAllProduct",Method:d},AllProductFrencise:{Endpoint:"/getFranchiseProduct",Method:d},ProductById:{Endpoint:"/getProductById",Method:d},AddProduct:{Endpoint:"/addProduct",Method:d},addProductVarients:{Endpoint:"/addProductVarients",Method:d},EditProduct:{Endpoint:"/updateProduct",Method:d},EditProductVariant:{Endpoint:"/updateProductVarients",Method:d},DeleteProduct:{Endpoint:"/deleteProduct",Method:d}},Frencise:{All:{Endpoint:"/getAllFrencise",Method:d},FrenciseAccept:{Endpoint:"/getAllFrencisePending",Method:d},FrenciseById:{Endpoint:"/getFrenciseById",Method:d},FrenciseCheck:{Endpoint:"/frenciseCheck",Method:d},AddFrencise:{Endpoint:"/addFrencise",Method:d},EditFrencise:{Endpoint:"/editFrencise",Method:d},DeleteFrencise:{Endpoint:"/deleteFrencise",Method:d}},Role:{All:{Endpoint:"/getAllRole",Method:d},RoleById:{Endpoint:"/getRoleById",Method:d},AddRole:{Endpoint:"/addRole",Method:d},EditRole:{Endpoint:"/updateRole",Method:d},DeleteRole:{Endpoint:"/deleteRole",Method:d}},Staff:{All:{Endpoint:"/getAllStaff",Method:d},StaffById:{Endpoint:"/getStaffById",Method:d},AddStaff:{Endpoint:"/addStaff",Method:d},EditStaff:{Endpoint:"/updateStaff",Method:d},DeleteStaff:{Endpoint:"/deleteStaff",Method:d}},Farmer:{All:{Endpoint:"/getAllServiceRequest",Method:d},FarmerById:{Endpoint:"/getServiceRequestById",Method:d},AddFarmer:{Endpoint:"/addServiceRequest",Method:d},EditFarmer:{Endpoint:"/updateFarmer",Method:d},DeleteFarmer:{Endpoint:"/deleteFarmer",Method:d}},District:{AllDistrict:{Endpoint:"/getAllDistrict",Method:d},DistrictById:{Endpoint:"/getDistrictById",Method:d},DistrictByStateId:{Endpoint:"/getCityByStateId",Method:d},AddDistrict:{Endpoint:"/addDistrict",Method:d},EditDistrict:{Endpoint:"/updateDistrict",Method:d},DeleteDistrict:{Endpoint:"/deleteDistrict",Method:d}},State:{AllState:{Endpoint:"/getAllState",Method:d},StateById:{Endpoint:"/getStateById",Method:d},AddState:{Endpoint:"/addState",Method:d},EditState:{Endpoint:"/updateState",Method:d},DeleteState:{Endpoint:"/deleteState",Method:d}},Block:{AllBlock:{Endpoint:"/getAllBlock",Method:d},BlockById:{Endpoint:"/getBlockById",Method:d},AddBlock:{Endpoint:"/addBlock",Method:d},EditBlock:{Endpoint:"/editBlock",Method:d},DeleteBlock:{Endpoint:"/deleteBlock",Method:d}},Cluster:{AllCluster:{Endpoint:"/getAllCluster",Method:d},ClusterById:{Endpoint:"/getClusterById",Method:d},AddCluster:{Endpoint:"/addCluster",Method:d},EditCluster:{Endpoint:"/editCluster",Method:d},DeleteCluster:{Endpoint:"/deleteCluster",Method:d}},FranchiseState:{AllFranchiseState:{Endpoint:"/getAllStateFranchise",Method:d},FranchiseStateById:{Endpoint:"/getStateFranchiseById",Method:d},AddFranchiseState:{Endpoint:"/addStateFranchise",Method:d},EditFranchiseState:{Endpoint:"/editStateFranchise",Method:d},DeleteFranchiseState:{Endpoint:"/deleteStateFranchise",Method:d},PendingStateFranchise:{Endpoint:"/getAllPendingStateFranchise",Method:d},frenciseStateAccept:{Endpoint:"/frenciseStateAccept",Method:d}},FranchiseDistrict:{AllFranchiseDistrict:{Endpoint:"/getAllDistrictFranchise",Method:d},FranchiseDistrictById:{Endpoint:"/getDistrictFranchiseById",Method:d},AddFranchiseDistrict:{Endpoint:"/addDistrictFranchise",Method:d},EditFranchiseDistrict:{Endpoint:"/editDistrictFranchise",Method:d},DeleteFranchiseDistrict:{Endpoint:"/deleteDistrictFranchise",Method:d},PendingDistrictFranchise:{Endpoint:"/getAllPendingDistrictFranchise",Method:d},frenciseDistrictAccept:{Endpoint:"/frenciseDistrictAccept",Method:d}},FranchiseBlock:{AllFranchiseBlock:{Endpoint:"/getAllBlockFranchise",Method:d},FranchiseBlockById:{Endpoint:"/getBlockFranchiseById",Method:d},AddFranchiseBlock:{Endpoint:"/addBlockFranchise",Method:d},EditFranchiseBlock:{Endpoint:"/editBlockFranchise",Method:d},DeleteFranchiseBlock:{Endpoint:"/deleteBlockFranchise",Method:d},PendingBlockFranchise:{Endpoint:"/getAllPendingBlockFranchise",Method:d}},FranchiseCluster:{AllFranchiseCluster:{Endpoint:"/getAllClusterFranchise",Method:d},FranchiseClusterById:{Endpoint:"/getClusterFranchiseById",Method:d},AddFranchiseCluster:{Endpoint:"/addClusterFranchise",Method:d},EditFranchiseCluster:{Endpoint:"/editClusterFranchise",Method:d},DeleteFranchiseCluster:{Endpoint:"/deleteClusterFranchise",Method:d},PendingClusterFranchise:{Endpoint:"/getAllPendingClusterFranchise",Method:d},frenciseClusterAccept:{Endpoint:"/frenciseClusterAccept",Method:d}},FranchiseVillage:{AllFranchiseVillage:{Endpoint:"/getAllVillageFranchise",Method:d},FranchiseVillageById:{Endpoint:"/getVillageFranchiseById",Method:d},AddFranchiseVillage:{Endpoint:"/addVillageFranchise",Method:d},EditFranchiseVillage:{Endpoint:"/editVillageFranchise",Method:d},DeleteFranchiseVillage:{Endpoint:"/deleteVillageFranchise",Method:d}},Commissiom:{All:{Endpoint:"/getAllCommission",Method:d},CommissiomById:{Endpoint:"/getCommissionById",Method:d},AddCommissiom:{Endpoint:"/addCommission",Method:d},EditCommissiom:{Endpoint:"/updateCommission",Method:d},DeleteCommissiom:{Endpoint:"/deleteCommission",Method:d}}};t.Z=i},77719:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var d=n(15861),i=n(29439),r=n(64687),o=n.n(r),a=n(72791),l=n(56650),s=n(21680),c=n(19773),h=n(24390),p=n(69963),u=n(9827),g=n(27161),E=n(60807),M=n(59911),A=n(45953),C=n(48928),y=n(91923),F=n(23735),f=(n(5462),n(4565)),m=n(65209),B=n(94162),S=n(75814),I=n(13811),Z=n(96580),x=n(41286),P=n(57689),D=n(61604),v=n(65218),k=n(59434),j=n(89074),b=n(93152),w=n(80184);function U(){var e=a.useState(10),t=(0,i.Z)(e,2),n=t[0],r=t[1],U=a.useState(0),R=(0,i.Z)(U,2),O=R[0],V=R[1],H=(0,a.useState)(""),_=(0,i.Z)(H,2),z=_[0],T=_[1],L=((0,P.UO)(),(0,k.I0)()),q=new j.Z,N=(0,k.v9)((function(e){return e.orderHistory.OrderHistory})),G=(0,a.useCallback)((0,d.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.getAllUserOrderPending({});case 3:if((t=e.sent)&&t.data.data){e.next=8;break}return e.abrupt("return",v.Am.error("no latest order history available"));case 8:return L((0,b.gS)(t.data.data)),e.abrupt("return");case 10:e.next=17;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),v.Am.error("Something went wrong"),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,12]])}))));return(0,a.useEffect)((function(){G()}),[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(M.Z,{id:"outlined-search",label:"Search field",type:"search",fullWidth:!0,onChange:function(e){T(e.target.value)}}),(0,w.jsx)(F.Z,{title:(0,w.jsx)(A.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:y.dv,children:(0,w.jsx)(A.ZP,{item:!0,children:(0,w.jsx)(f.Z,{variant:"h3",children:"Pending Order / COD"})})}),content:!1,children:N?(0,w.jsx)(C.Z,{children:(0,w.jsxs)(l.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,w.jsx)(p.Z,{sx:{maxHeight:540},children:(0,w.jsxs)(s.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,w.jsx)(u.Z,{children:(0,w.jsxs)(E.Z,{children:[(0,w.jsx)(h.Z,{sx:{pl:3},children:"S No."}),(0,w.jsx)(h.Z,{children:"Invoice ID"}),(0,w.jsx)(h.Z,{children:"Farmer Name"}),(0,w.jsx)(h.Z,{children:"Contact"}),(0,w.jsx)(h.Z,{children:"Price"}),(0,w.jsx)(h.Z,{children:"Order Date"}),(0,w.jsx)(h.Z,{children:"Payment Type"}),(0,w.jsx)(h.Z,{children:"Status"}),(0,w.jsx)(h.Z,{align:"center",sx:{pr:3},children:"Actions"})]})}),(0,w.jsx)(c.Z,{children:N.filter((function(e){return""===z?e:e.userId.Contact.toLowerCase().includes(z.toLowerCase())||e.userId.Name.toLowerCase().includes(z.toLowerCase())||e.invoiceId.toLowerCase().includes(z.toLowerCase())})).slice(O*n,O*n+n).map((function(e,t){return(0,w.jsxs)(E.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,w.jsx)(h.Z,{align:"start",children:t+1}),(0,w.jsx)(h.Z,{align:"start",children:e.invoiceId}),(0,w.jsx)(h.Z,{align:"start",children:e.userId.Name}),(0,w.jsx)(h.Z,{align:"start",children:e.userId.Contact}),(0,w.jsxs)(h.Z,{align:"start",children:["\u20b9 ",e.totalPrice," /-"]}),(0,w.jsx)(h.Z,{align:"start",children:(0,D.Z)(new Date(e.createdAt),"E, MMM d yyyy")}),(0,w.jsx)(h.Z,{align:"start",children:e.paymentType}),(0,w.jsx)(h.Z,{children:"Paid"===e.status?(0,w.jsx)(m.Z,{label:"Completed",color:"success",size:"small"}):(0,w.jsx)(m.Z,{label:"Pending",color:"error",size:"small"})}),(0,w.jsx)(h.Z,{align:"center",sx:{pr:3},children:(0,w.jsx)(B.Z,{direction:"row",justifyContent:"center",alignItems:"center",children:(0,w.jsx)(S.Z,{placement:"top",title:"edit",children:(0,w.jsx)(I.Z,{color:"primary","aria-label":"edit",size:"large",children:(0,w.jsx)(x.Z,{sx:{fontSize:"1.1rem"}})})})})})]},e.code)}))})]})}),(0,w.jsx)(g.Z,{rowsPerPageOptions:[10,20,100],component:"div",count:N.length,rowsPerPage:n,page:O,onPageChange:function(e,t){V(t)},onRowsPerPageChange:function(e){r(+e.target.value),V(0)}})]})}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("br",{}),(0,w.jsx)("center",{children:(0,w.jsx)(Z.Z,{})})]})})]})}},41286:function(e,t,n){var d=n(64836);t.Z=void 0;var i=d(n(45649)),r=n(80184),o=(0,i.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=o}}]);
//# sourceMappingURL=7719.d31bd976.chunk.js.map