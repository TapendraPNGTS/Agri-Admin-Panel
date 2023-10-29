"use strict";(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[2643],{91943:function(e,t,n){var r=n(15861),o=n(43144),i=n(15671),d=n(60136),a=n(27277),s=n(64687),c=n.n(s),l=n(9890),u=n(21156),h=n(76397),p=function(e){(0,d.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.call(this,"https://admin-api.myagriinput.com/api/v1/"))._initializeRequestInterceptor=function(){e.instance.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat((0,l.aO)()),e.headers.Authkey="U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks=",e}))},e._initializeResponseInterceptor=function(){e.instance.interceptors.response.use((function(e){return e}),(function(e){return Promise.resolve(e)}))},e.AllCategoryConfig=u.Z.Category.All,e.CategoryByIdConfig=u.Z.Category.CategoryById,e.AddCategoryConfig=u.Z.Category.AddCategory,e.EditCategoryConfig=u.Z.Category.EditCategory,e.DeleteCategoryConfig=u.Z.Category.DeleteCategory,e.getAllCategory=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AllCategoryConfig.Method,url:e.AllCategoryConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getCategoryById=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.CategoryByIdConfig.Method,url:e.CategoryByIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addCategory=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AddCategoryConfig.Method,url:e.AddCategoryConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editCategory=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.EditCategoryConfig.Method,url:e.EditCategoryConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteCategory=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.DeleteCategoryConfig.Method,url:e.DeleteCategoryConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e._initializeRequestInterceptor(),e._initializeResponseInterceptor(),e}return(0,o.Z)(n)}(h.Z);t.Z=p},76397:function(e,t,n){var r=n(15861),o=n(43144),i=n(15671),d=n(64687),a=n.n(d),s=n(74569),c=n.n(s),l=(0,o.Z)((function e(t){var n=this;(0,i.Z)(this,e),this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n._handleError)},this._handleResponse=function(e){return e},this._handleError=function(){var e=(0,r.Z)(a().mark((function e(t){var r,o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.response,o=t.config,i=o,401!==(null===r||void 0===r?void 0:r.status)||i._retry){e.next=5;break}return i._retry=!0,e.abrupt("return",n.instance(i));case 5:return e.abrupt("return",Promise.resolve(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.instance=c().create({baseURL:t}),this._initializeResponseInterceptor()}));t.Z=l},48999:function(e,t,n){var r=n(15861),o=n(43144),i=n(15671),d=n(60136),a=n(27277),s=n(64687),c=n.n(s),l=n(9890),u=n(21156),h=n(76397),p=function(e){(0,d.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.call(this,"https://admin-api.myagriinput.com/api/v1/"))._initializeRequestInterceptor=function(){e.instance.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat((0,l.aO)()),e.headers.Authkey="U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks=",e}))},e._initializeResponseInterceptor=function(){e.instance.interceptors.response.use((function(e){return e}),(function(e){return Promise.resolve(e)}))},e.AllSubCategoryConfig=u.Z.SubCategory.All,e.SubCategoryByIdConfig=u.Z.SubCategory.SubCategoryById,e.SubCategoryByCategoryIdConfig=u.Z.SubCategory.subCategoryByCategoryIdConfig,e.AddSubCategoryConfig=u.Z.SubCategory.AddSubCategory,e.EditSubCategoryConfig=u.Z.SubCategory.EditSubCategory,e.DeleteSubCategoryConfig=u.Z.SubCategory.DeleteSubCategory,e.getAllSubCategory=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AllSubCategoryConfig.Method,url:e.AllSubCategoryConfig.Endpoint,headers:{},data:null}));case 1:case"end":return t.stop()}}),t)}))),e.getSubCategoryById=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.SubCategoryByIdConfig.Method,url:e.SubCategoryByIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getSubCategoryByCategoryId=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.SubCategoryByCategoryIdConfig.Method,url:e.SubCategoryByCategoryIdConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addSubCategory=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.AddSubCategoryConfig.Method,url:e.AddSubCategoryConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editSubCategory=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.EditSubCategoryConfig.Method,url:e.EditSubCategoryConfig.Endpoint,headers:{"Content-Type":"multipart/form-data"},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteSubCategory=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.instance({method:e.DeleteSubCategoryConfig.Method,url:e.DeleteSubCategoryConfig.Endpoint,headers:{},data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e._initializeRequestInterceptor(),e._initializeResponseInterceptor(),e}return(0,o.Z)(n)}(h.Z);t.Z=p},21156:function(e,t,n){var r="POST",o={Dashboard:{Data:{Endpoint:"/dashboard",Method:r}},Auth:{Login:{Endpoint:"/login",Method:r}},User:{All:{Endpoint:"/getAllUser",Method:r},UserById:{Endpoint:"/getUserById",Method:r}},Transaction:{AllFrTransaction:{Endpoint:"/getAllFranchiseTransaction",Method:r},AllUserTransaction:{Endpoint:"/getAllUserTransaction",Method:r},FranchiseTransaction:{Endpoint:"/getFranchiseTransaction ",Method:r},UserTransaction:{Endpoint:"/getUserTransaction ",Method:r},CommissionHistory:{Endpoint:"/getAllInchargeCommission",Method:r}},CheckOut:{Data:{Endpoint:"/addAllCart",Method:r}},Order:{AllFranchiseComplete:{Endpoint:"/getAllFranchiseOnline",Method:r},AllFranchisePending:{Endpoint:"/getAllFranchiseCOD",Method:r},AllUserComplete:{Endpoint:"/getAllUserOnline",Method:r},AllUserPending:{Endpoint:"/getAllUserCOD",Method:r}},Cod:{Cod:{Endpoint:"/frenchiseProductCOD",Method:r},PhonePay:{Endpoint:"/payment",Method:r}},Banner:{All:{Endpoint:"/getAllBanner",Method:r},BannerById:{Endpoint:"/getBannerById",Method:r},AddBanner:{Endpoint:"/addBanner",Method:r},EditBanner:{Endpoint:"/updateBanner",Method:r},DeleteBanner:{Endpoint:"/deleteBanner",Method:r}},Category:{All:{Endpoint:"/getAllCategory",Method:r},CategoryById:{Endpoint:"/getCategoryById",Method:r},AddCategory:{Endpoint:"/addCategory",Method:r},EditCategory:{Endpoint:"/updateCategory",Method:r},DeleteCategory:{Endpoint:"/deleteCategory",Method:r}},Attendence:{All:{Endpoint:"/getAllAttendence",Method:r},AttendenceById:{Endpoint:"/getAttendenceById",Method:r},AddAttendence:{Endpoint:"/addAttendence",Method:r},EditAttendence:{Endpoint:"/updateAttendence",Method:r},DeleteAttendence:{Endpoint:"/deleteAttendence",Method:r}},Holiday:{All:{Endpoint:"/getAllHoliday",Method:r},HolidayById:{Endpoint:"/getHolidayById",Method:r},AddHoliday:{Endpoint:"/addHoliday",Method:r},EditHoliday:{Endpoint:"/updateHoliday",Method:r},DeleteHoliday:{Endpoint:"/deleteHoliday",Method:r}},Service:{All:{Endpoint:"/getAllService",Method:r},ServiceById:{Endpoint:"/getServiceById",Method:r},AddService:{Endpoint:"/addService",Method:r},EditService:{Endpoint:"/updateService",Method:r},DeleteService:{Endpoint:"/deleteService",Method:r}},SubCategory:{All:{Endpoint:"/getAllSubCategory",Method:r},SubCategoryById:{Endpoint:"/getSubCategoryById",Method:r},subCategoryByCategoryIdConfig:{Endpoint:"/getSubCategoryByCategoryId",Method:r},AddSubCategory:{Endpoint:"/addSubCategory",Method:r},EditSubCategory:{Endpoint:"/updateSubCategory",Method:r},DeleteSubCategory:{Endpoint:"/deleteCategory",Method:r}},Product:{All:{Endpoint:"/getAllProduct",Method:r},AllProductFrencise:{Endpoint:"/getFranchiseProduct",Method:r},ProductById:{Endpoint:"/getProductById",Method:r},AddProduct:{Endpoint:"/addProduct",Method:r},addProductVarients:{Endpoint:"/addProductVarients",Method:r},EditProduct:{Endpoint:"/updateProduct",Method:r},EditProductVariant:{Endpoint:"/updateProductVarients",Method:r},DeleteProduct:{Endpoint:"/deleteProduct",Method:r}},Frencise:{All:{Endpoint:"/getAllFrencise",Method:r},FrenciseAccept:{Endpoint:"/getAllFrencisePending",Method:r},FrenciseById:{Endpoint:"/getFrenciseById",Method:r},FrenciseCheck:{Endpoint:"/frenciseCheck",Method:r},AddFrencise:{Endpoint:"/addFrencise",Method:r},EditFrencise:{Endpoint:"/editFrencise",Method:r},DeleteFrencise:{Endpoint:"/deleteFrencise",Method:r}},Role:{All:{Endpoint:"/getAllRole",Method:r},RoleById:{Endpoint:"/getRoleById",Method:r},AddRole:{Endpoint:"/addRole",Method:r},EditRole:{Endpoint:"/updateRole",Method:r},DeleteRole:{Endpoint:"/deleteRole",Method:r}},Staff:{All:{Endpoint:"/getAllStaff",Method:r},StaffById:{Endpoint:"/getStaffById",Method:r},AddStaff:{Endpoint:"/addStaff",Method:r},EditStaff:{Endpoint:"/updateStaff",Method:r},DeleteStaff:{Endpoint:"/deleteStaff",Method:r}},Farmer:{All:{Endpoint:"/getAllServiceRequest",Method:r},FarmerById:{Endpoint:"/getServiceRequestById",Method:r},AddFarmer:{Endpoint:"/addServiceRequest",Method:r},EditFarmer:{Endpoint:"/updateFarmer",Method:r},DeleteFarmer:{Endpoint:"/deleteFarmer",Method:r}},District:{AllDistrict:{Endpoint:"/getAllDistrict",Method:r},DistrictById:{Endpoint:"/getDistrictById",Method:r},DistrictByStateId:{Endpoint:"/getCityByStateId",Method:r},AddDistrict:{Endpoint:"/addDistrict",Method:r},EditDistrict:{Endpoint:"/updateDistrict",Method:r},DeleteDistrict:{Endpoint:"/deleteDistrict",Method:r}},State:{AllState:{Endpoint:"/getAllState",Method:r},StateById:{Endpoint:"/getStateById",Method:r},AddState:{Endpoint:"/addState",Method:r},EditState:{Endpoint:"/updateState",Method:r},DeleteState:{Endpoint:"/deleteState",Method:r}},Block:{AllBlock:{Endpoint:"/getAllBlock",Method:r},BlockById:{Endpoint:"/getBlockById",Method:r},AddBlock:{Endpoint:"/addBlock",Method:r},EditBlock:{Endpoint:"/editBlock",Method:r},DeleteBlock:{Endpoint:"/deleteBlock",Method:r}},Cluster:{AllCluster:{Endpoint:"/getAllCluster",Method:r},ClusterById:{Endpoint:"/getClusterById",Method:r},AddCluster:{Endpoint:"/addCluster",Method:r},EditCluster:{Endpoint:"/editCluster",Method:r},DeleteCluster:{Endpoint:"/deleteCluster",Method:r}},FranchiseState:{AllFranchiseState:{Endpoint:"/getAllStateFranchise",Method:r},FranchiseStateById:{Endpoint:"/getStateFranchiseById",Method:r},AddFranchiseState:{Endpoint:"/addStateFranchise",Method:r},EditFranchiseState:{Endpoint:"/editStateFranchise",Method:r},DeleteFranchiseState:{Endpoint:"/deleteStateFranchise",Method:r},PendingStateFranchise:{Endpoint:"/getAllPendingStateFranchise",Method:r},frenciseStateAccept:{Endpoint:"/frenciseStateAccept",Method:r}},FranchiseDistrict:{AllFranchiseDistrict:{Endpoint:"/getAllDistrictFranchise",Method:r},FranchiseDistrictById:{Endpoint:"/getDistrictFranchiseById",Method:r},AddFranchiseDistrict:{Endpoint:"/addDistrictFranchise",Method:r},EditFranchiseDistrict:{Endpoint:"/editDistrictFranchise",Method:r},DeleteFranchiseDistrict:{Endpoint:"/deleteDistrictFranchise",Method:r},PendingDistrictFranchise:{Endpoint:"/getAllPendingDistrictFranchise",Method:r},frenciseDistrictAccept:{Endpoint:"/frenciseDistrictAccept",Method:r}},FranchiseBlock:{AllFranchiseBlock:{Endpoint:"/getAllBlockFranchise",Method:r},FranchiseBlockById:{Endpoint:"/getBlockFranchiseById",Method:r},AddFranchiseBlock:{Endpoint:"/addBlockFranchise",Method:r},EditFranchiseBlock:{Endpoint:"/editBlockFranchise",Method:r},DeleteFranchiseBlock:{Endpoint:"/deleteBlockFranchise",Method:r},PendingBlockFranchise:{Endpoint:"/getAllPendingBlockFranchise",Method:r}},FranchiseCluster:{AllFranchiseCluster:{Endpoint:"/getAllClusterFranchise",Method:r},FranchiseClusterById:{Endpoint:"/getClusterFranchiseById",Method:r},AddFranchiseCluster:{Endpoint:"/addClusterFranchise",Method:r},EditFranchiseCluster:{Endpoint:"/editClusterFranchise",Method:r},DeleteFranchiseCluster:{Endpoint:"/deleteClusterFranchise",Method:r},PendingClusterFranchise:{Endpoint:"/getAllPendingClusterFranchise",Method:r},frenciseClusterAccept:{Endpoint:"/frenciseClusterAccept",Method:r}},FranchiseVillage:{AllFranchiseVillage:{Endpoint:"/getAllVillageFranchise",Method:r},FranchiseVillageById:{Endpoint:"/getVillageFranchiseById",Method:r},AddFranchiseVillage:{Endpoint:"/addVillageFranchise",Method:r},EditFranchiseVillage:{Endpoint:"/editVillageFranchise",Method:r},DeleteFranchiseVillage:{Endpoint:"/deleteVillageFranchise",Method:r}},Commissiom:{All:{Endpoint:"/getAllCommission",Method:r},CommissiomById:{Endpoint:"/getCommissionById",Method:r},AddCommissiom:{Endpoint:"/addCommission",Method:r},EditCommissiom:{Endpoint:"/updateCommission",Method:r},DeleteCommissiom:{Endpoint:"/deleteCommission",Method:r}}};t.Z=o},62248:function(e,t,n){var r=n(45987),o=n(1413),i=n(60277),d=n(40508),a=n(80184),s=["children","horizontal"],c=(0,i.ZP)((function(e){return(0,a.jsx)(d.Z,(0,o.Z)({},e))}),{shouldForwardProp:function(e){return"horizontal"!==e}})((function(e){var t=e.theme,n=e.horizontal;return{color:t.palette.text.primary,fontWeight:500,marginBottom:n?0:8}})),l=function(e){var t=e.children,n=e.horizontal,i=(0,r.Z)(e,s);return(0,a.jsx)(c,(0,o.Z)((0,o.Z)({horizontal:n},i),{},{children:t}))};l.defaultProps={horizontal:!1},t.Z=l},12643:function(e,t,n){n.r(t);var r=n(15861),o=n(29439),i=n(64687),d=n.n(i),a=n(72791),s=n(23735),c=n(62248),l=n(91923),u=n(57689),h=n(65218),p=n(59434),g=n(48999),y=n(91943),C=n(89698),f=n(45953),E=n(94162),M=n(59911),m=n(23057),A=n(35702),S=n(96580),v=n(61091),B=n(80184);t.default=function(){var e=(0,u.UO)(),t=new g.Z,n=(0,u.s0)(),i=(0,a.useState)(),F=(0,o.Z)(i,2),b=F[0],I=F[1],Z=a.useState(""),x=(0,o.Z)(Z,2),D=x[0],k=x[1],w=a.useState(""),P=(0,o.Z)(w,2),j=P[0],R=P[1],z=a.useState(!0),V=(0,o.Z)(z,2),_=V[0],U=V[1],T=(0,a.useState)(!1),q=(0,o.Z)(T,2),H=q[0],O=q[1],N=(0,a.useState)(),X=(0,o.Z)(N,2),G=X[0],J=X[1],L=(0,a.useState)(""),W=(0,o.Z)(L,2),Y=W[0],K=W[1],Q=(0,p.I0)(),$=new y.Z,ee=(0,p.v9)((function(e){return e.category.Category})),te=(0,a.useCallback)((0,r.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.getAllCategory({});case 3:if((t=e.sent)&&t.data.data){e.next=8;break}return e.abrupt("return",h.Am.error("no available"));case 8:return Q((0,C.wX)(t.data.data)),e.abrupt("return");case 10:e.next=17;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),h.Am.error("Something went wrong"),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))),ne=(0,a.useCallback)((0,r.Z)(d().mark((function n(){var r,o;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.getSubCategoryById({subCategoryId:e.id});case 3:if(!(o=n.sent)||200!==(null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.code)){n.next=11;break}k(o.data.data.Name),K(o.data.data.CategoryID.CategoryID),U(o.data.data.IsActive),R(o.data.data.Image),n.next=12;break;case 11:return n.abrupt("return",h.Am.error("Something went wrong!"));case 12:n.next=19;break;case 14:throw n.prev=14,n.t0=n.catch(0),console.error(n.t0),h.Am.error("Something went wrong"),n.t0;case 19:case"end":return n.stop()}}),n,null,[[0,14]])}))));function re(){return(re=(0,r.Z)(d().mark((function r(o){var i,a,s;return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return O(!0),o.preventDefault(),(a=new FormData).append("subCategoryId",e.id),a.append("categoryId",Y),a.append("name",D),a.append("active",_),a.append("img",b),r.next=10,t.editSubCategory(a);case 10:if(!(s=r.sent)||200!==(null===s||void 0===s||null===(i=s.data)||void 0===i?void 0:i.code)){r.next=16;break}h.Am.success("Added successsfully"),n("/sub-category",{replace:!0}),r.next=17;break;case 16:return r.abrupt("return",h.Am.error("Something went wrong!"));case 17:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return a.useEffect((function(){ne(),te()}),[]),(0,B.jsx)(s.Z,{title:"Edit Sub Category",children:(0,B.jsxs)("form",{action:"#",onSubmit:function(e){return re.apply(this,arguments)},children:[(0,B.jsxs)(f.ZP,{container:!0,spacing:l.dv,children:[(0,B.jsx)(f.ZP,{item:!0,xs:6,md:6,children:(0,B.jsxs)(E.Z,{children:[(0,B.jsx)(c.Z,{required:!0,children:"Name"}),(0,B.jsx)(M.Z,{fullWidth:!0,id:"category",name:"category",value:D,onChange:function(e){return k(e.target.value)},placeholder:"Enter Name"})]})}),(0,B.jsx)(f.ZP,{item:!0,xs:6,md:6,children:(0,B.jsxs)(E.Z,{children:[(0,B.jsx)(c.Z,{required:!0,children:"Active"}),(0,B.jsxs)(m.Z,{id:"active",name:"active",value:_,onChange:function(e){return U(e.target.value)},children:[(0,B.jsx)(A.Z,{value:"true",children:"True"}),(0,B.jsx)(A.Z,{value:"false",children:"False"})]})]})})]}),(0,B.jsx)("br",{}),(0,B.jsxs)(f.ZP,{container:!0,spacing:l.dv,children:[(0,B.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,B.jsxs)(E.Z,{children:[(0,B.jsx)(c.Z,{children:"Choose Thumbnail Image"}),(0,B.jsxs)("div",{className:"custom-file",children:[(0,B.jsx)("input",{type:"file",className:"custom-file-input",id:"thumbnail",value:G,accept:"image/png, image/jpeg",onChange:function(e){I(e.target.files[0]),J(e.target.value)}}),(0,B.jsx)("label",{className:"custom-file-label",for:"thumbnail",children:G})]})]})}),(0,B.jsx)(f.ZP,{item:!0,xs:6,md:6,children:(0,B.jsxs)(E.Z,{children:[(0,B.jsx)(c.Z,{required:!0,children:"Choose Category"}),(0,B.jsx)(m.Z,{id:"active",name:"active",value:Y,onChange:function(e){return K(e.target.value)},defaultValue:"Select",displayEmpty:!0,renderValue:""!==Y?void 0:function(){return"--Select Category--"},children:ee.map((function(e,t){return(0,B.jsx)(A.Z,{value:e.CategoryID,children:e.Name},t)}))})]})}),(0,B.jsxs)(f.ZP,{item:!0,xs:4,md:4,children:[(0,B.jsx)(c.Z,{required:!0,children:"Cover Image"}),(0,B.jsx)(E.Z,{children:(0,B.jsx)("a",{href:"".concat(j),target:"_blank",children:(0,B.jsx)("img",{src:"".concat(j),width:200,height:200})})})]})]}),(0,B.jsx)("br",{}),(0,B.jsx)("center",{children:H?(0,B.jsx)(S.Z,{}):(0,B.jsx)(v.Z,{variant:"contained",type:"submit",children:"Update Category"})})]})})}}}]);
//# sourceMappingURL=2643.e2df89d9.chunk.js.map