import{_ as p}from"./index.8e2ba648.js";import{e as r,l as c,o as f,c as d,a as m,B as _,C as g,t as x,b,F as k}from"./vendor.618bcff5.js";const y=["multiple"],v=r({props:{multiple:{type:Boolean,default:!1},buttonText:{type:String,required:!0}},emits:["upload","click"],setup(l,{emit:o}){const s=c(),a=i=>{const e=i.target;e.files&&e.files.length&&o("upload",e.files)};return(i,e)=>{const u=p;return f(),d(k,null,[m(u,{ref:(t,n)=>{n.buttonRef=t},type:"secondary",class:"text-lg",onClick:e[0]||(e[0]=t=>s.value.click())},{default:_(()=>[g(x(l.buttonText),1)]),_:1},512),b("input",{ref:(t,n)=>{n.inputRef=t,s.value=t},type:"file",onChange:a,multiple:l.multiple,onClick:e[1]||(e[1]=t=>o("click")),class:"hidden"},null,40,y)],64)}}});export{v as _};
