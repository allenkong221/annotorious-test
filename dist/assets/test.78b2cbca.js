import{u as r,a as u}from"./index.aa4600e3.js";import{e as i,i as d,g as v,w as m,j as f,o as p,c as _,d as g}from"./vendor.a3c82905.js";const h={class:"flex flex-col"},y=i({setup(x){const t=d(()=>{var s;return(s=l.value[0])==null?void 0:s.deviceId}),{videoInputs:l}=r({requestPermissions:!0}),n=v();return m(()=>t.value,async s=>{console.log(t.value);const{stream:c,enabled:e,start:o}=u({});e.value=!0;try{console.log(e.value);const a=await o();console.log(a)}catch(a){console.log(a)}setTimeout(()=>{console.log(c.value)},3e3)}),f(()=>{}),(s,c)=>(p(),_("div",h,[g("video",{autoplay:"",controls:"",muted:"",ref:(e,o)=>{o.videoRef=e,n.value=e},id:"testvideo",class:"h-full w-full"},null,512)]))}});export{y as default};
