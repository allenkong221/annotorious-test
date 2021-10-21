import{e as z,g as w,o as a,p as O,y,M as Z,R as ee,d as e,A as H,T as te,c as d,w as K,h as ne,F as U,k as le,l as ce,m as n,t as V,B as oe,z as E,a as l,C as F,n as re,G as ie}from"./vendor.06646148.js";import{o as se}from"./index.b1715cc3.js";import{_ as q,a as Q,b as ue}from"./index.d9d5f5d8.js";import{u as X,d as ae,_ as de,a as _e,b as me,c as pe}from"./BackButton.ed7d318a.js";import"./FileUploader.916ebae9.js";const ve={class:"fixed top-0 left-0 w-full h-full bg-gray4 bg-opacity-50 z-5 flex justify-center items-center"},he=z({props:{modelValue:{type:Boolean,default:!1}},emits:["close","update:modelValue"],setup(_,{emit:s}){const i=_,u=w(null);se(u,()=>{C()});const C=()=>{i.modelValue&&(s("update:modelValue",!1),s("close"))};return(A,h)=>(a(),O(te,{name:"grow"},{default:y(()=>[Z(e("div",ve,[e("div",{ref:(m,c)=>{c.modalContent=m,u.value=m}},[H(A.$slots,"default",{},void 0,!0)],512)],512),[[ee,_.modelValue]])]),_:3}))}});var fe=q(he,[["__scopeId","data-v-450d55eb"]]);const xe={},ge={class:"simple-card"};function ye(_,s){return a(),d("div",ge,[H(_.$slots,"default",{},void 0,!0)])}var be=q(xe,[["render",ye],["__scopeId","data-v-b693141c"]]);const $e={class:"fixed top-0 left-0 w-full h-full bg-gray4 bg-opacity-50 z-10 flex justify-center items-center"},we=z({props:{modelValue:{type:Boolean,default:!1}},emits:["close","update:modelValue"],setup(_,{emit:s}){const i=_,u=w(null);se(u,()=>{C()});const C=()=>{i.modelValue&&(s("update:modelValue",!1),s("close"))};return(A,h)=>(a(),O(te,{name:"grow"},{default:y(()=>[Z(e("div",$e,[e("div",{ref:(m,c)=>{c.modalContent=m,u.value=m},class:"flex w-full justify-center"},[H(A.$slots,"default",{},void 0,!0)],512)],512),[[ee,_.modelValue]])]),_:3}))}});var Ce=q(we,[["__scopeId","data-v-3f69ff2b"]]);const ke={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Me=e("path",{d:"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z",fill:"currentColor"},null,-1),Ae=[Me];function Te(_,s){return a(),d("svg",ke,Ae)}var Ve={name:"mdi-trash",render:Te};const Ne={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},je=e("path",{d:"M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z",fill:"currentColor"},null,-1),Se=[je];function Be(_,s){return a(),d("svg",Ne,Se)}var Le={name:"bx-bxs-save",render:Be};const Re={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ie=e("path",{d:"M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z",fill:"currentColor"},null,-1),ze=[Ie];function Oe(_,s){return a(),d("svg",Re,ze)}var Fe={name:"mdi-pencil",render:Oe};const De={class:"flex flex-col"},Ee=["onMouseenter","onMouseleave","onClick"],Je={class:"mr-2"},Ye=["id","value","onInput","disabled"],He={class:"flex"},Ue={class:"bg-white w-100 rounded-lg relative flex flex-col p-6"},qe=e("h5",{class:"text-h3 text-gray4 font-semibold mb-2"}," Are you sure you want to delete this label? ",-1),Ge={class:"text-p text-gray4 mb-2"},We={class:"flex justify-between"},Pe=F("Yes"),Ke=F("No"),Qe={class:"bg-white w-100 rounded-lg relative flex flex-col p-6"},Xe=e("h5",{class:"text-h3 text-gray4 font-semibold mb-2"}," Are you sure you want to edit this label? ",-1),Ze={class:"text-p text-gray4 mb-2"},et={class:"flex justify-between"},tt=F("Yes"),ot=F("No"),st=z({setup(_){const{templateAnnotations:s,selectedTemplateIndex:i,templateRawAnnotations:u,newTemplateStep:C}=X(),{removeAnnotation:A,selectedAnnotationId:h,selectAnnotation:m,annotations:c}=ae(),k=w(""),b=o=>{var t;(t=document.querySelector(`[data-id="${o}"]`))==null||t.classList.add("hovered"),k.value=o},J=o=>{var t;(t=document.querySelector(`[data-id="${o}"]`))==null||t.classList.remove("hovered"),k.value=""},R=w(),N=w(!1),D=o=>{R.value=s.value[i.value].find(t=>t.id===o),N.value=!0},G=o=>{s.value.forEach((t,T)=>{const x=t.findIndex(L=>L.name===o);T===i.value?A(t[x].id):(t.splice(x,1),u.value[T].splice(x,1))}),N.value=!1},$=w([]),M=w([]);K(C,()=>{$.value=s.value[i.value].map(o=>o.name),M.value=[];for(let o=0;o<s.value.length;o++)M.value.push(!1)}),K(i,o=>{$.value=s.value[o].map(t=>t.name),M.value=[];for(let t=0;t<s.value.length;t++)M.value.push(!1)}),K(c,()=>{$.value=s.value[i.value].map(o=>o.name)},{deep:!0});const S=w(!1),B=w(0),W=(o,t)=>{const T=o.target;for(let x=0;x<s.value.length;x++)$.value[t]=T.value},P=o=>{S.value=!0,B.value=o},p=o=>{for(let t=0;t<s.value.length;t++)s.value[t][o].name=$.value[o];c.value[o].name=$.value[o],B.value=0,S.value=!1},f=w([]);ne(()=>{f.value=[]});const j=async o=>{await re(),f.value[o].focus(),M.value[o]=!0};return(o,t)=>{const T=Fe,x=Le,L=Ve,I=Q,Y=Ce;return a(),d("div",De,[(a(!0),d(U,null,le(n(s)[n(i)],(r,v)=>(a(),d("div",{class:ce(["flex p-2 border-2 justify-between cursor-pointer hover:border-secondary transition mb-3 rounded-md",{["border-gray2"]:n(h)!==r.id,["border-secondary"]:n(h)===r.id}]),onMouseenter:g=>b(r.id),onMouseleave:g=>J(r.id),onClick:g=>n(m)(r.id)},[e("p",Je,V(v+1)+".",1),e("input",{ref:g=>{g&&(f.value[v]=g)},id:`label_${v}`,value:$.value[v],onInput:g=>W(g,v),class:"flex-grow focus:outline-none",disabled:!M.value[v]},null,40,Ye),e("div",He,[M.value[v]?M.value[v]&&$.value[v]!==r.name?(a(),O(x,{key:1,onClick:g=>P(v),class:"text-gray3 transition hover:text-gray4 cursor-pointer"},null,8,["onClick"])):E("",!0):(a(),O(T,{key:0,onClick:oe(g=>j(v),["stop"]),class:"text-gray3 transition hover:text-gray4 cursor-pointer"},null,8,["onClick"])),n(h)===r.id||k.value&&k.value===r.id?(a(),O(L,{key:2,onClick:oe(g=>D(r.id),["stop"]),class:"text-gray3 transition hover:text-gray4 cursor-pointer"},null,8,["onClick"])):E("",!0)])],42,Ee))),256)),l(Y,{"model-value":N.value,onClose:t[2]||(t[2]=r=>N.value=!1)},{default:y(()=>{var r;return[e("div",Ue,[qe,e("p",Ge,' Deleting this label means deleting "'+V((r=R.value)==null?void 0:r.name)+'" values from every single document for this template. ',1),e("div",We,[l(I,{outlined:"",type:"secondary",class:"w-47/100",onClick:t[0]||(t[0]=v=>{var g;return G((g=R.value)==null?void 0:g.name)})},{default:y(()=>[Pe]),_:1}),l(I,{type:"secondary",class:"w-47/100",onClick:t[1]||(t[1]=v=>N.value=!1)},{default:y(()=>[Ke]),_:1})])])]}),_:1},8,["model-value"]),l(Y,{"model-value":S.value,onClose:t[5]||(t[5]=r=>S.value=!1)},{default:y(()=>{var r;return[e("div",Qe,[Xe,e("p",Ze,' Editing this label means changing the labels "'+V((r=n(c)[B.value])==null?void 0:r.name)+'" into "'+V($.value[B.value])+'"" from every single document for this template. ',1),e("div",et,[l(I,{outlined:"",type:"secondary",class:"w-47/100",onClick:t[3]||(t[3]=v=>p(B.value))},{default:y(()=>[tt]),_:1}),l(I,{type:"secondary",class:"w-47/100",onClick:t[4]||(t[4]=v=>S.value=!1)},{default:y(()=>[ot]),_:1})])])]}),_:1},8,["model-value"])])}}});const at={class:"bg-white w-95vw h-90vh rounded-lg relative flex flex-col p-12"},nt={class:"flex mb-5"},lt={class:"flex h-9/10 justify-between"},ct={key:0,class:"w-38/100 flex flex-col pl-12"},rt=e("h5",{class:"text-h2 font-bold mb-4 text-gray4"}," 1. Upload Sample Documents ",-1),it=e("p",{class:"text-gray4 text-p mb-4"}," As the first step, upload a minimum of 5 documents with the same format. We recommend 10 or more. ",-1),ut={class:"flex items-center justify-center"},dt=e("span",null,"Next",-1),_t=e("h5",{class:"text-h2 font-bold mb-4 text-gray4"}," 2. Label the Documents ",-1),mt={key:0,class:"text-gray4 text-p mb-4"},pt={key:1,class:"text-gray4 text-p mb-4"},vt={class:"mt-auto flex flex-col"},ht=e("p",{class:"text-p text-gray4 mb-2"}," Once you have finished labeling this document, click Next. ",-1),ft=e("h5",{class:"text-h2 font-bold mb-4 text-gray4"}," 3. Verify Retrieved Values ",-1),xt=e("p",{class:"text-gray4 text-p mb-2"}," For each label, please verify if the values are correct. This will improve the accuracy of the model and save you more time in the future. ",-1),gt={class:"text-gray4 text-p mb-4"},yt=z({setup(_){const s=w(6),i=w(10),{showNewTemplateModal:u,steps:C,newTemplateImage:A,newTemplateStep:h,templateImages:m,templateAnnotations:c,templateRawAnnotations:k,selectedTemplateIndex:b,firstTemplateReady:J,templateFiles:R}=X(),{getRawAnnotations:N,annotations:D,toggleAnnotations:G,processedAnnotations:$}=ae(),M=ie(),S=()=>{if(m.value.length<5){M.warning("Please upload at least 5 samples before proceeding");return}h.value=1;const p=m.value.length;c.value=[],k.value=[];for(let f=0;f<p;f++)c.value.push([]),k.value.push([])},B=async()=>{if(b.value===0&&!J.value){J.value=!0;for(let p=0;p<c.value.length;p++)c.value[p]=JSON.parse(JSON.stringify(D.value)),k.value[p]=N()}if(b.value===m.value.length-1){await W(),h.value=2;return}P(b.value+1)},W=async()=>{const p=new FormData;for(const j of R.value)p.append("files",j);p.append("annotations",JSON.stringify(c.value));const f={message:[{price:"$ 23.21",cycle:"1/20"},{price:"$ 23.21",cycle:"1/20"},{price:"$ 23.21",cycle:"1/20"},{price:"$ 23.21",cycle:"1/20"},{price:"$ 23.21",cycle:"1/20"},{price:"$ 23.21",cycle:"1/20"}]};R.value.forEach((j,o)=>{c.value[o].forEach((t,T)=>{const x=f.message[o],L={fileIndex:o,name:t.name,id:t.id,top:t.top,left:t.left,width:t.width,height:t.height,ocrValue:x[t.name]};$.value.push(L)})}),console.log($.value),G(),b.value=0},P=p=>{const f=b.value,j=N();k.value[f]=j,c.value[f]=JSON.parse(JSON.stringify(D.value)),b.value=p,D.value=JSON.parse(JSON.stringify(c.value[p]))};return(p,f)=>{const j=de,o=_e,t=me,T=pe,x=Q,L=st,I=be,Y=fe;return a(),O(Y,{"model-value":n(u),onClose:f[0]||(f[0]=r=>u.value=!1)},{default:y(()=>[e("div",at,[e("div",nt,[l(j,{class:"mr-16"}),l(o,{steps:n(C),"active-index":n(h)},null,8,["steps","active-index"])]),e("div",lt,[l(t,{class:"w-62/100"}),n(A)?E("",!0):(a(),d("div",ct,[n(h)===0?(a(),d(U,{key:0},[rt,it,l(x,{type:"primary",onClick:S},{default:y(()=>[e("div",ut,[dt,l(T)])]),_:1})],64)):n(h)===1?(a(),d(U,{key:1},[_t,n(b)===0?(a(),d("p",mt," Create a bounding box around each text area you want to capture and give it a label. Once you've finished labeling, click 'Next'. ")):n(b)!==0?(a(),d("p",pt,V(n(b)===n(m).length-1?"Congrats! Now we're off to the verification step!":`Great job! You've labelled your first document. For the remaining
              documents, adjust each bounding box to ensure the texts are
              covered.`),1)):E("",!0),l(L),e("div",vt,[ht,l(x,{outlined:"",onClick:B},{default:y(()=>[F(V(n(b)===n(m).length-1?"Submit":"Next"),1)]),_:1})])],64)):n(h)===2?(a(),d(U,{key:2},[ft,xt,e("p",gt," There are "+V(s.value)+" labels x "+V(i.value)+" documents = "+V(s.value*i.value)+" values to check in total. ",1),l(I)],64)):E("",!0)]))])])]),_:1},8,["model-value"])}}});const bt=z({emits:["click"],setup(_,{emit:s}){return(i,u)=>(a(),d("div",{onClick:u[0]||(u[0]=C=>s("click")),class:"template-card border-dashed border-2 border-secondary rounded-lg h-100 w-100 flex justify-center items-center cursor-pointer bg-gray1 hover:bg-gray2 hover:bg-opacity-25 transition"},[H(i.$slots,"default",{},void 0,!0)]))}});var $t=q(bt,[["__scopeId","data-v-66053c66"]]);const wt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 15 15"},Ct=e("g",{fill:"none"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.292.049a.5.5 0 0 1 .535.077L12.86 7.95a.5.5 0 0 1-.306.878l-3.334.147l1.931 4.244a.5.5 0 0 1-.247.662l-2.153.98a.5.5 0 0 1-.662-.247L6.153 10.37l-2.29 2.416A.5.5 0 0 1 3 12.44V.504a.5.5 0 0 1 .292-.455zM4 1.599v9.589l1.938-2.044a.5.5 0 0 1 .818.137l2.035 4.463l1.242-.566l-2.031-4.463a.5.5 0 0 1 .433-.707l2.82-.124L4 1.599z",fill:"currentColor"})],-1),kt=[Ct];function Mt(_,s){return a(),d("svg",wt,kt)}var At={name:"radix-icons-cursor-arrow",render:Mt};const Tt={cass:"flex flex-col"},Vt={class:"flex items-center justify-between"},Nt={class:"flex items-center mb-8"},jt=e("h1",{class:"text-h1 font-extrabold"},"Templates",-1),St=F("Upload File"),Bt=e("p",{class:"text-p"}," Create a new template or use an existing template to extract data from your documents. ",-1),Lt={class:"flex mt-8"},Rt={class:"flex flex-col justify-center items-center w-full h-full group hover:bg-secondary transition"},It={class:"flex items-center mb-2"},zt=e("span",{class:"text-p text-gray3 uppercase group-hover:text-white transition"},"Click Here",-1),Ot=e("span",{class:"text-h3 font-semibold text-center"},[e("span",{class:"text-error group-hover:text-white transition"},"Create "),e("span",{class:"text-black group-hover:text-white transition"},"a "),e("span",{class:"text-primary group-hover:text-white transition"},"new "),e("span",{class:"text-secondary group-hover:text-white transition"},"template")],-1),Ht=z({setup(_){const{showNewTemplateModal:s}=X();return(i,u)=>{const C=ue,A=Q,h=At,m=$t,c=yt;return a(),d("div",Tt,[e("div",Vt,[e("div",Nt,[l(C,{class:"text-h1 text-secondary mr-2"}),jt]),l(A,{type:"secondary",disabled:"",class:"my-auto"},{default:y(()=>[St]),_:1})]),Bt,e("div",Lt,[l(m,{onClick:u[0]||(u[0]=k=>s.value=!0)},{default:y(()=>[e("div",Rt,[e("div",It,[l(h,{class:"text-secondary text-p mr-1 group-hover:text-white transition"}),zt]),Ot])]),_:1})]),l(c)])}}});export{Ht as default};
