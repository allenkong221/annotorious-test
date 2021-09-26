var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&r(e,n,t[n]);if(l)for(var n of l(t))a.call(t,n)&&r(e,n,t[n]);return e},i=(e,l)=>t(e,n(l));"undefined"!=typeof require&&require;import{r as c,c as u,a as d,o as p,b as v,d as f,e as m,f as g,g as h,h as b,u as x,F as y,n as w,w as A,v as I,t as S,i as O,j as k,k as C,l as j,m as L,p as P}from"./vendor.83e6b512.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var M=(e,t)=>{for(const[n,l]of t)e[n]=l;return e};var N=M({},[["render",function(e,t){const n=c("router-view");return p(),u("div",null,[d(n)])}]]);const R={default:M({},[["render",function(e,t){const n=c("router-view");return p(),v(n)}]])};const T=["multiple"],E=f({props:{multiple:{type:Boolean,default:!1}},emits:["upload"],setup(e,{emit:t}){const n=e=>{const n=e.target;n.files&&n.files.length&&t("upload",n.files)};return(t,l)=>(p(),u("input",{type:"file",onChange:n,multiple:e.multiple},null,40,T))}}),H={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},U=[m("path",{d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7z",fill:"currentColor"},null,-1)];var q={name:"mdi-check",render:function(e,t){return p(),u("svg",H,U)}};const z=e=>{const t=e.substr(11).split(",");return{left:parseInt(t[0]),top:parseInt(t[1]),width:parseInt(t[2]),height:parseInt(t[3])}},B=g(),J=g(""),D=g([]),F=()=>({initAnnotations(e){B.value=new h.exports.Annotorious({image:e,disableEditor:!0}),B.value.on("createSelection",(async e=>{await B.value.updateSelected(e,!0)})),B.value.on("cancelSelected",(()=>{})),B.value.on("updateAnnotation",((e,t)=>{console.log("updating"),D.value.forEach(((n,l)=>{t.id===n.id&&(D.value[l]=s(s({},D.value[l]),z(e.target.selector.value)))}))})),B.value.on("createAnnotation",(e=>{D.value.push(s({name:"",id:e.id},z(e.target.selector.value))),B.value.selectAnnotation(e.id),J.value=e.id})),B.value.on("selectAnnotation",(e=>{console.log("selected",e.id),J.value=e.id})),B.value.on("deleteAnnotation",(e=>{const t=e.id;J.value="";const n=D.value.findIndex((e=>e.id===t));D.value.splice(n,1)}))},getAnnotations:()=>B.value?(console.log(B.value.getAnnotations()),B.value.getAnnotations().map((e=>s({name:e.body[0].value,id:e.id},z(e.target.selector.value))))):(console.error("Annotations not initialized"),[]),selectAnnotation(e){J.value=e,B.value.selectAnnotation(e)},clearSelection(){J.value="",B.value.cancelSelected()},deleteAnnotation(e){const t=D.value.findIndex((t=>t.id===e));B.value.removeAnnotation(e),J.value="",D.value.splice(t,1),setTimeout((()=>{B.value.cancelSelected()}),50)}}),K={class:"flex"},W=["value","data-id"],Y=f({setup(e){const{selectAnnotation:t,clearSelection:n}=F(),l=async e=>{const n=e.target;console.log(n.dataset.id);const l=D.value.find((e=>e.id===n.dataset.id));l&&(l.name=n.value),t(n.dataset.id||"")};return(e,t)=>{const o=q;return p(!0),u(y,null,b(x(D),(e=>(p(),u("div",{class:"flex absolute bg-blue-400",style:w({top:`calc(${e.top}px - 1.5rem)`,left:`${e.left+e.width}px`})},[A(m("div",K,[m("input",{type:"text",class:"bg-gray-200 border-1 border-gray-600 h-6 focus:outline-none",value:e.name,onInput:l,"data-id":e.id},null,40,W),m("div",{class:"bg-green-700",onClick:t[0]||(t[0]=(...e)=>x(n)&&x(n)(...e))},[d(o,{class:"text-white"})])],512),[[I,x(J)===e.id]])],4)))),256)}}}),$={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},G=[m("path",{d:"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z",fill:"currentColor"},null,-1)];var V={name:"mdi-trash",render:function(e,t){return p(),u("svg",$,G)}};const Q={class:"absolute top-10 right-10 flex flex-col w-60"},X=["onClick"],Z={class:"flex flex-col"},_=f({setup(e){const{selectAnnotation:t,deleteAnnotation:n}=F();return(e,l)=>{const o=V;return p(),u("div",Q,[(p(!0),u(y,null,b(x(D),(e=>(p(),u("div",{class:"flex border-1 border-blue-400 rounded mb-5 p-4 items-center justify-between",onClick:n=>x(t)(e.id)},[m("div",Z,[m("span",null,"Name: "+S(e.name),1),m("span",null,"Left: "+S(e.left),1),m("span",null,"Top: "+S(e.top),1),m("span",null,"Width: "+S(e.width),1),m("span",null,"Height: "+S(e.height),1)]),d(o,{class:"text-blue-600 cursor-pointer",onClick:t=>x(n)(e.id)},null,8,["onClick"])],8,X)))),256))])}}});const ee={class:"flex flex-col justify-center items-center"},te=m("h5",{class:"text-xl text-orange-400"}," Select a file to be used as a template: ",-1),ne={class:"mt-10"},le=m("h5",{class:"text-lg text-orange-400 text-center"}," Click and drag over the image to create a new selection ",-1),oe={class:"relative"},ae=["src"],re={class:"absolute top-10 left-10 flex flex-col"},se=[{name:"index",path:"/",component:f({setup(e){const t=g(),n=g(),l=g(),o=g(!1),{initAnnotations:a}=F(),r=e=>{l.value=e[0],t.value=URL.createObjectURL(e[0]),a(n.value)},s=async()=>{o.value=!0;try{await O.post("/apitest");alert("API TEST OK")}catch{alert("ERROR COMMUNICATING WITH API")}finally{o.value=!1}},i=async()=>{const e=new FormData;e.append("file",l.value),e.append("annotations",JSON.stringify(D.value));try{await O.post("/test",e,{headers:{"Content-Type":"multipart/form-data;"}})}catch{}finally{alert("sent to the API")}};return(e,l)=>{const a=E,c=Y,v=_;return p(),u("div",ee,[te,d(a,{onUpload:r}),A(m("div",ne,[le,m("div",oe,[m("img",{ref:(e,t)=>{t.templateImgRef=e,n.value=e},src:t.value,alt:"template"},null,8,ae),d(c)])],512),[[I,t.value]]),m("div",re,[m("button",{onClick:s,class:"text-lg text-red-700 border-1 border-red-700 px-6 py-2 mt-2 active:bg-red-100 focus:border-red-700 focus:border-1 focus:outline-none"},S(o.value?"Attempting connection...":"Test API"),1),m("button",{onClick:i,class:"text-lg text-red-700 border-1 border-red-700 px-6 py-2 mt-2 active:bg-red-100 focus:border-red-700 focus:border-1 focus:outline-none"}," Send to API ")]),d(v)])}}}),props:!0}].map((e=>{var t;return{path:e.path,component:R[(null==(t=e.meta)?void 0:t.layout)||"default"],children:[i(s({},e),{path:""})]}}));const ie=k({history:C(),routes:se});const ce={},ue=j(N);ue.use(ie);const de=L(),pe=[];if(localStorage.getItem("piniaState")){const e=JSON.parse(localStorage.getItem("piniaState")||"{}");for(const t of pe)e[t]&&(de.state.value=i(s({},de.state.value),{[t]:s({},e[t])}))}ue.use(de),P(de.state,(e=>{localStorage.setItem("piniaState",JSON.stringify(e))}),{deep:!0});for(const ve in ce)ue.use(ce[ve].default);ue.mount("#app");