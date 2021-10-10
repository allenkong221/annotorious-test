var F=Object.defineProperty,Y=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var I=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))U.call(t,o)&&I(e,o,t[o]);if(L)for(var o of L(t))W.call(t,o)&&I(e,o,t[o]);return e},k=(e,t)=>Y(e,q(t));import{r as C,c as i,a as p,o as l,b as c,d as J,e as m,u as E,f as M,F as K,g as X,n as S,h as g,i as z,j as G,t as R,k as j,p as P,l as A,m as _,q as Q,s as Z,v as ee,w as te,x as O,y as oe,z as se,A as ne,B as ae,C as re}from"./vendor.7eedab50.js";const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};le();var h=(e,t)=>{for(const[o,n]of t)e[o]=n;return e};const ce={};function ie(e,t){const o=C("router-view");return l(),i("div",null,[p(o)])}var de=h(ce,[["render",ie]]);const ue="modulepreload",T={},pe="/",f=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${pe}${n}`,n in T)return;T[n]=!0;const s=n.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":ue,s||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),s)return new Promise((u,v)=>{a.addEventListener("load",u),a.addEventListener("error",v)})})).then(()=>t())},_e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},me=c("g",{fill:"currentColor"},[c("path",{d:"M13.377 10.573a7.63 7.63 0 0 1-.383-2.38V6.195a5.115 5.115 0 0 0-1.268-3.446a5.138 5.138 0 0 0-3.242-1.722c-.694-.072-1.4 0-2.07.227c-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 0 0-1.208 1.675a5.067 5.067 0 0 0-.431 2.022v2.2a7.61 7.61 0 0 1-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412c.37.37.885.586 1.412.586c.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658l-.586-1.77zm-4.69 3.147a.997.997 0 0 1-.705.299a.997.997 0 0 1-.706-.3a.997.997 0 0 1-.3-.705h1.999a.939.939 0 0 1-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 0 0 .443-2.691V6.004c0-.563.12-1.113.347-1.616c.227-.514.55-.969.969-1.34c.419-.382.91-.67 1.436-.837c.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 0 1 2.597 1.4a4.133 4.133 0 0 1 1.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z"})],-1),he=[me];function fe(e,t){return l(),i("svg",_e,he)}var ve={name:"codicon-bell",render:fe};const ye={},ge={class:"flex items-center md:justify-end justify-between py-2 px-5 md:py-0 md:px-10 md:border-b-2 md:border-secondary md:bg-gray1"},xe=c("span",null,"Logout",-1);function we(e,t){const o=ve;return l(),i("div",ge,[p(o,{class:"mr-3"}),xe])}var be=h(ye,[["render",we]]);const $e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},ke=c("path",{d:"M113.344 227.353V112.6h113.948C219.139-7.446 91.364-24.973 35.18 29.85c-59.136 57.702-50.467 187.275 78.164 197.503zM476.82 29.85C420.636-24.973 292.86-7.446 284.708 112.6h113.948v114.754c128.63-10.228 137.3-139.801 78.164-197.503zM35.18 482.15c56.184 54.823 183.96 37.296 192.112-82.749H113.344V284.647c-128.63 10.228-137.3 139.801-78.164 197.503zm363.476-197.503V399.4H284.708c8.153 120.045 135.928 137.572 192.112 82.749c59.136-57.702 50.467-187.275-78.164-197.503z",fill:"currentColor"},null,-1),Se=[ke];function Ve(e,t){return l(),i("svg",$e,Se)}var Le={name:"file-icons-closuretemplate",render:Ve};const Ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ce=J('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h7v9H3z"></path><path d="M14 3h7v5h-7z"></path><path d="M14 12h7v9h-7z"></path><path d="M3 16h7v5H3z"></path></g>',1),Ee=[Ce];function Me(e,t){return l(),i("svg",Ie,Ee)}var ze={name:"lucide-layout-dashboard",render:Me};const Re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},je=c("path",{d:"M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4z",fill:"currentColor"},null,-1),Pe=[je];function Ae(e,t){return l(),i("svg",Re,Pe)}var Oe={name:"ri-user-line",render:Ae};const Te=()=>({menuItems:[{name:"Dashboard",icon:ze,path:"/dashboard"},{name:"Templates",icon:Le,path:"/templates"},{name:"Profile",icon:Oe,path:"/profile"}]});const Be={class:"md:border-r-2 border-secondary flex justify-around md:justify-start md:flex-col items-center px-4 py-2 md:py-0 md:bg-gray1"},Ne=["onClick"],De={class:"flex transition justify-center items-center p-2 mb-1"},He={class:"text-h5"},Fe=m({setup(e){const{menuItems:t}=Te(),o=E(),n=M();return(s,r)=>(l(),i("div",Be,[(l(!0),i(K,null,X(g(t),a=>(l(),i("div",{class:S(["flex flex-col items-center p-2 lg:p-4 hover:text-secondary group flex-grow md:flex-grow-0 cursor-pointer transition",{"menu-item--active":g(o).path.includes(a.path),"text-secondary":g(o).path.includes(a.path)}]),onClick:u=>g(n).push({path:a.path})},[c("div",De,[(l(),z(G(a.icon),{class:"text-p"}))]),c("span",He,R(a.name),1)],10,Ne))),256))]))}});var Ye=h(Fe,[["__scopeId","data-v-781796fb"]]);const qe=e=>(P("data-v-6a25c0fe"),e=e(),A(),e),Ue={class:"w-full min-h-100vh grid-container flex flex-col justify-between"},We=qe(()=>c("div",{class:"hidden md:block logo border-b-2 border-r-2 border-secondary bg-gray1"},null,-1)),Je={class:"p-5 md:p-12 lg:p-15 w-full flex-grow content"},Ke=m({setup(e){const t=E();return(o,n)=>{const s=be,r=C("router-view"),a=Ye;return l(),i("div",Ue,[We,p(s,{class:"top"}),c("div",Je,[p(r)]),g(t).path!=="/"?(l(),z(a,{key:0,class:"side"})):j("",!0)])}}});var Xe=h(Ke,[["__scopeId","data-v-6a25c0fe"]]);const Ge={auth:()=>f(()=>import("./auth.9d4966e5.js"),["assets/auth.9d4966e5.js","assets/vendor.7eedab50.js"]),default:Xe};function Qe(e){return e.map(t=>{var o;return{path:t.path,component:Ge[((o=t.meta)==null?void 0:o.layout)||"default"],children:[k(x({},t),{path:""})]}})}const Ze={class:"border-primary border-1 pt-3 pl-3 flex flex-col bg-white"},et=["value","placeholder","type"],tt=m({props:{modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},label:{type:String,default:"Label"},type:{type:String,default:"text"}},emits:["update:modelValue"],setup(e,{emit:t}){const o=n=>{const s=n.target;t("update:modelValue",s.value)};return(n,s)=>(l(),i("div",Ze,[c("label",null,R(e.label),1),c("input",{onInput:o,value:e.modelValue,placeholder:e.placeholder,class:"py-3 focus:outline-none placeholder-gray2",type:e.type},null,40,et)]))}});const ot=["disabled"],st=m({props:{type:{type:String,default:"primary",validation:e=>["primary","secondary"].includes(e)},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const o=_(!1),n=_(),s=d=>{v(d),t("click")},r=_(0),a=_(0),u=_(0),v=async d=>{if(n.value){o.value=!1,await ee();const $=Math.max(n.value.clientWidth,n.value.clientHeight),y=$/2;r.value=$,u.value=d.clientX-(n.value.offsetLeft+y),a.value=d.clientY-(n.value.offsetTop+y),o.value=!0}};return(d,$)=>(l(),i("button",{ref:(y,H)=>{H.buttonRef=y,n.value=y},class:S(["px-4 py-2 relative overflow-hidden transition text-p font-bold duration-400 rounded-md focus:outline-none text-white",{"bg-primary":e.type==="primary","bg-secondary":e.type==="secondary","opacity-38":e.disabled}]),disabled:e.disabled,onClick:s},[Q(d.$slots,"default",{},void 0,!0),o.value?(l(),i("span",{key:0,class:S(["ripple bg-opacity-20",e.type]),style:Z({width:`${r.value}px`,height:`${r.value}px`,top:`${a.value}px`,left:`${u.value}px`})},null,6)):j("",!0)],10,ot))}});var nt=h(st,[["__scopeId","data-v-1283e741"]]);const V=e=>(P("data-v-4b94f8c7"),e=e(),A(),e),at={class:"rounded-lg border-2 border-secondary bg-yellow flex flex-col p-6 min-w-1/3 box-shadow"},rt=V(()=>c("span",{class:"text-secondary ml-auto text-p"},[O("I want to "),c("span",{class:"font-bold"},"sign up!")],-1)),lt={class:"flex flex-col px-10"},ct=V(()=>c("h1",{class:"text-secondary text-h1 font-bold text-center my-16"}," Tolstoy ",-1)),it=V(()=>c("small",{class:"text-small ml-auto"},"Forgot password?",-1)),dt=O("Login"),ut=m({emits:["submit"],setup(e,{emit:t}){const o=_(""),n=_(""),s=()=>{t("submit",{email:o.value,password:n.value})};return(r,a)=>{const u=tt,v=nt;return l(),i("div",at,[rt,c("div",lt,[ct,p(u,{label:"E-mail",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=d=>o.value=d),class:"mb-6 text-p"},null,8,["modelValue"]),p(u,{label:"Password",type:"password",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=d=>n.value=d),class:"mb-2 text-p"},null,8,["modelValue"]),it,p(v,{type:"secondary",onClick:s,class:"mx-auto px-20 mt-16 mb-10 text-h3"},{default:te(()=>[dt]),_:1})])])}}});var pt=h(ut,[["__scopeId","data-v-4b94f8c7"]]),B={};const _t={class:"flex flex-col items-center justify-center h-full bg-gray1"},N=m({setup(e){const t=async({email:n,password:s})=>{console.log(n,s),o.push({path:"/templates"})},o=M();return(n,s)=>{const r=pt;return l(),i("div",_t,[p(r,{onSubmit:t})])}}});typeof B=="function"&&B(N);const mt=[{name:"tests",path:"/tests",component:()=>f(()=>import("./tests.9c838705.js"),["assets/tests.9c838705.js","assets/FileUploader.c48e9577.js","assets/vendor.7eedab50.js"]),props:!0},{name:"templates-new",path:"/templates/new",component:()=>f(()=>import("./new.655d3b6e.js"),["assets/new.655d3b6e.js","assets/new.0015b19e.css","assets/vendor.7eedab50.js","assets/FileUploader.c48e9577.js"]),props:!0},{name:"templates",path:"/templates",component:()=>f(()=>import("./index.e14fb16f.js"),["assets/index.e14fb16f.js","assets/index.6d16a852.css","assets/vendor.7eedab50.js"]),props:!0},{name:"profile",path:"/profile",component:()=>f(()=>import("./profile.6790e613.js"),["assets/profile.6790e613.js","assets/vendor.7eedab50.js"]),props:!0},{name:"dashboard",path:"/dashboard",component:()=>f(()=>import("./dashboard.e3dcf90f.js"),["assets/dashboard.e3dcf90f.js","assets/vendor.7eedab50.js"]),props:!0},{name:"index",path:"/",component:N,props:!0,meta:{layout:"auth"}}],ht=Qe(mt),ft=oe({history:se(),routes:ht});const D={},w=ne(de);w.use(ft);const b=ae(),vt=[];if(localStorage.getItem("piniaState")){const e=JSON.parse(localStorage.getItem("piniaState")||"{}");for(const t of vt)e[t]&&(b.state.value=k(x({},b.state.value),{[t]:x({},e[t])}))}w.use(b);re(b.state,e=>{localStorage.setItem("piniaState",JSON.stringify(e))},{deep:!0});for(const e in D)w.use(D[e].default);w.mount("#app");export{h as _,nt as a};
