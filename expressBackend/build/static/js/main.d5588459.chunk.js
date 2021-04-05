(this.webpackJsonpmonitor=this.webpackJsonpmonitor||[]).push([[0],{132:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(20),c=n.n(a),s=n(15),i=n(9),u=n.n(i),o=n(17),l=n(57),j=n.n(l),d="/requests",b={getAll:function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(d);case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),postNew:function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post(d,t);case 2:return n=e.sent,e.abrupt("return",n.data.message);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),filter:function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(d,{params:{tag:t,text:n}});case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),selectPage:function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(d,{params:{page:t}});case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_REQUEST",newRequest:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=n(347),x=n(346),h=(n(83),n(1)),f=function(){return Object(h.jsxs)(O.a,{bg:"primary",variant:"dark",children:[Object(h.jsx)(O.a.Brand,{children:Object(h.jsx)("img",{src:"https://cdn.logo.com/hotlink-ok/logo-social.png",width:"60",height:"30"})}),Object(h.jsx)(O.a.Brand,{children:"Service Center"}),Object(h.jsxs)(x.a,{className:"ml-auto navText",children:[Object(h.jsx)("span",{className:"material-icons",style:{paddingRight:"10px"},children:"face"}),"Username"]})]})},v=n(22),m=n(339),y=n(345),g=n(340),T=n(341),w=n(342),E=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(s.useDispatch)();return Object(h.jsx)(m.a,{fluid:!0,children:Object(h.jsx)(y.a,{onSubmit:function(e){var t;e.preventDefault(),c((t={tag:"description",text:n.toLowerCase()},function(){var e=Object(o.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.filter(t.tag,t.text);case 2:r=e.sent,n({type:"PART_TEXT_FILTER",requests:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:Object(h.jsxs)(y.a.Row,{children:[Object(h.jsx)(y.a.Label,{children:"Search"}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(y.a.Control,{placeholder:"Search...",onChange:function(e){var t=e.target;return a(t.value)}}),Object(h.jsx)(g.a.Append,{children:Object(h.jsx)(T.a,{type:"submit",style:{paddingTop:"0px",paddingBottom:"0px"},children:Object(h.jsx)("span",{className:"material-icons md-18",children:"search"})})})]})]})})})},S=function(e){var t=e.label,n=e.name,r=e.optionValues,a=Object(s.useDispatch)();return Object(h.jsx)(m.a,{fluid:!0,children:Object(h.jsx)(y.a,{children:Object(h.jsxs)(y.a.Row,{children:[Object(h.jsx)(y.a.Label,{children:t}),Object(h.jsxs)(y.a.Control,{as:"select",onChange:function(e){var t;e.preventDefault(),a((t={tag:n,text:e.target.value.toLowerCase()},function(){var e=Object(o.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.filter(t.tag,t.text);case 2:r=e.sent,n({type:"FULL_TEXT_FILTER",requests:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(h.jsx)("option",{value:"",children:"..."}),r.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})]})})})},R=function(){return Object(h.jsxs)(m.a,{fluid:!0,children:[Object(h.jsx)(w.a,{children:Object(h.jsx)(E,{})}),Object(h.jsx)(w.a,{children:Object(h.jsx)(S,{label:"Request Types",name:"requesttype",optionValues:["Audit","Maintenance"]})}),Object(h.jsx)(w.a,{children:Object(h.jsx)(S,{label:"Priority",name:"priority",optionValues:["High","Medium","Low"]})}),Object(h.jsx)(w.a,{children:Object(h.jsx)(S,{label:"Status",name:"status",optionValues:["Open","Closed"]})})]})},q=n(141),C=n(30),k=n(99),D=n(81),I=n(48),N=null,L=function(e,t,n){return function(){var r=Object(o.a)(u.a.mark((function r(a){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a({type:"SET_NOTIFICATION",message:e,color:t});case 2:null!==N&&clearTimeout(N),N=setTimeout((function(){a({type:"RESET"})}),1e3*n);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},F=n(147),A=n(43),_=(n(132),Object(A.decorator)(F.bubble)),V=n(348),P=function(e){var t=e.label,n=Object(k.a)(e,["label"]),r=Object(D.b)(n),a=Object(v.a)(r,2),c=a[0],s=a[1];return Object(h.jsxs)(y.a.Group,{children:[Object(h.jsx)(y.a.Label,{children:t}),Object(h.jsx)(y.a.Control,Object(C.a)(Object(C.a)(Object(C.a)({},n),c),{},{isInvalid:!!s.error})),Object(h.jsx)(y.a.Control.Feedback,{type:"invalid",children:s.error})]})},B=function(e){var t=e.label,n=e.optionValues,r=Object(k.a)(e,["label","optionValues"]),a=Object(D.b)(r),c=Object(v.a)(a,2),s=c[0],i=c[1];return Object(h.jsxs)(y.a.Group,{children:[Object(h.jsx)(y.a.Label,{children:t}),Object(h.jsx)(y.a.Control,Object(C.a)(Object(C.a)(Object(C.a)({as:"select"},r),s),{},{isInvalid:!!i.error,children:n.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))})),Object(h.jsx)(y.a.Control.Feedback,{type:"invalid",children:i.error})]})},U=function(){var e=Object(s.useDispatch)();Object(r.useEffect)((function(){e({type:"RESET"})}));var t=function(){var t=Object(o.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return event.preventDefault(),t.prev=1,t.next=4,b.postNew(Object(C.a)(Object(C.a)({},n),{},{created:Date.now(),id:Object(V.a)(),status:"Open"}));case 4:r=t.sent,e(L("Request created succesfully","success",2)),e(p(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(L("Server unavailable","danger",2));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),n=I.a({requestName:I.b().required(),requestType:I.b().required(),description:I.b().required().max(255),priority:I.b().required()});return Object(h.jsxs)(m.a,{fluid:!0,style:{textAlign:"left",color:"white"},children:[Object(h.jsx)("h5",{children:"CREATE NEW SERVICE REQUEST"}),Object(h.jsx)(D.a,{validationSchema:n,onSubmit:t,initialValues:{requestName:"name",requestType:"Audit",description:"description",priority:"High"},children:function(e){var t=e.handleSubmit;return Object(h.jsxs)(y.a,{noValidate:!0,onSubmit:t,children:[Object(h.jsx)(P,{label:"Request Name",name:"requestName",type:"text",placeholder:"Type"}),Object(h.jsx)(B,{label:"Request Type",name:"requestType",optionValues:["Audit","Maintenance"]}),Object(h.jsx)(P,{label:"Description",name:"description",type:"text",placeholder:"Type"}),Object(h.jsx)(B,{label:"Priority",name:"priority",optionValues:["High","Medium","Low"]}),Object(h.jsx)(T.a,{variant:"primary",type:"submit",block:!0,children:"SEND"})]})}})]})},G=function(){var e=Object(s.useDispatch)();return Object(h.jsxs)(m.a,{fluid:!0,children:[Object(h.jsx)(_,{right:!0,customBurgerIcon:!1,noOverlay:!0,width:"38%",children:Object(h.jsx)(U,{})}),Object(h.jsx)(T.a,{onClick:function(){return e(Object(A.action)(!0))},variant:"success",children:"NEW SERVICE REQUEST"})]})},M=n(148),Q=n.n(M),H=(n(335),function(){var e=Object(s.useSelector)((function(e){return e.requests})),t=[{dataField:"created",text:"Created",formatter:function(e){return Object(h.jsx)("span",{children:new Date(e).toLocaleString("en-GB",{timeZone:"UTC"})})},sort:!0},{dataField:"requestname",text:"Request Name"},{dataField:"requesttype",text:"Request Type"},{dataField:"id",text:"ID"},{dataField:"description",text:"Description"},{dataField:"priority",text:"Priority"},{dataField:"status",text:"Status"}];return e?Object(h.jsx)(Q.a,{bootstrap4:!0,keyField:"id",data:e,columns:t}):null}),X=function(){var e=Object(r.useState)(1),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(s.useDispatch)();return Object(h.jsx)(y.a,{onSubmit:function(e){e.preventDefault(),c(function(e){return function(){var t=Object(o.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.selectPage(e);case 2:r=t.sent,n({type:"SELCT_PAGE",requests:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))},children:Object(h.jsx)(y.a.Row,{children:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(g.a.Prepend,{children:Object(h.jsx)(g.a.Text,{children:"Page"})}),Object(h.jsx)(y.a.Control,{defaultValue:"1",type:"number",onChange:function(e){var t=e.target;return a(t.value)}}),Object(h.jsx)(g.a.Append,{children:Object(h.jsx)(T.a,{type:"submit",children:"Go"})})]})})})},W=function(){return Object(h.jsxs)(m.a,{fluid:!0,children:[Object(h.jsxs)(w.a,{style:{background:"#cdedfb",paddingTop:"10px",paddingBottom:"10px"},children:[Object(h.jsx)(q.a,{children:Object(h.jsx)("h4",{children:" Service Requests"})}),Object(h.jsx)(q.a,{className:"rightAlign",children:Object(h.jsx)(G,{})})]}),Object(h.jsxs)("main",{id:"page-wrap",children:[Object(h.jsx)(w.a,{children:Object(h.jsx)(H,{})}),Object(h.jsx)(w.a,{style:{justifyContent:"center",paddingBottom:"30px"},children:Object(h.jsx)(X,{})})]})]})},J=n(344),Z=n(343),z=function(){var e=Object(s.useSelector)((function(e){return e.notification}));if(null===e)return null;var t=!0,n=function(){return t=!1};return Object(h.jsxs)(J.a,{show:t,onHide:n,children:[Object(h.jsx)(J.a.Header,{closeButton:!0,children:Object(h.jsx)(J.a.Title,{children:"Notification"})}),Object(h.jsx)(J.a.Body,{children:Object(h.jsx)(Z.a,{variant:e.color,children:e.message})}),Object(h.jsx)(J.a.Footer,{children:Object(h.jsx)(T.a,{variant:"secondary",onClick:n,children:"Close"})})]})},K=function(){var e=Object(s.useDispatch)();return Object(r.useEffect)((function(){e(function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAll();case 2:n=e.sent,t({type:"INIT_REQUEST",requests:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(z,{}),Object(h.jsx)(f,{}),Object(h.jsxs)(w.a,{id:"outer-container",children:[Object(h.jsx)(q.a,{xs:"3",style:{color:"white",background:"#6f748a"},children:Object(h.jsx)(R,{})}),Object(h.jsx)(q.a,{xs:"9",style:{paddingLeft:"0px",paddingRight:"0px"},children:Object(h.jsx)(W,{})})]})]})},Y=n(32),$=n(150),ee=n(151),te=Object(Y.combineReducers)({notification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET":return null;case"SET_NOTIFICATION":return{message:t.message,color:t.color};default:return e}},requests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_REQUEST":return t.requests;case"ADD_REQUEST":return e.concat(t.newRequest);case"PART_TEXT_FILTER":case"FULL_TEXT_FILTER":case"SELCT_PAGE":return t.requests;default:return e}},burgerMenu:A.reducer}),ne=Object(Y.createStore)(te,Object(ee.composeWithDevTools)(Object(Y.applyMiddleware)($.a)));c.a.render(Object(h.jsx)(s.Provider,{store:ne,children:Object(h.jsx)(K,{})}),document.getElementById("root"))},83:function(e,t,n){}},[[336,1,2]]]);
//# sourceMappingURL=main.d5588459.chunk.js.map