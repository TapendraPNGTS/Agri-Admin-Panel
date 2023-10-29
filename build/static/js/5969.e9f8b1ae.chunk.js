"use strict";(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[5969],{5969:function(e,t,n){n.r(t);var r=n(15861),a=n(29439),i=n(64687),s=n.n(i),l=n(72791),u=n(23735),c=n(62248),d=n(91923),o=n(57689),h=n(45953),m=n(94162),p=n(59911),x=n(23057),Z=n(35702),g=n(96580),j=n(61091),v=n(28249),f=n.n(v),C=(n(86009),n(2410)),S=n(65218),b=n(59434),y=n(91943),P=n(89698),q=n(48999),I=n(42893),k=n(80184);t.default=function(){var e=(0,o.s0)(),t=(0,b.I0)(),n=((0,l.useRef)(),new C.Z),i=(0,l.useState)([]),v=(0,a.Z)(i,2),w=v[0],M=v[1],F=(0,l.useState)([]),N=(0,a.Z)(F,2),A=N[0],B=N[1],D=(0,l.useState)([]),E=(0,a.Z)(D,2),W=E[0],R=E[1],T=(0,l.useState)(),_=(0,a.Z)(T,2),z=_[0],L=_[1],V=l.useState(""),O=(0,a.Z)(V,2),Q=O[0],X=O[1],G=l.useState(),H=(0,a.Z)(G,2),J=H[0],K=H[1],U=l.useState(""),Y=(0,a.Z)(U,2),$=Y[0],ee=Y[1],te=l.useState(!0),ne=(0,a.Z)(te,2),re=ne[0],ae=ne[1],ie=(0,l.useState)(""),se=(0,a.Z)(ie,2),le=se[0],ue=se[1],ce=(0,l.useState)(""),de=(0,a.Z)(ce,2),oe=de[0],he=de[1],me=(0,l.useState)(),pe=(0,a.Z)(me,2),xe=pe[0],Ze=pe[1],ge=(0,l.useState)(!1),je=(0,a.Z)(ge,2),ve=je[0],fe=je[1],Ce=l.useState(!1),Se=(0,a.Z)(Ce,2),be=Se[0],ye=Se[1],Pe=l.useState(!1),qe=(0,a.Z)(Pe,2),Ie=qe[0],ke=qe[1],we=l.useState(!1),Me=(0,a.Z)(we,2),Fe=Me[0],Ne=Me[1],Ae=(0,l.useState)(),Be=(0,a.Z)(Ae,2),De=Be[0],Ee=Be[1],We=l.useState(""),Re=(0,a.Z)(We,2),Te=Re[0],_e=Re[1],ze=l.useState(),Le=(0,a.Z)(ze,2),Ve=Le[0],Oe=Le[1],Qe=l.useState(""),Xe=(0,a.Z)(Qe,2),Ge=Xe[0],He=Xe[1],Je=l.useState(""),Ke=(0,a.Z)(Je,2),Ue=Ke[0],Ye=Ke[1],$e=l.useState(""),et=(0,a.Z)($e,2),tt=et[0],nt=et[1],rt=l.useState(""),at=(0,a.Z)(rt,2),it=at[0],st=at[1],lt=l.useState(""),ut=(0,a.Z)(lt,2),ct=ut[0],dt=ut[1],ot=l.useState(""),ht=(0,a.Z)(ot,2),mt=ht[0],pt=ht[1];function xt(){return(xt=(0,r.Z)(s().mark((function t(r){var a,i,l,u,c,d;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(fe(!0),r.preventDefault(),(i=new FormData).append("name",Q),i.append("description",oe),i.append("feature",De),i.append("price",J),i.append("categoryId",le),i.append("subCategoryId",Te),i.append("quantity",$),i.append("active",re),i.append("stateCommission",tt),i.append("districtCommission",it),i.append("blockCommission",ct),i.append("clusterCommission",mt),i.append("variant",[]),i.append("img",w),l=0,u=Object.keys(W);l<u.length;l++)c=u[l],i.append("images",W[c]);return i.append("frenchisePrice",xe),i.append("discountPrice",Ve),i.append("isNew",Ie),i.append("isBestSeller",be),i.append("isBestDeal",Fe),t.next=25,n.addProduct(i);case 25:if(!(d=t.sent)||200!==(null===d||void 0===d||null===(a=d.data)||void 0===a?void 0:a.code)){t.next=31;break}S.Am.success("Added successsfully"),e("/product",{replace:!0}),t.next=32;break;case 31:return t.abrupt("return",S.Am.error("Something went wrong!"));case 32:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Zt=new y.Z,gt=(0,b.v9)((function(e){return e.category.Category})),jt=(0,l.useCallback)((0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Zt.getAllCategory();case 3:if((n=e.sent)&&n.data.data){e.next=8;break}return e.abrupt("return",S.Am.error("no available"));case 8:return t((0,P.wX)(n.data.data)),e.abrupt("return");case 10:e.next=17;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),S.Am.error("Something went wrong"),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,12]])}))));(0,l.useEffect)((function(){jt()}),[]);var vt=new q.Z,ft=(0,b.v9)((function(e){return e.subCategory.SubCategory}));function Ct(){return(Ct=(0,r.Z)(s().mark((function e(n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,vt.getSubCategoryByCategoryId({categoryId:le});case 3:if(!(a=e.sent)||200!==(null===a||void 0===a||null===(r=a.data)||void 0===r?void 0:r.code)){e.next=8;break}return e.abrupt("return",t((0,I.Se)(a.data.data)));case 8:return e.abrupt("return");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,k.jsx)(u.Z,{title:"Add Product",children:(0,k.jsxs)("form",{children:[(0,k.jsxs)(h.ZP,{container:!0,spacing:d.dv,children:[(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Product Name"}),(0,k.jsx)(p.Z,{fullWidth:!0,id:"product",inputProps:{maxLength:30},name:"product",value:Q,onChange:function(e){return X(e.target.value)},placeholder:"Enter product name"})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Market Retail Price (MRP)"}),(0,k.jsx)(p.Z,{fullWidth:!0,id:"price",name:"price",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)},type:"number",value:J,onChange:function(e){return K(parseFloat(e.target.value))},placeholder:"Enter product price"})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Selling Price"}),(0,k.jsx)(p.Z,{fullWidth:!0,id:"sale",name:"sale",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)},type:"number",value:Ve,onChange:function(e){return Oe(parseFloat(e.target.value))},onBlur:function(){He(Ve<J?"":(0,k.jsx)("span",{style:{color:"red"},children:"Selling price doesn't greater than (Market Retail Price)MRP"}))},placeholder:"Enter Market price"}),Ge]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Franchise Price"}),(0,k.jsx)(p.Z,{fullWidth:!0,id:"price",name:"price",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)},type:"number",value:xe,onChange:function(e){return Ze(parseFloat(e.target.value))},onBlur:function(){Ye(xe<J?"":(0,k.jsx)("span",{style:{color:"red"},children:"Franchise price doesn't greater than (Market Retail Price)MRP"}))},placeholder:"Enter Franchise price"}),Ue]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Quantity"}),(0,k.jsx)(p.Z,{fullWidth:!0,id:"quantity",name:"quantity",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,3)},value:$,onChange:function(e){return ee(e.target.value)},placeholder:"Enter quantity"})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"State Comission"}),(0,k.jsx)(p.Z,{fullWidth:!0,id:"state-commission",name:"state-commission",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)},value:tt,onChange:function(e){return nt(e.target.value)},placeholder:"Enter State Comission"})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"District Comission"}),(0,k.jsx)(p.Z,{fullWidth:!0,id:"district-commission",name:"district-commission",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)},value:it,onChange:function(e){return st(e.target.value)},placeholder:"Enter District Comission"})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Block Comission"}),(0,k.jsx)(p.Z,{fullWidth:!0,id:"block-commission",name:"block-commission",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)},value:ct,onChange:function(e){return dt(e.target.value)},placeholder:"Enter BLock Comission"})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Cluster Comission"}),(0,k.jsx)(p.Z,{fullWidth:!0,id:"cluster-commission",name:"cluster-commission",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)},value:mt,onChange:function(e){return pt(e.target.value)},placeholder:"Enter cluster Comission"})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Active"}),(0,k.jsxs)(x.Z,{id:"active",name:"active",value:re,onChange:function(e){return ae(e.target.value)},children:[(0,k.jsx)(Z.Z,{value:"true",children:"True"}),(0,k.jsx)(Z.Z,{value:"false",children:"False"})]})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Choose Category"}),(0,k.jsx)(x.Z,{id:"active",name:"active",value:le,onChange:function(e){return ue(e.target.value)},onBlur:function(e){return Ct.apply(this,arguments)},children:gt.map((function(e,t){return(0,k.jsx)(Z.Z,{value:e.CategoryID,children:e.Name},t)}))})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:ft.length>0?(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Sub Category"}),(0,k.jsx)(x.Z,{id:"mainVarient",name:"mainVarient",value:Te,placeholder:"Select Sub Category",onChange:function(e){return _e(e.target.value)},children:ft.map((function(e,t){return(0,k.jsx)(Z.Z,{value:e.SubCategoryID,children:e.Name},t)}))})]}):(0,k.jsx)(k.Fragment,{children:" "})}),(0,k.jsx)(h.ZP,{item:!0,xs:12,md:12,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Description"}),(0,k.jsx)(f(),{className:"quill-editor",size:"md",theme:"snow",value:oe,onChange:function(e,t,n,r){he(e)}})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:12,md:12,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Features"}),(0,k.jsx)(f(),{className:"quill-editor",size:"md",theme:"snow",value:De,onChange:function(e,t,n,r){Ee(e)}})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:4,md:4,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Best Seller"}),(0,k.jsxs)(x.Z,{id:"best-seller",name:"best-seller",value:be,onChange:function(e){return ye(e.target.value)},children:[(0,k.jsx)(Z.Z,{value:"true",children:"True"}),(0,k.jsx)(Z.Z,{value:"false",children:"False"})]})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:4,md:4,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"New Arrival"}),(0,k.jsxs)(x.Z,{id:"new-arrival",name:"new-arrival",value:Ie,onChange:function(e){return ke(e.target.value)},children:[(0,k.jsx)(Z.Z,{value:"true",children:"True"}),(0,k.jsx)(Z.Z,{value:"false",children:"False"})]})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:4,md:4,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{required:!0,children:"Best Deal"}),(0,k.jsxs)(x.Z,{id:"best-deal",name:"best-deal",value:Fe,onChange:function(e){return Ne(e.target.value)},children:[(0,k.jsx)(Z.Z,{value:"true",children:"True"}),(0,k.jsx)(Z.Z,{value:"false",children:"False"})]})]})})]}),(0,k.jsx)("br",{}),(0,k.jsxs)(h.ZP,{container:!0,spacing:d.dv,children:[(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{children:"Choose Thumbnail Image"}),(0,k.jsxs)("div",{className:"custom-file",children:[(0,k.jsx)("input",{type:"file",className:"custom-file-input",id:"thumbnail",accept:"image/png, image/jpeg",onChange:function(e){M(e.target.files[0]),B(e.target.value)},value:A,required:!0}),(0,k.jsx)("label",{className:"custom-file-label",for:"thumbnail",children:A})]})]})}),(0,k.jsx)(h.ZP,{item:!0,xs:6,md:6,children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(c.Z,{children:"Choose Multiple Image"}),(0,k.jsxs)("div",{className:"custom-file",children:[(0,k.jsx)("input",{type:"file",className:"custom-file-input",id:"thumbnail",multiple:!0,accept:"image/png, image/jpeg",onChange:function(e){R(e.target.files),L(e.target.value)},value:z,required:!0}),(0,k.jsx)("label",{className:"custom-file-label",for:"thumbnail",children:z})]})]})})]}),(0,k.jsx)("br",{}),(0,k.jsx)("center",{children:ve?(0,k.jsx)(g.Z,{}):(0,k.jsx)(j.Z,{variant:"contained",onClick:function(e){return xt.apply(this,arguments)},children:"Add Product"})})]})})}}}]);
//# sourceMappingURL=5969.e9f8b1ae.chunk.js.map