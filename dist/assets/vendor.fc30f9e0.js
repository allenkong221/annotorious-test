function rr(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ml=rr(pl);function Hi(e){return!!e||e===""}function ir(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ve(s)?vl(s):ir(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(ve(e))return e;if(pe(e))return e}}const gl=/;(?![^(]*\))/g,_l=/:(.+)/;function vl(e){const t={};return e.split(gl).forEach(n=>{if(n){const s=n.split(_l);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function or(e){let t="";if(ve(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const s=or(e[n]);s&&(t+=s+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vi=e=>e==null?"":F(e)||pe(e)&&(e.toString===qi||!H(e.toString))?JSON.stringify(e,ji,2):String(e),ji=(e,t)=>t&&t.__v_isRef?ji(e,t.value):Vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:zi(t)?{[`Set(${t.size})`]:[...t.values()]}:pe(t)&&!F(t)&&!Gi(t)?String(t):t,Z={},Ht=[],$e=()=>{},yl=()=>!1,bl=/^on[^a-z]/,Jn=e=>bl.test(e),ar=e=>e.startsWith("onUpdate:"),_e=Object.assign,Wi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},El=Object.prototype.hasOwnProperty,G=(e,t)=>El.call(e,t),F=Array.isArray,Vt=e=>Yn(e)==="[object Map]",zi=e=>Yn(e)==="[object Set]",H=e=>typeof e=="function",ve=e=>typeof e=="string",cr=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Ki=e=>pe(e)&&H(e.then)&&H(e.catch),qi=Object.prototype.toString,Yn=e=>qi.call(e),Il=e=>Yn(e).slice(8,-1),Gi=e=>Yn(e)==="[object Object]",lr=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xn=rr(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wl=/-(\w)/g,We=Qn(e=>e.replace(wl,(t,n)=>n?n.toUpperCase():"")),Tl=/\B([A-Z])/g,jt=Qn(e=>e.replace(Tl,"-$1").toLowerCase()),Zn=Qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),es=Qn(e=>e?`on${Zn(e)}`:""),hn=(e,t)=>!Object.is(e,t),ts=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ns=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ss=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ji;const Cl=()=>Ji||(Ji=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ze;const rs=[];class Yi{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ze&&(this.parent=ze,this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(rs.push(this),ze=this)}off(){this.active&&(rs.pop(),ze=rs[rs.length-1])}stop(t){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Rl(e){return new Yi(e)}function Sl(e,t){t=t||ze,t&&t.active&&t.effects.push(e)}function Eg(){return ze}function Ig(e){ze&&ze.cleanups.push(e)}const ur=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Xi=e=>(e.w&lt)>0,Qi=e=>(e.n&lt)>0,Al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=lt},Ol=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Xi(r)&&!Qi(r)?r.delete(e):t[n++]=r,r.w&=~lt,r.n&=~lt}t.length=n}},fr=new WeakMap;let pn=0,lt=1;const dr=30,mn=[];let wt;const Tt=Symbol(""),hr=Symbol("");class pr{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],Sl(this,s)}run(){if(!this.active)return this.fn();if(!mn.includes(this))try{return mn.push(wt=this),Pl(),lt=1<<++pn,pn<=dr?Al(this):Zi(this),this.fn()}finally{pn<=dr&&Ol(this),lt=1<<--pn,Ct(),mn.pop();const t=mn.length;wt=t>0?mn[t-1]:void 0}}stop(){this.active&&(Zi(this),this.onStop&&this.onStop(),this.active=!1)}}function Zi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Wt=!0;const mr=[];function zt(){mr.push(Wt),Wt=!1}function Pl(){mr.push(Wt),Wt=!0}function Ct(){const e=mr.pop();Wt=e===void 0?!0:e}function Se(e,t,n){if(!eo())return;let s=fr.get(e);s||fr.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=ur()),to(r)}function eo(){return Wt&&wt!==void 0}function to(e,t){let n=!1;pn<=dr?Qi(e)||(e.n|=lt,n=!Xi(e)):n=!e.has(wt),n&&(e.add(wt),wt.deps.push(e))}function Ze(e,t,n,s,r,i){const o=fr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&F(e))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":F(e)?lr(n)&&a.push(o.get("length")):(a.push(o.get(Tt)),Vt(e)&&a.push(o.get(hr)));break;case"delete":F(e)||(a.push(o.get(Tt)),Vt(e)&&a.push(o.get(hr)));break;case"set":Vt(e)&&a.push(o.get(Tt));break}if(a.length===1)a[0]&&gr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);gr(ur(c))}}function gr(e,t){for(const n of F(e)?e:[...e])(n!==wt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const kl=rr("__proto__,__v_isRef,__isVue"),no=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(cr)),Nl=_r(),Ml=_r(!1,!0),Ll=_r(!0),so=Dl();function Dl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=q(this);for(let i=0,o=this.length;i<o;i++)Se(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(q)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){zt();const s=q(this)[t].apply(this,n);return Ct(),s}}),e}function _r(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_raw"&&i===(e?t?Xl:ho:t?fo:uo).get(s))return s;const o=F(s);if(!e&&o&&G(so,r))return Reflect.get(so,r,i);const a=Reflect.get(s,r,i);return(cr(r)?no.has(r):kl(r))||(e||Se(s,"get",r),t)?a:Ce(a)?!o||!lr(r)?a.value:a:pe(a)?e?po(a):gn(a):a}}const xl=ro(),$l=ro(!0);function ro(e=!1){return function(n,s,r,i){let o=n[s];if(!e&&(r=q(r),o=q(o),!F(n)&&Ce(o)&&!Ce(r)))return o.value=r,!0;const a=F(n)&&lr(s)?Number(s)<n.length:G(n,s),c=Reflect.set(n,s,r,i);return n===q(i)&&(a?hn(r,o)&&Ze(n,"set",s,r):Ze(n,"add",s,r)),c}}function Ul(e,t){const n=G(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Ze(e,"delete",t,void 0),s}function Fl(e,t){const n=Reflect.has(e,t);return(!cr(t)||!no.has(t))&&Se(e,"has",t),n}function Bl(e){return Se(e,"iterate",F(e)?"length":Tt),Reflect.ownKeys(e)}const io={get:Nl,set:xl,deleteProperty:Ul,has:Fl,ownKeys:Bl},Hl={get:Ll,set(e,t){return!0},deleteProperty(e,t){return!0}},Vl=_e({},io,{get:Ml,set:$l}),vr=e=>e,is=e=>Reflect.getPrototypeOf(e);function os(e,t,n=!1,s=!1){e=e.__v_raw;const r=q(e),i=q(t);t!==i&&!n&&Se(r,"get",t),!n&&Se(r,"get",i);const{has:o}=is(r),a=s?vr:n?Ir:_n;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function as(e,t=!1){const n=this.__v_raw,s=q(n),r=q(e);return e!==r&&!t&&Se(s,"has",e),!t&&Se(s,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function cs(e,t=!1){return e=e.__v_raw,!t&&Se(q(e),"iterate",Tt),Reflect.get(e,"size",e)}function oo(e){e=q(e);const t=q(this);return is(t).has.call(t,e)||(t.add(e),Ze(t,"add",e,e)),this}function ao(e,t){t=q(t);const n=q(this),{has:s,get:r}=is(n);let i=s.call(n,e);i||(e=q(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?hn(t,o)&&Ze(n,"set",e,t):Ze(n,"add",e,t),this}function co(e){const t=q(this),{has:n,get:s}=is(t);let r=n.call(t,e);r||(e=q(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&Ze(t,"delete",e,void 0),i}function lo(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Ze(e,"clear",void 0,void 0),n}function ls(e,t){return function(s,r){const i=this,o=i.__v_raw,a=q(o),c=t?vr:e?Ir:_n;return!e&&Se(a,"iterate",Tt),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function us(e,t,n){return function(...s){const r=this.__v_raw,i=q(r),o=Vt(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...s),u=n?vr:t?Ir:_n;return!t&&Se(i,"iterate",c?hr:Tt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function ut(e){return function(...t){return e==="delete"?!1:this}}function jl(){const e={get(i){return os(this,i)},get size(){return cs(this)},has:as,add:oo,set:ao,delete:co,clear:lo,forEach:ls(!1,!1)},t={get(i){return os(this,i,!1,!0)},get size(){return cs(this)},has:as,add:oo,set:ao,delete:co,clear:lo,forEach:ls(!1,!0)},n={get(i){return os(this,i,!0)},get size(){return cs(this,!0)},has(i){return as.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ls(!0,!1)},s={get(i){return os(this,i,!0,!0)},get size(){return cs(this,!0)},has(i){return as.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=us(i,!1,!1),n[i]=us(i,!0,!1),t[i]=us(i,!1,!0),s[i]=us(i,!0,!0)}),[e,n,t,s]}const[Wl,zl,Kl,ql]=jl();function yr(e,t){const n=t?e?ql:Kl:e?zl:Wl;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(G(n,r)&&r in s?n:s,r,i)}const Gl={get:yr(!1,!1)},Jl={get:yr(!1,!0)},Yl={get:yr(!0,!1)},uo=new WeakMap,fo=new WeakMap,ho=new WeakMap,Xl=new WeakMap;function Ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ql(Il(e))}function gn(e){return e&&e.__v_isReadonly?e:br(e,!1,io,Gl,uo)}function eu(e){return br(e,!1,Vl,Jl,fo)}function po(e){return br(e,!0,Hl,Yl,ho)}function br(e,t,n,s,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Zl(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function Kt(e){return mo(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function mo(e){return!!(e&&e.__v_isReadonly)}function go(e){return Kt(e)||mo(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Er(e){return ns(e,"__v_skip",!0),e}const _n=e=>pe(e)?gn(e):e,Ir=e=>pe(e)?po(e):e;function _o(e){eo()&&(e=q(e),e.dep||(e.dep=ur()),to(e.dep))}function vo(e,t){e=q(e),e.dep&&gr(e.dep)}function Ce(e){return Boolean(e&&e.__v_isRef===!0)}function yo(e){return bo(e,!1)}function tu(e){return bo(e,!0)}function bo(e,t){return Ce(e)?e:new nu(e,t)}class nu{constructor(t,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:_n(t)}get value(){return _o(this),this._value}set value(t){t=this._shallow?t:q(t),hn(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:_n(t),vo(this))}}function qt(e){return Ce(e)?e.value:e}const su={get:(e,t,n)=>qt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Ce(r)&&!Ce(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Eo(e){return Kt(e)?e:new Proxy(e,su)}class ru{constructor(t,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new pr(t,()=>{this._dirty||(this._dirty=!0,vo(this))}),this.__v_isReadonly=s}get value(){const t=q(this);return _o(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ke(e,t){let n,s;const r=H(e);return r?(n=e,s=$e):(n=e.get,s=e.set),new ru(n,s,r||!s)}Promise.resolve();function iu(e,t,...n){const s=e.vnode.props||Z;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Z;h?r=n.map(g=>g.trim()):d&&(r=n.map(ss))}let a,c=s[a=es(t)]||s[a=es(We(t))];!c&&i&&(c=s[a=es(jt(t))]),c&&De(c,e,6,r);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,De(l,e,6,r)}}function Io(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!H(e)){const c=l=>{const u=Io(l,t,!0);u&&(a=!0,_e(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(s.set(e,null),null):(F(i)?i.forEach(c=>o[c]=null):_e(o,i),s.set(e,o),o)}function wr(e,t){return!e||!Jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,jt(t))||G(e,t))}let Ae=null,fs=null;function ds(e){const t=Ae;return Ae=e,fs=e&&e.type.__scopeId||null,t}function wg(e){fs=e}function Tg(){fs=null}function vn(e,t=Ae,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Xo(-1);const i=ds(t),o=e(...r);return ds(i),s._d&&Xo(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Tr(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:g,ctx:T,inheritAttrs:D}=e;let S,A;const x=ds(e);try{if(n.shapeFlag&4){const j=r||s;S=Ge(u.call(j,j,d,i,g,h,T)),A=c}else{const j=t;S=Ge(j.length>1?j(i,{attrs:c,slots:a,emit:l}):j(i,null)),A=t.props?c:ou(c)}}catch(j){In.length=0,Rs(j,e,1),S=fe(Fe)}let V=S;if(A&&D!==!1){const j=Object.keys(A),{shapeFlag:te}=V;j.length&&te&(1|6)&&(o&&j.some(ar)&&(A=au(A,o)),V=Gt(V,A))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),S=V,ds(x),S}const ou=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jn(n))&&((t||(t={}))[n]=e[n]);return t},au=(e,t)=>{const n={};for(const s in e)(!ar(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function cu(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?wo(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!wr(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?wo(s,o,l):!0:!!o;return!1}function wo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!wr(n,i))return!0}return!1}function lu({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const uu=e=>e.__isSuspense;function fu(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):sf(e)}function hs(e,t){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[e]=t}}function Ue(e,t,n=!1){const s=ye||Ae;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&H(t)?t.call(s.proxy):t}}function To(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Oo(()=>{e.isMounted=!0}),ko(()=>{e.isUnmounting=!0}),e}const Le=[Function,Array],du={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Le,onEnter:Le,onAfterEnter:Le,onEnterCancelled:Le,onBeforeLeave:Le,onLeave:Le,onAfterLeave:Le,onLeaveCancelled:Le,onBeforeAppear:Le,onAppear:Le,onAfterAppear:Le,onAppearCancelled:Le},setup(e,{slots:t}){const n=Fr(),s=To();let r;return()=>{const i=t.default&&Rr(t.default(),!0);if(!i||!i.length)return;const o=q(e),{mode:a}=o,c=i[0];if(s.isLeaving)return Cr(c);const l=So(c);if(!l)return Cr(c);const u=yn(l,o,s,n);bn(l,u);const d=n.subTree,h=d&&So(d);let g=!1;const{getTransitionKey:T}=l.type;if(T){const D=T();r===void 0?r=D:D!==r&&(r=D,g=!0)}if(h&&h.type!==Fe&&(!Ot(l,h)||g)){const D=yn(h,o,s,n);if(bn(h,D),a==="out-in")return s.isLeaving=!0,D.afterLeave=()=>{s.isLeaving=!1,n.update()},Cr(c);a==="in-out"&&l.type!==Fe&&(D.delayLeave=(S,A,x)=>{const V=Ro(s,h);V[String(h.key)]=h,S._leaveCb=()=>{A(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return c}}},Co=du;function Ro(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function yn(e,t,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:T,onBeforeAppear:D,onAppear:S,onAfterAppear:A,onAppearCancelled:x}=t,V=String(e.key),j=Ro(n,e),te=(W,ce)=>{W&&De(W,s,9,ce)},ae={mode:i,persisted:o,beforeEnter(W){let ce=a;if(!n.isMounted)if(r)ce=D||a;else return;W._leaveCb&&W._leaveCb(!0);const J=j[V];J&&Ot(e,J)&&J.el._leaveCb&&J.el._leaveCb(),te(ce,[W])},enter(W){let ce=c,J=l,me=u;if(!n.isMounted)if(r)ce=S||c,J=A||l,me=x||u;else return;let ge=!1;const k=W._enterCb=le=>{ge||(ge=!0,le?te(me,[W]):te(J,[W]),ae.delayedLeave&&ae.delayedLeave(),W._enterCb=void 0)};ce?(ce(W,k),ce.length<=1&&k()):k()},leave(W,ce){const J=String(e.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return ce();te(d,[W]);let me=!1;const ge=W._leaveCb=k=>{me||(me=!0,ce(),k?te(T,[W]):te(g,[W]),W._leaveCb=void 0,j[J]===e&&delete j[J])};j[J]=e,h?(h(W,ge),h.length<=1&&ge()):ge()},clone(W){return yn(W,t,n,s)}};return ae}function Cr(e){if(ps(e))return e=Gt(e),e.children=null,e}function So(e){return ps(e)?e.children?e.children[0]:void 0:e}function bn(e,t){e.shapeFlag&6&&e.component?bn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Rr(e,t=!1){let n=[],s=0;for(let r=0;r<e.length;r++){const i=e[r];i.type===be?(i.patchFlag&128&&s++,n=n.concat(Rr(i.children,t))):(t||i.type!==Fe)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function et(e){return H(e)?{setup:e,name:e.name}:e}const Sr=e=>!!e.type.__asyncLoader,ps=e=>e.type.__isKeepAlive;function hu(e,t){Ao(e,"a",t)}function pu(e,t){Ao(e,"da",t)}function Ao(e,t,n=ye){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}e()});if(ms(t,s,n),n){let r=n.parent;for(;r&&r.parent;)ps(r.parent.vnode)&&mu(s,t,n,r),r=r.parent}}function mu(e,t,n,s){const r=ms(t,e,s,!0);No(()=>{Wi(s[t],r)},n)}function ms(e,t,n=ye,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;zt(),Jt(n);const a=De(t,n,e,o);return Pt(),Ct(),a});return s?r.unshift(i):r.push(i),i}}const tt=e=>(t,n=ye)=>(!Cs||e==="sp")&&ms(e,t,n),gu=tt("bm"),Oo=tt("m"),_u=tt("bu"),Po=tt("u"),ko=tt("bum"),No=tt("um"),vu=tt("sp"),yu=tt("rtg"),bu=tt("rtc");function Eu(e,t=ye){ms("ec",e,t)}let Ar=!0;function Iu(e){const t=Do(e),n=e.proxy,s=e.ctx;Ar=!1,t.beforeCreate&&Mo(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:T,activated:D,deactivated:S,beforeDestroy:A,beforeUnmount:x,destroyed:V,unmounted:j,render:te,renderTracked:ae,renderTriggered:W,errorCaptured:ce,serverPrefetch:J,expose:me,inheritAttrs:ge,components:k,directives:le,filters:Te}=t;if(l&&wu(l,s,null,e.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Y=o[ne];H(Y)&&(s[ne]=Y.bind(n))}if(r){const ne=r.call(n,n);pe(ne)&&(e.data=gn(ne))}if(Ar=!0,i)for(const ne in i){const Y=i[ne],Ne=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):$e,Ft=!H(Y)&&H(Y.set)?Y.set.bind(n):$e,Qe=Ke({get:Ne,set:Ft});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Ve=>Qe.value=Ve})}if(a)for(const ne in a)Lo(a[ne],s,n,ne);if(c){const ne=H(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Y=>{hs(Y,ne[Y])})}u&&Mo(u,e,"c");function ue(ne,Y){F(Y)?Y.forEach(Ne=>ne(Ne.bind(n))):Y&&ne(Y.bind(n))}if(ue(gu,d),ue(Oo,h),ue(_u,g),ue(Po,T),ue(hu,D),ue(pu,S),ue(Eu,ce),ue(bu,ae),ue(yu,W),ue(ko,x),ue(No,j),ue(vu,J),F(me))if(me.length){const ne=e.exposed||(e.exposed={});me.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>n[Y],set:Ne=>n[Y]=Ne})})}else e.exposed||(e.exposed={});te&&e.render===$e&&(e.render=te),ge!=null&&(e.inheritAttrs=ge),k&&(e.components=k),le&&(e.directives=le)}function wu(e,t,n=$e,s=!1){F(e)&&(e=Or(e));for(const r in e){const i=e[r];let o;pe(i)?"default"in i?o=Ue(i.from||r,i.default,!0):o=Ue(i.from||r):o=Ue(i),Ce(o)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function Mo(e,t,n){De(F(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Lo(e,t,n,s){const r=s.includes(".")?ma(n,s):()=>n[s];if(ve(e)){const i=t[e];H(i)&&As(r,i)}else if(H(e))As(r,e.bind(n));else if(pe(e))if(F(e))e.forEach(i=>Lo(i,t,n,s));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&As(r,i,e)}}function Do(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(l=>gs(c,l,o,!0)),gs(c,t,o)),i.set(t,c),c}function gs(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&gs(e,i,n,!0),r&&r.forEach(o=>gs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Tu[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Tu={data:xo,props:Rt,emits:Rt,methods:Rt,computed:Rt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Rt,directives:Rt,watch:Ru,provide:xo,inject:Cu};function xo(e,t){return t?e?function(){return _e(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Cu(e,t){return Rt(Or(e),Or(t))}function Or(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Rt(e,t){return e?_e(_e(Object.create(null),e),t):t}function Ru(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const s in t)n[s]=Ie(e[s],t[s]);return n}function Su(e,t,n,s=!1){const r={},i={};ns(i,bs,1),e.propsDefaults=Object.create(null),$o(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:eu(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Au(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=q(r),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const g=t[h];if(c)if(G(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const T=We(h);r[T]=Pr(c,a,T,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{$o(e,t,r,i)&&(l=!0);let u;for(const d in a)(!t||!G(t,d)&&((u=jt(d))===d||!G(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Pr(c,a,d,void 0,e,!0)):delete r[d]);if(i!==a)for(const d in i)(!t||!G(t,d))&&(delete i[d],l=!0)}l&&Ze(e,"set","$attrs")}function $o(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Xn(c))continue;const l=t[c];let u;r&&G(r,u=We(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:wr(e.emitsOptions,c)||l!==s[c]&&(s[c]=l,o=!0)}if(i){const c=q(n),l=a||Z;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Pr(r,c,d,l[d],e,!G(l,d))}}return o}function Pr(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=G(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Jt(r),s=l[n]=c.call(null,t),Pt())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===jt(n))&&(s=!0))}return s}function Uo(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!H(e)){const u=d=>{c=!0;const[h,g]=Uo(d,t,!0);_e(o,h),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return s.set(e,Ht),Ht;if(F(i))for(let u=0;u<i.length;u++){const d=We(i[u]);Fo(d)&&(o[d]=Z)}else if(i)for(const u in i){const d=We(u);if(Fo(d)){const h=i[u],g=o[d]=F(h)||H(h)?{type:h}:h;if(g){const T=Vo(Boolean,g.type),D=Vo(String,g.type);g[0]=T>-1,g[1]=D<0||T<D,(T>-1||G(g,"default"))&&a.push(d)}}}const l=[o,a];return s.set(e,l),l}function Fo(e){return e[0]!=="$"}function Bo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ho(e,t){return Bo(e)===Bo(t)}function Vo(e,t){return F(t)?t.findIndex(n=>Ho(n,e)):H(t)&&Ho(t,e)?0:-1}const jo=e=>e[0]==="_"||e==="$stable",kr=e=>F(e)?e.map(Ge):[Ge(e)],Ou=(e,t,n)=>{const s=vn((...r)=>kr(t(...r)),n);return s._c=!1,s},Wo=(e,t,n)=>{const s=e._ctx;for(const r in e){if(jo(r))continue;const i=e[r];if(H(i))t[r]=Ou(r,i,s);else if(i!=null){const o=kr(i);t[r]=()=>o}}},zo=(e,t)=>{const n=kr(t);e.slots.default=()=>n},Pu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),ns(t,"_",n)):Wo(t,e.slots={})}else e.slots={},t&&zo(e,t);ns(e.slots,bs,1)},ku=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=Z;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(_e(r,t),!n&&a===1&&delete r._):(i=!t.$stable,Wo(t,r)),o=t}else t&&(zo(e,t),o={default:1});if(i)for(const a in r)!jo(a)&&!(a in o)&&delete r[a]};function Cg(e,t){const n=Ae;if(n===null)return e;const s=n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=Z]=t[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&kt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return e}function St(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(zt(),De(c,n,8,[e.el,a,e,t]),Ct())}}function Ko(){return{app:null,config:{isNativeTag:yl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nu=0;function Mu(e,t){return function(s,r=null){r!=null&&!pe(r)&&(r=null);const i=Ko(),o=new Set;let a=!1;const c=i.app={_uid:Nu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:of,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=fe(s,r);return h.appContext=i,u&&t?t(h,l):e(h,l,d),a=!0,c._container=l,l.__vue_app__=c,Br(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}const we=fu;function Lu(e){return Du(e)}function Du(e,t){const n=Cl();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=$e,cloneNode:T,insertStaticContent:D}=e,S=(f,p,m,y=null,v=null,w=null,R=!1,E=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ot(f,p)&&(y=N(f),Me(f,v,w,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:b,ref:M,shapeFlag:O}=p;switch(b){case Dr:A(f,p,m,y);break;case Fe:x(f,p,m,y);break;case _s:f==null&&V(p,m,y,R);break;case be:le(f,p,m,y,v,w,R,E,I);break;default:O&1?ae(f,p,m,y,v,w,R,E,I):O&6?Te(f,p,m,y,v,w,R,E,I):(O&64||O&128)&&b.process(f,p,m,y,v,w,R,E,I,se)}M!=null&&v&&Nr(M,f&&f.ref,w,p||f,!p)},A=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const v=p.el=f.el;p.children!==f.children&&l(v,p.children)}},x=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},V=(f,p,m,y)=>{[f.el,f.anchor]=D(f.children,p,m,y)},j=({el:f,anchor:p},m,y)=>{let v;for(;f&&f!==p;)v=h(f),s(f,m,y),f=v;s(p,m,y)},te=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=h(f),r(f),f=m;r(p)},ae=(f,p,m,y,v,w,R,E,I)=>{R=R||p.type==="svg",f==null?W(p,m,y,v,w,R,E,I):me(f,p,v,w,R,E,I)},W=(f,p,m,y,v,w,R,E)=>{let I,b;const{type:M,props:O,shapeFlag:L,transition:U,patchFlag:K,dirs:oe}=f;if(f.el&&T!==void 0&&K===-1)I=f.el=T(f.el);else{if(I=f.el=o(f.type,w,O&&O.is,O),L&8?u(I,f.children):L&16&&J(f.children,I,null,y,v,w&&M!=="foreignObject",R,E),oe&&St(f,null,y,"created"),O){for(const ie in O)ie!=="value"&&!Xn(ie)&&i(I,ie,null,O[ie],w,f.children,y,v,C);"value"in O&&i(I,"value",null,O.value),(b=O.onVnodeBeforeMount)&&qe(b,y,f)}ce(I,f,f.scopeId,R,y)}oe&&St(f,null,y,"beforeMount");const Q=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;Q&&U.beforeEnter(I),s(I,p,m),((b=O&&O.onVnodeMounted)||Q||oe)&&we(()=>{b&&qe(b,y,f),Q&&U.enter(I),oe&&St(f,null,y,"mounted")},v)},ce=(f,p,m,y,v)=>{if(m&&g(f,m),y)for(let w=0;w<y.length;w++)g(f,y[w]);if(v){let w=v.subTree;if(p===w){const R=v.vnode;ce(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},J=(f,p,m,y,v,w,R,E,I=0)=>{for(let b=I;b<f.length;b++){const M=f[b]=E?ft(f[b]):Ge(f[b]);S(null,M,p,m,y,v,w,R,E)}},me=(f,p,m,y,v,w,R)=>{const E=p.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:M}=p;I|=f.patchFlag&16;const O=f.props||Z,L=p.props||Z;let U;(U=L.onVnodeBeforeUpdate)&&qe(U,m,p,f),M&&St(p,f,m,"beforeUpdate");const K=v&&p.type!=="foreignObject";if(b?ge(f.dynamicChildren,b,E,m,y,K,w):R||Ne(f,p,E,null,m,y,K,w,!1),I>0){if(I&16)k(E,p,O,L,m,y,v);else if(I&2&&O.class!==L.class&&i(E,"class",null,L.class,v),I&4&&i(E,"style",O.style,L.style,v),I&8){const oe=p.dynamicProps;for(let Q=0;Q<oe.length;Q++){const ie=oe[Q],xe=O[ie],Bt=L[ie];(Bt!==xe||ie==="value")&&i(E,ie,xe,Bt,v,f.children,m,y,C)}}I&1&&f.children!==p.children&&u(E,p.children)}else!R&&b==null&&k(E,p,O,L,m,y,v);((U=L.onVnodeUpdated)||M)&&we(()=>{U&&qe(U,m,p,f),M&&St(p,f,m,"updated")},y)},ge=(f,p,m,y,v,w,R)=>{for(let E=0;E<p.length;E++){const I=f[E],b=p[E],M=I.el&&(I.type===be||!Ot(I,b)||I.shapeFlag&(6|64))?d(I.el):m;S(I,b,M,null,y,v,w,R,!0)}},k=(f,p,m,y,v,w,R)=>{if(m!==y){for(const E in y){if(Xn(E))continue;const I=y[E],b=m[E];I!==b&&E!=="value"&&i(f,E,b,I,R,p.children,v,w,C)}if(m!==Z)for(const E in m)!Xn(E)&&!(E in y)&&i(f,E,m[E],null,R,p.children,v,w,C);"value"in y&&i(f,"value",m.value,y.value)}},le=(f,p,m,y,v,w,R,E,I)=>{const b=p.el=f?f.el:a(""),M=p.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:U}=p;U&&(E=E?E.concat(U):U),f==null?(s(b,m,y),s(M,m,y),J(p.children,m,M,v,w,R,E,I)):O>0&&O&64&&L&&f.dynamicChildren?(ge(f.dynamicChildren,L,m,v,w,R,E),(p.key!=null||v&&p===v.subTree)&&qo(f,p,!0)):Ne(f,p,m,M,v,w,R,E,I)},Te=(f,p,m,y,v,w,R,E,I)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?v.ctx.activate(p,m,y,R,I):Xe(p,m,y,v,w,R,I):ue(f,p,I)},Xe=(f,p,m,y,v,w,R)=>{const E=f.component=Ku(f,y,v);if(ps(f)&&(E.ctx.renderer=se),qu(E),E.asyncDep){if(v&&v.registerDep(E,ne),!f.el){const I=E.subTree=fe(Fe);x(null,I,p,m)}return}ne(E,f,p,m,v,w,R)},ue=(f,p,m)=>{const y=p.component=f.component;if(cu(f,p,m))if(y.asyncDep&&!y.asyncResolved){Y(y,p,m);return}else y.next=p,tf(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},ne=(f,p,m,y,v,w,R)=>{const E=()=>{if(f.isMounted){let{next:M,bu:O,u:L,parent:U,vnode:K}=f,oe=M,Q;I.allowRecurse=!1,M?(M.el=K.el,Y(f,M,R)):M=K,O&&ts(O),(Q=M.props&&M.props.onVnodeBeforeUpdate)&&qe(Q,U,M,K),I.allowRecurse=!0;const ie=Tr(f),xe=f.subTree;f.subTree=ie,S(xe,ie,d(xe.el),N(xe),f,v,w),M.el=ie.el,oe===null&&lu(f,ie.el),L&&we(L,v),(Q=M.props&&M.props.onVnodeUpdated)&&we(()=>qe(Q,U,M,K),v)}else{let M;const{el:O,props:L}=p,{bm:U,m:K,parent:oe}=f,Q=Sr(p);if(I.allowRecurse=!1,U&&ts(U),!Q&&(M=L&&L.onVnodeBeforeMount)&&qe(M,oe,p),I.allowRecurse=!0,O&&B){const ie=()=>{f.subTree=Tr(f),B(O,f.subTree,f,v,null)};Q?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=Tr(f);S(null,ie,m,y,f,v,w),p.el=ie.el}if(K&&we(K,v),!Q&&(M=L&&L.onVnodeMounted)){const ie=p;we(()=>qe(M,oe,ie),v)}p.shapeFlag&256&&f.a&&we(f.a,v),f.isMounted=!0,p=m=y=null}},I=new pr(E,()=>ca(f.update),f.scope),b=f.update=I.run.bind(I);b.id=f.uid,I.allowRecurse=b.allowRecurse=!0,b()},Y=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Au(f,p.props,y,m),ku(f,p.children,m),zt(),zr(void 0,f.update),Ct()},Ne=(f,p,m,y,v,w,R,E,I=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,O=p.children,{patchFlag:L,shapeFlag:U}=p;if(L>0){if(L&128){Qe(b,O,m,y,v,w,R,E,I);return}else if(L&256){Ft(b,O,m,y,v,w,R,E,I);return}}U&8?(M&16&&C(b,v,w),O!==b&&u(m,O)):M&16?U&16?Qe(b,O,m,y,v,w,R,E,I):C(b,v,w,!0):(M&8&&u(m,""),U&16&&J(O,m,y,v,w,R,E,I))},Ft=(f,p,m,y,v,w,R,E,I)=>{f=f||Ht,p=p||Ht;const b=f.length,M=p.length,O=Math.min(b,M);let L;for(L=0;L<O;L++){const U=p[L]=I?ft(p[L]):Ge(p[L]);S(f[L],U,m,null,v,w,R,E,I)}b>M?C(f,v,w,!0,!1,O):J(p,m,y,v,w,R,E,I,O)},Qe=(f,p,m,y,v,w,R,E,I)=>{let b=0;const M=p.length;let O=f.length-1,L=M-1;for(;b<=O&&b<=L;){const U=f[b],K=p[b]=I?ft(p[b]):Ge(p[b]);if(Ot(U,K))S(U,K,m,null,v,w,R,E,I);else break;b++}for(;b<=O&&b<=L;){const U=f[O],K=p[L]=I?ft(p[L]):Ge(p[L]);if(Ot(U,K))S(U,K,m,null,v,w,R,E,I);else break;O--,L--}if(b>O){if(b<=L){const U=L+1,K=U<M?p[U].el:y;for(;b<=L;)S(null,p[b]=I?ft(p[b]):Ge(p[b]),m,K,v,w,R,E,I),b++}}else if(b>L)for(;b<=O;)Me(f[b],v,w,!0),b++;else{const U=b,K=b,oe=new Map;for(b=K;b<=L;b++){const Re=p[b]=I?ft(p[b]):Ge(p[b]);Re.key!=null&&oe.set(Re.key,b)}let Q,ie=0;const xe=L-K+1;let Bt=!1,Ui=0;const dn=new Array(xe);for(b=0;b<xe;b++)dn[b]=0;for(b=U;b<=O;b++){const Re=f[b];if(ie>=xe){Me(Re,v,w,!0);continue}let je;if(Re.key!=null)je=oe.get(Re.key);else for(Q=K;Q<=L;Q++)if(dn[Q-K]===0&&Ot(Re,p[Q])){je=Q;break}je===void 0?Me(Re,v,w,!0):(dn[je-K]=b+1,je>=Ui?Ui=je:Bt=!0,S(Re,p[je],m,null,v,w,R,E,I),ie++)}const Fi=Bt?xu(dn):Ht;for(Q=Fi.length-1,b=xe-1;b>=0;b--){const Re=K+b,je=p[Re],Bi=Re+1<M?p[Re+1].el:y;dn[b]===0?S(null,je,m,Bi,v,w,R,E,I):Bt&&(Q<0||b!==Fi[Q]?Ve(je,m,Bi,2):Q--)}}},Ve=(f,p,m,y,v=null)=>{const{el:w,type:R,transition:E,children:I,shapeFlag:b}=f;if(b&6){Ve(f.component.subTree,p,m,y);return}if(b&128){f.suspense.move(p,m,y);return}if(b&64){R.move(f,p,m,se);return}if(R===be){s(w,p,m);for(let O=0;O<I.length;O++)Ve(I[O],p,m,y);s(f.anchor,p,m);return}if(R===_s){j(f,p,m);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(w),s(w,p,m),we(()=>E.enter(w),v);else{const{leave:O,delayLeave:L,afterLeave:U}=E,K=()=>s(w,p,m),oe=()=>{O(w,()=>{K(),U&&U()})};L?L(w,K,oe):oe()}else s(w,p,m)},Me=(f,p,m,y=!1,v=!1)=>{const{type:w,props:R,ref:E,children:I,dynamicChildren:b,shapeFlag:M,patchFlag:O,dirs:L}=f;if(E!=null&&Nr(E,null,m,f,!0),M&256){p.ctx.deactivate(f);return}const U=M&1&&L,K=!Sr(f);let oe;if(K&&(oe=R&&R.onVnodeBeforeUnmount)&&qe(oe,p,f),M&6)P(f.component,m,y);else{if(M&128){f.suspense.unmount(m,y);return}U&&St(f,null,p,"beforeUnmount"),M&64?f.type.remove(f,p,m,v,se,y):b&&(w!==be||O>0&&O&64)?C(b,p,m,!1,!0):(w===be&&O&(128|256)||!v&&M&16)&&C(I,p,m),y&&sr(f)}(K&&(oe=R&&R.onVnodeUnmounted)||U)&&we(()=>{oe&&qe(oe,p,f),U&&St(f,null,p,"unmounted")},m)},sr=f=>{const{type:p,el:m,anchor:y,transition:v}=f;if(p===be){_(m,y);return}if(p===_s){te(f);return}const w=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:E}=v,I=()=>R(m,w);E?E(f.el,w,I):I()}else w()},_=(f,p)=>{let m;for(;f!==p;)m=h(f),r(f),f=m;r(p)},P=(f,p,m)=>{const{bum:y,scope:v,update:w,subTree:R,um:E}=f;y&&ts(y),v.stop(),w&&(w.active=!1,Me(R,f,p,m)),E&&we(E,p),we(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(f,p,m,y=!1,v=!1,w=0)=>{for(let R=w;R<f.length;R++)Me(f[R],p,m,y,v)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),X=(f,p,m)=>{f==null?p._vnode&&Me(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,m),fa(),p._vnode=f},se={p:S,um:Me,m:Ve,r:sr,mt:Xe,mc:J,pc:Ne,pbc:ge,n:N,o:e};let z,B;return t&&([z,B]=t(se)),{render:X,hydrate:z,createApp:Mu(X,z)}}function Nr(e,t,n,s,r=!1){if(F(e)){e.forEach((h,g)=>Nr(h,t&&(F(t)?t[g]:t),n,s,r));return}if(Sr(s)&&!r)return;const i=s.shapeFlag&4?Br(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===Z?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ve(l)?(u[l]=null,G(d,l)&&(d[l]=null)):Ce(l)&&(l.value=null)),ve(c)){const h=()=>{u[c]=o,G(d,c)&&(d[c]=o)};o?(h.id=-1,we(h,n)):h()}else if(Ce(c)){const h=()=>{c.value=o};o?(h.id=-1,we(h,n)):h()}else H(c)&&dt(c,a,12,[o,u])}function qe(e,t,n,s=null){De(e,t,7,[n,s])}function qo(e,t,n=!1){const s=e.children,r=t.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ft(r[i]),a.el=o.el),n||qo(o,a))}}function xu(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(r=n[n.length-1],e[r]<l){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const $u=e=>e.__isTeleport,Mr="components";function En(e,t){return Jo(Mr,e,!0,t)||e}const Go=Symbol();function Lr(e){return ve(e)?Jo(Mr,e,!1)||e:e||Go}function Jo(e,t,n=!0,s=!1){const r=Ae||ye;if(r){const i=r.type;if(e===Mr){const a=Xu(i);if(a&&(a===t||a===We(t)||a===Zn(We(t))))return i}const o=Yo(r[e]||i[e],t)||Yo(r.appContext[e],t);return!o&&s?i:o}}function Yo(e,t){return e&&(e[t]||e[We(t)]||e[Zn(We(t))])}const be=Symbol(void 0),Dr=Symbol(void 0),Fe=Symbol(void 0),_s=Symbol(void 0),In=[];let At=null;function de(e=!1){In.push(At=e?null:[])}function Uu(){In.pop(),At=In[In.length-1]||null}let vs=1;function Xo(e){vs+=e}function Qo(e){return e.dynamicChildren=vs>0?At||Ht:null,Uu(),vs>0&&At&&At.push(e),e}function Rg(e,t,n,s,r,i){return Qo(ea(e,t,n,s,r,i,!0))}function he(e,t,n,s,r){return Qo(fe(e,t,n,s,r,!0))}function ys(e){return e?e.__v_isVNode===!0:!1}function Ot(e,t){return e.type===t.type&&e.key===t.key}const bs="__vInternal",Zo=({key:e})=>e!=null?e:null,Es=({ref:e})=>e!=null?ve(e)||Ce(e)||H(e)?{i:Ae,r:e}:e:null;function ea(e,t=null,n=null,s=0,r=null,i=e===be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zo(t),ref:t&&Es(t),scopeId:fs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?($r(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),vs>0&&!o&&At&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&At.push(c),c}const fe=Fu;function Fu(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Go)&&(e=Fe),ys(e)){const a=Gt(e,t,!0);return n&&$r(a,n),a}if(Qu(e)&&(e=e.__vccOpts),t){t=Bu(t);let{class:a,style:c}=t;a&&!ve(a)&&(t.class=or(a)),pe(c)&&(go(c)&&!F(c)&&(c=_e({},c)),t.style=ir(c))}const o=ve(e)?1:uu(e)?128:$u(e)?64:pe(e)?4:H(e)?2:0;return ea(e,t,n,s,r,o,i,!0)}function Bu(e){return e?go(e)||bs in e?_e({},e):e:null}function Gt(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?ws(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Zo(a),ref:t&&t.ref?n&&r?F(r)?r.concat(Es(t)):[r,Es(t)]:Es(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor}}function Is(e=" ",t=0){return fe(Dr,null,e,t)}function Sg(e,t){const n=fe(_s,null,e);return n.staticCount=t,n}function xr(e="",t=!1){return t?(de(),he(Fe,null,e)):fe(Fe,null,e)}function Ge(e){return e==null||typeof e=="boolean"?fe(Fe):F(e)?fe(be,null,e.slice()):typeof e=="object"?ft(e):fe(Dr,null,String(e))}function ft(e){return e.el===null||e.memo?e:Gt(e)}function $r(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(s&(1|64)){const r=t.default;r&&(r._c&&(r._d=!1),$r(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(bs in t)?t._ctx=Ae:r===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),s&64?(n=16,t=[Is(t)]):n=8);e.children=t,e.shapeFlag|=n}function ws(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=or([t.class,s.class]));else if(r==="style")t.style=ir([t.style,s.style]);else if(Jn(r)){const i=t[r],o=s[r];i!==o&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function ta(e,t,n,s){let r;const i=n&&n[s];if(F(e)||ve(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(pe(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=t(e[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Hu(e,t,n={},s,r){if(Ae.isCE)return fe("slot",t==="default"?null:{name:t},s&&s());let i=e[t];i&&i._c&&(i._d=!1),de();const o=i&&na(i(n)),a=he(be,{key:n.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function na(e){return e.some(t=>ys(t)?!(t.type===Fe||t.type===be&&!na(t.children)):!0)?e:null}function Vu(e){const t={};for(const n in e)t[es(n)]=e[n];return t}const Ur=e=>e?sa(e)?Br(e)||e.proxy:Ur(e.parent):null,Ts=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ur(e.parent),$root:e=>Ur(e.root),$emit:e=>e.emit,$options:e=>Do(e),$forceUpdate:e=>()=>ca(e.update),$nextTick:e=>Wr.bind(e.proxy),$watch:e=>rf.bind(e)}),ju={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 0:return s[t];case 1:return r[t];case 3:return n[t];case 2:return i[t]}else{if(s!==Z&&G(s,t))return o[t]=0,s[t];if(r!==Z&&G(r,t))return o[t]=1,r[t];if((l=e.propsOptions[0])&&G(l,t))return o[t]=2,i[t];if(n!==Z&&G(n,t))return o[t]=3,n[t];Ar&&(o[t]=4)}}const u=Ts[t];let d,h;if(u)return t==="$attrs"&&Se(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==Z&&G(n,t))return o[t]=3,n[t];if(h=c.config.globalProperties,G(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;if(r!==Z&&G(r,t))r[t]=n;else if(s!==Z&&G(s,t))s[t]=n;else if(G(e.props,t))return!1;return t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return n[o]!==void 0||e!==Z&&G(e,o)||t!==Z&&G(t,o)||(a=i[0])&&G(a,o)||G(s,o)||G(Ts,o)||G(r.config.globalProperties,o)}},Wu=Ko();let zu=0;function Ku(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Wu,i={uid:zu++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,update:null,scope:new Yi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uo(s,r),emitsOptions:Io(s,r),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=iu.bind(null,i),e.ce&&e.ce(i),i}let ye=null;const Fr=()=>ye||Ae,Jt=e=>{ye=e,e.scope.on()},Pt=()=>{ye&&ye.scope.off(),ye=null};function sa(e){return e.vnode.shapeFlag&4}let Cs=!1;function qu(e,t=!1){Cs=t;const{props:n,children:s}=e.vnode,r=sa(e);Su(e,n,r,t),Pu(e,s);const i=r?Gu(e,t):void 0;return Cs=!1,i}function Gu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Er(new Proxy(e.ctx,ju));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?Yu(e):null;Jt(e),zt();const i=dt(s,e,0,[e.props,r]);if(Ct(),Pt(),Ki(i)){if(i.then(Pt,Pt),t)return i.then(o=>{ra(e,o,t)}).catch(o=>{Rs(o,e,0)});e.asyncDep=i}else ra(e,i,t)}else oa(e,t)}function ra(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Eo(t)),oa(e,n)}let ia;function oa(e,t,n){const s=e.type;if(!e.render){if(!t&&ia&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,l=_e(_e({isCustomElement:i,delimiters:a},o),c);s.render=ia(r,l)}}e.render=s.render||$e}Jt(e),zt(),Iu(e),Ct(),Pt()}function Ju(e){return new Proxy(e.attrs,{get(t,n){return Se(e,"get","$attrs"),t[n]}})}function Yu(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Ju(e))},slots:e.slots,emit:e.emit,expose:t}}function Br(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Eo(Er(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ts)return Ts[n](e)}}))}function Xu(e){return H(e)&&e.displayName||e.name}function Qu(e){return H(e)&&"__vccOpts"in e}function dt(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){Rs(i,t,n)}return r}function De(e,t,n,s){if(H(e)){const i=dt(e,t,n,s);return i&&Ki(i)&&i.catch(o=>{Rs(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(De(e[i],t,n,s));return r}function Rs(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){dt(c,null,10,[e,o,a]);return}}Zu(e,n,r,s)}function Zu(e,t,n,s=!0){console.error(e)}let Ss=!1,Hr=!1;const Oe=[];let nt=0;const wn=[];let Tn=null,Yt=0;const Cn=[];let ht=null,Xt=0;const aa=Promise.resolve();let Vr=null,jr=null;function Wr(e){const t=Vr||aa;return e?t.then(this?e.bind(this):e):t}function ef(e){let t=nt+1,n=Oe.length;for(;t<n;){const s=t+n>>>1;Rn(Oe[s])<e?t=s+1:n=s}return t}function ca(e){(!Oe.length||!Oe.includes(e,Ss&&e.allowRecurse?nt+1:nt))&&e!==jr&&(e.id==null?Oe.push(e):Oe.splice(ef(e.id),0,e),la())}function la(){!Ss&&!Hr&&(Hr=!0,Vr=aa.then(da))}function tf(e){const t=Oe.indexOf(e);t>nt&&Oe.splice(t,1)}function ua(e,t,n,s){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),la()}function nf(e){ua(e,Tn,wn,Yt)}function sf(e){ua(e,ht,Cn,Xt)}function zr(e,t=null){if(wn.length){for(jr=t,Tn=[...new Set(wn)],wn.length=0,Yt=0;Yt<Tn.length;Yt++)Tn[Yt]();Tn=null,Yt=0,jr=null,zr(e,t)}}function fa(e){if(Cn.length){const t=[...new Set(Cn)];if(Cn.length=0,ht){ht.push(...t);return}for(ht=t,ht.sort((n,s)=>Rn(n)-Rn(s)),Xt=0;Xt<ht.length;Xt++)ht[Xt]();ht=null,Xt=0}}const Rn=e=>e.id==null?1/0:e.id;function da(e){Hr=!1,Ss=!0,zr(e),Oe.sort((n,s)=>Rn(n)-Rn(s));const t=$e;try{for(nt=0;nt<Oe.length;nt++){const n=Oe[nt];n&&n.active!==!1&&dt(n,null,14)}}finally{nt=0,Oe.length=0,fa(),Ss=!1,Vr=null,(Oe.length||wn.length||Cn.length)&&da(e)}}const ha={};function As(e,t,n){return pa(e,t,n)}function pa(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Z){const a=ye;let c,l=!1,u=!1;if(Ce(e)?(c=()=>e.value,l=!!e._shallow):Kt(e)?(c=()=>e,s=!0):F(e)?(u=!0,l=e.some(Kt),c=()=>e.map(A=>{if(Ce(A))return A.value;if(Kt(A))return kt(A);if(H(A))return dt(A,a,2)})):H(e)?t?c=()=>dt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),De(e,a,3,[h])}:c=$e,t&&s){const A=c;c=()=>kt(A())}let d,h=A=>{d=S.onStop=()=>{dt(A,a,4)}};if(Cs)return h=$e,t?n&&De(t,a,3,[c(),u?[]:void 0,h]):c(),$e;let g=u?[]:ha;const T=()=>{if(!!S.active)if(t){const A=S.run();(s||l||(u?A.some((x,V)=>hn(x,g[V])):hn(A,g)))&&(d&&d(),De(t,a,3,[A,g===ha?void 0:g,h]),g=A)}else S.run()};T.allowRecurse=!!t;let D;r==="sync"?D=T:r==="post"?D=()=>we(T,a&&a.suspense):D=()=>{!a||a.isMounted?nf(T):T()};const S=new pr(c,D);return t?n?T():g=S.run():r==="post"?we(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&Wi(a.scope.effects,S)}}function rf(e,t,n){const s=this.proxy,r=ve(e)?e.includes(".")?ma(s,e):()=>s[e]:e.bind(s,s);let i;H(t)?i=t:(i=t.handler,n=t);const o=ye;Jt(this);const a=pa(r,i.bind(s),n);return o?Jt(o):Pt(),a}function ma(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function kt(e,t){if(!pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ce(e))kt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)kt(e[n],t);else if(zi(e)||Vt(e))e.forEach(n=>{kt(n,t)});else if(Gi(e))for(const n in e)kt(e[n],t);return e}function Kr(e,t,n){const s=arguments.length;return s===2?pe(t)&&!F(t)?ys(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ys(n)&&(n=[n]),fe(e,t,n))}const of="3.2.19",af="http://www.w3.org/2000/svg",Qt=typeof document!="undefined"?document:null,ga=new Map,cf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Qt.createElementNS(af,e):Qt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Qt.createTextNode(e),createComment:e=>Qt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s){const r=n?n.previousSibling:t.lastChild;let i=ga.get(e);if(!i){const o=Qt.createElement("template");if(o.innerHTML=s?`<svg>${e}</svg>`:e,i=o.content,s){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}ga.set(e,i)}return t.insertBefore(i.cloneNode(!0),n),[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function lf(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function uf(e,t,n){const s=e.style,r=s.display;if(!n)e.removeAttribute("style");else if(ve(n))t!==n&&(s.cssText=n);else{for(const i in n)qr(s,i,n[i]);if(t&&!ve(t))for(const i in t)n[i]==null&&qr(s,i,"")}"_vod"in e&&(s.display=r)}const _a=/\s*!important$/;function qr(e,t,n){if(F(n))n.forEach(s=>qr(e,t,s));else if(t.startsWith("--"))e.setProperty(t,n);else{const s=ff(e,t);_a.test(n)?e.setProperty(jt(s),n.replace(_a,""),"important"):e[s]=n}}const va=["Webkit","Moz","ms"],Gr={};function ff(e,t){const n=Gr[t];if(n)return n;let s=We(t);if(s!=="filter"&&s in e)return Gr[t]=s;s=Zn(s);for(let r=0;r<va.length;r++){const i=va[r]+s;if(i in e)return Gr[t]=i}return t}const ya="http://www.w3.org/1999/xlink";function df(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ya,t.slice(6,t.length)):e.setAttributeNS(ya,t,n);else{const i=ml(t);n==null||i&&!Hi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function hf(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"){e._value=n;const a=n==null?"":n;e.value!==a&&(e.value=a),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const a=typeof e[t];if(a==="boolean"){e[t]=Hi(n);return}else if(n==null&&a==="string"){e[t]="",e.removeAttribute(t);return}else if(a==="number"){try{e[t]=0}catch(c){}e.removeAttribute(t);return}}try{e[t]=n}catch(a){}}let Os=Date.now,ba=!1;if(typeof window!="undefined"){Os()>document.createEvent("Event").timeStamp&&(Os=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);ba=!!(e&&Number(e[1])<=53)}let Jr=0;const pf=Promise.resolve(),mf=()=>{Jr=0},gf=()=>Jr||(pf.then(mf),Jr=Os());function Zt(e,t,n,s){e.addEventListener(t,n,s)}function _f(e,t,n,s){e.removeEventListener(t,n,s)}function vf(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=yf(t);if(s){const l=i[t]=bf(s,r);Zt(e,a,l,c)}else o&&(_f(e,a,o,c),i[t]=void 0)}}const Ea=/(?:Once|Passive|Capture)$/;function yf(e){let t;if(Ea.test(e)){t={};let n;for(;n=e.match(Ea);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[jt(e.slice(2)),t]}function bf(e,t){const n=s=>{const r=s.timeStamp||Os();(ba||r>=n.attached-1)&&De(Ef(s,n.value),t,5,[s])};return n.value=e,n.attached=gf(),n}function Ef(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s(r))}else return t}const Ia=/^on[a-z]/,If=(e,t,n,s,r=!1,i,o,a,c)=>{t==="class"?lf(e,s,r):t==="style"?uf(e,n,s):Jn(t)?ar(t)||vf(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):wf(e,t,s,r))?hf(e,t,s,i,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),df(e,t,s,r))};function wf(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Ia.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ia.test(t)&&ve(n)?!1:t in e}const pt="transition",Sn="animation",wa=(e,{slots:t})=>Kr(Co,Ra(e),t);wa.displayName="Transition";const Ta={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Tf=wa.props=_e({},Co.props,Ta),Nt=(e,t=[])=>{F(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ca=e=>e?F(e)?e.some(t=>t.length>1):e.length>1:!1;function Ra(e){const t={};for(const k in e)k in Ta||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,T=Cf(r),D=T&&T[0],S=T&&T[1],{onBeforeEnter:A,onEnter:x,onEnterCancelled:V,onLeave:j,onLeaveCancelled:te,onBeforeAppear:ae=A,onAppear:W=x,onAppearCancelled:ce=V}=t,J=(k,le,Te)=>{Mt(k,le?u:a),Mt(k,le?l:o),Te&&Te()},me=(k,le)=>{Mt(k,g),Mt(k,h),le&&le()},ge=k=>(le,Te)=>{const Xe=k?W:x,ue=()=>J(le,k,Te);Nt(Xe,[le,ue]),Sa(()=>{Mt(le,k?c:i),st(le,k?u:a),Ca(Xe)||Aa(le,s,D,ue)})};return _e(t,{onBeforeEnter(k){Nt(A,[k]),st(k,i),st(k,o)},onBeforeAppear(k){Nt(ae,[k]),st(k,c),st(k,l)},onEnter:ge(!1),onAppear:ge(!0),onLeave(k,le){const Te=()=>me(k,le);st(k,d),Na(),st(k,h),Sa(()=>{Mt(k,d),st(k,g),Ca(j)||Aa(k,s,S,Te)}),Nt(j,[k,Te])},onEnterCancelled(k){J(k,!1),Nt(V,[k])},onAppearCancelled(k){J(k,!0),Nt(ce,[k])},onLeaveCancelled(k){me(k),Nt(te,[k])}})}function Cf(e){if(e==null)return null;if(pe(e))return[Yr(e.enter),Yr(e.leave)];{const t=Yr(e);return[t,t]}}function Yr(e){return ss(e)}function st(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Mt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Sa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Rf=0;function Aa(e,t,n,s){const r=e._endId=++Rf,i=()=>{r===e._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Oa(e,t);if(!o)return s();const l=o+"end";let u=0;const d=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),e.addEventListener(l,h)}function Oa(e,t){const n=window.getComputedStyle(e),s=T=>(n[T]||"").split(", "),r=s(pt+"Delay"),i=s(pt+"Duration"),o=Pa(r,i),a=s(Sn+"Delay"),c=s(Sn+"Duration"),l=Pa(a,c);let u=null,d=0,h=0;t===pt?o>0&&(u=pt,d=o,h=i.length):t===Sn?l>0&&(u=Sn,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?pt:Sn:null,h=u?u===pt?i.length:c.length:0);const g=u===pt&&/\b(transform|all)(,|$)/.test(n[pt+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:g}}function Pa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>ka(n)+ka(e[s])))}function ka(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Na(){return document.body.offsetHeight}const Ma=new WeakMap,La=new WeakMap,Sf={name:"TransitionGroup",props:_e({},Tf,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Fr(),s=To();let r,i;return Po(()=>{if(!r.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Nf(r[0].el,n.vnode.el,o))return;r.forEach(Of),r.forEach(Pf);const a=r.filter(kf);Na(),a.forEach(c=>{const l=c.el,u=l.style;st(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",d),l._moveCb=null,Mt(l,o))};l.addEventListener("transitionend",d)})}),()=>{const o=q(e),a=Ra(o);let c=o.tag||be;r=i,i=t.default?Rr(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&bn(u,yn(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];bn(u,yn(u,a,s,n)),Ma.set(u,u.el.getBoundingClientRect())}return fe(c,null,i)}}},Af=Sf;function Of(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Pf(e){La.set(e,e.el.getBoundingClientRect())}function kf(e){const t=Ma.get(e),n=La.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",e}}function Nf(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=Oa(s);return r.removeChild(s),i}const Da=e=>{const t=e.props["onUpdate:modelValue"];return F(t)?n=>ts(t,n):t};function Mf(e){e.target.composing=!0}function xa(e){const t=e.target;t.composing&&(t.composing=!1,Lf(t,"input"))}function Lf(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Ag={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=Da(r);const i=s||r.props&&r.props.type==="number";Zt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n?a=a.trim():i&&(a=ss(a)),e._assign(a)}),n&&Zt(e,"change",()=>{e.value=e.value.trim()}),t||(Zt(e,"compositionstart",Mf),Zt(e,"compositionend",xa),Zt(e,"change",xa))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=Da(i),e.composing||document.activeElement===e&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&ss(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Df=["ctrl","shift","alt","meta"],xf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Df.some(n=>e[`${n}Key`]&&!t.includes(n))},$f=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const i=xf[t[r]];if(i&&i(n,t))return}return e(n,...s)},Og={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):An(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),An(e,!0),s.enter(e)):s.leave(e,()=>{An(e,!1)}):An(e,t))},beforeUnmount(e,{value:t}){An(e,t)}};function An(e,t){e.style.display=t?e._vod:"none"}const Uf=_e({patchProp:If},cf);let $a;function Ff(){return $a||($a=Lu(Uf))}const Bf=(...e)=>{const t=Ff().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Hf(s);if(!r)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Hf(e){return ve(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Ua=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",en=e=>Ua?Symbol(e):"_vr_"+e,Vf=en("rvlm"),Fa=en("rvd"),Ps=en("r"),Xr=en("rl"),Qr=en("rvl"),tn=typeof window!="undefined";function jf(e){return e.__esModule||Ua&&e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Zr(e,t){const n={};for(const s in t){const r=t[s];n[s]=Array.isArray(r)?r.map(e):e(r)}return n}const On=()=>{},Wf=/\/$/,zf=e=>e.replace(Wf,"");function ei(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(s=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),r=e(i)),c>-1&&(s=s||t.slice(0,c),o=t.slice(c,t.length)),s=Jf(s!=null?s:t,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Kf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ba(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qf(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&nn(t.matched[s],n.matched[r])&&Ha(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function nn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ha(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Gf(e[n],t[n]))return!1;return!0}function Gf(e,t){return Array.isArray(e)?Va(e,t):Array.isArray(t)?Va(t,e):e===t}function Va(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Jf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Pn;(function(e){e.pop="pop",e.push="push"})(Pn||(Pn={}));var kn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(kn||(kn={}));function Yf(e){if(!e)if(tn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),zf(e)}const Xf=/^[^#]+#/;function Qf(e,t){return e.replace(Xf,"#")+t}function Zf(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ks=()=>({left:window.pageXOffset,top:window.pageYOffset});function ed(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Zf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ja(e,t){return(history.state?history.state.position-t:-1)+e}const ti=new Map;function td(e,t){ti.set(e,t)}function nd(e){const t=ti.get(e);return ti.delete(e),t}let sd=()=>location.protocol+"//"+location.host;function Wa(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let a=r.includes(e.slice(i))?e.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ba(c,"")}return Ba(n,e)+s+r}function rd(e,t,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const g=Wa(e,location),T=n.value,D=t.value;let S=0;if(h){if(n.value=g,t.value=h,o&&o===T){o=null;return}S=D?h.position-D.position:0}else s(g);r.forEach(A=>{A(n.value,T,{delta:S,type:Pn.pop,direction:S?S>0?kn.forward:kn.back:kn.unknown})})};function c(){o=n.value}function l(h){r.push(h);const g=()=>{const T=r.indexOf(h);T>-1&&r.splice(T,1)};return i.push(g),g}function u(){const{history:h}=window;!h.state||h.replaceState(ee({},h.state,{scroll:ks()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function za(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?ks():null}}function id(e){const{history:t,location:n}=window,s={value:Wa(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:sd()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=ee({},t.state,za(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ee({},r.value,t.state,{forward:c,scroll:ks()});i(u.current,u,!0);const d=ee({},za(s.value,c,null),{position:u.position+1},l);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Pg(e){e=Yf(e);const t=id(e),n=rd(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ee({location:"",base:e,go:s,createHref:Qf.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function od(e){return typeof e=="string"||e&&typeof e=="object"}function Ka(e){return typeof e=="string"||typeof e=="symbol"}const mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qa=en("nf");var Ga;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ga||(Ga={}));function sn(e,t){return ee(new Error,{type:e,[qa]:!0},t)}function Lt(e,t){return e instanceof Error&&qa in e&&(t==null||!!(e.type&t))}const Ja="[^/]+?",ad={sensitive:!1,strict:!1,start:!0,end:!0},cd=/[.+*?^${}()[\]/\\]/g;function ld(e,t){const n=ee({},ad,t),s=[];let r=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const h=l[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(cd,"\\$&"),g+=40;else if(h.type===1){const{value:T,repeatable:D,optional:S,regexp:A}=h;i.push({name:T,repeatable:D,optional:S});const x=A||Ja;if(x!==Ja){g+=10;try{new RegExp(`(${x})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${T}" (${x}): `+j.message)}}let V=D?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(V=S&&l.length<2?`(?:/${V})`:"/"+V),S&&(V+="?"),r+=V,g+=20,S&&(g+=-8),D&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",T=i[h-1];d[T.name]=g&&T.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const h of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:T,repeatable:D,optional:S}=g,A=T in l?l[T]:"";if(Array.isArray(A)&&!D)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(A)?A.join("/"):A;if(!x)if(S)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${T}"`);u+=x}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function ud(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function fd(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=ud(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const dd={type:0,value:""},hd=/[a-zA-Z0-9_]/;function pd(e){if(!e)return[[]];if(e==="/")return[[dd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:hd.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function md(e,t,n){const s=ld(pd(e.path),n),r=ee(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function gd(e,t){const n=[],s=new Map;t=Xa({strict:!1,end:!0,sensitive:!1},t);function r(u){return s.get(u)}function i(u,d,h){const g=!h,T=vd(u);T.aliasOf=h&&h.record;const D=Xa(t,u),S=[T];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of V)S.push(ee({},T,{components:h?h.record.components:T.components,path:j,aliasOf:h?h.record:T}))}let A,x;for(const V of S){const{path:j}=V;if(d&&j[0]!=="/"){const te=d.record.path,ae=te[te.length-1]==="/"?"":"/";V.path=d.record.path+(j&&ae+j)}if(A=md(V,d,D),h?h.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),g&&u.name&&!Ya(A)&&o(u.name)),"children"in T){const te=T.children;for(let ae=0;ae<te.length;ae++)i(te[ae],A,h&&h.children[ae])}h=h||A,c(A)}return x?()=>{o(x)}:On}function o(u){if(Ka(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&fd(u,n[d])>=0;)d++;n.splice(d,0,u),u.record.name&&!Ya(u)&&s.set(u.record.name,u)}function l(u,d){let h,g={},T,D;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw sn(1,{location:u});D=h.record.name,g=ee(_d(d.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),T=h.stringify(g)}else if("path"in u)T=u.path,h=n.find(x=>x.re.test(T)),h&&(g=h.parse(T),D=h.record.name);else{if(h=d.name?s.get(d.name):n.find(x=>x.re.test(d.path)),!h)throw sn(1,{location:u,currentLocation:d});D=h.record.name,g=ee({},d.params,u.params),T=h.stringify(g)}const S=[];let A=h;for(;A;)S.unshift(A.record),A=A.parent;return{name:D,path:T,params:g,matched:S,meta:bd(S)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function _d(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function vd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:yd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function yd(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Ya(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bd(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Xa(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Qa=/#/g,Ed=/&/g,Id=/\//g,wd=/=/g,Td=/\?/g,Za=/\+/g,Cd=/%5B/g,Rd=/%5D/g,ec=/%5E/g,Sd=/%60/g,tc=/%7B/g,Ad=/%7C/g,nc=/%7D/g,Od=/%20/g;function ni(e){return encodeURI(""+e).replace(Ad,"|").replace(Cd,"[").replace(Rd,"]")}function Pd(e){return ni(e).replace(tc,"{").replace(nc,"}").replace(ec,"^")}function si(e){return ni(e).replace(Za,"%2B").replace(Od,"+").replace(Qa,"%23").replace(Ed,"%26").replace(Sd,"`").replace(tc,"{").replace(nc,"}").replace(ec,"^")}function kd(e){return si(e).replace(wd,"%3D")}function Nd(e){return ni(e).replace(Qa,"%23").replace(Td,"%3F")}function Md(e){return e==null?"":Nd(e).replace(Id,"%2F")}function Ns(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ld(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Za," "),o=i.indexOf("="),a=Ns(o<0?i:i.slice(0,o)),c=o<0?null:Ns(i.slice(o+1));if(a in t){let l=t[a];Array.isArray(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function sc(e){let t="";for(let n in e){const s=e[n];if(n=kd(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&si(i)):[s&&si(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Dd(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}function Nn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function gt(e,t,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(sn(4,{from:n,to:t})):d instanceof Error?a(d):od(d)?a(sn(2,{from:t,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},l=e.call(s&&s.instances[r],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function ri(e,t,n,s){const r=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(xd(a)){const l=(a.__vccOpts||a)[t];l&&r.push(gt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=jf(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&gt(h,n,s,i,o)()}))}}return r}function xd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function rc(e){const t=Ue(Ps),n=Ue(Xr),s=Ke(()=>t.resolve(qt(e.to))),r=Ke(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(nn.bind(null,u));if(h>-1)return h;const g=ic(c[l-2]);return l>1&&ic(u)===g&&d[d.length-1].path!==g?d.findIndex(nn.bind(null,c[l-2])):h}),i=Ke(()=>r.value>-1&&Bd(n.params,s.value.params)),o=Ke(()=>r.value>-1&&r.value===n.matched.length-1&&Ha(n.params,s.value.params));function a(c={}){return Fd(c)?t[qt(e.replace)?"replace":"push"](qt(e.to)).catch(On):Promise.resolve()}return{route:s,href:Ke(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const $d=et({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rc,setup(e,{slots:t}){const n=gn(rc(e)),{options:s}=Ue(Ps),r=Ke(()=>({[oc(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[oc(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Kr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Ud=$d;function Fd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Bd(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ic(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const oc=(e,t,n)=>e!=null?e:t!=null?t:n,Hd=et({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=Ue(Qr),r=Ke(()=>e.route||s.value),i=Ue(Fa,0),o=Ke(()=>r.value.matched[i]);hs(Fa,i+1),hs(Vf,o),hs(Qr,r);const a=yo();return As(()=>[a.value,o.value,e.name],([c,l,u],[d,h,g])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!nn(l,h)||!d)&&(l.enterCallbacks[u]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[e.name],d=e.name;if(!u)return ac(n.default,{Component:u,route:c});const h=l.props[e.name],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,D=Kr(u,ee({},g,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(l.instances[d]=null)},ref:a}));return ac(n.default,{Component:D,route:c})||D}}});function ac(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Vd=Hd;function kg(e){const t=gd(e.routes,e),n=e.parseQuery||Ld,s=e.stringifyQuery||sc,r=e.history,i=Nn(),o=Nn(),a=Nn(),c=tu(mt);let l=mt;tn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zr.bind(null,_=>""+_),d=Zr.bind(null,Md),h=Zr.bind(null,Ns);function g(_,P){let C,N;return Ka(_)?(C=t.getRecordMatcher(_),N=P):N=_,t.addRoute(N,C)}function T(_){const P=t.getRecordMatcher(_);P&&t.removeRoute(P)}function D(){return t.getRoutes().map(_=>_.record)}function S(_){return!!t.getRecordMatcher(_)}function A(_,P){if(P=ee({},P||c.value),typeof _=="string"){const B=ei(n,_,P.path),f=t.resolve({path:B.path},P),p=r.createHref(B.fullPath);return ee(B,f,{params:h(f.params),hash:Ns(B.hash),redirectedFrom:void 0,href:p})}let C;if("path"in _)C=ee({},_,{path:ei(n,_.path,P.path).path});else{const B=ee({},_.params);for(const f in B)B[f]==null&&delete B[f];C=ee({},_,{params:d(_.params)}),P.params=d(P.params)}const N=t.resolve(C,P),X=_.hash||"";N.params=u(h(N.params));const se=Kf(s,ee({},_,{hash:Pd(X),path:N.path})),z=r.createHref(se);return ee({fullPath:se,hash:X,query:s===sc?Dd(_.query):_.query||{}},N,{redirectedFrom:void 0,href:z})}function x(_){return typeof _=="string"?ei(n,_,c.value.path):ee({},_)}function V(_,P){if(l!==_)return sn(8,{from:P,to:_})}function j(_){return W(_)}function te(_){return j(ee(x(_),{replace:!0}))}function ae(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let N=typeof C=="function"?C(_):C;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=x(N):{path:N},N.params={}),ee({query:_.query,hash:_.hash,params:_.params},N)}}function W(_,P){const C=l=A(_),N=c.value,X=_.state,se=_.force,z=_.replace===!0,B=ae(C);if(B)return W(ee(x(B),{state:X,force:se,replace:z}),P||C);const f=C;f.redirectedFrom=P;let p;return!se&&qf(s,N,C)&&(p=sn(16,{to:f,from:N}),Ft(N,N,!0,!1)),(p?Promise.resolve(p):J(f,N)).catch(m=>Lt(m)?m:ne(m,f,N)).then(m=>{if(m){if(Lt(m,2))return W(ee(x(m.to),{state:X,force:se,replace:z}),P||f)}else m=ge(f,N,!0,z,X);return me(f,N,m),m})}function ce(_,P){const C=V(_,P);return C?Promise.reject(C):Promise.resolve()}function J(_,P){let C;const[N,X,se]=jd(_,P);C=ri(N.reverse(),"beforeRouteLeave",_,P);for(const B of N)B.leaveGuards.forEach(f=>{C.push(gt(f,_,P))});const z=ce.bind(null,_,P);return C.push(z),rn(C).then(()=>{C=[];for(const B of i.list())C.push(gt(B,_,P));return C.push(z),rn(C)}).then(()=>{C=ri(X,"beforeRouteUpdate",_,P);for(const B of X)B.updateGuards.forEach(f=>{C.push(gt(f,_,P))});return C.push(z),rn(C)}).then(()=>{C=[];for(const B of _.matched)if(B.beforeEnter&&!P.matched.includes(B))if(Array.isArray(B.beforeEnter))for(const f of B.beforeEnter)C.push(gt(f,_,P));else C.push(gt(B.beforeEnter,_,P));return C.push(z),rn(C)}).then(()=>(_.matched.forEach(B=>B.enterCallbacks={}),C=ri(se,"beforeRouteEnter",_,P),C.push(z),rn(C))).then(()=>{C=[];for(const B of o.list())C.push(gt(B,_,P));return C.push(z),rn(C)}).catch(B=>Lt(B,8)?B:Promise.reject(B))}function me(_,P,C){for(const N of a.list())N(_,P,C)}function ge(_,P,C,N,X){const se=V(_,P);if(se)return se;const z=P===mt,B=tn?history.state:{};C&&(N||z?r.replace(_.fullPath,ee({scroll:z&&B&&B.scroll},X)):r.push(_.fullPath,X)),c.value=_,Ft(_,P,C,z),Ne()}let k;function le(){k=r.listen((_,P,C)=>{const N=A(_),X=ae(N);if(X){W(ee(X,{replace:!0}),N).catch(On);return}l=N;const se=c.value;tn&&td(ja(se.fullPath,C.delta),ks()),J(N,se).catch(z=>Lt(z,4|8)?z:Lt(z,2)?(W(z.to,N).then(B=>{Lt(B,4|16)&&!C.delta&&C.type===Pn.pop&&r.go(-1,!1)}).catch(On),Promise.reject()):(C.delta&&r.go(-C.delta,!1),ne(z,N,se))).then(z=>{z=z||ge(N,se,!1),z&&(C.delta?r.go(-C.delta,!1):C.type===Pn.pop&&Lt(z,4|16)&&r.go(-1,!1)),me(N,se,z)}).catch(On)})}let Te=Nn(),Xe=Nn(),ue;function ne(_,P,C){Ne(_);const N=Xe.list();return N.length?N.forEach(X=>X(_,P,C)):console.error(_),Promise.reject(_)}function Y(){return ue&&c.value!==mt?Promise.resolve():new Promise((_,P)=>{Te.add([_,P])})}function Ne(_){ue||(ue=!0,le(),Te.list().forEach(([P,C])=>_?C(_):P()),Te.reset())}function Ft(_,P,C,N){const{scrollBehavior:X}=e;if(!tn||!X)return Promise.resolve();const se=!C&&nd(ja(_.fullPath,0))||(N||!C)&&history.state&&history.state.scroll||null;return Wr().then(()=>X(_,P,se)).then(z=>z&&ed(z)).catch(z=>ne(z,_,P))}const Qe=_=>r.go(_);let Ve;const Me=new Set;return{currentRoute:c,addRoute:g,removeRoute:T,hasRoute:S,getRoutes:D,resolve:A,options:e,push:j,replace:te,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Xe.add,isReady:Y,install(_){const P=this;_.component("RouterLink",Ud),_.component("RouterView",Vd),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(c)}),tn&&!Ve&&c.value===mt&&(Ve=!0,j(r.location).catch(X=>{}));const C={};for(const X in mt)C[X]=Ke(()=>c.value[X]);_.provide(Ps,P),_.provide(Xr,gn(C)),_.provide(Qr,c);const N=_.unmount;Me.add(_),_.unmount=function(){Me.delete(_),Me.size<1&&(l=mt,k&&k(),c.value=mt,Ve=!1,ue=!1),N()}}}}function rn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function jd(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>nn(l,a))?s.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>nn(l,c))||r.push(c))}return[n,s,r]}function Ng(){return Ue(Ps)}function Mg(){return Ue(Xr)}const Ms=e=>typeof e=="function",Ls=e=>typeof e=="string",cc=e=>Ls(e)&&e.trim().length>0,Wd=e=>typeof e=="number",Dt=e=>typeof e=="undefined",Mn=e=>typeof e=="object"&&e!==null,zd=e=>_t(e,"tag")&&cc(e.tag),lc=e=>window.TouchEvent&&e instanceof TouchEvent,uc=e=>_t(e,"component")&&fc(e.component),Kd=e=>Ms(e)||Mn(e),fc=e=>!Dt(e)&&(Ls(e)||Kd(e)||uc(e)),dc=e=>Mn(e)&&["height","width","right","left","top","bottom"].every(t=>Wd(e[t])),_t=(e,t)=>(Mn(e)||Ms(e))&&t in e,qd=(e=>()=>e++)(0);function ii(e){return lc(e)?e.targetTouches[0].clientX:e.clientX}function hc(e){return lc(e)?e.targetTouches[0].clientY:e.clientY}const Gd=e=>{Dt(e.remove)?e.parentNode&&e.parentNode.removeChild(e):e.remove()},Ln=e=>uc(e)?Ln(e.component):zd(e)?et({render(){return e}}):typeof e=="string"?e:q(qt(e)),Jd=e=>{if(typeof e=="string")return e;const t=_t(e,"props")&&Mn(e.props)?e.props:{},n=_t(e,"listeners")&&Mn(e.listeners)?e.listeners:{};return{component:Ln(e),props:t,listeners:n}},Yd=()=>typeof window!="undefined";class oi{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,n){const s=this.getHandlers(t);s.push(n),this.allHandlers[t]=s}off(t,n){const s=this.getHandlers(t);s.splice(s.indexOf(n)>>>0,1)}emit(t,n){this.getHandlers(t).forEach(r=>r(n))}}const Xd=e=>["on","off","emit"].every(t=>_t(e,t)&&Ms(e[t]));var Pe;(function(e){e.SUCCESS="success",e.ERROR="error",e.WARNING="warning",e.INFO="info",e.DEFAULT="default"})(Pe||(Pe={}));var Ds;(function(e){e.TOP_LEFT="top-left",e.TOP_CENTER="top-center",e.TOP_RIGHT="top-right",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_CENTER="bottom-center",e.BOTTOM_RIGHT="bottom-right"})(Ds||(Ds={}));var ke;(function(e){e.ADD="add",e.DISMISS="dismiss",e.UPDATE="update",e.CLEAR="clear",e.UPDATE_DEFAULTS="update_defaults"})(ke||(ke={}));const rt="Vue-Toastification",Be={type:{type:String,default:Pe.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},pc={type:Be.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},xs={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Be.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},ai={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},mc={transition:{type:[Object,String],default:`${rt}__bounce`}},Qd={position:{type:String,default:Ds.TOP_RIGHT},draggable:Be.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Be.trueBoolean,pauseOnHover:Be.trueBoolean,closeOnClick:Be.trueBoolean,timeout:ai.timeout,hideProgressBar:ai.hideProgressBar,toastClassName:Be.classNames,bodyClassName:Be.classNames,icon:pc.customIcon,closeButton:xs.component,closeButtonClassName:xs.classNames,showCloseButtonOnHover:xs.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!0,default:new oi}},Zd={id:{type:[String,Number],required:!0,default:0},type:Be.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}}},eh={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Be.trueBoolean,maxToasts:{type:Number,default:20},transition:mc.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:e=>e},filterToasts:{type:Function,default:e=>e},containerClassName:Be.classNames,onMounted:Function};var it={CORE_TOAST:Qd,TOAST:Zd,CONTAINER:eh,PROGRESS_BAR:ai,ICON:pc,TRANSITION:mc,CLOSE_BUTTON:xs},ci=et({name:"VtProgressBar",props:it.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${rt}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function th(e,t,n,s,r,i){return de(),he("div",{style:e.style,class:e.cpClass},null,6)}ci.render=th;ci.__file="src/components/VtProgressBar.vue";var li=et({name:"VtCloseButton",props:it.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?Ln(this.component):"button"},classes(){const e=[`${rt}__close-button`];return this.showOnHover&&e.push("show-on-hover"),e.concat(this.classNames)}}});const nh=Is(" \xD7 ");function sh(e,t,n,s,r,i){return de(),he(Lr(e.buttonComponent),ws({"aria-label":e.ariaLabel,class:e.classes},e.$attrs),{default:vn(()=>[nh]),_:1},16,["aria-label","class"])}li.render=sh;li.__file="src/components/VtCloseButton.vue";var ui={};const rh={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ih=fe("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1);function oh(e,t,n,s,r,i){return de(),he("svg",rh,[ih])}ui.render=oh;ui.__file="src/components/icons/VtSuccessIcon.vue";var $s={};const ah={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ch=fe("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1);function lh(e,t,n,s,r,i){return de(),he("svg",ah,[ch])}$s.render=lh;$s.__file="src/components/icons/VtInfoIcon.vue";var fi={};const uh={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},fh=fe("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1);function dh(e,t,n,s,r,i){return de(),he("svg",uh,[fh])}fi.render=dh;fi.__file="src/components/icons/VtWarningIcon.vue";var di={};const hh={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},ph=fe("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1);function mh(e,t,n,s,r,i){return de(),he("svg",hh,[ph])}di.render=mh;di.__file="src/components/icons/VtErrorIcon.vue";var hi=et({name:"VtIcon",props:it.ICON,computed:{customIconChildren(){return _t(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return Ls(this.customIcon)?this.trimValue(this.customIcon):_t(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return _t(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:fc(this.customIcon)?Ln(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Pe.DEFAULT]:$s,[Pe.INFO]:$s,[Pe.SUCCESS]:ui,[Pe.ERROR]:di,[Pe.WARNING]:fi}[this.type]},iconClasses(){const e=[`${rt}__icon`];return this.hasCustomIcon?e.concat(this.customIconClass):e}},methods:{trimValue(e,t=""){return cc(e)?e.trim():t}}});function gh(e,t,n,s,r,i){return de(),he(Lr(e.component),{class:e.iconClasses},{default:vn(()=>[Is(Vi(e.customIconChildren),1)]),_:1},8,["class"])}hi.render=gh;hi.__file="src/components/VtIcon.vue";var pi=et({name:"VtToast",components:{ProgressBar:ci,CloseButton:li,Icon:hi},inheritAttrs:!1,props:Object.assign({},it.CORE_TOAST,it.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const e=[`${rt}__toast`,`${rt}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&e.push("disable-transition"),this.rtl&&e.push(`${rt}__toast--rtl`),e},bodyClasses(){return[`${rt}__toast-${Ls(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return dc(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{getVueComponentFromObj:Ln,closeToast(){this.eventBus.emit(ke.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const e=this.$el;e.addEventListener("touchstart",this.onDragStart,{passive:!0}),e.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const e=this.$el;e.removeEventListener("touchstart",this.onDragStart),e.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(e){this.beingDragged=!0,this.dragPos={x:ii(e),y:hc(e)},this.dragStart=ii(e),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(e){this.beingDragged&&(e.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:ii(e),y:hc(e)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,dc(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}});function _h(e,t,n,s,r,i){const o=En("Icon"),a=En("CloseButton"),c=En("ProgressBar");return de(),he("div",{class:e.classes,style:e.draggableStyle,onClick:t[1]||(t[1]=(...l)=>e.clickHandler(...l)),onMouseenter:t[2]||(t[2]=(...l)=>e.hoverPause(...l)),onMouseleave:t[3]||(t[3]=(...l)=>e.hoverPlay(...l))},[e.icon?(de(),he(o,{key:0,"custom-icon":e.icon,type:e.type},null,8,["custom-icon","type"])):xr("v-if",!0),fe("div",{role:e.accessibility.toastRole||"alert",class:e.bodyClasses},[typeof e.content=="string"?(de(),he(be,{key:0},[Is(Vi(e.content),1)],64)):(de(),he(Lr(e.getVueComponentFromObj(e.content)),ws({key:1,"toast-id":e.id},e.content.props,Vu(e.content.listeners),{onCloseToast:e.closeToast}),null,16,["toast-id","onCloseToast"]))],10,["role"]),e.closeButton?(de(),he(a,{key:1,component:e.closeButton,"class-names":e.closeButtonClassName,"show-on-hover":e.showCloseButtonOnHover,"aria-label":e.accessibility.closeButtonLabel,onClick:$f(e.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):xr("v-if",!0),e.timeout?(de(),he(c,{key:2,"is-running":e.isRunning,"hide-progress-bar":e.hideProgressBar,timeout:e.timeout,onCloseToast:e.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):xr("v-if",!0)],38)}pi.render=_h;pi.__file="src/components/VtToast.vue";var mi=et({name:"VtTransition",props:it.TRANSITION,emits:["leave"],methods:{leave(e){e.style.left=e.offsetLeft+"px",e.style.top=e.offsetTop+"px",e.style.width=getComputedStyle(e).width,e.style.position="absolute"}}});function vh(e,t,n,s,r,i){return de(),he(Af,{tag:"div","enter-active-class":e.transition.enter?e.transition.enter:`${e.transition}-enter-active`,"move-class":e.transition.move?e.transition.move:`${e.transition}-move`,"leave-active-class":e.transition.leave?e.transition.leave:`${e.transition}-leave-active`,onLeave:e.leave},{default:vn(()=>[Hu(e.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}mi.render=vh;mi.__file="src/components/VtTransition.vue";var gi=et({name:"VueToastification",components:{Toast:pi,VtTransition:mi},props:Object.assign({},it.CORE_TOAST,it.CONTAINER,it.TRANSITION),data(){return{count:0,positions:Object.values(Ds),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const e=this.eventBus;e.on(ke.ADD,this.addToast),e.on(ke.CLEAR,this.clearToasts),e.on(ke.DISMISS,this.dismissToast),e.on(ke.UPDATE,this.updateToast),e.on(ke.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(e){Ms(e)&&(e=await e()),Gd(this.$el),e.appendChild(this.$el)},setToast(e){Dt(e.id)||(this.toasts[e.id]=e)},addToast(e){e.content=Jd(e.content);const t=Object.assign({},this.defaults,e.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[e.type],e),n=this.defaults.filterBeforeCreate(t,this.toastArray);n&&this.setToast(n)},dismissToast(e){const t=this.toasts[e];!Dt(t)&&!Dt(t.onClose)&&t.onClose(),delete this.toasts[e]},clearToasts(){Object.keys(this.toasts).forEach(e=>{this.dismissToast(e)})},getPositionToasts(e){const t=this.filteredToasts.filter(n=>n.position===e).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?t.reverse():t},updateDefaults(e){Dt(e.container)||this.setup(e.container),this.defaults=Object.assign({},this.defaults,e)},updateToast({id:e,options:t,create:n}){this.toasts[e]?(t.timeout&&t.timeout===this.toasts[e].timeout&&t.timeout++,this.setToast(Object.assign({},this.toasts[e],t))):n&&this.addToast(Object.assign({},{id:e},t))},getClasses(e){return[`${rt}__container`,e].concat(this.defaults.containerClassName)}}});function yh(e,t,n,s,r,i){const o=En("Toast"),a=En("VtTransition");return de(),he("div",null,[(de(!0),he(be,null,ta(e.positions,c=>(de(),he("div",{key:c},[fe(a,{transition:e.defaults.transition,class:e.getClasses(c)},{default:vn(()=>[(de(!0),he(be,null,ta(e.getPositionToasts(c),l=>(de(),he(o,ws({key:l.id},l),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}gi.render=yh;gi.__file="src/components/VtToastContainer.vue";const gc=(e={},t=!0)=>{const n=e.eventBus=e.eventBus||new oi;t&&Wr(()=>{const i=Bf(gi,Object.assign({},e)),o=i.mount(document.createElement("div")),a=e.onMounted;Dt(a)||a(o,i)});const s=(i,o)=>{const a=Object.assign({},{id:qd(),type:Pe.DEFAULT},o,{content:i});return n.emit(ke.ADD,a),a.id};s.clear=()=>n.emit(ke.CLEAR,void 0),s.updateDefaults=i=>{n.emit(ke.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(ke.DISMISS,i)};function r(i,{content:o,options:a},c=!1){const l=Object.assign({},a,{content:o});n.emit(ke.UPDATE,{id:i,options:l,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:Pe.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:Pe.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:Pe.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:Pe.WARNING})),s},bh=()=>{const e=()=>console.warn("[Vue Toastification] This plugin does not support SSR!");return new Proxy(e,{get(){return e}})};function _i(e){return Yd()?Xd(e)?gc({eventBus:e},!1):gc(e,!0):bh()}const _c=Symbol("VueToastification"),vc=new oi,Lg=(e,t)=>{const n=_i(Object.assign({eventBus:vc},t));e.provide(_c,n)},Dg=e=>{if(e)return _i(e);const t=Fr()?Ue(_c):void 0;return t||_i(vc)};/**
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
 */const Eh=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)==55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)==56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Ih=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},wh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),s.push(n[u],n[d],n[h],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Eh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ih(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(s.push(h),l!==64){const g=a<<4&240|l>>2;if(s.push(g),d!==64){const T=l<<6&192|d;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Th=function(e){try{return wh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */class Ch{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Ee(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Sh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ah(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oh(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}/**
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
 */const Ph="FirebaseError";class on extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=Ph,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dn.prototype.create)}}class Dn{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?kh(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new on(r,a,s)}}function kh(e,t){return e.replace(Nh,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Nh=/\{\$([^}]+)}/g;function Mh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Us(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(yc(i)&&yc(o)){if(!Us(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yc(e){return e!==null&&typeof e=="object"}/**
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
 */function xn(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function $n(e){const t={};return e.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");t[decodeURIComponent(r)]=decodeURIComponent(i)}}),t}function Un(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Lh(e,t){const n=new Dh(e,t);return n.subscribe.bind(n)}class Dh{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let r;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");xh(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:s},r.next===void 0&&(r.next=vi),r.error===void 0&&(r.error=vi),r.complete===void 0&&(r.complete=vi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(o){}}),this.observers.push(r),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xh(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function vi(){}/**
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
 */function Fn(e){return e&&e._delegate?e._delegate:e}/*! *****************************************************************************
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
***************************************************************************** */function yi(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}function $h(e,t,n,s){function r(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(u){try{l(s.next(u))}catch(d){o(d)}}function c(u){try{l(s.throw(u))}catch(d){o(d)}}function l(u){u.done?i(u.value):r(u.value).then(a,c)}l((s=s.apply(e,t||[])).next())})}function Uh(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},s,r,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,r=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(u){l=[6,u],r=0}finally{s=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function bi(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],s=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Fs(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var s=n.call(e),r,i=[],o;try{for(;(t===void 0||t-- >0)&&!(r=s.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(o)throw o.error}}return i}function bc(e,t,n){if(n||arguments.length===2)for(var s=0,r=t.length,i;s<r;s++)(i||!(s in t))&&(i||(i=Array.prototype.slice.call(t,0,s)),i[s]=t[s]);return e.concat(i||Array.prototype.slice.call(t))}var Bn=function(){function e(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},e.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},e.prototype.setServiceProps=function(t){return this.serviceProps=t,this},e.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},e}();/**
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
 */var xt="[DEFAULT]";/**
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
 */var Fh=function(){function e(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(t){var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var s=new Ch;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch(i){}}return this.instancesDeferred.get(n).promise},e.prototype.getImmediate=function(t){var n,s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error("Service "+this.name+" is not available")}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(t){var n,s;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,!!this.shouldAutoInitialize()){if(Hh(t))try{this.getOrInitializeService({instanceIdentifier:xt})}catch(d){}try{for(var r=bi(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=Fs(i.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:l});c.resolve(u)}catch(d){}}}catch(d){n={error:d}}finally{try{i&&!i.done&&(s=r.return)&&s.call(r)}finally{if(n)throw n.error}}}},e.prototype.clearInstance=function(t){t===void 0&&(t=xt),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},e.prototype.delete=function(){return $h(this,void 0,void 0,function(){var t;return Uh(this,function(n){switch(n.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(bc(bc([],Fs(t.filter(function(s){return"INTERNAL"in s}).map(function(s){return s.INTERNAL.delete()}))),Fs(t.filter(function(s){return"_delete"in s}).map(function(s){return s._delete()}))))];case 1:return n.sent(),[2]}})})},e.prototype.isComponentSet=function(){return this.component!=null},e.prototype.isInitialized=function(t){return t===void 0&&(t=xt),this.instances.has(t)},e.prototype.getOptions=function(t){return t===void 0&&(t=xt),this.instancesOptions.get(t)||{}},e.prototype.initialize=function(t){var n,s;t===void 0&&(t={});var r=t.options,i=r===void 0?{}:r,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=bi(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=Fs(l.value,2),d=u[0],h=u[1],g=this.normalizeInstanceIdentifier(d);o===g&&h.resolve(a)}}catch(T){n={error:T}}finally{try{l&&!l.done&&(s=c.return)&&s.call(c)}finally{if(n)throw n.error}}return a},e.prototype.onInit=function(t,n){var s,r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},e.prototype.invokeOnInitCallbacks=function(t,n){var s,r,i=this.onInitCallbacks.get(n);if(!!i)try{for(var o=bi(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(t,n)}catch(l){}}}catch(l){s={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(s)throw s.error}}},e.prototype.getOrInitializeService=function(t){var n=t.instanceIdentifier,s=t.options,r=s===void 0?{}:s,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Bh(n),options:r}),this.instances.set(n,i),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(o){}return i||null},e.prototype.normalizeInstanceIdentifier=function(t){return t===void 0&&(t=xt),this.component?this.component.multipleInstances?t:xt:t},e.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},e}();function Bh(e){return e===xt?void 0:e}function Hh(e){return e.instantiationMode==="EAGER"}/**
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
 */var Vh=function(){function e(t){this.name=t,this.providers=new Map}return e.prototype.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},e.prototype.addOrOverwriteComponent=function(t){var n=this.getProvider(t.name);n.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},e.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new Fh(t,this);return this.providers.set(t,n),n},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();/**
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
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const jh={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Wh=re.INFO,zh={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Kh=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=zh[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ec{constructor(t){this.name=t,this._logLevel=Wh,this._logHandler=Kh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}/**
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
 */class qh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Gh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ic="@firebase/app",Jh="0.7.2";/**
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
 */const Ei=new Ec("@firebase/app"),Yh="@firebase/app-compat",Xh="@firebase/analytics-compat",Qh="@firebase/analytics",Zh="@firebase/app-check-compat",ep="@firebase/app-check",tp="@firebase/auth",np="@firebase/auth-compat",sp="@firebase/database",rp="@firebase/database-compat",ip="@firebase/functions",op="@firebase/functions-compat",ap="@firebase/installations",cp="@firebase/installations-compat",lp="@firebase/messaging",up="@firebase/messaging-compat",fp="@firebase/performance",dp="@firebase/performance-compat",hp="@firebase/remote-config",pp="@firebase/remote-config-compat",mp="@firebase/storage",gp="@firebase/storage-compat",_p="@firebase/firestore",vp="@firebase/firestore-compat",yp="firebase",bp="9.1.1";/**
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
 */const wc="[DEFAULT]",Ep={[Ic]:"fire-core",[Yh]:"fire-core-compat",[Qh]:"fire-analytics",[Xh]:"fire-analytics-compat",[ep]:"fire-app-check",[Zh]:"fire-app-check-compat",[tp]:"fire-auth",[np]:"fire-auth-compat",[sp]:"fire-rtdb",[rp]:"fire-rtdb-compat",[ip]:"fire-fn",[op]:"fire-fn-compat",[ap]:"fire-iid",[cp]:"fire-iid-compat",[lp]:"fire-fcm",[up]:"fire-fcm-compat",[fp]:"fire-perf",[dp]:"fire-perf-compat",[hp]:"fire-rc",[pp]:"fire-rc-compat",[mp]:"fire-gcs",[gp]:"fire-gcs-compat",[_p]:"fire-fst",[vp]:"fire-fst-compat","fire-js":"fire-js",[yp]:"fire-js-all"};/**
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
 */const Bs=new Map,Ii=new Map;function Ip(e,t){try{e.container.addComponent(t)}catch(n){Ei.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Hs(e){const t=e.name;if(Ii.has(t))return Ei.debug(`There were multiple attempts to register component ${t}.`),!1;Ii.set(t,e);for(const n of Bs.values())Ip(n,e);return!0}function Tc(e,t){return e.container.getProvider(t)}/**
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
 */const wp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Vs=new Dn("app","Firebase",wp);/**
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
 */class Tp{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vs.create("app-deleted",{appName:this._name})}}/**
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
 */const js=bp;function xg(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:wc,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Vs.create("bad-app-name",{appName:String(s)});const r=Bs.get(s);if(r){if(Us(e,r.options)&&Us(n,r.config))return r;throw Vs.create("duplicate-app",{appName:s})}const i=new Vh(s);for(const a of Ii.values())i.addComponent(a);const o=new Tp(e,n,i);return Bs.set(s,o),o}function Cp(e=wc){const t=Bs.get(e);if(!t)throw Vs.create("no-app",{appName:e});return t}function Ws(e,t,n){var s;let r=(s=Ep[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ei.warn(a.join(" "));return}Hs(new Bn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */function Rp(e){Hs(new Bn("platform-logger",t=>new qh(t),"PRIVATE")),Ws(Ic,Jh,e),Ws("fire-js","")}Rp();function Cc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sp=Cc,Rc=new Dn("auth","Firebase",Cc());/**
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
 */const Sc=new Ec("@firebase/auth");function zs(e,...t){Sc.logLevel<=re.ERROR&&Sc.error(`Auth (${js}): ${e}`,...t)}/**
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
 */function He(e,...t){throw wi(e,...t)}function Je(e,...t){return wi(e,...t)}function Ap(e,t,n){const s=Object.assign(Object.assign({},Sp()),{[t]:n});return new Dn("auth","Firebase",s).create(t,{appName:e.name})}function wi(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Rc.create(e,...t)}function $(e,t,...n){if(!e)throw wi(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw zs(t),new Error(t)}function at(e,t){e||ot(t)}/**
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
 */const Ac=new Map;function ct(e){at(e instanceof Function,"Expected a class definition");let t=Ac.get(e);return t?(at(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ac.set(e,t),t)}/**
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
 */function Op(e,t){const n=Tc(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Us(i,t!=null?t:{}))return r;He(r,"already-initialized")}return n.initialize({options:t})}function Pp(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ct);(t==null?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Ti(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function kp(){return Oc()==="http:"||Oc()==="https:"}function Oc(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Np(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kp()||Sh()||"connection"in navigator)?navigator.onLine:!0}function Mp(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Hn{constructor(t,n){this.shortDelay=t,this.longDelay=n,at(n>t,"Short delay should be less than long delay!"),this.isMobile=Rh()||Ah()}get(){return Np()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ci(e,t){at(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Ri{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Dp=new Hn(3e4,6e4);function Ks(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vn(e,t,n,s,r={}){return Pc(e,r,()=>{let i={},o={};s&&(t==="GET"?o=s:i={body:JSON.stringify(s)});const a=xn(Object.assign({key:e.config.apiKey},o)).slice(1),c=new(Ri.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),Ri.fetch()(kc(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Pc(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},Lp),t);try{const r=new xp(e),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Si(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Si(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Si(e,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ap(e,u,l);He(e,u)}}catch(r){if(r instanceof on)throw r;He(e,"network-request-failed")}}async function qs(e,t,n,s,r={}){const i=await Vn(e,t,n,s,r);return"mfaPendingCredential"in i&&He(e,"multi-factor-auth-required",{serverResponse:i}),i}function kc(e,t,n,s){const r=`${t}${n}?${s}`;return e.config.emulator?Ci(e.config,r):`${e.config.apiScheme}://${r}`}class xp{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Je(this.auth,"timeout")),Dp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Si(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Je(e,t,s);return r.customData._tokenResponse=n,r}/**
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
 */async function $p(e,t){return Vn(e,"POST","/v1/accounts:delete",t)}async function Up(e,t){return Vn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function jn(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}async function Fp(e,t=!1){const n=Fn(e),s=await n.getIdToken(t),r=Oi(s);$(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:jn(Ai(r.auth_time)),issuedAtTime:jn(Ai(r.iat)),expirationTime:jn(Ai(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ai(e){return Number(e)*1e3}function Oi(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return zs("JWT malformed, contained fewer than 3 sections"),null;try{const r=Th(n);return r?JSON.parse(r):(zs("Failed to decode base64 JWT payload"),null)}catch(r){return zs("Caught error parsing JWT payload as JSON",r),null}}function Bp(e){const t=Oi(e);return $(t,"internal-error"),$(typeof t.exp!="undefined","internal-error"),$(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Wn(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof on&&Hp(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function Hp({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Vp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gs(e){var t;const n=e.auth,s=await e.getIdToken(),r=await Wn(e,Up(n,{idToken:s}));$(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=((t=i.providerUserInfo)===null||t===void 0?void 0:t.length)?zp(i.providerUserInfo):[],a=Wp(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Nc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function jp(e){const t=Fn(e);await Gs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Wp(e,t){return[...e.filter(s=>!t.some(r=>r.providerId===s.providerId)),...t]}function zp(e){return e.map(t=>{var{providerId:n}=t,s=yi(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Kp(e,t){const n=await Pc(e,{},()=>{const s=xn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=kc(e,r,"/v1/token",`key=${i}`);return Ri.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken!="undefined","internal-error"),$(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):Bp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return $(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Kp(t,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new zn;return s&&($(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new zn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function vt(e,t){$(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class $t{constructor(t){var{uid:n,auth:s,stsTokenManager:r}=t,i=yi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Vp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Nc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Wn(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Fp(this,t)}reload(){return jp(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new $t(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Gs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Wn(this,$p(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,r,i,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:j,isAnonymous:te,providerData:ae,stsTokenManager:W}=n;$(V&&W,t,"internal-error");const ce=zn.fromJSON(this.name,W);$(typeof V=="string",t,"internal-error"),vt(d,t.name),vt(h,t.name),$(typeof j=="boolean",t,"internal-error"),$(typeof te=="boolean",t,"internal-error"),vt(g,t.name),vt(T,t.name),vt(D,t.name),vt(S,t.name),vt(A,t.name),vt(x,t.name);const J=new $t({uid:V,auth:t,email:h,emailVerified:j,displayName:d,isAnonymous:te,photoURL:T,phoneNumber:g,tenantId:D,stsTokenManager:ce,createdAt:A,lastLoginAt:x});return ae&&Array.isArray(ae)&&(J.providerData=ae.map(me=>Object.assign({},me))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(t,n,s=!1){const r=new zn;r.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await Gs(i),i}}/**
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
 */class Mc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Mc.type="NONE";const Lc=Mc;/**
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
 */function Js(e,t,n){return`firebase:${e}:${t}:${n}`}class an{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Js(this.userKey,r.apiKey,i),this.fullPersistenceKey=Js("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$t._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new an(ct(Lc),t,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ct(Lc);const o=Js(s,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=$t._fromJSON(t,u);l!==i&&(a=d),i=l;break}}catch(u){}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new an(i,t,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch(u){}})),new an(i,t,s))}}/**
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
 */function Dc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Uc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Bc(t))return"Blackberry";if(Hc(t))return"Webos";if(Pi(t))return"Safari";if((t.includes("chrome/")||$c(t))&&!t.includes("edge/"))return"Chrome";if(Fc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xc(e=Ee()){return/firefox\//i.test(e)}function Pi(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $c(e=Ee()){return/crios\//i.test(e)}function Uc(e=Ee()){return/iemobile/i.test(e)}function Fc(e=Ee()){return/android/i.test(e)}function Bc(e=Ee()){return/blackberry/i.test(e)}function Hc(e=Ee()){return/webos/i.test(e)}function Ys(e=Ee()){return/iphone|ipad|ipod/i.test(e)}function qp(e=Ee()){var t;return Ys(e)&&!!((t=window.navigator)===null||t===void 0?void 0:t.standalone)}function Gp(){return Oh()&&document.documentMode===10}function Vc(e=Ee()){return Ys(e)||Fc(e)||Hc(e)||Bc(e)||/windows phone/i.test(e)||Uc(e)}function Jp(){try{return!!(window&&window!==window.top)}catch(e){return!1}}/**
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
 */function jc(e,t=[]){let n;switch(e){case"Browser":n=Dc(Ee());break;case"Worker":n=`${Dc(Ee())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${s}`}/**
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
 */class Yp{constructor(t,n){this.app=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wc(this),this.idTokenSubscription=new Wc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ct(n)),this._initializationPromise=this.queue(async()=>{var s;this._deleted||(this.persistenceManager=await an.create(this,t),!this._deleted&&(((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let s=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(t);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?($(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(s){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Gs(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Mp()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Fn(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Dn("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ct(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,s,r):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=jc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ki(e){return Fn(e)}class Wc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Lh(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Ni{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}async function Xp(e,t){return Vn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Qp(e,t){return qs(e,"POST","/v1/accounts:signInWithPassword",Ks(e,t))}/**
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
 */async function Zp(e,t){return qs(e,"POST","/v1/accounts:signInWithEmailLink",Ks(e,t))}async function em(e,t){return qs(e,"POST","/v1/accounts:signInWithEmailLink",Ks(e,t))}/**
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
 */class Kn extends Ni{constructor(t,n,s,r=null){super("password",s);this._email=t,this._password=n,this._tenantId=r}static _fromEmailAndPassword(t,n){return new Kn(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Kn(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Qp(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zp(t,{email:this._email,oobCode:this._password});default:He(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Xp(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return em(t,{idToken:n,email:this._email,oobCode:this._password});default:He(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function cn(e,t){return qs(e,"POST","/v1/accounts:signInWithIdp",Ks(e,t))}/**
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
 */const tm="http://localhost";class Ut extends Ni{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new Ut(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r}=n,i=yi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ut(s,r);return Object.assign(o,i),o}_getIdTokenResponse(t){const n=this.buildRequest();return cn(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,cn(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,cn(t,n)}buildRequest(){const t={requestUri:tm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=xn(n)}return t}}/**
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
 */function nm(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sm(e){const t=$n(Un(e)).link,n=t?$n(Un(t)).deep_link_id:null,s=$n(Un(e)).deep_link_id;return(s?$n(Un(s)).link:null)||s||n||t||e}class Mi{constructor(t){var n,s,r,i,o,a;const c=$n(Un(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,d=nm((r=c.mode)!==null&&r!==void 0?r:null);$(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=sm(t);try{return new Mi(n)}catch(s){return null}}}/**
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
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(t,n){return Kn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=Mi.parseLink(n);return $(s,"argument-error"),Kn._fromEmailAndCode(t,s.code,s.tenantId)}}ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qn extends zc{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class yt extends qn{constructor(){super("facebook.com")}static credential(t){return Ut._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yt.credentialFromTaggedObject(t)}static credentialFromError(t){return yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yt.credential(t.oauthAccessToken)}catch(n){return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
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
 */class bt extends qn{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return Ut._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return bt.credential(n,s)}catch(r){return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class Et extends qn{constructor(){super("github.com")}static credential(t){return Ut._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch(n){return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class It extends qn{constructor(){super("twitter.com")}static credential(t,n){return Ut._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return It.credential(n,s)}catch(r){return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */class un{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,r=!1){const i=await $t._fromIdTokenResponse(t,s,r),o=Kc(s);return new un({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const r=Kc(s);return new un({user:t,providerId:r,_tokenResponse:s,operationType:n})}}function Kc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Xs extends on{constructor(t,n,s,r){var i;super(n.code,n.message);this.operationType=s,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Xs.prototype),this.appName=t.name,this.code=n.code,this.tenantId=(i=t.tenantId)!==null&&i!==void 0?i:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(t,n,s,r){return new Xs(t,n,s,r)}}function qc(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xs._fromErrorAndOperation(e,i,t,s):i})}async function rm(e,t,n=!1){const s=await Wn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return un._forOperation(e,"link",s)}/**
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
 */async function im(e,t,n=!1){const{auth:s}=e,r="reauthenticate";try{const i=await Wn(e,qc(s,r,t,e),n);$(i.idToken,s,"internal-error");const o=Oi(i.idToken);$(o,s,"internal-error");const{sub:a}=o;return $(e.uid===a,s,"user-mismatch"),un._forOperation(e,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&He(s,"user-mismatch"),i}}/**
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
 */async function Gc(e,t,n=!1){const s="signIn",r=await qc(e,s,t),i=await un._fromIdTokenResponse(e,s,r);return n||await e._updateCurrentUser(i.user),i}async function om(e,t){return Gc(ki(e),t)}function $g(e,t,n){return om(Fn(e),ln.credential(t,n))}const Qs="__sak";/**
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
 */class Jc{constructor(t,n){this.storage=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qs,"1"),this.storage.removeItem(Qs),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}/**
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
 */function am(){const e=Ee();return Pi(e)||Ys(e)}const cm=1e3,lm=10;class Yc extends Jc{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=am()&&Jp(),this.fallbackToPolling=Vc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&t(n,r,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(s,t.newValue):this.storage.removeItem(s);else if(this.localCache[s]===t.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Gp()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,lm):r()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Yc.type="LOCAL";const um=Yc;/**
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
 */class Xc extends Jc{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Xc.type="SESSION";const Qc=Xc;/**
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
 */function fm(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const s=new Zs(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await fm(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zs.receivers=[];/**
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
 */function Li(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class dm{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Li("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function hm(e){Ye().location.href=e}/**
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
 */function Zc(){return typeof Ye().WorkerGlobalScope!="undefined"&&typeof Ye().importScripts=="function"}async function pm(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}function mm(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function gm(){return Zc()?self:null}/**
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
 */const el="firebaseLocalStorageDb",_m=1,er="firebaseLocalStorage",tl="fbase_key";class Gn{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tr(e,t){return e.transaction([er],t?"readwrite":"readonly").objectStore(er)}function vm(){const e=indexedDB.deleteDatabase(el);return new Gn(e).toPromise()}function Di(){const e=indexedDB.open(el,_m);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(er,{keyPath:tl})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(er)?t(s):(s.close(),await vm(),t(await Di()))})})}async function nl(e,t,n){const s=tr(e,!0).put({[tl]:t,value:n});return new Gn(s).toPromise()}async function ym(e,t){const n=tr(e,!1).get(t),s=await new Gn(n).toPromise();return s===void 0?null:s.value}function sl(e,t){const n=tr(e,!0).delete(t);return new Gn(n).toPromise()}const bm=800,Em=3;class rl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Di(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>Em)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zs._getInstance(gm()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await pm(),!this.activeServiceWorker)return;this.sender=new dm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((t=s[0])===null||t===void 0?void 0:t.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||mm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Di();return await nl(t,Qs,"1"),await sl(t,Qs),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>nl(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>ym(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>sl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const i=tr(r,!1).getAll();return new Gn(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rl.type="LOCAL";const Im=rl;/**
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
 */function wm(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Tm(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=r=>{const i=Je("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",wm().appendChild(s)})}function Cm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Hn(3e4,6e4);/**
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
 */function Rm(e,t){return t?ct(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class xi extends Ni{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return cn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return cn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return cn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Sm(e){return Gc(e.auth,new xi(e),e.bypassAuthState)}function Am(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),im(n,new xi(e),e.bypassAuthState)}async function Om(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),rm(n,new xi(e),e.bypassAuthState)}/**
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
 */class il{constructor(t,n,s,r,i=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Sm;case"linkViaPopup":case"linkViaRedirect":return Om;case"reauthViaPopup":case"reauthViaRedirect":return Am;default:He(this.auth,"internal-error")}}resolve(t){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Pm=new Hn(2e3,1e4);class fn extends il{constructor(t,n,s,r,i){super(t,n,r,i);this.provider=s,this.authWindow=null,this.pollId=null,fn.currentPopupAction&&fn.currentPopupAction.cancel(),fn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const t=Li();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,Pm.get())};t()}}fn.currentPopupAction=null;/**
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
 */const km="pendingRedirect",ol=new Map;class Nm extends il{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let t=ol.get(this.auth._key());if(!t){try{const s=await Mm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}ol.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mm(e,t){const n=Lm(t),s=await al(e)._get(n)==="true";return await al(e)._remove(n),s}function al(e){return ct(e._redirectPersistence)}function Lm(e){return Js(km,e.config.apiKey,e.name)}async function Dm(e,t,n=!1){const s=ki(e),r=Rm(s,t),o=await new Nm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const xm=10*60*1e3;class $m{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Um(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!ll(t)){const r=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=xm&&this.cachedEventUids.clear(),this.cachedEventUids.has(cl(t))}saveEventToCache(t){this.cachedEventUids.add(cl(t)),this.lastProcessedEventTime=Date.now()}}function cl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ll({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Um(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ll(e);default:return!1}}/**
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
 */async function Fm(e,t={}){return Vn(e,"GET","/v1/projects",t)}/**
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
 */const Bm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hm=/^https?/;async function Vm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Fm(e);for(const n of t)try{if(jm(n))return}catch(s){}He(e,"unauthorized-domain")}function jm(e){const t=Ti(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Hm.test(n))return!1;if(Bm.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Wm=new Hn(3e4,6e4);function ul(){const e=Ye().___jsl;if(e==null?void 0:e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function zm(e){return new Promise((t,n)=>{var s,r,i;function o(){ul(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ul(),n(Je(e,"network-request-failed"))},timeout:Wm.get()})}if((r=(s=Ye().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0?void 0:r.Iframe)t(gapi.iframes.getContext());else if((i=Ye().gapi)===null||i===void 0?void 0:i.load)o();else{const a=Cm("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(Je(e,"network-request-failed"))},Tm(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(t=>{throw nr=null,t})}let nr=null;function Km(e){return nr=nr||zm(e),nr}/**
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
 */const qm=new Hn(5e3,15e3),Gm="__/auth/iframe",Jm="emulator/auth/iframe",Ym={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Xm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qm(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ci(t,Jm):`https://${e.config.authDomain}/${Gm}`,s={apiKey:t.apiKey,appName:e.name,v:js},r=Xm.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${xn(s).slice(1)}`}async function Zm(e){const t=await Km(e),n=Ye().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:Qm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ym,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Je(e,"network-request-failed"),a=Ye().setTimeout(()=>{i(o)},qm.get());function c(){Ye().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const eg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tg=500,ng=600,sg="_blank",rg="http://localhost";class fl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function ig(e,t,n,s=tg,r=ng){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},eg),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=$c(l)?sg:n),xc(l)&&(t=t||rg,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,T])=>`${h}${g}=${T},`,"");if(qp(l)&&a!=="_self")return og(t||"",a),new fl(null);const d=window.open(t||"",a,u);$(d,e,"popup-blocked");try{d.focus()}catch(h){}return new fl(d)}function og(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ag="__/auth/handler",cg="emulator/auth/handler";function dl(e,t,n,s,r,i){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:js,eventId:r};if(t instanceof zc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Mh(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(t instanceof qn){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${lg(e)}?${xn(a).slice(1)}`}function lg({config:e}){return e.emulator?Ci(e,cg):`https://${e.authDomain}/${ag}`}/**
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
 */const $i="webStorageSupport";class ug{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qc,this._completeRedirectFn=Dm}async _openPopup(t,n,s,r){var i;at((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=dl(t,n,s,Ti(),r);return ig(t,o,Li())}async _openRedirect(t,n,s,r){return await this._originValidation(t),hm(dl(t,n,s,Ti(),r)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(at(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s}async initAndGetManager(t){const n=await Zm(t),s=new $m(t);return n.register("authEvent",r=>($(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($i,{type:$i},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[$i];o!==void 0&&n(!!o),He(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vm(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vc()||Pi()||Ys()}}const fg=ug;var dg="@firebase/auth",hg="0.18.1";/**
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
 */class pg{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{var r;t(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mg(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gg(e){Hs(new Bn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=s.options;return(o=>{$(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),$(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jc(e)},c=new Yp(o,a);return Pp(c,n),c})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Hs(new Bn("auth-internal",t=>{const n=ki(t.getProvider("auth").getImmediate());return(s=>new pg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ws(dg,hg,mg(e))}/**
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
 */function Ug(e=Cp()){const t=Tc(e,"auth");return t.isInitialized()?t.getImmediate():Op(e,{popupRedirectResolver:fg,persistence:[Im,um,Qc]})}gg("Browser");function Fg(e,t){return e.then(function(n){return[null,n]}).catch(function(n){return t&&Object.assign(n,t),[n,void 0]})}var _g="firebase",vg="9.1.1";/**
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
 */Ws(_g,vg,"app");var yg=!1;/*!
  * pinia v2.0.0-rc.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const bg=Symbol();var hl;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(hl||(hl={}));function Bg(){const e=Rl(!0),t=e.run(()=>yo({}));let n=[];const s=[],r=Er({install(i){r._a=i,i.provide(bg,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o))},use(i){return!this._a&&!yg?s.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}export{Ug as A,Fg as B,$g as C,Dg as D,kg as E,be as F,Pg as G,Bf as H,Bg as I,As as J,Cg as K,Ag as L,Eg as M,Ig as N,Ke as O,tu as P,Oo as Q,Og as R,wa as T,Lg as V,fe as a,ea as b,Rg as c,Sg as d,et as e,Ng as f,ta as g,qt as h,he as i,Lr as j,xr as k,Tg as l,yo as m,or as n,de as o,wg as p,Hu as q,En as r,ir as s,Vi as t,Mg as u,Wr as v,vn as w,$f as x,Is as y,xg as z};
