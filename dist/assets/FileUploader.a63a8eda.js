import{a as p}from"./index.ff566e1b.js";import{e as r,l as c,o as f,c as d,a as m,w as g,v as x,t as _,b as k,F as y}from"./vendor.90ce9f07.js";const b=["multiple"],B=r({props:{multiple:{type:Boolean,default:!1},buttonText:{type:String,required:!0}},emits:["upload","click"],setup(l,{emit:o}){const s=c(),a=i=>{const e=i.target;e.files&&e.files.length&&o("upload",e.files)};return(i,e)=>{const u=p;return f(),d(y,null,[m(u,{ref:(t,n)=>{n.buttonRef=t},type:"secondary",class:"text-lg",onClick:e[0]||(e[0]=t=>s.value.click())},{default:g(()=>[x(_(l.buttonText),1)]),_:1},512),k("input",{ref:(t,n)=>{n.inputRef=t,s.value=t},type:"file",onChange:a,multiple:l.multiple,onClick:e[1]||(e[1]=t=>o("click")),class:"hidden"},null,40,b)],64)}}});export{B as _};
