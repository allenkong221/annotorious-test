var G=Object.defineProperty,X=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var P=(e,t,o)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,$=(e,t)=>{for(var o in t||(t={}))Q.call(t,o)&&P(e,o,t[o]);if(M)for(var o of M(t))ee.call(t,o)&&P(e,o,t[o]);return e},V=(e,t)=>X(e,Z(t));import{r as R,c as u,a as f,o as r,b as i,d as te,e as g,u as j,f as A,g as p,h as oe,i as ne,j as ae,w as B,n as O,F as se,k as le,l as x,m,p as z,q as D,t as N,s as E,v as H,x as F,y as k,T as Y,z as C,A as re,B as ie,C as U,D as ce,E as ue,G as de,H as pe,I as _e,J as me,V as he,K as fe}from"./vendor.9ed98674.js";const ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};ve();var v=(e,t)=>{for(const[o,a]of t)e[o]=a;return e};const ye={};function ge(e,t){const o=R("router-view");return r(),u("div",null,[f(o)])}var xe=v(ye,[["render",ge]]);const we="modulepreload",q={},be="/",y=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${be}${a}`,a in q)return;q[a]=!0;const n=a.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":we,n||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),n)return new Promise((_,h)=>{l.addEventListener("load",_),l.addEventListener("error",h)})})).then(()=>t())},$e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},ke=i("g",{fill:"currentColor"},[i("path",{d:"M13.377 10.573a7.63 7.63 0 0 1-.383-2.38V6.195a5.115 5.115 0 0 0-1.268-3.446a5.138 5.138 0 0 0-3.242-1.722c-.694-.072-1.4 0-2.07.227c-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 0 0-1.208 1.675a5.067 5.067 0 0 0-.431 2.022v2.2a7.61 7.61 0 0 1-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412c.37.37.885.586 1.412.586c.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658l-.586-1.77zm-4.69 3.147a.997.997 0 0 1-.705.299a.997.997 0 0 1-.706-.3a.997.997 0 0 1-.3-.705h1.999a.939.939 0 0 1-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 0 0 .443-2.691V6.004c0-.563.12-1.113.347-1.616c.227-.514.55-.969.969-1.34c.419-.382.91-.67 1.436-.837c.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 0 1 2.597 1.4a4.133 4.133 0 0 1 1.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z"})],-1),Ie=[ke];function Se(e,t){return r(),u("svg",$e,Ie)}var Le={name:"codicon-bell",render:Se};const Ve={},ze={class:"flex items-center md:justify-end justify-between py-2 px-5 md:py-0 md:px-10"},Ee=i("span",null,"Logout",-1);function Ce(e,t){const o=Le;return r(),u("div",ze,[f(o,{class:"mr-3"}),Ee])}var Te=v(Ve,[["render",Ce]]);const Me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Pe=te('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h7v9H3z"></path><path d="M14 3h7v5h-7z"></path><path d="M14 12h7v9h-7z"></path><path d="M3 16h7v5H3z"></path></g>',1),Re=[Pe];function je(e,t){return r(),u("svg",Me,Re)}var Ae={name:"lucide-layout-dashboard",render:je};const Be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Oe=i("path",{d:"M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4z",fill:"currentColor"},null,-1),De=[Oe];function Ne(e,t){return r(),u("svg",Be,De)}var He={name:"ri-user-line",render:Ne};const Fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ye=i("path",{d:"M6 8l6 3l6-3l-6-3l-6 3zm6.489-4.884l7.993 4.076c.486.248.661.81.391 1.257a.97.97 0 0 1-.39.359l-7.994 4.076a1.086 1.086 0 0 1-.978 0L3.518 8.808c-.486-.248-.661-.81-.391-1.257a.97.97 0 0 1 .39-.359l7.994-4.076c.304-.155.674-.155.978 0zm0 13.766a1.07 1.07 0 0 1-.978 0l-7.993-4.147c-.486-.252-.661-.824-.391-1.278a.976.976 0 0 1 .39-.365a.818.818 0 0 1 .755 0l7.24 3.755c.303.158.673.158.977 0l7.239-3.755a.818.818 0 0 1 .754 0c.486.252.661.824.391 1.278a.976.976 0 0 1-.39.365l-7.994 4.147zm0 4a1.07 1.07 0 0 1-.978 0l-7.993-4.147c-.486-.252-.661-.824-.391-1.278a.976.976 0 0 1 .39-.365a.818.818 0 0 1 .755 0l7.24 3.755c.303.158.673.158.977 0l7.239-3.755a.818.818 0 0 1 .754 0c.486.252.661.824.391 1.278a.976.976 0 0 1-.39.365l-7.994 4.147z",fill:"currentColor","fill-rule":"nonzero"},null,-1),Ue=[Ye];function qe(e,t){return r(),u("svg",Fe,Ue)}var Je={name:"fe-layer",render:qe};const Ke=()=>({menuItems:[{name:"Dashboard",icon:Ae,path:"/dashboard"},{name:"Templates",icon:Je,path:"/templates"},{name:"Profile",icon:He,path:"/profile"}]});const We=e=>(H("data-v-eaf57524"),e=e(),F(),e),Ge={class:"flex justify-around md:justify-start md:flex-col items-center py-2 relative md:py-0"},Xe=We(()=>i("div",{class:"h-25 flex items-center z-1"},"LOGO",-1)),Ze=["onClick"],Qe={class:"flex transition justify-center items-center p-2 mb-1"},et=g({setup(e){const{menuItems:t}=Ke(),o=j(),a=A(),n=p([]);oe(()=>{n.value=[]});const s=p(0),l=p(0),_=ne(()=>s.value+l.value);ae(()=>{console.log("mounting"),h()}),B(()=>o.path,async()=>{await O(),h()});const h=()=>{for(const d of n.value)d.classList.contains("menu-item--active")&&(s.value=d.offsetTop,l.value=d.clientHeight)};return(d,b)=>(r(),u("div",Ge,[Xe,(r(!0),u(se,null,le(m(t),(c,S)=>(r(),u("div",{class:x(["flex flex-col items-center p-2 lg:p-4 hover:text-secondary group flex-grow md:flex-grow-0 cursor-pointer transition group w-full z-1",{"menu-item--active":m(o).path.includes(c.path),"text-secondary":m(o).path.includes(c.path),"hover:bg-secondary":!m(o).path.includes(c.path),"hover:text-white":!m(o).path.includes(c.path)}]),onClick:L=>m(a).push({path:c.path}),ref:L=>{L&&(n.value[S]=L)}},[i("div",Qe,[(r(),z(D(c.icon),{class:x([{"group-hover:text-white":!m(o).path.includes(c.path),"text-black":!m(o).path.includes(c.path)},"text-h3 transition"])},null,8,["class"]))]),i("span",{class:x(["text-h5 font-medium text-black transition",{"group-hover:text-white":!m(o).path.includes(c.path)}])},N(c.name),3)],10,Ze))),256)),i("div",{class:"absolute top-0 left-0 border-r-2 border-b-2 border-secondary w-full rounded-br-md pointer-events-none bg-gray1 transition-all duration-250",style:E({height:`${s.value}px`})},null,4),i("div",{class:"absolute bottom-0 left-0 bg-gray1 border-r-2 border-t-2 border-secondary w-full rounded-tr-md transition-all duration-250 pointer-events-none",style:E({height:`calc(100% - ${m(_)}px)`})},null,4)]))}});var tt=v(et,[["__scopeId","data-v-eaf57524"]]);const ot={class:"w-full min-h-100vh grid-container flex flex-col justify-between"},nt={class:"p-5 md:p-12 lg:px-15 lg:py-2 w-full flex-grow content"},at=g({setup(e){const t=j();return(o,a)=>{const n=Te,s=R("router-view"),l=tt;return r(),u("div",ot,[f(n,{class:"top"}),i("div",nt,[f(s,null,{default:k(({Component:_,route:h})=>[f(Y,{name:"fade",mode:"out-in"},{default:k(()=>[(r(),z(D(_),{key:h}))]),_:2},1024)]),_:1})]),m(t).path!=="/"?(r(),z(l,{key:0,class:"side"})):C("",!0)])}}});var st=v(at,[["__scopeId","data-v-710a8e32"]]);const lt={auth:()=>y(()=>import("./auth.1e7bf0bf.js"),["assets/auth.1e7bf0bf.js","assets/vendor.9ed98674.js"]),default:st};function rt(e){return e.map(t=>{var o;return{path:t.path,component:lt[((o=t.meta)==null?void 0:o.layout)||"default"],children:[V($({},t),{path:""})]}})}const it={class:"border-primary border-1 pt-3 pl-3 flex flex-col bg-white"},ct=["value","placeholder","type"],ut=g({props:{modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},label:{type:String,default:"Label"},type:{type:String,default:"text"}},emits:["update:modelValue"],setup(e,{emit:t}){const o=a=>{const n=a.target;t("update:modelValue",n.value)};return(a,n)=>(r(),u("div",it,[i("label",null,N(e.label),1),i("input",{onInput:o,value:e.modelValue,placeholder:e.placeholder,class:"py-3 focus:outline-none placeholder-gray2",type:e.type},null,40,ct)]))}});const dt=["disabled","type"],pt=g({props:{type:{type:String,default:"primary",validation:e=>["primary","secondary"].includes(e)},disabled:{type:Boolean,default:!1},submit:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const o=p(!1),a=p(),n=d=>{h(d),t("click")},s=p(0),l=p(0),_=p(0),h=async d=>{if(console.log("rippling"),a.value){o.value=!1,await O();const b=Math.max(a.value.clientWidth,a.value.clientHeight),c=b/2;s.value=b,_.value=d.clientX-(a.value.offsetLeft+c),l.value=d.clientY-(a.value.offsetTop+c),o.value=!0}};return(d,b)=>(r(),u("button",{ref:(c,S)=>{S.buttonRef=c,a.value=c},class:x(["px-4 py-2 relative overflow-hidden transition text-p font-bold duration-200 rounded-md focus:outline-none",{[`bg-${e.type}`]:!e.outlined,"bg-yellow":e.type==="primary"&&e.outlined,[`text-${e.type}`]:e.outlined,[`border-${e.type}`]:e.outlined,"border-2":e.outlined,"text-white":!e.outlined,"opacity-38":e.disabled,[`hover:bg-${e.type}`]:e.outlined,"hover:text-white":e.outlined}]),disabled:e.disabled,onClick:n,type:e.submit?"submit":"button"},[re(d.$slots,"default",{},void 0,!0),o.value?(r(),u("span",{key:0,class:x(["ripple",{primary:e.type==="primary",secondary:e.type==="secondary",outlined:!!e.outlined}]),style:E({width:`${s.value}px`,height:`${s.value}px`,top:`${l.value}px`,left:`${_.value}px`})},null,6)):C("",!0)],10,dt))}});var _t=v(pt,[["__scopeId","data-v-8129ccea"]]);const T=e=>(H("data-v-71343722"),e=e(),F(),e),mt={class:"rounded-lg border-2 border-secondary bg-yellow flex flex-col p-6 min-w-1/3 box-shadow"},ht=T(()=>i("span",{class:"text-secondary ml-auto text-p"},[U("I want to "),i("span",{class:"font-bold"},"sign up!")],-1)),ft={class:"flex flex-col px-10"},vt=T(()=>i("h1",{class:"text-secondary text-h1 font-bold text-center my-16"}," Tolstoy ",-1)),yt=["onSubmit"],gt=T(()=>i("small",{class:"text-small ml-auto"},"Forgot password?",-1)),xt=U("Login"),wt=g({emits:["submit"],setup(e,{emit:t}){const o=p(""),a=p(""),n=()=>{t("submit",{email:o.value,password:a.value})};return(s,l)=>{const _=ut,h=_t;return r(),u("div",mt,[ht,i("div",ft,[vt,i("form",{onSubmit:ie(n,["prevent"]),class:"flex flex-col"},[f(_,{label:"E-mail",modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=d=>o.value=d),class:"mb-6 text-p"},null,8,["modelValue"]),f(_,{label:"Password",type:"password",modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=d=>a.value=d),class:"mb-2 text-p"},null,8,["modelValue"]),gt,f(h,{submit:"",type:"secondary",class:"mx-auto px-20 mt-16 mb-10 text-h3"},{default:k(()=>[xt]),_:1})],40,yt)])])}}});var bt=v(wt,[["__scopeId","data-v-71343722"]]);const $t={apiKey:"AIzaSyDrjCFEzNqLZkF78hPCY9kgI7hdtYIg4vU",authDomain:"anna-extract.firebaseapp.com",projectId:"anna-extract",storageBucket:"anna-extract.appspot.com",messagingSenderId:"28742075024",appId:"1:28742075024:web:92d9375d21da6f00294e15"};ce($t);ue();p();var J={};const kt={class:"relative flex flex-col items-center justify-center h-full bg-gray1"},It={key:0,class:"absolute top-0 left-0 w-full h-full bg-gray1"},K=g({setup(e){de();const t=p(!1),o=async({email:n,password:s})=>{t.value=!0,setTimeout(()=>{a.push({path:"/templates"})},200)},a=A();return(n,s)=>{const l=bt;return r(),u("div",kt,[f(l,{onSubmit:o}),f(Y,{name:"fade",mode:"in-out"},{default:k(()=>[t.value?(r(),u("div",It)):C("",!0)]),_:1})])}}});typeof J=="function"&&J(K);var St=v(K,[["__scopeId","data-v-26f36c05"]]);const Lt=[{name:"tests",path:"/tests",component:()=>y(()=>import("./tests.50f270b6.js"),["assets/tests.50f270b6.js","assets/vendor.9ed98674.js","assets/FileUploader.68026ddf.js"]),props:!0},{name:"templates-test",path:"/templates/test",component:()=>y(()=>import("./test.9ceb515a.js"),["assets/test.9ceb515a.js","assets/vendor.9ed98674.js"]),props:!0},{name:"templates-new",path:"/templates/new",component:()=>y(()=>import("./new.8d4c3589.js"),["assets/new.8d4c3589.js","assets/new.ec810f34.css","assets/vendor.9ed98674.js","assets/FileUploader.68026ddf.js"]),props:!0},{name:"templates",path:"/templates",component:()=>y(()=>import("./index.dfaf997f.js"),["assets/index.dfaf997f.js","assets/index.c03414ac.css","assets/vendor.9ed98674.js"]),props:!0},{name:"profile",path:"/profile",component:()=>y(()=>import("./profile.dbdafca2.js"),["assets/profile.dbdafca2.js","assets/vendor.9ed98674.js"]),props:!0},{name:"dashboard",path:"/dashboard",component:()=>y(()=>import("./dashboard.ed77851a.js"),["assets/dashboard.ed77851a.js","assets/vendor.9ed98674.js"]),props:!0},{name:"index",path:"/",component:St,props:!0,meta:{layout:"auth"}}],Vt=rt(Lt),zt=pe({history:_e(),routes:Vt});const W={},w=me(xe),Et={timeout:4e3};w.use(he,Et);w.use(zt);const I=fe(),Ct=[];if(localStorage.getItem("piniaState")){const e=JSON.parse(localStorage.getItem("piniaState")||"{}");for(const t of Ct)e[t]&&(I.state.value=V($({},I.state.value),{[t]:$({},e[t])}))}w.use(I);B(I.state,e=>{localStorage.setItem("piniaState",JSON.stringify(e))},{deep:!0});for(const e in W)w.use(W[e].default);w.mount("#app");export{v as _,_t as a,Je as b};
