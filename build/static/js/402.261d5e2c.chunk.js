"use strict";(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[402],{62248:function(e,t,s){var a=s(45987),n=s(1413),r=s(60277),l=s(40508),i=s(80184),c=["children","horizontal"],o=(0,r.ZP)((function(e){return(0,i.jsx)(l.Z,(0,n.Z)({},e))}),{shouldForwardProp:function(e){return"horizontal"!==e}})((function(e){var t=e.theme,s=e.horizontal;return{color:t.palette.text.primary,fontWeight:500,marginBottom:s?0:8}})),d=function(e){var t=e.children,s=e.horizontal,r=(0,a.Z)(e,c);return(0,i.jsx)(o,(0,n.Z)((0,n.Z)({horizontal:s},r),{},{children:t}))};d.defaultProps={horizontal:!1},t.Z=d},47402:function(e,t,s){s.r(t);var a=s(29439),n=s(72791),r=s(23735),l=s(19773),i=s(24390),c=s(60807),o=s(62248),d=s(45953),h=s(94162),u=s(57689),x=s(80184);t.default=function(){var e=(0,u.UO)(),t=(0,n.useState)(""),s=(0,a.Z)(t,2),j=s[0],p=s[1],Z=(0,n.useState)([]),g=(0,a.Z)(Z,2),f=g[0],m=g[1],S=(0,n.useState)(!1),k=(0,a.Z)(S,2),w=(k[0],k[1],(0,n.useState)(!1)),b=(0,a.Z)(w,2),v=(b[0],b[1],(0,n.useState)(!1)),y=(0,a.Z)(v,2),z=(y[0],y[1],(0,n.useState)(!1)),I=(0,a.Z)(z,2),P=(I[0],I[1],(0,n.useState)(!1)),C=(0,a.Z)(P,2),N=(C[0],C[1],(0,n.useState)(!1)),R=(0,a.Z)(N,2),U=(R[0],R[1],(0,n.useState)(!1)),_=(0,a.Z)(U,2),B=(_[0],_[1],(0,n.useState)(!1)),H=(0,a.Z)(B,2),O=(H[0],H[1],(0,n.useState)(!1)),V=(0,a.Z)(O,2),D=(V[0],V[1],(0,n.useState)(!1)),E=(0,a.Z)(D,2),F=(E[0],E[1],(0,n.useState)(!1)),J=(0,a.Z)(F,2),T=(J[0],J[1],(0,n.useState)(!1)),q=(0,a.Z)(T,2),A=(q[0],q[1],(0,n.useState)(!1)),G=(0,a.Z)(A,2),M=(G[0],G[1],(0,n.useState)(!1)),W=(0,a.Z)(M,2),X=(W[0],W[1],(0,n.useState)(!1)),Y=(0,a.Z)(X,2),K=(Y[0],Y[1],(0,n.useState)(!1)),L=(0,a.Z)(K,2);L[0],L[1],n.useEffect((function(){}),[]);var Q=new Headers;return Q.append("authkey","U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks="),Q.append("Authorization","Bearer "+localStorage.getItem("token")),Q.append("Content-Type","application/json"),(0,n.useEffect)((function(){!function(){var t=JSON.stringify({adminId:localStorage.getItem("userId"),roleId:e.id}),s={method:"POST",headers:Q,body:t,redirect:"follow"};fetch("".concat("https://agri-admin-api.ankitchawda.in/api/v1/","getRoleById"),s).then((function(e){return e.json()})).then((function(e){p(e.data.Name),m(e.data.IsPermission)})).catch((function(e){}))}()}),[]),(0,x.jsxs)(r.Z,{title:"View Roles",children:[(0,x.jsx)(d.ZP,{item:!0,xs:6,md:6,children:(0,x.jsx)(h.Z,{children:(0,x.jsx)(o.Z,{children:j})})}),(0,x.jsx)("hr",{}),(0,x.jsx)(l.Z,{children:f.map((function(e,t){return(0,x.jsxs)(c.Z,{hover:!0,role:"checkbox",children:[(0,x.jsx)(i.Z,{align:"start",children:e.Module},t),(0,x.jsx)(i.Z,{align:"start",children:(0,x.jsx)("div",{className:"switcher",children:(0,x.jsxs)("label",{for:"toggle-1",children:[(0,x.jsx)("small",{children:"Create\xa0\xa0"}),(0,x.jsx)("input",{type:"checkbox",id:"toggle-1",checked:e.Create}),(0,x.jsx)("span",{children:(0,x.jsx)("small",{})})]})})}),(0,x.jsx)(i.Z,{align:"start",children:(0,x.jsx)("div",{className:"switcher",children:(0,x.jsxs)("label",{for:"toggle-7",children:[(0,x.jsx)("small",{children:"Read\xa0\xa0"}),(0,x.jsx)("input",{type:"checkbox",id:"toggle-7",checked:e.Read}),(0,x.jsx)("span",{children:(0,x.jsx)("small",{})})]})})}),(0,x.jsx)(i.Z,{align:"start",children:(0,x.jsx)("div",{className:"switcher",children:(0,x.jsxs)("label",{for:"toggle-8",children:[(0,x.jsx)("small",{children:"Update\xa0\xa0"}),(0,x.jsx)("input",{type:"checkbox",id:"toggle-8",checked:e.Update}),(0,x.jsx)("span",{children:(0,x.jsx)("small",{})})]})})}),(0,x.jsx)(i.Z,{align:"start",children:(0,x.jsx)("div",{className:"switcher",children:(0,x.jsxs)("label",{for:"toggle-9",children:[(0,x.jsx)("span",{children:(0,x.jsx)("small",{})}),(0,x.jsx)("small",{children:"Delete\xa0\xa0"}),(0,x.jsx)("input",{type:"checkbox",id:"toggle-9",checked:e.Delete}),(0,x.jsx)("span",{children:(0,x.jsx)("small",{})})]})})})]})}))}),(0,x.jsx)("br",{})]})}}}]);
//# sourceMappingURL=402.261d5e2c.chunk.js.map