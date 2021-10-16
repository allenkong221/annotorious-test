import{e as xe,g as G,o as Se,c as Ce,b as O,a as Y,t as Re,L as Oe,M as _e,y as Ne,C as ge}from"./vendor.9ed98674.js";import{_ as Ae}from"./FileUploader.68026ddf.js";import{a as Te}from"./index.cc73e5a6.js";var D={exports:{}},Q=function(e,r){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(r,n)}},$e=Q,w=Object.prototype.toString;function q(t){return w.call(t)==="[object Array]"}function k(t){return typeof t=="undefined"}function Ue(t){return t!==null&&!k(t)&&t.constructor!==null&&!k(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Pe(t){return w.call(t)==="[object ArrayBuffer]"}function Be(t){return typeof FormData!="undefined"&&t instanceof FormData}function Le(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function je(t){return typeof t=="string"}function De(t){return typeof t=="number"}function Z(t){return t!==null&&typeof t=="object"}function N(t){if(w.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function qe(t){return w.call(t)==="[object Date]"}function ke(t){return w.call(t)==="[object File]"}function Fe(t){return w.call(t)==="[object Blob]"}function ee(t){return w.call(t)==="[object Function]"}function Me(t){return Z(t)&&ee(t.pipe)}function Ie(t){return typeof URLSearchParams!="undefined"&&t instanceof URLSearchParams}function He(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Je(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function F(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),q(t))for(var r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function M(){var t={};function e(n,a){N(t[a])&&N(n)?t[a]=M(t[a],n):N(n)?t[a]=M({},n):q(n)?t[a]=n.slice():t[a]=n}for(var r=0,s=arguments.length;r<s;r++)F(arguments[r],e);return t}function Ve(t,e,r){return F(e,function(n,a){r&&typeof n=="function"?t[a]=$e(n,r):t[a]=n}),t}function ze(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var p={isArray:q,isArrayBuffer:Pe,isBuffer:Ue,isFormData:Be,isArrayBufferView:Le,isString:je,isNumber:De,isObject:Z,isPlainObject:N,isUndefined:k,isDate:qe,isFile:ke,isBlob:Fe,isFunction:ee,isStream:Me,isURLSearchParams:Ie,isStandardBrowserEnv:Je,forEach:F,merge:M,extend:Ve,trim:He,stripBOM:ze},x=p;function te(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var re=function(e,r,s){if(!r)return e;var n;if(s)n=s(r);else if(x.isURLSearchParams(r))n=r.toString();else{var a=[];x.forEach(r,function(l,d){l===null||typeof l=="undefined"||(x.isArray(l)?d=d+"[]":l=[l],x.forEach(l,function(f){x.isDate(f)?f=f.toISOString():x.isObject(f)&&(f=JSON.stringify(f)),a.push(te(d)+"="+te(f))}))}),n=a.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},We=p;function g(){this.handlers=[]}g.prototype.use=function(e,r,s){return this.handlers.push({fulfilled:e,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};g.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};g.prototype.forEach=function(e){We.forEach(this.handlers,function(s){s!==null&&e(s)})};var Xe=g,Ke=p,Ge=function(e,r){Ke.forEach(e,function(n,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[a])})},ne=function(e,r,s,n,a){return e.config=r,s&&(e.code=s),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Ye=ne,se=function(e,r,s,n,a){var o=new Error(e);return Ye(o,r,s,n,a)},Qe=se,Ze=function(e,r,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):r(Qe("Request failed with status code "+s.status,s.config,null,s.request,s))},A=p,et=A.isStandardBrowserEnv()?function(){return{write:function(r,s,n,a,o,u){var l=[];l.push(r+"="+encodeURIComponent(s)),A.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),A.isString(a)&&l.push("path="+a),A.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),tt=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},rt=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},nt=tt,st=rt,at=function(e,r){return e&&!nt(r)?st(e,r):r},I=p,it=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ot=function(e){var r={},s,n,a;return e&&I.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),s=I.trim(u.substr(0,a)).toLowerCase(),n=I.trim(u.substr(a+1)),s){if(r[s]&&it.indexOf(s)>=0)return;s==="set-cookie"?r[s]=(r[s]?r[s]:[]).concat([n]):r[s]=r[s]?r[s]+", "+n:n}}),r},ae=p,ut=ae.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),s;function n(a){var o=a;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=n(window.location.href),function(o){var u=ae.isString(o)?n(o):o;return u.protocol===s.protocol&&u.host===s.host}}():function(){return function(){return!0}}();function H(t){this.message=t}H.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};H.prototype.__CANCEL__=!0;var T=H,$=p,lt=Ze,ft=et,ct=re,dt=at,ht=ot,pt=ut,J=se,mt=P,vt=T,ie=function(e){return new Promise(function(s,n){var a=e.data,o=e.headers,u=e.responseType,l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}$.isFormData(a)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+h)}var R=dt(e.baseURL,e.url);i.open(e.method.toUpperCase(),ct(R,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function X(){if(!!i){var v="getAllResponseHeaders"in i?ht(i.getAllResponseHeaders()):null,E=!u||u==="text"||u==="json"?i.responseText:i.response,b={data:E,status:i.status,statusText:i.statusText,headers:v,config:e,request:i};lt(function(j){s(j),d()},function(j){n(j),d()},b),i=null}}if("onloadend"in i?i.onloadend=X:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(X)},i.onabort=function(){!i||(n(J("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(J("Network Error",e,null,i)),i=null},i.ontimeout=function(){var E="timeout of "+e.timeout+"ms exceeded",b=e.transitional||mt.transitional;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),n(J(E,e,b.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},$.isStandardBrowserEnv()){var K=(e.withCredentials||pt(R))&&e.xsrfCookieName?ft.read(e.xsrfCookieName):void 0;K&&(o[e.xsrfHeaderName]=K)}"setRequestHeader"in i&&$.forEach(o,function(E,b){typeof a=="undefined"&&b.toLowerCase()==="content-type"?delete o[b]:i.setRequestHeader(b,E)}),$.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(v){!i||(n(!v||v&&v.type?new vt("canceled"):v),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null),i.send(a)})},c=p,oe=Ge,yt=ne,bt={"Content-Type":"application/x-www-form-urlencoded"};function ue(t,e){!c.isUndefined(t)&&c.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function wt(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=ie),t}function Et(t,e,r){if(c.isString(t))try{return(e||JSON.parse)(t),c.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(t)}var U={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:wt(),transformRequest:[function(e,r){return oe(r,"Accept"),oe(r,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(ue(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||r&&r["Content-Type"]==="application/json"?(ue(r,"application/json"),Et(e)):e}],transformResponse:[function(e){var r=this.transitional||U.transitional,s=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?yt(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){U.headers[e]={}});c.forEach(["post","put","patch"],function(e){U.headers[e]=c.merge(bt)});var P=U,xt=p,St=P,Ct=function(e,r,s){var n=this||St;return xt.forEach(s,function(o){e=o.call(n,e,r)}),e},le=function(e){return!!(e&&e.__CANCEL__)},fe=p,V=Ct,Rt=le,Ot=P,_t=T;function z(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new _t("canceled")}var Nt=function(e){z(e),e.headers=e.headers||{},e.data=V.call(e,e.data,e.headers,e.transformRequest),e.headers=fe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),fe.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Ot.adapter;return r(e).then(function(n){return z(e),n.data=V.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Rt(n)||(z(e),n&&n.response&&(n.response.data=V.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},m=p,ce=function(e,r){r=r||{};var s={};function n(i,f){return m.isPlainObject(i)&&m.isPlainObject(f)?m.merge(i,f):m.isPlainObject(f)?m.merge({},f):m.isArray(f)?f.slice():f}function a(i){if(m.isUndefined(r[i])){if(!m.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],r[i])}function o(i){if(!m.isUndefined(r[i]))return n(void 0,r[i])}function u(i){if(m.isUndefined(r[i])){if(!m.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,r[i])}function l(i){if(i in r)return n(e[i],r[i]);if(i in e)return n(void 0,e[i])}var d={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return m.forEach(Object.keys(e).concat(Object.keys(r)),function(f){var h=d[f]||a,R=h(f);m.isUndefined(R)&&h!==l||(s[f]=R)}),s},de={version:"0.22.0"},gt=de.version,W={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){W[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});var he={};W.transitional=function(e,r,s){function n(a,o){return"[Axios v"+gt+"] Transitional option '"+a+"'"+o+(s?". "+s:"")}return function(a,o,u){if(e===!1)throw new Error(n(o," has been removed"+(r?" in "+r:"")));return r&&!he[o]&&(he[o]=!0,console.warn(n(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,o,u):!0}};function At(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var s=Object.keys(t),n=s.length;n-- >0;){var a=s[n],o=e[a];if(o){var u=t[a],l=u===void 0||o(u,a,t);if(l!==!0)throw new TypeError("option "+a+" must be "+l);continue}if(r!==!0)throw Error("Unknown option "+a)}}var Tt={assertOptions:At,validators:W},pe=p,$t=re,me=Xe,ve=Nt,B=ce,ye=Tt,S=ye.validators;function _(t){this.defaults=t,this.interceptors={request:new me,response:new me}}_.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=B(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;r!==void 0&&ye.assertOptions(r,{silentJSONParsing:S.transitional(S.boolean),forcedJSONParsing:S.transitional(S.boolean),clarifyTimeoutError:S.transitional(S.boolean)},!1);var s=[],n=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(e)===!1||(n=n&&h.synchronous,s.unshift(h.fulfilled,h.rejected))});var a=[];this.interceptors.response.forEach(function(h){a.push(h.fulfilled,h.rejected)});var o;if(!n){var u=[ve,void 0];for(Array.prototype.unshift.apply(u,s),u=u.concat(a),o=Promise.resolve(e);u.length;)o=o.then(u.shift(),u.shift());return o}for(var l=e;s.length;){var d=s.shift(),i=s.shift();try{l=d(l)}catch(f){i(f);break}}try{o=ve(l)}catch(f){return Promise.reject(f)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};_.prototype.getUri=function(e){return e=B(this.defaults,e),$t(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};pe.forEach(["delete","get","head","options"],function(e){_.prototype[e]=function(r,s){return this.request(B(s||{},{method:e,url:r,data:(s||{}).data}))}});pe.forEach(["post","put","patch"],function(e){_.prototype[e]=function(r,s,n){return this.request(B(n||{},{method:e,url:r,data:s}))}});var Ut=_,Pt=T;function C(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(s){if(!!r._listeners){var n,a=r._listeners.length;for(n=0;n<a;n++)r._listeners[n](s);r._listeners=null}}),this.promise.then=function(s){var n,a=new Promise(function(o){r.subscribe(o),n=o}).then(s);return a.cancel=function(){r.unsubscribe(n)},a},t(function(n){r.reason||(r.reason=new Pt(n),e(r.reason))})}C.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};C.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};C.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};C.source=function(){var e,r=new C(function(n){e=n});return{token:r,cancel:e}};var Bt=C,Lt=function(e){return function(s){return e.apply(null,s)}},jt=function(e){return typeof e=="object"&&e.isAxiosError===!0},be=p,Dt=Q,L=Ut,qt=ce,kt=P;function we(t){var e=new L(t),r=Dt(L.prototype.request,e);return be.extend(r,L.prototype,e),be.extend(r,e),r.create=function(n){return we(qt(t,n))},r}var y=we(kt);y.Axios=L;y.Cancel=T;y.CancelToken=Bt;y.isCancel=le;y.VERSION=de.version;y.all=function(e){return Promise.all(e)};y.spread=Lt;y.isAxiosError=jt;D.exports=y;D.exports.default=y;var Ft=D.exports;const Mt={class:"flex"},It={class:"mr-20 flex flex-col items-center"},Ht={class:"text-p"},Jt={class:"flex flex-col flex-grow"},Vt=O("h5",{class:"text-h3"},"Annotations to send",-1),zt=ge("Send to API"),Gt=xe({setup(t){const e=G(""),r=G(),s=async()=>{try{const a=await Ft.post("/api/testingapi",{name:"Rafael",lastName:"Takei"});console.log(a)}catch{}},n=a=>{r.value=a};return(a,o)=>{var d;const u=Ae,l=Te;return Se(),Ce("div",Mt,[O("div",It,[Y(u,{"button-text":"upload files",multiple:"",onUpload:n}),O("p",Ht,"Number of uploaded files: "+Re(((d=r.value)==null?void 0:d.length)||0),1)]),O("div",Jt,[Vt,Oe(O("textarea",{"onUpdate:modelValue":o[0]||(o[0]=i=>e.value=i),rows:"20",class:"border-1 border-secondary focus:outline-none"},null,512),[[_e,e.value]]),Y(l,{type:"secondary",class:"ml-auto mt-2",onClick:s},{default:Ne(()=>[zt]),_:1})])])}}});export{Gt as default};
