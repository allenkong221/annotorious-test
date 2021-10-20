function ts(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ml=ts(pl);function Ci(e){return!!e||e===""}function gn(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ge(r)?_l(r):gn(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(ge(e))return e;if(de(e))return e}}const gl=/;(?![^(]*\))/g,vl=/:(.+)/;function _l(e){const t={};return e.split(gl).forEach(n=>{if(n){const r=n.split(vl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ft(e){let t="";if(ge(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=ft(e[n]);r&&(t+=r+" ")}else if(de(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ri=e=>e==null?"":B(e)||de(e)&&(e.toString===ki||!H(e.toString))?JSON.stringify(e,Si,2):String(e),Si=(e,t)=>t&&t.__v_isRef?Si(e,t.value):Wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Oi(t)?{[`Set(${t.size})`]:[...t.values()]}:de(t)&&!B(t)&&!Ni(t)?String(t):t,Z={},zt=[],xe=()=>{},yl=()=>!1,bl=/^on[^a-z]/,Gn=e=>bl.test(e),ns=e=>e.startsWith("onUpdate:"),me=Object.assign,Ai=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},El=Object.prototype.hasOwnProperty,G=(e,t)=>El.call(e,t),B=Array.isArray,Wt=e=>Jn(e)==="[object Map]",Oi=e=>Jn(e)==="[object Set]",H=e=>typeof e=="function",ge=e=>typeof e=="string",rs=e=>typeof e=="symbol",de=e=>e!==null&&typeof e=="object",Pi=e=>de(e)&&H(e.then)&&H(e.catch),ki=Object.prototype.toString,Jn=e=>ki.call(e),Il=e=>Jn(e).slice(8,-1),Ni=e=>Jn(e)==="[object Object]",ss=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yn=ts(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Tl=/-(\w)/g,ze=Xn(e=>e.replace(Tl,(t,n)=>n?n.toUpperCase():"")),wl=/\B([A-Z])/g,Kt=Xn(e=>e.replace(wl,"-$1").toLowerCase()),Qn=Xn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zn=Xn(e=>e?`on${Qn(e)}`:""),vn=(e,t)=>!Object.is(e,t),er=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},tr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},nr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Mi;const Cl=()=>Mi||(Mi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let We;const rr=[];class Li{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&We&&(this.parent=We,this.index=(We.scopes||(We.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(rr.push(this),We=this)}off(){this.active&&(rr.pop(),We=rr[rr.length-1])}stop(t){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Rl(e){return new Li(e)}function Sl(e,t){t=t||We,t&&t.active&&t.effects.push(e)}function Ng(){return We}function Mg(e){We&&We.cleanups.push(e)}const is=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Di=e=>(e.w&dt)>0,xi=e=>(e.n&dt)>0,Al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dt},Ol=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Di(s)&&!xi(s)?s.delete(e):t[n++]=s,s.w&=~dt,s.n&=~dt}t.length=n}},os=new WeakMap;let _n=0,dt=1;const as=30,yn=[];let Ct;const Rt=Symbol(""),cs=Symbol("");class ls{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],Sl(this,r)}run(){if(!this.active)return this.fn();if(!yn.includes(this))try{return yn.push(Ct=this),Pl(),dt=1<<++_n,_n<=as?Al(this):Ui(this),this.fn()}finally{_n<=as&&Ol(this),dt=1<<--_n,St(),yn.pop();const t=yn.length;Ct=t>0?yn[t-1]:void 0}}stop(){this.active&&(Ui(this),this.onStop&&this.onStop(),this.active=!1)}}function Ui(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qt=!0;const us=[];function Gt(){us.push(qt),qt=!1}function Pl(){us.push(qt),qt=!0}function St(){const e=us.pop();qt=e===void 0?!0:e}function Re(e,t,n){if(!Fi())return;let r=os.get(e);r||os.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=is()),Bi(s)}function Fi(){return qt&&Ct!==void 0}function Bi(e,t){let n=!1;_n<=as?xi(e)||(e.n|=dt,n=!Di(e)):n=!e.has(Ct),n&&(e.add(Ct),Ct.deps.push(e))}function tt(e,t,n,r,s,i){const o=os.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&B(e))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":B(e)?ss(n)&&a.push(o.get("length")):(a.push(o.get(Rt)),Wt(e)&&a.push(o.get(cs)));break;case"delete":B(e)||(a.push(o.get(Rt)),Wt(e)&&a.push(o.get(cs)));break;case"set":Wt(e)&&a.push(o.get(Rt));break}if(a.length===1)a[0]&&fs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);fs(is(c))}}function fs(e,t){for(const n of B(e)?e:[...e])(n!==Ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const kl=ts("__proto__,__v_isRef,__isVue"),$i=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(rs)),Nl=ds(),Ml=ds(!1,!0),Ll=ds(!0),Hi=Dl();function Dl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Re(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Gt();const r=q(this)[t].apply(this,n);return St(),r}}),e}function ds(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_raw"&&i===(e?t?Xl:Yi:t?Ji:Gi).get(r))return r;const o=B(r);if(!e&&o&&G(Hi,s))return Reflect.get(Hi,s,i);const a=Reflect.get(r,s,i);return(rs(s)?$i.has(s):kl(s))||(e||Re(r,"get",s),t)?a:we(a)?!o||!ss(s)?a.value:a:de(a)?e?Xi(a):bn(a):a}}const xl=Vi(),Ul=Vi(!0);function Vi(e=!1){return function(n,r,s,i){let o=n[r];if(!e&&(s=q(s),o=q(o),!B(n)&&we(o)&&!we(s)))return o.value=s,!0;const a=B(n)&&ss(r)?Number(r)<n.length:G(n,r),c=Reflect.set(n,r,s,i);return n===q(i)&&(a?vn(s,o)&&tt(n,"set",r,s):tt(n,"add",r,s)),c}}function Fl(e,t){const n=G(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&tt(e,"delete",t,void 0),r}function Bl(e,t){const n=Reflect.has(e,t);return(!rs(t)||!$i.has(t))&&Re(e,"has",t),n}function $l(e){return Re(e,"iterate",B(e)?"length":Rt),Reflect.ownKeys(e)}const ji={get:Nl,set:xl,deleteProperty:Fl,has:Bl,ownKeys:$l},Hl={get:Ll,set(e,t){return!0},deleteProperty(e,t){return!0}},Vl=me({},ji,{get:Ml,set:Ul}),hs=e=>e,sr=e=>Reflect.getPrototypeOf(e);function ir(e,t,n=!1,r=!1){e=e.__v_raw;const s=q(e),i=q(t);t!==i&&!n&&Re(s,"get",t),!n&&Re(s,"get",i);const{has:o}=sr(s),a=r?hs:n?vs:En;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function or(e,t=!1){const n=this.__v_raw,r=q(n),s=q(e);return e!==s&&!t&&Re(r,"has",e),!t&&Re(r,"has",s),e===s?n.has(e):n.has(e)||n.has(s)}function ar(e,t=!1){return e=e.__v_raw,!t&&Re(q(e),"iterate",Rt),Reflect.get(e,"size",e)}function zi(e){e=q(e);const t=q(this);return sr(t).has.call(t,e)||(t.add(e),tt(t,"add",e,e)),this}function Wi(e,t){t=q(t);const n=q(this),{has:r,get:s}=sr(n);let i=r.call(n,e);i||(e=q(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?vn(t,o)&&tt(n,"set",e,t):tt(n,"add",e,t),this}function Ki(e){const t=q(this),{has:n,get:r}=sr(t);let s=n.call(t,e);s||(e=q(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&tt(t,"delete",e,void 0),i}function qi(){const e=q(this),t=e.size!==0,n=e.clear();return t&&tt(e,"clear",void 0,void 0),n}function cr(e,t){return function(r,s){const i=this,o=i.__v_raw,a=q(o),c=t?hs:e?vs:En;return!e&&Re(a,"iterate",Rt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function lr(e,t,n){return function(...r){const s=this.__v_raw,i=q(s),o=Wt(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?hs:t?vs:En;return!t&&Re(i,"iterate",c?cs:Rt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function ht(e){return function(...t){return e==="delete"?!1:this}}function jl(){const e={get(i){return ir(this,i)},get size(){return ar(this)},has:or,add:zi,set:Wi,delete:Ki,clear:qi,forEach:cr(!1,!1)},t={get(i){return ir(this,i,!1,!0)},get size(){return ar(this)},has:or,add:zi,set:Wi,delete:Ki,clear:qi,forEach:cr(!1,!0)},n={get(i){return ir(this,i,!0)},get size(){return ar(this,!0)},has(i){return or.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:cr(!0,!1)},r={get(i){return ir(this,i,!0,!0)},get size(){return ar(this,!0)},has(i){return or.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=lr(i,!1,!1),n[i]=lr(i,!0,!1),t[i]=lr(i,!1,!0),r[i]=lr(i,!0,!0)}),[e,n,t,r]}const[zl,Wl,Kl,ql]=jl();function ps(e,t){const n=t?e?ql:Kl:e?Wl:zl;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Gl={get:ps(!1,!1)},Jl={get:ps(!1,!0)},Yl={get:ps(!0,!1)},Gi=new WeakMap,Ji=new WeakMap,Yi=new WeakMap,Xl=new WeakMap;function Ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ql(Il(e))}function bn(e){return e&&e.__v_isReadonly?e:ms(e,!1,ji,Gl,Gi)}function eu(e){return ms(e,!1,Vl,Jl,Ji)}function Xi(e){return ms(e,!0,Hl,Yl,Yi)}function ms(e,t,n,r,s){if(!de(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Zl(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Jt(e){return Qi(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Qi(e){return!!(e&&e.__v_isReadonly)}function Zi(e){return Jt(e)||Qi(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function gs(e){return tr(e,"__v_skip",!0),e}const En=e=>de(e)?bn(e):e,vs=e=>de(e)?Xi(e):e;function eo(e){Fi()&&(e=q(e),e.dep||(e.dep=is()),Bi(e.dep))}function to(e,t){e=q(e),e.dep&&fs(e.dep)}function we(e){return Boolean(e&&e.__v_isRef===!0)}function no(e){return ro(e,!1)}function tu(e){return ro(e,!0)}function ro(e,t){return we(e)?e:new nu(e,t)}class nu{constructor(t,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:En(t)}get value(){return eo(this),this._value}set value(t){t=this._shallow?t:q(t),vn(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:En(t),to(this))}}function Yt(e){return we(e)?e.value:e}const ru={get:(e,t,n)=>Yt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function so(e){return Jt(e)?e:new Proxy(e,ru)}class su{constructor(t,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new ls(t,()=>{this._dirty||(this._dirty=!0,to(this))}),this.__v_isReadonly=r}get value(){const t=q(this);return eo(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ke(e,t){let n,r;const s=H(e);return s?(n=e,r=xe):(n=e.get,r=e.set),new su(n,r,s||!r)}Promise.resolve();function iu(e,t,...n){const r=e.vnode.props||Z;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||Z;h?s=n.map(g=>g.trim()):d&&(s=n.map(nr))}let a,c=r[a=Zn(t)]||r[a=Zn(ze(t))];!c&&i&&(c=r[a=Zn(Kt(t))]),c&&Le(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Le(l,e,6,s)}}function io(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!H(e)){const c=l=>{const u=io(l,t,!0);u&&(a=!0,me(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(r.set(e,null),null):(B(i)?i.forEach(c=>o[c]=null):me(o,i),r.set(e,o),o)}function _s(e,t){return!e||!Gn(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,Kt(t))||G(e,t))}let Se=null,ur=null;function fr(e){const t=Se;return Se=e,ur=e&&e.type.__scopeId||null,t}function Lg(e){ur=e}function Dg(){ur=null}function In(e,t=Se,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Do(-1);const i=fr(t),o=e(...s);return fr(i),r._d&&Do(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ys(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:g,ctx:w,inheritAttrs:D}=e;let S,A;const x=fr(e);try{if(n.shapeFlag&4){const j=s||r;S=Je(u.call(j,j,d,i,g,h,w)),A=c}else{const j=t;S=Je(j.length>1?j(i,{attrs:c,slots:a,emit:l}):j(i,null)),A=t.props?c:ou(c)}}catch(j){Rn.length=0,Cr(j,e,1),S=_e(Fe)}let V=S;if(A&&D!==!1){const j=Object.keys(A),{shapeFlag:te}=V;j.length&&te&(1|6)&&(o&&j.some(ns)&&(A=au(A,o)),V=Xt(V,A))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),S=V,fr(x),S}const ou=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gn(n))&&((t||(t={}))[n]=e[n]);return t},au=(e,t)=>{const n={};for(const r in e)(!ns(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function cu(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?oo(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!_s(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?oo(r,o,l):!0:!!o;return!1}function oo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!_s(n,i))return!0}return!1}function lu({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const uu=e=>e.__isSuspense;function fu(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):rf(e)}function dr(e,t){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[e]=t}}function Ue(e,t,n=!1){const r=ve||Se;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}function ao(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ho(()=>{e.isMounted=!0}),mo(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],du={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(e,{slots:t}){const n=Ls(),r=ao();let s;return()=>{const i=t.default&&Es(t.default(),!0);if(!i||!i.length)return;const o=q(e),{mode:a}=o,c=i[0];if(r.isLeaving)return bs(c);const l=uo(c);if(!l)return bs(c);const u=Tn(l,o,r,n);wn(l,u);const d=n.subTree,h=d&&uo(d);let g=!1;const{getTransitionKey:w}=l.type;if(w){const D=w();s===void 0?s=D:D!==s&&(s=D,g=!0)}if(h&&h.type!==Fe&&(!kt(l,h)||g)){const D=Tn(h,o,r,n);if(wn(h,D),a==="out-in")return r.isLeaving=!0,D.afterLeave=()=>{r.isLeaving=!1,n.update()},bs(c);a==="in-out"&&l.type!==Fe&&(D.delayLeave=(S,A,x)=>{const V=lo(r,h);V[String(h.key)]=h,S._leaveCb=()=>{A(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return c}}},co=du;function lo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Tn(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:D,onAppear:S,onAfterAppear:A,onAppearCancelled:x}=t,V=String(e.key),j=lo(n,e),te=(z,ce)=>{z&&Le(z,r,9,ce)},ae={mode:i,persisted:o,beforeEnter(z){let ce=a;if(!n.isMounted)if(s)ce=D||a;else return;z._leaveCb&&z._leaveCb(!0);const J=j[V];J&&kt(e,J)&&J.el._leaveCb&&J.el._leaveCb(),te(ce,[z])},enter(z){let ce=c,J=l,he=u;if(!n.isMounted)if(s)ce=S||c,J=A||l,he=x||u;else return;let pe=!1;const k=z._enterCb=le=>{pe||(pe=!0,le?te(he,[z]):te(J,[z]),ae.delayedLeave&&ae.delayedLeave(),z._enterCb=void 0)};ce?(ce(z,k),ce.length<=1&&k()):k()},leave(z,ce){const J=String(e.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return ce();te(d,[z]);let he=!1;const pe=z._leaveCb=k=>{he||(he=!0,ce(),k?te(w,[z]):te(g,[z]),z._leaveCb=void 0,j[J]===e&&delete j[J])};j[J]=e,h?(h(z,pe),h.length<=1&&pe()):pe()},clone(z){return Tn(z,t,n,r)}};return ae}function bs(e){if(hr(e))return e=Xt(e),e.children=null,e}function uo(e){return hr(e)?e.children?e.children[0]:void 0:e}function wn(e,t){e.shapeFlag&6&&e.component?wn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Es(e,t=!1){let n=[],r=0;for(let s=0;s<e.length;s++){const i=e[s];i.type===ye?(i.patchFlag&128&&r++,n=n.concat(Es(i.children,t))):(t||i.type!==Fe)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function nt(e){return H(e)?{setup:e,name:e.name}:e}const Is=e=>!!e.type.__asyncLoader,hr=e=>e.type.__isKeepAlive;function hu(e,t){fo(e,"a",t)}function pu(e,t){fo(e,"da",t)}function fo(e,t,n=ve){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}e()});if(pr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)hr(s.parent.vnode)&&mu(r,t,n,s),s=s.parent}}function mu(e,t,n,r){const s=pr(t,e,r,!0);go(()=>{Ai(r[t],s)},n)}function pr(e,t,n=ve,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Gt(),Qt(n);const a=Le(t,n,e,o);return Mt(),St(),a});return r?s.unshift(i):s.push(i),i}}const rt=e=>(t,n=ve)=>(!wr||e==="sp")&&pr(e,t,n),gu=rt("bm"),ho=rt("m"),vu=rt("bu"),po=rt("u"),mo=rt("bum"),go=rt("um"),_u=rt("sp"),yu=rt("rtg"),bu=rt("rtc");function Eu(e,t=ve){pr("ec",e,t)}let Ts=!0;function Iu(e){const t=yo(e),n=e.proxy,r=e.ctx;Ts=!1,t.beforeCreate&&vo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:w,activated:D,deactivated:S,beforeDestroy:A,beforeUnmount:x,destroyed:V,unmounted:j,render:te,renderTracked:ae,renderTriggered:z,errorCaptured:ce,serverPrefetch:J,expose:he,inheritAttrs:pe,components:k,directives:le,filters:Te}=t;if(l&&Tu(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Y=o[ne];H(Y)&&(r[ne]=Y.bind(n))}if(s){const ne=s.call(n,n);de(ne)&&(e.data=bn(ne))}if(Ts=!0,i)for(const ne in i){const Y=i[ne],ke=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):xe,Vt=!H(Y)&&H(Y.set)?Y.set.bind(n):xe,et=Ke({get:ke,set:Vt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>et.value,set:Ve=>et.value=Ve})}if(a)for(const ne in a)_o(a[ne],r,n,ne);if(c){const ne=H(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Y=>{dr(Y,ne[Y])})}u&&vo(u,e,"c");function ue(ne,Y){B(Y)?Y.forEach(ke=>ne(ke.bind(n))):Y&&ne(Y.bind(n))}if(ue(gu,d),ue(ho,h),ue(vu,g),ue(po,w),ue(hu,D),ue(pu,S),ue(Eu,ce),ue(bu,ae),ue(yu,z),ue(mo,x),ue(go,j),ue(_u,J),B(he))if(he.length){const ne=e.exposed||(e.exposed={});he.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>n[Y],set:ke=>n[Y]=ke})})}else e.exposed||(e.exposed={});te&&e.render===xe&&(e.render=te),pe!=null&&(e.inheritAttrs=pe),k&&(e.components=k),le&&(e.directives=le)}function Tu(e,t,n=xe,r=!1){B(e)&&(e=ws(e));for(const s in e){const i=e[s];let o;de(i)?"default"in i?o=Ue(i.from||s,i.default,!0):o=Ue(i.from||s):o=Ue(i),we(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function vo(e,t,n){Le(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _o(e,t,n,r){const s=r.includes(".")?Qo(n,r):()=>n[r];if(ge(e)){const i=t[e];H(i)&&Sr(s,i)}else if(H(e))Sr(s,e.bind(n));else if(de(e))if(B(e))e.forEach(i=>_o(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&Sr(s,i,e)}}function yo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>mr(c,l,o,!0)),mr(c,t,o)),i.set(t,c),c}function mr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&mr(e,i,n,!0),s&&s.forEach(o=>mr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=wu[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const wu={data:bo,props:At,emits:At,methods:At,computed:At,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:At,directives:At,watch:Ru,provide:bo,inject:Cu};function bo(e,t){return t?e?function(){return me(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Cu(e,t){return At(ws(e),ws(t))}function ws(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ee(e,t){return e?[...new Set([].concat(e,t))]:t}function At(e,t){return e?me(me(Object.create(null),e),t):t}function Ru(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=Ee(e[r],t[r]);return n}function Su(e,t,n,r=!1){const s={},i={};tr(i,yr,1),e.propsDefaults=Object.create(null),Eo(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:eu(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Au(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=q(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const g=t[h];if(c)if(G(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const w=ze(h);s[w]=Cs(c,a,w,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Eo(e,t,s,i)&&(l=!0);let u;for(const d in a)(!t||!G(t,d)&&((u=Kt(d))===d||!G(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Cs(c,a,d,void 0,e,!0)):delete s[d]);if(i!==a)for(const d in i)(!t||!G(t,d))&&(delete i[d],l=!0)}l&&tt(e,"set","$attrs")}function Eo(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Yn(c))continue;const l=t[c];let u;s&&G(s,u=ze(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:_s(e.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(i){const c=q(n),l=a||Z;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Cs(s,c,d,l[d],e,!G(l,d))}}return o}function Cs(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Qt(s),r=l[n]=c.call(null,t),Mt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Kt(n))&&(r=!0))}return r}function Io(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!H(e)){const u=d=>{c=!0;const[h,g]=Io(d,t,!0);me(o,h),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return r.set(e,zt),zt;if(B(i))for(let u=0;u<i.length;u++){const d=ze(i[u]);To(d)&&(o[d]=Z)}else if(i)for(const u in i){const d=ze(u);if(To(d)){const h=i[u],g=o[d]=B(h)||H(h)?{type:h}:h;if(g){const w=Ro(Boolean,g.type),D=Ro(String,g.type);g[0]=w>-1,g[1]=D<0||w<D,(w>-1||G(g,"default"))&&a.push(d)}}}const l=[o,a];return r.set(e,l),l}function To(e){return e[0]!=="$"}function wo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Co(e,t){return wo(e)===wo(t)}function Ro(e,t){return B(t)?t.findIndex(n=>Co(n,e)):H(t)&&Co(t,e)?0:-1}const So=e=>e[0]==="_"||e==="$stable",Rs=e=>B(e)?e.map(Je):[Je(e)],Ou=(e,t,n)=>{const r=In((...s)=>Rs(t(...s)),n);return r._c=!1,r},Ao=(e,t,n)=>{const r=e._ctx;for(const s in e){if(So(s))continue;const i=e[s];if(H(i))t[s]=Ou(s,i,r);else if(i!=null){const o=Rs(i);t[s]=()=>o}}},Oo=(e,t)=>{const n=Rs(t);e.slots.default=()=>n},Pu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),tr(t,"_",n)):Ao(t,e.slots={})}else e.slots={},t&&Oo(e,t);tr(e.slots,yr,1)},ku=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=Z;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(me(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Ao(t,s)),o=t}else t&&(Oo(e,t),o={default:1});if(i)for(const a in s)!So(a)&&!(a in o)&&delete s[a]};function xg(e,t){const n=Se;if(n===null)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=Z]=t[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&Lt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return e}function Ot(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Gt(),Le(c,n,8,[e.el,a,e,t]),St())}}function Po(){return{app:null,config:{isNativeTag:yl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nu=0;function Mu(e,t){return function(r,s=null){s!=null&&!de(s)&&(s=null);const i=Po(),o=new Set;let a=!1;const c=i.app={_uid:Nu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:of,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=_e(r,s);return h.appContext=i,u&&t?t(h,l):e(h,l,d),a=!0,c._container=l,l.__vue_app__=c,Ds(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}const Ie=fu;function Lu(e){return Du(e)}function Du(e,t){const n=Cl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=xe,cloneNode:w,insertStaticContent:D}=e,S=(f,p,m,y=null,_=null,T=null,R=!1,E=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!kt(f,p)&&(y=N(f),Ne(f,_,T,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:b,ref:M,shapeFlag:O}=p;switch(b){case Ps:A(f,p,m,y);break;case Fe:x(f,p,m,y);break;case gr:f==null&&V(p,m,y,R);break;case ye:le(f,p,m,y,_,T,R,E,I);break;default:O&1?ae(f,p,m,y,_,T,R,E,I):O&6?Te(f,p,m,y,_,T,R,E,I):(O&64||O&128)&&b.process(f,p,m,y,_,T,R,E,I,re)}M!=null&&_&&Ss(M,f&&f.ref,T,p||f,!p)},A=(f,p,m,y)=>{if(f==null)r(p.el=a(p.children),m,y);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},x=(f,p,m,y)=>{f==null?r(p.el=c(p.children||""),m,y):p.el=f.el},V=(f,p,m,y)=>{[f.el,f.anchor]=D(f.children,p,m,y)},j=({el:f,anchor:p},m,y)=>{let _;for(;f&&f!==p;)_=h(f),r(f,m,y),f=_;r(p,m,y)},te=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=h(f),s(f),f=m;s(p)},ae=(f,p,m,y,_,T,R,E,I)=>{R=R||p.type==="svg",f==null?z(p,m,y,_,T,R,E,I):he(f,p,_,T,R,E,I)},z=(f,p,m,y,_,T,R,E)=>{let I,b;const{type:M,props:O,shapeFlag:L,transition:U,patchFlag:K,dirs:oe}=f;if(f.el&&w!==void 0&&K===-1)I=f.el=w(f.el);else{if(I=f.el=o(f.type,T,O&&O.is,O),L&8?u(I,f.children):L&16&&J(f.children,I,null,y,_,T&&M!=="foreignObject",R,E),oe&&Ot(f,null,y,"created"),O){for(const ie in O)ie!=="value"&&!Yn(ie)&&i(I,ie,null,O[ie],T,f.children,y,_,C);"value"in O&&i(I,"value",null,O.value),(b=O.onVnodeBeforeMount)&&qe(b,y,f)}ce(I,f,f.scopeId,R,y)}oe&&Ot(f,null,y,"beforeMount");const Q=(!_||_&&!_.pendingBranch)&&U&&!U.persisted;Q&&U.beforeEnter(I),r(I,p,m),((b=O&&O.onVnodeMounted)||Q||oe)&&Ie(()=>{b&&qe(b,y,f),Q&&U.enter(I),oe&&Ot(f,null,y,"mounted")},_)},ce=(f,p,m,y,_)=>{if(m&&g(f,m),y)for(let T=0;T<y.length;T++)g(f,y[T]);if(_){let T=_.subTree;if(p===T){const R=_.vnode;ce(f,R,R.scopeId,R.slotScopeIds,_.parent)}}},J=(f,p,m,y,_,T,R,E,I=0)=>{for(let b=I;b<f.length;b++){const M=f[b]=E?pt(f[b]):Je(f[b]);S(null,M,p,m,y,_,T,R,E)}},he=(f,p,m,y,_,T,R)=>{const E=p.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:M}=p;I|=f.patchFlag&16;const O=f.props||Z,L=p.props||Z;let U;(U=L.onVnodeBeforeUpdate)&&qe(U,m,p,f),M&&Ot(p,f,m,"beforeUpdate");const K=_&&p.type!=="foreignObject";if(b?pe(f.dynamicChildren,b,E,m,y,K,T):R||ke(f,p,E,null,m,y,K,T,!1),I>0){if(I&16)k(E,p,O,L,m,y,_);else if(I&2&&O.class!==L.class&&i(E,"class",null,L.class,_),I&4&&i(E,"style",O.style,L.style,_),I&8){const oe=p.dynamicProps;for(let Q=0;Q<oe.length;Q++){const ie=oe[Q],De=O[ie],jt=L[ie];(jt!==De||ie==="value")&&i(E,ie,De,jt,_,f.children,m,y,C)}}I&1&&f.children!==p.children&&u(E,p.children)}else!R&&b==null&&k(E,p,O,L,m,y,_);((U=L.onVnodeUpdated)||M)&&Ie(()=>{U&&qe(U,m,p,f),M&&Ot(p,f,m,"updated")},y)},pe=(f,p,m,y,_,T,R)=>{for(let E=0;E<p.length;E++){const I=f[E],b=p[E],M=I.el&&(I.type===ye||!kt(I,b)||I.shapeFlag&(6|64))?d(I.el):m;S(I,b,M,null,y,_,T,R,!0)}},k=(f,p,m,y,_,T,R)=>{if(m!==y){for(const E in y){if(Yn(E))continue;const I=y[E],b=m[E];I!==b&&E!=="value"&&i(f,E,b,I,R,p.children,_,T,C)}if(m!==Z)for(const E in m)!Yn(E)&&!(E in y)&&i(f,E,m[E],null,R,p.children,_,T,C);"value"in y&&i(f,"value",m.value,y.value)}},le=(f,p,m,y,_,T,R,E,I)=>{const b=p.el=f?f.el:a(""),M=p.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:U}=p;U&&(E=E?E.concat(U):U),f==null?(r(b,m,y),r(M,m,y),J(p.children,m,M,_,T,R,E,I)):O>0&&O&64&&L&&f.dynamicChildren?(pe(f.dynamicChildren,L,m,_,T,R,E),(p.key!=null||_&&p===_.subTree)&&ko(f,p,!0)):ke(f,p,m,M,_,T,R,E,I)},Te=(f,p,m,y,_,T,R,E,I)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?_.ctx.activate(p,m,y,R,I):Ze(p,m,y,_,T,R,I):ue(f,p,I)},Ze=(f,p,m,y,_,T,R)=>{const E=f.component=Ku(f,y,_);if(hr(f)&&(E.ctx.renderer=re),qu(E),E.asyncDep){if(_&&_.registerDep(E,ne),!f.el){const I=E.subTree=_e(Fe);x(null,I,p,m)}return}ne(E,f,p,m,_,T,R)},ue=(f,p,m)=>{const y=p.component=f.component;if(cu(f,p,m))if(y.asyncDep&&!y.asyncResolved){Y(y,p,m);return}else y.next=p,tf(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},ne=(f,p,m,y,_,T,R)=>{const E=()=>{if(f.isMounted){let{next:M,bu:O,u:L,parent:U,vnode:K}=f,oe=M,Q;I.allowRecurse=!1,M?(M.el=K.el,Y(f,M,R)):M=K,O&&er(O),(Q=M.props&&M.props.onVnodeBeforeUpdate)&&qe(Q,U,M,K),I.allowRecurse=!0;const ie=ys(f),De=f.subTree;f.subTree=ie,S(De,ie,d(De.el),N(De),f,_,T),M.el=ie.el,oe===null&&lu(f,ie.el),L&&Ie(L,_),(Q=M.props&&M.props.onVnodeUpdated)&&Ie(()=>qe(Q,U,M,K),_)}else{let M;const{el:O,props:L}=p,{bm:U,m:K,parent:oe}=f,Q=Is(p);if(I.allowRecurse=!1,U&&er(U),!Q&&(M=L&&L.onVnodeBeforeMount)&&qe(M,oe,p),I.allowRecurse=!0,O&&$){const ie=()=>{f.subTree=ys(f),$(O,f.subTree,f,_,null)};Q?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=ys(f);S(null,ie,m,y,f,_,T),p.el=ie.el}if(K&&Ie(K,_),!Q&&(M=L&&L.onVnodeMounted)){const ie=p;Ie(()=>qe(M,oe,ie),_)}p.shapeFlag&256&&f.a&&Ie(f.a,_),f.isMounted=!0,p=m=y=null}},I=new ls(E,()=>Wo(f.update),f.scope),b=f.update=I.run.bind(I);b.id=f.uid,I.allowRecurse=b.allowRecurse=!0,b()},Y=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Au(f,p.props,y,m),ku(f,p.children,m),Gt(),$s(void 0,f.update),St()},ke=(f,p,m,y,_,T,R,E,I=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,O=p.children,{patchFlag:L,shapeFlag:U}=p;if(L>0){if(L&128){et(b,O,m,y,_,T,R,E,I);return}else if(L&256){Vt(b,O,m,y,_,T,R,E,I);return}}U&8?(M&16&&C(b,_,T),O!==b&&u(m,O)):M&16?U&16?et(b,O,m,y,_,T,R,E,I):C(b,_,T,!0):(M&8&&u(m,""),U&16&&J(O,m,y,_,T,R,E,I))},Vt=(f,p,m,y,_,T,R,E,I)=>{f=f||zt,p=p||zt;const b=f.length,M=p.length,O=Math.min(b,M);let L;for(L=0;L<O;L++){const U=p[L]=I?pt(p[L]):Je(p[L]);S(f[L],U,m,null,_,T,R,E,I)}b>M?C(f,_,T,!0,!1,O):J(p,m,y,_,T,R,E,I,O)},et=(f,p,m,y,_,T,R,E,I)=>{let b=0;const M=p.length;let O=f.length-1,L=M-1;for(;b<=O&&b<=L;){const U=f[b],K=p[b]=I?pt(p[b]):Je(p[b]);if(kt(U,K))S(U,K,m,null,_,T,R,E,I);else break;b++}for(;b<=O&&b<=L;){const U=f[O],K=p[L]=I?pt(p[L]):Je(p[L]);if(kt(U,K))S(U,K,m,null,_,T,R,E,I);else break;O--,L--}if(b>O){if(b<=L){const U=L+1,K=U<M?p[U].el:y;for(;b<=L;)S(null,p[b]=I?pt(p[b]):Je(p[b]),m,K,_,T,R,E,I),b++}}else if(b>L)for(;b<=O;)Ne(f[b],_,T,!0),b++;else{const U=b,K=b,oe=new Map;for(b=K;b<=L;b++){const Ce=p[b]=I?pt(p[b]):Je(p[b]);Ce.key!=null&&oe.set(Ce.key,b)}let Q,ie=0;const De=L-K+1;let jt=!1,Ii=0;const mn=new Array(De);for(b=0;b<De;b++)mn[b]=0;for(b=U;b<=O;b++){const Ce=f[b];if(ie>=De){Ne(Ce,_,T,!0);continue}let je;if(Ce.key!=null)je=oe.get(Ce.key);else for(Q=K;Q<=L;Q++)if(mn[Q-K]===0&&kt(Ce,p[Q])){je=Q;break}je===void 0?Ne(Ce,_,T,!0):(mn[je-K]=b+1,je>=Ii?Ii=je:jt=!0,S(Ce,p[je],m,null,_,T,R,E,I),ie++)}const Ti=jt?xu(mn):zt;for(Q=Ti.length-1,b=De-1;b>=0;b--){const Ce=K+b,je=p[Ce],wi=Ce+1<M?p[Ce+1].el:y;mn[b]===0?S(null,je,m,wi,_,T,R,E,I):jt&&(Q<0||b!==Ti[Q]?Ve(je,m,wi,2):Q--)}}},Ve=(f,p,m,y,_=null)=>{const{el:T,type:R,transition:E,children:I,shapeFlag:b}=f;if(b&6){Ve(f.component.subTree,p,m,y);return}if(b&128){f.suspense.move(p,m,y);return}if(b&64){R.move(f,p,m,re);return}if(R===ye){r(T,p,m);for(let O=0;O<I.length;O++)Ve(I[O],p,m,y);r(f.anchor,p,m);return}if(R===gr){j(f,p,m);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(T),r(T,p,m),Ie(()=>E.enter(T),_);else{const{leave:O,delayLeave:L,afterLeave:U}=E,K=()=>r(T,p,m),oe=()=>{O(T,()=>{K(),U&&U()})};L?L(T,K,oe):oe()}else r(T,p,m)},Ne=(f,p,m,y=!1,_=!1)=>{const{type:T,props:R,ref:E,children:I,dynamicChildren:b,shapeFlag:M,patchFlag:O,dirs:L}=f;if(E!=null&&Ss(E,null,m,f,!0),M&256){p.ctx.deactivate(f);return}const U=M&1&&L,K=!Is(f);let oe;if(K&&(oe=R&&R.onVnodeBeforeUnmount)&&qe(oe,p,f),M&6)P(f.component,m,y);else{if(M&128){f.suspense.unmount(m,y);return}U&&Ot(f,null,p,"beforeUnmount"),M&64?f.type.remove(f,p,m,_,re,y):b&&(T!==ye||O>0&&O&64)?C(b,p,m,!1,!0):(T===ye&&O&(128|256)||!_&&M&16)&&C(I,p,m),y&&es(f)}(K&&(oe=R&&R.onVnodeUnmounted)||U)&&Ie(()=>{oe&&qe(oe,p,f),U&&Ot(f,null,p,"unmounted")},m)},es=f=>{const{type:p,el:m,anchor:y,transition:_}=f;if(p===ye){v(m,y);return}if(p===gr){te(f);return}const T=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:E}=_,I=()=>R(m,T);E?E(f.el,T,I):I()}else T()},v=(f,p)=>{let m;for(;f!==p;)m=h(f),s(f),f=m;s(p)},P=(f,p,m)=>{const{bum:y,scope:_,update:T,subTree:R,um:E}=f;y&&er(y),_.stop(),T&&(T.active=!1,Ne(R,f,p,m)),E&&Ie(E,p),Ie(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(f,p,m,y=!1,_=!1,T=0)=>{for(let R=T;R<f.length;R++)Ne(f[R],p,m,y,_)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),X=(f,p,m)=>{f==null?p._vnode&&Ne(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,m),Go(),p._vnode=f},re={p:S,um:Ne,m:Ve,r:es,mt:Ze,mc:J,pc:ke,pbc:pe,n:N,o:e};let W,$;return t&&([W,$]=t(re)),{render:X,hydrate:W,createApp:Mu(X,W)}}function Ss(e,t,n,r,s=!1){if(B(e)){e.forEach((h,g)=>Ss(h,t&&(B(t)?t[g]:t),n,r,s));return}if(Is(r)&&!s)return;const i=r.shapeFlag&4?Ds(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===Z?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ge(l)?(u[l]=null,G(d,l)&&(d[l]=null)):we(l)&&(l.value=null)),ge(c)){const h=()=>{u[c]=o,G(d,c)&&(d[c]=o)};o?(h.id=-1,Ie(h,n)):h()}else if(we(c)){const h=()=>{c.value=o};o?(h.id=-1,Ie(h,n)):h()}else H(c)&&mt(c,a,12,[o,u])}function qe(e,t,n,r=null){Le(e,t,7,[n,r])}function ko(e,t,n=!1){const r=e.children,s=t.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=pt(s[i]),a.el=o.el),n||ko(o,a))}}function xu(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Uu=e=>e.__isTeleport,As="components";function Cn(e,t){return Mo(As,e,!0,t)||e}const No=Symbol();function Os(e){return ge(e)?Mo(As,e,!1)||e:e||No}function Mo(e,t,n=!0,r=!1){const s=Se||ve;if(s){const i=s.type;if(e===As){const a=Xu(i);if(a&&(a===t||a===ze(t)||a===Qn(ze(t))))return i}const o=Lo(s[e]||i[e],t)||Lo(s.appContext[e],t);return!o&&r?i:o}}function Lo(e,t){return e&&(e[t]||e[ze(t)]||e[Qn(ze(t))])}const ye=Symbol(void 0),Ps=Symbol(void 0),Fe=Symbol(void 0),gr=Symbol(void 0),Rn=[];let Pt=null;function fe(e=!1){Rn.push(Pt=e?null:[])}function Fu(){Rn.pop(),Pt=Rn[Rn.length-1]||null}let vr=1;function Do(e){vr+=e}function xo(e){return e.dynamicChildren=vr>0?Pt||zt:null,Fu(),vr>0&&Pt&&Pt.push(e),e}function Be(e,t,n,r,s,i){return xo(Nt(e,t,n,r,s,i,!0))}function Ge(e,t,n,r,s){return xo(_e(e,t,n,r,s,!0))}function _r(e){return e?e.__v_isVNode===!0:!1}function kt(e,t){return e.type===t.type&&e.key===t.key}const yr="__vInternal",Uo=({key:e})=>e!=null?e:null,br=({ref:e})=>e!=null?ge(e)||we(e)||H(e)?{i:Se,r:e}:e:null;function Nt(e,t=null,n=null,r=0,s=null,i=e===ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Uo(t),ref:t&&br(t),scopeId:ur,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ns(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),vr>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const _e=Bu;function Bu(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===No)&&(e=Fe),_r(e)){const a=Xt(e,t,!0);return n&&Ns(a,n),a}if(Qu(e)&&(e=e.__vccOpts),t){t=$u(t);let{class:a,style:c}=t;a&&!ge(a)&&(t.class=ft(a)),de(c)&&(Zi(c)&&!B(c)&&(c=me({},c)),t.style=gn(c))}const o=ge(e)?1:uu(e)?128:Uu(e)?64:de(e)?4:H(e)?2:0;return Nt(e,t,n,r,s,o,i,!0)}function $u(e){return e?Zi(e)||yr in e?me({},e):e:null}function Xt(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?Ir(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Uo(a),ref:t&&t.ref?n&&s?B(s)?s.concat(br(t)):[s,br(t)]:br(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor}}function Er(e=" ",t=0){return _e(Ps,null,e,t)}function Ug(e,t){const n=_e(gr,null,e);return n.staticCount=t,n}function ks(e="",t=!1){return t?(fe(),Ge(Fe,null,e)):_e(Fe,null,e)}function Je(e){return e==null||typeof e=="boolean"?_e(Fe):B(e)?_e(ye,null,e.slice()):typeof e=="object"?pt(e):_e(Ps,null,String(e))}function pt(e){return e.el===null||e.memo?e:Xt(e)}function Ns(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&(1|64)){const s=t.default;s&&(s._c&&(s._d=!1),Ns(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(yr in t)?t._ctx=Se:s===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[Er(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ir(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ft([t.class,r.class]));else if(s==="style")t.style=gn([t.style,r.style]);else if(Gn(s)){const i=t[s],o=r[s];i!==o&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Fo(e,t,n,r){let s;const i=n&&n[r];if(B(e)||ge(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(de(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Hu(e,t,n={},r,s){if(Se.isCE)return _e("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),fe();const o=i&&Bo(i(n)),a=Ge(ye,{key:n.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Bo(e){return e.some(t=>_r(t)?!(t.type===Fe||t.type===ye&&!Bo(t.children)):!0)?e:null}function Vu(e){const t={};for(const n in e)t[Zn(n)]=e[n];return t}const Ms=e=>e?$o(e)?Ds(e)||e.proxy:Ms(e.parent):null,Tr=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ms(e.parent),$root:e=>Ms(e.root),$emit:e=>e.emit,$options:e=>yo(e),$forceUpdate:e=>()=>Wo(e.update),$nextTick:e=>Bs.bind(e.proxy),$watch:e=>sf.bind(e)}),ju={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 0:return r[t];case 1:return s[t];case 3:return n[t];case 2:return i[t]}else{if(r!==Z&&G(r,t))return o[t]=0,r[t];if(s!==Z&&G(s,t))return o[t]=1,s[t];if((l=e.propsOptions[0])&&G(l,t))return o[t]=2,i[t];if(n!==Z&&G(n,t))return o[t]=3,n[t];Ts&&(o[t]=4)}}const u=Tr[t];let d,h;if(u)return t==="$attrs"&&Re(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==Z&&G(n,t))return o[t]=3,n[t];if(h=c.config.globalProperties,G(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;if(s!==Z&&G(s,t))s[t]=n;else if(r!==Z&&G(r,t))r[t]=n;else if(G(e.props,t))return!1;return t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return n[o]!==void 0||e!==Z&&G(e,o)||t!==Z&&G(t,o)||(a=i[0])&&G(a,o)||G(r,o)||G(Tr,o)||G(s.config.globalProperties,o)}},zu=Po();let Wu=0;function Ku(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||zu,i={uid:Wu++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,update:null,scope:new Li(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Io(r,s),emitsOptions:io(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=iu.bind(null,i),e.ce&&e.ce(i),i}let ve=null;const Ls=()=>ve||Se,Qt=e=>{ve=e,e.scope.on()},Mt=()=>{ve&&ve.scope.off(),ve=null};function $o(e){return e.vnode.shapeFlag&4}let wr=!1;function qu(e,t=!1){wr=t;const{props:n,children:r}=e.vnode,s=$o(e);Su(e,n,s,t),Pu(e,r);const i=s?Gu(e,t):void 0;return wr=!1,i}function Gu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=gs(new Proxy(e.ctx,ju));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Yu(e):null;Qt(e),Gt();const i=mt(r,e,0,[e.props,s]);if(St(),Mt(),Pi(i)){if(i.then(Mt,Mt),t)return i.then(o=>{Ho(e,o,t)}).catch(o=>{Cr(o,e,0)});e.asyncDep=i}else Ho(e,i,t)}else jo(e,t)}function Ho(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:de(t)&&(e.setupState=so(t)),jo(e,n)}let Vo;function jo(e,t,n){const r=e.type;if(!e.render){if(!t&&Vo&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=me(me({isCustomElement:i,delimiters:a},o),c);r.render=Vo(s,l)}}e.render=r.render||xe}Qt(e),Gt(),Iu(e),St(),Mt()}function Ju(e){return new Proxy(e.attrs,{get(t,n){return Re(e,"get","$attrs"),t[n]}})}function Yu(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ju(e))},slots:e.slots,emit:e.emit,expose:t}}function Ds(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(so(gs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Tr)return Tr[n](e)}}))}function Xu(e){return H(e)&&e.displayName||e.name}function Qu(e){return H(e)&&"__vccOpts"in e}function mt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){Cr(i,t,n)}return s}function Le(e,t,n,r){if(H(e)){const i=mt(e,t,n,r);return i&&Pi(i)&&i.catch(o=>{Cr(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Le(e[i],t,n,r));return s}function Cr(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){mt(c,null,10,[e,o,a]);return}}Zu(e,n,s,r)}function Zu(e,t,n,r=!0){console.error(e)}let Rr=!1,xs=!1;const Ae=[];let st=0;const Sn=[];let An=null,Zt=0;const On=[];let gt=null,en=0;const zo=Promise.resolve();let Us=null,Fs=null;function Bs(e){const t=Us||zo;return e?t.then(this?e.bind(this):e):t}function ef(e){let t=st+1,n=Ae.length;for(;t<n;){const r=t+n>>>1;Pn(Ae[r])<e?t=r+1:n=r}return t}function Wo(e){(!Ae.length||!Ae.includes(e,Rr&&e.allowRecurse?st+1:st))&&e!==Fs&&(e.id==null?Ae.push(e):Ae.splice(ef(e.id),0,e),Ko())}function Ko(){!Rr&&!xs&&(xs=!0,Us=zo.then(Jo))}function tf(e){const t=Ae.indexOf(e);t>st&&Ae.splice(t,1)}function qo(e,t,n,r){B(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ko()}function nf(e){qo(e,An,Sn,Zt)}function rf(e){qo(e,gt,On,en)}function $s(e,t=null){if(Sn.length){for(Fs=t,An=[...new Set(Sn)],Sn.length=0,Zt=0;Zt<An.length;Zt++)An[Zt]();An=null,Zt=0,Fs=null,$s(e,t)}}function Go(e){if(On.length){const t=[...new Set(On)];if(On.length=0,gt){gt.push(...t);return}for(gt=t,gt.sort((n,r)=>Pn(n)-Pn(r)),en=0;en<gt.length;en++)gt[en]();gt=null,en=0}}const Pn=e=>e.id==null?1/0:e.id;function Jo(e){xs=!1,Rr=!0,$s(e),Ae.sort((n,r)=>Pn(n)-Pn(r));const t=xe;try{for(st=0;st<Ae.length;st++){const n=Ae[st];n&&n.active!==!1&&mt(n,null,14)}}finally{st=0,Ae.length=0,Go(),Rr=!1,Us=null,(Ae.length||Sn.length||On.length)&&Jo(e)}}const Yo={};function Sr(e,t,n){return Xo(e,t,n)}function Xo(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){const a=ve;let c,l=!1,u=!1;if(we(e)?(c=()=>e.value,l=!!e._shallow):Jt(e)?(c=()=>e,r=!0):B(e)?(u=!0,l=e.some(Jt),c=()=>e.map(A=>{if(we(A))return A.value;if(Jt(A))return Lt(A);if(H(A))return mt(A,a,2)})):H(e)?t?c=()=>mt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Le(e,a,3,[h])}:c=xe,t&&r){const A=c;c=()=>Lt(A())}let d,h=A=>{d=S.onStop=()=>{mt(A,a,4)}};if(wr)return h=xe,t?n&&Le(t,a,3,[c(),u?[]:void 0,h]):c(),xe;let g=u?[]:Yo;const w=()=>{if(!!S.active)if(t){const A=S.run();(r||l||(u?A.some((x,V)=>vn(x,g[V])):vn(A,g)))&&(d&&d(),Le(t,a,3,[A,g===Yo?void 0:g,h]),g=A)}else S.run()};w.allowRecurse=!!t;let D;s==="sync"?D=w:s==="post"?D=()=>Ie(w,a&&a.suspense):D=()=>{!a||a.isMounted?nf(w):w()};const S=new ls(c,D);return t?n?w():g=S.run():s==="post"?Ie(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&Ai(a.scope.effects,S)}}function sf(e,t,n){const r=this.proxy,s=ge(e)?e.includes(".")?Qo(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=ve;Qt(this);const a=Xo(s,i.bind(r),n);return o?Qt(o):Mt(),a}function Qo(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Lt(e,t){if(!de(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))Lt(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Lt(e[n],t);else if(Oi(e)||Wt(e))e.forEach(n=>{Lt(n,t)});else if(Ni(e))for(const n in e)Lt(e[n],t);return e}function Hs(e,t,n){const r=arguments.length;return r===2?de(t)&&!B(t)?_r(t)?_e(e,null,[t]):_e(e,t):_e(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_r(n)&&(n=[n]),_e(e,t,n))}const of="3.2.20",af="http://www.w3.org/2000/svg",tn=typeof document!="undefined"?document:null,Zo=new Map,cf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?tn.createElementNS(af,e):tn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>tn.createTextNode(e),createComment:e=>tn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const s=n?n.previousSibling:t.lastChild;let i=Zo.get(e);if(!i){const o=tn.createElement("template");if(o.innerHTML=r?`<svg>${e}</svg>`:e,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}Zo.set(e,i)}return t.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function lf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function uf(e,t,n){const r=e.style,s=r.display;if(!n)e.removeAttribute("style");else if(ge(n))t!==n&&(r.cssText=n);else{for(const i in n)Vs(r,i,n[i]);if(t&&!ge(t))for(const i in t)n[i]==null&&Vs(r,i,"")}"_vod"in e&&(r.display=s)}const ea=/\s*!important$/;function Vs(e,t,n){if(B(n))n.forEach(r=>Vs(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=ff(e,t);ea.test(n)?e.setProperty(Kt(r),n.replace(ea,""),"important"):e[r]=n}}const ta=["Webkit","Moz","ms"],js={};function ff(e,t){const n=js[t];if(n)return n;let r=ze(t);if(r!=="filter"&&r in e)return js[t]=r;r=Qn(r);for(let s=0;s<ta.length;s++){const i=ta[s]+r;if(i in e)return js[t]=i}return t}const na="http://www.w3.org/1999/xlink";function df(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(na,t.slice(6,t.length)):e.setAttributeNS(na,t,n);else{const i=ml(t);n==null||i&&!Ci(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function hf(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"){e._value=n;const a=n==null?"":n;e.value!==a&&(e.value=a),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const a=typeof e[t];if(a==="boolean"){e[t]=Ci(n);return}else if(n==null&&a==="string"){e[t]="",e.removeAttribute(t);return}else if(a==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let Ar=Date.now,ra=!1;if(typeof window!="undefined"){Ar()>document.createEvent("Event").timeStamp&&(Ar=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);ra=!!(e&&Number(e[1])<=53)}let zs=0;const pf=Promise.resolve(),mf=()=>{zs=0},gf=()=>zs||(pf.then(mf),zs=Ar());function nn(e,t,n,r){e.addEventListener(t,n,r)}function vf(e,t,n,r){e.removeEventListener(t,n,r)}function _f(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=yf(t);if(r){const l=i[t]=bf(r,s);nn(e,a,l,c)}else o&&(vf(e,a,o,c),i[t]=void 0)}}const sa=/(?:Once|Passive|Capture)$/;function yf(e){let t;if(sa.test(e)){t={};let n;for(;n=e.match(sa);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Kt(e.slice(2)),t]}function bf(e,t){const n=r=>{const s=r.timeStamp||Ar();(ra||s>=n.attached-1)&&Le(Ef(r,n.value),t,5,[r])};return n.value=e,n.attached=gf(),n}function Ef(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r(s))}else return t}const ia=/^on[a-z]/,If=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?lf(e,r,s):t==="style"?uf(e,n,r):Gn(t)?ns(t)||_f(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tf(e,t,r,s))?hf(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),df(e,t,r,s))};function Tf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ia.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ia.test(t)&&ge(n)?!1:t in e}const vt="transition",kn="animation",oa=(e,{slots:t})=>Hs(co,la(e),t);oa.displayName="Transition";const aa={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},wf=oa.props=me({},co.props,aa),Dt=(e,t=[])=>{B(e)?e.forEach(n=>n(...t)):e&&e(...t)},ca=e=>e?B(e)?e.some(t=>t.length>1):e.length>1:!1;function la(e){const t={};for(const k in e)k in aa||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,w=Cf(s),D=w&&w[0],S=w&&w[1],{onBeforeEnter:A,onEnter:x,onEnterCancelled:V,onLeave:j,onLeaveCancelled:te,onBeforeAppear:ae=A,onAppear:z=x,onAppearCancelled:ce=V}=t,J=(k,le,Te)=>{xt(k,le?u:a),xt(k,le?l:o),Te&&Te()},he=(k,le)=>{xt(k,g),xt(k,h),le&&le()},pe=k=>(le,Te)=>{const Ze=k?z:x,ue=()=>J(le,k,Te);Dt(Ze,[le,ue]),ua(()=>{xt(le,k?c:i),it(le,k?u:a),ca(Ze)||fa(le,r,D,ue)})};return me(t,{onBeforeEnter(k){Dt(A,[k]),it(k,i),it(k,o)},onBeforeAppear(k){Dt(ae,[k]),it(k,c),it(k,l)},onEnter:pe(!1),onAppear:pe(!0),onLeave(k,le){const Te=()=>he(k,le);it(k,d),ma(),it(k,h),ua(()=>{xt(k,d),it(k,g),ca(j)||fa(k,r,S,Te)}),Dt(j,[k,Te])},onEnterCancelled(k){J(k,!1),Dt(V,[k])},onAppearCancelled(k){J(k,!0),Dt(ce,[k])},onLeaveCancelled(k){he(k),Dt(te,[k])}})}function Cf(e){if(e==null)return null;if(de(e))return[Ws(e.enter),Ws(e.leave)];{const t=Ws(e);return[t,t]}}function Ws(e){return nr(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function xt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ua(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Rf=0;function fa(e,t,n,r){const s=e._endId=++Rf,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=da(e,t);if(!o)return r();const l=o+"end";let u=0;const d=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),e.addEventListener(l,h)}function da(e,t){const n=window.getComputedStyle(e),r=w=>(n[w]||"").split(", "),s=r(vt+"Delay"),i=r(vt+"Duration"),o=ha(s,i),a=r(kn+"Delay"),c=r(kn+"Duration"),l=ha(a,c);let u=null,d=0,h=0;t===vt?o>0&&(u=vt,d=o,h=i.length):t===kn?l>0&&(u=kn,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?vt:kn:null,h=u?u===vt?i.length:c.length:0);const g=u===vt&&/\b(transform|all)(,|$)/.test(n[vt+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:g}}function ha(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>pa(n)+pa(e[r])))}function pa(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ma(){return document.body.offsetHeight}const ga=new WeakMap,va=new WeakMap,Sf={name:"TransitionGroup",props:me({},wf,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Ls(),r=ao();let s,i;return po(()=>{if(!s.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Nf(s[0].el,n.vnode.el,o))return;s.forEach(Of),s.forEach(Pf);const a=s.filter(kf);ma(),a.forEach(c=>{const l=c.el,u=l.style;it(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",d),l._moveCb=null,xt(l,o))};l.addEventListener("transitionend",d)})}),()=>{const o=q(e),a=la(o);let c=o.tag||ye;s=i,i=t.default?Es(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&wn(u,Tn(u,a,r,n))}if(s)for(let l=0;l<s.length;l++){const u=s[l];wn(u,Tn(u,a,r,n)),ga.set(u,u.el.getBoundingClientRect())}return _e(c,null,i)}}},Af=Sf;function Of(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Pf(e){va.set(e,e.el.getBoundingClientRect())}function kf(e){const t=ga.get(e),n=va.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",e}}function Nf(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:i}=da(r);return s.removeChild(r),i}const _a=e=>{const t=e.props["onUpdate:modelValue"];return B(t)?n=>er(t,n):t};function Mf(e){e.target.composing=!0}function ya(e){const t=e.target;t.composing&&(t.composing=!1,Lf(t,"input"))}function Lf(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Fg={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=_a(s);const i=r||s.props&&s.props.type==="number";nn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n?a=a.trim():i&&(a=nr(a)),e._assign(a)}),n&&nn(e,"change",()=>{e.value=e.value.trim()}),t||(nn(e,"compositionstart",Mf),nn(e,"compositionend",ya),nn(e,"change",ya))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=_a(i),e.composing||document.activeElement===e&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&nr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Df=["ctrl","shift","alt","meta"],xf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Df.some(n=>e[`${n}Key`]&&!t.includes(n))},Uf=(e,t)=>(n,...r)=>{for(let s=0;s<t.length;s++){const i=xf[t[s]];if(i&&i(n,t))return}return e(n,...r)},Bg={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Nn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Nn(e,!0),r.enter(e)):r.leave(e,()=>{Nn(e,!1)}):Nn(e,t))},beforeUnmount(e,{value:t}){Nn(e,t)}};function Nn(e,t){e.style.display=t?e._vod:"none"}const Ff=me({patchProp:If},cf);let ba;function Bf(){return ba||(ba=Lu(Ff))}const $f=(...e)=>{const t=Bf().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Hf(r);if(!s)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Hf(e){return ge(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Ea=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",rn=e=>Ea?Symbol(e):"_vr_"+e,Vf=rn("rvlm"),Ia=rn("rvd"),Or=rn("r"),Ks=rn("rl"),qs=rn("rvl"),sn=typeof window!="undefined";function jf(e){return e.__esModule||Ea&&e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Gs(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const Mn=()=>{},zf=/\/$/,Wf=e=>e.replace(zf,"");function Js(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=Jf(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Kf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ta(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qf(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&on(t.matched[r],n.matched[s])&&wa(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function on(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wa(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Gf(e[n],t[n]))return!1;return!0}function Gf(e,t){return Array.isArray(e)?Ca(e,t):Array.isArray(t)?Ca(t,e):e===t}function Ca(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Jf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ln;(function(e){e.pop="pop",e.push="push"})(Ln||(Ln={}));var Dn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Dn||(Dn={}));function Yf(e){if(!e)if(sn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Wf(e)}const Xf=/^[^#]+#/;function Qf(e,t){return e.replace(Xf,"#")+t}function Zf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Pr=()=>({left:window.pageXOffset,top:window.pageYOffset});function ed(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Zf(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ra(e,t){return(history.state?history.state.position-t:-1)+e}const Ys=new Map;function td(e,t){Ys.set(e,t)}function nd(e){const t=Ys.get(e);return Ys.delete(e),t}let rd=()=>location.protocol+"//"+location.host;function Sa(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ta(c,"")}return Ta(n,e)+r+s}function sd(e,t,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=Sa(e,location),w=n.value,D=t.value;let S=0;if(h){if(n.value=g,t.value=h,o&&o===w){o=null;return}S=D?h.position-D.position:0}else r(g);s.forEach(A=>{A(n.value,w,{delta:S,type:Ln.pop,direction:S?S>0?Dn.forward:Dn.back:Dn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const w=s.indexOf(h);w>-1&&s.splice(w,1)};return i.push(g),g}function u(){const{history:h}=window;!h.state||h.replaceState(ee({},h.state,{scroll:Pr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function Aa(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Pr():null}}function id(e){const{history:t,location:n}=window,r={value:Sa(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:rd()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=ee({},t.state,Aa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ee({},s.value,t.state,{forward:c,scroll:Pr()});i(u.current,u,!0);const d=ee({},Aa(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function $g(e){e=Yf(e);const t=id(e),n=sd(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:e,go:r,createHref:Qf.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function od(e){return typeof e=="string"||e&&typeof e=="object"}function Oa(e){return typeof e=="string"||typeof e=="symbol"}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pa=rn("nf");var ka;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ka||(ka={}));function an(e,t){return ee(new Error,{type:e,[Pa]:!0},t)}function Ut(e,t){return e instanceof Error&&Pa in e&&(t==null||!!(e.type&t))}const Na="[^/]+?",ad={sensitive:!1,strict:!1,start:!0,end:!0},cd=/[.+*?^${}()[\]/\\]/g;function ld(e,t){const n=ee({},ad,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const h=l[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(cd,"\\$&"),g+=40;else if(h.type===1){const{value:w,repeatable:D,optional:S,regexp:A}=h;i.push({name:w,repeatable:D,optional:S});const x=A||Na;if(x!==Na){g+=10;try{new RegExp(`(${x})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${w}" (${x}): `+j.message)}}let V=D?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(V=S&&l.length<2?`(?:/${V})`:"/"+V),S&&(V+="?"),s+=V,g+=20,S&&(g+=-8),D&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",w=i[h-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const h of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:D,optional:S}=g,A=w in l?l[w]:"";if(Array.isArray(A)&&!D)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(A)?A.join("/"):A;if(!x)if(S)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=x}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function ud(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function fd(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=ud(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const dd={type:0,value:""},hd=/[a-zA-Z0-9_]/;function pd(e){if(!e)return[[]];if(e==="/")return[[dd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:hd.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function md(e,t,n){const r=ld(pd(e.path),n),s=ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function gd(e,t){const n=[],r=new Map;t=La({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,d,h){const g=!h,w=_d(u);w.aliasOf=h&&h.record;const D=La(t,u),S=[w];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of V)S.push(ee({},w,{components:h?h.record.components:w.components,path:j,aliasOf:h?h.record:w}))}let A,x;for(const V of S){const{path:j}=V;if(d&&j[0]!=="/"){const te=d.record.path,ae=te[te.length-1]==="/"?"":"/";V.path=d.record.path+(j&&ae+j)}if(A=md(V,d,D),h?h.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),g&&u.name&&!Ma(A)&&o(u.name)),"children"in w){const te=w.children;for(let ae=0;ae<te.length;ae++)i(te[ae],A,h&&h.children[ae])}h=h||A,c(A)}return x?()=>{o(x)}:Mn}function o(u){if(Oa(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&fd(u,n[d])>=0;)d++;n.splice(d,0,u),u.record.name&&!Ma(u)&&r.set(u.record.name,u)}function l(u,d){let h,g={},w,D;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw an(1,{location:u});D=h.record.name,g=ee(vd(d.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),w=h.stringify(g)}else if("path"in u)w=u.path,h=n.find(x=>x.re.test(w)),h&&(g=h.parse(w),D=h.record.name);else{if(h=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!h)throw an(1,{location:u,currentLocation:d});D=h.record.name,g=ee({},d.params,u.params),w=h.stringify(g)}const S=[];let A=h;for(;A;)S.unshift(A.record),A=A.parent;return{name:D,path:w,params:g,matched:S,meta:bd(S)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function vd(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function _d(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:yd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function yd(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ma(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bd(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function La(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Da=/#/g,Ed=/&/g,Id=/\//g,Td=/=/g,wd=/\?/g,xa=/\+/g,Cd=/%5B/g,Rd=/%5D/g,Ua=/%5E/g,Sd=/%60/g,Fa=/%7B/g,Ad=/%7C/g,Ba=/%7D/g,Od=/%20/g;function Xs(e){return encodeURI(""+e).replace(Ad,"|").replace(Cd,"[").replace(Rd,"]")}function Pd(e){return Xs(e).replace(Fa,"{").replace(Ba,"}").replace(Ua,"^")}function Qs(e){return Xs(e).replace(xa,"%2B").replace(Od,"+").replace(Da,"%23").replace(Ed,"%26").replace(Sd,"`").replace(Fa,"{").replace(Ba,"}").replace(Ua,"^")}function kd(e){return Qs(e).replace(Td,"%3D")}function Nd(e){return Xs(e).replace(Da,"%23").replace(wd,"%3F")}function Md(e){return e==null?"":Nd(e).replace(Id,"%2F")}function kr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ld(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xa," "),o=i.indexOf("="),a=kr(o<0?i:i.slice(0,o)),c=o<0?null:kr(i.slice(o+1));if(a in t){let l=t[a];Array.isArray(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function $a(e){let t="";for(let n in e){const r=e[n];if(n=kd(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Qs(i)):[r&&Qs(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Dd(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function xn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function yt(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(an(4,{from:n,to:t})):d instanceof Error?a(d):od(d)?a(an(2,{from:t,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Zs(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(xd(a)){const l=(a.__vccOpts||a)[t];l&&s.push(yt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=jf(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&yt(h,n,r,i,o)()}))}}return s}function xd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ha(e){const t=Ue(Or),n=Ue(Ks),r=Ke(()=>t.resolve(Yt(e.to))),s=Ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(on.bind(null,u));if(h>-1)return h;const g=Va(c[l-2]);return l>1&&Va(u)===g&&d[d.length-1].path!==g?d.findIndex(on.bind(null,c[l-2])):h}),i=Ke(()=>s.value>-1&&$d(n.params,r.value.params)),o=Ke(()=>s.value>-1&&s.value===n.matched.length-1&&wa(n.params,r.value.params));function a(c={}){return Bd(c)?t[Yt(e.replace)?"replace":"push"](Yt(e.to)).catch(Mn):Promise.resolve()}return{route:r,href:Ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ud=nt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ha,setup(e,{slots:t}){const n=bn(Ha(e)),{options:r}=Ue(Or),s=Ke(()=>({[ja(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ja(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Hs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Fd=Ud;function Bd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $d(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Va(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ja=(e,t,n)=>e!=null?e:t!=null?t:n,Hd=nt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Ue(qs),s=Ke(()=>e.route||r.value),i=Ue(Ia,0),o=Ke(()=>s.value.matched[i]);dr(Ia,i+1),dr(Vf,o),dr(qs,s);const a=no();return Sr(()=>[a.value,o.value,e.name],([c,l,u],[d,h,g])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!on(l,h)||!d)&&(l.enterCallbacks[u]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[e.name],d=e.name;if(!u)return za(n.default,{Component:u,route:c});const h=l.props[e.name],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,D=Hs(u,ee({},g,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(l.instances[d]=null)},ref:a}));return za(n.default,{Component:D,route:c})||D}}});function za(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Vd=Hd;function Hg(e){const t=gd(e.routes,e),n=e.parseQuery||Ld,r=e.stringifyQuery||$a,s=e.history,i=xn(),o=xn(),a=xn(),c=tu(_t);let l=_t;sn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gs.bind(null,v=>""+v),d=Gs.bind(null,Md),h=Gs.bind(null,kr);function g(v,P){let C,N;return Oa(v)?(C=t.getRecordMatcher(v),N=P):N=v,t.addRoute(N,C)}function w(v){const P=t.getRecordMatcher(v);P&&t.removeRoute(P)}function D(){return t.getRoutes().map(v=>v.record)}function S(v){return!!t.getRecordMatcher(v)}function A(v,P){if(P=ee({},P||c.value),typeof v=="string"){const $=Js(n,v,P.path),f=t.resolve({path:$.path},P),p=s.createHref($.fullPath);return ee($,f,{params:h(f.params),hash:kr($.hash),redirectedFrom:void 0,href:p})}let C;if("path"in v)C=ee({},v,{path:Js(n,v.path,P.path).path});else{const $=ee({},v.params);for(const f in $)$[f]==null&&delete $[f];C=ee({},v,{params:d(v.params)}),P.params=d(P.params)}const N=t.resolve(C,P),X=v.hash||"";N.params=u(h(N.params));const re=Kf(r,ee({},v,{hash:Pd(X),path:N.path})),W=s.createHref(re);return ee({fullPath:re,hash:X,query:r===$a?Dd(v.query):v.query||{}},N,{redirectedFrom:void 0,href:W})}function x(v){return typeof v=="string"?Js(n,v,c.value.path):ee({},v)}function V(v,P){if(l!==v)return an(8,{from:P,to:v})}function j(v){return z(v)}function te(v){return j(ee(x(v),{replace:!0}))}function ae(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let N=typeof C=="function"?C(v):C;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=x(N):{path:N},N.params={}),ee({query:v.query,hash:v.hash,params:v.params},N)}}function z(v,P){const C=l=A(v),N=c.value,X=v.state,re=v.force,W=v.replace===!0,$=ae(C);if($)return z(ee(x($),{state:X,force:re,replace:W}),P||C);const f=C;f.redirectedFrom=P;let p;return!re&&qf(r,N,C)&&(p=an(16,{to:f,from:N}),Vt(N,N,!0,!1)),(p?Promise.resolve(p):J(f,N)).catch(m=>Ut(m)?m:ne(m,f,N)).then(m=>{if(m){if(Ut(m,2))return z(ee(x(m.to),{state:X,force:re,replace:W}),P||f)}else m=pe(f,N,!0,W,X);return he(f,N,m),m})}function ce(v,P){const C=V(v,P);return C?Promise.reject(C):Promise.resolve()}function J(v,P){let C;const[N,X,re]=jd(v,P);C=Zs(N.reverse(),"beforeRouteLeave",v,P);for(const $ of N)$.leaveGuards.forEach(f=>{C.push(yt(f,v,P))});const W=ce.bind(null,v,P);return C.push(W),cn(C).then(()=>{C=[];for(const $ of i.list())C.push(yt($,v,P));return C.push(W),cn(C)}).then(()=>{C=Zs(X,"beforeRouteUpdate",v,P);for(const $ of X)$.updateGuards.forEach(f=>{C.push(yt(f,v,P))});return C.push(W),cn(C)}).then(()=>{C=[];for(const $ of v.matched)if($.beforeEnter&&!P.matched.includes($))if(Array.isArray($.beforeEnter))for(const f of $.beforeEnter)C.push(yt(f,v,P));else C.push(yt($.beforeEnter,v,P));return C.push(W),cn(C)}).then(()=>(v.matched.forEach($=>$.enterCallbacks={}),C=Zs(re,"beforeRouteEnter",v,P),C.push(W),cn(C))).then(()=>{C=[];for(const $ of o.list())C.push(yt($,v,P));return C.push(W),cn(C)}).catch($=>Ut($,8)?$:Promise.reject($))}function he(v,P,C){for(const N of a.list())N(v,P,C)}function pe(v,P,C,N,X){const re=V(v,P);if(re)return re;const W=P===_t,$=sn?history.state:{};C&&(N||W?s.replace(v.fullPath,ee({scroll:W&&$&&$.scroll},X)):s.push(v.fullPath,X)),c.value=v,Vt(v,P,C,W),ke()}let k;function le(){k=s.listen((v,P,C)=>{const N=A(v),X=ae(N);if(X){z(ee(X,{replace:!0}),N).catch(Mn);return}l=N;const re=c.value;sn&&td(Ra(re.fullPath,C.delta),Pr()),J(N,re).catch(W=>Ut(W,4|8)?W:Ut(W,2)?(z(W.to,N).then($=>{Ut($,4|16)&&!C.delta&&C.type===Ln.pop&&s.go(-1,!1)}).catch(Mn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),ne(W,N,re))).then(W=>{W=W||pe(N,re,!1),W&&(C.delta?s.go(-C.delta,!1):C.type===Ln.pop&&Ut(W,4|16)&&s.go(-1,!1)),he(N,re,W)}).catch(Mn)})}let Te=xn(),Ze=xn(),ue;function ne(v,P,C){ke(v);const N=Ze.list();return N.length?N.forEach(X=>X(v,P,C)):console.error(v),Promise.reject(v)}function Y(){return ue&&c.value!==_t?Promise.resolve():new Promise((v,P)=>{Te.add([v,P])})}function ke(v){ue||(ue=!0,le(),Te.list().forEach(([P,C])=>v?C(v):P()),Te.reset())}function Vt(v,P,C,N){const{scrollBehavior:X}=e;if(!sn||!X)return Promise.resolve();const re=!C&&nd(Ra(v.fullPath,0))||(N||!C)&&history.state&&history.state.scroll||null;return Bs().then(()=>X(v,P,re)).then(W=>W&&ed(W)).catch(W=>ne(W,v,P))}const et=v=>s.go(v);let Ve;const Ne=new Set;return{currentRoute:c,addRoute:g,removeRoute:w,hasRoute:S,getRoutes:D,resolve:A,options:e,push:j,replace:te,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ze.add,isReady:Y,install(v){const P=this;v.component("RouterLink",Fd),v.component("RouterView",Vd),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),sn&&!Ve&&c.value===_t&&(Ve=!0,j(s.location).catch(X=>{}));const C={};for(const X in _t)C[X]=Ke(()=>c.value[X]);v.provide(Or,P),v.provide(Ks,bn(C)),v.provide(qs,c);const N=v.unmount;Ne.add(v),v.unmount=function(){Ne.delete(v),Ne.size<1&&(l=_t,k&&k(),c.value=_t,Ve=!1,ue=!1),N()}}}}function cn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function jd(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>on(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>on(l,c))||s.push(c))}return[n,r,s]}function Vg(){return Ue(Or)}function jg(){return Ue(Ks)}var zd=Object.defineProperty,Wa=Object.getOwnPropertySymbols,Wd=Object.prototype.hasOwnProperty,Kd=Object.prototype.propertyIsEnumerable,Ka=(e,t,n)=>t in e?zd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qa=(e,t)=>{for(var n in t||(t={}))Wd.call(t,n)&&Ka(e,n,t[n]);if(Wa)for(var n of Wa(t))Kd.call(t,n)&&Ka(e,n,t[n]);return e},Nr=e=>typeof e=="function",Mr=e=>typeof e=="string",Ga=e=>Mr(e)&&e.trim().length>0,qd=e=>typeof e=="number",Ft=e=>typeof e=="undefined",Un=e=>typeof e=="object"&&e!==null,Gd=e=>Ye(e,"tag")&&Ga(e.tag),Ja=e=>window.TouchEvent&&e instanceof TouchEvent,Ya=e=>Ye(e,"component")&&Xa(e.component),Jd=e=>Nr(e)||Un(e),Xa=e=>!Ft(e)&&(Mr(e)||Jd(e)||Ya(e)),Qa=e=>Un(e)&&["height","width","right","left","top","bottom"].every(t=>qd(e[t])),Ye=(e,t)=>(Un(e)||Nr(e))&&t in e,Yd=(e=>()=>e++)(0);function ei(e){return Ja(e)?e.targetTouches[0].clientX:e.clientX}function Za(e){return Ja(e)?e.targetTouches[0].clientY:e.clientY}var Xd=e=>{Ft(e.remove)?e.parentNode&&e.parentNode.removeChild(e):e.remove()},Fn=e=>Ya(e)?Fn(e.component):Gd(e)?nt({render(){return e}}):typeof e=="string"?e:q(Yt(e)),Qd=e=>{if(typeof e=="string")return e;const t=Ye(e,"props")&&Un(e.props)?e.props:{},n=Ye(e,"listeners")&&Un(e.listeners)?e.listeners:{};return{component:Fn(e),props:t,listeners:n}},Zd=()=>typeof window!="undefined",ti=class{constructor(){this.allHandlers={}}getHandlers(e){return this.allHandlers[e]||[]}on(e,t){const n=this.getHandlers(e);n.push(t),this.allHandlers[e]=n}off(e,t){const n=this.getHandlers(e);n.splice(n.indexOf(t)>>>0,1)}emit(e,t){this.getHandlers(e).forEach(r=>r(t))}},eh=e=>["on","off","emit"].every(t=>Ye(e,t)&&Nr(e[t])),Oe;(function(e){e.SUCCESS="success",e.ERROR="error",e.WARNING="warning",e.INFO="info",e.DEFAULT="default"})(Oe||(Oe={}));var Lr;(function(e){e.TOP_LEFT="top-left",e.TOP_CENTER="top-center",e.TOP_RIGHT="top-right",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_CENTER="bottom-center",e.BOTTOM_RIGHT="bottom-right"})(Lr||(Lr={}));var Pe;(function(e){e.ADD="add",e.DISMISS="dismiss",e.UPDATE="update",e.CLEAR="clear",e.UPDATE_DEFAULTS="update_defaults"})(Pe||(Pe={}));var $e="Vue-Toastification",He={type:{type:String,default:Oe.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},ec={type:He.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Dr={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:He.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},ni={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},tc={transition:{type:[Object,String],default:`${$e}__bounce`}},th={position:{type:String,default:Lr.TOP_RIGHT},draggable:He.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:He.trueBoolean,pauseOnHover:He.trueBoolean,closeOnClick:He.trueBoolean,timeout:ni.timeout,hideProgressBar:ni.hideProgressBar,toastClassName:He.classNames,bodyClassName:He.classNames,icon:ec.customIcon,closeButton:Dr.component,closeButtonClassName:Dr.classNames,showCloseButtonOnHover:Dr.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new ti}},nh={id:{type:[String,Number],required:!0,default:0},type:He.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},rh={container:{type:[Object,Function],default:()=>document.body},newestOnTop:He.trueBoolean,maxToasts:{type:Number,default:20},transition:tc.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:e=>e},filterToasts:{type:Function,default:e=>e},containerClassName:He.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},ot={CORE_TOAST:th,TOAST:nh,CONTAINER:rh,PROGRESS_BAR:ni,ICON:ec,TRANSITION:tc,CLOSE_BUTTON:Dr},nc=nt({name:"VtProgressBar",props:ot.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${$e}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function sh(e,t){return fe(),Be("div",{style:gn(e.style),class:ft(e.cpClass)},null,6)}nc.render=sh;var ih=nc,rc=nt({name:"VtCloseButton",props:ot.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?Fn(this.component):"button"},classes(){const e=[`${$e}__close-button`];return this.showOnHover&&e.push("show-on-hover"),e.concat(this.classNames)}}}),oh=Er(" \xD7 ");function ah(e,t){return fe(),Ge(Os(e.buttonComponent),Ir({"aria-label":e.ariaLabel,class:e.classes},e.$attrs),{default:In(()=>[oh]),_:1},16,["aria-label","class"])}rc.render=ah;var ch=rc,sc={},lh={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},uh=Nt("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),fh=[uh];function dh(e,t){return fe(),Be("svg",lh,fh)}sc.render=dh;var hh=sc,ic={},ph={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},mh=Nt("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),gh=[mh];function vh(e,t){return fe(),Be("svg",ph,gh)}ic.render=vh;var oc=ic,ac={},_h={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},yh=Nt("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),bh=[yh];function Eh(e,t){return fe(),Be("svg",_h,bh)}ac.render=Eh;var Ih=ac,cc={},Th={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},wh=Nt("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Ch=[wh];function Rh(e,t){return fe(),Be("svg",Th,Ch)}cc.render=Rh;var Sh=cc,lc=nt({name:"VtIcon",props:ot.ICON,computed:{customIconChildren(){return Ye(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return Mr(this.customIcon)?this.trimValue(this.customIcon):Ye(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return Ye(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:Xa(this.customIcon)?Fn(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Oe.DEFAULT]:oc,[Oe.INFO]:oc,[Oe.SUCCESS]:hh,[Oe.ERROR]:Sh,[Oe.WARNING]:Ih}[this.type]},iconClasses(){const e=[`${$e}__icon`];return this.hasCustomIcon?e.concat(this.customIconClass):e}},methods:{trimValue(e,t=""){return Ga(e)?e.trim():t}}});function Ah(e,t){return fe(),Ge(Os(e.component),{class:ft(e.iconClasses)},{default:In(()=>[Er(Ri(e.customIconChildren),1)]),_:1},8,["class"])}lc.render=Ah;var Oh=lc,uc=nt({name:"VtToast",components:{ProgressBar:ih,CloseButton:ch,Icon:Oh},inheritAttrs:!1,props:Object.assign({},ot.CORE_TOAST,ot.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const e=[`${$e}__toast`,`${$e}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&e.push("disable-transition"),this.rtl&&e.push(`${$e}__toast--rtl`),e},bodyClasses(){return[`${$e}__toast-${Mr(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return Qa(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:Ye,getVueComponentFromObj:Fn,closeToast(){this.eventBus.emit(Pe.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const e=this.$el;e.addEventListener("touchstart",this.onDragStart,{passive:!0}),e.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const e=this.$el;e.removeEventListener("touchstart",this.onDragStart),e.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(e){this.beingDragged=!0,this.dragPos={x:ei(e),y:Za(e)},this.dragStart=ei(e),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(e){this.beingDragged&&(e.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:ei(e),y:Za(e)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,Qa(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),Ph=["role"];function kh(e,t){const n=Cn("Icon"),r=Cn("CloseButton"),s=Cn("ProgressBar");return fe(),Be("div",{class:ft(e.classes),style:gn(e.draggableStyle),onClick:t[0]||(t[0]=(...i)=>e.clickHandler&&e.clickHandler(...i)),onMouseenter:t[1]||(t[1]=(...i)=>e.hoverPause&&e.hoverPause(...i)),onMouseleave:t[2]||(t[2]=(...i)=>e.hoverPlay&&e.hoverPlay(...i))},[e.icon?(fe(),Ge(n,{key:0,"custom-icon":e.icon,type:e.type},null,8,["custom-icon","type"])):ks("v-if",!0),Nt("div",{role:e.accessibility.toastRole||"alert",class:ft(e.bodyClasses)},[typeof e.content=="string"?(fe(),Be(ye,{key:0},[Er(Ri(e.content),1)],2112)):(fe(),Ge(Os(e.getVueComponentFromObj(e.content)),Ir({key:1,"toast-id":e.id},e.hasProp(e.content,"props")?e.content.props:{},Vu(e.hasProp(e.content,"listeners")?e.content.listeners:{}),{onCloseToast:e.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Ph),e.closeButton?(fe(),Ge(r,{key:1,component:e.closeButton,"class-names":e.closeButtonClassName,"show-on-hover":e.showCloseButtonOnHover,"aria-label":e.accessibility.closeButtonLabel,onClick:Uf(e.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):ks("v-if",!0),e.timeout?(fe(),Ge(s,{key:2,"is-running":e.isRunning,"hide-progress-bar":e.hideProgressBar,timeout:e.timeout,onCloseToast:e.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):ks("v-if",!0)],38)}uc.render=kh;var Nh=uc,fc=nt({name:"VtTransition",props:ot.TRANSITION,emits:["leave"],methods:{hasProp:Ye,leave(e){e instanceof HTMLElement&&(e.style.left=e.offsetLeft+"px",e.style.top=e.offsetTop+"px",e.style.width=getComputedStyle(e).width,e.style.position="absolute")}}});function Mh(e,t){return fe(),Ge(Af,{tag:"div","enter-active-class":e.transition.enter?e.transition.enter:`${e.transition}-enter-active`,"move-class":e.transition.move?e.transition.move:`${e.transition}-move`,"leave-active-class":e.transition.leave?e.transition.leave:`${e.transition}-leave-active`,onLeave:e.leave},{default:In(()=>[Hu(e.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}fc.render=Mh;var Lh=fc,dc=nt({name:"VueToastification",devtools:{hide:!0},components:{Toast:Nh,VtTransition:Lh},props:Object.assign({},ot.CORE_TOAST,ot.CONTAINER,ot.TRANSITION),data(){return{count:0,positions:Object.values(Lr),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const e=this.eventBus;e.on(Pe.ADD,this.addToast),e.on(Pe.CLEAR,this.clearToasts),e.on(Pe.DISMISS,this.dismissToast),e.on(Pe.UPDATE,this.updateToast),e.on(Pe.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(e){Nr(e)&&(e=await e()),Xd(this.$el),e.appendChild(this.$el)},setToast(e){Ft(e.id)||(this.toasts[e.id]=e)},addToast(e){e.content=Qd(e.content);const t=Object.assign({},this.defaults,e.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[e.type],e),n=this.defaults.filterBeforeCreate(t,this.toastArray);n&&this.setToast(n)},dismissToast(e){const t=this.toasts[e];!Ft(t)&&!Ft(t.onClose)&&t.onClose(),delete this.toasts[e]},clearToasts(){Object.keys(this.toasts).forEach(e=>{this.dismissToast(e)})},getPositionToasts(e){const t=this.filteredToasts.filter(n=>n.position===e).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?t.reverse():t},updateDefaults(e){Ft(e.container)||this.setup(e.container),this.defaults=Object.assign({},this.defaults,e)},updateToast({id:e,options:t,create:n}){this.toasts[e]?(t.timeout&&t.timeout===this.toasts[e].timeout&&t.timeout++,this.setToast(Object.assign({},this.toasts[e],t))):n&&this.addToast(Object.assign({},{id:e},t))},getClasses(e){return[`${$e}__container`,e].concat(this.defaults.containerClassName)}}});function Dh(e,t){const n=Cn("Toast"),r=Cn("VtTransition");return fe(),Be("div",null,[(fe(!0),Be(ye,null,Fo(e.positions,s=>(fe(),Be("div",{key:s},[_e(r,{transition:e.defaults.transition,class:ft(e.getClasses(s))},{default:In(()=>[(fe(!0),Be(ye,null,Fo(e.getPositionToasts(s),i=>(fe(),Ge(n,Ir({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}dc.render=Dh;var xh=dc,hc=(e={},t=!0)=>{const n=e.eventBus=e.eventBus||new ti;t&&Bs(()=>{const i=$f(xh,qa({},e)),o=i.mount(document.createElement("div")),a=e.onMounted;if(Ft(a)||a(o,i),e.shareAppContext){const c=e.shareAppContext;c===!0?console.warn(`[${$e}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const r=(i,o)=>{const a=Object.assign({},{id:Yd(),type:Oe.DEFAULT},o,{content:i});return n.emit(Pe.ADD,a),a.id};r.clear=()=>n.emit(Pe.CLEAR,void 0),r.updateDefaults=i=>{n.emit(Pe.UPDATE_DEFAULTS,i)},r.dismiss=i=>{n.emit(Pe.DISMISS,i)};function s(i,{content:o,options:a},c=!1){const l=Object.assign({},a,{content:o});n.emit(Pe.UPDATE,{id:i,options:l,create:c})}return r.update=s,r.success=(i,o)=>r(i,Object.assign({},o,{type:Oe.SUCCESS})),r.info=(i,o)=>r(i,Object.assign({},o,{type:Oe.INFO})),r.error=(i,o)=>r(i,Object.assign({},o,{type:Oe.ERROR})),r.warning=(i,o)=>r(i,Object.assign({},o,{type:Oe.WARNING})),r},Uh=()=>{const e=()=>console.warn(`[${$e}] This plugin does not support SSR!`);return new Proxy(e,{get(){return e}})};function ri(e){return Zd()?eh(e)?hc({eventBus:e},!1):hc(e,!0):Uh()}var pc=Symbol("VueToastification"),mc=new ti,Fh=(e,t)=>{(t==null?void 0:t.shareAppContext)===!0&&(t.shareAppContext=e);const n=ri(qa({eventBus:mc},t));e.provide(pc,n)},zg=e=>{if(e)return ri(e);const t=Ls()?Ue(pc,void 0):void 0;return t||ri(mc)},Wg=Fh;/**
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
 */const Bh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},$h=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[d],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Bh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$h(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),d!==64){const w=l<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Vh=function(e){try{return Hh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */class jh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function be(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Wh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Kh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qh(){const e=be();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}/**
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
 */const Gh="FirebaseError";class ln extends Error{constructor(t,n,r){super(n);this.code=t,this.customData=r,this.name=Gh,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Jh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,r)}}function Jh(e,t){return e.replace(Yh,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Yh=/\{\$([^}]+)}/g;function Xh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function xr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(gc(i)&&gc(o)){if(!xr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gc(e){return e!==null&&typeof e=="object"}/**
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
 */function $n(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Qh(e,t){const n=new Zh(e,t);return n.subscribe.bind(n)}class Zh{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ep(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=si),s.error===void 0&&(s.error=si),s.complete===void 0&&(s.complete=si);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ep(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function si(){}/**
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
 */function Ur(e){return e&&e._delegate?e._delegate:e}/*! *****************************************************************************
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
***************************************************************************** */function ii(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function tp(e,t,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(u){try{l(r.next(u))}catch(d){o(d)}}function c(u){try{l(r.throw(u))}catch(d){o(d)}}function l(u){u.done?i(u.value):s(u.value).then(a,c)}l((r=r.apply(e,t||[])).next())})}function np(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=l[0]&2?s.return:l[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,l[1])).done)return i;switch(s=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,s=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(u){l=[6,u],s=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function oi(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Fr(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),s,i=[],o;try{for(;(t===void 0||t-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i}function vc(e,t,n){if(n||arguments.length===2)for(var r=0,s=t.length,i;r<s;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Hn=function(){function e(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},e.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},e.prototype.setServiceProps=function(t){return this.serviceProps=t,this},e.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},e}();/**
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
 */var Bt="[DEFAULT]";/**
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
 */var rp=function(){function e(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(t){var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var r=new jh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise},e.prototype.getImmediate=function(t){var n,r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error("Service "+this.name+" is not available")}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(t){var n,r;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,!!this.shouldAutoInitialize()){if(ip(t))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}try{for(var s=oi(this.instancesDeferred.entries()),i=s.next();!i.done;i=s.next()){var o=Fr(i.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:l});c.resolve(u)}catch{}}}catch(d){n={error:d}}finally{try{i&&!i.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},e.prototype.clearInstance=function(t){t===void 0&&(t=Bt),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},e.prototype.delete=function(){return tp(this,void 0,void 0,function(){var t;return np(this,function(n){switch(n.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(vc(vc([],Fr(t.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Fr(t.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},e.prototype.isComponentSet=function(){return this.component!=null},e.prototype.isInitialized=function(t){return t===void 0&&(t=Bt),this.instances.has(t)},e.prototype.getOptions=function(t){return t===void 0&&(t=Bt),this.instancesOptions.get(t)||{}},e.prototype.initialize=function(t){var n,r;t===void 0&&(t={});var s=t.options,i=s===void 0?{}:s,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=oi(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=Fr(l.value,2),d=u[0],h=u[1],g=this.normalizeInstanceIdentifier(d);o===g&&h.resolve(a)}}catch(w){n={error:w}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a},e.prototype.onInit=function(t,n){var r,s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);var o=this.instances.get(s);return o&&t(o,s),function(){i.delete(t)}},e.prototype.invokeOnInitCallbacks=function(t,n){var r,s,i=this.onInitCallbacks.get(n);if(!!i)try{for(var o=oi(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(t,n)}catch{}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}},e.prototype.getOrInitializeService=function(t){var n=t.instanceIdentifier,r=t.options,s=r===void 0?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sp(n),options:s}),this.instances.set(n,i),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch{}return i||null},e.prototype.normalizeInstanceIdentifier=function(t){return t===void 0&&(t=Bt),this.component?this.component.multipleInstances?t:Bt:t},e.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},e}();function sp(e){return e===Bt?void 0:e}function ip(e){return e.instantiationMode==="EAGER"}/**
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
 */var op=function(){function e(t){this.name=t,this.providers=new Map}return e.prototype.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},e.prototype.addOrOverwriteComponent=function(t){var n=this.getProvider(t.name);n.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},e.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new rp(t,this);return this.providers.set(t,n),n},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();/**
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
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const ap={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},cp=se.INFO,lp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},up=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=lp[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _c{constructor(t){this.name=t,this._logLevel=cp,this._logHandler=up,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ap[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}/**
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
 */class fp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dp(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ai="@firebase/app",yc="0.7.4";/**
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
 */const ci=new _c("@firebase/app"),hp="@firebase/app-compat",pp="@firebase/analytics-compat",mp="@firebase/analytics",gp="@firebase/app-check-compat",vp="@firebase/app-check",_p="@firebase/auth",yp="@firebase/auth-compat",bp="@firebase/database",Ep="@firebase/database-compat",Ip="@firebase/functions",Tp="@firebase/functions-compat",wp="@firebase/installations",Cp="@firebase/installations-compat",Rp="@firebase/messaging",Sp="@firebase/messaging-compat",Ap="@firebase/performance",Op="@firebase/performance-compat",Pp="@firebase/remote-config",kp="@firebase/remote-config-compat",Np="@firebase/storage",Mp="@firebase/storage-compat",Lp="@firebase/firestore",Dp="@firebase/firestore-compat",xp="firebase",Up="9.1.3";/**
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
 */const bc="[DEFAULT]",Fp={[ai]:"fire-core",[hp]:"fire-core-compat",[mp]:"fire-analytics",[pp]:"fire-analytics-compat",[vp]:"fire-app-check",[gp]:"fire-app-check-compat",[_p]:"fire-auth",[yp]:"fire-auth-compat",[bp]:"fire-rtdb",[Ep]:"fire-rtdb-compat",[Ip]:"fire-fn",[Tp]:"fire-fn-compat",[wp]:"fire-iid",[Cp]:"fire-iid-compat",[Rp]:"fire-fcm",[Sp]:"fire-fcm-compat",[Ap]:"fire-perf",[Op]:"fire-perf-compat",[Pp]:"fire-rc",[kp]:"fire-rc-compat",[Np]:"fire-gcs",[Mp]:"fire-gcs-compat",[Lp]:"fire-fst",[Dp]:"fire-fst-compat","fire-js":"fire-js",[xp]:"fire-js-all"};/**
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
 */const Br=new Map,li=new Map;function Bp(e,t){try{e.container.addComponent(t)}catch(n){ci.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $r(e){const t=e.name;if(li.has(t))return ci.debug(`There were multiple attempts to register component ${t}.`),!1;li.set(t,e);for(const n of Br.values())Bp(n,e);return!0}function Ec(e,t){return e.container.getProvider(t)}/**
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
 */const $p={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Hr=new Bn("app","Firebase",$p);/**
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
 */class Hp{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=Up;function Kg(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:bc,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Hr.create("bad-app-name",{appName:String(r)});const s=Br.get(r);if(s){if(xr(e,s.options)&&xr(n,s.config))return s;throw Hr.create("duplicate-app",{appName:r})}const i=new op(r);for(const a of li.values())i.addComponent(a);const o=new Hp(e,n,i);return Br.set(r,o),o}function Vp(e=bc){const t=Br.get(e);if(!t)throw Hr.create("no-app",{appName:e});return t}function un(e,t,n){var r;let s=(r=Fp[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ci.warn(a.join(" "));return}$r(new Hn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */function jp(e){$r(new Hn("platform-logger",t=>new fp(t),"PRIVATE")),un(ai,yc,e),un(ai,yc,"esm2017"),un("fire-js","")}jp("");function Ic(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zp=Ic,Tc=new Bn("auth","Firebase",Ic());/**
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
 */const wc=new _c("@firebase/auth");function jr(e,...t){wc.logLevel<=se.ERROR&&wc.error(`Auth (${Vr}): ${e}`,...t)}/**
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
 */function at(e,...t){throw ui(e,...t)}function Xe(e,...t){return ui(e,...t)}function Wp(e,t,n){const r=Object.assign(Object.assign({},zp()),{[t]:n});return new Bn("auth","Firebase",r).create(t,{appName:e.name})}function ui(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Tc.create(e,...t)}function F(e,t,...n){if(!e)throw ui(t,...n)}function ct(e){const t="INTERNAL ASSERTION FAILED: "+e;throw jr(t),new Error(t)}function lt(e,t){e||ct(t)}/**
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
 */const Cc=new Map;function ut(e){lt(e instanceof Function,"Expected a class definition");let t=Cc.get(e);return t?(lt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Cc.set(e,t),t)}/**
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
 */function Kp(e,t){const n=Ec(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xr(i,t!=null?t:{}))return s;at(s,"already-initialized")}return n.initialize({options:t})}function qp(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ut);(t==null?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function fi(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Gp(){return Rc()==="http:"||Rc()==="https:"}function Rc(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Jp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gp()||Wh()||"connection"in navigator)?navigator.onLine:!0}function Yp(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Vn{constructor(t,n){this.shortDelay=t,this.longDelay=n,lt(n>t,"Short delay should be less than long delay!"),this.isMobile=zh()||Kh()}get(){return Jp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function di(e,t){lt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class hi{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Qp=new Vn(3e4,6e4);function Zp(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zr(e,t,n,r,s={}){return Sc(e,s,()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=$n(Object.assign({key:e.config.apiKey},o)).slice(1),c=new(hi.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),hi.fetch()(Ac(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Sc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xp),t);try{const s=new tm(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pi(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pi(e,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Wp(e,u,l);at(e,u)}}catch(s){if(s instanceof ln)throw s;at(e,"network-request-failed")}}async function em(e,t,n,r,s={}){const i=await zr(e,t,n,r,s);return"mfaPendingCredential"in i&&at(e,"multi-factor-auth-required",{serverResponse:i}),i}function Ac(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?di(e.config,s):`${e.config.apiScheme}://${s}`}class tm{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"timeout")),Qp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xe(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function nm(e,t){return zr(e,"POST","/v1/accounts:delete",t)}async function rm(e,t){return zr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function jn(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sm(e,t=!1){const n=Ur(e),r=await n.getIdToken(t),s=gi(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:jn(mi(s.auth_time)),issuedAtTime:jn(mi(s.iat)),expirationTime:jn(mi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mi(e){return Number(e)*1e3}function gi(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return jr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vh(n);return s?JSON.parse(s):(jr("Failed to decode base64 JWT payload"),null)}catch(s){return jr("Caught error parsing JWT payload as JSON",s),null}}function im(e){const t=gi(e);return F(t,"internal-error"),F(typeof t.exp!="undefined","internal-error"),F(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function zn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ln&&om(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function om({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class am{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await zn(e,rm(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=((t=i.providerUserInfo)===null||t===void 0?void 0:t.length)?um(i.providerUserInfo):[],a=lm(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Oc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function cm(e){const t=Ur(e);await Wr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function lm(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function um(e){return e.map(t=>{var{providerId:n}=t,r=ii(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fm(e,t){const n=await Sc(e,{},()=>{const r=$n({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Ac(e,s,"/v1/token",`key=${i}`);return hi.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken!="undefined","internal-error"),F(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):im(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return F(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fm(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Wn;return r&&(F(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function bt(e,t){F(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class $t{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=ii(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new am(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await zn(this,this.stsTokenManager.getToken(this.auth,t));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return sm(this,t)}reload(){return cm(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new $t(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Wr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await zn(this,nm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:j,isAnonymous:te,providerData:ae,stsTokenManager:z}=n;F(V&&z,t,"internal-error");const ce=Wn.fromJSON(this.name,z);F(typeof V=="string",t,"internal-error"),bt(d,t.name),bt(h,t.name),F(typeof j=="boolean",t,"internal-error"),F(typeof te=="boolean",t,"internal-error"),bt(g,t.name),bt(w,t.name),bt(D,t.name),bt(S,t.name),bt(A,t.name),bt(x,t.name);const J=new $t({uid:V,auth:t,email:h,emailVerified:j,displayName:d,isAnonymous:te,photoURL:w,phoneNumber:g,tenantId:D,stsTokenManager:ce,createdAt:A,lastLoginAt:x});return ae&&Array.isArray(ae)&&(J.providerData=ae.map(he=>Object.assign({},he))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(t,n,r=!1){const s=new Wn;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Wr(i),i}}/**
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
 */class Pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Pc.type="NONE";const kc=Pc;/**
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
 */function Kr(e,t,n){return`firebase:${e}:${t}:${n}`}class fn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Kr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Kr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$t._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new fn(ut(kc),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ut(kc);const o=Kr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=$t._fromJSON(t,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new fn(i,t,r))}}/**
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
 */function Nc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Mc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Uc(t))return"Blackberry";if(Fc(t))return"Webos";if(vi(t))return"Safari";if((t.includes("chrome/")||Lc(t))&&!t.includes("edge/"))return"Chrome";if(xc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mc(e=be()){return/firefox\//i.test(e)}function vi(e=be()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Lc(e=be()){return/crios\//i.test(e)}function Dc(e=be()){return/iemobile/i.test(e)}function xc(e=be()){return/android/i.test(e)}function Uc(e=be()){return/blackberry/i.test(e)}function Fc(e=be()){return/webos/i.test(e)}function qr(e=be()){return/iphone|ipad|ipod/i.test(e)}function dm(e=be()){var t;return qr(e)&&!!((t=window.navigator)===null||t===void 0?void 0:t.standalone)}function hm(){return qh()&&document.documentMode===10}function Bc(e=be()){return qr(e)||xc(e)||Fc(e)||Uc(e)||/windows phone/i.test(e)||Dc(e)}function pm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $c(e,t=[]){let n;switch(e){case"Browser":n=Nc(be());break;case"Worker":n=`${Nc(be())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${r}`}/**
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
 */class mm{constructor(t,n){this.app=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vc(this),this.idTokenSubscription=new Vc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await fn.create(this,t),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let r=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Wr(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Yp()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ur(t):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Bn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ut(t)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,r,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Hc(e){return Ur(e)}class Vc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Qh(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class jc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(t){return ct("not implemented")}_linkToIdToken(t,n){return ct("not implemented")}_getReauthenticationResolver(t){return ct("not implemented")}}/**
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
 */async function dn(e,t){return em(e,"POST","/v1/accounts:signInWithIdp",Zp(e,t))}/**
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
 */const gm="http://localhost";class Ht extends jc{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new Ht(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):at("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=ii(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ht(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return dn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,dn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,dn(t,n)}buildRequest(){const t={requestUri:gm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=$n(n)}return t}}/**
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
 */class zc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kn extends zc{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends Kn{constructor(){super("facebook.com")}static credential(t){return Ht._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class It extends Kn{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return Ht._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class Tt extends Kn{constructor(){super("github.com")}static credential(t){return Ht._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tt.credential(t.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class wt extends Kn{constructor(){super("twitter.com")}static credential(t,n){return Ht._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return wt.credentialFromTaggedObject(t)}static credentialFromError(t){return wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
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
 */class hn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await $t._fromIdTokenResponse(t,r,s),o=Wc(r);return new hn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Wc(r);return new hn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Wc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Gr extends ln{constructor(t,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,this.name="FirebaseError",Object.setPrototypeOf(this,Gr.prototype),this.appName=t.name,this.code=n.code,this.tenantId=(i=t.tenantId)!==null&&i!==void 0?i:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(t,n,r,s){return new Gr(t,n,r,s)}}function Kc(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(e,i,t,r):i})}async function vm(e,t,n=!1){const r=await zn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return hn._forOperation(e,"link",r)}/**
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
 */async function _m(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await zn(e,Kc(r,s,t,e),n);F(i.idToken,r,"internal-error");const o=gi(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(e.uid===a,r,"user-mismatch"),hn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&at(r,"user-mismatch"),i}}/**
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
 */async function ym(e,t,n=!1){const r="signIn",s=await Kc(e,r,t),i=await hn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}const Jr="__sak";/**
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
 */class qc{constructor(t,n){this.storage=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jr,"1"),this.storage.removeItem(Jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}/**
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
 */function bm(){const e=be();return vi(e)||qr(e)}const Em=1e3,Im=10;class Gc extends qc{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bm()&&pm(),this.fallbackToPolling=Bc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hm()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Im):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Em)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Gc.type="LOCAL";const Tm=Gc;/**
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
 */class Jc extends qc{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Jc.type="SESSION";const Yc=Jc;/**
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
 */function wm(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Yr(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await wm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yr.receivers=[];/**
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
 */function _i(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Cm{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=_i("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qe(){return window}function Rm(e){Qe().location.href=e}/**
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
 */function Xc(){return typeof Qe().WorkerGlobalScope!="undefined"&&typeof Qe().importScripts=="function"}async function Sm(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Am(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Om(){return Xc()?self:null}/**
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
 */const Qc="firebaseLocalStorageDb",Pm=1,Xr="firebaseLocalStorage",Zc="fbase_key";class qn{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qr(e,t){return e.transaction([Xr],t?"readwrite":"readonly").objectStore(Xr)}function km(){const e=indexedDB.deleteDatabase(Qc);return new qn(e).toPromise()}function yi(){const e=indexedDB.open(Qc,Pm);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Xr,{keyPath:Zc})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Xr)?t(r):(r.close(),await km(),t(await yi()))})})}async function el(e,t,n){const r=Qr(e,!0).put({[Zc]:t,value:n});return new qn(r).toPromise()}async function Nm(e,t){const n=Qr(e,!1).get(t),r=await new qn(n).toPromise();return r===void 0?null:r.value}function tl(e,t){const n=Qr(e,!0).delete(t);return new qn(n).toPromise()}const Mm=800,Lm=3;class nl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Lm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yr._getInstance(Om()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Sm(),!this.activeServiceWorker)return;this.sender=new Cm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Am()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await yi();return await el(t,Jr,"1"),await tl(t,Jr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>el(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Nm(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>tl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Qr(s,!1).getAll();return new qn(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nl.type="LOCAL";const Dm=nl;/**
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
 */function xm(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Um(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=Xe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",xm().appendChild(r)})}function Fm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Vn(3e4,6e4);/**
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
 */function Bm(e,t){return t?ut(t):(F(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class bi extends jc{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return dn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return dn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return dn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function $m(e){return ym(e.auth,new bi(e),e.bypassAuthState)}function Hm(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),_m(n,new bi(e),e.bypassAuthState)}async function Vm(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),vm(n,new bi(e),e.bypassAuthState)}/**
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
 */class rl{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return $m;case"linkViaPopup":case"linkViaRedirect":return Vm;case"reauthViaPopup":case"reauthViaRedirect":return Hm;default:at(this.auth,"internal-error")}}resolve(t){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jm=new Vn(2e3,1e4);class pn extends rl{constructor(t,n,r,s,i){super(t,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return F(t,this.auth,"internal-error"),t}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const t=_i();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,jm.get())};t()}}pn.currentPopupAction=null;/**
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
 */const zm="pendingRedirect",sl=new Map;class Wm extends rl{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let t=sl.get(this.auth._key());if(!t){try{const r=await Km(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}sl.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Km(e,t){const n=qm(t),r=await il(e)._get(n)==="true";return await il(e)._remove(n),r}function il(e){return ut(e._redirectPersistence)}function qm(e){return Kr(zm,e.config.apiKey,e.name)}async function Gm(e,t,n=!1){const r=Hc(e),s=Bm(r,t),o=await new Wm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Jm=10*60*1e3;class Ym{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Xm(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!al(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Jm&&this.cachedEventUids.clear(),this.cachedEventUids.has(ol(t))}saveEventToCache(t){this.cachedEventUids.add(ol(t)),this.lastProcessedEventTime=Date.now()}}function ol(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function al({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Xm(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return al(e);default:return!1}}/**
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
 */async function Qm(e,t={}){return zr(e,"GET","/v1/projects",t)}/**
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
 */const Zm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eg=/^https?/;async function tg(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Qm(e);for(const n of t)try{if(ng(n))return}catch{}at(e,"unauthorized-domain")}function ng(e){const t=fi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eg.test(n))return!1;if(Zm.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rg=new Vn(3e4,6e4);function cl(){const e=Qe().___jsl;if(e==null?void 0:e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function sg(e){return new Promise((t,n)=>{var r,s,i;function o(){cl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{cl(),n(Xe(e,"network-request-failed"))},timeout:rg.get()})}if((s=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)t(gapi.iframes.getContext());else if((i=Qe().gapi)===null||i===void 0?void 0:i.load)o();else{const a=Fm("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(Xe(e,"network-request-failed"))},Um(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(t=>{throw Zr=null,t})}let Zr=null;function ig(e){return Zr=Zr||sg(e),Zr}/**
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
 */const og=new Vn(5e3,15e3),ag="__/auth/iframe",cg="emulator/auth/iframe",lg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},ug=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fg(e){const t=e.config;F(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?di(t,cg):`https://${e.config.authDomain}/${ag}`,r={apiKey:t.apiKey,appName:e.name,v:Vr},s=ug.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$n(r).slice(1)}`}async function dg(e){const t=await ig(e),n=Qe().gapi;return F(n,e,"internal-error"),t.open({where:document.body,url:fg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(e,"network-request-failed"),a=Qe().setTimeout(()=>{i(o)},og.get());function c(){Qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const hg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pg=500,mg=600,gg="_blank",vg="http://localhost";class ll{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _g(e,t,n,r=pg,s=mg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},hg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=be().toLowerCase();n&&(a=Lc(l)?gg:n),Mc(l)&&(t=t||vg,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,w])=>`${h}${g}=${w},`,"");if(dm(l)&&a!=="_self")return yg(t||"",a),new ll(null);const d=window.open(t||"",a,u);F(d,e,"popup-blocked");try{d.focus()}catch{}return new ll(d)}function yg(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bg="__/auth/handler",Eg="emulator/auth/handler";function ul(e,t,n,r,s,i){F(e.config.authDomain,e,"auth-domain-config-required"),F(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Vr,eventId:s};if(t instanceof zc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Xh(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(t instanceof Kn){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Ig(e)}?${$n(a).slice(1)}`}function Ig({config:e}){return e.emulator?di(e,Eg):`https://${e.authDomain}/${bg}`}/**
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
 */const Ei="webStorageSupport";class Tg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yc,this._completeRedirectFn=Gm}async _openPopup(t,n,r,s){var i;lt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ul(t,n,r,fi(),s);return _g(t,o,_i())}async _openRedirect(t,n,r,s){return await this._originValidation(t),Rm(ul(t,n,r,fi(),s)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r}async initAndGetManager(t){const n=await dg(t),r=new Ym(t);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ei,{type:Ei},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ei];o!==void 0&&n(!!o),at(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tg(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bc()||vi()||qr()}}const wg=Tg;var fl="@firebase/auth",dl="0.18.3";/**
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
 */class Cg{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var s;t(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rg(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sg(e){$r(new Hn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),F(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$c(e)},c=new mm(o,a);return qp(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),$r(new Hn("auth-internal",t=>{const n=Hc(t.getProvider("auth").getImmediate());return(r=>new Cg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(fl,dl,Rg(e)),un(fl,dl,"esm2017")}/**
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
 */function qg(e=Vp()){const t=Ec(e,"auth");return t.isInitialized()?t.getImmediate():Kp(e,{popupRedirectResolver:wg,persistence:[Dm,Tm,Yc]})}Sg("Browser");function Gg(e,t){return e.then(function(n){return[null,n]}).catch(function(n){return t&&Object.assign(n,t),[n,void 0]})}var Ag="firebase",Og="9.1.3";/**
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
 */un(Ag,Og,"app");var Pg=!1;/*!
  * pinia v2.0.0-rc.13
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const kg=Symbol();var hl;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(hl||(hl={}));function Jg(){const e=Rl(!0),t=e.run(()=>no({}));let n=[];const r=[],s=gs({install(i){s._a=i,i.provide(kg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o))},use(i){return!this._a&&!Pg?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}export{Hu as A,Uf as B,Er as C,Kg as D,qg as E,ye as F,zg as G,Hg as H,$g as I,$f as J,Wg as K,Jg as L,xg as M,Fg as N,Ng as O,Mg as P,tu as Q,Bg as R,Gg as S,oa as T,_e as a,Ug as b,Be as c,Nt as d,nt as e,Vg as f,no as g,vu as h,Ke as i,ho as j,Fo as k,ft as l,Yt as m,Bs as n,fe as o,Ge as p,Os as q,Cn as r,gn as s,Ri as t,jg as u,Lg as v,Sr as w,Dg as x,In as y,ks as z};
