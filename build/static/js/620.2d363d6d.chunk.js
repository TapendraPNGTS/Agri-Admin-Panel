"use strict";(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[620],{34620:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var i=t(29439),s=t(72791),a=t(45953),r=t(4565),c=t(48928),l=t(65209),d=t(13811),o=t(56650),h=t(23735),x=t(91923),j=t(21680),u=t(19773),Z=t(24390),g=t(69963),p=t(9827),f=t(27669),m=t(60807),w=t(59911),S=t(3746),v=t(11087),C=t(80184);function y(){var e=s.useState(0),n=(0,i.Z)(e,2),t=n[0],y=n[1],P=s.useState([]),b=(0,i.Z)(P,2),k=b[0],z=b[1],A=(0,s.useState)(10),I=(0,i.Z)(A,2),H=I[0],N=I[1],E=(0,s.useState)(""),F=(0,i.Z)(E,2),R=F[0],U=F[1];return(0,s.useEffect)((function(){!function(){var e=new Headers;e.append("authkey","U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks="),e.append("Authorization","Bearer "+localStorage.getItem("token")),e.append("Content-Type","application/json");var n={method:"POST",headers:e,body:JSON.stringify({adminId:localStorage.getItem("userId")}),redirect:"follow"};fetch("".concat("https://agri-admin-api.ankitchawda.in/api/v1/","getAllFrencise"),n).then((function(e){return e.json()})).then((function(e){200===e.code&&z(e.data)})).catch((function(e){}))}()}),[]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w.Z,{id:"outlined-search",label:"Search field",type:"search",onChange:function(e){U(e.target.value)}}),(0,C.jsx)(h.Z,{title:(0,C.jsx)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:x.dv,children:(0,C.jsx)(a.ZP,{item:!0,children:(0,C.jsx)(r.Z,{variant:"h3",children:"Users"})})}),content:!1,children:k?(0,C.jsx)(c.Z,{children:(0,C.jsxs)(o.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,C.jsx)(g.Z,{sx:{maxHeight:540},children:(0,C.jsxs)(j.Z,{stickyHeader:!0,"aria-label":"sticky table",id:"my-table",children:[(0,C.jsx)(p.Z,{children:(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(Z.Z,{sx:{pl:3},children:"S No."}),(0,C.jsx)(Z.Z,{children:"Name"}),(0,C.jsx)(Z.Z,{children:"Email"}),(0,C.jsx)(Z.Z,{children:"Phone"}),(0,C.jsx)(Z.Z,{children:"Address"}),(0,C.jsx)(Z.Z,{children:"City"}),(0,C.jsx)(Z.Z,{children:"State"}),(0,C.jsx)(Z.Z,{children:"Pin Code"}),(0,C.jsx)(Z.Z,{children:"Status"}),(0,C.jsx)(Z.Z,{align:"center",sx:{pr:3},children:"Action"})]})}),(0,C.jsx)(u.Z,{children:k.filter((function(e){return""===R?e:e.Phone.toLowerCase().includes(R.toLowerCase())})).slice(t*H,t*H+H).map((function(e,n){return(0,C.jsxs)(m.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,C.jsx)(Z.Z,{align:"start",children:n+1}),(0,C.jsx)(Z.Z,{align:"start",children:e.Name?e.Name:"-"}),(0,C.jsx)(Z.Z,{align:"start",children:e.Email?e.Email:"-"}),(0,C.jsx)(Z.Z,{align:"start",children:e.Contact?e.Contact:"-"}),(0,C.jsx)(Z.Z,{align:"start",children:e.Address?e.Address:"-"}),(0,C.jsx)(Z.Z,{align:"start",children:e.City?e.City:"-"}),(0,C.jsx)(Z.Z,{align:"start",children:e.State?e.State:"-"}),(0,C.jsx)(Z.Z,{align:"start",children:e.State?e.State:"-"}),(0,C.jsx)(Z.Z,{align:"start",children:"Pending"===e.Status?(0,C.jsx)(l.Z,{label:"Pending",color:"warning",size:"small"}):"Reject"===e.Status?(0,C.jsx)(l.Z,{label:"Reject",color:"error",size:"small"}):(0,C.jsx)(l.Z,{label:"Accept",color:"success",size:"small"})}),(0,C.jsx)(Z.Z,{align:"center",sx:{pr:3},children:(0,C.jsx)(v.rU,{to:"/view-franchise-request/".concat(e.FrenchiseID),children:(0,C.jsx)(d.Z,{color:"primary",title:"view User","aria-label":"view",size:"large",children:(0,C.jsx)(S.Z,{sx:{fontSize:"1.1rem"}})})})})]},n)}))})]})}),(0,C.jsx)(f.Z,{rowsPerPageOptions:[10,20,100],component:"div",count:k.length,rowsPerPage:H,page:t,onPageChange:function(e,n){y(n)},onRowsPerPageChange:function(e){N(+e.target.value),y(0)}})]})}):(0,C.jsx)("h6",{children:"Loading..."})})]})}},3746:function(e,n,t){var i=t(64836);n.Z=void 0;var s=i(t(45649)),a=t(80184),r=(0,s.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");n.Z=r}}]);
//# sourceMappingURL=620.2d363d6d.chunk.js.map