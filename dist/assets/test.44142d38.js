import{u as r,a as u}from"./index.52f2cca6.js";import{e as i,i as d,g as v,w as f,j as m,o as p,c as _,b as g}from"./vendor.3ec79051.js";const h={class:"flex flex-col"},y=i({setup(x){const a=d(()=>{var s;return(s=l.value[0])==null?void 0:s.deviceId}),{videoInputs:l}=r({requestPermissions:!0}),n=v();return f(()=>a.value,async s=>{console.log(a.value);const{stream:c,enabled:e,start:o}=u({});e.value=!0;try{console.log(e.value);const t=await o();console.log(t)}catch(t){console.log(t)}setTimeout(()=>{console.log(c.value)},3e3)}),m(()=>{}),(s,c)=>(p(),_("div",h,[g("video",{autoplay:"",controls:"",muted:"",ref:(e,o)=>{o.videoRef=e,n.value=e},id:"testvideo",class:"h-full w-full"},null,512)]))}});export{y as default};
