function ss(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const _l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yl=ss(_l);function Oi(e){return!!e||e===""}function mn(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=me(r)?Il(r):mn(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(me(e))return e;if(fe(e))return e}}const bl=/;(?![^(]*\))/g,El=/:(.+)/;function Il(e){const t={};return e.split(bl).forEach(n=>{if(n){const r=n.split(El);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ft(e){let t="";if(me(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=ft(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Tl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Gn(e[r],t[r]);return n}function Gn(e,t){if(e===t)return!0;let n=Di(e),r=Di(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=U(e),r=U(t),n||r)return n&&r?Tl(e,t):!1;if(n=fe(e),r=fe(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!Gn(e[o],t[o]))return!1}}return String(e)===String(t)}function Pi(e,t){return e.findIndex(n=>Gn(n,t))}const ki=e=>e==null?"":U(e)||fe(e)&&(e.toString===xi||!H(e.toString))?JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>t&&t.__v_isRef?Ni(e,t.value):Kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Yn(t)?{[`Set(${t.size})`]:[...t.values()]}:fe(t)&&!U(t)&&!Ui(t)?String(t):t,Z={},Wt=[],xe=()=>{},wl=()=>!1,Cl=/^on[^a-z]/,Jn=e=>Cl.test(e),is=e=>e.startsWith("onUpdate:"),ge=Object.assign,Mi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Rl=Object.prototype.hasOwnProperty,G=(e,t)=>Rl.call(e,t),U=Array.isArray,Kt=e=>Xn(e)==="[object Map]",Yn=e=>Xn(e)==="[object Set]",Di=e=>e instanceof Date,H=e=>typeof e=="function",me=e=>typeof e=="string",os=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Li=e=>fe(e)&&H(e.then)&&H(e.catch),xi=Object.prototype.toString,Xn=e=>xi.call(e),Sl=e=>Xn(e).slice(8,-1),Ui=e=>Xn(e)==="[object Object]",as=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qn=ss(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Al=/-(\w)/g,ze=Zn(e=>e.replace(Al,(t,n)=>n?n.toUpperCase():"")),Ol=/\B([A-Z])/g,qt=Zn(e=>e.replace(Ol,"-$1").toLowerCase()),er=Zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),tr=Zn(e=>e?`on${er(e)}`:""),vn=(e,t)=>!Object.is(e,t),nr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},rr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},sr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Fi;const Pl=()=>Fi||(Fi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let We;const ir=[];class Bi{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&We&&(this.parent=We,this.index=(We.scopes||(We.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(ir.push(this),We=this)}off(){this.active&&(ir.pop(),We=ir[ir.length-1])}stop(t){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function kl(e){return new Bi(e)}function Nl(e,t){t=t||We,t&&t.active&&t.effects.push(e)}function Bm(){return We}function $m(e){We&&We.cleanups.push(e)}const cs=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$i=e=>(e.w&dt)>0,Hi=e=>(e.n&dt)>0,Ml=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dt},Dl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];$i(s)&&!Hi(s)?s.delete(e):t[n++]=s,s.w&=~dt,s.n&=~dt}t.length=n}},ls=new WeakMap;let _n=0,dt=1;const us=30,yn=[];let Ct;const Rt=Symbol(""),fs=Symbol("");class ds{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],Nl(this,r)}run(){if(!this.active)return this.fn();if(!yn.includes(this))try{return yn.push(Ct=this),Ll(),dt=1<<++_n,_n<=us?Ml(this):Vi(this),this.fn()}finally{_n<=us&&Dl(this),dt=1<<--_n,St(),yn.pop();const t=yn.length;Ct=t>0?yn[t-1]:void 0}}stop(){this.active&&(Vi(this),this.onStop&&this.onStop(),this.active=!1)}}function Vi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Gt=!0;const hs=[];function Jt(){hs.push(Gt),Gt=!1}function Ll(){hs.push(Gt),Gt=!0}function St(){const e=hs.pop();Gt=e===void 0?!0:e}function Re(e,t,n){if(!ji())return;let r=ls.get(e);r||ls.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=cs()),zi(s)}function ji(){return Gt&&Ct!==void 0}function zi(e,t){let n=!1;_n<=us?Hi(e)||(e.n|=dt,n=!$i(e)):n=!e.has(Ct),n&&(e.add(Ct),Ct.deps.push(e))}function tt(e,t,n,r,s,i){const o=ls.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&U(e))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":U(e)?as(n)&&a.push(o.get("length")):(a.push(o.get(Rt)),Kt(e)&&a.push(o.get(fs)));break;case"delete":U(e)||(a.push(o.get(Rt)),Kt(e)&&a.push(o.get(fs)));break;case"set":Kt(e)&&a.push(o.get(Rt));break}if(a.length===1)a[0]&&ps(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ps(cs(c))}}function ps(e,t){for(const n of U(e)?e:[...e])(n!==Ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const xl=ss("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(os)),Ul=gs(),Fl=gs(!1,!0),Bl=gs(!0),Ki=$l();function $l(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Re(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jt();const r=q(this)[t].apply(this,n);return St(),r}}),e}function gs(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_raw"&&i===(e?t?nu:to:t?eo:Zi).get(r))return r;const o=U(r);if(!e&&o&&G(Ki,s))return Reflect.get(Ki,s,i);const a=Reflect.get(r,s,i);return(os(s)?Wi.has(s):xl(s))||(e||Re(r,"get",s),t)?a:we(a)?!o||!as(s)?a.value:a:fe(a)?e?no(a):bn(a):a}}const Hl=qi(),Vl=qi(!0);function qi(e=!1){return function(n,r,s,i){let o=n[r];if(!e&&(s=q(s),o=q(o),!U(n)&&we(o)&&!we(s)))return o.value=s,!0;const a=U(n)&&as(r)?Number(r)<n.length:G(n,r),c=Reflect.set(n,r,s,i);return n===q(i)&&(a?vn(s,o)&&tt(n,"set",r,s):tt(n,"add",r,s)),c}}function jl(e,t){const n=G(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&tt(e,"delete",t,void 0),r}function zl(e,t){const n=Reflect.has(e,t);return(!os(t)||!Wi.has(t))&&Re(e,"has",t),n}function Wl(e){return Re(e,"iterate",U(e)?"length":Rt),Reflect.ownKeys(e)}const Gi={get:Ul,set:Hl,deleteProperty:jl,has:zl,ownKeys:Wl},Kl={get:Bl,set(e,t){return!0},deleteProperty(e,t){return!0}},ql=ge({},Gi,{get:Fl,set:Vl}),ms=e=>e,or=e=>Reflect.getPrototypeOf(e);function ar(e,t,n=!1,r=!1){e=e.__v_raw;const s=q(e),i=q(t);t!==i&&!n&&Re(s,"get",t),!n&&Re(s,"get",i);const{has:o}=or(s),a=r?ms:n?bs:En;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function cr(e,t=!1){const n=this.__v_raw,r=q(n),s=q(e);return e!==s&&!t&&Re(r,"has",e),!t&&Re(r,"has",s),e===s?n.has(e):n.has(e)||n.has(s)}function lr(e,t=!1){return e=e.__v_raw,!t&&Re(q(e),"iterate",Rt),Reflect.get(e,"size",e)}function Ji(e){e=q(e);const t=q(this);return or(t).has.call(t,e)||(t.add(e),tt(t,"add",e,e)),this}function Yi(e,t){t=q(t);const n=q(this),{has:r,get:s}=or(n);let i=r.call(n,e);i||(e=q(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?vn(t,o)&&tt(n,"set",e,t):tt(n,"add",e,t),this}function Xi(e){const t=q(this),{has:n,get:r}=or(t);let s=n.call(t,e);s||(e=q(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&tt(t,"delete",e,void 0),i}function Qi(){const e=q(this),t=e.size!==0,n=e.clear();return t&&tt(e,"clear",void 0,void 0),n}function ur(e,t){return function(r,s){const i=this,o=i.__v_raw,a=q(o),c=t?ms:e?bs:En;return!e&&Re(a,"iterate",Rt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function fr(e,t,n){return function(...r){const s=this.__v_raw,i=q(s),o=Kt(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?ms:t?bs:En;return!t&&Re(i,"iterate",c?fs:Rt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function ht(e){return function(...t){return e==="delete"?!1:this}}function Gl(){const e={get(i){return ar(this,i)},get size(){return lr(this)},has:cr,add:Ji,set:Yi,delete:Xi,clear:Qi,forEach:ur(!1,!1)},t={get(i){return ar(this,i,!1,!0)},get size(){return lr(this)},has:cr,add:Ji,set:Yi,delete:Xi,clear:Qi,forEach:ur(!1,!0)},n={get(i){return ar(this,i,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:ur(!0,!1)},r={get(i){return ar(this,i,!0,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=fr(i,!1,!1),n[i]=fr(i,!0,!1),t[i]=fr(i,!1,!0),r[i]=fr(i,!0,!0)}),[e,n,t,r]}const[Jl,Yl,Xl,Ql]=Gl();function vs(e,t){const n=t?e?Ql:Xl:e?Yl:Jl;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Zl={get:vs(!1,!1)},eu={get:vs(!1,!0)},tu={get:vs(!0,!1)},Zi=new WeakMap,eo=new WeakMap,to=new WeakMap,nu=new WeakMap;function ru(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function su(e){return e.__v_skip||!Object.isExtensible(e)?0:ru(Sl(e))}function bn(e){return e&&e.__v_isReadonly?e:_s(e,!1,Gi,Zl,Zi)}function iu(e){return _s(e,!1,ql,eu,eo)}function no(e){return _s(e,!0,Kl,tu,to)}function _s(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=su(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Yt(e){return ro(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function ro(e){return!!(e&&e.__v_isReadonly)}function so(e){return Yt(e)||ro(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function ys(e){return rr(e,"__v_skip",!0),e}const En=e=>fe(e)?bn(e):e,bs=e=>fe(e)?no(e):e;function io(e){ji()&&(e=q(e),e.dep||(e.dep=cs()),zi(e.dep))}function oo(e,t){e=q(e),e.dep&&ps(e.dep)}function we(e){return Boolean(e&&e.__v_isRef===!0)}function ao(e){return co(e,!1)}function ou(e){return co(e,!0)}function co(e,t){return we(e)?e:new au(e,t)}class au{constructor(t,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:En(t)}get value(){return io(this),this._value}set value(t){t=this._shallow?t:q(t),vn(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:En(t),oo(this))}}function Xt(e){return we(e)?e.value:e}const cu={get:(e,t,n)=>Xt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function lo(e){return Yt(e)?e:new Proxy(e,cu)}class lu{constructor(t,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new ds(t,()=>{this._dirty||(this._dirty=!0,oo(this))}),this.__v_isReadonly=r}get value(){const t=q(this);return io(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ke(e,t){let n,r;const s=H(e);return s?(n=e,r=xe):(n=e.get,r=e.set),new lu(n,r,s||!r)}Promise.resolve();function uu(e,t,...n){const r=e.vnode.props||Z;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||Z;h?s=n.map(m=>m.trim()):d&&(s=n.map(sr))}let a,c=r[a=tr(t)]||r[a=tr(ze(t))];!c&&i&&(c=r[a=tr(qt(t))]),c&&De(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,De(l,e,6,s)}}function uo(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!H(e)){const c=l=>{const u=uo(l,t,!0);u&&(a=!0,ge(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(r.set(e,null),null):(U(i)?i.forEach(c=>o[c]=null):ge(o,i),r.set(e,o),o)}function Es(e,t){return!e||!Jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,qt(t))||G(e,t))}let Se=null,dr=null;function hr(e){const t=Se;return Se=e,dr=e&&e.type.__scopeId||null,t}function Hm(e){dr=e}function Vm(){dr=null}function In(e,t=Se,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&$o(-1);const i=hr(t),o=e(...s);return hr(i),r._d&&$o(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Is(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:m,ctx:w,inheritAttrs:L}=e;let S,A;const x=hr(e);try{if(n.shapeFlag&4){const j=s||r;S=Je(u.call(j,j,d,i,m,h,w)),A=c}else{const j=t;S=Je(j.length>1?j(i,{attrs:c,slots:a,emit:l}):j(i,null)),A=t.props?c:fu(c)}}catch(j){Rn.length=0,Sr(j,e,1),S=_e(Fe)}let V=S;if(A&&L!==!1){const j=Object.keys(A),{shapeFlag:te}=V;j.length&&te&(1|6)&&(o&&j.some(is)&&(A=du(A,o)),V=Qt(V,A))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),S=V,hr(x),S}const fu=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jn(n))&&((t||(t={}))[n]=e[n]);return t},du=(e,t)=>{const n={};for(const r in e)(!is(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function hu(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?fo(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!Es(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?fo(r,o,l):!0:!!o;return!1}function fo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Es(n,i))return!0}return!1}function pu({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gu=e=>e.__isSuspense;function mu(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):lf(e)}function pr(e,t){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[e]=t}}function Ue(e,t,n=!1){const r=ve||Se;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}function ho(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _o(()=>{e.isMounted=!0}),bo(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],vu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(e,{slots:t}){const n=Us(),r=ho();let s;return()=>{const i=t.default&&ws(t.default(),!0);if(!i||!i.length)return;const o=q(e),{mode:a}=o,c=i[0];if(r.isLeaving)return Ts(c);const l=mo(c);if(!l)return Ts(c);const u=Tn(l,o,r,n);wn(l,u);const d=n.subTree,h=d&&mo(d);let m=!1;const{getTransitionKey:w}=l.type;if(w){const L=w();s===void 0?s=L:L!==s&&(s=L,m=!0)}if(h&&h.type!==Fe&&(!kt(l,h)||m)){const L=Tn(h,o,r,n);if(wn(h,L),a==="out-in")return r.isLeaving=!0,L.afterLeave=()=>{r.isLeaving=!1,n.update()},Ts(c);a==="in-out"&&l.type!==Fe&&(L.delayLeave=(S,A,x)=>{const V=go(r,h);V[String(h.key)]=h,S._leaveCb=()=>{A(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return c}}},po=vu;function go(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Tn(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:w,onBeforeAppear:L,onAppear:S,onAfterAppear:A,onAppearCancelled:x}=t,V=String(e.key),j=go(n,e),te=(z,ce)=>{z&&De(z,r,9,ce)},ae={mode:i,persisted:o,beforeEnter(z){let ce=a;if(!n.isMounted)if(s)ce=L||a;else return;z._leaveCb&&z._leaveCb(!0);const J=j[V];J&&kt(e,J)&&J.el._leaveCb&&J.el._leaveCb(),te(ce,[z])},enter(z){let ce=c,J=l,he=u;if(!n.isMounted)if(s)ce=S||c,J=A||l,he=x||u;else return;let pe=!1;const k=z._enterCb=le=>{pe||(pe=!0,le?te(he,[z]):te(J,[z]),ae.delayedLeave&&ae.delayedLeave(),z._enterCb=void 0)};ce?(ce(z,k),ce.length<=1&&k()):k()},leave(z,ce){const J=String(e.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return ce();te(d,[z]);let he=!1;const pe=z._leaveCb=k=>{he||(he=!0,ce(),k?te(w,[z]):te(m,[z]),z._leaveCb=void 0,j[J]===e&&delete j[J])};j[J]=e,h?(h(z,pe),h.length<=1&&pe()):pe()},clone(z){return Tn(z,t,n,r)}};return ae}function Ts(e){if(gr(e))return e=Qt(e),e.children=null,e}function mo(e){return gr(e)?e.children?e.children[0]:void 0:e}function wn(e,t){e.shapeFlag&6&&e.component?wn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ws(e,t=!1){let n=[],r=0;for(let s=0;s<e.length;s++){const i=e[s];i.type===ye?(i.patchFlag&128&&r++,n=n.concat(ws(i.children,t))):(t||i.type!==Fe)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function nt(e){return H(e)?{setup:e,name:e.name}:e}const Cs=e=>!!e.type.__asyncLoader,gr=e=>e.type.__isKeepAlive;function _u(e,t){vo(e,"a",t)}function yu(e,t){vo(e,"da",t)}function vo(e,t,n=ve){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}e()});if(mr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)gr(s.parent.vnode)&&bu(r,t,n,s),s=s.parent}}function bu(e,t,n,r){const s=mr(t,e,r,!0);Eo(()=>{Mi(r[t],s)},n)}function mr(e,t,n=ve,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Jt(),Zt(n);const a=De(t,n,e,o);return Mt(),St(),a});return r?s.unshift(i):s.push(i),i}}const rt=e=>(t,n=ve)=>(!Rr||e==="sp")&&mr(e,t,n),Eu=rt("bm"),_o=rt("m"),Iu=rt("bu"),yo=rt("u"),bo=rt("bum"),Eo=rt("um"),Tu=rt("sp"),wu=rt("rtg"),Cu=rt("rtc");function Ru(e,t=ve){mr("ec",e,t)}let Rs=!0;function Su(e){const t=wo(e),n=e.proxy,r=e.ctx;Rs=!1,t.beforeCreate&&Io(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:w,activated:L,deactivated:S,beforeDestroy:A,beforeUnmount:x,destroyed:V,unmounted:j,render:te,renderTracked:ae,renderTriggered:z,errorCaptured:ce,serverPrefetch:J,expose:he,inheritAttrs:pe,components:k,directives:le,filters:Te}=t;if(l&&Au(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Y=o[ne];H(Y)&&(r[ne]=Y.bind(n))}if(s){const ne=s.call(n,n);fe(ne)&&(e.data=bn(ne))}if(Rs=!0,i)for(const ne in i){const Y=i[ne],ke=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):xe,jt=!H(Y)&&H(Y.set)?Y.set.bind(n):xe,et=Ke({get:ke,set:jt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>et.value,set:Ve=>et.value=Ve})}if(a)for(const ne in a)To(a[ne],r,n,ne);if(c){const ne=H(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Y=>{pr(Y,ne[Y])})}u&&Io(u,e,"c");function ue(ne,Y){U(Y)?Y.forEach(ke=>ne(ke.bind(n))):Y&&ne(Y.bind(n))}if(ue(Eu,d),ue(_o,h),ue(Iu,m),ue(yo,w),ue(_u,L),ue(yu,S),ue(Ru,ce),ue(Cu,ae),ue(wu,z),ue(bo,x),ue(Eo,j),ue(Tu,J),U(he))if(he.length){const ne=e.exposed||(e.exposed={});he.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>n[Y],set:ke=>n[Y]=ke})})}else e.exposed||(e.exposed={});te&&e.render===xe&&(e.render=te),pe!=null&&(e.inheritAttrs=pe),k&&(e.components=k),le&&(e.directives=le)}function Au(e,t,n=xe,r=!1){U(e)&&(e=Ss(e));for(const s in e){const i=e[s];let o;fe(i)?"default"in i?o=Ue(i.from||s,i.default,!0):o=Ue(i.from||s):o=Ue(i),we(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function Io(e,t,n){De(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function To(e,t,n,r){const s=r.includes(".")?ra(n,r):()=>n[r];if(me(e)){const i=t[e];H(i)&&Or(s,i)}else if(H(e))Or(s,e.bind(n));else if(fe(e))if(U(e))e.forEach(i=>To(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&Or(s,i,e)}}function wo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>vr(c,l,o,!0)),vr(c,t,o)),i.set(t,c),c}function vr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&vr(e,i,n,!0),s&&s.forEach(o=>vr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Ou[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Ou={data:Co,props:At,emits:At,methods:At,computed:At,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:At,directives:At,watch:ku,provide:Co,inject:Pu};function Co(e,t){return t?e?function(){return ge(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Pu(e,t){return At(Ss(e),Ss(t))}function Ss(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ee(e,t){return e?[...new Set([].concat(e,t))]:t}function At(e,t){return e?ge(ge(Object.create(null),e),t):t}function ku(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const r in t)n[r]=Ee(e[r],t[r]);return n}function Nu(e,t,n,r=!1){const s={},i={};rr(i,Er,1),e.propsDefaults=Object.create(null),Ro(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:iu(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Mu(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=q(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const m=t[h];if(c)if(G(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const w=ze(h);s[w]=As(c,a,w,m,e,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{Ro(e,t,s,i)&&(l=!0);let u;for(const d in a)(!t||!G(t,d)&&((u=qt(d))===d||!G(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=As(c,a,d,void 0,e,!0)):delete s[d]);if(i!==a)for(const d in i)(!t||!G(t,d))&&(delete i[d],l=!0)}l&&tt(e,"set","$attrs")}function Ro(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Qn(c))continue;const l=t[c];let u;s&&G(s,u=ze(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Es(e.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(i){const c=q(n),l=a||Z;for(let u=0;u<i.length;u++){const d=i[u];n[d]=As(s,c,d,l[d],e,!G(l,d))}}return o}function As(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Zt(s),r=l[n]=c.call(null,t),Mt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===qt(n))&&(r=!0))}return r}function So(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!H(e)){const u=d=>{c=!0;const[h,m]=So(d,t,!0);ge(o,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return r.set(e,Wt),Wt;if(U(i))for(let u=0;u<i.length;u++){const d=ze(i[u]);Ao(d)&&(o[d]=Z)}else if(i)for(const u in i){const d=ze(u);if(Ao(d)){const h=i[u],m=o[d]=U(h)||H(h)?{type:h}:h;if(m){const w=ko(Boolean,m.type),L=ko(String,m.type);m[0]=w>-1,m[1]=L<0||w<L,(w>-1||G(m,"default"))&&a.push(d)}}}const l=[o,a];return r.set(e,l),l}function Ao(e){return e[0]!=="$"}function Oo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Po(e,t){return Oo(e)===Oo(t)}function ko(e,t){return U(t)?t.findIndex(n=>Po(n,e)):H(t)&&Po(t,e)?0:-1}const No=e=>e[0]==="_"||e==="$stable",Os=e=>U(e)?e.map(Je):[Je(e)],Du=(e,t,n)=>{const r=In((...s)=>Os(t(...s)),n);return r._c=!1,r},Mo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(No(s))continue;const i=e[s];if(H(i))t[s]=Du(s,i,r);else if(i!=null){const o=Os(i);t[s]=()=>o}}},Do=(e,t)=>{const n=Os(t);e.slots.default=()=>n},Lu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),rr(t,"_",n)):Mo(t,e.slots={})}else e.slots={},t&&Do(e,t);rr(e.slots,Er,1)},xu=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=Z;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(ge(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Mo(t,s)),o=t}else t&&(Do(e,t),o={default:1});if(i)for(const a in s)!No(a)&&!(a in o)&&delete s[a]};function jm(e,t){const n=Se;if(n===null)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=Z]=t[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&Dt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return e}function Ot(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Jt(),De(c,n,8,[e.el,a,e,t]),St())}}function Lo(){return{app:null,config:{isNativeTag:wl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uu=0;function Fu(e,t){return function(r,s=null){s!=null&&!fe(s)&&(s=null);const i=Lo(),o=new Set;let a=!1;const c=i.app={_uid:Uu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ff,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=_e(r,s);return h.appContext=i,u&&t?t(h,l):e(h,l,d),a=!0,c._container=l,l.__vue_app__=c,Fs(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}const Ie=mu;function Bu(e){return $u(e)}function $u(e,t){const n=Pl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=xe,cloneNode:w,insertStaticContent:L}=e,S=(f,p,g,y=null,_=null,T=null,R=!1,E=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!kt(f,p)&&(y=N(f),Ne(f,_,T,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:b,ref:M,shapeFlag:O}=p;switch(b){case Ms:A(f,p,g,y);break;case Fe:x(f,p,g,y);break;case _r:f==null&&V(p,g,y,R);break;case ye:le(f,p,g,y,_,T,R,E,I);break;default:O&1?ae(f,p,g,y,_,T,R,E,I):O&6?Te(f,p,g,y,_,T,R,E,I):(O&64||O&128)&&b.process(f,p,g,y,_,T,R,E,I,re)}M!=null&&_&&Ps(M,f&&f.ref,T,p||f,!p)},A=(f,p,g,y)=>{if(f==null)r(p.el=a(p.children),g,y);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},x=(f,p,g,y)=>{f==null?r(p.el=c(p.children||""),g,y):p.el=f.el},V=(f,p,g,y)=>{[f.el,f.anchor]=L(f.children,p,g,y)},j=({el:f,anchor:p},g,y)=>{let _;for(;f&&f!==p;)_=h(f),r(f,g,y),f=_;r(p,g,y)},te=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),s(f),f=g;s(p)},ae=(f,p,g,y,_,T,R,E,I)=>{R=R||p.type==="svg",f==null?z(p,g,y,_,T,R,E,I):he(f,p,_,T,R,E,I)},z=(f,p,g,y,_,T,R,E)=>{let I,b;const{type:M,props:O,shapeFlag:D,transition:F,patchFlag:K,dirs:oe}=f;if(f.el&&w!==void 0&&K===-1)I=f.el=w(f.el);else{if(I=f.el=o(f.type,T,O&&O.is,O),D&8?u(I,f.children):D&16&&J(f.children,I,null,y,_,T&&M!=="foreignObject",R,E),oe&&Ot(f,null,y,"created"),O){for(const ie in O)ie!=="value"&&!Qn(ie)&&i(I,ie,null,O[ie],T,f.children,y,_,C);"value"in O&&i(I,"value",null,O.value),(b=O.onVnodeBeforeMount)&&qe(b,y,f)}ce(I,f,f.scopeId,R,y)}oe&&Ot(f,null,y,"beforeMount");const Q=(!_||_&&!_.pendingBranch)&&F&&!F.persisted;Q&&F.beforeEnter(I),r(I,p,g),((b=O&&O.onVnodeMounted)||Q||oe)&&Ie(()=>{b&&qe(b,y,f),Q&&F.enter(I),oe&&Ot(f,null,y,"mounted")},_)},ce=(f,p,g,y,_)=>{if(g&&m(f,g),y)for(let T=0;T<y.length;T++)m(f,y[T]);if(_){let T=_.subTree;if(p===T){const R=_.vnode;ce(f,R,R.scopeId,R.slotScopeIds,_.parent)}}},J=(f,p,g,y,_,T,R,E,I=0)=>{for(let b=I;b<f.length;b++){const M=f[b]=E?pt(f[b]):Je(f[b]);S(null,M,p,g,y,_,T,R,E)}},he=(f,p,g,y,_,T,R)=>{const E=p.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:M}=p;I|=f.patchFlag&16;const O=f.props||Z,D=p.props||Z;let F;(F=D.onVnodeBeforeUpdate)&&qe(F,g,p,f),M&&Ot(p,f,g,"beforeUpdate");const K=_&&p.type!=="foreignObject";if(b?pe(f.dynamicChildren,b,E,g,y,K,T):R||ke(f,p,E,null,g,y,K,T,!1),I>0){if(I&16)k(E,p,O,D,g,y,_);else if(I&2&&O.class!==D.class&&i(E,"class",null,D.class,_),I&4&&i(E,"style",O.style,D.style,_),I&8){const oe=p.dynamicProps;for(let Q=0;Q<oe.length;Q++){const ie=oe[Q],Le=O[ie],zt=D[ie];(zt!==Le||ie==="value")&&i(E,ie,Le,zt,_,f.children,g,y,C)}}I&1&&f.children!==p.children&&u(E,p.children)}else!R&&b==null&&k(E,p,O,D,g,y,_);((F=D.onVnodeUpdated)||M)&&Ie(()=>{F&&qe(F,g,p,f),M&&Ot(p,f,g,"updated")},y)},pe=(f,p,g,y,_,T,R)=>{for(let E=0;E<p.length;E++){const I=f[E],b=p[E],M=I.el&&(I.type===ye||!kt(I,b)||I.shapeFlag&(6|64))?d(I.el):g;S(I,b,M,null,y,_,T,R,!0)}},k=(f,p,g,y,_,T,R)=>{if(g!==y){for(const E in y){if(Qn(E))continue;const I=y[E],b=g[E];I!==b&&E!=="value"&&i(f,E,b,I,R,p.children,_,T,C)}if(g!==Z)for(const E in g)!Qn(E)&&!(E in y)&&i(f,E,g[E],null,R,p.children,_,T,C);"value"in y&&i(f,"value",g.value,y.value)}},le=(f,p,g,y,_,T,R,E,I)=>{const b=p.el=f?f.el:a(""),M=p.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:F}=p;F&&(E=E?E.concat(F):F),f==null?(r(b,g,y),r(M,g,y),J(p.children,g,M,_,T,R,E,I)):O>0&&O&64&&D&&f.dynamicChildren?(pe(f.dynamicChildren,D,g,_,T,R,E),(p.key!=null||_&&p===_.subTree)&&xo(f,p,!0)):ke(f,p,g,M,_,T,R,E,I)},Te=(f,p,g,y,_,T,R,E,I)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?_.ctx.activate(p,g,y,R,I):Ze(p,g,y,_,T,R,I):ue(f,p,I)},Ze=(f,p,g,y,_,T,R)=>{const E=f.component=Xu(f,y,_);if(gr(f)&&(E.ctx.renderer=re),Qu(E),E.asyncDep){if(_&&_.registerDep(E,ne),!f.el){const I=E.subTree=_e(Fe);x(null,I,p,g)}return}ne(E,f,p,g,_,T,R)},ue=(f,p,g)=>{const y=p.component=f.component;if(hu(f,p,g))if(y.asyncDep&&!y.asyncResolved){Y(y,p,g);return}else y.next=p,af(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},ne=(f,p,g,y,_,T,R)=>{const E=()=>{if(f.isMounted){let{next:M,bu:O,u:D,parent:F,vnode:K}=f,oe=M,Q;I.allowRecurse=!1,M?(M.el=K.el,Y(f,M,R)):M=K,O&&nr(O),(Q=M.props&&M.props.onVnodeBeforeUpdate)&&qe(Q,F,M,K),I.allowRecurse=!0;const ie=Is(f),Le=f.subTree;f.subTree=ie,S(Le,ie,d(Le.el),N(Le),f,_,T),M.el=ie.el,oe===null&&pu(f,ie.el),D&&Ie(D,_),(Q=M.props&&M.props.onVnodeUpdated)&&Ie(()=>qe(Q,F,M,K),_)}else{let M;const{el:O,props:D}=p,{bm:F,m:K,parent:oe}=f,Q=Cs(p);if(I.allowRecurse=!1,F&&nr(F),!Q&&(M=D&&D.onVnodeBeforeMount)&&qe(M,oe,p),I.allowRecurse=!0,O&&$){const ie=()=>{f.subTree=Is(f),$(O,f.subTree,f,_,null)};Q?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=Is(f);S(null,ie,g,y,f,_,T),p.el=ie.el}if(K&&Ie(K,_),!Q&&(M=D&&D.onVnodeMounted)){const ie=p;Ie(()=>qe(M,oe,ie),_)}p.shapeFlag&256&&f.a&&Ie(f.a,_),f.isMounted=!0,p=g=y=null}},I=new ds(E,()=>Yo(f.update),f.scope),b=f.update=I.run.bind(I);b.id=f.uid,I.allowRecurse=b.allowRecurse=!0,b()},Y=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Mu(f,p.props,y,g),xu(f,p.children,g),Jt(),js(void 0,f.update),St()},ke=(f,p,g,y,_,T,R,E,I=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,O=p.children,{patchFlag:D,shapeFlag:F}=p;if(D>0){if(D&128){et(b,O,g,y,_,T,R,E,I);return}else if(D&256){jt(b,O,g,y,_,T,R,E,I);return}}F&8?(M&16&&C(b,_,T),O!==b&&u(g,O)):M&16?F&16?et(b,O,g,y,_,T,R,E,I):C(b,_,T,!0):(M&8&&u(g,""),F&16&&J(O,g,y,_,T,R,E,I))},jt=(f,p,g,y,_,T,R,E,I)=>{f=f||Wt,p=p||Wt;const b=f.length,M=p.length,O=Math.min(b,M);let D;for(D=0;D<O;D++){const F=p[D]=I?pt(p[D]):Je(p[D]);S(f[D],F,g,null,_,T,R,E,I)}b>M?C(f,_,T,!0,!1,O):J(p,g,y,_,T,R,E,I,O)},et=(f,p,g,y,_,T,R,E,I)=>{let b=0;const M=p.length;let O=f.length-1,D=M-1;for(;b<=O&&b<=D;){const F=f[b],K=p[b]=I?pt(p[b]):Je(p[b]);if(kt(F,K))S(F,K,g,null,_,T,R,E,I);else break;b++}for(;b<=O&&b<=D;){const F=f[O],K=p[D]=I?pt(p[D]):Je(p[D]);if(kt(F,K))S(F,K,g,null,_,T,R,E,I);else break;O--,D--}if(b>O){if(b<=D){const F=D+1,K=F<M?p[F].el:y;for(;b<=D;)S(null,p[b]=I?pt(p[b]):Je(p[b]),g,K,_,T,R,E,I),b++}}else if(b>D)for(;b<=O;)Ne(f[b],_,T,!0),b++;else{const F=b,K=b,oe=new Map;for(b=K;b<=D;b++){const Ce=p[b]=I?pt(p[b]):Je(p[b]);Ce.key!=null&&oe.set(Ce.key,b)}let Q,ie=0;const Le=D-K+1;let zt=!1,Ri=0;const gn=new Array(Le);for(b=0;b<Le;b++)gn[b]=0;for(b=F;b<=O;b++){const Ce=f[b];if(ie>=Le){Ne(Ce,_,T,!0);continue}let je;if(Ce.key!=null)je=oe.get(Ce.key);else for(Q=K;Q<=D;Q++)if(gn[Q-K]===0&&kt(Ce,p[Q])){je=Q;break}je===void 0?Ne(Ce,_,T,!0):(gn[je-K]=b+1,je>=Ri?Ri=je:zt=!0,S(Ce,p[je],g,null,_,T,R,E,I),ie++)}const Si=zt?Hu(gn):Wt;for(Q=Si.length-1,b=Le-1;b>=0;b--){const Ce=K+b,je=p[Ce],Ai=Ce+1<M?p[Ce+1].el:y;gn[b]===0?S(null,je,g,Ai,_,T,R,E,I):zt&&(Q<0||b!==Si[Q]?Ve(je,g,Ai,2):Q--)}}},Ve=(f,p,g,y,_=null)=>{const{el:T,type:R,transition:E,children:I,shapeFlag:b}=f;if(b&6){Ve(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){R.move(f,p,g,re);return}if(R===ye){r(T,p,g);for(let O=0;O<I.length;O++)Ve(I[O],p,g,y);r(f.anchor,p,g);return}if(R===_r){j(f,p,g);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(T),r(T,p,g),Ie(()=>E.enter(T),_);else{const{leave:O,delayLeave:D,afterLeave:F}=E,K=()=>r(T,p,g),oe=()=>{O(T,()=>{K(),F&&F()})};D?D(T,K,oe):oe()}else r(T,p,g)},Ne=(f,p,g,y=!1,_=!1)=>{const{type:T,props:R,ref:E,children:I,dynamicChildren:b,shapeFlag:M,patchFlag:O,dirs:D}=f;if(E!=null&&Ps(E,null,g,f,!0),M&256){p.ctx.deactivate(f);return}const F=M&1&&D,K=!Cs(f);let oe;if(K&&(oe=R&&R.onVnodeBeforeUnmount)&&qe(oe,p,f),M&6)P(f.component,g,y);else{if(M&128){f.suspense.unmount(g,y);return}F&&Ot(f,null,p,"beforeUnmount"),M&64?f.type.remove(f,p,g,_,re,y):b&&(T!==ye||O>0&&O&64)?C(b,p,g,!1,!0):(T===ye&&O&(128|256)||!_&&M&16)&&C(I,p,g),y&&rs(f)}(K&&(oe=R&&R.onVnodeUnmounted)||F)&&Ie(()=>{oe&&qe(oe,p,f),F&&Ot(f,null,p,"unmounted")},g)},rs=f=>{const{type:p,el:g,anchor:y,transition:_}=f;if(p===ye){v(g,y);return}if(p===_r){te(f);return}const T=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:E}=_,I=()=>R(g,T);E?E(f.el,T,I):I()}else T()},v=(f,p)=>{let g;for(;f!==p;)g=h(f),s(f),f=g;s(p)},P=(f,p,g)=>{const{bum:y,scope:_,update:T,subTree:R,um:E}=f;y&&nr(y),_.stop(),T&&(T.active=!1,Ne(R,f,p,g)),E&&Ie(E,p),Ie(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(f,p,g,y=!1,_=!1,T=0)=>{for(let R=T;R<f.length;R++)Ne(f[R],p,g,y,_)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),X=(f,p,g)=>{f==null?p._vnode&&Ne(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,g),Zo(),p._vnode=f},re={p:S,um:Ne,m:Ve,r:rs,mt:Ze,mc:J,pc:ke,pbc:pe,n:N,o:e};let W,$;return t&&([W,$]=t(re)),{render:X,hydrate:W,createApp:Fu(X,W)}}function Ps(e,t,n,r,s=!1){if(U(e)){e.forEach((h,m)=>Ps(h,t&&(U(t)?t[m]:t),n,r,s));return}if(Cs(r)&&!s)return;const i=r.shapeFlag&4?Fs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===Z?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(me(l)?(u[l]=null,G(d,l)&&(d[l]=null)):we(l)&&(l.value=null)),me(c)){const h=()=>{u[c]=o,G(d,c)&&(d[c]=o)};o?(h.id=-1,Ie(h,n)):h()}else if(we(c)){const h=()=>{c.value=o};o?(h.id=-1,Ie(h,n)):h()}else H(c)&&gt(c,a,12,[o,u])}function qe(e,t,n,r=null){De(e,t,7,[n,r])}function xo(e,t,n=!1){const r=e.children,s=t.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=pt(s[i]),a.el=o.el),n||xo(o,a))}}function Hu(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vu=e=>e.__isTeleport,ks="components";function Cn(e,t){return Fo(ks,e,!0,t)||e}const Uo=Symbol();function Ns(e){return me(e)?Fo(ks,e,!1)||e:e||Uo}function Fo(e,t,n=!0,r=!1){const s=Se||ve;if(s){const i=s.type;if(e===ks){const a=nf(i);if(a&&(a===t||a===ze(t)||a===er(ze(t))))return i}const o=Bo(s[e]||i[e],t)||Bo(s.appContext[e],t);return!o&&r?i:o}}function Bo(e,t){return e&&(e[t]||e[ze(t)]||e[er(ze(t))])}const ye=Symbol(void 0),Ms=Symbol(void 0),Fe=Symbol(void 0),_r=Symbol(void 0),Rn=[];let Pt=null;function de(e=!1){Rn.push(Pt=e?null:[])}function ju(){Rn.pop(),Pt=Rn[Rn.length-1]||null}let yr=1;function $o(e){yr+=e}function Ho(e){return e.dynamicChildren=yr>0?Pt||Wt:null,ju(),yr>0&&Pt&&Pt.push(e),e}function Be(e,t,n,r,s,i){return Ho(Nt(e,t,n,r,s,i,!0))}function Ge(e,t,n,r,s){return Ho(_e(e,t,n,r,s,!0))}function br(e){return e?e.__v_isVNode===!0:!1}function kt(e,t){return e.type===t.type&&e.key===t.key}const Er="__vInternal",Vo=({key:e})=>e!=null?e:null,Ir=({ref:e})=>e!=null?me(e)||we(e)||H(e)?{i:Se,r:e}:e:null;function Nt(e,t=null,n=null,r=0,s=null,i=e===ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vo(t),ref:t&&Ir(t),scopeId:dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ls(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),yr>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const _e=zu;function zu(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Uo)&&(e=Fe),br(e)){const a=Qt(e,t,!0);return n&&Ls(a,n),a}if(rf(e)&&(e=e.__vccOpts),t){t=Wu(t);let{class:a,style:c}=t;a&&!me(a)&&(t.class=ft(a)),fe(c)&&(so(c)&&!U(c)&&(c=ge({},c)),t.style=mn(c))}const o=me(e)?1:gu(e)?128:Vu(e)?64:fe(e)?4:H(e)?2:0;return Nt(e,t,n,r,s,o,i,!0)}function Wu(e){return e?so(e)||Er in e?ge({},e):e:null}function Qt(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?wr(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Vo(a),ref:t&&t.ref?n&&s?U(s)?s.concat(Ir(t)):[s,Ir(t)]:Ir(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),el:e.el,anchor:e.anchor}}function Tr(e=" ",t=0){return _e(Ms,null,e,t)}function zm(e,t){const n=_e(_r,null,e);return n.staticCount=t,n}function Ds(e="",t=!1){return t?(de(),Ge(Fe,null,e)):_e(Fe,null,e)}function Je(e){return e==null||typeof e=="boolean"?_e(Fe):U(e)?_e(ye,null,e.slice()):typeof e=="object"?pt(e):_e(Ms,null,String(e))}function pt(e){return e.el===null||e.memo?e:Qt(e)}function Ls(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&(1|64)){const s=t.default;s&&(s._c&&(s._d=!1),Ls(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Er in t)?t._ctx=Se:s===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[Tr(t)]):n=8);e.children=t,e.shapeFlag|=n}function wr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ft([t.class,r.class]));else if(s==="style")t.style=mn([t.style,r.style]);else if(Jn(s)){const i=t[s],o=r[s];i!==o&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function jo(e,t,n,r){let s;const i=n&&n[r];if(U(e)||me(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(fe(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Ku(e,t,n={},r,s){if(Se.isCE)return _e("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),de();const o=i&&zo(i(n)),a=Ge(ye,{key:n.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function zo(e){return e.some(t=>br(t)?!(t.type===Fe||t.type===ye&&!zo(t.children)):!0)?e:null}function qu(e){const t={};for(const n in e)t[tr(n)]=e[n];return t}const xs=e=>e?Wo(e)?Fs(e)||e.proxy:xs(e.parent):null,Cr=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xs(e.parent),$root:e=>xs(e.root),$emit:e=>e.emit,$options:e=>wo(e),$forceUpdate:e=>()=>Yo(e.update),$nextTick:e=>Vs.bind(e.proxy),$watch:e=>uf.bind(e)}),Gu={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 0:return r[t];case 1:return s[t];case 3:return n[t];case 2:return i[t]}else{if(r!==Z&&G(r,t))return o[t]=0,r[t];if(s!==Z&&G(s,t))return o[t]=1,s[t];if((l=e.propsOptions[0])&&G(l,t))return o[t]=2,i[t];if(n!==Z&&G(n,t))return o[t]=3,n[t];Rs&&(o[t]=4)}}const u=Cr[t];let d,h;if(u)return t==="$attrs"&&Re(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==Z&&G(n,t))return o[t]=3,n[t];if(h=c.config.globalProperties,G(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;if(s!==Z&&G(s,t))s[t]=n;else if(r!==Z&&G(r,t))r[t]=n;else if(G(e.props,t))return!1;return t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return n[o]!==void 0||e!==Z&&G(e,o)||t!==Z&&G(t,o)||(a=i[0])&&G(a,o)||G(r,o)||G(Cr,o)||G(s.config.globalProperties,o)}},Ju=Lo();let Yu=0;function Xu(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Ju,i={uid:Yu++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,update:null,scope:new Bi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:So(r,s),emitsOptions:uo(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=uu.bind(null,i),e.ce&&e.ce(i),i}let ve=null;const Us=()=>ve||Se,Zt=e=>{ve=e,e.scope.on()},Mt=()=>{ve&&ve.scope.off(),ve=null};function Wo(e){return e.vnode.shapeFlag&4}let Rr=!1;function Qu(e,t=!1){Rr=t;const{props:n,children:r}=e.vnode,s=Wo(e);Nu(e,n,s,t),Lu(e,r);const i=s?Zu(e,t):void 0;return Rr=!1,i}function Zu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ys(new Proxy(e.ctx,Gu));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?tf(e):null;Zt(e),Jt();const i=gt(r,e,0,[e.props,s]);if(St(),Mt(),Li(i)){if(i.then(Mt,Mt),t)return i.then(o=>{Ko(e,o,t)}).catch(o=>{Sr(o,e,0)});e.asyncDep=i}else Ko(e,i,t)}else Go(e,t)}function Ko(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=lo(t)),Go(e,n)}let qo;function Go(e,t,n){const r=e.type;if(!e.render){if(!t&&qo&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ge(ge({isCustomElement:i,delimiters:a},o),c);r.render=qo(s,l)}}e.render=r.render||xe}Zt(e),Jt(),Su(e),St(),Mt()}function ef(e){return new Proxy(e.attrs,{get(t,n){return Re(e,"get","$attrs"),t[n]}})}function tf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ef(e))},slots:e.slots,emit:e.emit,expose:t}}function Fs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(lo(ys(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Cr)return Cr[n](e)}}))}function nf(e){return H(e)&&e.displayName||e.name}function rf(e){return H(e)&&"__vccOpts"in e}function gt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){Sr(i,t,n)}return s}function De(e,t,n,r){if(H(e)){const i=gt(e,t,n,r);return i&&Li(i)&&i.catch(o=>{Sr(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(De(e[i],t,n,r));return s}function Sr(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){gt(c,null,10,[e,o,a]);return}}sf(e,n,s,r)}function sf(e,t,n,r=!0){console.error(e)}let Ar=!1,Bs=!1;const Ae=[];let st=0;const Sn=[];let An=null,en=0;const On=[];let mt=null,tn=0;const Jo=Promise.resolve();let $s=null,Hs=null;function Vs(e){const t=$s||Jo;return e?t.then(this?e.bind(this):e):t}function of(e){let t=st+1,n=Ae.length;for(;t<n;){const r=t+n>>>1;Pn(Ae[r])<e?t=r+1:n=r}return t}function Yo(e){(!Ae.length||!Ae.includes(e,Ar&&e.allowRecurse?st+1:st))&&e!==Hs&&(e.id==null?Ae.push(e):Ae.splice(of(e.id),0,e),Xo())}function Xo(){!Ar&&!Bs&&(Bs=!0,$s=Jo.then(ea))}function af(e){const t=Ae.indexOf(e);t>st&&Ae.splice(t,1)}function Qo(e,t,n,r){U(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Xo()}function cf(e){Qo(e,An,Sn,en)}function lf(e){Qo(e,mt,On,tn)}function js(e,t=null){if(Sn.length){for(Hs=t,An=[...new Set(Sn)],Sn.length=0,en=0;en<An.length;en++)An[en]();An=null,en=0,Hs=null,js(e,t)}}function Zo(e){if(On.length){const t=[...new Set(On)];if(On.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,r)=>Pn(n)-Pn(r)),tn=0;tn<mt.length;tn++)mt[tn]();mt=null,tn=0}}const Pn=e=>e.id==null?1/0:e.id;function ea(e){Bs=!1,Ar=!0,js(e),Ae.sort((n,r)=>Pn(n)-Pn(r));const t=xe;try{for(st=0;st<Ae.length;st++){const n=Ae[st];n&&n.active!==!1&&gt(n,null,14)}}finally{st=0,Ae.length=0,Zo(),Ar=!1,$s=null,(Ae.length||Sn.length||On.length)&&ea(e)}}const ta={};function Or(e,t,n){return na(e,t,n)}function na(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){const a=ve;let c,l=!1,u=!1;if(we(e)?(c=()=>e.value,l=!!e._shallow):Yt(e)?(c=()=>e,r=!0):U(e)?(u=!0,l=e.some(Yt),c=()=>e.map(A=>{if(we(A))return A.value;if(Yt(A))return Dt(A);if(H(A))return gt(A,a,2)})):H(e)?t?c=()=>gt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),De(e,a,3,[h])}:c=xe,t&&r){const A=c;c=()=>Dt(A())}let d,h=A=>{d=S.onStop=()=>{gt(A,a,4)}};if(Rr)return h=xe,t?n&&De(t,a,3,[c(),u?[]:void 0,h]):c(),xe;let m=u?[]:ta;const w=()=>{if(!!S.active)if(t){const A=S.run();(r||l||(u?A.some((x,V)=>vn(x,m[V])):vn(A,m)))&&(d&&d(),De(t,a,3,[A,m===ta?void 0:m,h]),m=A)}else S.run()};w.allowRecurse=!!t;let L;s==="sync"?L=w:s==="post"?L=()=>Ie(w,a&&a.suspense):L=()=>{!a||a.isMounted?cf(w):w()};const S=new ds(c,L);return t?n?w():m=S.run():s==="post"?Ie(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&Mi(a.scope.effects,S)}}function uf(e,t,n){const r=this.proxy,s=me(e)?e.includes(".")?ra(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=ve;Zt(this);const a=na(s,i.bind(r),n);return o?Zt(o):Mt(),a}function ra(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Dt(e,t){if(!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))Dt(e.value,t);else if(U(e))for(let n=0;n<e.length;n++)Dt(e[n],t);else if(Yn(e)||Kt(e))e.forEach(n=>{Dt(n,t)});else if(Ui(e))for(const n in e)Dt(e[n],t);return e}function zs(e,t,n){const r=arguments.length;return r===2?fe(t)&&!U(t)?br(t)?_e(e,null,[t]):_e(e,t):_e(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&br(n)&&(n=[n]),_e(e,t,n))}const ff="3.2.20",df="http://www.w3.org/2000/svg",nn=typeof document!="undefined"?document:null,sa=new Map,hf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?nn.createElementNS(df,e):nn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>nn.createTextNode(e),createComment:e=>nn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const s=n?n.previousSibling:t.lastChild;let i=sa.get(e);if(!i){const o=nn.createElement("template");if(o.innerHTML=r?`<svg>${e}</svg>`:e,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}sa.set(e,i)}return t.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function pf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function gf(e,t,n){const r=e.style,s=r.display;if(!n)e.removeAttribute("style");else if(me(n))t!==n&&(r.cssText=n);else{for(const i in n)Ws(r,i,n[i]);if(t&&!me(t))for(const i in t)n[i]==null&&Ws(r,i,"")}"_vod"in e&&(r.display=s)}const ia=/\s*!important$/;function Ws(e,t,n){if(U(n))n.forEach(r=>Ws(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=mf(e,t);ia.test(n)?e.setProperty(qt(r),n.replace(ia,""),"important"):e[r]=n}}const oa=["Webkit","Moz","ms"],Ks={};function mf(e,t){const n=Ks[t];if(n)return n;let r=ze(t);if(r!=="filter"&&r in e)return Ks[t]=r;r=er(r);for(let s=0;s<oa.length;s++){const i=oa[s]+r;if(i in e)return Ks[t]=i}return t}const aa="http://www.w3.org/1999/xlink";function vf(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(aa,t.slice(6,t.length)):e.setAttributeNS(aa,t,n);else{const i=yl(t);n==null||i&&!Oi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _f(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"){e._value=n;const a=n==null?"":n;e.value!==a&&(e.value=a),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const a=typeof e[t];if(a==="boolean"){e[t]=Oi(n);return}else if(n==null&&a==="string"){e[t]="",e.removeAttribute(t);return}else if(a==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let Pr=Date.now,ca=!1;if(typeof window!="undefined"){Pr()>document.createEvent("Event").timeStamp&&(Pr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);ca=!!(e&&Number(e[1])<=53)}let qs=0;const yf=Promise.resolve(),bf=()=>{qs=0},Ef=()=>qs||(yf.then(bf),qs=Pr());function Lt(e,t,n,r){e.addEventListener(t,n,r)}function If(e,t,n,r){e.removeEventListener(t,n,r)}function Tf(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=wf(t);if(r){const l=i[t]=Cf(r,s);Lt(e,a,l,c)}else o&&(If(e,a,o,c),i[t]=void 0)}}const la=/(?:Once|Passive|Capture)$/;function wf(e){let t;if(la.test(e)){t={};let n;for(;n=e.match(la);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[qt(e.slice(2)),t]}function Cf(e,t){const n=r=>{const s=r.timeStamp||Pr();(ca||s>=n.attached-1)&&De(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=Ef(),n}function Rf(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r(s))}else return t}const ua=/^on[a-z]/,Sf=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?pf(e,r,s):t==="style"?gf(e,n,r):Jn(t)?is(t)||Tf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Af(e,t,r,s))?_f(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),vf(e,t,r,s))};function Af(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ua.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ua.test(t)&&me(n)?!1:t in e}const vt="transition",kn="animation",fa=(e,{slots:t})=>zs(po,pa(e),t);fa.displayName="Transition";const da={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Of=fa.props=ge({},po.props,da),xt=(e,t=[])=>{U(e)?e.forEach(n=>n(...t)):e&&e(...t)},ha=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function pa(e){const t={};for(const k in e)k in da||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,w=Pf(s),L=w&&w[0],S=w&&w[1],{onBeforeEnter:A,onEnter:x,onEnterCancelled:V,onLeave:j,onLeaveCancelled:te,onBeforeAppear:ae=A,onAppear:z=x,onAppearCancelled:ce=V}=t,J=(k,le,Te)=>{Ut(k,le?u:a),Ut(k,le?l:o),Te&&Te()},he=(k,le)=>{Ut(k,m),Ut(k,h),le&&le()},pe=k=>(le,Te)=>{const Ze=k?z:x,ue=()=>J(le,k,Te);xt(Ze,[le,ue]),ga(()=>{Ut(le,k?c:i),it(le,k?u:a),ha(Ze)||ma(le,r,L,ue)})};return ge(t,{onBeforeEnter(k){xt(A,[k]),it(k,i),it(k,o)},onBeforeAppear(k){xt(ae,[k]),it(k,c),it(k,l)},onEnter:pe(!1),onAppear:pe(!0),onLeave(k,le){const Te=()=>he(k,le);it(k,d),ba(),it(k,h),ga(()=>{Ut(k,d),it(k,m),ha(j)||ma(k,r,S,Te)}),xt(j,[k,Te])},onEnterCancelled(k){J(k,!1),xt(V,[k])},onAppearCancelled(k){J(k,!0),xt(ce,[k])},onLeaveCancelled(k){he(k),xt(te,[k])}})}function Pf(e){if(e==null)return null;if(fe(e))return[Gs(e.enter),Gs(e.leave)];{const t=Gs(e);return[t,t]}}function Gs(e){return sr(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ut(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ga(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let kf=0;function ma(e,t,n,r){const s=e._endId=++kf,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=va(e,t);if(!o)return r();const l=o+"end";let u=0;const d=()=>{e.removeEventListener(l,h),i()},h=m=>{m.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),e.addEventListener(l,h)}function va(e,t){const n=window.getComputedStyle(e),r=w=>(n[w]||"").split(", "),s=r(vt+"Delay"),i=r(vt+"Duration"),o=_a(s,i),a=r(kn+"Delay"),c=r(kn+"Duration"),l=_a(a,c);let u=null,d=0,h=0;t===vt?o>0&&(u=vt,d=o,h=i.length):t===kn?l>0&&(u=kn,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?vt:kn:null,h=u?u===vt?i.length:c.length:0);const m=u===vt&&/\b(transform|all)(,|$)/.test(n[vt+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:m}}function _a(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ya(n)+ya(e[r])))}function ya(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ba(){return document.body.offsetHeight}const Ea=new WeakMap,Ia=new WeakMap,Nf={name:"TransitionGroup",props:ge({},Of,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Us(),r=ho();let s,i;return yo(()=>{if(!s.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Uf(s[0].el,n.vnode.el,o))return;s.forEach(Df),s.forEach(Lf);const a=s.filter(xf);ba(),a.forEach(c=>{const l=c.el,u=l.style;it(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",d),l._moveCb=null,Ut(l,o))};l.addEventListener("transitionend",d)})}),()=>{const o=q(e),a=pa(o);let c=o.tag||ye;s=i,i=t.default?ws(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&wn(u,Tn(u,a,r,n))}if(s)for(let l=0;l<s.length;l++){const u=s[l];wn(u,Tn(u,a,r,n)),Ea.set(u,u.el.getBoundingClientRect())}return _e(c,null,i)}}},Mf=Nf;function Df(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Lf(e){Ia.set(e,e.el.getBoundingClientRect())}function xf(e){const t=Ea.get(e),n=Ia.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",e}}function Uf(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:i}=va(r);return s.removeChild(r),i}const kr=e=>{const t=e.props["onUpdate:modelValue"];return U(t)?n=>nr(t,n):t};function Ff(e){e.target.composing=!0}function Ta(e){const t=e.target;t.composing&&(t.composing=!1,Bf(t,"input"))}function Bf(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Wm={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=kr(s);const i=r||s.props&&s.props.type==="number";Lt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n?a=a.trim():i&&(a=sr(a)),e._assign(a)}),n&&Lt(e,"change",()=>{e.value=e.value.trim()}),t||(Lt(e,"compositionstart",Ff),Lt(e,"compositionend",Ta),Lt(e,"change",Ta))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=kr(i),e.composing||document.activeElement===e&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&sr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Km={deep:!0,created(e,t,n){e._assign=kr(n),Lt(e,"change",()=>{const r=e._modelValue,s=$f(e),i=e.checked,o=e._assign;if(U(r)){const a=Pi(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Yn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Ca(e,i))})},mounted:wa,beforeUpdate(e,t,n){e._assign=kr(n),wa(e,t,n)}};function wa(e,{value:t,oldValue:n},r){e._modelValue=t,U(t)?e.checked=Pi(t,r.props.value)>-1:Yn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Gn(t,Ca(e,!0)))}function $f(e){return"_value"in e?e._value:e.value}function Ca(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Hf=["ctrl","shift","alt","meta"],Vf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Hf.some(n=>e[`${n}Key`]&&!t.includes(n))},jf=(e,t)=>(n,...r)=>{for(let s=0;s<t.length;s++){const i=Vf[t[s]];if(i&&i(n,t))return}return e(n,...r)},qm={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Nn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Nn(e,!0),r.enter(e)):r.leave(e,()=>{Nn(e,!1)}):Nn(e,t))},beforeUnmount(e,{value:t}){Nn(e,t)}};function Nn(e,t){e.style.display=t?e._vod:"none"}const zf=ge({patchProp:Sf},hf);let Ra;function Wf(){return Ra||(Ra=Bu(zf))}const Kf=(...e)=>{const t=Wf().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=qf(r);if(!s)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function qf(e){return me(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Sa=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",rn=e=>Sa?Symbol(e):"_vr_"+e,Gf=rn("rvlm"),Aa=rn("rvd"),Nr=rn("r"),Js=rn("rl"),Ys=rn("rvl"),sn=typeof window!="undefined";function Jf(e){return e.__esModule||Sa&&e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Xs(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const Mn=()=>{},Yf=/\/$/,Xf=e=>e.replace(Yf,"");function Qs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=td(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Qf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Oa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Zf(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&on(t.matched[r],n.matched[s])&&Pa(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function on(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Pa(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ed(e[n],t[n]))return!1;return!0}function ed(e,t){return Array.isArray(e)?ka(e,t):Array.isArray(t)?ka(t,e):e===t}function ka(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function td(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Dn;(function(e){e.pop="pop",e.push="push"})(Dn||(Dn={}));var Ln;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ln||(Ln={}));function nd(e){if(!e)if(sn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Xf(e)}const rd=/^[^#]+#/;function sd(e,t){return e.replace(rd,"#")+t}function id(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function od(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=id(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Na(e,t){return(history.state?history.state.position-t:-1)+e}const Zs=new Map;function ad(e,t){Zs.set(e,t)}function cd(e){const t=Zs.get(e);return Zs.delete(e),t}let ld=()=>location.protocol+"//"+location.host;function Ma(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Oa(c,"")}return Oa(n,e)+r+s}function ud(e,t,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=Ma(e,location),w=n.value,L=t.value;let S=0;if(h){if(n.value=m,t.value=h,o&&o===w){o=null;return}S=L?h.position-L.position:0}else r(m);s.forEach(A=>{A(n.value,w,{delta:S,type:Dn.pop,direction:S?S>0?Ln.forward:Ln.back:Ln.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const w=s.indexOf(h);w>-1&&s.splice(w,1)};return i.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(ee({},h.state,{scroll:Mr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function Da(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Mr():null}}function fd(e){const{history:t,location:n}=window,r={value:Ma(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:ld()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=ee({},t.state,Da(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ee({},s.value,t.state,{forward:c,scroll:Mr()});i(u.current,u,!0);const d=ee({},Da(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Gm(e){e=nd(e);const t=fd(e),n=ud(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:e,go:r,createHref:sd.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function dd(e){return typeof e=="string"||e&&typeof e=="object"}function La(e){return typeof e=="string"||typeof e=="symbol"}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xa=rn("nf");var Ua;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ua||(Ua={}));function an(e,t){return ee(new Error,{type:e,[xa]:!0},t)}function Ft(e,t){return e instanceof Error&&xa in e&&(t==null||!!(e.type&t))}const Fa="[^/]+?",hd={sensitive:!1,strict:!1,start:!0,end:!0},pd=/[.+*?^${}()[\]/\\]/g;function gd(e,t){const n=ee({},hd,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const h=l[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(pd,"\\$&"),m+=40;else if(h.type===1){const{value:w,repeatable:L,optional:S,regexp:A}=h;i.push({name:w,repeatable:L,optional:S});const x=A||Fa;if(x!==Fa){m+=10;try{new RegExp(`(${x})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${w}" (${x}): `+j.message)}}let V=L?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(V=S&&l.length<2?`(?:/${V})`:"/"+V),S&&(V+="?"),s+=V,m+=20,S&&(m+=-8),L&&(m+=-20),x===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",w=i[h-1];d[w.name]=m&&w.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const h of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:w,repeatable:L,optional:S}=m,A=w in l?l[w]:"";if(Array.isArray(A)&&!L)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(A)?A.join("/"):A;if(!x)if(S)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=x}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function md(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function vd(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=md(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const _d={type:0,value:""},yd=/[a-zA-Z0-9_]/;function bd(e){if(!e)return[[]];if(e==="/")return[[_d]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:yd.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Ed(e,t,n){const r=gd(bd(e.path),n),s=ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Id(e,t){const n=[],r=new Map;t=$a({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,d,h){const m=!h,w=wd(u);w.aliasOf=h&&h.record;const L=$a(t,u),S=[w];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of V)S.push(ee({},w,{components:h?h.record.components:w.components,path:j,aliasOf:h?h.record:w}))}let A,x;for(const V of S){const{path:j}=V;if(d&&j[0]!=="/"){const te=d.record.path,ae=te[te.length-1]==="/"?"":"/";V.path=d.record.path+(j&&ae+j)}if(A=Ed(V,d,L),h?h.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),m&&u.name&&!Ba(A)&&o(u.name)),"children"in w){const te=w.children;for(let ae=0;ae<te.length;ae++)i(te[ae],A,h&&h.children[ae])}h=h||A,c(A)}return x?()=>{o(x)}:Mn}function o(u){if(La(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&vd(u,n[d])>=0;)d++;n.splice(d,0,u),u.record.name&&!Ba(u)&&r.set(u.record.name,u)}function l(u,d){let h,m={},w,L;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw an(1,{location:u});L=h.record.name,m=ee(Td(d.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),w=h.stringify(m)}else if("path"in u)w=u.path,h=n.find(x=>x.re.test(w)),h&&(m=h.parse(w),L=h.record.name);else{if(h=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!h)throw an(1,{location:u,currentLocation:d});L=h.record.name,m=ee({},d.params,u.params),w=h.stringify(m)}const S=[];let A=h;for(;A;)S.unshift(A.record),A=A.parent;return{name:L,path:w,params:m,matched:S,meta:Rd(S)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Td(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function wd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Cd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Cd(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ba(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Rd(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function $a(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Ha=/#/g,Sd=/&/g,Ad=/\//g,Od=/=/g,Pd=/\?/g,Va=/\+/g,kd=/%5B/g,Nd=/%5D/g,ja=/%5E/g,Md=/%60/g,za=/%7B/g,Dd=/%7C/g,Wa=/%7D/g,Ld=/%20/g;function ei(e){return encodeURI(""+e).replace(Dd,"|").replace(kd,"[").replace(Nd,"]")}function xd(e){return ei(e).replace(za,"{").replace(Wa,"}").replace(ja,"^")}function ti(e){return ei(e).replace(Va,"%2B").replace(Ld,"+").replace(Ha,"%23").replace(Sd,"%26").replace(Md,"`").replace(za,"{").replace(Wa,"}").replace(ja,"^")}function Ud(e){return ti(e).replace(Od,"%3D")}function Fd(e){return ei(e).replace(Ha,"%23").replace(Pd,"%3F")}function Bd(e){return e==null?"":Fd(e).replace(Ad,"%2F")}function Dr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function $d(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Va," "),o=i.indexOf("="),a=Dr(o<0?i:i.slice(0,o)),c=o<0?null:Dr(i.slice(o+1));if(a in t){let l=t[a];Array.isArray(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Ka(e){let t="";for(let n in e){const r=e[n];if(n=Ud(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ti(i)):[r&&ti(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Hd(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function xn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function yt(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(an(4,{from:n,to:t})):d instanceof Error?a(d):dd(d)?a(an(2,{from:t,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function ni(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Vd(a)){const l=(a.__vccOpts||a)[t];l&&s.push(yt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Jf(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&yt(h,n,r,i,o)()}))}}return s}function Vd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qa(e){const t=Ue(Nr),n=Ue(Js),r=Ke(()=>t.resolve(Xt(e.to))),s=Ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(on.bind(null,u));if(h>-1)return h;const m=Ga(c[l-2]);return l>1&&Ga(u)===m&&d[d.length-1].path!==m?d.findIndex(on.bind(null,c[l-2])):h}),i=Ke(()=>s.value>-1&&Kd(n.params,r.value.params)),o=Ke(()=>s.value>-1&&s.value===n.matched.length-1&&Pa(n.params,r.value.params));function a(c={}){return Wd(c)?t[Xt(e.replace)?"replace":"push"](Xt(e.to)).catch(Mn):Promise.resolve()}return{route:r,href:Ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const jd=nt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qa,setup(e,{slots:t}){const n=bn(qa(e)),{options:r}=Ue(Nr),s=Ke(()=>({[Ja(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ja(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:zs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zd=jd;function Wd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Kd(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ga(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ja=(e,t,n)=>e!=null?e:t!=null?t:n,qd=nt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Ue(Ys),s=Ke(()=>e.route||r.value),i=Ue(Aa,0),o=Ke(()=>s.value.matched[i]);pr(Aa,i+1),pr(Gf,o),pr(Ys,s);const a=ao();return Or(()=>[a.value,o.value,e.name],([c,l,u],[d,h,m])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!on(l,h)||!d)&&(l.enterCallbacks[u]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[e.name],d=e.name;if(!u)return Ya(n.default,{Component:u,route:c});const h=l.props[e.name],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,L=zs(u,ee({},m,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(l.instances[d]=null)},ref:a}));return Ya(n.default,{Component:L,route:c})||L}}});function Ya(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Gd=qd;function Jm(e){const t=Id(e.routes,e),n=e.parseQuery||$d,r=e.stringifyQuery||Ka,s=e.history,i=xn(),o=xn(),a=xn(),c=ou(_t);let l=_t;sn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xs.bind(null,v=>""+v),d=Xs.bind(null,Bd),h=Xs.bind(null,Dr);function m(v,P){let C,N;return La(v)?(C=t.getRecordMatcher(v),N=P):N=v,t.addRoute(N,C)}function w(v){const P=t.getRecordMatcher(v);P&&t.removeRoute(P)}function L(){return t.getRoutes().map(v=>v.record)}function S(v){return!!t.getRecordMatcher(v)}function A(v,P){if(P=ee({},P||c.value),typeof v=="string"){const $=Qs(n,v,P.path),f=t.resolve({path:$.path},P),p=s.createHref($.fullPath);return ee($,f,{params:h(f.params),hash:Dr($.hash),redirectedFrom:void 0,href:p})}let C;if("path"in v)C=ee({},v,{path:Qs(n,v.path,P.path).path});else{const $=ee({},v.params);for(const f in $)$[f]==null&&delete $[f];C=ee({},v,{params:d(v.params)}),P.params=d(P.params)}const N=t.resolve(C,P),X=v.hash||"";N.params=u(h(N.params));const re=Qf(r,ee({},v,{hash:xd(X),path:N.path})),W=s.createHref(re);return ee({fullPath:re,hash:X,query:r===Ka?Hd(v.query):v.query||{}},N,{redirectedFrom:void 0,href:W})}function x(v){return typeof v=="string"?Qs(n,v,c.value.path):ee({},v)}function V(v,P){if(l!==v)return an(8,{from:P,to:v})}function j(v){return z(v)}function te(v){return j(ee(x(v),{replace:!0}))}function ae(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let N=typeof C=="function"?C(v):C;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=x(N):{path:N},N.params={}),ee({query:v.query,hash:v.hash,params:v.params},N)}}function z(v,P){const C=l=A(v),N=c.value,X=v.state,re=v.force,W=v.replace===!0,$=ae(C);if($)return z(ee(x($),{state:X,force:re,replace:W}),P||C);const f=C;f.redirectedFrom=P;let p;return!re&&Zf(r,N,C)&&(p=an(16,{to:f,from:N}),jt(N,N,!0,!1)),(p?Promise.resolve(p):J(f,N)).catch(g=>Ft(g)?g:ne(g,f,N)).then(g=>{if(g){if(Ft(g,2))return z(ee(x(g.to),{state:X,force:re,replace:W}),P||f)}else g=pe(f,N,!0,W,X);return he(f,N,g),g})}function ce(v,P){const C=V(v,P);return C?Promise.reject(C):Promise.resolve()}function J(v,P){let C;const[N,X,re]=Jd(v,P);C=ni(N.reverse(),"beforeRouteLeave",v,P);for(const $ of N)$.leaveGuards.forEach(f=>{C.push(yt(f,v,P))});const W=ce.bind(null,v,P);return C.push(W),cn(C).then(()=>{C=[];for(const $ of i.list())C.push(yt($,v,P));return C.push(W),cn(C)}).then(()=>{C=ni(X,"beforeRouteUpdate",v,P);for(const $ of X)$.updateGuards.forEach(f=>{C.push(yt(f,v,P))});return C.push(W),cn(C)}).then(()=>{C=[];for(const $ of v.matched)if($.beforeEnter&&!P.matched.includes($))if(Array.isArray($.beforeEnter))for(const f of $.beforeEnter)C.push(yt(f,v,P));else C.push(yt($.beforeEnter,v,P));return C.push(W),cn(C)}).then(()=>(v.matched.forEach($=>$.enterCallbacks={}),C=ni(re,"beforeRouteEnter",v,P),C.push(W),cn(C))).then(()=>{C=[];for(const $ of o.list())C.push(yt($,v,P));return C.push(W),cn(C)}).catch($=>Ft($,8)?$:Promise.reject($))}function he(v,P,C){for(const N of a.list())N(v,P,C)}function pe(v,P,C,N,X){const re=V(v,P);if(re)return re;const W=P===_t,$=sn?history.state:{};C&&(N||W?s.replace(v.fullPath,ee({scroll:W&&$&&$.scroll},X)):s.push(v.fullPath,X)),c.value=v,jt(v,P,C,W),ke()}let k;function le(){k=s.listen((v,P,C)=>{const N=A(v),X=ae(N);if(X){z(ee(X,{replace:!0}),N).catch(Mn);return}l=N;const re=c.value;sn&&ad(Na(re.fullPath,C.delta),Mr()),J(N,re).catch(W=>Ft(W,4|8)?W:Ft(W,2)?(z(W.to,N).then($=>{Ft($,4|16)&&!C.delta&&C.type===Dn.pop&&s.go(-1,!1)}).catch(Mn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),ne(W,N,re))).then(W=>{W=W||pe(N,re,!1),W&&(C.delta?s.go(-C.delta,!1):C.type===Dn.pop&&Ft(W,4|16)&&s.go(-1,!1)),he(N,re,W)}).catch(Mn)})}let Te=xn(),Ze=xn(),ue;function ne(v,P,C){ke(v);const N=Ze.list();return N.length?N.forEach(X=>X(v,P,C)):console.error(v),Promise.reject(v)}function Y(){return ue&&c.value!==_t?Promise.resolve():new Promise((v,P)=>{Te.add([v,P])})}function ke(v){ue||(ue=!0,le(),Te.list().forEach(([P,C])=>v?C(v):P()),Te.reset())}function jt(v,P,C,N){const{scrollBehavior:X}=e;if(!sn||!X)return Promise.resolve();const re=!C&&cd(Na(v.fullPath,0))||(N||!C)&&history.state&&history.state.scroll||null;return Vs().then(()=>X(v,P,re)).then(W=>W&&od(W)).catch(W=>ne(W,v,P))}const et=v=>s.go(v);let Ve;const Ne=new Set;return{currentRoute:c,addRoute:m,removeRoute:w,hasRoute:S,getRoutes:L,resolve:A,options:e,push:j,replace:te,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ze.add,isReady:Y,install(v){const P=this;v.component("RouterLink",zd),v.component("RouterView",Gd),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Xt(c)}),sn&&!Ve&&c.value===_t&&(Ve=!0,j(s.location).catch(X=>{}));const C={};for(const X in _t)C[X]=Ke(()=>c.value[X]);v.provide(Nr,P),v.provide(Js,bn(C)),v.provide(Ys,c);const N=v.unmount;Ne.add(v),v.unmount=function(){Ne.delete(v),Ne.size<1&&(l=_t,k&&k(),c.value=_t,Ve=!1,ue=!1),N()}}}}function cn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Jd(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>on(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>on(l,c))||s.push(c))}return[n,r,s]}function Ym(){return Ue(Nr)}function Xm(){return Ue(Js)}var Yd=Object.defineProperty,Xa=Object.getOwnPropertySymbols,Xd=Object.prototype.hasOwnProperty,Qd=Object.prototype.propertyIsEnumerable,Qa=(e,t,n)=>t in e?Yd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Za=(e,t)=>{for(var n in t||(t={}))Xd.call(t,n)&&Qa(e,n,t[n]);if(Xa)for(var n of Xa(t))Qd.call(t,n)&&Qa(e,n,t[n]);return e},Lr=e=>typeof e=="function",xr=e=>typeof e=="string",ec=e=>xr(e)&&e.trim().length>0,Zd=e=>typeof e=="number",Bt=e=>typeof e=="undefined",Un=e=>typeof e=="object"&&e!==null,eh=e=>Ye(e,"tag")&&ec(e.tag),tc=e=>window.TouchEvent&&e instanceof TouchEvent,nc=e=>Ye(e,"component")&&rc(e.component),th=e=>Lr(e)||Un(e),rc=e=>!Bt(e)&&(xr(e)||th(e)||nc(e)),sc=e=>Un(e)&&["height","width","right","left","top","bottom"].every(t=>Zd(e[t])),Ye=(e,t)=>(Un(e)||Lr(e))&&t in e,nh=(e=>()=>e++)(0);function ri(e){return tc(e)?e.targetTouches[0].clientX:e.clientX}function ic(e){return tc(e)?e.targetTouches[0].clientY:e.clientY}var rh=e=>{Bt(e.remove)?e.parentNode&&e.parentNode.removeChild(e):e.remove()},Fn=e=>nc(e)?Fn(e.component):eh(e)?nt({render(){return e}}):typeof e=="string"?e:q(Xt(e)),sh=e=>{if(typeof e=="string")return e;const t=Ye(e,"props")&&Un(e.props)?e.props:{},n=Ye(e,"listeners")&&Un(e.listeners)?e.listeners:{};return{component:Fn(e),props:t,listeners:n}},ih=()=>typeof window!="undefined",si=class{constructor(){this.allHandlers={}}getHandlers(e){return this.allHandlers[e]||[]}on(e,t){const n=this.getHandlers(e);n.push(t),this.allHandlers[e]=n}off(e,t){const n=this.getHandlers(e);n.splice(n.indexOf(t)>>>0,1)}emit(e,t){this.getHandlers(e).forEach(r=>r(t))}},oh=e=>["on","off","emit"].every(t=>Ye(e,t)&&Lr(e[t])),Oe;(function(e){e.SUCCESS="success",e.ERROR="error",e.WARNING="warning",e.INFO="info",e.DEFAULT="default"})(Oe||(Oe={}));var Ur;(function(e){e.TOP_LEFT="top-left",e.TOP_CENTER="top-center",e.TOP_RIGHT="top-right",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_CENTER="bottom-center",e.BOTTOM_RIGHT="bottom-right"})(Ur||(Ur={}));var Pe;(function(e){e.ADD="add",e.DISMISS="dismiss",e.UPDATE="update",e.CLEAR="clear",e.UPDATE_DEFAULTS="update_defaults"})(Pe||(Pe={}));var $e="Vue-Toastification",He={type:{type:String,default:Oe.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},oc={type:He.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Fr={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:He.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},ii={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},ac={transition:{type:[Object,String],default:`${$e}__bounce`}},ah={position:{type:String,default:Ur.TOP_RIGHT},draggable:He.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:He.trueBoolean,pauseOnHover:He.trueBoolean,closeOnClick:He.trueBoolean,timeout:ii.timeout,hideProgressBar:ii.hideProgressBar,toastClassName:He.classNames,bodyClassName:He.classNames,icon:oc.customIcon,closeButton:Fr.component,closeButtonClassName:Fr.classNames,showCloseButtonOnHover:Fr.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new si}},ch={id:{type:[String,Number],required:!0,default:0},type:He.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},lh={container:{type:[Object,Function],default:()=>document.body},newestOnTop:He.trueBoolean,maxToasts:{type:Number,default:20},transition:ac.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:e=>e},filterToasts:{type:Function,default:e=>e},containerClassName:He.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},ot={CORE_TOAST:ah,TOAST:ch,CONTAINER:lh,PROGRESS_BAR:ii,ICON:oc,TRANSITION:ac,CLOSE_BUTTON:Fr},cc=nt({name:"VtProgressBar",props:ot.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${$e}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function uh(e,t){return de(),Be("div",{style:mn(e.style),class:ft(e.cpClass)},null,6)}cc.render=uh;var fh=cc,lc=nt({name:"VtCloseButton",props:ot.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?Fn(this.component):"button"},classes(){const e=[`${$e}__close-button`];return this.showOnHover&&e.push("show-on-hover"),e.concat(this.classNames)}}}),dh=Tr(" \xD7 ");function hh(e,t){return de(),Ge(Ns(e.buttonComponent),wr({"aria-label":e.ariaLabel,class:e.classes},e.$attrs),{default:In(()=>[dh]),_:1},16,["aria-label","class"])}lc.render=hh;var ph=lc,uc={},gh={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},mh=Nt("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),vh=[mh];function _h(e,t){return de(),Be("svg",gh,vh)}uc.render=_h;var yh=uc,fc={},bh={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Eh=Nt("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),Ih=[Eh];function Th(e,t){return de(),Be("svg",bh,Ih)}fc.render=Th;var dc=fc,hc={},wh={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Ch=Nt("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Rh=[Ch];function Sh(e,t){return de(),Be("svg",wh,Rh)}hc.render=Sh;var Ah=hc,pc={},Oh={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Ph=Nt("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),kh=[Ph];function Nh(e,t){return de(),Be("svg",Oh,kh)}pc.render=Nh;var Mh=pc,gc=nt({name:"VtIcon",props:ot.ICON,computed:{customIconChildren(){return Ye(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return xr(this.customIcon)?this.trimValue(this.customIcon):Ye(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return Ye(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:rc(this.customIcon)?Fn(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Oe.DEFAULT]:dc,[Oe.INFO]:dc,[Oe.SUCCESS]:yh,[Oe.ERROR]:Mh,[Oe.WARNING]:Ah}[this.type]},iconClasses(){const e=[`${$e}__icon`];return this.hasCustomIcon?e.concat(this.customIconClass):e}},methods:{trimValue(e,t=""){return ec(e)?e.trim():t}}});function Dh(e,t){return de(),Ge(Ns(e.component),{class:ft(e.iconClasses)},{default:In(()=>[Tr(ki(e.customIconChildren),1)]),_:1},8,["class"])}gc.render=Dh;var Lh=gc,mc=nt({name:"VtToast",components:{ProgressBar:fh,CloseButton:ph,Icon:Lh},inheritAttrs:!1,props:Object.assign({},ot.CORE_TOAST,ot.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const e=[`${$e}__toast`,`${$e}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&e.push("disable-transition"),this.rtl&&e.push(`${$e}__toast--rtl`),e},bodyClasses(){return[`${$e}__toast-${xr(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return sc(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:Ye,getVueComponentFromObj:Fn,closeToast(){this.eventBus.emit(Pe.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const e=this.$el;e.addEventListener("touchstart",this.onDragStart,{passive:!0}),e.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const e=this.$el;e.removeEventListener("touchstart",this.onDragStart),e.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(e){this.beingDragged=!0,this.dragPos={x:ri(e),y:ic(e)},this.dragStart=ri(e),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(e){this.beingDragged&&(e.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:ri(e),y:ic(e)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,sc(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),xh=["role"];function Uh(e,t){const n=Cn("Icon"),r=Cn("CloseButton"),s=Cn("ProgressBar");return de(),Be("div",{class:ft(e.classes),style:mn(e.draggableStyle),onClick:t[0]||(t[0]=(...i)=>e.clickHandler&&e.clickHandler(...i)),onMouseenter:t[1]||(t[1]=(...i)=>e.hoverPause&&e.hoverPause(...i)),onMouseleave:t[2]||(t[2]=(...i)=>e.hoverPlay&&e.hoverPlay(...i))},[e.icon?(de(),Ge(n,{key:0,"custom-icon":e.icon,type:e.type},null,8,["custom-icon","type"])):Ds("v-if",!0),Nt("div",{role:e.accessibility.toastRole||"alert",class:ft(e.bodyClasses)},[typeof e.content=="string"?(de(),Be(ye,{key:0},[Tr(ki(e.content),1)],2112)):(de(),Ge(Ns(e.getVueComponentFromObj(e.content)),wr({key:1,"toast-id":e.id},e.hasProp(e.content,"props")?e.content.props:{},qu(e.hasProp(e.content,"listeners")?e.content.listeners:{}),{onCloseToast:e.closeToast}),null,16,["toast-id","onCloseToast"]))],10,xh),e.closeButton?(de(),Ge(r,{key:1,component:e.closeButton,"class-names":e.closeButtonClassName,"show-on-hover":e.showCloseButtonOnHover,"aria-label":e.accessibility.closeButtonLabel,onClick:jf(e.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Ds("v-if",!0),e.timeout?(de(),Ge(s,{key:2,"is-running":e.isRunning,"hide-progress-bar":e.hideProgressBar,timeout:e.timeout,onCloseToast:e.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Ds("v-if",!0)],38)}mc.render=Uh;var Fh=mc,vc=nt({name:"VtTransition",props:ot.TRANSITION,emits:["leave"],methods:{hasProp:Ye,leave(e){e instanceof HTMLElement&&(e.style.left=e.offsetLeft+"px",e.style.top=e.offsetTop+"px",e.style.width=getComputedStyle(e).width,e.style.position="absolute")}}});function Bh(e,t){return de(),Ge(Mf,{tag:"div","enter-active-class":e.transition.enter?e.transition.enter:`${e.transition}-enter-active`,"move-class":e.transition.move?e.transition.move:`${e.transition}-move`,"leave-active-class":e.transition.leave?e.transition.leave:`${e.transition}-leave-active`,onLeave:e.leave},{default:In(()=>[Ku(e.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}vc.render=Bh;var $h=vc,_c=nt({name:"VueToastification",devtools:{hide:!0},components:{Toast:Fh,VtTransition:$h},props:Object.assign({},ot.CORE_TOAST,ot.CONTAINER,ot.TRANSITION),data(){return{count:0,positions:Object.values(Ur),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const e=this.eventBus;e.on(Pe.ADD,this.addToast),e.on(Pe.CLEAR,this.clearToasts),e.on(Pe.DISMISS,this.dismissToast),e.on(Pe.UPDATE,this.updateToast),e.on(Pe.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(e){Lr(e)&&(e=await e()),rh(this.$el),e.appendChild(this.$el)},setToast(e){Bt(e.id)||(this.toasts[e.id]=e)},addToast(e){e.content=sh(e.content);const t=Object.assign({},this.defaults,e.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[e.type],e),n=this.defaults.filterBeforeCreate(t,this.toastArray);n&&this.setToast(n)},dismissToast(e){const t=this.toasts[e];!Bt(t)&&!Bt(t.onClose)&&t.onClose(),delete this.toasts[e]},clearToasts(){Object.keys(this.toasts).forEach(e=>{this.dismissToast(e)})},getPositionToasts(e){const t=this.filteredToasts.filter(n=>n.position===e).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?t.reverse():t},updateDefaults(e){Bt(e.container)||this.setup(e.container),this.defaults=Object.assign({},this.defaults,e)},updateToast({id:e,options:t,create:n}){this.toasts[e]?(t.timeout&&t.timeout===this.toasts[e].timeout&&t.timeout++,this.setToast(Object.assign({},this.toasts[e],t))):n&&this.addToast(Object.assign({},{id:e},t))},getClasses(e){return[`${$e}__container`,e].concat(this.defaults.containerClassName)}}});function Hh(e,t){const n=Cn("Toast"),r=Cn("VtTransition");return de(),Be("div",null,[(de(!0),Be(ye,null,jo(e.positions,s=>(de(),Be("div",{key:s},[_e(r,{transition:e.defaults.transition,class:ft(e.getClasses(s))},{default:In(()=>[(de(!0),Be(ye,null,jo(e.getPositionToasts(s),i=>(de(),Ge(n,wr({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}_c.render=Hh;var Vh=_c,yc=(e={},t=!0)=>{const n=e.eventBus=e.eventBus||new si;t&&Vs(()=>{const i=Kf(Vh,Za({},e)),o=i.mount(document.createElement("div")),a=e.onMounted;if(Bt(a)||a(o,i),e.shareAppContext){const c=e.shareAppContext;c===!0?console.warn(`[${$e}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const r=(i,o)=>{const a=Object.assign({},{id:nh(),type:Oe.DEFAULT},o,{content:i});return n.emit(Pe.ADD,a),a.id};r.clear=()=>n.emit(Pe.CLEAR,void 0),r.updateDefaults=i=>{n.emit(Pe.UPDATE_DEFAULTS,i)},r.dismiss=i=>{n.emit(Pe.DISMISS,i)};function s(i,{content:o,options:a},c=!1){const l=Object.assign({},a,{content:o});n.emit(Pe.UPDATE,{id:i,options:l,create:c})}return r.update=s,r.success=(i,o)=>r(i,Object.assign({},o,{type:Oe.SUCCESS})),r.info=(i,o)=>r(i,Object.assign({},o,{type:Oe.INFO})),r.error=(i,o)=>r(i,Object.assign({},o,{type:Oe.ERROR})),r.warning=(i,o)=>r(i,Object.assign({},o,{type:Oe.WARNING})),r},jh=()=>{const e=()=>console.warn(`[${$e}] This plugin does not support SSR!`);return new Proxy(e,{get(){return e}})};function oi(e){return ih()?oh(e)?yc({eventBus:e},!1):yc(e,!0):jh()}var bc=Symbol("VueToastification"),Ec=new si,zh=(e,t)=>{(t==null?void 0:t.shareAppContext)===!0&&(t.shareAppContext=e);const n=oi(Za({eventBus:Ec},t));e.provide(bc,n)},Qm=e=>{if(e)return oi(e);const t=Us()?Ue(bc,void 0):void 0;return t||oi(Ec)},Zm=zh;/**
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
 */const Wh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Kh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},qh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[d],n[h],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Wh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Kh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const w=l<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Gh=function(e){try{return qh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */class Jh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function be(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Xh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Qh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zh(){const e=be();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}/**
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
 */const ep="FirebaseError";class ln extends Error{constructor(t,n,r){super(n);this.code=t,this.customData=r,this.name=ep,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?tp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,r)}}function tp(e,t){return e.replace(np,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const np=/\{\$([^}]+)}/g;function rp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Br(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ic(i)&&Ic(o)){if(!Br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ic(e){return e!==null&&typeof e=="object"}/**
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
 */function $n(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function sp(e,t){const n=new ip(e,t);return n.subscribe.bind(n)}class ip{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");op(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=ai),s.error===void 0&&(s.error=ai),s.complete===void 0&&(s.complete=ai);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function op(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ai(){}/**
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
 */function $r(e){return e&&e._delegate?e._delegate:e}/*! *****************************************************************************
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
***************************************************************************** */function ci(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function ap(e,t,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(u){try{l(r.next(u))}catch(d){o(d)}}function c(u){try{l(r.throw(u))}catch(d){o(d)}}function l(u){u.done?i(u.value):s(u.value).then(a,c)}l((r=r.apply(e,t||[])).next())})}function cp(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=l[0]&2?s.return:l[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,l[1])).done)return i;switch(s=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,s=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(u){l=[6,u],s=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function li(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Hr(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),s,i=[],o;try{for(;(t===void 0||t-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i}function Tc(e,t,n){if(n||arguments.length===2)for(var r=0,s=t.length,i;r<s;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Hn=function(){function e(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},e.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},e.prototype.setServiceProps=function(t){return this.serviceProps=t,this},e.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},e}();/**
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
 */var $t="[DEFAULT]";/**
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
 */var lp=function(){function e(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(t){var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var r=new Jh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise},e.prototype.getImmediate=function(t){var n,r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error("Service "+this.name+" is not available")}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(t){var n,r;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,!!this.shouldAutoInitialize()){if(fp(t))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}try{for(var s=li(this.instancesDeferred.entries()),i=s.next();!i.done;i=s.next()){var o=Hr(i.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:l});c.resolve(u)}catch{}}}catch(d){n={error:d}}finally{try{i&&!i.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},e.prototype.clearInstance=function(t){t===void 0&&(t=$t),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},e.prototype.delete=function(){return ap(this,void 0,void 0,function(){var t;return cp(this,function(n){switch(n.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Tc(Tc([],Hr(t.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Hr(t.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},e.prototype.isComponentSet=function(){return this.component!=null},e.prototype.isInitialized=function(t){return t===void 0&&(t=$t),this.instances.has(t)},e.prototype.getOptions=function(t){return t===void 0&&(t=$t),this.instancesOptions.get(t)||{}},e.prototype.initialize=function(t){var n,r;t===void 0&&(t={});var s=t.options,i=s===void 0?{}:s,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=li(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=Hr(l.value,2),d=u[0],h=u[1],m=this.normalizeInstanceIdentifier(d);o===m&&h.resolve(a)}}catch(w){n={error:w}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a},e.prototype.onInit=function(t,n){var r,s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);var o=this.instances.get(s);return o&&t(o,s),function(){i.delete(t)}},e.prototype.invokeOnInitCallbacks=function(t,n){var r,s,i=this.onInitCallbacks.get(n);if(!!i)try{for(var o=li(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(t,n)}catch{}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}},e.prototype.getOrInitializeService=function(t){var n=t.instanceIdentifier,r=t.options,s=r===void 0?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:up(n),options:s}),this.instances.set(n,i),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch{}return i||null},e.prototype.normalizeInstanceIdentifier=function(t){return t===void 0&&(t=$t),this.component?this.component.multipleInstances?t:$t:t},e.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},e}();function up(e){return e===$t?void 0:e}function fp(e){return e.instantiationMode==="EAGER"}/**
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
 */var dp=function(){function e(t){this.name=t,this.providers=new Map}return e.prototype.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},e.prototype.addOrOverwriteComponent=function(t){var n=this.getProvider(t.name);n.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},e.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new lp(t,this);return this.providers.set(t,n),n},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();/**
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
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const hp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},pp=se.INFO,gp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},mp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=gp[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wc{constructor(t){this.name=t,this._logLevel=pp,this._logHandler=mp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}/**
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
 */class vp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_p(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _p(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ui="@firebase/app",Cc="0.7.5";/**
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
 */const fi=new wc("@firebase/app"),yp="@firebase/app-compat",bp="@firebase/analytics-compat",Ep="@firebase/analytics",Ip="@firebase/app-check-compat",Tp="@firebase/app-check",wp="@firebase/auth",Cp="@firebase/auth-compat",Rp="@firebase/database",Sp="@firebase/database-compat",Ap="@firebase/functions",Op="@firebase/functions-compat",Pp="@firebase/installations",kp="@firebase/installations-compat",Np="@firebase/messaging",Mp="@firebase/messaging-compat",Dp="@firebase/performance",Lp="@firebase/performance-compat",xp="@firebase/remote-config",Up="@firebase/remote-config-compat",Fp="@firebase/storage",Bp="@firebase/storage-compat",$p="@firebase/firestore",Hp="@firebase/firestore-compat",Vp="firebase",jp="9.2.0";/**
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
 */const Rc="[DEFAULT]",zp={[ui]:"fire-core",[yp]:"fire-core-compat",[Ep]:"fire-analytics",[bp]:"fire-analytics-compat",[Tp]:"fire-app-check",[Ip]:"fire-app-check-compat",[wp]:"fire-auth",[Cp]:"fire-auth-compat",[Rp]:"fire-rtdb",[Sp]:"fire-rtdb-compat",[Ap]:"fire-fn",[Op]:"fire-fn-compat",[Pp]:"fire-iid",[kp]:"fire-iid-compat",[Np]:"fire-fcm",[Mp]:"fire-fcm-compat",[Dp]:"fire-perf",[Lp]:"fire-perf-compat",[xp]:"fire-rc",[Up]:"fire-rc-compat",[Fp]:"fire-gcs",[Bp]:"fire-gcs-compat",[$p]:"fire-fst",[Hp]:"fire-fst-compat","fire-js":"fire-js",[Vp]:"fire-js-all"};/**
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
 */const Vr=new Map,di=new Map;function Wp(e,t){try{e.container.addComponent(t)}catch(n){fi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function jr(e){const t=e.name;if(di.has(t))return fi.debug(`There were multiple attempts to register component ${t}.`),!1;di.set(t,e);for(const n of Vr.values())Wp(n,e);return!0}function Sc(e,t){return e.container.getProvider(t)}/**
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
 */const Kp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},zr=new Bn("app","Firebase",Kp);/**
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
 */class qp{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
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
 */const Wr=jp;function ev(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Rc,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw zr.create("bad-app-name",{appName:String(r)});const s=Vr.get(r);if(s){if(Br(e,s.options)&&Br(n,s.config))return s;throw zr.create("duplicate-app",{appName:r})}const i=new dp(r);for(const a of di.values())i.addComponent(a);const o=new qp(e,n,i);return Vr.set(r,o),o}function Gp(e=Rc){const t=Vr.get(e);if(!t)throw zr.create("no-app",{appName:e});return t}function un(e,t,n){var r;let s=(r=zp[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),fi.warn(a.join(" "));return}jr(new Hn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */function Jp(e){jr(new Hn("platform-logger",t=>new vp(t),"PRIVATE")),un(ui,Cc,e),un(ui,Cc,"esm2017"),un("fire-js","")}Jp("");function Ac(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yp=Ac,Oc=new Bn("auth","Firebase",Ac());/**
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
 */const Pc=new wc("@firebase/auth");function Kr(e,...t){Pc.logLevel<=se.ERROR&&Pc.error(`Auth (${Wr}): ${e}`,...t)}/**
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
 */function at(e,...t){throw hi(e,...t)}function Xe(e,...t){return hi(e,...t)}function Xp(e,t,n){const r=Object.assign(Object.assign({},Yp()),{[t]:n});return new Bn("auth","Firebase",r).create(t,{appName:e.name})}function hi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Oc.create(e,...t)}function B(e,t,...n){if(!e)throw hi(t,...n)}function ct(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Kr(t),new Error(t)}function lt(e,t){e||ct(t)}/**
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
 */const kc=new Map;function ut(e){lt(e instanceof Function,"Expected a class definition");let t=kc.get(e);return t?(lt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,kc.set(e,t),t)}/**
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
 */function Qp(e,t){const n=Sc(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Br(i,t!=null?t:{}))return s;at(s,"already-initialized")}return n.initialize({options:t})}function Zp(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ut);(t==null?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function pi(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function eg(){return Nc()==="http:"||Nc()==="https:"}function Nc(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function tg(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eg()||Xh()||"connection"in navigator)?navigator.onLine:!0}function ng(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Vn{constructor(t,n){this.shortDelay=t,this.longDelay=n,lt(n>t,"Short delay should be less than long delay!"),this.isMobile=Yh()||Qh()}get(){return tg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gi(e,t){lt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class mi{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const sg=new Vn(3e4,6e4);function ig(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function qr(e,t,n,r,s={}){return Mc(e,s,()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=$n(Object.assign({key:e.config.apiKey},o)).slice(1),c=new(mi.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),mi.fetch()(Dc(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Mc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},rg),t);try{const s=new ag(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vi(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vi(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vi(e,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Xp(e,u,l);at(e,u)}}catch(s){if(s instanceof ln)throw s;at(e,"network-request-failed")}}async function og(e,t,n,r,s={}){const i=await qr(e,t,n,r,s);return"mfaPendingCredential"in i&&at(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Dc(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?gi(e.config,s):`${e.config.apiScheme}://${s}`}class ag{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"timeout")),sg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xe(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function cg(e,t){return qr(e,"POST","/v1/accounts:delete",t)}async function lg(e,t){return qr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function jn(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ug(e,t=!1){const n=$r(e),r=await n.getIdToken(t),s=yi(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:jn(_i(s.auth_time)),issuedAtTime:jn(_i(s.iat)),expirationTime:jn(_i(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _i(e){return Number(e)*1e3}function yi(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Kr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gh(n);return s?JSON.parse(s):(Kr("Failed to decode base64 JWT payload"),null)}catch(s){return Kr("Caught error parsing JWT payload as JSON",s),null}}function fg(e){const t=yi(e);return B(t,"internal-error"),B(typeof t.exp!="undefined","internal-error"),B(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function zn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ln&&dg(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function dg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class hg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await zn(e,lg(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=((t=i.providerUserInfo)===null||t===void 0?void 0:t.length)?mg(i.providerUserInfo):[],a=gg(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Lc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function pg(e){const t=$r(e);await Gr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function gg(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function mg(e){return e.map(t=>{var{providerId:n}=t,r=ci(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vg(e,t){const n=await Mc(e,{},()=>{const r=$n({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Dc(e,s,"/v1/token",`key=${i}`);return mi.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken!="undefined","internal-error"),B(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):fg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return B(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vg(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Wn;return r&&(B(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function bt(e,t){B(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class Ht{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=ci(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new hg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Lc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await zn(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ug(this,t)}reload(){return pg(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Ht(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Gr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await zn(this,cg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:j,isAnonymous:te,providerData:ae,stsTokenManager:z}=n;B(V&&z,t,"internal-error");const ce=Wn.fromJSON(this.name,z);B(typeof V=="string",t,"internal-error"),bt(d,t.name),bt(h,t.name),B(typeof j=="boolean",t,"internal-error"),B(typeof te=="boolean",t,"internal-error"),bt(m,t.name),bt(w,t.name),bt(L,t.name),bt(S,t.name),bt(A,t.name),bt(x,t.name);const J=new Ht({uid:V,auth:t,email:h,emailVerified:j,displayName:d,isAnonymous:te,photoURL:w,phoneNumber:m,tenantId:L,stsTokenManager:ce,createdAt:A,lastLoginAt:x});return ae&&Array.isArray(ae)&&(J.providerData=ae.map(he=>Object.assign({},he))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(t,n,r=!1){const s=new Wn;s.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Gr(i),i}}/**
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
 */class xc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}xc.type="NONE";const Uc=xc;/**
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
 */function Jr(e,t,n){return`firebase:${e}:${t}:${n}`}class fn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ht._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new fn(ut(Uc),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ut(Uc);const o=Jr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Ht._fromJSON(t,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new fn(i,t,r))}}/**
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
 */function Fc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Hc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Bc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(jc(t))return"Blackberry";if(zc(t))return"Webos";if(bi(t))return"Safari";if((t.includes("chrome/")||$c(t))&&!t.includes("edge/"))return"Chrome";if(Vc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bc(e=be()){return/firefox\//i.test(e)}function bi(e=be()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $c(e=be()){return/crios\//i.test(e)}function Hc(e=be()){return/iemobile/i.test(e)}function Vc(e=be()){return/android/i.test(e)}function jc(e=be()){return/blackberry/i.test(e)}function zc(e=be()){return/webos/i.test(e)}function Yr(e=be()){return/iphone|ipad|ipod/i.test(e)}function _g(e=be()){var t;return Yr(e)&&!!((t=window.navigator)===null||t===void 0?void 0:t.standalone)}function yg(){return Zh()&&document.documentMode===10}function Wc(e=be()){return Yr(e)||Vc(e)||zc(e)||jc(e)||/windows phone/i.test(e)||Hc(e)}function bg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Kc(e,t=[]){let n;switch(e){case"Browser":n=Fc(be());break;case"Worker":n=`${Fc(be())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wr}/${r}`}/**
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
 */class Eg{constructor(t,n){this.app=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gc(this),this.idTokenSubscription=new Gc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await fn.create(this,t),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let r=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Gr(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ng()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?$r(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Bn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ut(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,r,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Kc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function qc(e){return $r(e)}class Gc{constructor(t){this.auth=t,this.observer=null,this.addObserver=sp(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Jc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(t){return ct("not implemented")}_linkToIdToken(t,n){return ct("not implemented")}_getReauthenticationResolver(t){return ct("not implemented")}}/**
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
 */async function dn(e,t){return og(e,"POST","/v1/accounts:signInWithIdp",ig(e,t))}/**
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
 */const Ig="http://localhost";class Vt extends Jc{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new Vt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):at("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=ci(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return dn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,dn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,dn(t,n)}buildRequest(){const t={requestUri:Ig,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=$n(n)}return t}}/**
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
 */class Yc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kn extends Yc{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends Kn{constructor(){super("facebook.com")}static credential(t){return Vt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class It extends Kn{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return Vt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class Tt extends Kn{constructor(){super("github.com")}static credential(t){return Vt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tt.credential(t.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class wt extends Kn{constructor(){super("twitter.com")}static credential(t,n){return Vt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return wt.credentialFromTaggedObject(t)}static credentialFromError(t){return wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
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
 */class hn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Ht._fromIdTokenResponse(t,r,s),o=Xc(r);return new hn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Xc(r);return new hn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Xc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Xr extends ln{constructor(t,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Xr(t,n,r,s)}}function Qc(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xr._fromErrorAndOperation(e,i,t,r):i})}async function Tg(e,t,n=!1){const r=await zn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return hn._forOperation(e,"link",r)}/**
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
 */async function wg(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await zn(e,Qc(r,s,t,e),n);B(i.idToken,r,"internal-error");const o=yi(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(e.uid===a,r,"user-mismatch"),hn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&at(r,"user-mismatch"),i}}/**
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
 */async function Cg(e,t,n=!1){const r="signIn",s=await Qc(e,r,t),i=await hn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}const Qr="__sak";/**
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
 */class Zc{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qr,"1"),this.storage.removeItem(Qr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Rg(){const e=be();return bi(e)||Yr(e)}const Sg=1e3,Ag=10;class el extends Zc{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rg()&&bg(),this.fallbackToPolling=Wc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yg()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Ag):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Sg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}el.type="LOCAL";const Og=el;/**
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
 */class tl extends Zc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}tl.type="SESSION";const nl=tl;/**
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
 */function Pg(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Zr(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Pg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zr.receivers=[];/**
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
 */function Ei(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class kg{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ei("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qe(){return window}function Ng(e){Qe().location.href=e}/**
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
 */function rl(){return typeof Qe().WorkerGlobalScope!="undefined"&&typeof Qe().importScripts=="function"}async function Mg(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dg(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Lg(){return rl()?self:null}/**
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
 */const sl="firebaseLocalStorageDb",xg=1,es="firebaseLocalStorage",il="fbase_key";class qn{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ts(e,t){return e.transaction([es],t?"readwrite":"readonly").objectStore(es)}function Ug(){const e=indexedDB.deleteDatabase(sl);return new qn(e).toPromise()}function Ii(){const e=indexedDB.open(sl,xg);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(es,{keyPath:il})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(es)?t(r):(r.close(),await Ug(),t(await Ii()))})})}async function ol(e,t,n){const r=ts(e,!0).put({[il]:t,value:n});return new qn(r).toPromise()}async function Fg(e,t){const n=ts(e,!1).get(t),r=await new qn(n).toPromise();return r===void 0?null:r.value}function al(e,t){const n=ts(e,!0).delete(t);return new qn(n).toPromise()}const Bg=800,$g=3;class cl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ii(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>$g)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zr._getInstance(Lg()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Mg(),!this.activeServiceWorker)return;this.sender=new kg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Dg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ii();return await ol(t,Qr,"1"),await al(t,Qr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ol(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Fg(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>al(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=ts(s,!1).getAll();return new qn(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cl.type="LOCAL";const Hg=cl;/**
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
 */function Vg(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function jg(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=Xe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Vg().appendChild(r)})}function zg(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Vn(3e4,6e4);/**
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
 */function Wg(e,t){return t?ut(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Ti extends Jc{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return dn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return dn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return dn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Kg(e){return Cg(e.auth,new Ti(e),e.bypassAuthState)}function qg(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),wg(n,new Ti(e),e.bypassAuthState)}async function Gg(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),Tg(n,new Ti(e),e.bypassAuthState)}/**
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
 */class ll{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Kg;case"linkViaPopup":case"linkViaRedirect":return Gg;case"reauthViaPopup":case"reauthViaRedirect":return qg;default:at(this.auth,"internal-error")}}resolve(t){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jg=new Vn(2e3,1e4);class pn extends ll{constructor(t,n,r,s,i){super(t,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const t=Ei();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,Jg.get())};t()}}pn.currentPopupAction=null;/**
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
 */const Yg="pendingRedirect",wi=new Map;class Xg extends ll{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let t=wi.get(this.auth._key());if(!t){try{const r=await Qg(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}wi.set(this.auth._key(),t)}return this.bypassAuthState||wi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qg(e,t){const n=em(t),r=Zg(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Zg(e){return ut(e._redirectPersistence)}function em(e){return Jr(Yg,e.config.apiKey,e.name)}async function tm(e,t,n=!1){const r=qc(e),s=Wg(r,t),o=await new Xg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const nm=10*60*1e3;class rm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!sm(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!fl(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=nm&&this.cachedEventUids.clear(),this.cachedEventUids.has(ul(t))}saveEventToCache(t){this.cachedEventUids.add(ul(t)),this.lastProcessedEventTime=Date.now()}}function ul(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function fl({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function sm(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fl(e);default:return!1}}/**
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
 */async function im(e,t={}){return qr(e,"GET","/v1/projects",t)}/**
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
 */const om=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,am=/^https?/;async function cm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await im(e);for(const n of t)try{if(lm(n))return}catch{}at(e,"unauthorized-domain")}function lm(e){const t=pi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!am.test(n))return!1;if(om.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const um=new Vn(3e4,6e4);function dl(){const e=Qe().___jsl;if(e==null?void 0:e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function fm(e){return new Promise((t,n)=>{var r,s,i;function o(){dl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dl(),n(Xe(e,"network-request-failed"))},timeout:um.get()})}if((s=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)t(gapi.iframes.getContext());else if((i=Qe().gapi)===null||i===void 0?void 0:i.load)o();else{const a=zg("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(Xe(e,"network-request-failed"))},jg(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(t=>{throw ns=null,t})}let ns=null;function dm(e){return ns=ns||fm(e),ns}/**
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
 */const hm=new Vn(5e3,15e3),pm="__/auth/iframe",gm="emulator/auth/iframe",mm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true"},vm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _m(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?gi(t,gm):`https://${e.config.authDomain}/${pm}`,r={apiKey:t.apiKey,appName:e.name,v:Wr},s=vm.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$n(r).slice(1)}`}async function ym(e){const t=await dm(e),n=Qe().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:_m(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(e,"network-request-failed"),a=Qe().setTimeout(()=>{i(o)},hm.get());function c(){Qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const bm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Em=500,Im=600,Tm="_blank",wm="http://localhost";class hl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cm(e,t,n,r=Em,s=Im){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=be().toLowerCase();n&&(a=$c(l)?Tm:n),Bc(l)&&(t=t||wm,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,w])=>`${h}${m}=${w},`,"");if(_g(l)&&a!=="_self")return Rm(t||"",a),new hl(null);const d=window.open(t||"",a,u);B(d,e,"popup-blocked");try{d.focus()}catch{}return new hl(d)}function Rm(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Sm="__/auth/handler",Am="emulator/auth/handler";function pl(e,t,n,r,s,i){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Wr,eventId:s};if(t instanceof Yc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",rp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(t instanceof Kn){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Om(e)}?${$n(a).slice(1)}`}function Om({config:e}){return e.emulator?gi(e,Am):`https://${e.authDomain}/${Sm}`}/**
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
 */const Ci="webStorageSupport";class Pm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nl,this._completeRedirectFn=tm}async _openPopup(t,n,r,s){var i;lt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=pl(t,n,r,pi(),s);return Cm(t,o,Ei())}async _openRedirect(t,n,r,s){return await this._originValidation(t),Ng(pl(t,n,r,pi(),s)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r}async initAndGetManager(t){const n=await ym(t),r=new rm(t);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ci,{type:Ci},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ci];o!==void 0&&n(!!o),at(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cm(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wc()||bi()||Yr()}}const km=Pm;var gl="@firebase/auth",ml="0.19.0";/**
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
 */class Nm{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var s;t(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Mm(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Dm(e){jr(new Hn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{B(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),B(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kc(e)},c=new Eg(o,a);return Zp(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),jr(new Hn("auth-internal",t=>{const n=qc(t.getProvider("auth").getImmediate());return(r=>new Nm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(gl,ml,Mm(e)),un(gl,ml,"esm2017")}/**
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
 */function tv(e=Gp()){const t=Sc(e,"auth");return t.isInitialized()?t.getImmediate():Qp(e,{popupRedirectResolver:km,persistence:[Hg,Og,nl]})}Dm("Browser");function nv(e,t){return e.then(function(n){return[null,n]}).catch(function(n){return t&&Object.assign(n,t),[n,void 0]})}var Lm="firebase",xm="9.2.0";/**
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
 */un(Lm,xm,"app");var Um=!1;/*!
  * pinia v2.0.0
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Fm=Symbol();var vl;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(vl||(vl={}));function rv(){const e=kl(!0),t=e.run(()=>ao({}));let n=[],r=[];const s=ys({install(i){s._a=i,i.provide(Fm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Um?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}export{Ku as A,jf as B,Tr as C,ev as D,tv as E,ye as F,Qm as G,Jm as H,Gm as I,Kf as J,Zm as K,rv as L,jm as M,Wm as N,Bm as O,$m as P,ou as Q,qm as R,Km as S,fa as T,nv as U,we as V,_e as a,zm as b,Be as c,Nt as d,nt as e,Ym as f,ao as g,Iu as h,Ke as i,_o as j,jo as k,ft as l,Xt as m,Vs as n,de as o,Ge as p,Ns as q,Cn as r,mn as s,ki as t,Xm as u,Hm as v,Or as w,Vm as x,In as y,Ds as z};
