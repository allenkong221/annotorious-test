function yr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const $a="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ba=yr($a);function Ds(t){return!!t||t===""}function br(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ie(r)?Va(r):br(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ie(t))return t;if(se(t))return t}}const ja=/;(?![^(]*\))/g,Ha=/:(.+)/;function Va(t){const e={};return t.split(ja).forEach(n=>{if(n){const r=n.split(Ha);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ir(t){let e="";if(ie(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Ir(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ep=t=>t==null?"":F(t)||se(t)&&(t.toString===js||!$(t.toString))?JSON.stringify(t,Us,2):String(t),Us=(t,e)=>e&&e.__v_isRef?Us(t,e.value):St(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:$s(e)?{[`Set(${e.size})`]:[...e.values()]}:se(e)&&!F(e)&&!Hs(e)?String(e):e,Y={},At=[],Te=()=>{},Wa=()=>!1,za=/^on[^a-z]/,In=t=>za.test(t),Er=t=>t.startsWith("onUpdate:"),ue=Object.assign,Fs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ka=Object.prototype.hasOwnProperty,W=(t,e)=>Ka.call(t,e),F=Array.isArray,St=t=>En(t)==="[object Map]",$s=t=>En(t)==="[object Set]",$=t=>typeof t=="function",ie=t=>typeof t=="string",wr=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",Bs=t=>se(t)&&$(t.then)&&$(t.catch),js=Object.prototype.toString,En=t=>js.call(t),qa=t=>En(t).slice(8,-1),Hs=t=>En(t)==="[object Object]",Tr=t=>ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wn=yr(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ga=/-(\w)/g,Pe=Tn(t=>t.replace(Ga,(e,n)=>n?n.toUpperCase():"")),Ja=/\B([A-Z])/g,Ct=Tn(t=>t.replace(Ja,"-$1").toLowerCase()),Rn=Tn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Rr=Tn(t=>t?`on${Rn(t)}`:""),qt=(t,e)=>!Object.is(t,e),An=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Sn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ar=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vs;const Ya=()=>Vs||(Vs=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let at;const Cn=[];class Ws{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&at&&(this.parent=at,this.index=(at.scopes||(at.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Cn.push(this),at=this)}off(){this.active&&(Cn.pop(),at=Cn[Cn.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Xa(t){return new Ws(t)}function Qa(t,e){e=e||at,e&&e.active&&e.effects.push(t)}const Sr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},zs=t=>(t.w&Ge)>0,Ks=t=>(t.n&Ge)>0,Za=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ge},ec=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];zs(s)&&!Ks(s)?s.delete(t):e[n++]=s,s.w&=~Ge,s.n&=~Ge}e.length=n}},Cr=new WeakMap;let Gt=0,Ge=1;const Or=30,Jt=[];let ct;const lt=Symbol(""),Pr=Symbol("");class kr{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Qa(this,r)}run(){if(!this.active)return this.fn();if(!Jt.includes(this))try{return Jt.push(ct=this),tc(),Ge=1<<++Gt,Gt<=Or?Za(this):qs(this),this.fn()}finally{Gt<=Or&&ec(this),Ge=1<<--Gt,ut(),Jt.pop();const e=Jt.length;ct=e>0?Jt[e-1]:void 0}}stop(){this.active&&(qs(this),this.onStop&&this.onStop(),this.active=!1)}}function qs(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ot=!0;const Nr=[];function Pt(){Nr.push(Ot),Ot=!1}function tc(){Nr.push(Ot),Ot=!0}function ut(){const t=Nr.pop();Ot=t===void 0?!0:t}function _e(t,e,n){if(!Gs())return;let r=Cr.get(t);r||Cr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Sr()),Js(s)}function Gs(){return Ot&&ct!==void 0}function Js(t,e){let n=!1;Gt<=Or?Ks(t)||(t.n|=Ge,n=!zs(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function je(t,e,n,r,s,i){const o=Cr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?Tr(n)&&a.push(o.get("length")):(a.push(o.get(lt)),St(t)&&a.push(o.get(Pr)));break;case"delete":F(t)||(a.push(o.get(lt)),St(t)&&a.push(o.get(Pr)));break;case"set":St(t)&&a.push(o.get(lt));break}if(a.length===1)a[0]&&Mr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Mr(Sr(c))}}function Mr(t,e){for(const n of F(t)?t:[...t])(n!==ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const nc=yr("__proto__,__v_isRef,__isVue"),Ys=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(wr)),rc=xr(),sc=xr(!1,!0),ic=xr(!0),Xs=oc();function oc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pt();const r=K(this)[e].apply(this,n);return ut(),r}}),t}function xr(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?Ec:oi:e?ii:si).get(r))return r;const o=F(r);if(!t&&o&&W(Xs,s))return Reflect.get(Xs,s,i);const a=Reflect.get(r,s,i);return(wr(s)?Ys.has(s):nc(s))||(t||_e(r,"get",s),e)?a:me(a)?!o||!Tr(s)?a.value:a:se(a)?t?ai(a):Yt(a):a}}const ac=Qs(),cc=Qs(!0);function Qs(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&(s=K(s),o=K(o),!F(n)&&me(o)&&!me(s)))return o.value=s,!0;const a=F(n)&&Tr(r)?Number(r)<n.length:W(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?qt(s,o)&&je(n,"set",r,s):je(n,"add",r,s)),c}}function lc(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&je(t,"delete",e,void 0),r}function uc(t,e){const n=Reflect.has(t,e);return(!wr(e)||!Ys.has(e))&&_e(t,"has",e),n}function fc(t){return _e(t,"iterate",F(t)?"length":lt),Reflect.ownKeys(t)}const Zs={get:rc,set:ac,deleteProperty:lc,has:uc,ownKeys:fc},dc={get:ic,set(t,e){return!0},deleteProperty(t,e){return!0}},hc=ue({},Zs,{get:sc,set:cc}),Lr=t=>t,On=t=>Reflect.getPrototypeOf(t);function Pn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);e!==i&&!n&&_e(s,"get",e),!n&&_e(s,"get",i);const{has:o}=On(s),a=r?Lr:n?$r:Xt;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function kn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return t!==s&&!e&&_e(r,"has",t),!e&&_e(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Nn(t,e=!1){return t=t.__v_raw,!e&&_e(K(t),"iterate",lt),Reflect.get(t,"size",t)}function ei(t){t=K(t);const e=K(this);return On(e).has.call(e,t)||(e.add(t),je(e,"add",t,t)),this}function ti(t,e){e=K(e);const n=K(this),{has:r,get:s}=On(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?qt(e,o)&&je(n,"set",t,e):je(n,"add",t,e),this}function ni(t){const e=K(this),{has:n,get:r}=On(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&je(e,"delete",t,void 0),i}function ri(){const t=K(this),e=t.size!==0,n=t.clear();return e&&je(t,"clear",void 0,void 0),n}function Mn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?Lr:t?$r:Xt;return!t&&_e(a,"iterate",lt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function xn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=St(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Lr:e?$r:Xt;return!e&&_e(i,"iterate",c?Pr:lt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function Je(t){return function(...e){return t==="delete"?!1:this}}function pc(){const t={get(i){return Pn(this,i)},get size(){return Nn(this)},has:kn,add:ei,set:ti,delete:ni,clear:ri,forEach:Mn(!1,!1)},e={get(i){return Pn(this,i,!1,!0)},get size(){return Nn(this)},has:kn,add:ei,set:ti,delete:ni,clear:ri,forEach:Mn(!1,!0)},n={get(i){return Pn(this,i,!0)},get size(){return Nn(this,!0)},has(i){return kn.call(this,i,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Mn(!0,!1)},r={get(i){return Pn(this,i,!0,!0)},get size(){return Nn(this,!0)},has(i){return kn.call(this,i,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),e[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[t,n,e,r]}const[mc,gc,_c,vc]=pc();function Dr(t,e){const n=e?t?vc:_c:t?gc:mc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const yc={get:Dr(!1,!1)},bc={get:Dr(!1,!0)},Ic={get:Dr(!0,!1)},si=new WeakMap,ii=new WeakMap,oi=new WeakMap,Ec=new WeakMap;function wc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tc(t){return t.__v_skip||!Object.isExtensible(t)?0:wc(qa(t))}function Yt(t){return t&&t.__v_isReadonly?t:Ur(t,!1,Zs,yc,si)}function Rc(t){return Ur(t,!1,hc,bc,ii)}function ai(t){return Ur(t,!0,dc,Ic,oi)}function Ur(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Tc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function kt(t){return ci(t)?kt(t.__v_raw):!!(t&&t.__v_isReactive)}function ci(t){return!!(t&&t.__v_isReadonly)}function li(t){return kt(t)||ci(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Fr(t){return Sn(t,"__v_skip",!0),t}const Xt=t=>se(t)?Yt(t):t,$r=t=>se(t)?ai(t):t;function ui(t){Gs()&&(t=K(t),t.dep||(t.dep=Sr()),Js(t.dep))}function fi(t,e){t=K(t),t.dep&&Mr(t.dep)}function me(t){return Boolean(t&&t.__v_isRef===!0)}function di(t){return hi(t,!1)}function Ac(t){return hi(t,!0)}function hi(t,e){return me(t)?t:new Sc(t,e)}class Sc{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:Xt(e)}get value(){return ui(this),this._value}set value(e){e=this._shallow?e:K(e),qt(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Xt(e),fi(this))}}function Qt(t){return me(t)?t.value:t}const Cc={get:(t,e,n)=>Qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pi(t){return kt(t)?t:new Proxy(t,Cc)}class Oc{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new kr(e,()=>{this._dirty||(this._dirty=!0,fi(this))}),this.__v_isReadonly=r}get value(){const e=K(this);return ui(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ke(t,e){let n,r;const s=$(t);return s?(n=t,r=Te):(n=t.get,r=t.set),new Oc(n,r,s||!r)}Promise.resolve();function Pc(t,e,...n){const r=t.vnode.props||Y;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Y;p?s=n.map(b=>b.trim()):h&&(s=n.map(Ar))}let a,c=r[a=Rr(e)]||r[a=Rr(Pe(e))];!c&&i&&(c=r[a=Rr(Ct(e))]),c&&Ae(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ae(l,t,6,s)}}function mi(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const f=mi(l,e,!0);f&&(a=!0,ue(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ue(o,i),r.set(t,o),o)}function Br(t,e){return!t||!In(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Ct(e))||W(t,e))}let Ee=null,gi=null;function Ln(t){const e=Ee;return Ee=t,gi=t&&t.type.__scopeId||null,e}function kc(t,e=Ee,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ji(-1);const i=Ln(e),o=t(...s);return Ln(i),r._d&&ji(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function jr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:b,ctx:A,inheritAttrs:B}=t;let C,P;const D=Ln(t);try{if(n.shapeFlag&4){const z=s||r;C=xe(f.call(z,z,h,i,b,p,A)),P=c}else{const z=e;C=xe(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),P=e.props?c:Nc(c)}}catch(z){Zt.length=0,Kn(z,t,1),C=he(Ye)}let V=C;if(P&&B!==!1){const z=Object.keys(P),{shapeFlag:oe}=V;z.length&&oe&(1|6)&&(o&&z.some(Er)&&(P=Mc(P,o)),V=tn(V,P))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),C=V,Ln(D),C}const Nc=t=>{let e;for(const n in t)(n==="class"||n==="style"||In(n))&&((e||(e={}))[n]=t[n]);return e},Mc=(t,e)=>{const n={};for(const r in t)(!Er(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xc(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_i(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Br(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_i(r,o,l):!0:!!o;return!1}function _i(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Br(n,i))return!0}return!1}function Lc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dc=t=>t.__isSuspense;function Uc(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):kl(t)}function Dn(t,e){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[t]=e}}function Ne(t,e,n=!1){const r=ce||Ee;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r.proxy):e}}function vi(t){return $(t)?{setup:t,name:t.name}:t}const Hr=t=>!!t.type.__asyncLoader,yi=t=>t.type.__isKeepAlive;function Fc(t,e){bi(t,"a",e)}function $c(t,e){bi(t,"da",e)}function bi(t,e,n=ce){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}t()});if(Un(e,r,n),n){let s=n.parent;for(;s&&s.parent;)yi(s.parent.vnode)&&Bc(r,e,n,s),s=s.parent}}function Bc(t,e,n,r){const s=Un(e,t,r,!0);Ii(()=>{Fs(r[e],s)},n)}function Un(t,e,n=ce,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pt(),Nt(n);const a=Ae(e,n,t,o);return pt(),ut(),a});return r?s.unshift(i):s.push(i),i}}const He=t=>(e,n=ce)=>(!zn||t==="sp")&&Un(t,e,n),jc=He("bm"),Hc=He("m"),Vc=He("bu"),Wc=He("u"),zc=He("bum"),Ii=He("um"),Kc=He("sp"),qc=He("rtg"),Gc=He("rtc");function Jc(t,e=ce){Un("ec",t,e)}let Vr=!0;function Yc(t){const e=Ti(t),n=t.proxy,r=t.ctx;Vr=!1,e.beforeCreate&&Ei(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:A,activated:B,deactivated:C,beforeDestroy:P,beforeUnmount:D,destroyed:V,unmounted:z,render:oe,renderTracked:ae,renderTriggered:ye,errorCaptured:qe,serverPrefetch:pe,expose:Se,inheritAttrs:Fe,components:$e,directives:It,filters:Et}=e;if(l&&Xc(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Q in o){const q=o[Q];$(q)&&(r[Q]=q.bind(n))}if(s){const Q=s.call(n,n);se(Q)&&(t.data=Yt(Q))}if(Vr=!0,i)for(const Q in i){const q=i[Q],be=$(q)?q.bind(n,n):$(q.get)?q.get.bind(n,n):Te,Tt=!$(q)&&$(q.set)?q.set.bind(n):Te,Be=ke({get:be,set:Tt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Be.value,set:Ce=>Be.value=Ce})}if(a)for(const Q in a)wi(a[Q],r,n,Q);if(c){const Q=$(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(q=>{Dn(q,Q[q])})}f&&Ei(f,t,"c");function re(Q,q){F(q)?q.forEach(be=>Q(be.bind(n))):q&&Q(q.bind(n))}if(re(jc,h),re(Hc,p),re(Vc,b),re(Wc,A),re(Fc,B),re($c,C),re(Jc,qe),re(Gc,ae),re(qc,ye),re(zc,D),re(Ii,z),re(Kc,pe),F(Se))if(Se.length){const Q=t.exposed||(t.exposed={});Se.forEach(q=>{Object.defineProperty(Q,q,{get:()=>n[q],set:be=>n[q]=be})})}else t.exposed||(t.exposed={});oe&&t.render===Te&&(t.render=oe),Fe!=null&&(t.inheritAttrs=Fe),$e&&(t.components=$e),It&&(t.directives=It)}function Xc(t,e,n=Te,r=!1){F(t)&&(t=Wr(t));for(const s in t){const i=t[s];let o;se(i)?"default"in i?o=Ne(i.from||s,i.default,!0):o=Ne(i.from||s):o=Ne(i),me(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ei(t,e,n){Ae(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wi(t,e,n,r){const s=r.includes(".")?oo(n,r):()=>n[r];if(ie(t)){const i=e[t];$(i)&&Gn(s,i)}else if($(t))Gn(s,t.bind(n));else if(se(t))if(F(t))t.forEach(i=>wi(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Gn(s,i,t)}}function Ti(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Fn(c,l,o,!0)),Fn(c,e,o)),i.set(e,c),c}function Fn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Fn(t,i,n,!0),s&&s.forEach(o=>Fn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Qc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Qc={data:Ri,props:ft,emits:ft,methods:ft,computed:ft,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:ft,directives:ft,watch:el,provide:Ri,inject:Zc};function Ri(t,e){return e?t?function(){return ue($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Zc(t,e){return ft(Wr(t),Wr(e))}function Wr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function ft(t,e){return t?ue(ue(Object.create(null),t),e):e}function el(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const r in e)n[r]=fe(t[r],e[r]);return n}function tl(t,e,n,r=!1){const s={},i={};Sn(i,Hn,1),t.propsDefaults=Object.create(null),Ai(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];const b=e[p];if(c)if(W(i,p))b!==i[p]&&(i[p]=b,l=!0);else{const A=Pe(p);s[A]=zr(c,a,A,b,t,!1)}else b!==i[p]&&(i[p]=b,l=!0)}}}else{Ai(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!W(e,h)&&((f=Ct(h))===h||!W(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=zr(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!W(e,h))&&(delete i[h],l=!0)}l&&je(t,"set","$attrs")}function Ai(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(wn(c))continue;const l=e[c];let f;s&&W(s,f=Pe(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Br(t.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||Y;for(let f=0;f<i.length;f++){const h=i[f];n[h]=zr(s,c,h,l[h],t,!W(l,h))}}return o}function zr(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&$(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Nt(s),r=l[n]=c.call(null,e),pt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function Si(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const f=h=>{c=!0;const[p,b]=Si(h,e,!0);ue(o,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,At),At;if(F(i))for(let f=0;f<i.length;f++){const h=Pe(i[f]);Ci(h)&&(o[h]=Y)}else if(i)for(const f in i){const h=Pe(f);if(Ci(h)){const p=i[f],b=o[h]=F(p)||$(p)?{type:p}:p;if(b){const A=ki(Boolean,b.type),B=ki(String,b.type);b[0]=A>-1,b[1]=B<0||A<B,(A>-1||W(b,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Ci(t){return t[0]!=="$"}function Oi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Pi(t,e){return Oi(t)===Oi(e)}function ki(t,e){return F(e)?e.findIndex(n=>Pi(n,t)):$(e)&&Pi(e,t)?0:-1}const Ni=t=>t[0]==="_"||t==="$stable",Kr=t=>F(t)?t.map(xe):[xe(t)],rl=(t,e,n)=>{const r=kc((...s)=>Kr(e(...s)),n);return r._c=!1,r},Mi=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ni(s))continue;const i=t[s];if($(i))e[s]=rl(s,i,r);else if(i!=null){const o=Kr(i);e[s]=()=>o}}},xi=(t,e)=>{const n=Kr(e);t.slots.default=()=>n},sl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),Sn(e,"_",n)):Mi(e,t.slots={})}else t.slots={},e&&xi(t,e);Sn(t.slots,Hn,1)},il=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Y;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ue(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Mi(e,s)),o=e}else e&&(xi(t,e),o={default:1});if(i)for(const a in s)!Ni(a)&&!(a in o)&&delete s[a]};function tp(t,e){const n=Ee;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Y]=e[i];$(o)&&(o={mounted:o,updated:o}),o.deep&&mt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function dt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Pt(),Ae(c,n,8,[t.el,a,t,e]),ut())}}function Li(){return{app:null,config:{isNativeTag:Wa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ol=0;function al(t,e){return function(r,s=null){s!=null&&!se(s)&&(s=null);const i=Li(),o=new Set;let a=!1;const c=i.app={_uid:ol++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ml,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...f)):$(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=he(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Qr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}const de=Uc;function cl(t){return ll(t)}function ll(t,e){const n=Ya();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=Te,cloneNode:A,insertStaticContent:B}=t,C=(u,d,m,v=null,_=null,w=null,R=!1,I=null,E=!!d.dynamicChildren)=>{if(u===d)return;u&&!en(u,d)&&(v=k(u),Ie(u,_,w,!0),u=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:S}=d;switch(y){case Jr:P(u,d,m,v);break;case Ye:D(u,d,m,v);break;case $n:u==null&&V(d,m,v,R);break;case Re:It(u,d,m,v,_,w,R,I,E);break;default:S&1?ae(u,d,m,v,_,w,R,I,E):S&6?Et(u,d,m,v,_,w,R,I,E):(S&64||S&128)&&y.process(u,d,m,v,_,w,R,I,E,Z)}N!=null&&_&&qr(N,u&&u.ref,w,d||u,!d)},P=(u,d,m,v)=>{if(u==null)r(d.el=a(d.children),m,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},D=(u,d,m,v)=>{u==null?r(d.el=c(d.children||""),m,v):d.el=u.el},V=(u,d,m,v)=>{[u.el,u.anchor]=B(u.children,d,m,v)},z=({el:u,anchor:d},m,v)=>{let _;for(;u&&u!==d;)_=p(u),r(u,m,v),u=_;r(d,m,v)},oe=({el:u,anchor:d})=>{let m;for(;u&&u!==d;)m=p(u),s(u),u=m;s(d)},ae=(u,d,m,v,_,w,R,I,E)=>{R=R||d.type==="svg",u==null?ye(d,m,v,_,w,R,I,E):Se(u,d,_,w,R,I,E)},ye=(u,d,m,v,_,w,R,I)=>{let E,y;const{type:N,props:S,shapeFlag:M,transition:x,patchFlag:H,dirs:ne}=u;if(u.el&&A!==void 0&&H===-1)E=u.el=A(u.el);else{if(E=u.el=o(u.type,w,S&&S.is,S),M&8?f(E,u.children):M&16&&pe(u.children,E,null,v,_,w&&N!=="foreignObject",R,I),ne&&dt(u,null,v,"created"),S){for(const te in S)te!=="value"&&!wn(te)&&i(E,te,null,S[te],w,u.children,v,_,T);"value"in S&&i(E,"value",null,S.value),(y=S.onVnodeBeforeMount)&&Me(y,v,u)}qe(E,u,u.scopeId,R,v)}ne&&dt(u,null,v,"beforeMount");const J=(!_||_&&!_.pendingBranch)&&x&&!x.persisted;J&&x.beforeEnter(E),r(E,d,m),((y=S&&S.onVnodeMounted)||J||ne)&&de(()=>{y&&Me(y,v,u),J&&x.enter(E),ne&&dt(u,null,v,"mounted")},_)},qe=(u,d,m,v,_)=>{if(m&&b(u,m),v)for(let w=0;w<v.length;w++)b(u,v[w]);if(_){let w=_.subTree;if(d===w){const R=_.vnode;qe(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},pe=(u,d,m,v,_,w,R,I,E=0)=>{for(let y=E;y<u.length;y++){const N=u[y]=I?Xe(u[y]):xe(u[y]);C(null,N,d,m,v,_,w,R,I)}},Se=(u,d,m,v,_,w,R)=>{const I=d.el=u.el;let{patchFlag:E,dynamicChildren:y,dirs:N}=d;E|=u.patchFlag&16;const S=u.props||Y,M=d.props||Y;let x;(x=M.onVnodeBeforeUpdate)&&Me(x,m,d,u),N&&dt(d,u,m,"beforeUpdate");const H=_&&d.type!=="foreignObject";if(y?Fe(u.dynamicChildren,y,I,m,v,H,w):R||be(u,d,I,null,m,v,H,w,!1),E>0){if(E&16)$e(I,d,S,M,m,v,_);else if(E&2&&S.class!==M.class&&i(I,"class",null,M.class,_),E&4&&i(I,"style",S.style,M.style,_),E&8){const ne=d.dynamicProps;for(let J=0;J<ne.length;J++){const te=ne[J],we=S[te],Rt=M[te];(Rt!==we||te==="value")&&i(I,te,we,Rt,_,u.children,m,v,T)}}E&1&&u.children!==d.children&&f(I,d.children)}else!R&&y==null&&$e(I,d,S,M,m,v,_);((x=M.onVnodeUpdated)||N)&&de(()=>{x&&Me(x,m,d,u),N&&dt(d,u,m,"updated")},v)},Fe=(u,d,m,v,_,w,R)=>{for(let I=0;I<d.length;I++){const E=u[I],y=d[I],N=E.el&&(E.type===Re||!en(E,y)||E.shapeFlag&(6|64))?h(E.el):m;C(E,y,N,null,v,_,w,R,!0)}},$e=(u,d,m,v,_,w,R)=>{if(m!==v){for(const I in v){if(wn(I))continue;const E=v[I],y=m[I];E!==y&&I!=="value"&&i(u,I,y,E,R,d.children,_,w,T)}if(m!==Y)for(const I in m)!wn(I)&&!(I in v)&&i(u,I,m[I],null,R,d.children,_,w,T);"value"in v&&i(u,"value",m.value,v.value)}},It=(u,d,m,v,_,w,R,I,E)=>{const y=d.el=u?u.el:a(""),N=d.anchor=u?u.anchor:a("");let{patchFlag:S,dynamicChildren:M,slotScopeIds:x}=d;x&&(I=I?I.concat(x):x),u==null?(r(y,m,v),r(N,m,v),pe(d.children,m,N,_,w,R,I,E)):S>0&&S&64&&M&&u.dynamicChildren?(Fe(u.dynamicChildren,M,m,_,w,R,I),(d.key!=null||_&&d===_.subTree)&&Di(u,d,!0)):be(u,d,m,N,_,w,R,I,E)},Et=(u,d,m,v,_,w,R,I,E)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?_.ctx.activate(d,m,v,R,E):wt(d,m,v,_,w,R,E):re(u,d,E)},wt=(u,d,m,v,_,w,R)=>{const I=u.component=bl(u,v,_);if(yi(u)&&(I.ctx.renderer=Z),Il(I),I.asyncDep){if(_&&_.registerDep(I,Q),!u.el){const E=I.subTree=he(Ye);D(null,E,d,m)}return}Q(I,u,d,m,_,w,R)},re=(u,d,m)=>{const v=d.component=u.component;if(xc(u,d,m))if(v.asyncDep&&!v.asyncResolved){q(v,d,m);return}else v.next=d,Ol(v.update),v.update();else d.component=u.component,d.el=u.el,v.vnode=d},Q=(u,d,m,v,_,w,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:S,u:M,parent:x,vnode:H}=u,ne=N,J;E.allowRecurse=!1,N?(N.el=H.el,q(u,N,R)):N=H,S&&An(S),(J=N.props&&N.props.onVnodeBeforeUpdate)&&Me(J,x,N,H),E.allowRecurse=!0;const te=jr(u),we=u.subTree;u.subTree=te,C(we,te,h(we.el),k(we),u,_,w),N.el=te.el,ne===null&&Lc(u,te.el),M&&de(M,_),(J=N.props&&N.props.onVnodeUpdated)&&de(()=>Me(J,x,N,H),_)}else{let N;const{el:S,props:M}=d,{bm:x,m:H,parent:ne}=u,J=Hr(d);if(E.allowRecurse=!1,x&&An(x),!J&&(N=M&&M.onVnodeBeforeMount)&&Me(N,ne,d),E.allowRecurse=!0,S&&U){const te=()=>{u.subTree=jr(u),U(S,u.subTree,u,_,null)};J?d.type.__asyncLoader().then(()=>!u.isUnmounted&&te()):te()}else{const te=u.subTree=jr(u);C(null,te,m,v,u,_,w),d.el=te.el}if(H&&de(H,_),!J&&(N=M&&M.onVnodeMounted)){const te=d;de(()=>Me(N,ne,te),_)}d.shapeFlag&256&&u.a&&de(u.a,_),u.isMounted=!0,d=m=v=null}},E=new kr(I,()=>Zi(u.update),u.scope),y=u.update=E.run.bind(E);y.id=u.uid,E.allowRecurse=y.allowRecurse=!0,y()},q=(u,d,m)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,nl(u,d.props,v,m),il(u,d.children,m),Pt(),ns(void 0,u.update),ut()},be=(u,d,m,v,_,w,R,I,E=!1)=>{const y=u&&u.children,N=u?u.shapeFlag:0,S=d.children,{patchFlag:M,shapeFlag:x}=d;if(M>0){if(M&128){Be(y,S,m,v,_,w,R,I,E);return}else if(M&256){Tt(y,S,m,v,_,w,R,I,E);return}}x&8?(N&16&&T(y,_,w),S!==y&&f(m,S)):N&16?x&16?Be(y,S,m,v,_,w,R,I,E):T(y,_,w,!0):(N&8&&f(m,""),x&16&&pe(S,m,v,_,w,R,I,E))},Tt=(u,d,m,v,_,w,R,I,E)=>{u=u||At,d=d||At;const y=u.length,N=d.length,S=Math.min(y,N);let M;for(M=0;M<S;M++){const x=d[M]=E?Xe(d[M]):xe(d[M]);C(u[M],x,m,null,_,w,R,I,E)}y>N?T(u,_,w,!0,!1,S):pe(d,m,v,_,w,R,I,E,S)},Be=(u,d,m,v,_,w,R,I,E)=>{let y=0;const N=d.length;let S=u.length-1,M=N-1;for(;y<=S&&y<=M;){const x=u[y],H=d[y]=E?Xe(d[y]):xe(d[y]);if(en(x,H))C(x,H,m,null,_,w,R,I,E);else break;y++}for(;y<=S&&y<=M;){const x=u[S],H=d[M]=E?Xe(d[M]):xe(d[M]);if(en(x,H))C(x,H,m,null,_,w,R,I,E);else break;S--,M--}if(y>S){if(y<=M){const x=M+1,H=x<N?d[x].el:v;for(;y<=M;)C(null,d[y]=E?Xe(d[y]):xe(d[y]),m,H,_,w,R,I,E),y++}}else if(y>M)for(;y<=S;)Ie(u[y],_,w,!0),y++;else{const x=y,H=y,ne=new Map;for(y=H;y<=M;y++){const ge=d[y]=E?Xe(d[y]):xe(d[y]);ge.key!=null&&ne.set(ge.key,y)}let J,te=0;const we=M-H+1;let Rt=!1,Ms=0;const Kt=new Array(we);for(y=0;y<we;y++)Kt[y]=0;for(y=x;y<=S;y++){const ge=u[y];if(te>=we){Ie(ge,_,w,!0);continue}let Oe;if(ge.key!=null)Oe=ne.get(ge.key);else for(J=H;J<=M;J++)if(Kt[J-H]===0&&en(ge,d[J])){Oe=J;break}Oe===void 0?Ie(ge,_,w,!0):(Kt[Oe-H]=y+1,Oe>=Ms?Ms=Oe:Rt=!0,C(ge,d[Oe],m,null,_,w,R,I,E),te++)}const xs=Rt?ul(Kt):At;for(J=xs.length-1,y=we-1;y>=0;y--){const ge=H+y,Oe=d[ge],Ls=ge+1<N?d[ge+1].el:v;Kt[y]===0?C(null,Oe,m,Ls,_,w,R,I,E):Rt&&(J<0||y!==xs[J]?Ce(Oe,m,Ls,2):J--)}}},Ce=(u,d,m,v,_=null)=>{const{el:w,type:R,transition:I,children:E,shapeFlag:y}=u;if(y&6){Ce(u.component.subTree,d,m,v);return}if(y&128){u.suspense.move(d,m,v);return}if(y&64){R.move(u,d,m,Z);return}if(R===Re){r(w,d,m);for(let S=0;S<E.length;S++)Ce(E[S],d,m,v);r(u.anchor,d,m);return}if(R===$n){z(u,d,m);return}if(v!==2&&y&1&&I)if(v===0)I.beforeEnter(w),r(w,d,m),de(()=>I.enter(w),_);else{const{leave:S,delayLeave:M,afterLeave:x}=I,H=()=>r(w,d,m),ne=()=>{S(w,()=>{H(),x&&x()})};M?M(w,H,ne):ne()}else r(w,d,m)},Ie=(u,d,m,v=!1,_=!1)=>{const{type:w,props:R,ref:I,children:E,dynamicChildren:y,shapeFlag:N,patchFlag:S,dirs:M}=u;if(I!=null&&qr(I,null,m,u,!0),N&256){d.ctx.deactivate(u);return}const x=N&1&&M,H=!Hr(u);let ne;if(H&&(ne=R&&R.onVnodeBeforeUnmount)&&Me(ne,d,u),N&6)O(u.component,m,v);else{if(N&128){u.suspense.unmount(m,v);return}x&&dt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,m,_,Z,v):y&&(w!==Re||S>0&&S&64)?T(y,d,m,!1,!0):(w===Re&&S&(128|256)||!_&&N&16)&&T(E,d,m),v&&vr(u)}(H&&(ne=R&&R.onVnodeUnmounted)||x)&&de(()=>{ne&&Me(ne,d,u),x&&dt(u,null,d,"unmounted")},m)},vr=u=>{const{type:d,el:m,anchor:v,transition:_}=u;if(d===Re){g(m,v);return}if(d===$n){oe(u);return}const w=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:I}=_,E=()=>R(m,w);I?I(u.el,w,E):E()}else w()},g=(u,d)=>{let m;for(;u!==d;)m=p(u),s(u),u=m;s(d)},O=(u,d,m)=>{const{bum:v,scope:_,update:w,subTree:R,um:I}=u;v&&An(v),_.stop(),w&&(w.active=!1,Ie(R,u,d,m)),I&&de(I,d),de(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,m,v=!1,_=!1,w=0)=>{for(let R=w;R<u.length;R++)Ie(u[R],d,m,v,_)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),G=(u,d,m)=>{u==null?d._vnode&&Ie(d._vnode,null,null,!0):C(d._vnode||null,u,d,null,null,null,m),no(),d._vnode=u},Z={p:C,um:Ie,m:Ce,r:vr,mt:wt,mc:pe,pc:be,pbc:Fe,n:k,o:t};let j,U;return e&&([j,U]=e(Z)),{render:G,hydrate:j,createApp:al(G,j)}}function qr(t,e,n,r,s=!1){if(F(t)){t.forEach((p,b)=>qr(p,e&&(F(e)?e[b]:e),n,r,s));return}if(Hr(r)&&!s)return;const i=r.shapeFlag&4?Qr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Y?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ie(l)?(f[l]=null,W(h,l)&&(h[l]=null)):me(l)&&(l.value=null)),ie(c)){const p=()=>{f[c]=o,W(h,c)&&(h[c]=o)};o?(p.id=-1,de(p,n)):p()}else if(me(c)){const p=()=>{c.value=o};o?(p.id=-1,de(p,n)):p()}else $(c)&&Qe(c,a,12,[o,f])}function Me(t,e,n,r=null){Ae(t,e,7,[n,r])}function Di(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Xe(s[i]),a.el=o.el),n||Di(o,a))}}function ul(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const fl=t=>t.__isTeleport,Gr="components";function np(t,e){return Fi(Gr,t,!0,e)||t}const Ui=Symbol();function rp(t){return ie(t)?Fi(Gr,t,!1)||t:t||Ui}function Fi(t,e,n=!0,r=!1){const s=Ee||ce;if(s){const i=s.type;if(t===Gr){const a=Rl(i);if(a&&(a===e||a===Pe(e)||a===Rn(Pe(e))))return i}const o=$i(s[t]||i[t],e)||$i(s.appContext[t],e);return!o&&r?i:o}}function $i(t,e){return t&&(t[e]||t[Pe(e)]||t[Rn(Pe(e))])}const Re=Symbol(void 0),Jr=Symbol(void 0),Ye=Symbol(void 0),$n=Symbol(void 0),Zt=[];let ht=null;function Bi(t=!1){Zt.push(ht=t?null:[])}function dl(){Zt.pop(),ht=Zt[Zt.length-1]||null}let Bn=1;function ji(t){Bn+=t}function Hi(t){return t.dynamicChildren=Bn>0?ht||At:null,dl(),Bn>0&&ht&&ht.push(t),t}function sp(t,e,n,r,s,i){return Hi(zi(t,e,n,r,s,i,!0))}function Vi(t,e,n,r,s){return Hi(he(t,e,n,r,s,!0))}function jn(t){return t?t.__v_isVNode===!0:!1}function en(t,e){return t.type===e.type&&t.key===e.key}const Hn="__vInternal",Wi=({key:t})=>t!=null?t:null,Vn=({ref:t})=>t!=null?ie(t)||me(t)||$(t)?{i:Ee,r:t}:t:null;function zi(t,e=null,n=null,r=0,s=null,i=t===Re?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wi(e),ref:e&&Vn(e),scopeId:gi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Yr(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ie(n)?8:16),Bn>0&&!o&&ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ht.push(c),c}const he=hl;function hl(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ui)&&(t=Ye),jn(t)){const a=tn(t,e,!0);return n&&Yr(a,n),a}if(Al(t)&&(t=t.__vccOpts),e){e=pl(e);let{class:a,style:c}=e;a&&!ie(a)&&(e.class=Ir(a)),se(c)&&(li(c)&&!F(c)&&(c=ue({},c)),e.style=br(c))}const o=ie(t)?1:Dc(t)?128:fl(t)?64:se(t)?4:$(t)?2:0;return zi(t,e,n,r,s,o,i,!0)}function pl(t){return t?li(t)||Hn in t?ue({},t):t:null}function tn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?gl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Wi(a),ref:e&&e.ref?n&&s?F(s)?s.concat(Vn(e)):[s,Vn(e)]:Vn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tn(t.ssContent),ssFallback:t.ssFallback&&tn(t.ssFallback),el:t.el,anchor:t.anchor}}function ml(t=" ",e=0){return he(Jr,null,t,e)}function ip(t,e){const n=he($n,null,t);return n.staticCount=e,n}function op(t="",e=!1){return e?(Bi(),Vi(Ye,null,t)):he(Ye,null,t)}function xe(t){return t==null||typeof t=="boolean"?he(Ye):F(t)?he(Re,null,t.slice()):typeof t=="object"?Xe(t):he(Jr,null,String(t))}function Xe(t){return t.el===null||t.memo?t:tn(t)}function Yr(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),Yr(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Hn in e)?e._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ee},n=32):(e=String(e),r&64?(n=16,e=[ml(e)]):n=8);t.children=e,t.shapeFlag|=n}function gl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ir([e.class,r.class]));else if(s==="style")e.style=br([e.style,r.style]);else if(In(s)){const i=e[s],o=r[s];i!==o&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ap(t,e,n,r){let s;const i=n&&n[r];if(F(t)||ie(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(se(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function cp(t,e,n={},r,s){if(Ee.isCE)return he("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Bi();const o=i&&Ki(i(n)),a=Vi(Re,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ki(t){return t.some(e=>jn(e)?!(e.type===Ye||e.type===Re&&!Ki(e.children)):!0)?t:null}const Xr=t=>t?qi(t)?Qr(t)||t.proxy:Xr(t.parent):null,Wn=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xr(t.parent),$root:t=>Xr(t.root),$emit:t=>t.emit,$options:t=>Ti(t),$forceUpdate:t=>()=>Zi(t.update),$nextTick:t=>Qi.bind(t.proxy),$watch:t=>Nl.bind(t)}),_l={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 0:return r[e];case 1:return s[e];case 3:return n[e];case 2:return i[e]}else{if(r!==Y&&W(r,e))return o[e]=0,r[e];if(s!==Y&&W(s,e))return o[e]=1,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=2,i[e];if(n!==Y&&W(n,e))return o[e]=3,n[e];Vr&&(o[e]=4)}}const f=Wn[e];let h,p;if(f)return e==="$attrs"&&_e(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Y&&W(n,e))return o[e]=3,n[e];if(p=c.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==Y&&W(s,e))s[e]=n;else if(r!==Y&&W(r,e))r[e]=n;else if(W(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return n[o]!==void 0||t!==Y&&W(t,o)||e!==Y&&W(e,o)||(a=i[0])&&W(a,o)||W(r,o)||W(Wn,o)||W(s.config.globalProperties,o)}},vl=Li();let yl=0;function bl(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vl,i={uid:yl++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new Ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Si(r,s),emitsOptions:mi(r,s),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Pc.bind(null,i),t.ce&&t.ce(i),i}let ce=null;const Nt=t=>{ce=t,t.scope.on()},pt=()=>{ce&&ce.scope.off(),ce=null};function qi(t){return t.vnode.shapeFlag&4}let zn=!1;function Il(t,e=!1){zn=e;const{props:n,children:r}=t.vnode,s=qi(t);tl(t,n,s,e),sl(t,r);const i=s?El(t,e):void 0;return zn=!1,i}function El(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fr(new Proxy(t.ctx,_l));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Tl(t):null;Nt(t),Pt();const i=Qe(r,t,0,[t.props,s]);if(ut(),pt(),Bs(i)){if(i.then(pt,pt),e)return i.then(o=>{Gi(t,o,e)}).catch(o=>{Kn(o,t,0)});t.asyncDep=i}else Gi(t,i,e)}else Yi(t,e)}function Gi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=pi(e)),Yi(t,n)}let Ji;function Yi(t,e,n){const r=t.type;if(!t.render){if(!e&&Ji&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ue(ue({isCustomElement:i,delimiters:a},o),c);r.render=Ji(s,l)}}t.render=r.render||Te}Nt(t),Pt(),Yc(t),ut(),pt()}function wl(t){return new Proxy(t.attrs,{get(e,n){return _e(t,"get","$attrs"),e[n]}})}function Tl(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=wl(t))},slots:t.slots,emit:t.emit,expose:e}}function Qr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pi(Fr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wn)return Wn[n](t)}}))}function Rl(t){return $(t)&&t.displayName||t.name}function Al(t){return $(t)&&"__vccOpts"in t}function Qe(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Kn(i,e,n)}return s}function Ae(t,e,n,r){if($(t)){const i=Qe(t,e,n,r);return i&&Bs(i)&&i.catch(o=>{Kn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ae(t[i],e,n,r));return s}function Kn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Qe(c,null,10,[t,o,a]);return}}Sl(t,n,s,r)}function Sl(t,e,n,r=!0){console.error(t)}let qn=!1,Zr=!1;const ve=[];let Ve=0;const nn=[];let rn=null,Mt=0;const sn=[];let Ze=null,xt=0;const Xi=Promise.resolve();let es=null,ts=null;function Qi(t){const e=es||Xi;return t?e.then(this?t.bind(this):t):e}function Cl(t){let e=Ve+1,n=ve.length;for(;e<n;){const r=e+n>>>1;on(ve[r])<t?e=r+1:n=r}return e}function Zi(t){(!ve.length||!ve.includes(t,qn&&t.allowRecurse?Ve+1:Ve))&&t!==ts&&(t.id==null?ve.push(t):ve.splice(Cl(t.id),0,t),eo())}function eo(){!qn&&!Zr&&(Zr=!0,es=Xi.then(ro))}function Ol(t){const e=ve.indexOf(t);e>Ve&&ve.splice(e,1)}function to(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),eo()}function Pl(t){to(t,rn,nn,Mt)}function kl(t){to(t,Ze,sn,xt)}function ns(t,e=null){if(nn.length){for(ts=e,rn=[...new Set(nn)],nn.length=0,Mt=0;Mt<rn.length;Mt++)rn[Mt]();rn=null,Mt=0,ts=null,ns(t,e)}}function no(t){if(sn.length){const e=[...new Set(sn)];if(sn.length=0,Ze){Ze.push(...e);return}for(Ze=e,Ze.sort((n,r)=>on(n)-on(r)),xt=0;xt<Ze.length;xt++)Ze[xt]();Ze=null,xt=0}}const on=t=>t.id==null?1/0:t.id;function ro(t){Zr=!1,qn=!0,ns(t),ve.sort((n,r)=>on(n)-on(r));const e=Te;try{for(Ve=0;Ve<ve.length;Ve++){const n=ve[Ve];n&&n.active!==!1&&Qe(n,null,14)}}finally{Ve=0,ve.length=0,no(),qn=!1,es=null,(ve.length||nn.length||sn.length)&&ro(t)}}const so={};function Gn(t,e,n){return io(t,e,n)}function io(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Y){const a=ce;let c,l=!1,f=!1;if(me(t)?(c=()=>t.value,l=!!t._shallow):kt(t)?(c=()=>t,r=!0):F(t)?(f=!0,l=t.some(kt),c=()=>t.map(P=>{if(me(P))return P.value;if(kt(P))return mt(P);if($(P))return Qe(P,a,2)})):$(t)?e?c=()=>Qe(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ae(t,a,3,[p])}:c=Te,e&&r){const P=c;c=()=>mt(P())}let h,p=P=>{h=C.onStop=()=>{Qe(P,a,4)}};if(zn)return p=Te,e?n&&Ae(e,a,3,[c(),f?[]:void 0,p]):c(),Te;let b=f?[]:so;const A=()=>{if(!!C.active)if(e){const P=C.run();(r||l||(f?P.some((D,V)=>qt(D,b[V])):qt(P,b)))&&(h&&h(),Ae(e,a,3,[P,b===so?void 0:b,p]),b=P)}else C.run()};A.allowRecurse=!!e;let B;s==="sync"?B=A:s==="post"?B=()=>de(A,a&&a.suspense):B=()=>{!a||a.isMounted?Pl(A):A()};const C=new kr(c,B);return e?n?A():b=C.run():s==="post"?de(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&Fs(a.scope.effects,C)}}function Nl(t,e,n){const r=this.proxy,s=ie(t)?t.includes(".")?oo(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ce;Nt(this);const a=io(s,i.bind(r),n);return o?Nt(o):pt(),a}function oo(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function mt(t,e){if(!se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),me(t))mt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)mt(t[n],e);else if($s(t)||St(t))t.forEach(n=>{mt(n,e)});else if(Hs(t))for(const n in t)mt(t[n],e);return t}function ao(t,e,n){const r=arguments.length;return r===2?se(e)&&!F(e)?jn(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jn(n)&&(n=[n]),he(t,e,n))}const Ml="3.2.19",xl="http://www.w3.org/2000/svg",Lt=typeof document!="undefined"?document:null,co=new Map,Ll={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Lt.createElementNS(xl,t):Lt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Lt.createTextNode(t),createComment:t=>Lt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Lt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const s=n?n.previousSibling:e.lastChild;let i=co.get(t);if(!i){const o=Lt.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}co.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Dl(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ul(t,e,n){const r=t.style,s=r.display;if(!n)t.removeAttribute("style");else if(ie(n))e!==n&&(r.cssText=n);else{for(const i in n)rs(r,i,n[i]);if(e&&!ie(e))for(const i in e)n[i]==null&&rs(r,i,"")}"_vod"in t&&(r.display=s)}const lo=/\s*!important$/;function rs(t,e,n){if(F(n))n.forEach(r=>rs(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Fl(t,e);lo.test(n)?t.setProperty(Ct(r),n.replace(lo,""),"important"):t[r]=n}}const uo=["Webkit","Moz","ms"],ss={};function Fl(t,e){const n=ss[e];if(n)return n;let r=Pe(e);if(r!=="filter"&&r in t)return ss[e]=r;r=Rn(r);for(let s=0;s<uo.length;s++){const i=uo[s]+r;if(i in t)return ss[e]=i}return e}const fo="http://www.w3.org/1999/xlink";function $l(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fo,e.slice(6,e.length)):t.setAttributeNS(fo,e,n);else{const i=Ba(e);n==null||i&&!Ds(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Bl(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Ds(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch(c){}t.removeAttribute(e);return}}try{t[e]=n}catch(a){}}let Jn=Date.now,ho=!1;if(typeof window!="undefined"){Jn()>document.createEvent("Event").timeStamp&&(Jn=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ho=!!(t&&Number(t[1])<=53)}let is=0;const jl=Promise.resolve(),Hl=()=>{is=0},Vl=()=>is||(jl.then(Hl),is=Jn());function Dt(t,e,n,r){t.addEventListener(e,n,r)}function Wl(t,e,n,r){t.removeEventListener(e,n,r)}function zl(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Kl(e);if(r){const l=i[e]=ql(r,s);Dt(t,a,l,c)}else o&&(Wl(t,a,o,c),i[e]=void 0)}}const po=/(?:Once|Passive|Capture)$/;function Kl(t){let e;if(po.test(t)){e={};let n;for(;n=t.match(po);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ct(t.slice(2)),e]}function ql(t,e){const n=r=>{const s=r.timeStamp||Jn();(ho||s>=n.attached-1)&&Ae(Gl(r,n.value),e,5,[r])};return n.value=t,n.attached=Vl(),n}function Gl(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r(s))}else return e}const mo=/^on[a-z]/,Jl=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Dl(t,r,s):e==="style"?Ul(t,n,r):In(e)?Er(e)||zl(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yl(t,e,r,s))?Bl(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$l(t,e,r,s))};function Yl(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&mo.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||mo.test(e)&&ie(n)?!1:e in t}const go=t=>{const e=t.props["onUpdate:modelValue"];return F(e)?n=>An(e,n):e};function Xl(t){t.target.composing=!0}function _o(t){const e=t.target;e.composing&&(e.composing=!1,Ql(e,"input"))}function Ql(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const lp={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=go(s);const i=r||s.props&&s.props.type==="number";Dt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Ar(a)),t._assign(a)}),n&&Dt(t,"change",()=>{t.value=t.value.trim()}),e||(Dt(t,"compositionstart",Xl),Dt(t,"compositionend",_o),Dt(t,"change",_o))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=go(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ar(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},up={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):an(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),an(t,!0),r.enter(t)):r.leave(t,()=>{an(t,!1)}):an(t,e))},beforeUnmount(t,{value:e}){an(t,e)}};function an(t,e){t.style.display=e?t._vod:"none"}const Zl=ue({patchProp:Jl},Ll);let vo;function eu(){return vo||(vo=cl(Zl))}const fp=(...t)=>{const e=eu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tu(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function tu(t){return ie(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const yo=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ut=t=>yo?Symbol(t):"_vr_"+t,nu=Ut("rvlm"),bo=Ut("rvd"),Yn=Ut("r"),os=Ut("rl"),as=Ut("rvl"),Ft=typeof window!="undefined";function ru(t){return t.__esModule||yo&&t[Symbol.toStringTag]==="Module"}const X=Object.assign;function cs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const cn=()=>{},su=/\/$/,iu=t=>t.replace(su,"");function ls(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=lu(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function ou(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Io(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function au(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&$t(e.matched[r],n.matched[s])&&Eo(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $t(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Eo(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cu(t[n],e[n]))return!1;return!0}function cu(t,e){return Array.isArray(t)?wo(t,e):Array.isArray(e)?wo(e,t):t===e}function wo(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function lu(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ln;(function(t){t.pop="pop",t.push="push"})(ln||(ln={}));var un;(function(t){t.back="back",t.forward="forward",t.unknown=""})(un||(un={}));function uu(t){if(!t)if(Ft){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iu(t)}const fu=/^[^#]+#/;function du(t,e){return t.replace(fu,"#")+e}function hu(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xn=()=>({left:window.pageXOffset,top:window.pageYOffset});function pu(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hu(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function To(t,e){return(history.state?history.state.position-e:-1)+t}const us=new Map;function mu(t,e){us.set(t,e)}function gu(t){const e=us.get(t);return us.delete(t),e}let _u=()=>location.protocol+"//"+location.host;function Ro(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Io(c,"")}return Io(n,t)+r+s}function vu(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const b=Ro(t,location),A=n.value,B=e.value;let C=0;if(p){if(n.value=b,e.value=p,o&&o===A){o=null;return}C=B?p.position-B.position:0}else r(b);s.forEach(P=>{P(n.value,A,{delta:C,type:ln.pop,direction:C?C>0?un.forward:un.back:un.unknown})})};function c(){o=n.value}function l(p){s.push(p);const b=()=>{const A=s.indexOf(p);A>-1&&s.splice(A,1)};return i.push(b),b}function f(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:Xn()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Ao(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xn():null}}function yu(t){const{history:e,location:n}=window,r={value:Ro(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:_u()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function o(c,l){const f=X({},e.state,Ao(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=X({},s.value,e.state,{forward:c,scroll:Xn()});i(f.current,f,!0);const h=X({},Ao(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function dp(t){t=uu(t);const e=yu(t),n=vu(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:du.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function bu(t){return typeof t=="string"||t&&typeof t=="object"}function So(t){return typeof t=="string"||typeof t=="symbol"}const et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Co=Ut("nf");var Oo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Oo||(Oo={}));function Bt(t,e){return X(new Error,{type:t,[Co]:!0},e)}function gt(t,e){return t instanceof Error&&Co in t&&(e==null||!!(t.type&e))}const Po="[^/]+?",Iu={sensitive:!1,strict:!1,start:!0,end:!0},Eu=/[.+*?^${}()[\]/\\]/g;function wu(t,e){const n=X({},Iu,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Eu,"\\$&"),b+=40;else if(p.type===1){const{value:A,repeatable:B,optional:C,regexp:P}=p;i.push({name:A,repeatable:B,optional:C});const D=P||Po;if(D!==Po){b+=10;try{new RegExp(`(${D})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${D}): `+z.message)}}let V=B?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(V=C&&l.length<2?`(?:/${V})`:"/"+V),C&&(V+="?"),s+=V,b+=20,C&&(b+=-8),B&&(b+=-20),D===".*"&&(b+=-50)}f.push(b)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",A=i[p-1];h[A.name]=b&&A.repeatable?b.split("/"):b}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:A,repeatable:B,optional:C}=b,P=A in l?l[A]:"";if(Array.isArray(P)&&!B)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(P)?P.join("/"):P;if(!D)if(C)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);f+=D}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Tu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ru(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Tu(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Au={type:0,value:""},Su=/[a-zA-Z0-9_]/;function Cu(t){if(!t)return[[]];if(t==="/")return[[Au]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${l}": ${b}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Su.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Ou(t,e,n){const r=wu(Cu(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Pu(t,e){const n=[],r=new Map;e=No({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const b=!p,A=Nu(f);A.aliasOf=p&&p.record;const B=No(e,f),C=[A];if("alias"in f){const V=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of V)C.push(X({},A,{components:p?p.record.components:A.components,path:z,aliasOf:p?p.record:A}))}let P,D;for(const V of C){const{path:z}=V;if(h&&z[0]!=="/"){const oe=h.record.path,ae=oe[oe.length-1]==="/"?"":"/";V.path=h.record.path+(z&&ae+z)}if(P=Ou(V,h,B),p?p.alias.push(P):(D=D||P,D!==P&&D.alias.push(P),b&&f.name&&!ko(P)&&o(f.name)),"children"in A){const oe=A.children;for(let ae=0;ae<oe.length;ae++)i(oe[ae],P,p&&p.children[ae])}p=p||P,c(P)}return D?()=>{o(D)}:cn}function o(f){if(So(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&Ru(f,n[h])>=0;)h++;n.splice(h,0,f),f.record.name&&!ko(f)&&r.set(f.record.name,f)}function l(f,h){let p,b={},A,B;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Bt(1,{location:f});B=p.record.name,b=X(ku(h.params,p.keys.filter(D=>!D.optional).map(D=>D.name)),f.params),A=p.stringify(b)}else if("path"in f)A=f.path,p=n.find(D=>D.re.test(A)),p&&(b=p.parse(A),B=p.record.name);else{if(p=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!p)throw Bt(1,{location:f,currentLocation:h});B=p.record.name,b=X({},h.params,f.params),A=p.stringify(b)}const C=[];let P=p;for(;P;)C.unshift(P.record),P=P.parent;return{name:B,path:A,params:b,matched:C,meta:xu(C)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ku(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Nu(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Mu(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Mu(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ko(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xu(t){return t.reduce((e,n)=>X(e,n.meta),{})}function No(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Mo=/#/g,Lu=/&/g,Du=/\//g,Uu=/=/g,Fu=/\?/g,xo=/\+/g,$u=/%5B/g,Bu=/%5D/g,Lo=/%5E/g,ju=/%60/g,Do=/%7B/g,Hu=/%7C/g,Uo=/%7D/g,Vu=/%20/g;function fs(t){return encodeURI(""+t).replace(Hu,"|").replace($u,"[").replace(Bu,"]")}function Wu(t){return fs(t).replace(Do,"{").replace(Uo,"}").replace(Lo,"^")}function ds(t){return fs(t).replace(xo,"%2B").replace(Vu,"+").replace(Mo,"%23").replace(Lu,"%26").replace(ju,"`").replace(Do,"{").replace(Uo,"}").replace(Lo,"^")}function zu(t){return ds(t).replace(Uu,"%3D")}function Ku(t){return fs(t).replace(Mo,"%23").replace(Fu,"%3F")}function qu(t){return t==null?"":Ku(t).replace(Du,"%2F")}function Qn(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Gu(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xo," "),o=i.indexOf("="),a=Qn(o<0?i:i.slice(0,o)),c=o<0?null:Qn(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Fo(t){let e="";for(let n in t){const r=t[n];if(n=zu(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ds(i)):[r&&ds(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ju(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function tt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Bt(4,{from:n,to:e})):h instanceof Error?a(h):bu(h)?a(Bt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function hs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Yu(a)){const l=(a.__vccOpts||a)[e];l&&s.push(tt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=ru(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&tt(p,n,r,i,o)()}))}}return s}function Yu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $o(t){const e=Ne(Yn),n=Ne(os),r=ke(()=>e.resolve(Qt(t.to))),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex($t.bind(null,f));if(p>-1)return p;const b=Bo(c[l-2]);return l>1&&Bo(f)===b&&h[h.length-1].path!==b?h.findIndex($t.bind(null,c[l-2])):p}),i=ke(()=>s.value>-1&&ef(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&Eo(n.params,r.value.params));function a(c={}){return Zu(c)?e[Qt(t.replace)?"replace":"push"](Qt(t.to)).catch(cn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Xu=vi({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$o,setup(t,{slots:e}){const n=Yt($o(t)),{options:r}=Ne(Yn),s=ke(()=>({[jo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ao("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Qu=Xu;function Zu(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ef(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jo=(t,e,n)=>t!=null?t:e!=null?e:n,tf=vi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Ne(as),s=ke(()=>t.route||r.value),i=Ne(bo,0),o=ke(()=>s.value.matched[i]);Dn(bo,i+1),Dn(nu,o),Dn(as,s);const a=di();return Gn(()=>[a.value,o.value,t.name],([c,l,f],[h,p,b])=>{l&&(l.instances[f]=c,p&&p!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!$t(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return Ho(n.default,{Component:f,route:c});const p=l.props[t.name],b=p?p===!0?c.params:typeof p=="function"?p(c):p:null,B=ao(f,X({},b,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Ho(n.default,{Component:B,route:c})||B}}});function Ho(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nf=tf;function hp(t){const e=Pu(t.routes,t),n=t.parseQuery||Gu,r=t.stringifyQuery||Fo,s=t.history,i=fn(),o=fn(),a=fn(),c=Ac(et);let l=et;Ft&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=cs.bind(null,g=>""+g),h=cs.bind(null,qu),p=cs.bind(null,Qn);function b(g,O){let T,k;return So(g)?(T=e.getRecordMatcher(g),k=O):k=g,e.addRoute(k,T)}function A(g){const O=e.getRecordMatcher(g);O&&e.removeRoute(O)}function B(){return e.getRoutes().map(g=>g.record)}function C(g){return!!e.getRecordMatcher(g)}function P(g,O){if(O=X({},O||c.value),typeof g=="string"){const U=ls(n,g,O.path),u=e.resolve({path:U.path},O),d=s.createHref(U.fullPath);return X(U,u,{params:p(u.params),hash:Qn(U.hash),redirectedFrom:void 0,href:d})}let T;if("path"in g)T=X({},g,{path:ls(n,g.path,O.path).path});else{const U=X({},g.params);for(const u in U)U[u]==null&&delete U[u];T=X({},g,{params:h(g.params)}),O.params=h(O.params)}const k=e.resolve(T,O),G=g.hash||"";k.params=f(p(k.params));const Z=ou(r,X({},g,{hash:Wu(G),path:k.path})),j=s.createHref(Z);return X({fullPath:Z,hash:G,query:r===Fo?Ju(g.query):g.query||{}},k,{redirectedFrom:void 0,href:j})}function D(g){return typeof g=="string"?ls(n,g,c.value.path):X({},g)}function V(g,O){if(l!==g)return Bt(8,{from:O,to:g})}function z(g){return ye(g)}function oe(g){return z(X(D(g),{replace:!0}))}function ae(g){const O=g.matched[g.matched.length-1];if(O&&O.redirect){const{redirect:T}=O;let k=typeof T=="function"?T(g):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=D(k):{path:k},k.params={}),X({query:g.query,hash:g.hash,params:g.params},k)}}function ye(g,O){const T=l=P(g),k=c.value,G=g.state,Z=g.force,j=g.replace===!0,U=ae(T);if(U)return ye(X(D(U),{state:G,force:Z,replace:j}),O||T);const u=T;u.redirectedFrom=O;let d;return!Z&&au(r,k,T)&&(d=Bt(16,{to:u,from:k}),Tt(k,k,!0,!1)),(d?Promise.resolve(d):pe(u,k)).catch(m=>gt(m)?m:Q(m,u,k)).then(m=>{if(m){if(gt(m,2))return ye(X(D(m.to),{state:G,force:Z,replace:j}),O||u)}else m=Fe(u,k,!0,j,G);return Se(u,k,m),m})}function qe(g,O){const T=V(g,O);return T?Promise.reject(T):Promise.resolve()}function pe(g,O){let T;const[k,G,Z]=rf(g,O);T=hs(k.reverse(),"beforeRouteLeave",g,O);for(const U of k)U.leaveGuards.forEach(u=>{T.push(tt(u,g,O))});const j=qe.bind(null,g,O);return T.push(j),jt(T).then(()=>{T=[];for(const U of i.list())T.push(tt(U,g,O));return T.push(j),jt(T)}).then(()=>{T=hs(G,"beforeRouteUpdate",g,O);for(const U of G)U.updateGuards.forEach(u=>{T.push(tt(u,g,O))});return T.push(j),jt(T)}).then(()=>{T=[];for(const U of g.matched)if(U.beforeEnter&&!O.matched.includes(U))if(Array.isArray(U.beforeEnter))for(const u of U.beforeEnter)T.push(tt(u,g,O));else T.push(tt(U.beforeEnter,g,O));return T.push(j),jt(T)}).then(()=>(g.matched.forEach(U=>U.enterCallbacks={}),T=hs(Z,"beforeRouteEnter",g,O),T.push(j),jt(T))).then(()=>{T=[];for(const U of o.list())T.push(tt(U,g,O));return T.push(j),jt(T)}).catch(U=>gt(U,8)?U:Promise.reject(U))}function Se(g,O,T){for(const k of a.list())k(g,O,T)}function Fe(g,O,T,k,G){const Z=V(g,O);if(Z)return Z;const j=O===et,U=Ft?history.state:{};T&&(k||j?s.replace(g.fullPath,X({scroll:j&&U&&U.scroll},G)):s.push(g.fullPath,G)),c.value=g,Tt(g,O,T,j),be()}let $e;function It(){$e=s.listen((g,O,T)=>{const k=P(g),G=ae(k);if(G){ye(X(G,{replace:!0}),k).catch(cn);return}l=k;const Z=c.value;Ft&&mu(To(Z.fullPath,T.delta),Xn()),pe(k,Z).catch(j=>gt(j,4|8)?j:gt(j,2)?(ye(j.to,k).then(U=>{gt(U,4|16)&&!T.delta&&T.type===ln.pop&&s.go(-1,!1)}).catch(cn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Q(j,k,Z))).then(j=>{j=j||Fe(k,Z,!1),j&&(T.delta?s.go(-T.delta,!1):T.type===ln.pop&&gt(j,4|16)&&s.go(-1,!1)),Se(k,Z,j)}).catch(cn)})}let Et=fn(),wt=fn(),re;function Q(g,O,T){be(g);const k=wt.list();return k.length?k.forEach(G=>G(g,O,T)):console.error(g),Promise.reject(g)}function q(){return re&&c.value!==et?Promise.resolve():new Promise((g,O)=>{Et.add([g,O])})}function be(g){re||(re=!0,It(),Et.list().forEach(([O,T])=>g?T(g):O()),Et.reset())}function Tt(g,O,T,k){const{scrollBehavior:G}=t;if(!Ft||!G)return Promise.resolve();const Z=!T&&gu(To(g.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Qi().then(()=>G(g,O,Z)).then(j=>j&&pu(j)).catch(j=>Q(j,g,O))}const Be=g=>s.go(g);let Ce;const Ie=new Set;return{currentRoute:c,addRoute:b,removeRoute:A,hasRoute:C,getRoutes:B,resolve:P,options:t,push:z,replace:oe,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:wt.add,isReady:q,install(g){const O=this;g.component("RouterLink",Qu),g.component("RouterView",nf),g.config.globalProperties.$router=O,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(c)}),Ft&&!Ce&&c.value===et&&(Ce=!0,z(s.location).catch(G=>{}));const T={};for(const G in et)T[G]=ke(()=>c.value[G]);g.provide(Yn,O),g.provide(os,Yt(T)),g.provide(as,c);const k=g.unmount;Ie.add(g),g.unmount=function(){Ie.delete(g),Ie.size<1&&(l=et,$e&&$e(),c.value=et,Ce=!1,re=!1),k()}}}}function jt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function rf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>$t(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>$t(l,c))||s.push(c))}return[n,r,s]}function pp(){return Ne(Yn)}function mp(){return Ne(os)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},of=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,b=l&63;c||(b=64,o||(p=64)),r.push(n[f],n[h],n[p],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):of(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const b=a<<4&240|l>>2;if(r.push(b),h!==64){const A=l<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},cf=function(t){try{return af.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function ff(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function df(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hf(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=pf,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ht(s,a,r)}}function mf(t,e){return t.replace(gf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gf=/\{\$([^}]+)}/g;function _f(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vo(i)&&Vo(o)){if(!Zn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vf(t,e){const n=new yf(t,e);return n.subscribe.bind(n)}class yf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ps),s.error===void 0&&(s.error=ps),s.complete===void 0&&(s.complete=ps);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(o){}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ps(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ms(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function If(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(f){try{l(r.next(f))}catch(h){o(h)}}function c(f){try{l(r.throw(f))}catch(h){o(h)}}function l(f){f.done?i(f.value):s(f.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function Ef(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(f){return c([l,f])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=l[0]&2?s.return:l[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,l[1])).done)return i;switch(s=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,s=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(f){l=[6,f],s=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function gs(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function tr(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),s,i=[],o;try{for(;(e===void 0||e-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i}function Wo(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}var pn=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wf=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new lf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch(i){}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(Rf(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch(h){}try{for(var s=gs(this.instancesDeferred.entries()),i=s.next();!i.done;i=s.next()){var o=tr(i.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(h){}}}catch(h){n={error:h}}finally{try{i&&!i.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=_t),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return If(this,void 0,void 0,function(){var e;return Ef(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Wo(Wo([],tr(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),tr(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=_t),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=_t),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var s=e.options,i=s===void 0?{}:s,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=gs(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var f=tr(l.value,2),h=f[0],p=f[1],b=this.normalizeInstanceIdentifier(h);o===b&&p.resolve(a)}}catch(A){n={error:A}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);var o=this.instances.get(s);return o&&e(o,s),function(){i.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,s,i=this.onInitCallbacks.get(n);if(!!i)try{for(var o=gs(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,n)}catch(l){}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,s=r===void 0?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Tf(n),options:s}),this.instances.set(n,i),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=_t),this.component?this.component.multipleInstances?e:_t:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function Tf(t){return t===_t?void 0:t}function Rf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Af=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new wf(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Sf={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Cf=ee.INFO,Of={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Pf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Of[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zo{constructor(e){this.name=e,this._logLevel=Cf,this._logHandler=Pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ko="@firebase/app",Mf="0.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new zo("@firebase/app"),xf="@firebase/app-compat",Lf="@firebase/analytics-compat",Df="@firebase/analytics",Uf="@firebase/app-check-compat",Ff="@firebase/app-check",$f="@firebase/auth",Bf="@firebase/auth-compat",jf="@firebase/database",Hf="@firebase/database-compat",Vf="@firebase/functions",Wf="@firebase/functions-compat",zf="@firebase/installations",Kf="@firebase/installations-compat",qf="@firebase/messaging",Gf="@firebase/messaging-compat",Jf="@firebase/performance",Yf="@firebase/performance-compat",Xf="@firebase/remote-config",Qf="@firebase/remote-config-compat",Zf="@firebase/storage",ed="@firebase/storage-compat",td="@firebase/firestore",nd="@firebase/firestore-compat",rd="firebase",sd="9.1.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="[DEFAULT]",id={[Ko]:"fire-core",[xf]:"fire-core-compat",[Df]:"fire-analytics",[Lf]:"fire-analytics-compat",[Ff]:"fire-app-check",[Uf]:"fire-app-check-compat",[$f]:"fire-auth",[Bf]:"fire-auth-compat",[jf]:"fire-rtdb",[Hf]:"fire-rtdb-compat",[Vf]:"fire-fn",[Wf]:"fire-fn-compat",[zf]:"fire-iid",[Kf]:"fire-iid-compat",[qf]:"fire-fcm",[Gf]:"fire-fcm-compat",[Jf]:"fire-perf",[Yf]:"fire-perf-compat",[Xf]:"fire-rc",[Qf]:"fire-rc-compat",[Zf]:"fire-gcs",[ed]:"fire-gcs-compat",[td]:"fire-fst",[nd]:"fire-fst-compat","fire-js":"fire-js",[rd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Map,vs=new Map;function od(t,e){try{t.container.addComponent(e)}catch(n){_s.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rr(t){const e=t.name;if(vs.has(e))return _s.debug(`There were multiple attempts to register component ${e}.`),!1;vs.set(e,t);for(const n of nr.values())od(n,t);return!0}function Go(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},sr=new dn("app","Firebase",ad);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=sd;function gp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:qo,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw sr.create("bad-app-name",{appName:String(r)});const s=nr.get(r);if(s){if(Zn(t,s.options)&&Zn(n,s.config))return s;throw sr.create("duplicate-app",{appName:r})}const i=new Af(r);for(const a of vs.values())i.addComponent(a);const o=new cd(t,n,i);return nr.set(r,o),o}function ld(t=qo){const e=nr.get(t);if(!e)throw sr.create("no-app",{appName:t});return e}function or(t,e,n){var r;let s=(r=id[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_s.warn(a.join(" "));return}rr(new pn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t){rr(new pn("platform-logger",e=>new kf(e),"PRIVATE")),or(Ko,Mf,t),or("fire-js","")}ud();function Jo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fd=Jo,Yo=new dn("auth","Firebase",Jo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new zo("@firebase/auth");function ar(t,...e){Xo.logLevel<=ee.ERROR&&Xo.error(`Auth (${ir}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,...e){throw ys(t,...e)}function De(t,...e){return ys(t,...e)}function Qo(t,e,n){const r=Object.assign(Object.assign({},fd()),{[e]:n});return new dn("auth","Firebase",r).create(e,{appName:t.name})}function dd(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Le(t,"argument-error"),Qo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ys(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yo.create(t,...e)}function L(t,e,...n){if(!t)throw ys(e,...n)}function We(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ar(e),new Error(e)}function ze(t,e){t||We(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map;function Ke(t){ze(t instanceof Function,"Expected a class definition");let e=Zo.get(t);return e?(ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e){const n=Go(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zn(i,e!=null?e:{}))return s;Le(s,"already-initialized")}return n.initialize({options:e})}function pd(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ke);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function md(){return ea()==="http:"||ea()==="https:"}function ea(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(md()||ff()||"connection"in navigator)?navigator.onLine:!0}function _d(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ze(n>e,"Short delay should be less than long delay!"),this.isMobile=uf()||df()}get(){return gd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t,e){ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;We("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;We("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;We("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new mn(3e4,6e4);function bd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,r,s={}){return ta(t,s,()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=hn(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(Es.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),Es.fetch()(na(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ta(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vd),e);try{const s=new Ed(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ws(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ws(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ws(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Qo(t,f,l);Le(t,f)}}catch(s){if(s instanceof Ht)throw s;Le(t,"network-request-failed")}}async function Id(t,e,n,r,s={}){const i=await cr(t,e,n,r,s);return"mfaPendingCredential"in i&&Le(t,"multi-factor-auth-required",{serverResponse:i}),i}function na(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Is(t.config,s):`${t.config.apiScheme}://${s}`}class Ed{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(De(this.auth,"timeout")),yd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ws(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=De(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function Td(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function Rd(t,e=!1){const n=er(t),r=await n.getIdToken(e),s=Rs(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gn(Ts(s.auth_time)),issuedAtTime:gn(Ts(s.iat)),expirationTime:gn(Ts(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ts(t){return Number(t)*1e3}function Rs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ar("JWT malformed, contained fewer than 3 sections"),null;try{const s=cf(n);return s?JSON.parse(s):(ar("Failed to decode base64 JWT payload"),null)}catch(s){return ar("Caught error parsing JWT payload as JSON",s),null}}function Ad(t){const e=Rs(t);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&Sd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Sd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gn(this.lastLoginAt),this.creationTime=gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await _n(t,Td(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?kd(i.providerUserInfo):[],a=Pd(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ra(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Od(t){const e=er(t);await lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pd(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kd(t){return t.map(e=>{var{providerId:n}=e,r=ms(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nd(t,e){const n=await ta(t,{},()=>{const r=hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=na(t,s,"/v1/token",`key=${i}`);return Es.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ad(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Nd(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vn;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return We("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){L(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class vt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ms(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Cd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new ra(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _n(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rd(this,e)}reload(){return Od(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _n(this,wd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,B=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:z,isAnonymous:oe,providerData:ae,stsTokenManager:ye}=n;L(V&&ye,e,"internal-error");const qe=vn.fromJSON(this.name,ye);L(typeof V=="string",e,"internal-error"),nt(h,e.name),nt(p,e.name),L(typeof z=="boolean",e,"internal-error"),L(typeof oe=="boolean",e,"internal-error"),nt(b,e.name),nt(A,e.name),nt(B,e.name),nt(C,e.name),nt(P,e.name),nt(D,e.name);const pe=new vt({uid:V,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:oe,photoURL:A,phoneNumber:b,tenantId:B,stsTokenManager:qe,createdAt:P,lastLoginAt:D});return ae&&Array.isArray(ae)&&(pe.providerData=ae.map(Se=>Object.assign({},Se))),C&&(pe._redirectEventId=C),pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new vn;s.updateFromServerResponse(n);const i=new vt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await lr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sa.type="NONE";const ia=sa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e,n){return`firebase:${t}:${e}:${n}`}class Vt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ur(this.userKey,s.apiKey,i),this.fullPersistenceKey=ur("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vt(Ke(ia),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ke(ia);const o=ur(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=vt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch(f){}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Vt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch(f){}})),new Vt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(la(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fa(e))return"Blackberry";if(da(e))return"Webos";if(As(e))return"Safari";if((e.includes("chrome/")||ca(e))&&!e.includes("edge/"))return"Chrome";if(ua(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aa(t=le()){return/firefox\//i.test(t)}function As(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ca(t=le()){return/crios\//i.test(t)}function la(t=le()){return/iemobile/i.test(t)}function ua(t=le()){return/android/i.test(t)}function fa(t=le()){return/blackberry/i.test(t)}function da(t=le()){return/webos/i.test(t)}function fr(t=le()){return/iphone|ipad|ipod/i.test(t)}function Md(t=le()){var e;return fr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function xd(){return hf()&&document.documentMode===10}function ha(t=le()){return fr(t)||ua(t)||da(t)||fa(t)||/windows phone/i.test(t)||la(t)}function Ld(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t,e=[]){let n;switch(t){case"Browser":n=oa(le());break;case"Worker":n=`${oa(le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ma(this),this.idTokenSubscription=new ma(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yo,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ke(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await Vt.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_d()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?er(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ke(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Vt.create(this,[Ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ss(t){return er(t)}class ma{constructor(e){this.auth=e,this.observer=null,this.addObserver=vf(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return We("not implemented")}_getIdTokenResponse(e){return We("not implemented")}_linkToIdToken(e,n){return We("not implemented")}_getReauthenticationResolver(e){return We("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t,e){return Id(t,"POST","/v1/accounts:signInWithIdp",bd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="http://localhost";class yt extends ga{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Le("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ms(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yt(r,s);return Object.assign(o,i),o}_getIdTokenResponse(e){const n=this.buildRequest();return Wt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wt(e,n)}buildRequest(){const e={requestUri:Ud,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Cs{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends yn{constructor(){super("facebook.com")}static credential(e){return yt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch(n){return null}}}rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends yn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return yt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return st.credential(n,r)}catch(s){return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends yn{constructor(){super("github.com")}static credential(e){return yt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch(n){return null}}}it.GITHUB_SIGN_IN_METHOD="github.com";it.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends yn{constructor(){super("twitter.com")}static credential(e,n){return yt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ot.credential(n,r)}catch(s){return null}}}ot.TWITTER_SIGN_IN_METHOD="twitter.com";ot.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await vt._fromIdTokenResponse(e,r,s),o=_a(r);return new zt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_a(r);return new zt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _a(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ht{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,this.name="FirebaseError",Object.setPrototypeOf(this,dr.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(i=e.tenantId)!==null&&i!==void 0?i:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,s){return new dr(e,n,r,s)}}function va(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?dr._fromErrorAndOperation(t,i,e,r):i})}async function Fd(t,e,n=!1){const r=await _n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $d(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await _n(t,va(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=Rs(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),zt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Le(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(t,e,n=!1){const r="signIn",s=await va(t,r,e),i=await zt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}const hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hr,"1"),this.storage.removeItem(hr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){const t=le();return As(t)||fr(t)}const Hd=1e3,Vd=10;class ba extends ya{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jd()&&Ld(),this.fallbackToPolling=ha(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Vd):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Hd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ba.type="LOCAL";const Wd=ba;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends ya{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ia.type="SESSION";const Ea=Ia;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await zd(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Os("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return window}function qd(t){Ue().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){return typeof Ue().WorkerGlobalScope!="undefined"&&typeof Ue().importScripts=="function"}async function Gd(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function Jd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Yd(){return wa()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="firebaseLocalStorageDb",Xd=1,mr="firebaseLocalStorage",Ra="fbase_key";class bn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gr(t,e){return t.transaction([mr],e?"readwrite":"readonly").objectStore(mr)}function Qd(){const t=indexedDB.deleteDatabase(Ta);return new bn(t).toPromise()}function Ps(){const t=indexedDB.open(Ta,Xd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mr,{keyPath:Ra})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mr)?e(r):(r.close(),await Qd(),e(await Ps()))})})}async function Aa(t,e,n){const r=gr(t,!0).put({[Ra]:e,value:n});return new bn(r).toPromise()}async function Zd(t,e){const n=gr(t,!1).get(e),r=await new bn(n).toPromise();return r===void 0?null:r.value}function Sa(t,e){const n=gr(t,!0).delete(e);return new bn(n).toPromise()}const eh=800,th=3;class Ca{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ps(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>th)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pr._getInstance(Yd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gd(),!this.activeServiceWorker)return;this.sender=new Kd(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ps();return await Aa(e,hr,"1"),await Sa(e,hr),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Aa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zd(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gr(s,!1).getAll();return new bn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ca.type="LOCAL";const nh=Ca;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=De("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rh().appendChild(r)})}function ih(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new mn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e){return e?Ke(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends ga{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Wt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oh(t){return Bd(t.auth,new ks(t),t.bypassAuthState)}function ah(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),$d(n,new ks(t),t.bypassAuthState)}async function ch(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Fd(n,new ks(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oh;case"linkViaPopup":case"linkViaRedirect":return ch;case"reauthViaPopup":case"reauthViaRedirect":return ah;default:Le(this.auth,"internal-error")}}resolve(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new mn(2e3,1e4);async function _p(t,e,n){const r=Ss(t);dd(t,e,Cs);const s=Oa(r,n);return new bt(r,"signInViaPopup",e,s).executeNotNull()}class bt extends Pa{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,bt.currentPopupAction&&bt.currentPopupAction.cancel(),bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){ze(this.filter.length===1,"Popup operations only handle one event");const e=Os();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(De(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(De(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(De(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,lh.get())};e()}}bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="pendingRedirect",ka=new Map;class fh extends Pa{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await dh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dh(t,e){const n=hh(e),r=await Na(t)._get(n)==="true";return await Na(t)._remove(n),r}function Na(t){return Ke(t._redirectPersistence)}function hh(t){return ur(uh,t.config.apiKey,t.name)}async function ph(t,e,n=!1){const r=Ss(t),s=Oa(r,e),o=await new fh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=10*60*1e3;class gh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_h(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xa(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(De(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ma(e))}saveEventToCache(e){this.cachedEventUids.add(Ma(e)),this.lastProcessedEventTime=Date.now()}}function Ma(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xa({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _h(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xa(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bh=/^https?/;async function Ih(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vh(t);for(const n of e)try{if(Eh(n))return}catch(r){}Le(t,"unauthorized-domain")}function Eh(t){const e=bs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bh.test(n))return!1;if(yh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new mn(3e4,6e4);function La(){const t=Ue().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Th(t){return new Promise((e,n)=>{var r,s,i;function o(){La(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{La(),n(De(t,"network-request-failed"))},timeout:wh.get()})}if((s=(r=Ue().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=Ue().gapi)===null||i===void 0?void 0:i.load)o();else{const a=ih("iframefcb");return Ue()[a]=()=>{gapi.load?o():n(De(t,"network-request-failed"))},sh(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw _r=null,e})}let _r=null;function Rh(t){return _r=_r||Th(t),_r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=new mn(5e3,15e3),Sh="__/auth/iframe",Ch="emulator/auth/iframe",Oh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Ph=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kh(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Is(e,Ch):`https://${t.config.authDomain}/${Sh}`,r={apiKey:e.apiKey,appName:t.name,v:ir},s=Ph.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hn(r).slice(1)}`}async function Nh(t){const e=await Rh(t),n=Ue().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:kh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Oh,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=De(t,"network-request-failed"),a=Ue().setTimeout(()=>{i(o)},Ah.get());function c(){Ue().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xh=500,Lh=600,Dh="_blank",Uh="http://localhost";class Da{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Fh(t,e,n,r=xh,s=Lh){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Mh),{width:r.toString(),height:s.toString(),top:i,left:o}),l=le().toLowerCase();n&&(a=ca(l)?Dh:n),aa(l)&&(e=e||Uh,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[b,A])=>`${p}${b}=${A},`,"");if(Md(l)&&a!=="_self")return $h(e||"",a),new Da(null);const h=window.open(e||"",a,f);L(h,t,"popup-blocked");try{h.focus()}catch(p){}return new Da(h)}function $h(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="__/auth/handler",jh="emulator/auth/handler";function Ua(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ir,eventId:s};if(e instanceof Cs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_f(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof yn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Hh(t)}?${hn(a).slice(1)}`}function Hh({config:t}){return t.emulator?Is(t,jh):`https://${t.authDomain}/${Bh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="webStorageSupport";class Vh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ea,this._completeRedirectFn=ph}async _openPopup(e,n,r,s){var i;ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ua(e,n,r,bs(),s);return Fh(e,o,Os())}async _openRedirect(e,n,r,s){return await this._originValidation(e),qd(Ua(e,n,r,bs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ze(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await Nh(e),r=new gh(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ns,{type:Ns},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ns];o!==void 0&&n(!!o),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ih(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ha()||As()||fr()}}const Wh=Vh;var zh="@firebase/auth",Kh="0.18.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jh(t){rr(new pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{L(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),L(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pa(t)},c=new Dd(o,a);return pd(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rr(new pn("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(r=>new qh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(zh,Kh,Gh(t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t=ld()){const e=Go(t,"auth");return e.isInitialized()?e.getImmediate():hd(t,{popupRedirectResolver:Wh,persistence:[nh,Wd,Ea]})}Jh("Browser");function yp(t,e){return t.then(function(n){return[null,n]}).catch(function(n){return e&&Object.assign(n,e),[n,void 0]})}var Yh="firebase",Xh="9.1.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(Yh,Xh,"app");var Qh=!1;/*!
  * pinia v2.0.0-rc.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Zh=Symbol();var Fa;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Fa||(Fa={}));function bp(){const t=Xa(!0),e=t.run(()=>di({}));let n=[];const r=[],s=Fr({install(i){s._a=i,i.provide(Zh,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o))},use(i){return!this._a&&!Qh?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}export{lp as A,kc as B,ml as C,hp as D,dp as E,Re as F,st as G,fp as H,bp as I,Gn as J,up as K,he as a,zi as b,sp as c,ip as d,vi as e,ap as f,Qt as g,Vi as h,rp as i,op as j,ke as k,di as l,cp as m,Ir as n,Bi as o,br as p,Qi as q,np as r,gp as s,ep as t,mp as u,vp as v,yp as w,_p as x,pp as y,tp as z};
