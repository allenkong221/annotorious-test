import{e as r,o as c,c as _,A as m,f as u,b as e,a as o,y as d,m as f,C as x}from"./vendor.9ed98674.js";import{_ as y,b as h,a as v}from"./index.cc73e5a6.js";const b=r({emits:["click"],setup(l,{emit:s}){return(n,t)=>(c(),_("div",{onClick:t[0]||(t[0]=a=>s("click")),class:"template-card border-dashed border-2 border-secondary rounded-lg h-64 w-64 flex justify-center items-center cursor-pointer bg-gray1 hover:bg-gray2 hover:bg-opacity-25 transition"},[m(n.$slots,"default",{},void 0,!0)]))}});var g=y(b,[["__scopeId","data-v-78c9f770"]]);const C={cass:"flex flex-col"},k={class:"flex items-center justify-between"},w={class:"flex items-center mb-8"},j=e("h1",{class:"text-h1 font-extrabold"},"Templates",-1),N=x("Upload File"),T=e("p",{class:"text-p"}," Create a new template or use an existing template to extract data from your documents. ",-1),$={class:"flex mt-8"},B=e("span",{class:"text-h4 font-bold text-secondary"}," + New Template ",-1),F=r({setup(l){const s=u();return(n,t)=>{const a=h,i=v,p=g;return c(),_("div",C,[e("div",k,[e("div",w,[o(a,{class:"text-h1 text-secondary mr-2"}),j]),o(i,{type:"secondary",disabled:"",class:"my-auto"},{default:d(()=>[N]),_:1})]),T,e("div",$,[o(p,{onClick:t[0]||(t[0]=V=>f(s).push("/templates/new"))},{default:d(()=>[B]),_:1})])])}}});export{F as default};