import{M as S,N as k,m as f,O as w,P as T,J as y,h as U,e as B,Q as L,o as M,c as b,b as q}from"./vendor.fc30f9e0.js";function C(e){return S()?(k(e),!0):!1}const h=typeof window!="undefined",R=e=>typeof e=="string",_=()=>{};function x(e){let t;function u(){return t||(t=e()),t}return u.reset=async()=>{const s=t;t=void 0,s&&await s},u}const W=h?window:void 0;h&&window.document;const D=h?window.navigator:void 0;function N(...e){let t,u,s,n;if(R(e[0])?([u,s,n]=e,t=W):[t,u,s,n]=e,!t)return _;let o=_;const r=y(()=>U(t),a=>{o(),!!a&&(a.addEventListener(u,s,n),o=()=>{a.removeEventListener(u,s,n),o=_})},{immediate:!0,flush:"post"}),i=()=>{r(),o()};return C(i),i}function G(e,t={}){const{controls:u=!1,navigator:s=D}=t,n=Boolean(s&&"permissions"in s);let o;const r=typeof e=="string"?{name:e}:e,i=f(),a=()=>{o&&(i.value=o.state)},l=x(async()=>{if(!!n){if(!o)try{o=await s.permissions.query(r),N(o,"change",a),a()}catch(c){i.value="prompt"}return o}});return l(),u?{state:i,isSupported:n,query:l}:i}function F(e={}){const{navigator:t=D,requestPermissions:u=!1,onUpdated:s}=e,n=f([]),o=w(()=>n.value.filter(d=>d.kind==="videoinput")),r=w(()=>n.value.filter(d=>d.kind==="audioinput")),i=w(()=>n.value.filter(d=>d.kind==="audiooutput"));let a=!1;const l=f(!1);async function c(){!a||(n.value=await t.mediaDevices.enumerateDevices(),s==null||s(n.value))}async function p(){if(!a)return!1;if(l.value)return!0;const{state:d,query:m}=G("camera",{controls:!0});return await m(),d.value!=="granted"&&((await t.mediaDevices.getUserMedia({audio:!0,video:!0})).getTracks().forEach(g=>g.stop()),c()),l.value=!0,l.value}return t&&(a=Boolean(t.mediaDevices&&t.mediaDevices.enumerateDevices),a&&(u&&p(),N(t.mediaDevices,"devicechange",c),c())),{devices:n,ensurePermissions:p,permissionGranted:l,videoInputs:o,audioInputs:r,audioOutputs:i,isSupported:a}}var O;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(O||(O={}));function H(e={}){var t,u,s;const n=f((t=e.enabled)!=null?t:!1),o=f((u=e.autoSwitch)!=null?u:!0),r=f(e.videoDeviceId),i=f(e.audioDeviceId),{navigator:a=D}=e,l=Boolean((s=a==null?void 0:a.mediaDevices)==null?void 0:s.getUserMedia),c=T();function p(v){return v.value==="none"||v.value===!1?!1:v.value==null?!0:{deviceId:v.value}}async function d(){if(!(!l||c.value))return c.value=await a.mediaDevices.getUserMedia({video:p(r),audio:p(i)}),c.value}async function m(){var v;(v=c.value)==null||v.getTracks().forEach(P=>P.stop()),c.value=void 0}function I(){m(),n.value=!1}async function g(){return await d(),c.value&&(n.value=!0),c.value}async function E(){return m(),await g()}return y(n,v=>{v?d():m()},{immediate:!0}),y([r,i],()=>{o.value&&c.value&&E()},{immediate:!0}),{isSupported:l,stream:c,start:g,stop:I,restart:E,videoDeviceId:r,audioDeviceId:i,enabled:n,autoSwitch:o}}const j={class:"flex flex-col"},Q=B({setup(e){const t=w(()=>{var n;return(n=u.value[0])==null?void 0:n.deviceId}),{videoInputs:u}=F({requestPermissions:!0}),s=f();return y(()=>t.value,async n=>{console.log(t.value);const{stream:o,enabled:r,start:i}=H({});r.value=!0;try{console.log(r.value);const a=await i();console.log(a)}catch(a){console.log(a)}setTimeout(()=>{console.log(o.value)},3e3)}),L(()=>{}),(n,o)=>(M(),b("div",j,[q("video",{autoplay:"",controls:"",muted:"",ref:(r,i)=>{i.videoRef=r,s.value=r},id:"testvideo",class:"h-full w-full"},null,512)]))}});export{Q as default};