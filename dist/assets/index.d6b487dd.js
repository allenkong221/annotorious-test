var q=Object.defineProperty,U=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var E=(e,t,o)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&E(e,o,t[o]);if(C)for(var o of C(t))K.call(t,o)&&E(e,o,t[o]);return e},k=(e,t)=>U(e,W(t));import{r as M,c as i,a as p,o as l,b as c,d as X,e as f,u as R,f as z,F as G,g as Q,n as V,h as g,i as S,j,t as P,w as L,k as A,p as T,l as O,T as Z,m,q as ee,s as te,v as oe,x as B,y as se,z as ne,A as ae,B as re,C as le}from"./vendor.1e55e93a.js";const ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};ce();var v=(e,t)=>{for(const[o,n]of t)e[o]=n;return e};const ie={};function de(e,t){const o=M("router-view");return l(),i("div",null,[p(o)])}var ue=v(ie,[["render",de]]);const pe="modulepreload",N={},_e="/",h=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${_e}${n}`,n in N)return;N[n]=!0;const s=n.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":pe,s||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),s)return new Promise((d,_)=>{a.addEventListener("load",d),a.addEventListener("error",_)})})).then(()=>t())},me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},he=c("g",{fill:"currentColor"},[c("path",{d:"M13.377 10.573a7.63 7.63 0 0 1-.383-2.38V6.195a5.115 5.115 0 0 0-1.268-3.446a5.138 5.138 0 0 0-3.242-1.722c-.694-.072-1.4 0-2.07.227c-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 0 0-1.208 1.675a5.067 5.067 0 0 0-.431 2.022v2.2a7.61 7.61 0 0 1-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412c.37.37.885.586 1.412.586c.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658l-.586-1.77zm-4.69 3.147a.997.997 0 0 1-.705.299a.997.997 0 0 1-.706-.3a.997.997 0 0 1-.3-.705h1.999a.939.939 0 0 1-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 0 0 .443-2.691V6.004c0-.563.12-1.113.347-1.616c.227-.514.55-.969.969-1.34c.419-.382.91-.67 1.436-.837c.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 0 1 2.597 1.4a4.133 4.133 0 0 1 1.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z"})],-1),fe=[he];function ve(e,t){return l(),i("svg",me,fe)}var ye={name:"codicon-bell",render:ve};const ge={},xe={class:"flex items-center md:justify-end justify-between py-2 px-5 md:py-0 md:px-10 md:border-b-2 md:border-secondary md:bg-gray1"},we=c("span",null,"Logout",-1);function be(e,t){const o=ye;return l(),i("div",xe,[p(o,{class:"mr-3"}),we])}var $e=v(ge,[["render",be]]);const ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},Ve=c("path",{d:"M113.344 227.353V112.6h113.948C219.139-7.446 91.364-24.973 35.18 29.85c-59.136 57.702-50.467 187.275 78.164 197.503zM476.82 29.85C420.636-24.973 292.86-7.446 284.708 112.6h113.948v114.754c128.63-10.228 137.3-139.801 78.164-197.503zM35.18 482.15c56.184 54.823 183.96 37.296 192.112-82.749H113.344V284.647c-128.63 10.228-137.3 139.801-78.164 197.503zm363.476-197.503V399.4H284.708c8.153 120.045 135.928 137.572 192.112 82.749c59.136-57.702 50.467-187.275-78.164-197.503z",fill:"currentColor"},null,-1),Se=[Ve];function Le(e,t){return l(),i("svg",ke,Se)}var Ie={name:"file-icons-closuretemplate",render:Le};const Ce={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ee=X('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h7v9H3z"></path><path d="M14 3h7v5h-7z"></path><path d="M14 12h7v9h-7z"></path><path d="M3 16h7v5H3z"></path></g>',1),Me=[Ee];function Re(e,t){return l(),i("svg",Ce,Me)}var ze={name:"lucide-layout-dashboard",render:Re};const je={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Pe=c("path",{d:"M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4z",fill:"currentColor"},null,-1),Ae=[Pe];function Te(e,t){return l(),i("svg",je,Ae)}var Oe={name:"ri-user-line",render:Te};const Be=()=>({menuItems:[{name:"Dashboard",icon:ze,path:"/dashboard"},{name:"Templates",icon:Ie,path:"/templates"},{name:"Profile",icon:Oe,path:"/profile"}]});const Ne={class:"md:border-r-2 border-secondary flex justify-around md:justify-start md:flex-col items-center px-4 py-2 md:py-0 md:bg-gray1"},De=["onClick"],He={class:"flex transition justify-center items-center p-2 mb-1"},Fe={class:"text-h5"},Ye=f({setup(e){const{menuItems:t}=Be(),o=R(),n=z();return(s,r)=>(l(),i("div",Ne,[(l(!0),i(G,null,Q(g(t),a=>(l(),i("div",{class:V(["flex flex-col items-center p-2 lg:p-4 hover:text-secondary group flex-grow md:flex-grow-0 cursor-pointer transition",{"menu-item--active":g(o).path.includes(a.path),"text-secondary":g(o).path.includes(a.path)}]),onClick:d=>g(n).push({path:a.path})},[c("div",He,[(l(),S(j(a.icon),{class:"text-p"}))]),c("span",Fe,P(a.name),1)],10,De))),256))]))}});var qe=v(Ye,[["__scopeId","data-v-781796fb"]]);const Ue=e=>(T("data-v-791a83e1"),e=e(),O(),e),We={class:"w-full min-h-100vh grid-container flex flex-col justify-between"},Je=Ue(()=>c("div",{class:"hidden md:block logo border-b-2 border-r-2 border-secondary bg-gray1"},null,-1)),Ke={class:"p-5 md:p-12 lg:p-15 w-full flex-grow content"},Xe=f({setup(e){const t=R();return(o,n)=>{const s=$e,r=M("router-view"),a=qe;return l(),i("div",We,[Je,p(s,{class:"top"}),c("div",Ke,[p(r,null,{default:L(({Component:d,route:_})=>[p(Z,{name:"fade",mode:"out-in"},{default:L(()=>[(l(),S(j(d),{key:_}))]),_:2},1024)]),_:1})]),g(t).path!=="/"?(l(),S(a,{key:0,class:"side"})):A("",!0)])}}});var Ge=v(Xe,[["__scopeId","data-v-791a83e1"]]);const Qe={auth:()=>h(()=>import("./auth.0243597c.js"),["assets/auth.0243597c.js","assets/vendor.1e55e93a.js"]),default:Ge};function Ze(e){return e.map(t=>{var o;return{path:t.path,component:Qe[((o=t.meta)==null?void 0:o.layout)||"default"],children:[k(x({},t),{path:""})]}})}const et={class:"border-primary border-1 pt-3 pl-3 flex flex-col bg-white"},tt=["value","placeholder","type"],ot=f({props:{modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},label:{type:String,default:"Label"},type:{type:String,default:"text"}},emits:["update:modelValue"],setup(e,{emit:t}){const o=n=>{const s=n.target;t("update:modelValue",s.value)};return(n,s)=>(l(),i("div",et,[c("label",null,P(e.label),1),c("input",{onInput:o,value:e.modelValue,placeholder:e.placeholder,class:"py-3 focus:outline-none placeholder-gray2",type:e.type},null,40,tt)]))}});const st=["disabled"],nt=f({props:{type:{type:String,default:"primary",validation:e=>["primary","secondary"].includes(e)},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const o=m(!1),n=m(),s=u=>{_(u),t("click")},r=m(0),a=m(0),d=m(0),_=async u=>{if(n.value){o.value=!1,await oe();const $=Math.max(n.value.clientWidth,n.value.clientHeight),y=$/2;r.value=$,d.value=u.clientX-(n.value.offsetLeft+y),a.value=u.clientY-(n.value.offsetTop+y),o.value=!0}};return(u,$)=>(l(),i("button",{ref:(y,Y)=>{Y.buttonRef=y,n.value=y},class:V(["px-4 py-2 relative overflow-hidden transition text-p font-bold duration-400 rounded-md focus:outline-none text-white",{"bg-primary":e.type==="primary","bg-secondary":e.type==="secondary","opacity-38":e.disabled}]),disabled:e.disabled,onClick:s},[ee(u.$slots,"default",{},void 0,!0),o.value?(l(),i("span",{key:0,class:V(["ripple bg-opacity-20",e.type]),style:te({width:`${r.value}px`,height:`${r.value}px`,top:`${a.value}px`,left:`${d.value}px`})},null,6)):A("",!0)],10,st))}});var at=v(nt,[["__scopeId","data-v-1283e741"]]);const I=e=>(T("data-v-4b94f8c7"),e=e(),O(),e),rt={class:"rounded-lg border-2 border-secondary bg-yellow flex flex-col p-6 min-w-1/3 box-shadow"},lt=I(()=>c("span",{class:"text-secondary ml-auto text-p"},[B("I want to "),c("span",{class:"font-bold"},"sign up!")],-1)),ct={class:"flex flex-col px-10"},it=I(()=>c("h1",{class:"text-secondary text-h1 font-bold text-center my-16"}," Tolstoy ",-1)),dt=I(()=>c("small",{class:"text-small ml-auto"},"Forgot password?",-1)),ut=B("Login"),pt=f({emits:["submit"],setup(e,{emit:t}){const o=m(""),n=m(""),s=()=>{t("submit",{email:o.value,password:n.value})};return(r,a)=>{const d=ot,_=at;return l(),i("div",rt,[lt,c("div",ct,[it,p(d,{label:"E-mail",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=u=>o.value=u),class:"mb-6 text-p"},null,8,["modelValue"]),p(d,{label:"Password",type:"password",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=u=>n.value=u),class:"mb-2 text-p"},null,8,["modelValue"]),dt,p(_,{type:"secondary",onClick:s,class:"mx-auto px-20 mt-16 mb-10 text-h3"},{default:L(()=>[ut]),_:1})])])}}});var _t=v(pt,[["__scopeId","data-v-4b94f8c7"]]),D={};const mt={class:"flex flex-col items-center justify-center h-full bg-gray1"},H=f({setup(e){const t=async({email:n,password:s})=>{console.log(n,s),o.push({path:"/templates"})},o=z();return(n,s)=>{const r=_t;return l(),i("div",mt,[p(r,{onSubmit:t})])}}});typeof D=="function"&&D(H);const ht=[{name:"tests",path:"/tests",component:()=>h(()=>import("./tests.30b46880.js"),["assets/tests.30b46880.js","assets/vendor.1e55e93a.js","assets/FileUploader.8d3a39d9.js"]),props:!0},{name:"templates-test",path:"/templates/test",component:()=>h(()=>import("./test.40b641d1.js"),["assets/test.40b641d1.js","assets/vendor.1e55e93a.js"]),props:!0},{name:"templates-new",path:"/templates/new",component:()=>h(()=>import("./new.5a787b94.js"),["assets/new.5a787b94.js","assets/new.0015b19e.css","assets/vendor.1e55e93a.js","assets/FileUploader.8d3a39d9.js"]),props:!0},{name:"templates",path:"/templates",component:()=>h(()=>import("./index.18fe9c07.js"),["assets/index.18fe9c07.js","assets/index.6d16a852.css","assets/vendor.1e55e93a.js"]),props:!0},{name:"profile",path:"/profile",component:()=>h(()=>import("./profile.8d34eed9.js"),["assets/profile.8d34eed9.js","assets/vendor.1e55e93a.js"]),props:!0},{name:"dashboard",path:"/dashboard",component:()=>h(()=>import("./dashboard.ad2728a3.js"),["assets/dashboard.ad2728a3.js","assets/vendor.1e55e93a.js"]),props:!0},{name:"index",path:"/",component:H,props:!0,meta:{layout:"auth"}}],ft=Ze(ht),vt=se({history:ne(),routes:ft});const F={},w=ae(ue);w.use(vt);const b=re(),yt=[];if(localStorage.getItem("piniaState")){const e=JSON.parse(localStorage.getItem("piniaState")||"{}");for(const t of yt)e[t]&&(b.state.value=k(x({},b.state.value),{[t]:x({},e[t])}))}w.use(b);le(b.state,e=>{localStorage.setItem("piniaState",JSON.stringify(e))},{deep:!0});for(const e in F)w.use(F[e].default);w.mount("#app");export{v as _,at as a};
