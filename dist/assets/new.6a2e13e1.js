import{a as u}from"./index.6cc4ddd6.js";import{u as f,_ as x,a as h,b as y,c as b}from"./BackButton.afb76dee.js";import{e as g,o as s,c as o,d as e,a as t,m as n,y as v}from"./vendor.a3c82905.js";import"./index.aa4600e3.js";import"./FileUploader.8cc4164a.js";const w={class:"flex flex-col h-full"},k={class:"flex mb-10"},j={class:"flex h-full"},B={key:0,class:"w-40/100 flex flex-col pl-5"},N=e("h5",{class:"text-h2 font-bold mb-4 text-gray4"}," 1. Upload Sample Documents ",-1),C=e("p",{class:"text-gray4 text-p mb-4"}," As the first step, upload a minimum of 5 documents with the same format. We recommend 10 or more. ",-1),S=[N,C],T={key:1,class:"w-3/10 flex flex-col pl-5"},U=e("h5",{class:"text-xl mb-4"},"Upload Sample Document",-1),$=e("span",{class:"text-gray-500 text-lg mb-4"}," Alright, you successfully uploaded an image. Now check if you selected the correct image and we can move on! ",-1),A={class:"flex items-center justify-center"},D=e("span",null,"Next",-1),H=g({setup(V){const{steps:l,newTemplateImage:_,newTemplateStep:c}=f();return(E,a)=>{const m=x,i=h,p=y,d=b,r=u;return s(),o("div",w,[e("div",k,[t(m,{class:"mr-16"}),t(i,{steps:n(l),"active-index":n(c)},null,8,["steps","active-index"])]),e("div",j,[t(p,{class:"w-60/100 h-full"}),n(_)?(s(),o("div",T,[U,$,t(r,{type:"primary",onClick:a[0]||(a[0]=F=>c.value=1)},{default:v(()=>[e("div",A,[D,t(d)])]),_:1})])):(s(),o("div",B,S))])])}}});export{H as default};
