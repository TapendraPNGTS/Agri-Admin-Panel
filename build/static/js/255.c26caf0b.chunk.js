/*! For license information please see 255.c26caf0b.chunk.js.LICENSE.txt */
(self.webpackChunkmy_agri_input=self.webpackChunkmy_agri_input||[]).push([[255],{35878:function(e,n,t){"use strict";var r=t(72791);n.Z=function(){var e=(0,r.useRef)(!0);return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},45290:function(e,n,t){"use strict";var r=t(1413),i=t(45987),s=t(96015),a=t(23735),o=t(80184),c=["children"];n.Z=function(e){var n=e.children,t=(0,i.Z)(e,c);return(0,o.jsx)(a.Z,(0,r.Z)((0,r.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},t),{},{children:(0,o.jsx)(s.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:n})}))}},33914:function(e,n,t){"use strict";var r=(0,t(60277).ZP)("div")((function(e){return{backgroundColor:e.theme.palette.primary.light,minHeight:"100vh"}}));n.Z=r},38255:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var r=t(11087),i=t(74142),s=t(52797),a=t(45953),o=t(4565),c=t(81872),l=t(33914),u=t(45290),d=t(79625),m=t(1413),x=t(15861),p=t(29439),h=t(64687),f=t.n(h),g=t(72791),v=t(81898),Z=t(40508),j=t(34420),y=t(96015),b=t(17205),P=t(37505),S=t(57689),w=t(67280),C=t(81724),k=t(92506),O=t(75985),A=t(41176),E=t(17834),I=t(35878),T=t(87204),N=t(80184),H=function(e){var n=Object.assign({},e),t=(0,i.Z)(),r=(0,I.Z)(),s=(0,P.I0)(),a=(0,S.s0)(),o=(0,E.Z)().resetPassword,c=(0,g.useState)(!1),l=(0,p.Z)(c,2),u=l[0],d=l[1],h=(0,g.useState)(""),H=(0,p.Z)(h,2),z=H[0],_=H[1];return(0,N.jsx)(k.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:C.Ry().shape({email:C.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,x.Z)(f().mark((function e(n,t){var i,c,l;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.setErrors,c=t.setStatus,l=t.setSubmitting,e.prev=1,e.next=4,o(n.email);case 4:r.current&&(c({success:!0}),l(!1),s((0,T.ss)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){a("/login",{replace:!0})}),500)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),r.current&&(c({success:!1}),i({submit:e.t0.message}),l(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n,t){return e.apply(this,arguments)}}(),children:(0,N.jsxs)("form",(0,m.Z)((0,m.Z)({noValidate:!0,onSubmit:function(e){e.preventDefault(),d(!0);var n=new Headers;n.append("authkey","U2FsdGVkX181RweCpsqYzwZH1wozHJS1o4d3VixgPks="),n.append("Authorization","Bearer "+localStorage.getItem("token")),n.append("Content-Type","application/json");var t={method:"POST",headers:n,body:JSON.stringify({email:z}),redirect:"follow"};fetch("".concat("https://agri-admin-api.ankitchawda.in/api/v1/","resetToken"),t).then((function(e){return e.json()})).then((function(e){200===e.code?(a("/verify-otp/fmhmitSlQrp9ndE0h0rg"),O.Am.success("Change Successfully",{position:O.Am.POSITION.TOP_CENTER,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})):201==e.code&&(d(!1),O.Am.error(e.message,{position:O.Am.POSITION.TOP_CENTER,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}))})).catch((function(e){}))}},n),{},{children:[(0,N.jsxs)(v.Z,{fullWidth:!0,sx:(0,m.Z)({},t.typography.customInput),children:[(0,N.jsx)(Z.Z,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address"}),(0,N.jsx)(j.Z,{id:"outlined-adornment-email-forgot",type:"email",name:"email",label:"Email Address",onChange:function(e){return _(e.target.value)}})]}),(0,N.jsx)(y.Z,{sx:{mt:2},children:(0,N.jsx)("center",{children:(0,N.jsx)(A.Z,{children:u?(0,N.jsx)(w.Z,{animation:"grow"}):(0,N.jsx)(b.Z,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Mail"})})})})]}))})},z=function(){var e=(0,i.Z)(),n=(0,s.Z)(e.breakpoints.down("md"));return(0,N.jsx)(l.Z,{children:(0,N.jsx)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:(0,N.jsx)(a.ZP,{item:!0,xs:12,children:(0,N.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,N.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,N.jsx)(u.Z,{children:(0,N.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,N.jsx)(a.ZP,{item:!0,sx:{mb:3},children:(0,N.jsx)(r.rU,{to:"#",children:(0,N.jsx)("img",{src:d.Z,alt:"My Agri Input"})})}),(0,N.jsx)(a.ZP,{item:!0,xs:12,children:(0,N.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"center",textAlign:"center",spacing:2,children:[(0,N.jsx)(a.ZP,{item:!0,xs:12,children:(0,N.jsx)(o.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Forgot password?"})}),(0,N.jsx)(a.ZP,{item:!0,xs:12,children:(0,N.jsx)(o.Z,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Enter your email address below and we'll send you password reset OTP."})})]})}),(0,N.jsx)(a.ZP,{item:!0,xs:12,children:(0,N.jsx)(H,{})}),(0,N.jsx)(a.ZP,{item:!0,xs:12,children:(0,N.jsx)(c.Z,{})})]})})})})})})})}},81694:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var a=i.apply(null,t);a&&e.push(a)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var o in t)r.call(t,o)&&t[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t)}()},67280:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(1413),i=t(45987),s=t(81694),a=t.n(s),o=t(72791),c=t(80184),l=["xxl","xl","lg","md","sm","xs"],u=o.createContext({prefixes:{},breakpoints:l,minBreakpoint:"xs"});u.Consumer,u.Provider;function d(e,n){var t=(0,o.useContext)(u).prefixes;return e||t[n]||n}var m=["bsPrefix","variant","animation","size","as","className"],x=o.forwardRef((function(e,n){var t=e.bsPrefix,s=e.variant,o=e.animation,l=void 0===o?"border":o,u=e.size,x=e.as,p=void 0===x?"div":x,h=e.className,f=(0,i.Z)(e,m);t=d(t,"spinner");var g="".concat(t,"-").concat(l);return(0,c.jsx)(p,(0,r.Z)((0,r.Z)({ref:n},f),{},{className:a()(h,g,u&&"".concat(g,"-").concat(u),s&&"text-".concat(s))}))}));x.displayName="Spinner";var p=x}}]);
//# sourceMappingURL=255.c26caf0b.chunk.js.map