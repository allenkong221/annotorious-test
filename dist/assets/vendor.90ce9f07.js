function br(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ua="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fa=br(Ua);function Ls(t){return!!t||t===""}function Ir(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ie(r)?ja(r):Ir(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ie(t))return t;if(se(t))return t}}const $a=/;(?![^(]*\))/g,Ba=/:(.+)/;function ja(t){const e={};return t.split($a).forEach(n=>{if(n){const r=n.split(Ba);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Er(t){let e="";if(ie(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Er(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zh=t=>t==null?"":F(t)||se(t)&&(t.toString===Bs||!$(t.toString))?JSON.stringify(t,Ds,2):String(t),Ds=(t,e)=>e&&e.__v_isRef?Ds(t,e.value):At(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Fs(e)?{[`Set(${e.size})`]:[...e.values()]}:se(e)&&!F(e)&&!js(e)?String(e):e,Y={},Rt=[],Te=()=>{},Ha=()=>!1,Va=/^on[^a-z]/,In=t=>Va.test(t),wr=t=>t.startsWith("onUpdate:"),ue=Object.assign,Us=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},za=Object.prototype.hasOwnProperty,z=(t,e)=>za.call(t,e),F=Array.isArray,At=t=>En(t)==="[object Map]",Fs=t=>En(t)==="[object Set]",$=t=>typeof t=="function",ie=t=>typeof t=="string",Tr=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",$s=t=>se(t)&&$(t.then)&&$(t.catch),Bs=Object.prototype.toString,En=t=>Bs.call(t),Wa=t=>En(t).slice(8,-1),js=t=>En(t)==="[object Object]",Rr=t=>ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wn=br(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ka=/-(\w)/g,Pe=Tn(t=>t.replace(Ka,(e,n)=>n?n.toUpperCase():"")),qa=/\B([A-Z])/g,St=Tn(t=>t.replace(qa,"-$1").toLowerCase()),Rn=Tn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ar=Tn(t=>t?`on${Rn(t)}`:""),qt=(t,e)=>!Object.is(t,e),An=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Sn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Sr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hs;const Ga=()=>Hs||(Hs=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let at;const Cn=[];class Vs{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&at&&(this.parent=at,this.index=(at.scopes||(at.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Cn.push(this),at=this)}off(){this.active&&(Cn.pop(),at=Cn[Cn.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Ja(t){return new Vs(t)}function Ya(t,e){e=e||at,e&&e.active&&e.effects.push(t)}const Cr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},zs=t=>(t.w&Ge)>0,Ws=t=>(t.n&Ge)>0,Xa=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ge},Qa=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];zs(s)&&!Ws(s)?s.delete(t):e[n++]=s,s.w&=~Ge,s.n&=~Ge}e.length=n}},Or=new WeakMap;let Gt=0,Ge=1;const Pr=30,Jt=[];let ct;const lt=Symbol(""),kr=Symbol("");class Nr{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Ya(this,r)}run(){if(!this.active)return this.fn();if(!Jt.includes(this))try{return Jt.push(ct=this),Za(),Ge=1<<++Gt,Gt<=Pr?Xa(this):Ks(this),this.fn()}finally{Gt<=Pr&&Qa(this),Ge=1<<--Gt,ut(),Jt.pop();const e=Jt.length;ct=e>0?Jt[e-1]:void 0}}stop(){this.active&&(Ks(this),this.onStop&&this.onStop(),this.active=!1)}}function Ks(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ct=!0;const Mr=[];function Ot(){Mr.push(Ct),Ct=!1}function Za(){Mr.push(Ct),Ct=!0}function ut(){const t=Mr.pop();Ct=t===void 0?!0:t}function _e(t,e,n){if(!qs())return;let r=Or.get(t);r||Or.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Cr()),Gs(s)}function qs(){return Ct&&ct!==void 0}function Gs(t,e){let n=!1;Gt<=Pr?Ws(t)||(t.n|=Ge,n=!zs(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function Be(t,e,n,r,s,i){const o=Or.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?Rr(n)&&a.push(o.get("length")):(a.push(o.get(lt)),At(t)&&a.push(o.get(kr)));break;case"delete":F(t)||(a.push(o.get(lt)),At(t)&&a.push(o.get(kr)));break;case"set":At(t)&&a.push(o.get(lt));break}if(a.length===1)a[0]&&xr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);xr(Cr(c))}}function xr(t,e){for(const n of F(t)?t:[...t])(n!==ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ec=br("__proto__,__v_isRef,__isVue"),Js=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Tr)),tc=Lr(),nc=Lr(!1,!0),rc=Lr(!0),Ys=sc();function sc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ot();const r=K(this)[e].apply(this,n);return ut(),r}}),t}function Lr(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?bc:ii:e?si:ri).get(r))return r;const o=F(r);if(!t&&o&&z(Ys,s))return Reflect.get(Ys,s,i);const a=Reflect.get(r,s,i);return(Tr(s)?Js.has(s):ec(s))||(t||_e(r,"get",s),e)?a:me(a)?!o||!Rr(s)?a.value:a:se(a)?t?oi(a):Yt(a):a}}const ic=Xs(),oc=Xs(!0);function Xs(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&(s=K(s),o=K(o),!F(n)&&me(o)&&!me(s)))return o.value=s,!0;const a=F(n)&&Rr(r)?Number(r)<n.length:z(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?qt(s,o)&&Be(n,"set",r,s):Be(n,"add",r,s)),c}}function ac(t,e){const n=z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Be(t,"delete",e,void 0),r}function cc(t,e){const n=Reflect.has(t,e);return(!Tr(e)||!Js.has(e))&&_e(t,"has",e),n}function lc(t){return _e(t,"iterate",F(t)?"length":lt),Reflect.ownKeys(t)}const Qs={get:tc,set:ic,deleteProperty:ac,has:cc,ownKeys:lc},uc={get:rc,set(t,e){return!0},deleteProperty(t,e){return!0}},fc=ue({},Qs,{get:nc,set:oc}),Dr=t=>t,On=t=>Reflect.getPrototypeOf(t);function Pn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);e!==i&&!n&&_e(s,"get",e),!n&&_e(s,"get",i);const{has:o}=On(s),a=r?Dr:n?Br:Xt;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function kn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return t!==s&&!e&&_e(r,"has",t),!e&&_e(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Nn(t,e=!1){return t=t.__v_raw,!e&&_e(K(t),"iterate",lt),Reflect.get(t,"size",t)}function Zs(t){t=K(t);const e=K(this);return On(e).has.call(e,t)||(e.add(t),Be(e,"add",t,t)),this}function ei(t,e){e=K(e);const n=K(this),{has:r,get:s}=On(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?qt(e,o)&&Be(n,"set",t,e):Be(n,"add",t,e),this}function ti(t){const e=K(this),{has:n,get:r}=On(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Be(e,"delete",t,void 0),i}function ni(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Be(t,"clear",void 0,void 0),n}function Mn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?Dr:t?Br:Xt;return!t&&_e(a,"iterate",lt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function xn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=At(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Dr:e?Br:Xt;return!e&&_e(i,"iterate",c?kr:lt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function Je(t){return function(...e){return t==="delete"?!1:this}}function dc(){const t={get(i){return Pn(this,i)},get size(){return Nn(this)},has:kn,add:Zs,set:ei,delete:ti,clear:ni,forEach:Mn(!1,!1)},e={get(i){return Pn(this,i,!1,!0)},get size(){return Nn(this)},has:kn,add:Zs,set:ei,delete:ti,clear:ni,forEach:Mn(!1,!0)},n={get(i){return Pn(this,i,!0)},get size(){return Nn(this,!0)},has(i){return kn.call(this,i,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Mn(!0,!1)},r={get(i){return Pn(this,i,!0,!0)},get size(){return Nn(this,!0)},has(i){return kn.call(this,i,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),e[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[t,n,e,r]}const[hc,pc,mc,gc]=dc();function Ur(t,e){const n=e?t?gc:mc:t?pc:hc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const _c={get:Ur(!1,!1)},vc={get:Ur(!1,!0)},yc={get:Ur(!0,!1)},ri=new WeakMap,si=new WeakMap,ii=new WeakMap,bc=new WeakMap;function Ic(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ec(t){return t.__v_skip||!Object.isExtensible(t)?0:Ic(Wa(t))}function Yt(t){return t&&t.__v_isReadonly?t:Fr(t,!1,Qs,_c,ri)}function wc(t){return Fr(t,!1,fc,vc,si)}function oi(t){return Fr(t,!0,uc,yc,ii)}function Fr(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ec(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Pt(t){return ai(t)?Pt(t.__v_raw):!!(t&&t.__v_isReactive)}function ai(t){return!!(t&&t.__v_isReadonly)}function ci(t){return Pt(t)||ai(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function $r(t){return Sn(t,"__v_skip",!0),t}const Xt=t=>se(t)?Yt(t):t,Br=t=>se(t)?oi(t):t;function li(t){qs()&&(t=K(t),t.dep||(t.dep=Cr()),Gs(t.dep))}function ui(t,e){t=K(t),t.dep&&xr(t.dep)}function me(t){return Boolean(t&&t.__v_isRef===!0)}function fi(t){return di(t,!1)}function Tc(t){return di(t,!0)}function di(t,e){return me(t)?t:new Rc(t,e)}class Rc{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:Xt(e)}get value(){return li(this),this._value}set value(e){e=this._shallow?e:K(e),qt(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Xt(e),ui(this))}}function Qt(t){return me(t)?t.value:t}const Ac={get:(t,e,n)=>Qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function hi(t){return Pt(t)?t:new Proxy(t,Ac)}class Sc{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Nr(e,()=>{this._dirty||(this._dirty=!0,ui(this))}),this.__v_isReadonly=r}get value(){const e=K(this);return li(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ke(t,e){let n,r;const s=$(t);return s?(n=t,r=Te):(n=t.get,r=t.set),new Sc(n,r,s||!r)}Promise.resolve();function Cc(t,e,...n){const r=t.vnode.props||Y;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Y;p?s=n.map(b=>b.trim()):h&&(s=n.map(Sr))}let a,c=r[a=Ar(e)]||r[a=Ar(Pe(e))];!c&&i&&(c=r[a=Ar(St(e))]),c&&Ae(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ae(l,t,6,s)}}function pi(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const f=pi(l,e,!0);f&&(a=!0,ue(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ue(o,i),r.set(t,o),o)}function jr(t,e){return!t||!In(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,St(e))||z(t,e))}let Ee=null,Ln=null;function Dn(t){const e=Ee;return Ee=t,Ln=t&&t.type.__scopeId||null,e}function ep(t){Ln=t}function tp(){Ln=null}function Oc(t,e=Ee,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$i(-1);const i=Dn(e),o=t(...s);return Dn(i),r._d&&$i(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Hr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:b,ctx:A,inheritAttrs:B}=t;let C,P;const D=Dn(t);try{if(n.shapeFlag&4){const W=s||r;C=xe(f.call(W,W,h,i,b,p,A)),P=c}else{const W=e;C=xe(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),P=e.props?c:Pc(c)}}catch(W){Zt.length=0,qn(W,t,1),C=he(Ye)}let V=C;if(P&&B!==!1){const W=Object.keys(P),{shapeFlag:oe}=V;W.length&&oe&(1|6)&&(o&&W.some(wr)&&(P=kc(P,o)),V=tn(V,P))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),C=V,Dn(D),C}const Pc=t=>{let e;for(const n in t)(n==="class"||n==="style"||In(n))&&((e||(e={}))[n]=t[n]);return e},kc=(t,e)=>{const n={};for(const r in t)(!wr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Nc(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?mi(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!jr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?mi(r,o,l):!0:!!o;return!1}function mi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!jr(n,i))return!0}return!1}function Mc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xc=t=>t.__isSuspense;function Lc(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Ol(t)}function Un(t,e){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[t]=e}}function Ne(t,e,n=!1){const r=ce||Ee;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r.proxy):e}}function gi(t){return $(t)?{setup:t,name:t.name}:t}const Vr=t=>!!t.type.__asyncLoader,_i=t=>t.type.__isKeepAlive;function Dc(t,e){vi(t,"a",e)}function Uc(t,e){vi(t,"da",e)}function vi(t,e,n=ce){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}t()});if(Fn(e,r,n),n){let s=n.parent;for(;s&&s.parent;)_i(s.parent.vnode)&&Fc(r,e,n,s),s=s.parent}}function Fc(t,e,n,r){const s=Fn(e,t,r,!0);yi(()=>{Us(r[e],s)},n)}function Fn(t,e,n=ce,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ot(),kt(n);const a=Ae(e,n,t,o);return pt(),ut(),a});return r?s.unshift(i):s.push(i),i}}const je=t=>(e,n=ce)=>(!Kn||t==="sp")&&Fn(t,e,n),$c=je("bm"),Bc=je("m"),jc=je("bu"),Hc=je("u"),Vc=je("bum"),yi=je("um"),zc=je("sp"),Wc=je("rtg"),Kc=je("rtc");function qc(t,e=ce){Fn("ec",t,e)}let zr=!0;function Gc(t){const e=Ei(t),n=t.proxy,r=t.ctx;zr=!1,e.beforeCreate&&bi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:A,activated:B,deactivated:C,beforeDestroy:P,beforeUnmount:D,destroyed:V,unmounted:W,render:oe,renderTracked:ae,renderTriggered:ye,errorCaptured:qe,serverPrefetch:pe,expose:Se,inheritAttrs:Ue,components:Fe,directives:bt,filters:It}=e;if(l&&Jc(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Q in o){const q=o[Q];$(q)&&(r[Q]=q.bind(n))}if(s){const Q=s.call(n,n);se(Q)&&(t.data=Yt(Q))}if(zr=!0,i)for(const Q in i){const q=i[Q],be=$(q)?q.bind(n,n):$(q.get)?q.get.bind(n,n):Te,wt=!$(q)&&$(q.set)?q.set.bind(n):Te,$e=ke({get:be,set:wt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>$e.value,set:Ce=>$e.value=Ce})}if(a)for(const Q in a)Ii(a[Q],r,n,Q);if(c){const Q=$(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(q=>{Un(q,Q[q])})}f&&bi(f,t,"c");function re(Q,q){F(q)?q.forEach(be=>Q(be.bind(n))):q&&Q(q.bind(n))}if(re($c,h),re(Bc,p),re(jc,b),re(Hc,A),re(Dc,B),re(Uc,C),re(qc,qe),re(Kc,ae),re(Wc,ye),re(Vc,D),re(yi,W),re(zc,pe),F(Se))if(Se.length){const Q=t.exposed||(t.exposed={});Se.forEach(q=>{Object.defineProperty(Q,q,{get:()=>n[q],set:be=>n[q]=be})})}else t.exposed||(t.exposed={});oe&&t.render===Te&&(t.render=oe),Ue!=null&&(t.inheritAttrs=Ue),Fe&&(t.components=Fe),bt&&(t.directives=bt)}function Jc(t,e,n=Te,r=!1){F(t)&&(t=Wr(t));for(const s in t){const i=t[s];let o;se(i)?"default"in i?o=Ne(i.from||s,i.default,!0):o=Ne(i.from||s):o=Ne(i),me(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function bi(t,e,n){Ae(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ii(t,e,n,r){const s=r.includes(".")?so(n,r):()=>n[r];if(ie(t)){const i=e[t];$(i)&&Jn(s,i)}else if($(t))Jn(s,t.bind(n));else if(se(t))if(F(t))t.forEach(i=>Ii(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Jn(s,i,t)}}function Ei(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>$n(c,l,o,!0)),$n(c,e,o)),i.set(e,c),c}function $n(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$n(t,i,n,!0),s&&s.forEach(o=>$n(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Yc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Yc={data:wi,props:ft,emits:ft,methods:ft,computed:ft,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:ft,directives:ft,watch:Qc,provide:wi,inject:Xc};function wi(t,e){return e?t?function(){return ue($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Xc(t,e){return ft(Wr(t),Wr(e))}function Wr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function ft(t,e){return t?ue(ue(Object.create(null),t),e):e}function Qc(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const r in e)n[r]=fe(t[r],e[r]);return n}function Zc(t,e,n,r=!1){const s={},i={};Sn(i,Vn,1),t.propsDefaults=Object.create(null),Ti(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:wc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function el(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];const b=e[p];if(c)if(z(i,p))b!==i[p]&&(i[p]=b,l=!0);else{const A=Pe(p);s[A]=Kr(c,a,A,b,t,!1)}else b!==i[p]&&(i[p]=b,l=!0)}}}else{Ti(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!z(e,h)&&((f=St(h))===h||!z(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Kr(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!z(e,h))&&(delete i[h],l=!0)}l&&Be(t,"set","$attrs")}function Ti(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(wn(c))continue;const l=e[c];let f;s&&z(s,f=Pe(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:jr(t.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||Y;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Kr(s,c,h,l[h],t,!z(l,h))}}return o}function Kr(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&$(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(kt(s),r=l[n]=c.call(null,e),pt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===St(n))&&(r=!0))}return r}function Ri(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const f=h=>{c=!0;const[p,b]=Ri(h,e,!0);ue(o,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,Rt),Rt;if(F(i))for(let f=0;f<i.length;f++){const h=Pe(i[f]);Ai(h)&&(o[h]=Y)}else if(i)for(const f in i){const h=Pe(f);if(Ai(h)){const p=i[f],b=o[h]=F(p)||$(p)?{type:p}:p;if(b){const A=Oi(Boolean,b.type),B=Oi(String,b.type);b[0]=A>-1,b[1]=B<0||A<B,(A>-1||z(b,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Ai(t){return t[0]!=="$"}function Si(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ci(t,e){return Si(t)===Si(e)}function Oi(t,e){return F(e)?e.findIndex(n=>Ci(n,t)):$(e)&&Ci(e,t)?0:-1}const Pi=t=>t[0]==="_"||t==="$stable",qr=t=>F(t)?t.map(xe):[xe(t)],tl=(t,e,n)=>{const r=Oc((...s)=>qr(e(...s)),n);return r._c=!1,r},ki=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Pi(s))continue;const i=t[s];if($(i))e[s]=tl(s,i,r);else if(i!=null){const o=qr(i);e[s]=()=>o}}},Ni=(t,e)=>{const n=qr(e);t.slots.default=()=>n},nl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),Sn(e,"_",n)):ki(e,t.slots={})}else t.slots={},e&&Ni(t,e);Sn(t.slots,Vn,1)},rl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Y;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ue(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ki(e,s)),o=e}else e&&(Ni(t,e),o={default:1});if(i)for(const a in s)!Pi(a)&&!(a in o)&&delete s[a]};function np(t,e){const n=Ee;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Y]=e[i];$(o)&&(o={mounted:o,updated:o}),o.deep&&mt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function dt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ot(),Ae(c,n,8,[t.el,a,t,e]),ut())}}function Mi(){return{app:null,config:{isNativeTag:Ha,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sl=0;function il(t,e){return function(r,s=null){s!=null&&!se(s)&&(s=null);const i=Mi(),o=new Set;let a=!1;const c=i.app={_uid:sl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kl,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...f)):$(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=he(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Zr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}const de=Lc;function ol(t){return al(t)}function al(t,e){const n=Ga();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=Te,cloneNode:A,insertStaticContent:B}=t,C=(u,d,m,v=null,_=null,w=null,R=!1,I=null,E=!!d.dynamicChildren)=>{if(u===d)return;u&&!en(u,d)&&(v=k(u),Ie(u,_,w,!0),u=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:S}=d;switch(y){case Yr:P(u,d,m,v);break;case Ye:D(u,d,m,v);break;case Bn:u==null&&V(d,m,v,R);break;case Re:bt(u,d,m,v,_,w,R,I,E);break;default:S&1?ae(u,d,m,v,_,w,R,I,E):S&6?It(u,d,m,v,_,w,R,I,E):(S&64||S&128)&&y.process(u,d,m,v,_,w,R,I,E,Z)}N!=null&&_&&Gr(N,u&&u.ref,w,d||u,!d)},P=(u,d,m,v)=>{if(u==null)r(d.el=a(d.children),m,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},D=(u,d,m,v)=>{u==null?r(d.el=c(d.children||""),m,v):d.el=u.el},V=(u,d,m,v)=>{[u.el,u.anchor]=B(u.children,d,m,v)},W=({el:u,anchor:d},m,v)=>{let _;for(;u&&u!==d;)_=p(u),r(u,m,v),u=_;r(d,m,v)},oe=({el:u,anchor:d})=>{let m;for(;u&&u!==d;)m=p(u),s(u),u=m;s(d)},ae=(u,d,m,v,_,w,R,I,E)=>{R=R||d.type==="svg",u==null?ye(d,m,v,_,w,R,I,E):Se(u,d,_,w,R,I,E)},ye=(u,d,m,v,_,w,R,I)=>{let E,y;const{type:N,props:S,shapeFlag:M,transition:x,patchFlag:H,dirs:ne}=u;if(u.el&&A!==void 0&&H===-1)E=u.el=A(u.el);else{if(E=u.el=o(u.type,w,S&&S.is,S),M&8?f(E,u.children):M&16&&pe(u.children,E,null,v,_,w&&N!=="foreignObject",R,I),ne&&dt(u,null,v,"created"),S){for(const te in S)te!=="value"&&!wn(te)&&i(E,te,null,S[te],w,u.children,v,_,T);"value"in S&&i(E,"value",null,S.value),(y=S.onVnodeBeforeMount)&&Me(y,v,u)}qe(E,u,u.scopeId,R,v)}ne&&dt(u,null,v,"beforeMount");const J=(!_||_&&!_.pendingBranch)&&x&&!x.persisted;J&&x.beforeEnter(E),r(E,d,m),((y=S&&S.onVnodeMounted)||J||ne)&&de(()=>{y&&Me(y,v,u),J&&x.enter(E),ne&&dt(u,null,v,"mounted")},_)},qe=(u,d,m,v,_)=>{if(m&&b(u,m),v)for(let w=0;w<v.length;w++)b(u,v[w]);if(_){let w=_.subTree;if(d===w){const R=_.vnode;qe(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},pe=(u,d,m,v,_,w,R,I,E=0)=>{for(let y=E;y<u.length;y++){const N=u[y]=I?Xe(u[y]):xe(u[y]);C(null,N,d,m,v,_,w,R,I)}},Se=(u,d,m,v,_,w,R)=>{const I=d.el=u.el;let{patchFlag:E,dynamicChildren:y,dirs:N}=d;E|=u.patchFlag&16;const S=u.props||Y,M=d.props||Y;let x;(x=M.onVnodeBeforeUpdate)&&Me(x,m,d,u),N&&dt(d,u,m,"beforeUpdate");const H=_&&d.type!=="foreignObject";if(y?Ue(u.dynamicChildren,y,I,m,v,H,w):R||be(u,d,I,null,m,v,H,w,!1),E>0){if(E&16)Fe(I,d,S,M,m,v,_);else if(E&2&&S.class!==M.class&&i(I,"class",null,M.class,_),E&4&&i(I,"style",S.style,M.style,_),E&8){const ne=d.dynamicProps;for(let J=0;J<ne.length;J++){const te=ne[J],we=S[te],Tt=M[te];(Tt!==we||te==="value")&&i(I,te,we,Tt,_,u.children,m,v,T)}}E&1&&u.children!==d.children&&f(I,d.children)}else!R&&y==null&&Fe(I,d,S,M,m,v,_);((x=M.onVnodeUpdated)||N)&&de(()=>{x&&Me(x,m,d,u),N&&dt(d,u,m,"updated")},v)},Ue=(u,d,m,v,_,w,R)=>{for(let I=0;I<d.length;I++){const E=u[I],y=d[I],N=E.el&&(E.type===Re||!en(E,y)||E.shapeFlag&(6|64))?h(E.el):m;C(E,y,N,null,v,_,w,R,!0)}},Fe=(u,d,m,v,_,w,R)=>{if(m!==v){for(const I in v){if(wn(I))continue;const E=v[I],y=m[I];E!==y&&I!=="value"&&i(u,I,y,E,R,d.children,_,w,T)}if(m!==Y)for(const I in m)!wn(I)&&!(I in v)&&i(u,I,m[I],null,R,d.children,_,w,T);"value"in v&&i(u,"value",m.value,v.value)}},bt=(u,d,m,v,_,w,R,I,E)=>{const y=d.el=u?u.el:a(""),N=d.anchor=u?u.anchor:a("");let{patchFlag:S,dynamicChildren:M,slotScopeIds:x}=d;x&&(I=I?I.concat(x):x),u==null?(r(y,m,v),r(N,m,v),pe(d.children,m,N,_,w,R,I,E)):S>0&&S&64&&M&&u.dynamicChildren?(Ue(u.dynamicChildren,M,m,_,w,R,I),(d.key!=null||_&&d===_.subTree)&&xi(u,d,!0)):be(u,d,m,N,_,w,R,I,E)},It=(u,d,m,v,_,w,R,I,E)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?_.ctx.activate(d,m,v,R,E):Et(d,m,v,_,w,R,E):re(u,d,E)},Et=(u,d,m,v,_,w,R)=>{const I=u.component=vl(u,v,_);if(_i(u)&&(I.ctx.renderer=Z),yl(I),I.asyncDep){if(_&&_.registerDep(I,Q),!u.el){const E=I.subTree=he(Ye);D(null,E,d,m)}return}Q(I,u,d,m,_,w,R)},re=(u,d,m)=>{const v=d.component=u.component;if(Nc(u,d,m))if(v.asyncDep&&!v.asyncResolved){q(v,d,m);return}else v.next=d,Sl(v.update),v.update();else d.component=u.component,d.el=u.el,v.vnode=d},Q=(u,d,m,v,_,w,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:S,u:M,parent:x,vnode:H}=u,ne=N,J;E.allowRecurse=!1,N?(N.el=H.el,q(u,N,R)):N=H,S&&An(S),(J=N.props&&N.props.onVnodeBeforeUpdate)&&Me(J,x,N,H),E.allowRecurse=!0;const te=Hr(u),we=u.subTree;u.subTree=te,C(we,te,h(we.el),k(we),u,_,w),N.el=te.el,ne===null&&Mc(u,te.el),M&&de(M,_),(J=N.props&&N.props.onVnodeUpdated)&&de(()=>Me(J,x,N,H),_)}else{let N;const{el:S,props:M}=d,{bm:x,m:H,parent:ne}=u,J=Vr(d);if(E.allowRecurse=!1,x&&An(x),!J&&(N=M&&M.onVnodeBeforeMount)&&Me(N,ne,d),E.allowRecurse=!0,S&&U){const te=()=>{u.subTree=Hr(u),U(S,u.subTree,u,_,null)};J?d.type.__asyncLoader().then(()=>!u.isUnmounted&&te()):te()}else{const te=u.subTree=Hr(u);C(null,te,m,v,u,_,w),d.el=te.el}if(H&&de(H,_),!J&&(N=M&&M.onVnodeMounted)){const te=d;de(()=>Me(N,ne,te),_)}d.shapeFlag&256&&u.a&&de(u.a,_),u.isMounted=!0,d=m=v=null}},E=new Nr(I,()=>Xi(u.update),u.scope),y=u.update=E.run.bind(E);y.id=u.uid,E.allowRecurse=y.allowRecurse=!0,y()},q=(u,d,m)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,el(u,d.props,v,m),rl(u,d.children,m),Ot(),rs(void 0,u.update),ut()},be=(u,d,m,v,_,w,R,I,E=!1)=>{const y=u&&u.children,N=u?u.shapeFlag:0,S=d.children,{patchFlag:M,shapeFlag:x}=d;if(M>0){if(M&128){$e(y,S,m,v,_,w,R,I,E);return}else if(M&256){wt(y,S,m,v,_,w,R,I,E);return}}x&8?(N&16&&T(y,_,w),S!==y&&f(m,S)):N&16?x&16?$e(y,S,m,v,_,w,R,I,E):T(y,_,w,!0):(N&8&&f(m,""),x&16&&pe(S,m,v,_,w,R,I,E))},wt=(u,d,m,v,_,w,R,I,E)=>{u=u||Rt,d=d||Rt;const y=u.length,N=d.length,S=Math.min(y,N);let M;for(M=0;M<S;M++){const x=d[M]=E?Xe(d[M]):xe(d[M]);C(u[M],x,m,null,_,w,R,I,E)}y>N?T(u,_,w,!0,!1,S):pe(d,m,v,_,w,R,I,E,S)},$e=(u,d,m,v,_,w,R,I,E)=>{let y=0;const N=d.length;let S=u.length-1,M=N-1;for(;y<=S&&y<=M;){const x=u[y],H=d[y]=E?Xe(d[y]):xe(d[y]);if(en(x,H))C(x,H,m,null,_,w,R,I,E);else break;y++}for(;y<=S&&y<=M;){const x=u[S],H=d[M]=E?Xe(d[M]):xe(d[M]);if(en(x,H))C(x,H,m,null,_,w,R,I,E);else break;S--,M--}if(y>S){if(y<=M){const x=M+1,H=x<N?d[x].el:v;for(;y<=M;)C(null,d[y]=E?Xe(d[y]):xe(d[y]),m,H,_,w,R,I,E),y++}}else if(y>M)for(;y<=S;)Ie(u[y],_,w,!0),y++;else{const x=y,H=y,ne=new Map;for(y=H;y<=M;y++){const ge=d[y]=E?Xe(d[y]):xe(d[y]);ge.key!=null&&ne.set(ge.key,y)}let J,te=0;const we=M-H+1;let Tt=!1,Ns=0;const Kt=new Array(we);for(y=0;y<we;y++)Kt[y]=0;for(y=x;y<=S;y++){const ge=u[y];if(te>=we){Ie(ge,_,w,!0);continue}let Oe;if(ge.key!=null)Oe=ne.get(ge.key);else for(J=H;J<=M;J++)if(Kt[J-H]===0&&en(ge,d[J])){Oe=J;break}Oe===void 0?Ie(ge,_,w,!0):(Kt[Oe-H]=y+1,Oe>=Ns?Ns=Oe:Tt=!0,C(ge,d[Oe],m,null,_,w,R,I,E),te++)}const Ms=Tt?cl(Kt):Rt;for(J=Ms.length-1,y=we-1;y>=0;y--){const ge=H+y,Oe=d[ge],xs=ge+1<N?d[ge+1].el:v;Kt[y]===0?C(null,Oe,m,xs,_,w,R,I,E):Tt&&(J<0||y!==Ms[J]?Ce(Oe,m,xs,2):J--)}}},Ce=(u,d,m,v,_=null)=>{const{el:w,type:R,transition:I,children:E,shapeFlag:y}=u;if(y&6){Ce(u.component.subTree,d,m,v);return}if(y&128){u.suspense.move(d,m,v);return}if(y&64){R.move(u,d,m,Z);return}if(R===Re){r(w,d,m);for(let S=0;S<E.length;S++)Ce(E[S],d,m,v);r(u.anchor,d,m);return}if(R===Bn){W(u,d,m);return}if(v!==2&&y&1&&I)if(v===0)I.beforeEnter(w),r(w,d,m),de(()=>I.enter(w),_);else{const{leave:S,delayLeave:M,afterLeave:x}=I,H=()=>r(w,d,m),ne=()=>{S(w,()=>{H(),x&&x()})};M?M(w,H,ne):ne()}else r(w,d,m)},Ie=(u,d,m,v=!1,_=!1)=>{const{type:w,props:R,ref:I,children:E,dynamicChildren:y,shapeFlag:N,patchFlag:S,dirs:M}=u;if(I!=null&&Gr(I,null,m,u,!0),N&256){d.ctx.deactivate(u);return}const x=N&1&&M,H=!Vr(u);let ne;if(H&&(ne=R&&R.onVnodeBeforeUnmount)&&Me(ne,d,u),N&6)O(u.component,m,v);else{if(N&128){u.suspense.unmount(m,v);return}x&&dt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,m,_,Z,v):y&&(w!==Re||S>0&&S&64)?T(y,d,m,!1,!0):(w===Re&&S&(128|256)||!_&&N&16)&&T(E,d,m),v&&yr(u)}(H&&(ne=R&&R.onVnodeUnmounted)||x)&&de(()=>{ne&&Me(ne,d,u),x&&dt(u,null,d,"unmounted")},m)},yr=u=>{const{type:d,el:m,anchor:v,transition:_}=u;if(d===Re){g(m,v);return}if(d===Bn){oe(u);return}const w=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:I}=_,E=()=>R(m,w);I?I(u.el,w,E):E()}else w()},g=(u,d)=>{let m;for(;u!==d;)m=p(u),s(u),u=m;s(d)},O=(u,d,m)=>{const{bum:v,scope:_,update:w,subTree:R,um:I}=u;v&&An(v),_.stop(),w&&(w.active=!1,Ie(R,u,d,m)),I&&de(I,d),de(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,m,v=!1,_=!1,w=0)=>{for(let R=w;R<u.length;R++)Ie(u[R],d,m,v,_)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),G=(u,d,m)=>{u==null?d._vnode&&Ie(d._vnode,null,null,!0):C(d._vnode||null,u,d,null,null,null,m),eo(),d._vnode=u},Z={p:C,um:Ie,m:Ce,r:yr,mt:Et,mc:pe,pc:be,pbc:Ue,n:k,o:t};let j,U;return e&&([j,U]=e(Z)),{render:G,hydrate:j,createApp:il(G,j)}}function Gr(t,e,n,r,s=!1){if(F(t)){t.forEach((p,b)=>Gr(p,e&&(F(e)?e[b]:e),n,r,s));return}if(Vr(r)&&!s)return;const i=r.shapeFlag&4?Zr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Y?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ie(l)?(f[l]=null,z(h,l)&&(h[l]=null)):me(l)&&(l.value=null)),ie(c)){const p=()=>{f[c]=o,z(h,c)&&(h[c]=o)};o?(p.id=-1,de(p,n)):p()}else if(me(c)){const p=()=>{c.value=o};o?(p.id=-1,de(p,n)):p()}else $(c)&&Qe(c,a,12,[o,f])}function Me(t,e,n,r=null){Ae(t,e,7,[n,r])}function xi(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Xe(s[i]),a.el=o.el),n||xi(o,a))}}function cl(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ll=t=>t.__isTeleport,Jr="components";function rp(t,e){return Di(Jr,t,!0,e)||t}const Li=Symbol();function sp(t){return ie(t)?Di(Jr,t,!1)||t:t||Li}function Di(t,e,n=!0,r=!1){const s=Ee||ce;if(s){const i=s.type;if(t===Jr){const a=wl(i);if(a&&(a===e||a===Pe(e)||a===Rn(Pe(e))))return i}const o=Ui(s[t]||i[t],e)||Ui(s.appContext[t],e);return!o&&r?i:o}}function Ui(t,e){return t&&(t[e]||t[Pe(e)]||t[Rn(Pe(e))])}const Re=Symbol(void 0),Yr=Symbol(void 0),Ye=Symbol(void 0),Bn=Symbol(void 0),Zt=[];let ht=null;function Fi(t=!1){Zt.push(ht=t?null:[])}function ul(){Zt.pop(),ht=Zt[Zt.length-1]||null}let jn=1;function $i(t){jn+=t}function Bi(t){return t.dynamicChildren=jn>0?ht||Rt:null,ul(),jn>0&&ht&&ht.push(t),t}function ip(t,e,n,r,s,i){return Bi(Vi(t,e,n,r,s,i,!0))}function ji(t,e,n,r,s){return Bi(he(t,e,n,r,s,!0))}function Hn(t){return t?t.__v_isVNode===!0:!1}function en(t,e){return t.type===e.type&&t.key===e.key}const Vn="__vInternal",Hi=({key:t})=>t!=null?t:null,zn=({ref:t})=>t!=null?ie(t)||me(t)||$(t)?{i:Ee,r:t}:t:null;function Vi(t,e=null,n=null,r=0,s=null,i=t===Re?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hi(e),ref:e&&zn(e),scopeId:Ln,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Xr(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ie(n)?8:16),jn>0&&!o&&ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ht.push(c),c}const he=fl;function fl(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Li)&&(t=Ye),Hn(t)){const a=tn(t,e,!0);return n&&Xr(a,n),a}if(Tl(t)&&(t=t.__vccOpts),e){e=dl(e);let{class:a,style:c}=e;a&&!ie(a)&&(e.class=Er(a)),se(c)&&(ci(c)&&!F(c)&&(c=ue({},c)),e.style=Ir(c))}const o=ie(t)?1:xc(t)?128:ll(t)?64:se(t)?4:$(t)?2:0;return Vi(t,e,n,r,s,o,i,!0)}function dl(t){return t?ci(t)||Vn in t?ue({},t):t:null}function tn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?pl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Hi(a),ref:e&&e.ref?n&&s?F(s)?s.concat(zn(e)):[s,zn(e)]:zn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tn(t.ssContent),ssFallback:t.ssFallback&&tn(t.ssFallback),el:t.el,anchor:t.anchor}}function hl(t=" ",e=0){return he(Yr,null,t,e)}function op(t,e){const n=he(Bn,null,t);return n.staticCount=e,n}function ap(t="",e=!1){return e?(Fi(),ji(Ye,null,t)):he(Ye,null,t)}function xe(t){return t==null||typeof t=="boolean"?he(Ye):F(t)?he(Re,null,t.slice()):typeof t=="object"?Xe(t):he(Yr,null,String(t))}function Xe(t){return t.el===null||t.memo?t:tn(t)}function Xr(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),Xr(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Vn in e)?e._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ee},n=32):(e=String(e),r&64?(n=16,e=[hl(e)]):n=8);t.children=e,t.shapeFlag|=n}function pl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Er([e.class,r.class]));else if(s==="style")e.style=Ir([e.style,r.style]);else if(In(s)){const i=e[s],o=r[s];i!==o&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function cp(t,e,n,r){let s;const i=n&&n[r];if(F(t)||ie(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(se(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function lp(t,e,n={},r,s){if(Ee.isCE)return he("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Fi();const o=i&&zi(i(n)),a=ji(Re,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function zi(t){return t.some(e=>Hn(e)?!(e.type===Ye||e.type===Re&&!zi(e.children)):!0)?t:null}const Qr=t=>t?Wi(t)?Zr(t)||t.proxy:Qr(t.parent):null,Wn=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qr(t.parent),$root:t=>Qr(t.root),$emit:t=>t.emit,$options:t=>Ei(t),$forceUpdate:t=>()=>Xi(t.update),$nextTick:t=>Yi.bind(t.proxy),$watch:t=>Pl.bind(t)}),ml={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 0:return r[e];case 1:return s[e];case 3:return n[e];case 2:return i[e]}else{if(r!==Y&&z(r,e))return o[e]=0,r[e];if(s!==Y&&z(s,e))return o[e]=1,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=2,i[e];if(n!==Y&&z(n,e))return o[e]=3,n[e];zr&&(o[e]=4)}}const f=Wn[e];let h,p;if(f)return e==="$attrs"&&_e(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Y&&z(n,e))return o[e]=3,n[e];if(p=c.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==Y&&z(s,e))s[e]=n;else if(r!==Y&&z(r,e))r[e]=n;else if(z(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return n[o]!==void 0||t!==Y&&z(t,o)||e!==Y&&z(e,o)||(a=i[0])&&z(a,o)||z(r,o)||z(Wn,o)||z(s.config.globalProperties,o)}},gl=Mi();let _l=0;function vl(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gl,i={uid:_l++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new Vs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ri(r,s),emitsOptions:pi(r,s),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Cc.bind(null,i),t.ce&&t.ce(i),i}let ce=null;const kt=t=>{ce=t,t.scope.on()},pt=()=>{ce&&ce.scope.off(),ce=null};function Wi(t){return t.vnode.shapeFlag&4}let Kn=!1;function yl(t,e=!1){Kn=e;const{props:n,children:r}=t.vnode,s=Wi(t);Zc(t,n,s,e),nl(t,r);const i=s?bl(t,e):void 0;return Kn=!1,i}function bl(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=$r(new Proxy(t.ctx,ml));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?El(t):null;kt(t),Ot();const i=Qe(r,t,0,[t.props,s]);if(ut(),pt(),$s(i)){if(i.then(pt,pt),e)return i.then(o=>{Ki(t,o,e)}).catch(o=>{qn(o,t,0)});t.asyncDep=i}else Ki(t,i,e)}else Gi(t,e)}function Ki(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=hi(e)),Gi(t,n)}let qi;function Gi(t,e,n){const r=t.type;if(!t.render){if(!e&&qi&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ue(ue({isCustomElement:i,delimiters:a},o),c);r.render=qi(s,l)}}t.render=r.render||Te}kt(t),Ot(),Gc(t),ut(),pt()}function Il(t){return new Proxy(t.attrs,{get(e,n){return _e(t,"get","$attrs"),e[n]}})}function El(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Il(t))},slots:t.slots,emit:t.emit,expose:e}}function Zr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(hi($r(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wn)return Wn[n](t)}}))}function wl(t){return $(t)&&t.displayName||t.name}function Tl(t){return $(t)&&"__vccOpts"in t}function Qe(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){qn(i,e,n)}return s}function Ae(t,e,n,r){if($(t)){const i=Qe(t,e,n,r);return i&&$s(i)&&i.catch(o=>{qn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ae(t[i],e,n,r));return s}function qn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Qe(c,null,10,[t,o,a]);return}}Rl(t,n,s,r)}function Rl(t,e,n,r=!0){console.error(t)}let Gn=!1,es=!1;const ve=[];let He=0;const nn=[];let rn=null,Nt=0;const sn=[];let Ze=null,Mt=0;const Ji=Promise.resolve();let ts=null,ns=null;function Yi(t){const e=ts||Ji;return t?e.then(this?t.bind(this):t):e}function Al(t){let e=He+1,n=ve.length;for(;e<n;){const r=e+n>>>1;on(ve[r])<t?e=r+1:n=r}return e}function Xi(t){(!ve.length||!ve.includes(t,Gn&&t.allowRecurse?He+1:He))&&t!==ns&&(t.id==null?ve.push(t):ve.splice(Al(t.id),0,t),Qi())}function Qi(){!Gn&&!es&&(es=!0,ts=Ji.then(to))}function Sl(t){const e=ve.indexOf(t);e>He&&ve.splice(e,1)}function Zi(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Qi()}function Cl(t){Zi(t,rn,nn,Nt)}function Ol(t){Zi(t,Ze,sn,Mt)}function rs(t,e=null){if(nn.length){for(ns=e,rn=[...new Set(nn)],nn.length=0,Nt=0;Nt<rn.length;Nt++)rn[Nt]();rn=null,Nt=0,ns=null,rs(t,e)}}function eo(t){if(sn.length){const e=[...new Set(sn)];if(sn.length=0,Ze){Ze.push(...e);return}for(Ze=e,Ze.sort((n,r)=>on(n)-on(r)),Mt=0;Mt<Ze.length;Mt++)Ze[Mt]();Ze=null,Mt=0}}const on=t=>t.id==null?1/0:t.id;function to(t){es=!1,Gn=!0,rs(t),ve.sort((n,r)=>on(n)-on(r));const e=Te;try{for(He=0;He<ve.length;He++){const n=ve[He];n&&n.active!==!1&&Qe(n,null,14)}}finally{He=0,ve.length=0,eo(),Gn=!1,ts=null,(ve.length||nn.length||sn.length)&&to(t)}}const no={};function Jn(t,e,n){return ro(t,e,n)}function ro(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Y){const a=ce;let c,l=!1,f=!1;if(me(t)?(c=()=>t.value,l=!!t._shallow):Pt(t)?(c=()=>t,r=!0):F(t)?(f=!0,l=t.some(Pt),c=()=>t.map(P=>{if(me(P))return P.value;if(Pt(P))return mt(P);if($(P))return Qe(P,a,2)})):$(t)?e?c=()=>Qe(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ae(t,a,3,[p])}:c=Te,e&&r){const P=c;c=()=>mt(P())}let h,p=P=>{h=C.onStop=()=>{Qe(P,a,4)}};if(Kn)return p=Te,e?n&&Ae(e,a,3,[c(),f?[]:void 0,p]):c(),Te;let b=f?[]:no;const A=()=>{if(!!C.active)if(e){const P=C.run();(r||l||(f?P.some((D,V)=>qt(D,b[V])):qt(P,b)))&&(h&&h(),Ae(e,a,3,[P,b===no?void 0:b,p]),b=P)}else C.run()};A.allowRecurse=!!e;let B;s==="sync"?B=A:s==="post"?B=()=>de(A,a&&a.suspense):B=()=>{!a||a.isMounted?Cl(A):A()};const C=new Nr(c,B);return e?n?A():b=C.run():s==="post"?de(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&Us(a.scope.effects,C)}}function Pl(t,e,n){const r=this.proxy,s=ie(t)?t.includes(".")?so(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ce;kt(this);const a=ro(s,i.bind(r),n);return o?kt(o):pt(),a}function so(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function mt(t,e){if(!se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),me(t))mt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)mt(t[n],e);else if(Fs(t)||At(t))t.forEach(n=>{mt(n,e)});else if(js(t))for(const n in t)mt(t[n],e);return t}function io(t,e,n){const r=arguments.length;return r===2?se(e)&&!F(e)?Hn(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hn(n)&&(n=[n]),he(t,e,n))}const kl="3.2.19",Nl="http://www.w3.org/2000/svg",xt=typeof document!="undefined"?document:null,oo=new Map,Ml={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?xt.createElementNS(Nl,t):xt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const s=n?n.previousSibling:e.lastChild;let i=oo.get(t);if(!i){const o=xt.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}oo.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xl(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ll(t,e,n){const r=t.style,s=r.display;if(!n)t.removeAttribute("style");else if(ie(n))e!==n&&(r.cssText=n);else{for(const i in n)ss(r,i,n[i]);if(e&&!ie(e))for(const i in e)n[i]==null&&ss(r,i,"")}"_vod"in t&&(r.display=s)}const ao=/\s*!important$/;function ss(t,e,n){if(F(n))n.forEach(r=>ss(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Dl(t,e);ao.test(n)?t.setProperty(St(r),n.replace(ao,""),"important"):t[r]=n}}const co=["Webkit","Moz","ms"],is={};function Dl(t,e){const n=is[e];if(n)return n;let r=Pe(e);if(r!=="filter"&&r in t)return is[e]=r;r=Rn(r);for(let s=0;s<co.length;s++){const i=co[s]+r;if(i in t)return is[e]=i}return e}const lo="http://www.w3.org/1999/xlink";function Ul(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(lo,e.slice(6,e.length)):t.setAttributeNS(lo,e,n);else{const i=Fa(e);n==null||i&&!Ls(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Fl(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Ls(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch(c){}t.removeAttribute(e);return}}try{t[e]=n}catch(a){}}let Yn=Date.now,uo=!1;if(typeof window!="undefined"){Yn()>document.createEvent("Event").timeStamp&&(Yn=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);uo=!!(t&&Number(t[1])<=53)}let os=0;const $l=Promise.resolve(),Bl=()=>{os=0},jl=()=>os||($l.then(Bl),os=Yn());function Lt(t,e,n,r){t.addEventListener(e,n,r)}function Hl(t,e,n,r){t.removeEventListener(e,n,r)}function Vl(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=zl(e);if(r){const l=i[e]=Wl(r,s);Lt(t,a,l,c)}else o&&(Hl(t,a,o,c),i[e]=void 0)}}const fo=/(?:Once|Passive|Capture)$/;function zl(t){let e;if(fo.test(t)){e={};let n;for(;n=t.match(fo);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[St(t.slice(2)),e]}function Wl(t,e){const n=r=>{const s=r.timeStamp||Yn();(uo||s>=n.attached-1)&&Ae(Kl(r,n.value),e,5,[r])};return n.value=t,n.attached=jl(),n}function Kl(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r(s))}else return e}const ho=/^on[a-z]/,ql=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?xl(t,r,s):e==="style"?Ll(t,n,r):In(e)?wr(e)||Vl(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gl(t,e,r,s))?Fl(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ul(t,e,r,s))};function Gl(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ho.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ho.test(e)&&ie(n)?!1:e in t}const po=t=>{const e=t.props["onUpdate:modelValue"];return F(e)?n=>An(e,n):e};function Jl(t){t.target.composing=!0}function mo(t){const e=t.target;e.composing&&(e.composing=!1,Yl(e,"input"))}function Yl(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const up={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=po(s);const i=r||s.props&&s.props.type==="number";Lt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Sr(a)),t._assign(a)}),n&&Lt(t,"change",()=>{t.value=t.value.trim()}),e||(Lt(t,"compositionstart",Jl),Lt(t,"compositionend",mo),Lt(t,"change",mo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=po(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Sr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},fp={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):an(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),an(t,!0),r.enter(t)):r.leave(t,()=>{an(t,!1)}):an(t,e))},beforeUnmount(t,{value:e}){an(t,e)}};function an(t,e){t.style.display=e?t._vod:"none"}const Xl=ue({patchProp:ql},Ml);let go;function Ql(){return go||(go=ol(Xl))}const dp=(...t)=>{const e=Ql().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Zl(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Zl(t){return ie(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const _o=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Dt=t=>_o?Symbol(t):"_vr_"+t,eu=Dt("rvlm"),vo=Dt("rvd"),Xn=Dt("r"),as=Dt("rl"),cs=Dt("rvl"),Ut=typeof window!="undefined";function tu(t){return t.__esModule||_o&&t[Symbol.toStringTag]==="Module"}const X=Object.assign;function ls(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const cn=()=>{},nu=/\/$/,ru=t=>t.replace(nu,"");function us(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=au(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function su(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iu(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ft(e.matched[r],n.matched[s])&&bo(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ft(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bo(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ou(t[n],e[n]))return!1;return!0}function ou(t,e){return Array.isArray(t)?Io(t,e):Array.isArray(e)?Io(e,t):t===e}function Io(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function au(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ln;(function(t){t.pop="pop",t.push="push"})(ln||(ln={}));var un;(function(t){t.back="back",t.forward="forward",t.unknown=""})(un||(un={}));function cu(t){if(!t)if(Ut){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ru(t)}const lu=/^[^#]+#/;function uu(t,e){return t.replace(lu,"#")+e}function fu(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qn=()=>({left:window.pageXOffset,top:window.pageYOffset});function du(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=fu(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Eo(t,e){return(history.state?history.state.position-e:-1)+t}const fs=new Map;function hu(t,e){fs.set(t,e)}function pu(t){const e=fs.get(t);return fs.delete(t),e}let mu=()=>location.protocol+"//"+location.host;function wo(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),yo(c,"")}return yo(n,t)+r+s}function gu(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const b=wo(t,location),A=n.value,B=e.value;let C=0;if(p){if(n.value=b,e.value=p,o&&o===A){o=null;return}C=B?p.position-B.position:0}else r(b);s.forEach(P=>{P(n.value,A,{delta:C,type:ln.pop,direction:C?C>0?un.forward:un.back:un.unknown})})};function c(){o=n.value}function l(p){s.push(p);const b=()=>{const A=s.indexOf(p);A>-1&&s.splice(A,1)};return i.push(b),b}function f(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:Qn()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function To(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qn():null}}function _u(t){const{history:e,location:n}=window,r={value:wo(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:mu()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function o(c,l){const f=X({},e.state,To(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=X({},s.value,e.state,{forward:c,scroll:Qn()});i(f.current,f,!0);const h=X({},To(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function hp(t){t=cu(t);const e=_u(t),n=gu(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:uu.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vu(t){return typeof t=="string"||t&&typeof t=="object"}function Ro(t){return typeof t=="string"||typeof t=="symbol"}const et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ao=Dt("nf");var So;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(So||(So={}));function $t(t,e){return X(new Error,{type:t,[Ao]:!0},e)}function gt(t,e){return t instanceof Error&&Ao in t&&(e==null||!!(t.type&e))}const Co="[^/]+?",yu={sensitive:!1,strict:!1,start:!0,end:!0},bu=/[.+*?^${}()[\]/\\]/g;function Iu(t,e){const n=X({},yu,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(bu,"\\$&"),b+=40;else if(p.type===1){const{value:A,repeatable:B,optional:C,regexp:P}=p;i.push({name:A,repeatable:B,optional:C});const D=P||Co;if(D!==Co){b+=10;try{new RegExp(`(${D})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${A}" (${D}): `+W.message)}}let V=B?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(V=C&&l.length<2?`(?:/${V})`:"/"+V),C&&(V+="?"),s+=V,b+=20,C&&(b+=-8),B&&(b+=-20),D===".*"&&(b+=-50)}f.push(b)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",A=i[p-1];h[A.name]=b&&A.repeatable?b.split("/"):b}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:A,repeatable:B,optional:C}=b,P=A in l?l[A]:"";if(Array.isArray(P)&&!B)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(P)?P.join("/"):P;if(!D)if(C)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);f+=D}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Eu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function wu(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Eu(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Tu={type:0,value:""},Ru=/[a-zA-Z0-9_]/;function Au(t){if(!t)return[[]];if(t==="/")return[[Tu]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${l}": ${b}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Ru.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Su(t,e,n){const r=Iu(Au(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Cu(t,e){const n=[],r=new Map;e=Po({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const b=!p,A=Pu(f);A.aliasOf=p&&p.record;const B=Po(e,f),C=[A];if("alias"in f){const V=typeof f.alias=="string"?[f.alias]:f.alias;for(const W of V)C.push(X({},A,{components:p?p.record.components:A.components,path:W,aliasOf:p?p.record:A}))}let P,D;for(const V of C){const{path:W}=V;if(h&&W[0]!=="/"){const oe=h.record.path,ae=oe[oe.length-1]==="/"?"":"/";V.path=h.record.path+(W&&ae+W)}if(P=Su(V,h,B),p?p.alias.push(P):(D=D||P,D!==P&&D.alias.push(P),b&&f.name&&!Oo(P)&&o(f.name)),"children"in A){const oe=A.children;for(let ae=0;ae<oe.length;ae++)i(oe[ae],P,p&&p.children[ae])}p=p||P,c(P)}return D?()=>{o(D)}:cn}function o(f){if(Ro(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&wu(f,n[h])>=0;)h++;n.splice(h,0,f),f.record.name&&!Oo(f)&&r.set(f.record.name,f)}function l(f,h){let p,b={},A,B;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw $t(1,{location:f});B=p.record.name,b=X(Ou(h.params,p.keys.filter(D=>!D.optional).map(D=>D.name)),f.params),A=p.stringify(b)}else if("path"in f)A=f.path,p=n.find(D=>D.re.test(A)),p&&(b=p.parse(A),B=p.record.name);else{if(p=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!p)throw $t(1,{location:f,currentLocation:h});B=p.record.name,b=X({},h.params,f.params),A=p.stringify(b)}const C=[];let P=p;for(;P;)C.unshift(P.record),P=P.parent;return{name:B,path:A,params:b,matched:C,meta:Nu(C)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ou(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Pu(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ku(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ku(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Oo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Nu(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Po(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const ko=/#/g,Mu=/&/g,xu=/\//g,Lu=/=/g,Du=/\?/g,No=/\+/g,Uu=/%5B/g,Fu=/%5D/g,Mo=/%5E/g,$u=/%60/g,xo=/%7B/g,Bu=/%7C/g,Lo=/%7D/g,ju=/%20/g;function ds(t){return encodeURI(""+t).replace(Bu,"|").replace(Uu,"[").replace(Fu,"]")}function Hu(t){return ds(t).replace(xo,"{").replace(Lo,"}").replace(Mo,"^")}function hs(t){return ds(t).replace(No,"%2B").replace(ju,"+").replace(ko,"%23").replace(Mu,"%26").replace($u,"`").replace(xo,"{").replace(Lo,"}").replace(Mo,"^")}function Vu(t){return hs(t).replace(Lu,"%3D")}function zu(t){return ds(t).replace(ko,"%23").replace(Du,"%3F")}function Wu(t){return t==null?"":zu(t).replace(xu,"%2F")}function Zn(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Ku(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(No," "),o=i.indexOf("="),a=Zn(o<0?i:i.slice(0,o)),c=o<0?null:Zn(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Do(t){let e="";for(let n in t){const r=t[n];if(n=Vu(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&hs(i)):[r&&hs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qu(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function tt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a($t(4,{from:n,to:e})):h instanceof Error?a(h):vu(h)?a($t(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function ps(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Gu(a)){const l=(a.__vccOpts||a)[e];l&&s.push(tt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=tu(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&tt(p,n,r,i,o)()}))}}return s}function Gu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uo(t){const e=Ne(Xn),n=Ne(as),r=ke(()=>e.resolve(Qt(t.to))),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Ft.bind(null,f));if(p>-1)return p;const b=Fo(c[l-2]);return l>1&&Fo(f)===b&&h[h.length-1].path!==b?h.findIndex(Ft.bind(null,c[l-2])):p}),i=ke(()=>s.value>-1&&Qu(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&bo(n.params,r.value.params));function a(c={}){return Xu(c)?e[Qt(t.replace)?"replace":"push"](Qt(t.to)).catch(cn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ju=gi({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uo,setup(t,{slots:e}){const n=Yt(Uo(t)),{options:r}=Ne(Xn),s=ke(()=>({[$o(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$o(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:io("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Yu=Ju;function Xu(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qu(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Fo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $o=(t,e,n)=>t!=null?t:e!=null?e:n,Zu=gi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Ne(cs),s=ke(()=>t.route||r.value),i=Ne(vo,0),o=ke(()=>s.value.matched[i]);Un(vo,i+1),Un(eu,o),Un(cs,s);const a=fi();return Jn(()=>[a.value,o.value,t.name],([c,l,f],[h,p,b])=>{l&&(l.instances[f]=c,p&&p!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!Ft(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return Bo(n.default,{Component:f,route:c});const p=l.props[t.name],b=p?p===!0?c.params:typeof p=="function"?p(c):p:null,B=io(f,X({},b,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Bo(n.default,{Component:B,route:c})||B}}});function Bo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ef=Zu;function pp(t){const e=Cu(t.routes,t),n=t.parseQuery||Ku,r=t.stringifyQuery||Do,s=t.history,i=fn(),o=fn(),a=fn(),c=Tc(et);let l=et;Ut&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ls.bind(null,g=>""+g),h=ls.bind(null,Wu),p=ls.bind(null,Zn);function b(g,O){let T,k;return Ro(g)?(T=e.getRecordMatcher(g),k=O):k=g,e.addRoute(k,T)}function A(g){const O=e.getRecordMatcher(g);O&&e.removeRoute(O)}function B(){return e.getRoutes().map(g=>g.record)}function C(g){return!!e.getRecordMatcher(g)}function P(g,O){if(O=X({},O||c.value),typeof g=="string"){const U=us(n,g,O.path),u=e.resolve({path:U.path},O),d=s.createHref(U.fullPath);return X(U,u,{params:p(u.params),hash:Zn(U.hash),redirectedFrom:void 0,href:d})}let T;if("path"in g)T=X({},g,{path:us(n,g.path,O.path).path});else{const U=X({},g.params);for(const u in U)U[u]==null&&delete U[u];T=X({},g,{params:h(g.params)}),O.params=h(O.params)}const k=e.resolve(T,O),G=g.hash||"";k.params=f(p(k.params));const Z=su(r,X({},g,{hash:Hu(G),path:k.path})),j=s.createHref(Z);return X({fullPath:Z,hash:G,query:r===Do?qu(g.query):g.query||{}},k,{redirectedFrom:void 0,href:j})}function D(g){return typeof g=="string"?us(n,g,c.value.path):X({},g)}function V(g,O){if(l!==g)return $t(8,{from:O,to:g})}function W(g){return ye(g)}function oe(g){return W(X(D(g),{replace:!0}))}function ae(g){const O=g.matched[g.matched.length-1];if(O&&O.redirect){const{redirect:T}=O;let k=typeof T=="function"?T(g):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=D(k):{path:k},k.params={}),X({query:g.query,hash:g.hash,params:g.params},k)}}function ye(g,O){const T=l=P(g),k=c.value,G=g.state,Z=g.force,j=g.replace===!0,U=ae(T);if(U)return ye(X(D(U),{state:G,force:Z,replace:j}),O||T);const u=T;u.redirectedFrom=O;let d;return!Z&&iu(r,k,T)&&(d=$t(16,{to:u,from:k}),wt(k,k,!0,!1)),(d?Promise.resolve(d):pe(u,k)).catch(m=>gt(m)?m:Q(m,u,k)).then(m=>{if(m){if(gt(m,2))return ye(X(D(m.to),{state:G,force:Z,replace:j}),O||u)}else m=Ue(u,k,!0,j,G);return Se(u,k,m),m})}function qe(g,O){const T=V(g,O);return T?Promise.reject(T):Promise.resolve()}function pe(g,O){let T;const[k,G,Z]=tf(g,O);T=ps(k.reverse(),"beforeRouteLeave",g,O);for(const U of k)U.leaveGuards.forEach(u=>{T.push(tt(u,g,O))});const j=qe.bind(null,g,O);return T.push(j),Bt(T).then(()=>{T=[];for(const U of i.list())T.push(tt(U,g,O));return T.push(j),Bt(T)}).then(()=>{T=ps(G,"beforeRouteUpdate",g,O);for(const U of G)U.updateGuards.forEach(u=>{T.push(tt(u,g,O))});return T.push(j),Bt(T)}).then(()=>{T=[];for(const U of g.matched)if(U.beforeEnter&&!O.matched.includes(U))if(Array.isArray(U.beforeEnter))for(const u of U.beforeEnter)T.push(tt(u,g,O));else T.push(tt(U.beforeEnter,g,O));return T.push(j),Bt(T)}).then(()=>(g.matched.forEach(U=>U.enterCallbacks={}),T=ps(Z,"beforeRouteEnter",g,O),T.push(j),Bt(T))).then(()=>{T=[];for(const U of o.list())T.push(tt(U,g,O));return T.push(j),Bt(T)}).catch(U=>gt(U,8)?U:Promise.reject(U))}function Se(g,O,T){for(const k of a.list())k(g,O,T)}function Ue(g,O,T,k,G){const Z=V(g,O);if(Z)return Z;const j=O===et,U=Ut?history.state:{};T&&(k||j?s.replace(g.fullPath,X({scroll:j&&U&&U.scroll},G)):s.push(g.fullPath,G)),c.value=g,wt(g,O,T,j),be()}let Fe;function bt(){Fe=s.listen((g,O,T)=>{const k=P(g),G=ae(k);if(G){ye(X(G,{replace:!0}),k).catch(cn);return}l=k;const Z=c.value;Ut&&hu(Eo(Z.fullPath,T.delta),Qn()),pe(k,Z).catch(j=>gt(j,4|8)?j:gt(j,2)?(ye(j.to,k).then(U=>{gt(U,4|16)&&!T.delta&&T.type===ln.pop&&s.go(-1,!1)}).catch(cn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Q(j,k,Z))).then(j=>{j=j||Ue(k,Z,!1),j&&(T.delta?s.go(-T.delta,!1):T.type===ln.pop&&gt(j,4|16)&&s.go(-1,!1)),Se(k,Z,j)}).catch(cn)})}let It=fn(),Et=fn(),re;function Q(g,O,T){be(g);const k=Et.list();return k.length?k.forEach(G=>G(g,O,T)):console.error(g),Promise.reject(g)}function q(){return re&&c.value!==et?Promise.resolve():new Promise((g,O)=>{It.add([g,O])})}function be(g){re||(re=!0,bt(),It.list().forEach(([O,T])=>g?T(g):O()),It.reset())}function wt(g,O,T,k){const{scrollBehavior:G}=t;if(!Ut||!G)return Promise.resolve();const Z=!T&&pu(Eo(g.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Yi().then(()=>G(g,O,Z)).then(j=>j&&du(j)).catch(j=>Q(j,g,O))}const $e=g=>s.go(g);let Ce;const Ie=new Set;return{currentRoute:c,addRoute:b,removeRoute:A,hasRoute:C,getRoutes:B,resolve:P,options:t,push:W,replace:oe,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Et.add,isReady:q,install(g){const O=this;g.component("RouterLink",Yu),g.component("RouterView",ef),g.config.globalProperties.$router=O,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(c)}),Ut&&!Ce&&c.value===et&&(Ce=!0,W(s.location).catch(G=>{}));const T={};for(const G in et)T[G]=ke(()=>c.value[G]);g.provide(Xn,O),g.provide(as,Yt(T)),g.provide(cs,c);const k=g.unmount;Ie.add(g),g.unmount=function(){Ie.delete(g),Ie.size<1&&(l=et,Fe&&Fe(),c.value=et,Ce=!1,re=!1),k()}}}}function Bt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function tf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ft(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ft(l,c))||s.push(c))}return[n,r,s]}function mp(){return Ne(Xn)}function gp(){return Ne(as)}/**
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
 */const nf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,b=l&63;c||(b=64,o||(p=64)),r.push(n[f],n[h],n[p],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const b=a<<4&240|l>>2;if(r.push(b),h!==64){const A=l<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},of=function(t){try{return sf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class af{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function le(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function lf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ff(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
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
 */const df="FirebaseError";class jt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=df,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new jt(s,a,r)}}function hf(t,e){return t.replace(pf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pf=/\{\$([^}]+)}/g;function mf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jo(i)&&jo(o)){if(!er(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jo(t){return t!==null&&typeof t=="object"}/**
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
 */function hn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gf(t,e){const n=new _f(t,e);return n.subscribe.bind(n)}class _f{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ms),s.error===void 0&&(s.error=ms),s.complete===void 0&&(s.complete=ms);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(o){}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ms(){}/**
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
 */function tr(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
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
***************************************************************************** */function gs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yf(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(f){try{l(r.next(f))}catch(h){o(h)}}function c(f){try{l(r.throw(f))}catch(h){o(h)}}function l(f){f.done?i(f.value):s(f.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function bf(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(f){return c([l,f])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=l[0]&2?s.return:l[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,l[1])).done)return i;switch(s=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,s=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(f){l=[6,f],s=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function _s(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function nr(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),s,i=[],o;try{for(;(e===void 0||e-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i}function Ho(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}var pn=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var If=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new af;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch(i){}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(wf(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch(h){}try{for(var s=_s(this.instancesDeferred.entries()),i=s.next();!i.done;i=s.next()){var o=nr(i.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(h){}}}catch(h){n={error:h}}finally{try{i&&!i.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=_t),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return yf(this,void 0,void 0,function(){var e;return bf(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Ho(Ho([],nr(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),nr(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=_t),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=_t),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var s=e.options,i=s===void 0?{}:s,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=_s(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var f=nr(l.value,2),h=f[0],p=f[1],b=this.normalizeInstanceIdentifier(h);o===b&&p.resolve(a)}}catch(A){n={error:A}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);var o=this.instances.get(s);return o&&e(o,s),function(){i.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,s,i=this.onInitCallbacks.get(n);if(!!i)try{for(var o=_s(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,n)}catch(l){}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,s=r===void 0?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ef(n),options:s}),this.instances.set(n,i),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=_t),this.component?this.component.multipleInstances?e:_t:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function Ef(t){return t===_t?void 0:t}function wf(t){return t.instantiationMode==="EAGER"}/**
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
 */var Tf=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new If(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Rf={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Af=ee.INFO,Sf={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Cf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vo{constructor(e){this.name=e,this._logLevel=Af,this._logHandler=Cf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}/**
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
 */class Of{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zo="@firebase/app",kf="0.7.2";/**
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
 */const vs=new Vo("@firebase/app"),Nf="@firebase/app-compat",Mf="@firebase/analytics-compat",xf="@firebase/analytics",Lf="@firebase/app-check-compat",Df="@firebase/app-check",Uf="@firebase/auth",Ff="@firebase/auth-compat",$f="@firebase/database",Bf="@firebase/database-compat",jf="@firebase/functions",Hf="@firebase/functions-compat",Vf="@firebase/installations",zf="@firebase/installations-compat",Wf="@firebase/messaging",Kf="@firebase/messaging-compat",qf="@firebase/performance",Gf="@firebase/performance-compat",Jf="@firebase/remote-config",Yf="@firebase/remote-config-compat",Xf="@firebase/storage",Qf="@firebase/storage-compat",Zf="@firebase/firestore",ed="@firebase/firestore-compat",td="firebase",nd="9.1.1";/**
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
 */const Wo="[DEFAULT]",rd={[zo]:"fire-core",[Nf]:"fire-core-compat",[xf]:"fire-analytics",[Mf]:"fire-analytics-compat",[Df]:"fire-app-check",[Lf]:"fire-app-check-compat",[Uf]:"fire-auth",[Ff]:"fire-auth-compat",[$f]:"fire-rtdb",[Bf]:"fire-rtdb-compat",[jf]:"fire-fn",[Hf]:"fire-fn-compat",[Vf]:"fire-iid",[zf]:"fire-iid-compat",[Wf]:"fire-fcm",[Kf]:"fire-fcm-compat",[qf]:"fire-perf",[Gf]:"fire-perf-compat",[Jf]:"fire-rc",[Yf]:"fire-rc-compat",[Xf]:"fire-gcs",[Qf]:"fire-gcs-compat",[Zf]:"fire-fst",[ed]:"fire-fst-compat","fire-js":"fire-js",[td]:"fire-js-all"};/**
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
 */const rr=new Map,ys=new Map;function sd(t,e){try{t.container.addComponent(e)}catch(n){vs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sr(t){const e=t.name;if(ys.has(e))return vs.debug(`There were multiple attempts to register component ${e}.`),!1;ys.set(e,t);for(const n of rr.values())sd(n,t);return!0}function Ko(t,e){return t.container.getProvider(e)}/**
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
 */const id={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ir=new dn("app","Firebase",id);/**
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
 */class od{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const or=nd;function _p(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Wo,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ir.create("bad-app-name",{appName:String(r)});const s=rr.get(r);if(s){if(er(t,s.options)&&er(n,s.config))return s;throw ir.create("duplicate-app",{appName:r})}const i=new Tf(r);for(const a of ys.values())i.addComponent(a);const o=new od(t,n,i);return rr.set(r,o),o}function ad(t=Wo){const e=rr.get(t);if(!e)throw ir.create("no-app",{appName:t});return e}function ar(t,e,n){var r;let s=(r=rd[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vs.warn(a.join(" "));return}sr(new pn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function cd(t){sr(new pn("platform-logger",e=>new Of(e),"PRIVATE")),ar(zo,kf,t),ar("fire-js","")}cd();function qo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ld=qo,Go=new dn("auth","Firebase",qo());/**
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
 */const Jo=new Vo("@firebase/auth");function cr(t,...e){Jo.logLevel<=ee.ERROR&&Jo.error(`Auth (${or}): ${t}`,...e)}/**
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
 */function Ve(t,...e){throw bs(t,...e)}function Le(t,...e){return bs(t,...e)}function ud(t,e,n){const r=Object.assign(Object.assign({},ld()),{[e]:n});return new dn("auth","Firebase",r).create(e,{appName:t.name})}function bs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Go.create(t,...e)}function L(t,e,...n){if(!t)throw bs(e,...n)}function ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cr(e),new Error(e)}function We(t,e){t||ze(e)}/**
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
 */const Yo=new Map;function Ke(t){We(t instanceof Function,"Expected a class definition");let e=Yo.get(t);return e?(We(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yo.set(t,e),e)}/**
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
 */function fd(t,e){const n=Ko(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(er(i,e!=null?e:{}))return s;Ve(s,"already-initialized")}return n.initialize({options:e})}function dd(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ke);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Is(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hd(){return Xo()==="http:"||Xo()==="https:"}function Xo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function pd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hd()||lf()||"connection"in navigator)?navigator.onLine:!0}function md(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class mn{constructor(e,n){this.shortDelay=e,this.longDelay=n,We(n>e,"Short delay should be less than long delay!"),this.isMobile=cf()||uf()}get(){return pd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Es(t,e){We(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ws{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const _d=new mn(3e4,6e4);function vd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lr(t,e,n,r,s={}){return Qo(t,s,()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=hn(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(ws.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),ws.fetch()(Zo(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Qo(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gd),e);try{const s=new bd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ts(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ts(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ts(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ud(t,f,l);Ve(t,f)}}catch(s){if(s instanceof jt)throw s;Ve(t,"network-request-failed")}}async function yd(t,e,n,r,s={}){const i=await lr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{serverResponse:i}),i}function Zo(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Es(t.config,s):`${t.config.apiScheme}://${s}`}class bd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Le(this.auth,"timeout")),_d.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ts(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Le(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Id(t,e){return lr(t,"POST","/v1/accounts:delete",e)}async function Ed(t,e){return lr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function gn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function wd(t,e=!1){const n=tr(t),r=await n.getIdToken(e),s=As(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gn(Rs(s.auth_time)),issuedAtTime:gn(Rs(s.iat)),expirationTime:gn(Rs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Rs(t){return Number(t)*1e3}function As(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cr("JWT malformed, contained fewer than 3 sections"),null;try{const s=of(n);return s?JSON.parse(s):(cr("Failed to decode base64 JWT payload"),null)}catch(s){return cr("Caught error parsing JWT payload as JSON",s),null}}function Td(t){const e=As(t);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _n(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jt&&Rd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Rd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ad{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ea{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gn(this.lastLoginAt),this.creationTime=gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ur(t){var e;const n=t.auth,r=await t.getIdToken(),s=await _n(t,Ed(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?Od(i.providerUserInfo):[],a=Cd(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ea(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Sd(t){const e=tr(t);await ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cd(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Od(t){return t.map(e=>{var{providerId:n}=e,r=gs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Pd(t,e){const n=await Qo(t,{},()=>{const r=hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Zo(t,s,"/v1/token",`key=${i}`);return ws.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Td(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Pd(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vn;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
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
 */function nt(t,e){L(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class vt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ad(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new ea(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _n(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wd(this,e)}reload(){return Sd(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ur(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _n(this,Id(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,B=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:W,isAnonymous:oe,providerData:ae,stsTokenManager:ye}=n;L(V&&ye,e,"internal-error");const qe=vn.fromJSON(this.name,ye);L(typeof V=="string",e,"internal-error"),nt(h,e.name),nt(p,e.name),L(typeof W=="boolean",e,"internal-error"),L(typeof oe=="boolean",e,"internal-error"),nt(b,e.name),nt(A,e.name),nt(B,e.name),nt(C,e.name),nt(P,e.name),nt(D,e.name);const pe=new vt({uid:V,auth:e,email:p,emailVerified:W,displayName:h,isAnonymous:oe,photoURL:A,phoneNumber:b,tenantId:B,stsTokenManager:qe,createdAt:P,lastLoginAt:D});return ae&&Array.isArray(ae)&&(pe.providerData=ae.map(Se=>Object.assign({},Se))),C&&(pe._redirectEventId=C),pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new vn;s.updateFromServerResponse(n);const i=new vt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ur(i),i}}/**
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
 */class ta{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ta.type="NONE";const na=ta;/**
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
 */function fr(t,e,n){return`firebase:${t}:${e}:${n}`}class Ht{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fr(this.userKey,s.apiKey,i),this.fullPersistenceKey=fr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ht(Ke(na),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ke(na);const o=fr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=vt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch(f){}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ht(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch(f){}})),new Ht(i,e,r))}}/**
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
 */function ra(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ca(e))return"Blackberry";if(la(e))return"Webos";if(Ss(e))return"Safari";if((e.includes("chrome/")||ia(e))&&!e.includes("edge/"))return"Chrome";if(aa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sa(t=le()){return/firefox\//i.test(t)}function Ss(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ia(t=le()){return/crios\//i.test(t)}function oa(t=le()){return/iemobile/i.test(t)}function aa(t=le()){return/android/i.test(t)}function ca(t=le()){return/blackberry/i.test(t)}function la(t=le()){return/webos/i.test(t)}function dr(t=le()){return/iphone|ipad|ipod/i.test(t)}function kd(t=le()){var e;return dr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Nd(){return ff()&&document.documentMode===10}function ua(t=le()){return dr(t)||aa(t)||la(t)||ca(t)||/windows phone/i.test(t)||oa(t)}function Md(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
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
 */function fa(t,e=[]){let n;switch(t){case"Browser":n=ra(le());break;case"Worker":n=`${ra(le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${or}/${r}`}/**
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
 */class xd{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ha(this),this.idTokenSubscription=new ha(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Go,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ke(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await Ht.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ur(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=md()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?tr(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ke(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Ht.create(this,[Ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function da(t){return tr(t)}class ha{constructor(e){this.auth=e,this.observer=null,this.addObserver=gf(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class pa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,n){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}/**
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
 */async function Vt(t,e){return yd(t,"POST","/v1/accounts:signInWithIdp",vd(t,e))}/**
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
 */const Ld="http://localhost";class yt extends pa{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yt(r,s);return Object.assign(o,i),o}_getIdTokenResponse(e){const n=this.buildRequest();return Vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vt(e,n)}buildRequest(){const e={requestUri:Ld,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hn(n)}return e}}/**
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
 */class ma{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yn extends ma{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await vt._fromIdTokenResponse(e,r,s),o=ga(r);return new zt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ga(r);return new zt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ga(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hr extends jt{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,this.name="FirebaseError",Object.setPrototypeOf(this,hr.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(i=e.tenantId)!==null&&i!==void 0?i:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,s){return new hr(e,n,r,s)}}function _a(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(t,i,e,r):i})}async function Dd(t,e,n=!1){const r=await _n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zt._forOperation(t,"link",r)}/**
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
 */async function Ud(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await _n(t,_a(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=As(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),zt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),i}}/**
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
 */async function Fd(t,e,n=!1){const r="signIn",s=await _a(t,r,e),i=await zt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}const pr="__sak";/**
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
 */class va{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pr,"1"),this.storage.removeItem(pr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function $d(){const t=le();return Ss(t)||dr(t)}const Bd=1e3,jd=10;class ya extends va{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$d()&&Md(),this.fallbackToPolling=ua(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Nd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jd):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ya.type="LOCAL";const Hd=ya;/**
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
 */class ba extends va{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ba.type="SESSION";const Ia=ba;/**
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
 */function Vd(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new mr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Vd(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mr.receivers=[];/**
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
 */function Cs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Cs("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function De(){return window}function Wd(t){De().location.href=t}/**
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
 */function Ea(){return typeof De().WorkerGlobalScope!="undefined"&&typeof De().importScripts=="function"}async function Kd(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function qd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gd(){return Ea()?self:null}/**
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
 */const wa="firebaseLocalStorageDb",Jd=1,gr="firebaseLocalStorage",Ta="fbase_key";class bn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _r(t,e){return t.transaction([gr],e?"readwrite":"readonly").objectStore(gr)}function Yd(){const t=indexedDB.deleteDatabase(wa);return new bn(t).toPromise()}function Os(){const t=indexedDB.open(wa,Jd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gr,{keyPath:Ta})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gr)?e(r):(r.close(),await Yd(),e(await Os()))})})}async function Ra(t,e,n){const r=_r(t,!0).put({[Ta]:e,value:n});return new bn(r).toPromise()}async function Xd(t,e){const n=_r(t,!1).get(e),r=await new bn(n).toPromise();return r===void 0?null:r.value}function Aa(t,e){const n=_r(t,!0).delete(e);return new bn(n).toPromise()}const Qd=800,Zd=3;class Sa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Os(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zd)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ea()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mr._getInstance(Gd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Kd(),!this.activeServiceWorker)return;this.sender=new zd(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Os();return await Ra(e,pr,"1"),await Aa(e,pr),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ra(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xd(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Aa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_r(s,!1).getAll();return new bn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sa.type="LOCAL";const eh=Sa;/**
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
 */function th(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Le("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",th().appendChild(r)})}function rh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new mn(3e4,6e4);/**
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
 */function sh(t,e){return e?Ke(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ps extends pa{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Vt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ih(t){return Fd(t.auth,new Ps(t),t.bypassAuthState)}function oh(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Ud(n,new Ps(t),t.bypassAuthState)}async function ah(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Dd(n,new Ps(t),t.bypassAuthState)}/**
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
 */class Ca{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ih;case"linkViaPopup":case"linkViaRedirect":return ah;case"reauthViaPopup":case"reauthViaRedirect":return oh;default:Ve(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ch=new mn(2e3,1e4);class Wt extends Ca{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){We(this.filter.length===1,"Popup operations only handle one event");const e=Cs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ch.get())};e()}}Wt.currentPopupAction=null;/**
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
 */const lh="pendingRedirect",Oa=new Map;class uh extends Ca{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const r=await fh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fh(t,e){const n=dh(e),r=await Pa(t)._get(n)==="true";return await Pa(t)._remove(n),r}function Pa(t){return Ke(t._redirectPersistence)}function dh(t){return fr(lh,t.config.apiKey,t.name)}async function hh(t,e,n=!1){const r=da(t),s=sh(r,e),o=await new uh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ph=10*60*1e3;class mh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Na(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Le(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ph&&this.cachedEventUids.clear(),this.cachedEventUids.has(ka(e))}saveEventToCache(e){this.cachedEventUids.add(ka(e)),this.lastProcessedEventTime=Date.now()}}function ka(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Na({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Na(t);default:return!1}}/**
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
 */async function _h(t,e={}){return lr(t,"GET","/v1/projects",e)}/**
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
 */const vh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yh=/^https?/;async function bh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _h(t);for(const n of e)try{if(Ih(n))return}catch(r){}Ve(t,"unauthorized-domain")}function Ih(t){const e=Is(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yh.test(n))return!1;if(vh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Eh=new mn(3e4,6e4);function Ma(){const t=De().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wh(t){return new Promise((e,n)=>{var r,s,i;function o(){Ma(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ma(),n(Le(t,"network-request-failed"))},timeout:Eh.get()})}if((s=(r=De().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=De().gapi)===null||i===void 0?void 0:i.load)o();else{const a=rh("iframefcb");return De()[a]=()=>{gapi.load?o():n(Le(t,"network-request-failed"))},nh(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw vr=null,e})}let vr=null;function Th(t){return vr=vr||wh(t),vr}/**
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
 */const Rh=new mn(5e3,15e3),Ah="__/auth/iframe",Sh="emulator/auth/iframe",Ch={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Oh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ph(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Es(e,Sh):`https://${t.config.authDomain}/${Ah}`,r={apiKey:e.apiKey,appName:t.name,v:or},s=Oh.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hn(r).slice(1)}`}async function kh(t){const e=await Th(t),n=De().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:Ph(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ch,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Le(t,"network-request-failed"),a=De().setTimeout(()=>{i(o)},Rh.get());function c(){De().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Nh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mh=500,xh=600,Lh="_blank",Dh="http://localhost";class xa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Uh(t,e,n,r=Mh,s=xh){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Nh),{width:r.toString(),height:s.toString(),top:i,left:o}),l=le().toLowerCase();n&&(a=ia(l)?Lh:n),sa(l)&&(e=e||Dh,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[b,A])=>`${p}${b}=${A},`,"");if(kd(l)&&a!=="_self")return Fh(e||"",a),new xa(null);const h=window.open(e||"",a,f);L(h,t,"popup-blocked");try{h.focus()}catch(p){}return new xa(h)}function Fh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $h="__/auth/handler",Bh="emulator/auth/handler";function La(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:or,eventId:s};if(e instanceof ma){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof yn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${jh(t)}?${hn(a).slice(1)}`}function jh({config:t}){return t.emulator?Es(t,Bh):`https://${t.authDomain}/${$h}`}/**
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
 */const ks="webStorageSupport";class Hh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ia,this._completeRedirectFn=hh}async _openPopup(e,n,r,s){var i;We((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=La(e,n,r,Is(),s);return Uh(e,o,Cs())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Wd(La(e,n,r,Is(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(We(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await kh(e),r=new mh(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ks,{type:ks},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ks];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ua()||Ss()||dr()}}const Vh=Hh;var zh="@firebase/auth",Wh="0.18.1";/**
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
 */class Kh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gh(t){sr(new pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{L(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),L(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fa(t)},c=new xd(o,a);return dd(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sr(new pn("auth-internal",e=>{const n=da(e.getProvider("auth").getImmediate());return(r=>new Kh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(zh,Wh,qh(t))}/**
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
 */function vp(t=ad()){const e=Ko(t,"auth");return e.isInitialized()?e.getImmediate():fd(t,{popupRedirectResolver:Vh,persistence:[eh,Hd,Ia]})}Gh("Browser");var Jh="firebase",Yh="9.1.1";/**
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
 */ar(Jh,Yh,"app");var Xh=!1;/*!
  * pinia v2.0.0-rc.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Qh=Symbol();var Da;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Da||(Da={}));function yp(){const t=Ja(!0),e=t.run(()=>fi({}));let n=[];const r=[],s=$r({install(i){s._a=i,i.provide(Qh,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o))},use(i){return!this._a&&!Xh?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}export{pp as A,hp as B,dp as C,yp as D,Jn as E,Re as F,np as G,fp as H,up as I,he as a,Vi as b,ip as c,op as d,gi as e,cp as f,Qt as g,ji as h,sp as i,ap as j,tp as k,fi as l,lp as m,Er as n,Fi as o,ep as p,Ir as q,rp as r,Yi as s,Zh as t,gp as u,hl as v,Oc as w,_p as x,vp as y,mp as z};
