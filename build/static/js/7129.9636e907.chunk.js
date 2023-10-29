/*! For license information please see 7129.9636e907.chunk.js.LICENSE.txt */
(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[7129],{62248:function(e,t,n){"use strict";var r=n(45987),i=n(1413),a=n(60277),s=n(40508),o=n(80184),c=["children","horizontal"],u=(0,a.ZP)((function(e){return(0,o.jsx)(s.Z,(0,i.Z)({},e))}),{shouldForwardProp:function(e){return"horizontal"!==e}})((function(e){var t=e.theme,n=e.horizontal;return{color:t.palette.text.primary,fontWeight:500,marginBottom:n?0:8}})),d=function(e){var t=e.children,n=e.horizontal,a=(0,r.Z)(e,c);return(0,o.jsx)(u,(0,i.Z)((0,i.Z)({horizontal:n},a),{},{children:t}))};d.defaultProps={horizontal:!1},t.Z=d},37129:function(e,t,n){"use strict";n.r(t);var r=n(29439),i=n(72791),a=n(23735),s=n(62248),o=n(91923),c=n(57689),u=n(75985),d=n(67280),l=n(45953),h=n(94162),f=n(59911),m=n(23057),p=n(35702),x=n(61091),v=n(80184);t.default=function(){var e=(0,c.UO)(),t=(0,c.s0)(),n=i.useState(!0),Z=(0,r.Z)(n,2),g=Z[0],j=Z[1],y=(0,i.useState)(!1),S=(0,r.Z)(y,2),P=S[0],b=S[1],C=(0,i.useState)(""),w=(0,r.Z)(C,2),I=w[0],k=w[1],O=(0,i.useState)(""),z=(0,r.Z)(O,2),A=z[0],N=z[1],q=(0,i.useState)(""),B=(0,r.Z)(q,2),U=B[0],E=B[1],T=(0,i.useState)(""),W=(0,r.Z)(T,2),L=W[0],_=W[1],H=(0,i.useState)(""),J=(0,r.Z)(H,2),R=J[0],F=J[1],V=new Headers;return V.append("authkey","U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks="),V.append("Authorization","Bearer "+localStorage.getItem("token")),V.append("Content-Type","application/json"),i.useEffect((function(){!function(){var t=JSON.stringify({adminId:localStorage.getItem("userId"),userId:e.id}),n={method:"POST",headers:V,body:t,redirect:"follow"};fetch("".concat("https://admin-api.myagriinput.com/api/v1/","getUserById"),n).then((function(e){return e.json()})).then((function(e){j(e.data.IsActive),k(e.data.Name),N(e.data.Email),E(e.data.Contact),_(e.data.City),F(e.data.State)})).catch((function(e){return console.log("error",e)}))}()}),[]),(0,v.jsx)(a.Z,{title:"Edit User",children:(0,v.jsxs)("form",{action:"#",onSubmit:function(n){n.preventDefault(),b(!0);var r=JSON.stringify({adminId:localStorage.getItem("userId"),userId:e.id,Isactive:g}),i={method:"POST",headers:V,body:r,redirect:"follow"};fetch("".concat("https://admin-api.myagriinput.com/api/v1/","userActive"),i).then((function(e){return e.json()})).then((function(e){200===e.code?(t("/users"),u.Am.success("Updated Successfully",{position:u.Am.POSITION.TOP_CENTER,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})):b(!1)})).catch((function(e){}))},children:[(0,v.jsxs)(l.ZP,{container:!0,spacing:o.dv,children:[(0,v.jsx)(l.ZP,{item:!0,xs:6,md:6,children:(0,v.jsxs)(h.Z,{children:[(0,v.jsx)(s.Z,{required:!0,children:"Name"}),(0,v.jsx)(f.Z,{fullWidth:!0,id:"name",name:"name",inputProps:{maxLength:250},rows:3,disabled:!0,value:I,onChange:function(e){return k(e.target.value)}})]})}),(0,v.jsx)(l.ZP,{item:!0,xs:6,md:6,children:(0,v.jsxs)(h.Z,{children:[(0,v.jsx)(s.Z,{required:!0,children:"Email"}),(0,v.jsx)(f.Z,{fullWidth:!0,id:"email",name:"email",inputProps:{maxLength:250},rows:3,disabled:!0,value:A,onChange:function(e){return N(e.target.value)}})]})}),(0,v.jsx)(l.ZP,{item:!0,xs:6,md:6,children:(0,v.jsxs)(h.Z,{children:[(0,v.jsx)(s.Z,{required:!0,children:"Contact"}),(0,v.jsx)(f.Z,{fullWidth:!0,id:"contact",name:"contact",inputProps:{maxLength:250},rows:3,disabled:!0,value:U,onChange:function(e){return E(e.target.value)}})]})}),(0,v.jsx)(l.ZP,{item:!0,xs:6,md:6,children:(0,v.jsxs)(h.Z,{children:[(0,v.jsx)(s.Z,{required:!0,children:"City"}),(0,v.jsx)(f.Z,{fullWidth:!0,id:"city",name:"city",inputProps:{maxLength:250},rows:3,disabled:!0,value:L,onChange:function(e){return _(e.target.value)}})]})}),(0,v.jsx)(l.ZP,{item:!0,xs:6,md:6,children:(0,v.jsxs)(h.Z,{children:[(0,v.jsx)(s.Z,{required:!0,children:"State"}),(0,v.jsx)(f.Z,{fullWidth:!0,id:"state",name:"state",inputProps:{maxLength:250},rows:3,disabled:!0,value:R,onChange:function(e){return F(e.target.value)}})]})}),(0,v.jsx)(l.ZP,{item:!0,xs:6,md:6,children:(0,v.jsxs)(h.Z,{children:[(0,v.jsx)(s.Z,{required:!0,children:"Active"}),(0,v.jsxs)(m.Z,{id:"active",name:"active",value:g,onChange:function(e){return j(e.target.value)},children:[(0,v.jsx)(p.Z,{value:"Active",children:"Active"}),(0,v.jsx)(p.Z,{value:"Block",children:"Block"})]})]})})]}),(0,v.jsx)("br",{}),(0,v.jsx)("center",{children:P?(0,v.jsx)(d.Z,{animation:"grow"}):(0,v.jsx)(x.Z,{variant:"contained",type:"submit",children:"Update User"})})]})})}},81694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},67280:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(1413),i=n(45987),a=n(81694),s=n.n(a),o=n(72791),c=n(80184),u=["xxl","xl","lg","md","sm","xs"],d=o.createContext({prefixes:{},breakpoints:u,minBreakpoint:"xs"});d.Consumer,d.Provider;function l(e,t){var n=(0,o.useContext)(d).prefixes;return e||n[t]||t}var h=["bsPrefix","variant","animation","size","as","className"],f=o.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,o=e.animation,u=void 0===o?"border":o,d=e.size,f=e.as,m=void 0===f?"div":f,p=e.className,x=(0,i.Z)(e,h);n=l(n,"spinner");var v="".concat(n,"-").concat(u);return(0,c.jsx)(m,(0,r.Z)((0,r.Z)({ref:t},x),{},{className:s()(p,v,d&&"".concat(v,"-").concat(d),a&&"text-".concat(a))}))}));f.displayName="Spinner";var m=f}}]);
//# sourceMappingURL=7129.9636e907.chunk.js.map