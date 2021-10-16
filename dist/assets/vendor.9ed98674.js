function Qs(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ol="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",al=Qs(ol);function Ni(e){return!!e||e===""}function Zs(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=_e(s)?ul(s):Zs(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(_e(e))return e;if(pe(e))return e}}const cl=/;(?![^(]*\))/g,ll=/:(.+)/;function ul(e){const t={};return e.split(cl).forEach(n=>{if(n){const s=n.split(ll);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function er(e){let t="";if(_e(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const s=er(e[n]);s&&(t+=s+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Mi=e=>e==null?"":F(e)||pe(e)&&(e.toString===Ui||!H(e.toString))?JSON.stringify(e,Li,2):String(e),Li=(e,t)=>t&&t.__v_isRef?Li(e,t.value):jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:xi(t)?{[`Set(${t.size})`]:[...t.values()]}:pe(t)&&!F(t)&&!Fi(t)?String(t):t,Z={},Ht=[],$e=()=>{},fl=()=>!1,dl=/^on[^a-z]/,Vn=e=>dl.test(e),tr=e=>e.startsWith("onUpdate:"),ve=Object.assign,Di=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hl=Object.prototype.hasOwnProperty,G=(e,t)=>hl.call(e,t),F=Array.isArray,jt=e=>zn(e)==="[object Map]",xi=e=>zn(e)==="[object Set]",H=e=>typeof e=="function",_e=e=>typeof e=="string",nr=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",$i=e=>pe(e)&&H(e.then)&&H(e.catch),Ui=Object.prototype.toString,zn=e=>Ui.call(e),pl=e=>zn(e).slice(8,-1),Fi=e=>zn(e)==="[object Object]",sr=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wn=Qs(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ml=/-(\w)/g,Ve=Kn(e=>e.replace(ml,(t,n)=>n?n.toUpperCase():"")),gl=/\B([A-Z])/g,Vt=Kn(e=>e.replace(gl,"-$1").toLowerCase()),qn=Kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Gn=Kn(e=>e?`on${qn(e)}`:""),dn=(e,t)=>!Object.is(e,t),Jn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Yn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Xn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Bi;const vl=()=>Bi||(Bi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ze;const Qn=[];class Hi{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ze&&(this.parent=ze,this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(Qn.push(this),ze=this)}off(){this.active&&(Qn.pop(),ze=Qn[Qn.length-1])}stop(t){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function _l(e){return new Hi(e)}function yl(e,t){t=t||ze,t&&t.active&&t.effects.push(e)}function lg(){return ze}function ug(e){ze&&ze.cleanups.push(e)}const rr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ji=e=>(e.w&lt)>0,Vi=e=>(e.n&lt)>0,bl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=lt},El=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];ji(r)&&!Vi(r)?r.delete(e):t[n++]=r,r.w&=~lt,r.n&=~lt}t.length=n}},ir=new WeakMap;let hn=0,lt=1;const or=30,pn=[];let Tt;const wt=Symbol(""),ar=Symbol("");class cr{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],yl(this,s)}run(){if(!this.active)return this.fn();if(!pn.includes(this))try{return pn.push(Tt=this),Il(),lt=1<<++hn,hn<=or?bl(this):zi(this),this.fn()}finally{hn<=or&&El(this),lt=1<<--hn,Ct(),pn.pop();const t=pn.length;Tt=t>0?pn[t-1]:void 0}}stop(){this.active&&(zi(this),this.onStop&&this.onStop(),this.active=!1)}}function zi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let zt=!0;const lr=[];function Wt(){lr.push(zt),zt=!1}function Il(){lr.push(zt),zt=!0}function Ct(){const e=lr.pop();zt=e===void 0?!0:e}function Se(e,t,n){if(!Wi())return;let s=ir.get(e);s||ir.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=rr()),Ki(r)}function Wi(){return zt&&Tt!==void 0}function Ki(e,t){let n=!1;hn<=or?Vi(e)||(e.n|=lt,n=!ji(e)):n=!e.has(Tt),n&&(e.add(Tt),Tt.deps.push(e))}function Qe(e,t,n,s,r,i){const o=ir.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&F(e))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":F(e)?sr(n)&&a.push(o.get("length")):(a.push(o.get(wt)),jt(e)&&a.push(o.get(ar)));break;case"delete":F(e)||(a.push(o.get(wt)),jt(e)&&a.push(o.get(ar)));break;case"set":jt(e)&&a.push(o.get(wt));break}if(a.length===1)a[0]&&ur(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ur(rr(c))}}function ur(e,t){for(const n of F(e)?e:[...e])(n!==Tt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Tl=Qs("__proto__,__v_isRef,__isVue"),qi=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(nr)),wl=fr(),Cl=fr(!1,!0),Rl=fr(!0),Gi=Sl();function Sl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=q(this);for(let i=0,o=this.length;i<o;i++)Se(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(q)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Wt();const s=q(this)[t].apply(this,n);return Ct(),s}}),e}function fr(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_raw"&&i===(e?t?Vl:so:t?no:to).get(s))return s;const o=F(s);if(!e&&o&&G(Gi,r))return Reflect.get(Gi,r,i);const a=Reflect.get(s,r,i);return(nr(r)?qi.has(r):Tl(r))||(e||Se(s,"get",r),t)?a:Ce(a)?!o||!sr(r)?a.value:a:pe(a)?e?ro(a):mn(a):a}}const Al=Ji(),Ol=Ji(!0);function Ji(e=!1){return function(n,s,r,i){let o=n[s];if(!e&&(r=q(r),o=q(o),!F(n)&&Ce(o)&&!Ce(r)))return o.value=r,!0;const a=F(n)&&sr(s)?Number(s)<n.length:G(n,s),c=Reflect.set(n,s,r,i);return n===q(i)&&(a?dn(r,o)&&Qe(n,"set",s,r):Qe(n,"add",s,r)),c}}function Pl(e,t){const n=G(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Qe(e,"delete",t,void 0),s}function kl(e,t){const n=Reflect.has(e,t);return(!nr(t)||!qi.has(t))&&Se(e,"has",t),n}function Nl(e){return Se(e,"iterate",F(e)?"length":wt),Reflect.ownKeys(e)}const Yi={get:wl,set:Al,deleteProperty:Pl,has:kl,ownKeys:Nl},Ml={get:Rl,set(e,t){return!0},deleteProperty(e,t){return!0}},Ll=ve({},Yi,{get:Cl,set:Ol}),dr=e=>e,Zn=e=>Reflect.getPrototypeOf(e);function es(e,t,n=!1,s=!1){e=e.__v_raw;const r=q(e),i=q(t);t!==i&&!n&&Se(r,"get",t),!n&&Se(r,"get",i);const{has:o}=Zn(r),a=s?dr:n?gr:gn;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function ts(e,t=!1){const n=this.__v_raw,s=q(n),r=q(e);return e!==r&&!t&&Se(s,"has",e),!t&&Se(s,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function ns(e,t=!1){return e=e.__v_raw,!t&&Se(q(e),"iterate",wt),Reflect.get(e,"size",e)}function Xi(e){e=q(e);const t=q(this);return Zn(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function Qi(e,t){t=q(t);const n=q(this),{has:s,get:r}=Zn(n);let i=s.call(n,e);i||(e=q(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?dn(t,o)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function Zi(e){const t=q(this),{has:n,get:s}=Zn(t);let r=n.call(t,e);r||(e=q(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&Qe(t,"delete",e,void 0),i}function eo(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function ss(e,t){return function(s,r){const i=this,o=i.__v_raw,a=q(o),c=t?dr:e?gr:gn;return!e&&Se(a,"iterate",wt),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function rs(e,t,n){return function(...s){const r=this.__v_raw,i=q(r),o=jt(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...s),u=n?dr:t?gr:gn;return!t&&Se(i,"iterate",c?ar:wt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function ut(e){return function(...t){return e==="delete"?!1:this}}function Dl(){const e={get(i){return es(this,i)},get size(){return ns(this)},has:ts,add:Xi,set:Qi,delete:Zi,clear:eo,forEach:ss(!1,!1)},t={get(i){return es(this,i,!1,!0)},get size(){return ns(this)},has:ts,add:Xi,set:Qi,delete:Zi,clear:eo,forEach:ss(!1,!0)},n={get(i){return es(this,i,!0)},get size(){return ns(this,!0)},has(i){return ts.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ss(!0,!1)},s={get(i){return es(this,i,!0,!0)},get size(){return ns(this,!0)},has(i){return ts.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=rs(i,!1,!1),n[i]=rs(i,!0,!1),t[i]=rs(i,!1,!0),s[i]=rs(i,!0,!0)}),[e,n,t,s]}const[xl,$l,Ul,Fl]=Dl();function hr(e,t){const n=t?e?Fl:Ul:e?$l:xl;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(G(n,r)&&r in s?n:s,r,i)}const Bl={get:hr(!1,!1)},Hl={get:hr(!1,!0)},jl={get:hr(!0,!1)},to=new WeakMap,no=new WeakMap,so=new WeakMap,Vl=new WeakMap;function zl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wl(e){return e.__v_skip||!Object.isExtensible(e)?0:zl(pl(e))}function mn(e){return e&&e.__v_isReadonly?e:pr(e,!1,Yi,Bl,to)}function Kl(e){return pr(e,!1,Ll,Hl,no)}function ro(e){return pr(e,!0,Ml,jl,so)}function pr(e,t,n,s,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Wl(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function Kt(e){return io(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function io(e){return!!(e&&e.__v_isReadonly)}function oo(e){return Kt(e)||io(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function mr(e){return Yn(e,"__v_skip",!0),e}const gn=e=>pe(e)?mn(e):e,gr=e=>pe(e)?ro(e):e;function ao(e){Wi()&&(e=q(e),e.dep||(e.dep=rr()),Ki(e.dep))}function co(e,t){e=q(e),e.dep&&ur(e.dep)}function Ce(e){return Boolean(e&&e.__v_isRef===!0)}function lo(e){return uo(e,!1)}function ql(e){return uo(e,!0)}function uo(e,t){return Ce(e)?e:new Gl(e,t)}class Gl{constructor(t,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:gn(t)}get value(){return ao(this),this._value}set value(t){t=this._shallow?t:q(t),dn(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:gn(t),co(this))}}function qt(e){return Ce(e)?e.value:e}const Jl={get:(e,t,n)=>qt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Ce(r)&&!Ce(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function fo(e){return Kt(e)?e:new Proxy(e,Jl)}class Yl{constructor(t,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new cr(t,()=>{this._dirty||(this._dirty=!0,co(this))}),this.__v_isReadonly=s}get value(){const t=q(this);return ao(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function We(e,t){let n,s;const r=H(e);return r?(n=e,s=$e):(n=e.get,s=e.set),new Yl(n,s,r||!s)}Promise.resolve();function Xl(e,t,...n){const s=e.vnode.props||Z;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Z;h?r=n.map(g=>g.trim()):d&&(r=n.map(Xn))}let a,c=s[a=Gn(t)]||s[a=Gn(Ve(t))];!c&&i&&(c=s[a=Gn(Vt(t))]),c&&De(c,e,6,r);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,De(l,e,6,r)}}function ho(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!H(e)){const c=l=>{const u=ho(l,t,!0);u&&(a=!0,ve(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(s.set(e,null),null):(F(i)?i.forEach(c=>o[c]=null):ve(o,i),s.set(e,o),o)}function vr(e,t){return!e||!Vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,Vt(t))||G(e,t))}let Ae=null,is=null;function os(e){const t=Ae;return Ae=e,is=e&&e.type.__scopeId||null,t}function fg(e){is=e}function dg(){is=null}function vn(e,t=Ae,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&jo(-1);const i=os(t),o=e(...r);return os(i),s._d&&jo(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function _r(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:g,ctx:w,inheritAttrs:D}=e;let S,A;const x=os(e);try{if(n.shapeFlag&4){const V=r||s;S=qe(u.call(V,V,d,i,g,h,w)),A=c}else{const V=t;S=qe(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),A=t.props?c:Ql(c)}}catch(V){En.length=0,bs(V,e,1),S=fe(Fe)}let j=S;if(A&&D!==!1){const V=Object.keys(A),{shapeFlag:te}=j;V.length&&te&(1|6)&&(o&&V.some(tr)&&(A=Zl(A,o)),j=Gt(j,A))}return n.dirs&&(j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),S=j,os(x),S}const Ql=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vn(n))&&((t||(t={}))[n]=e[n]);return t},Zl=(e,t)=>{const n={};for(const s in e)(!tr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function eu(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?po(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!vr(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?po(s,o,l):!0:!!o;return!1}function po(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!vr(n,i))return!0}return!1}function tu({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const nu=e=>e.__isSuspense;function su(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Ju(e)}function as(e,t){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[e]=t}}function Ue(e,t,n=!1){const s=ye||Ae;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&H(t)?t.call(s.proxy):t}}function mo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bo(()=>{e.isMounted=!0}),Io(()=>{e.isUnmounting=!0}),e}const Le=[Function,Array],ru={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Le,onEnter:Le,onAfterEnter:Le,onEnterCancelled:Le,onBeforeLeave:Le,onLeave:Le,onAfterLeave:Le,onLeaveCancelled:Le,onBeforeAppear:Le,onAppear:Le,onAfterAppear:Le,onAppearCancelled:Le},setup(e,{slots:t}){const n=Mr(),s=mo();let r;return()=>{const i=t.default&&br(t.default(),!0);if(!i||!i.length)return;const o=q(e),{mode:a}=o,c=i[0];if(s.isLeaving)return yr(c);const l=_o(c);if(!l)return yr(c);const u=_n(l,o,s,n);yn(l,u);const d=n.subTree,h=d&&_o(d);let g=!1;const{getTransitionKey:w}=l.type;if(w){const D=w();r===void 0?r=D:D!==r&&(r=D,g=!0)}if(h&&h.type!==Fe&&(!Ot(l,h)||g)){const D=_n(h,o,s,n);if(yn(h,D),a==="out-in")return s.isLeaving=!0,D.afterLeave=()=>{s.isLeaving=!1,n.update()},yr(c);a==="in-out"&&l.type!==Fe&&(D.delayLeave=(S,A,x)=>{const j=vo(s,h);j[String(h.key)]=h,S._leaveCb=()=>{A(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return c}}},go=ru;function vo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function _n(e,t,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:D,onAppear:S,onAfterAppear:A,onAppearCancelled:x}=t,j=String(e.key),V=vo(n,e),te=(z,ce)=>{z&&De(z,s,9,ce)},ae={mode:i,persisted:o,beforeEnter(z){let ce=a;if(!n.isMounted)if(r)ce=D||a;else return;z._leaveCb&&z._leaveCb(!0);const J=V[j];J&&Ot(e,J)&&J.el._leaveCb&&J.el._leaveCb(),te(ce,[z])},enter(z){let ce=c,J=l,me=u;if(!n.isMounted)if(r)ce=S||c,J=A||l,me=x||u;else return;let ge=!1;const k=z._enterCb=le=>{ge||(ge=!0,le?te(me,[z]):te(J,[z]),ae.delayedLeave&&ae.delayedLeave(),z._enterCb=void 0)};ce?(ce(z,k),ce.length<=1&&k()):k()},leave(z,ce){const J=String(e.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return ce();te(d,[z]);let me=!1;const ge=z._leaveCb=k=>{me||(me=!0,ce(),k?te(w,[z]):te(g,[z]),z._leaveCb=void 0,V[J]===e&&delete V[J])};V[J]=e,h?(h(z,ge),h.length<=1&&ge()):ge()},clone(z){return _n(z,t,n,s)}};return ae}function yr(e){if(cs(e))return e=Gt(e),e.children=null,e}function _o(e){return cs(e)?e.children?e.children[0]:void 0:e}function yn(e,t){e.shapeFlag&6&&e.component?yn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function br(e,t=!1){let n=[],s=0;for(let r=0;r<e.length;r++){const i=e[r];i.type===be?(i.patchFlag&128&&s++,n=n.concat(br(i.children,t))):(t||i.type!==Fe)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Ze(e){return H(e)?{setup:e,name:e.name}:e}const Er=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function iu(e,t){yo(e,"a",t)}function ou(e,t){yo(e,"da",t)}function yo(e,t,n=ye){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}e()});if(ls(t,s,n),n){let r=n.parent;for(;r&&r.parent;)cs(r.parent.vnode)&&au(s,t,n,r),r=r.parent}}function au(e,t,n,s){const r=ls(t,e,s,!0);To(()=>{Di(s[t],r)},n)}function ls(e,t,n=ye,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Wt(),Jt(n);const a=De(t,n,e,o);return Pt(),Ct(),a});return s?r.unshift(i):r.push(i),i}}const et=e=>(t,n=ye)=>(!ys||e==="sp")&&ls(e,t,n),cu=et("bm"),bo=et("m"),lu=et("bu"),Eo=et("u"),Io=et("bum"),To=et("um"),uu=et("sp"),fu=et("rtg"),du=et("rtc");function hu(e,t=ye){ls("ec",e,t)}let Ir=!0;function pu(e){const t=Ro(e),n=e.proxy,s=e.ctx;Ir=!1,t.beforeCreate&&wo(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:w,activated:D,deactivated:S,beforeDestroy:A,beforeUnmount:x,destroyed:j,unmounted:V,render:te,renderTracked:ae,renderTriggered:z,errorCaptured:ce,serverPrefetch:J,expose:me,inheritAttrs:ge,components:k,directives:le,filters:we}=t;if(l&&mu(l,s,null,e.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Y=o[ne];H(Y)&&(s[ne]=Y.bind(n))}if(r){const ne=r.call(n,n);pe(ne)&&(e.data=mn(ne))}if(Ir=!0,i)for(const ne in i){const Y=i[ne],Ne=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):$e,Ft=!H(Y)&&H(Y.set)?Y.set.bind(n):$e,Xe=We({get:Ne,set:Ft});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:He=>Xe.value=He})}if(a)for(const ne in a)Co(a[ne],s,n,ne);if(c){const ne=H(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Y=>{as(Y,ne[Y])})}u&&wo(u,e,"c");function ue(ne,Y){F(Y)?Y.forEach(Ne=>ne(Ne.bind(n))):Y&&ne(Y.bind(n))}if(ue(cu,d),ue(bo,h),ue(lu,g),ue(Eo,w),ue(iu,D),ue(ou,S),ue(hu,ce),ue(du,ae),ue(fu,z),ue(Io,x),ue(To,V),ue(uu,J),F(me))if(me.length){const ne=e.exposed||(e.exposed={});me.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>n[Y],set:Ne=>n[Y]=Ne})})}else e.exposed||(e.exposed={});te&&e.render===$e&&(e.render=te),ge!=null&&(e.inheritAttrs=ge),k&&(e.components=k),le&&(e.directives=le)}function mu(e,t,n=$e,s=!1){F(e)&&(e=Tr(e));for(const r in e){const i=e[r];let o;pe(i)?"default"in i?o=Ue(i.from||r,i.default,!0):o=Ue(i.from||r):o=Ue(i),Ce(o)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function wo(e,t,n){De(F(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Co(e,t,n,s){const r=s.includes(".")?oa(n,s):()=>n[s];if(_e(e)){const i=t[e];H(i)&&Is(r,i)}else if(H(e))Is(r,e.bind(n));else if(pe(e))if(F(e))e.forEach(i=>Co(i,t,n,s));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&Is(r,i,e)}}function Ro(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(l=>us(c,l,o,!0)),us(c,t,o)),i.set(t,c),c}function us(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&us(e,i,n,!0),r&&r.forEach(o=>us(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=gu[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const gu={data:So,props:Rt,emits:Rt,methods:Rt,computed:Rt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Rt,directives:Rt,watch:_u,provide:So,inject:vu};function So(e,t){return t?e?function(){return ve(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function vu(e,t){return Rt(Tr(e),Tr(t))}function Tr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Rt(e,t){return e?ve(ve(Object.create(null),e),t):t}function _u(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const s in t)n[s]=Ie(e[s],t[s]);return n}function yu(e,t,n,s=!1){const r={},i={};Yn(i,ps,1),e.propsDefaults=Object.create(null),Ao(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Kl(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function bu(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=q(r),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const g=t[h];if(c)if(G(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const w=Ve(h);r[w]=wr(c,a,w,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Ao(e,t,r,i)&&(l=!0);let u;for(const d in a)(!t||!G(t,d)&&((u=Vt(d))===d||!G(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=wr(c,a,d,void 0,e,!0)):delete r[d]);if(i!==a)for(const d in i)(!t||!G(t,d))&&(delete i[d],l=!0)}l&&Qe(e,"set","$attrs")}function Ao(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Wn(c))continue;const l=t[c];let u;r&&G(r,u=Ve(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:vr(e.emitsOptions,c)||l!==s[c]&&(s[c]=l,o=!0)}if(i){const c=q(n),l=a||Z;for(let u=0;u<i.length;u++){const d=i[u];n[d]=wr(r,c,d,l[d],e,!G(l,d))}}return o}function wr(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=G(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Jt(r),s=l[n]=c.call(null,t),Pt())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Vt(n))&&(s=!0))}return s}function Oo(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!H(e)){const u=d=>{c=!0;const[h,g]=Oo(d,t,!0);ve(o,h),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return s.set(e,Ht),Ht;if(F(i))for(let u=0;u<i.length;u++){const d=Ve(i[u]);Po(d)&&(o[d]=Z)}else if(i)for(const u in i){const d=Ve(u);if(Po(d)){const h=i[u],g=o[d]=F(h)||H(h)?{type:h}:h;if(g){const w=Mo(Boolean,g.type),D=Mo(String,g.type);g[0]=w>-1,g[1]=D<0||w<D,(w>-1||G(g,"default"))&&a.push(d)}}}const l=[o,a];return s.set(e,l),l}function Po(e){return e[0]!=="$"}function ko(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function No(e,t){return ko(e)===ko(t)}function Mo(e,t){return F(t)?t.findIndex(n=>No(n,e)):H(t)&&No(t,e)?0:-1}const Lo=e=>e[0]==="_"||e==="$stable",Cr=e=>F(e)?e.map(qe):[qe(e)],Eu=(e,t,n)=>{const s=vn((...r)=>Cr(t(...r)),n);return s._c=!1,s},Do=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Lo(r))continue;const i=e[r];if(H(i))t[r]=Eu(r,i,s);else if(i!=null){const o=Cr(i);t[r]=()=>o}}},xo=(e,t)=>{const n=Cr(t);e.slots.default=()=>n},Iu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),Yn(t,"_",n)):Do(t,e.slots={})}else e.slots={},t&&xo(e,t);Yn(e.slots,ps,1)},Tu=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=Z;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(ve(r,t),!n&&a===1&&delete r._):(i=!t.$stable,Do(t,r)),o=t}else t&&(xo(e,t),o={default:1});if(i)for(const a in r)!Lo(a)&&!(a in o)&&delete r[a]};function hg(e,t){const n=Ae;if(n===null)return e;const s=n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=Z]=t[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&kt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return e}function St(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Wt(),De(c,n,8,[e.el,a,e,t]),Ct())}}function $o(){return{app:null,config:{isNativeTag:fl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wu=0;function Cu(e,t){return function(s,r=null){r!=null&&!pe(r)&&(r=null);const i=$o(),o=new Set;let a=!1;const c=i.app={_uid:wu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Xu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=fe(s,r);return h.appContext=i,u&&t?t(h,l):e(h,l,d),a=!0,c._container=l,l.__vue_app__=c,Lr(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}const Te=su;function Ru(e){return Su(e)}function Su(e,t){const n=vl();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=$e,cloneNode:w,insertStaticContent:D}=e,S=(f,p,m,y=null,_=null,T=null,R=!1,E=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ot(f,p)&&(y=N(f),Me(f,_,T,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:b,ref:M,shapeFlag:O}=p;switch(b){case Or:A(f,p,m,y);break;case Fe:x(f,p,m,y);break;case fs:f==null&&j(p,m,y,R);break;case be:le(f,p,m,y,_,T,R,E,I);break;default:O&1?ae(f,p,m,y,_,T,R,E,I):O&6?we(f,p,m,y,_,T,R,E,I):(O&64||O&128)&&b.process(f,p,m,y,_,T,R,E,I,se)}M!=null&&_&&Rr(M,f&&f.ref,T,p||f,!p)},A=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},x=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},j=(f,p,m,y)=>{[f.el,f.anchor]=D(f.children,p,m,y)},V=({el:f,anchor:p},m,y)=>{let _;for(;f&&f!==p;)_=h(f),s(f,m,y),f=_;s(p,m,y)},te=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=h(f),r(f),f=m;r(p)},ae=(f,p,m,y,_,T,R,E,I)=>{R=R||p.type==="svg",f==null?z(p,m,y,_,T,R,E,I):me(f,p,_,T,R,E,I)},z=(f,p,m,y,_,T,R,E)=>{let I,b;const{type:M,props:O,shapeFlag:L,transition:$,patchFlag:K,dirs:oe}=f;if(f.el&&w!==void 0&&K===-1)I=f.el=w(f.el);else{if(I=f.el=o(f.type,T,O&&O.is,O),L&8?u(I,f.children):L&16&&J(f.children,I,null,y,_,T&&M!=="foreignObject",R,E),oe&&St(f,null,y,"created"),O){for(const ie in O)ie!=="value"&&!Wn(ie)&&i(I,ie,null,O[ie],T,f.children,y,_,C);"value"in O&&i(I,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Ke(b,y,f)}ce(I,f,f.scopeId,R,y)}oe&&St(f,null,y,"beforeMount");const Q=(!_||_&&!_.pendingBranch)&&$&&!$.persisted;Q&&$.beforeEnter(I),s(I,p,m),((b=O&&O.onVnodeMounted)||Q||oe)&&Te(()=>{b&&Ke(b,y,f),Q&&$.enter(I),oe&&St(f,null,y,"mounted")},_)},ce=(f,p,m,y,_)=>{if(m&&g(f,m),y)for(let T=0;T<y.length;T++)g(f,y[T]);if(_){let T=_.subTree;if(p===T){const R=_.vnode;ce(f,R,R.scopeId,R.slotScopeIds,_.parent)}}},J=(f,p,m,y,_,T,R,E,I=0)=>{for(let b=I;b<f.length;b++){const M=f[b]=E?ft(f[b]):qe(f[b]);S(null,M,p,m,y,_,T,R,E)}},me=(f,p,m,y,_,T,R)=>{const E=p.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:M}=p;I|=f.patchFlag&16;const O=f.props||Z,L=p.props||Z;let $;($=L.onVnodeBeforeUpdate)&&Ke($,m,p,f),M&&St(p,f,m,"beforeUpdate");const K=_&&p.type!=="foreignObject";if(b?ge(f.dynamicChildren,b,E,m,y,K,T):R||Ne(f,p,E,null,m,y,K,T,!1),I>0){if(I&16)k(E,p,O,L,m,y,_);else if(I&2&&O.class!==L.class&&i(E,"class",null,L.class,_),I&4&&i(E,"style",O.style,L.style,_),I&8){const oe=p.dynamicProps;for(let Q=0;Q<oe.length;Q++){const ie=oe[Q],xe=O[ie],Bt=L[ie];(Bt!==xe||ie==="value")&&i(E,ie,xe,Bt,_,f.children,m,y,C)}}I&1&&f.children!==p.children&&u(E,p.children)}else!R&&b==null&&k(E,p,O,L,m,y,_);(($=L.onVnodeUpdated)||M)&&Te(()=>{$&&Ke($,m,p,f),M&&St(p,f,m,"updated")},y)},ge=(f,p,m,y,_,T,R)=>{for(let E=0;E<p.length;E++){const I=f[E],b=p[E],M=I.el&&(I.type===be||!Ot(I,b)||I.shapeFlag&(6|64))?d(I.el):m;S(I,b,M,null,y,_,T,R,!0)}},k=(f,p,m,y,_,T,R)=>{if(m!==y){for(const E in y){if(Wn(E))continue;const I=y[E],b=m[E];I!==b&&E!=="value"&&i(f,E,b,I,R,p.children,_,T,C)}if(m!==Z)for(const E in m)!Wn(E)&&!(E in y)&&i(f,E,m[E],null,R,p.children,_,T,C);"value"in y&&i(f,"value",m.value,y.value)}},le=(f,p,m,y,_,T,R,E,I)=>{const b=p.el=f?f.el:a(""),M=p.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:$}=p;$&&(E=E?E.concat($):$),f==null?(s(b,m,y),s(M,m,y),J(p.children,m,M,_,T,R,E,I)):O>0&&O&64&&L&&f.dynamicChildren?(ge(f.dynamicChildren,L,m,_,T,R,E),(p.key!=null||_&&p===_.subTree)&&Uo(f,p,!0)):Ne(f,p,m,M,_,T,R,E,I)},we=(f,p,m,y,_,T,R,E,I)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?_.ctx.activate(p,m,y,R,I):Ye(p,m,y,_,T,R,I):ue(f,p,I)},Ye=(f,p,m,y,_,T,R)=>{const E=f.component=Uu(f,y,_);if(cs(f)&&(E.ctx.renderer=se),Fu(E),E.asyncDep){if(_&&_.registerDep(E,ne),!f.el){const I=E.subTree=fe(Fe);x(null,I,p,m)}return}ne(E,f,p,m,_,T,R)},ue=(f,p,m)=>{const y=p.component=f.component;if(eu(f,p,m))if(y.asyncDep&&!y.asyncResolved){Y(y,p,m);return}else y.next=p,qu(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},ne=(f,p,m,y,_,T,R)=>{const E=()=>{if(f.isMounted){let{next:M,bu:O,u:L,parent:$,vnode:K}=f,oe=M,Q;I.allowRecurse=!1,M?(M.el=K.el,Y(f,M,R)):M=K,O&&Jn(O),(Q=M.props&&M.props.onVnodeBeforeUpdate)&&Ke(Q,$,M,K),I.allowRecurse=!0;const ie=_r(f),xe=f.subTree;f.subTree=ie,S(xe,ie,d(xe.el),N(xe),f,_,T),M.el=ie.el,oe===null&&tu(f,ie.el),L&&Te(L,_),(Q=M.props&&M.props.onVnodeUpdated)&&Te(()=>Ke(Q,$,M,K),_)}else{let M;const{el:O,props:L}=p,{bm:$,m:K,parent:oe}=f,Q=Er(p);if(I.allowRecurse=!1,$&&Jn($),!Q&&(M=L&&L.onVnodeBeforeMount)&&Ke(M,oe,p),I.allowRecurse=!0,O&&B){const ie=()=>{f.subTree=_r(f),B(O,f.subTree,f,_,null)};Q?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=_r(f);S(null,ie,m,y,f,_,T),p.el=ie.el}if(K&&Te(K,_),!Q&&(M=L&&L.onVnodeMounted)){const ie=p;Te(()=>Ke(M,oe,ie),_)}p.shapeFlag&256&&f.a&&Te(f.a,_),f.isMounted=!0,p=m=y=null}},I=new cr(E,()=>Zo(f.update),f.scope),b=f.update=I.run.bind(I);b.id=f.uid,I.allowRecurse=b.allowRecurse=!0,b()},Y=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,bu(f,p.props,y,m),Tu(f,p.children,m),Wt(),Fr(void 0,f.update),Ct()},Ne=(f,p,m,y,_,T,R,E,I=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,O=p.children,{patchFlag:L,shapeFlag:$}=p;if(L>0){if(L&128){Xe(b,O,m,y,_,T,R,E,I);return}else if(L&256){Ft(b,O,m,y,_,T,R,E,I);return}}$&8?(M&16&&C(b,_,T),O!==b&&u(m,O)):M&16?$&16?Xe(b,O,m,y,_,T,R,E,I):C(b,_,T,!0):(M&8&&u(m,""),$&16&&J(O,m,y,_,T,R,E,I))},Ft=(f,p,m,y,_,T,R,E,I)=>{f=f||Ht,p=p||Ht;const b=f.length,M=p.length,O=Math.min(b,M);let L;for(L=0;L<O;L++){const $=p[L]=I?ft(p[L]):qe(p[L]);S(f[L],$,m,null,_,T,R,E,I)}b>M?C(f,_,T,!0,!1,O):J(p,m,y,_,T,R,E,I,O)},Xe=(f,p,m,y,_,T,R,E,I)=>{let b=0;const M=p.length;let O=f.length-1,L=M-1;for(;b<=O&&b<=L;){const $=f[b],K=p[b]=I?ft(p[b]):qe(p[b]);if(Ot($,K))S($,K,m,null,_,T,R,E,I);else break;b++}for(;b<=O&&b<=L;){const $=f[O],K=p[L]=I?ft(p[L]):qe(p[L]);if(Ot($,K))S($,K,m,null,_,T,R,E,I);else break;O--,L--}if(b>O){if(b<=L){const $=L+1,K=$<M?p[$].el:y;for(;b<=L;)S(null,p[b]=I?ft(p[b]):qe(p[b]),m,K,_,T,R,E,I),b++}}else if(b>L)for(;b<=O;)Me(f[b],_,T,!0),b++;else{const $=b,K=b,oe=new Map;for(b=K;b<=L;b++){const Re=p[b]=I?ft(p[b]):qe(p[b]);Re.key!=null&&oe.set(Re.key,b)}let Q,ie=0;const xe=L-K+1;let Bt=!1,Oi=0;const fn=new Array(xe);for(b=0;b<xe;b++)fn[b]=0;for(b=$;b<=O;b++){const Re=f[b];if(ie>=xe){Me(Re,_,T,!0);continue}let je;if(Re.key!=null)je=oe.get(Re.key);else for(Q=K;Q<=L;Q++)if(fn[Q-K]===0&&Ot(Re,p[Q])){je=Q;break}je===void 0?Me(Re,_,T,!0):(fn[je-K]=b+1,je>=Oi?Oi=je:Bt=!0,S(Re,p[je],m,null,_,T,R,E,I),ie++)}const Pi=Bt?Au(fn):Ht;for(Q=Pi.length-1,b=xe-1;b>=0;b--){const Re=K+b,je=p[Re],ki=Re+1<M?p[Re+1].el:y;fn[b]===0?S(null,je,m,ki,_,T,R,E,I):Bt&&(Q<0||b!==Pi[Q]?He(je,m,ki,2):Q--)}}},He=(f,p,m,y,_=null)=>{const{el:T,type:R,transition:E,children:I,shapeFlag:b}=f;if(b&6){He(f.component.subTree,p,m,y);return}if(b&128){f.suspense.move(p,m,y);return}if(b&64){R.move(f,p,m,se);return}if(R===be){s(T,p,m);for(let O=0;O<I.length;O++)He(I[O],p,m,y);s(f.anchor,p,m);return}if(R===fs){V(f,p,m);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(T),s(T,p,m),Te(()=>E.enter(T),_);else{const{leave:O,delayLeave:L,afterLeave:$}=E,K=()=>s(T,p,m),oe=()=>{O(T,()=>{K(),$&&$()})};L?L(T,K,oe):oe()}else s(T,p,m)},Me=(f,p,m,y=!1,_=!1)=>{const{type:T,props:R,ref:E,children:I,dynamicChildren:b,shapeFlag:M,patchFlag:O,dirs:L}=f;if(E!=null&&Rr(E,null,m,f,!0),M&256){p.ctx.deactivate(f);return}const $=M&1&&L,K=!Er(f);let oe;if(K&&(oe=R&&R.onVnodeBeforeUnmount)&&Ke(oe,p,f),M&6)P(f.component,m,y);else{if(M&128){f.suspense.unmount(m,y);return}$&&St(f,null,p,"beforeUnmount"),M&64?f.type.remove(f,p,m,_,se,y):b&&(T!==be||O>0&&O&64)?C(b,p,m,!1,!0):(T===be&&O&(128|256)||!_&&M&16)&&C(I,p,m),y&&Xs(f)}(K&&(oe=R&&R.onVnodeUnmounted)||$)&&Te(()=>{oe&&Ke(oe,p,f),$&&St(f,null,p,"unmounted")},m)},Xs=f=>{const{type:p,el:m,anchor:y,transition:_}=f;if(p===be){v(m,y);return}if(p===fs){te(f);return}const T=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:E}=_,I=()=>R(m,T);E?E(f.el,T,I):I()}else T()},v=(f,p)=>{let m;for(;f!==p;)m=h(f),r(f),f=m;r(p)},P=(f,p,m)=>{const{bum:y,scope:_,update:T,subTree:R,um:E}=f;y&&Jn(y),_.stop(),T&&(T.active=!1,Me(R,f,p,m)),E&&Te(E,p),Te(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(f,p,m,y=!1,_=!1,T=0)=>{for(let R=T;R<f.length;R++)Me(f[R],p,m,y,_)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),X=(f,p,m)=>{f==null?p._vnode&&Me(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,m),na(),p._vnode=f},se={p:S,um:Me,m:He,r:Xs,mt:Ye,mc:J,pc:Ne,pbc:ge,n:N,o:e};let W,B;return t&&([W,B]=t(se)),{render:X,hydrate:W,createApp:Cu(X,W)}}function Rr(e,t,n,s,r=!1){if(F(e)){e.forEach((h,g)=>Rr(h,t&&(F(t)?t[g]:t),n,s,r));return}if(Er(s)&&!r)return;const i=s.shapeFlag&4?Lr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===Z?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(_e(l)?(u[l]=null,G(d,l)&&(d[l]=null)):Ce(l)&&(l.value=null)),_e(c)){const h=()=>{u[c]=o,G(d,c)&&(d[c]=o)};o?(h.id=-1,Te(h,n)):h()}else if(Ce(c)){const h=()=>{c.value=o};o?(h.id=-1,Te(h,n)):h()}else H(c)&&dt(c,a,12,[o,u])}function Ke(e,t,n,s=null){De(e,t,7,[n,s])}function Uo(e,t,n=!1){const s=e.children,r=t.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ft(r[i]),a.el=o.el),n||Uo(o,a))}}function Au(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(r=n[n.length-1],e[r]<l){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ou=e=>e.__isTeleport,Sr="components";function bn(e,t){return Bo(Sr,e,!0,t)||e}const Fo=Symbol();function Ar(e){return _e(e)?Bo(Sr,e,!1)||e:e||Fo}function Bo(e,t,n=!0,s=!1){const r=Ae||ye;if(r){const i=r.type;if(e===Sr){const a=Vu(i);if(a&&(a===t||a===Ve(t)||a===qn(Ve(t))))return i}const o=Ho(r[e]||i[e],t)||Ho(r.appContext[e],t);return!o&&s?i:o}}function Ho(e,t){return e&&(e[t]||e[Ve(t)]||e[qn(Ve(t))])}const be=Symbol(void 0),Or=Symbol(void 0),Fe=Symbol(void 0),fs=Symbol(void 0),En=[];let At=null;function de(e=!1){En.push(At=e?null:[])}function Pu(){En.pop(),At=En[En.length-1]||null}let ds=1;function jo(e){ds+=e}function Vo(e){return e.dynamicChildren=ds>0?At||Ht:null,Pu(),ds>0&&At&&At.push(e),e}function pg(e,t,n,s,r,i){return Vo(Wo(e,t,n,s,r,i,!0))}function he(e,t,n,s,r){return Vo(fe(e,t,n,s,r,!0))}function hs(e){return e?e.__v_isVNode===!0:!1}function Ot(e,t){return e.type===t.type&&e.key===t.key}const ps="__vInternal",zo=({key:e})=>e!=null?e:null,ms=({ref:e})=>e!=null?_e(e)||Ce(e)||H(e)?{i:Ae,r:e}:e:null;function Wo(e,t=null,n=null,s=0,r=null,i=e===be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zo(t),ref:t&&ms(t),scopeId:is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(kr(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),ds>0&&!o&&At&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&At.push(c),c}const fe=ku;function ku(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Fo)&&(e=Fe),hs(e)){const a=Gt(e,t,!0);return n&&kr(a,n),a}if(zu(e)&&(e=e.__vccOpts),t){t=Nu(t);let{class:a,style:c}=t;a&&!_e(a)&&(t.class=er(a)),pe(c)&&(oo(c)&&!F(c)&&(c=ve({},c)),t.style=Zs(c))}const o=_e(e)?1:nu(e)?128:Ou(e)?64:pe(e)?4:H(e)?2:0;return Wo(e,t,n,s,r,o,i,!0)}function Nu(e){return e?oo(e)||ps in e?ve({},e):e:null}function Gt(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?vs(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&zo(a),ref:t&&t.ref?n&&r?F(r)?r.concat(ms(t)):[r,ms(t)]:ms(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor}}function gs(e=" ",t=0){return fe(Or,null,e,t)}function mg(e,t){const n=fe(fs,null,e);return n.staticCount=t,n}function Pr(e="",t=!1){return t?(de(),he(Fe,null,e)):fe(Fe,null,e)}function qe(e){return e==null||typeof e=="boolean"?fe(Fe):F(e)?fe(be,null,e.slice()):typeof e=="object"?ft(e):fe(Or,null,String(e))}function ft(e){return e.el===null||e.memo?e:Gt(e)}function kr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(s&(1|64)){const r=t.default;r&&(r._c&&(r._d=!1),kr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(ps in t)?t._ctx=Ae:r===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),s&64?(n=16,t=[gs(t)]):n=8);e.children=t,e.shapeFlag|=n}function vs(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=er([t.class,s.class]));else if(r==="style")t.style=Zs([t.style,s.style]);else if(Vn(r)){const i=t[r],o=s[r];i!==o&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function Ko(e,t,n,s){let r;const i=n&&n[s];if(F(e)||_e(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(pe(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=t(e[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Mu(e,t,n={},s,r){if(Ae.isCE)return fe("slot",t==="default"?null:{name:t},s&&s());let i=e[t];i&&i._c&&(i._d=!1),de();const o=i&&qo(i(n)),a=he(be,{key:n.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function qo(e){return e.some(t=>hs(t)?!(t.type===Fe||t.type===be&&!qo(t.children)):!0)?e:null}function Lu(e){const t={};for(const n in e)t[Gn(n)]=e[n];return t}const Nr=e=>e?Go(e)?Lr(e)||e.proxy:Nr(e.parent):null,_s=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nr(e.parent),$root:e=>Nr(e.root),$emit:e=>e.emit,$options:e=>Ro(e),$forceUpdate:e=>()=>Zo(e.update),$nextTick:e=>Ur.bind(e.proxy),$watch:e=>Yu.bind(e)}),Du={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 0:return s[t];case 1:return r[t];case 3:return n[t];case 2:return i[t]}else{if(s!==Z&&G(s,t))return o[t]=0,s[t];if(r!==Z&&G(r,t))return o[t]=1,r[t];if((l=e.propsOptions[0])&&G(l,t))return o[t]=2,i[t];if(n!==Z&&G(n,t))return o[t]=3,n[t];Ir&&(o[t]=4)}}const u=_s[t];let d,h;if(u)return t==="$attrs"&&Se(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==Z&&G(n,t))return o[t]=3,n[t];if(h=c.config.globalProperties,G(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;if(r!==Z&&G(r,t))r[t]=n;else if(s!==Z&&G(s,t))s[t]=n;else if(G(e.props,t))return!1;return t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return n[o]!==void 0||e!==Z&&G(e,o)||t!==Z&&G(t,o)||(a=i[0])&&G(a,o)||G(s,o)||G(_s,o)||G(r.config.globalProperties,o)}},xu=$o();let $u=0;function Uu(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||xu,i={uid:$u++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,update:null,scope:new Hi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oo(s,r),emitsOptions:ho(s,r),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Xl.bind(null,i),e.ce&&e.ce(i),i}let ye=null;const Mr=()=>ye||Ae,Jt=e=>{ye=e,e.scope.on()},Pt=()=>{ye&&ye.scope.off(),ye=null};function Go(e){return e.vnode.shapeFlag&4}let ys=!1;function Fu(e,t=!1){ys=t;const{props:n,children:s}=e.vnode,r=Go(e);yu(e,n,r,t),Iu(e,s);const i=r?Bu(e,t):void 0;return ys=!1,i}function Bu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=mr(new Proxy(e.ctx,Du));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?ju(e):null;Jt(e),Wt();const i=dt(s,e,0,[e.props,r]);if(Ct(),Pt(),$i(i)){if(i.then(Pt,Pt),t)return i.then(o=>{Jo(e,o,t)}).catch(o=>{bs(o,e,0)});e.asyncDep=i}else Jo(e,i,t)}else Xo(e,t)}function Jo(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=fo(t)),Xo(e,n)}let Yo;function Xo(e,t,n){const s=e.type;if(!e.render){if(!t&&Yo&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ve(ve({isCustomElement:i,delimiters:a},o),c);s.render=Yo(r,l)}}e.render=s.render||$e}Jt(e),Wt(),pu(e),Ct(),Pt()}function Hu(e){return new Proxy(e.attrs,{get(t,n){return Se(e,"get","$attrs"),t[n]}})}function ju(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Hu(e))},slots:e.slots,emit:e.emit,expose:t}}function Lr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(fo(mr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _s)return _s[n](e)}}))}function Vu(e){return H(e)&&e.displayName||e.name}function zu(e){return H(e)&&"__vccOpts"in e}function dt(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){bs(i,t,n)}return r}function De(e,t,n,s){if(H(e)){const i=dt(e,t,n,s);return i&&$i(i)&&i.catch(o=>{bs(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(De(e[i],t,n,s));return r}function bs(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){dt(c,null,10,[e,o,a]);return}}Wu(e,n,r,s)}function Wu(e,t,n,s=!0){console.error(e)}let Es=!1,Dr=!1;const Oe=[];let tt=0;const In=[];let Tn=null,Yt=0;const wn=[];let ht=null,Xt=0;const Qo=Promise.resolve();let xr=null,$r=null;function Ur(e){const t=xr||Qo;return e?t.then(this?e.bind(this):e):t}function Ku(e){let t=tt+1,n=Oe.length;for(;t<n;){const s=t+n>>>1;Cn(Oe[s])<e?t=s+1:n=s}return t}function Zo(e){(!Oe.length||!Oe.includes(e,Es&&e.allowRecurse?tt+1:tt))&&e!==$r&&(e.id==null?Oe.push(e):Oe.splice(Ku(e.id),0,e),ea())}function ea(){!Es&&!Dr&&(Dr=!0,xr=Qo.then(sa))}function qu(e){const t=Oe.indexOf(e);t>tt&&Oe.splice(t,1)}function ta(e,t,n,s){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),ea()}function Gu(e){ta(e,Tn,In,Yt)}function Ju(e){ta(e,ht,wn,Xt)}function Fr(e,t=null){if(In.length){for($r=t,Tn=[...new Set(In)],In.length=0,Yt=0;Yt<Tn.length;Yt++)Tn[Yt]();Tn=null,Yt=0,$r=null,Fr(e,t)}}function na(e){if(wn.length){const t=[...new Set(wn)];if(wn.length=0,ht){ht.push(...t);return}for(ht=t,ht.sort((n,s)=>Cn(n)-Cn(s)),Xt=0;Xt<ht.length;Xt++)ht[Xt]();ht=null,Xt=0}}const Cn=e=>e.id==null?1/0:e.id;function sa(e){Dr=!1,Es=!0,Fr(e),Oe.sort((n,s)=>Cn(n)-Cn(s));const t=$e;try{for(tt=0;tt<Oe.length;tt++){const n=Oe[tt];n&&n.active!==!1&&dt(n,null,14)}}finally{tt=0,Oe.length=0,na(),Es=!1,xr=null,(Oe.length||In.length||wn.length)&&sa(e)}}const ra={};function Is(e,t,n){return ia(e,t,n)}function ia(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Z){const a=ye;let c,l=!1,u=!1;if(Ce(e)?(c=()=>e.value,l=!!e._shallow):Kt(e)?(c=()=>e,s=!0):F(e)?(u=!0,l=e.some(Kt),c=()=>e.map(A=>{if(Ce(A))return A.value;if(Kt(A))return kt(A);if(H(A))return dt(A,a,2)})):H(e)?t?c=()=>dt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),De(e,a,3,[h])}:c=$e,t&&s){const A=c;c=()=>kt(A())}let d,h=A=>{d=S.onStop=()=>{dt(A,a,4)}};if(ys)return h=$e,t?n&&De(t,a,3,[c(),u?[]:void 0,h]):c(),$e;let g=u?[]:ra;const w=()=>{if(!!S.active)if(t){const A=S.run();(s||l||(u?A.some((x,j)=>dn(x,g[j])):dn(A,g)))&&(d&&d(),De(t,a,3,[A,g===ra?void 0:g,h]),g=A)}else S.run()};w.allowRecurse=!!t;let D;r==="sync"?D=w:r==="post"?D=()=>Te(w,a&&a.suspense):D=()=>{!a||a.isMounted?Gu(w):w()};const S=new cr(c,D);return t?n?w():g=S.run():r==="post"?Te(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&Di(a.scope.effects,S)}}function Yu(e,t,n){const s=this.proxy,r=_e(e)?e.includes(".")?oa(s,e):()=>s[e]:e.bind(s,s);let i;H(t)?i=t:(i=t.handler,n=t);const o=ye;Jt(this);const a=ia(r,i.bind(s),n);return o?Jt(o):Pt(),a}function oa(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function kt(e,t){if(!pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ce(e))kt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)kt(e[n],t);else if(xi(e)||jt(e))e.forEach(n=>{kt(n,t)});else if(Fi(e))for(const n in e)kt(e[n],t);return e}function Br(e,t,n){const s=arguments.length;return s===2?pe(t)&&!F(t)?hs(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&hs(n)&&(n=[n]),fe(e,t,n))}const Xu="3.2.20",Qu="http://www.w3.org/2000/svg",Qt=typeof document!="undefined"?document:null,aa=new Map,Zu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Qt.createElementNS(Qu,e):Qt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Qt.createTextNode(e),createComment:e=>Qt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s){const r=n?n.previousSibling:t.lastChild;let i=aa.get(e);if(!i){const o=Qt.createElement("template");if(o.innerHTML=s?`<svg>${e}</svg>`:e,i=o.content,s){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}aa.set(e,i)}return t.insertBefore(i.cloneNode(!0),n),[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ef(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function tf(e,t,n){const s=e.style,r=s.display;if(!n)e.removeAttribute("style");else if(_e(n))t!==n&&(s.cssText=n);else{for(const i in n)Hr(s,i,n[i]);if(t&&!_e(t))for(const i in t)n[i]==null&&Hr(s,i,"")}"_vod"in e&&(s.display=r)}const ca=/\s*!important$/;function Hr(e,t,n){if(F(n))n.forEach(s=>Hr(e,t,s));else if(t.startsWith("--"))e.setProperty(t,n);else{const s=nf(e,t);ca.test(n)?e.setProperty(Vt(s),n.replace(ca,""),"important"):e[s]=n}}const la=["Webkit","Moz","ms"],jr={};function nf(e,t){const n=jr[t];if(n)return n;let s=Ve(t);if(s!=="filter"&&s in e)return jr[t]=s;s=qn(s);for(let r=0;r<la.length;r++){const i=la[r]+s;if(i in e)return jr[t]=i}return t}const ua="http://www.w3.org/1999/xlink";function sf(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ua,t.slice(6,t.length)):e.setAttributeNS(ua,t,n);else{const i=al(t);n==null||i&&!Ni(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function rf(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"){e._value=n;const a=n==null?"":n;e.value!==a&&(e.value=a),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const a=typeof e[t];if(a==="boolean"){e[t]=Ni(n);return}else if(n==null&&a==="string"){e[t]="",e.removeAttribute(t);return}else if(a==="number"){try{e[t]=0}catch(c){}e.removeAttribute(t);return}}try{e[t]=n}catch(a){}}let Ts=Date.now,fa=!1;if(typeof window!="undefined"){Ts()>document.createEvent("Event").timeStamp&&(Ts=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);fa=!!(e&&Number(e[1])<=53)}let Vr=0;const of=Promise.resolve(),af=()=>{Vr=0},cf=()=>Vr||(of.then(af),Vr=Ts());function Zt(e,t,n,s){e.addEventListener(t,n,s)}function lf(e,t,n,s){e.removeEventListener(t,n,s)}function uf(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=ff(t);if(s){const l=i[t]=df(s,r);Zt(e,a,l,c)}else o&&(lf(e,a,o,c),i[t]=void 0)}}const da=/(?:Once|Passive|Capture)$/;function ff(e){let t;if(da.test(e)){t={};let n;for(;n=e.match(da);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Vt(e.slice(2)),t]}function df(e,t){const n=s=>{const r=s.timeStamp||Ts();(fa||r>=n.attached-1)&&De(hf(s,n.value),t,5,[s])};return n.value=e,n.attached=cf(),n}function hf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s(r))}else return t}const ha=/^on[a-z]/,pf=(e,t,n,s,r=!1,i,o,a,c)=>{t==="class"?ef(e,s,r):t==="style"?tf(e,n,s):Vn(t)?tr(t)||uf(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mf(e,t,s,r))?rf(e,t,s,i,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),sf(e,t,s,r))};function mf(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&ha.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ha.test(t)&&_e(n)?!1:t in e}const pt="transition",Rn="animation",pa=(e,{slots:t})=>Br(go,va(e),t);pa.displayName="Transition";const ma={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gf=pa.props=ve({},go.props,ma),Nt=(e,t=[])=>{F(e)?e.forEach(n=>n(...t)):e&&e(...t)},ga=e=>e?F(e)?e.some(t=>t.length>1):e.length>1:!1;function va(e){const t={};for(const k in e)k in ma||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,w=vf(r),D=w&&w[0],S=w&&w[1],{onBeforeEnter:A,onEnter:x,onEnterCancelled:j,onLeave:V,onLeaveCancelled:te,onBeforeAppear:ae=A,onAppear:z=x,onAppearCancelled:ce=j}=t,J=(k,le,we)=>{Mt(k,le?u:a),Mt(k,le?l:o),we&&we()},me=(k,le)=>{Mt(k,g),Mt(k,h),le&&le()},ge=k=>(le,we)=>{const Ye=k?z:x,ue=()=>J(le,k,we);Nt(Ye,[le,ue]),_a(()=>{Mt(le,k?c:i),nt(le,k?u:a),ga(Ye)||ya(le,s,D,ue)})};return ve(t,{onBeforeEnter(k){Nt(A,[k]),nt(k,i),nt(k,o)},onBeforeAppear(k){Nt(ae,[k]),nt(k,c),nt(k,l)},onEnter:ge(!1),onAppear:ge(!0),onLeave(k,le){const we=()=>me(k,le);nt(k,d),Ta(),nt(k,h),_a(()=>{Mt(k,d),nt(k,g),ga(V)||ya(k,s,S,we)}),Nt(V,[k,we])},onEnterCancelled(k){J(k,!1),Nt(j,[k])},onAppearCancelled(k){J(k,!0),Nt(ce,[k])},onLeaveCancelled(k){me(k),Nt(te,[k])}})}function vf(e){if(e==null)return null;if(pe(e))return[zr(e.enter),zr(e.leave)];{const t=zr(e);return[t,t]}}function zr(e){return Xn(e)}function nt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Mt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function _a(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let _f=0;function ya(e,t,n,s){const r=e._endId=++_f,i=()=>{r===e._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ba(e,t);if(!o)return s();const l=o+"end";let u=0;const d=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),e.addEventListener(l,h)}function ba(e,t){const n=window.getComputedStyle(e),s=w=>(n[w]||"").split(", "),r=s(pt+"Delay"),i=s(pt+"Duration"),o=Ea(r,i),a=s(Rn+"Delay"),c=s(Rn+"Duration"),l=Ea(a,c);let u=null,d=0,h=0;t===pt?o>0&&(u=pt,d=o,h=i.length):t===Rn?l>0&&(u=Rn,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?pt:Rn:null,h=u?u===pt?i.length:c.length:0);const g=u===pt&&/\b(transform|all)(,|$)/.test(n[pt+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:g}}function Ea(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ia(n)+Ia(e[s])))}function Ia(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Ta(){return document.body.offsetHeight}const wa=new WeakMap,Ca=new WeakMap,yf={name:"TransitionGroup",props:ve({},gf,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Mr(),s=mo();let r,i;return Eo(()=>{if(!r.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!wf(r[0].el,n.vnode.el,o))return;r.forEach(Ef),r.forEach(If);const a=r.filter(Tf);Ta(),a.forEach(c=>{const l=c.el,u=l.style;nt(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",d),l._moveCb=null,Mt(l,o))};l.addEventListener("transitionend",d)})}),()=>{const o=q(e),a=va(o);let c=o.tag||be;r=i,i=t.default?br(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&yn(u,_n(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];yn(u,_n(u,a,s,n)),wa.set(u,u.el.getBoundingClientRect())}return fe(c,null,i)}}},bf=yf;function Ef(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function If(e){Ca.set(e,e.el.getBoundingClientRect())}function Tf(e){const t=wa.get(e),n=Ca.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",e}}function wf(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=ba(s);return r.removeChild(s),i}const Ra=e=>{const t=e.props["onUpdate:modelValue"];return F(t)?n=>Jn(t,n):t};function Cf(e){e.target.composing=!0}function Sa(e){const t=e.target;t.composing&&(t.composing=!1,Rf(t,"input"))}function Rf(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const gg={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=Ra(r);const i=s||r.props&&r.props.type==="number";Zt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n?a=a.trim():i&&(a=Xn(a)),e._assign(a)}),n&&Zt(e,"change",()=>{e.value=e.value.trim()}),t||(Zt(e,"compositionstart",Cf),Zt(e,"compositionend",Sa),Zt(e,"change",Sa))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=Ra(i),e.composing||document.activeElement===e&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&Xn(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Sf=["ctrl","shift","alt","meta"],Af={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Sf.some(n=>e[`${n}Key`]&&!t.includes(n))},Of=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const i=Af[t[r]];if(i&&i(n,t))return}return e(n,...s)},vg={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Sn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Sn(e,!0),s.enter(e)):s.leave(e,()=>{Sn(e,!1)}):Sn(e,t))},beforeUnmount(e,{value:t}){Sn(e,t)}};function Sn(e,t){e.style.display=t?e._vod:"none"}const Pf=ve({patchProp:pf},Zu);let Aa;function kf(){return Aa||(Aa=Ru(Pf))}const Nf=(...e)=>{const t=kf().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Mf(s);if(!r)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Mf(e){return _e(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Oa=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",en=e=>Oa?Symbol(e):"_vr_"+e,Lf=en("rvlm"),Pa=en("rvd"),ws=en("r"),Wr=en("rl"),Kr=en("rvl"),tn=typeof window!="undefined";function Df(e){return e.__esModule||Oa&&e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function qr(e,t){const n={};for(const s in t){const r=t[s];n[s]=Array.isArray(r)?r.map(e):e(r)}return n}const An=()=>{},xf=/\/$/,$f=e=>e.replace(xf,"");function Gr(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(s=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),r=e(i)),c>-1&&(s=s||t.slice(0,c),o=t.slice(c,t.length)),s=Hf(s!=null?s:t,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Uf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ka(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ff(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&nn(t.matched[s],n.matched[r])&&Na(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function nn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Na(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Bf(e[n],t[n]))return!1;return!0}function Bf(e,t){return Array.isArray(e)?Ma(e,t):Array.isArray(t)?Ma(t,e):e===t}function Ma(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Hf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var On;(function(e){e.pop="pop",e.push="push"})(On||(On={}));var Pn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Pn||(Pn={}));function jf(e){if(!e)if(tn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$f(e)}const Vf=/^[^#]+#/;function zf(e,t){return e.replace(Vf,"#")+t}function Wf(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Cs=()=>({left:window.pageXOffset,top:window.pageYOffset});function Kf(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Wf(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function La(e,t){return(history.state?history.state.position-t:-1)+e}const Jr=new Map;function qf(e,t){Jr.set(e,t)}function Gf(e){const t=Jr.get(e);return Jr.delete(e),t}let Jf=()=>location.protocol+"//"+location.host;function Da(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let a=r.includes(e.slice(i))?e.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ka(c,"")}return ka(n,e)+s+r}function Yf(e,t,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const g=Da(e,location),w=n.value,D=t.value;let S=0;if(h){if(n.value=g,t.value=h,o&&o===w){o=null;return}S=D?h.position-D.position:0}else s(g);r.forEach(A=>{A(n.value,w,{delta:S,type:On.pop,direction:S?S>0?Pn.forward:Pn.back:Pn.unknown})})};function c(){o=n.value}function l(h){r.push(h);const g=()=>{const w=r.indexOf(h);w>-1&&r.splice(w,1)};return i.push(g),g}function u(){const{history:h}=window;!h.state||h.replaceState(ee({},h.state,{scroll:Cs()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function xa(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Cs():null}}function Xf(e){const{history:t,location:n}=window,s={value:Da(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Jf()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=ee({},t.state,xa(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ee({},r.value,t.state,{forward:c,scroll:Cs()});i(u.current,u,!0);const d=ee({},xa(s.value,c,null),{position:u.position+1},l);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function _g(e){e=jf(e);const t=Xf(e),n=Yf(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ee({location:"",base:e,go:s,createHref:zf.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Qf(e){return typeof e=="string"||e&&typeof e=="object"}function $a(e){return typeof e=="string"||typeof e=="symbol"}const mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ua=en("nf");var Fa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Fa||(Fa={}));function sn(e,t){return ee(new Error,{type:e,[Ua]:!0},t)}function Lt(e,t){return e instanceof Error&&Ua in e&&(t==null||!!(e.type&t))}const Ba="[^/]+?",Zf={sensitive:!1,strict:!1,start:!0,end:!0},ed=/[.+*?^${}()[\]/\\]/g;function td(e,t){const n=ee({},Zf,t),s=[];let r=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const h=l[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(ed,"\\$&"),g+=40;else if(h.type===1){const{value:w,repeatable:D,optional:S,regexp:A}=h;i.push({name:w,repeatable:D,optional:S});const x=A||Ba;if(x!==Ba){g+=10;try{new RegExp(`(${x})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${w}" (${x}): `+V.message)}}let j=D?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(j=S&&l.length<2?`(?:/${j})`:"/"+j),S&&(j+="?"),r+=j,g+=20,S&&(g+=-8),D&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",w=i[h-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const h of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:D,optional:S}=g,A=w in l?l[w]:"";if(Array.isArray(A)&&!D)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(A)?A.join("/"):A;if(!x)if(S)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=x}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function nd(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function sd(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=nd(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const rd={type:0,value:""},id=/[a-zA-Z0-9_]/;function od(e){if(!e)return[[]];if(e==="/")return[[rd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:id.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function ad(e,t,n){const s=td(od(e.path),n),r=ee(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function cd(e,t){const n=[],s=new Map;t=ja({strict:!1,end:!0,sensitive:!1},t);function r(u){return s.get(u)}function i(u,d,h){const g=!h,w=ud(u);w.aliasOf=h&&h.record;const D=ja(t,u),S=[w];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of j)S.push(ee({},w,{components:h?h.record.components:w.components,path:V,aliasOf:h?h.record:w}))}let A,x;for(const j of S){const{path:V}=j;if(d&&V[0]!=="/"){const te=d.record.path,ae=te[te.length-1]==="/"?"":"/";j.path=d.record.path+(V&&ae+V)}if(A=ad(j,d,D),h?h.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),g&&u.name&&!Ha(A)&&o(u.name)),"children"in w){const te=w.children;for(let ae=0;ae<te.length;ae++)i(te[ae],A,h&&h.children[ae])}h=h||A,c(A)}return x?()=>{o(x)}:An}function o(u){if($a(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&sd(u,n[d])>=0;)d++;n.splice(d,0,u),u.record.name&&!Ha(u)&&s.set(u.record.name,u)}function l(u,d){let h,g={},w,D;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw sn(1,{location:u});D=h.record.name,g=ee(ld(d.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),w=h.stringify(g)}else if("path"in u)w=u.path,h=n.find(x=>x.re.test(w)),h&&(g=h.parse(w),D=h.record.name);else{if(h=d.name?s.get(d.name):n.find(x=>x.re.test(d.path)),!h)throw sn(1,{location:u,currentLocation:d});D=h.record.name,g=ee({},d.params,u.params),w=h.stringify(g)}const S=[];let A=h;for(;A;)S.unshift(A.record),A=A.parent;return{name:D,path:w,params:g,matched:S,meta:dd(S)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ld(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function ud(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fd(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Ha(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function dd(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function ja(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Va=/#/g,hd=/&/g,pd=/\//g,md=/=/g,gd=/\?/g,za=/\+/g,vd=/%5B/g,_d=/%5D/g,Wa=/%5E/g,yd=/%60/g,Ka=/%7B/g,bd=/%7C/g,qa=/%7D/g,Ed=/%20/g;function Yr(e){return encodeURI(""+e).replace(bd,"|").replace(vd,"[").replace(_d,"]")}function Id(e){return Yr(e).replace(Ka,"{").replace(qa,"}").replace(Wa,"^")}function Xr(e){return Yr(e).replace(za,"%2B").replace(Ed,"+").replace(Va,"%23").replace(hd,"%26").replace(yd,"`").replace(Ka,"{").replace(qa,"}").replace(Wa,"^")}function Td(e){return Xr(e).replace(md,"%3D")}function wd(e){return Yr(e).replace(Va,"%23").replace(gd,"%3F")}function Cd(e){return e==null?"":wd(e).replace(pd,"%2F")}function Rs(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Rd(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(za," "),o=i.indexOf("="),a=Rs(o<0?i:i.slice(0,o)),c=o<0?null:Rs(i.slice(o+1));if(a in t){let l=t[a];Array.isArray(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Ga(e){let t="";for(let n in e){const s=e[n];if(n=Td(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Xr(i)):[s&&Xr(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Sd(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}function kn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function gt(e,t,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(sn(4,{from:n,to:t})):d instanceof Error?a(d):Qf(d)?a(sn(2,{from:t,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},l=e.call(s&&s.instances[r],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Qr(e,t,n,s){const r=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Ad(a)){const l=(a.__vccOpts||a)[t];l&&r.push(gt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Df(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&gt(h,n,s,i,o)()}))}}return r}function Ad(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ja(e){const t=Ue(ws),n=Ue(Wr),s=We(()=>t.resolve(qt(e.to))),r=We(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(nn.bind(null,u));if(h>-1)return h;const g=Ya(c[l-2]);return l>1&&Ya(u)===g&&d[d.length-1].path!==g?d.findIndex(nn.bind(null,c[l-2])):h}),i=We(()=>r.value>-1&&Nd(n.params,s.value.params)),o=We(()=>r.value>-1&&r.value===n.matched.length-1&&Na(n.params,s.value.params));function a(c={}){return kd(c)?t[qt(e.replace)?"replace":"push"](qt(e.to)).catch(An):Promise.resolve()}return{route:s,href:We(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Od=Ze({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ja,setup(e,{slots:t}){const n=mn(Ja(e)),{options:s}=Ue(ws),r=We(()=>({[Xa(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xa(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Br("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Pd=Od;function kd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Nd(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ya(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xa=(e,t,n)=>e!=null?e:t!=null?t:n,Md=Ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=Ue(Kr),r=We(()=>e.route||s.value),i=Ue(Pa,0),o=We(()=>r.value.matched[i]);as(Pa,i+1),as(Lf,o),as(Kr,r);const a=lo();return Is(()=>[a.value,o.value,e.name],([c,l,u],[d,h,g])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!nn(l,h)||!d)&&(l.enterCallbacks[u]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[e.name],d=e.name;if(!u)return Qa(n.default,{Component:u,route:c});const h=l.props[e.name],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,D=Br(u,ee({},g,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(l.instances[d]=null)},ref:a}));return Qa(n.default,{Component:D,route:c})||D}}});function Qa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ld=Md;function yg(e){const t=cd(e.routes,e),n=e.parseQuery||Rd,s=e.stringifyQuery||Ga,r=e.history,i=kn(),o=kn(),a=kn(),c=ql(mt);let l=mt;tn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qr.bind(null,v=>""+v),d=qr.bind(null,Cd),h=qr.bind(null,Rs);function g(v,P){let C,N;return $a(v)?(C=t.getRecordMatcher(v),N=P):N=v,t.addRoute(N,C)}function w(v){const P=t.getRecordMatcher(v);P&&t.removeRoute(P)}function D(){return t.getRoutes().map(v=>v.record)}function S(v){return!!t.getRecordMatcher(v)}function A(v,P){if(P=ee({},P||c.value),typeof v=="string"){const B=Gr(n,v,P.path),f=t.resolve({path:B.path},P),p=r.createHref(B.fullPath);return ee(B,f,{params:h(f.params),hash:Rs(B.hash),redirectedFrom:void 0,href:p})}let C;if("path"in v)C=ee({},v,{path:Gr(n,v.path,P.path).path});else{const B=ee({},v.params);for(const f in B)B[f]==null&&delete B[f];C=ee({},v,{params:d(v.params)}),P.params=d(P.params)}const N=t.resolve(C,P),X=v.hash||"";N.params=u(h(N.params));const se=Uf(s,ee({},v,{hash:Id(X),path:N.path})),W=r.createHref(se);return ee({fullPath:se,hash:X,query:s===Ga?Sd(v.query):v.query||{}},N,{redirectedFrom:void 0,href:W})}function x(v){return typeof v=="string"?Gr(n,v,c.value.path):ee({},v)}function j(v,P){if(l!==v)return sn(8,{from:P,to:v})}function V(v){return z(v)}function te(v){return V(ee(x(v),{replace:!0}))}function ae(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let N=typeof C=="function"?C(v):C;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=x(N):{path:N},N.params={}),ee({query:v.query,hash:v.hash,params:v.params},N)}}function z(v,P){const C=l=A(v),N=c.value,X=v.state,se=v.force,W=v.replace===!0,B=ae(C);if(B)return z(ee(x(B),{state:X,force:se,replace:W}),P||C);const f=C;f.redirectedFrom=P;let p;return!se&&Ff(s,N,C)&&(p=sn(16,{to:f,from:N}),Ft(N,N,!0,!1)),(p?Promise.resolve(p):J(f,N)).catch(m=>Lt(m)?m:ne(m,f,N)).then(m=>{if(m){if(Lt(m,2))return z(ee(x(m.to),{state:X,force:se,replace:W}),P||f)}else m=ge(f,N,!0,W,X);return me(f,N,m),m})}function ce(v,P){const C=j(v,P);return C?Promise.reject(C):Promise.resolve()}function J(v,P){let C;const[N,X,se]=Dd(v,P);C=Qr(N.reverse(),"beforeRouteLeave",v,P);for(const B of N)B.leaveGuards.forEach(f=>{C.push(gt(f,v,P))});const W=ce.bind(null,v,P);return C.push(W),rn(C).then(()=>{C=[];for(const B of i.list())C.push(gt(B,v,P));return C.push(W),rn(C)}).then(()=>{C=Qr(X,"beforeRouteUpdate",v,P);for(const B of X)B.updateGuards.forEach(f=>{C.push(gt(f,v,P))});return C.push(W),rn(C)}).then(()=>{C=[];for(const B of v.matched)if(B.beforeEnter&&!P.matched.includes(B))if(Array.isArray(B.beforeEnter))for(const f of B.beforeEnter)C.push(gt(f,v,P));else C.push(gt(B.beforeEnter,v,P));return C.push(W),rn(C)}).then(()=>(v.matched.forEach(B=>B.enterCallbacks={}),C=Qr(se,"beforeRouteEnter",v,P),C.push(W),rn(C))).then(()=>{C=[];for(const B of o.list())C.push(gt(B,v,P));return C.push(W),rn(C)}).catch(B=>Lt(B,8)?B:Promise.reject(B))}function me(v,P,C){for(const N of a.list())N(v,P,C)}function ge(v,P,C,N,X){const se=j(v,P);if(se)return se;const W=P===mt,B=tn?history.state:{};C&&(N||W?r.replace(v.fullPath,ee({scroll:W&&B&&B.scroll},X)):r.push(v.fullPath,X)),c.value=v,Ft(v,P,C,W),Ne()}let k;function le(){k=r.listen((v,P,C)=>{const N=A(v),X=ae(N);if(X){z(ee(X,{replace:!0}),N).catch(An);return}l=N;const se=c.value;tn&&qf(La(se.fullPath,C.delta),Cs()),J(N,se).catch(W=>Lt(W,4|8)?W:Lt(W,2)?(z(W.to,N).then(B=>{Lt(B,4|16)&&!C.delta&&C.type===On.pop&&r.go(-1,!1)}).catch(An),Promise.reject()):(C.delta&&r.go(-C.delta,!1),ne(W,N,se))).then(W=>{W=W||ge(N,se,!1),W&&(C.delta?r.go(-C.delta,!1):C.type===On.pop&&Lt(W,4|16)&&r.go(-1,!1)),me(N,se,W)}).catch(An)})}let we=kn(),Ye=kn(),ue;function ne(v,P,C){Ne(v);const N=Ye.list();return N.length?N.forEach(X=>X(v,P,C)):console.error(v),Promise.reject(v)}function Y(){return ue&&c.value!==mt?Promise.resolve():new Promise((v,P)=>{we.add([v,P])})}function Ne(v){ue||(ue=!0,le(),we.list().forEach(([P,C])=>v?C(v):P()),we.reset())}function Ft(v,P,C,N){const{scrollBehavior:X}=e;if(!tn||!X)return Promise.resolve();const se=!C&&Gf(La(v.fullPath,0))||(N||!C)&&history.state&&history.state.scroll||null;return Ur().then(()=>X(v,P,se)).then(W=>W&&Kf(W)).catch(W=>ne(W,v,P))}const Xe=v=>r.go(v);let He;const Me=new Set;return{currentRoute:c,addRoute:g,removeRoute:w,hasRoute:S,getRoutes:D,resolve:A,options:e,push:V,replace:te,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ye.add,isReady:Y,install(v){const P=this;v.component("RouterLink",Pd),v.component("RouterView",Ld),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(c)}),tn&&!He&&c.value===mt&&(He=!0,V(r.location).catch(X=>{}));const C={};for(const X in mt)C[X]=We(()=>c.value[X]);v.provide(ws,P),v.provide(Wr,mn(C)),v.provide(Kr,c);const N=v.unmount;Me.add(v),v.unmount=function(){Me.delete(v),Me.size<1&&(l=mt,k&&k(),c.value=mt,He=!1,ue=!1),N()}}}}function rn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Dd(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>nn(l,a))?s.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>nn(l,c))||r.push(c))}return[n,s,r]}function bg(){return Ue(ws)}function Eg(){return Ue(Wr)}const Ss=e=>typeof e=="function",As=e=>typeof e=="string",Za=e=>As(e)&&e.trim().length>0,xd=e=>typeof e=="number",Dt=e=>typeof e=="undefined",Nn=e=>typeof e=="object"&&e!==null,$d=e=>vt(e,"tag")&&Za(e.tag),ec=e=>window.TouchEvent&&e instanceof TouchEvent,tc=e=>vt(e,"component")&&nc(e.component),Ud=e=>Ss(e)||Nn(e),nc=e=>!Dt(e)&&(As(e)||Ud(e)||tc(e)),sc=e=>Nn(e)&&["height","width","right","left","top","bottom"].every(t=>xd(e[t])),vt=(e,t)=>(Nn(e)||Ss(e))&&t in e,Fd=(e=>()=>e++)(0);function Zr(e){return ec(e)?e.targetTouches[0].clientX:e.clientX}function rc(e){return ec(e)?e.targetTouches[0].clientY:e.clientY}const Bd=e=>{Dt(e.remove)?e.parentNode&&e.parentNode.removeChild(e):e.remove()},Mn=e=>tc(e)?Mn(e.component):$d(e)?Ze({render(){return e}}):typeof e=="string"?e:q(qt(e)),Hd=e=>{if(typeof e=="string")return e;const t=vt(e,"props")&&Nn(e.props)?e.props:{},n=vt(e,"listeners")&&Nn(e.listeners)?e.listeners:{};return{component:Mn(e),props:t,listeners:n}},jd=()=>typeof window!="undefined";class ei{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,n){const s=this.getHandlers(t);s.push(n),this.allHandlers[t]=s}off(t,n){const s=this.getHandlers(t);s.splice(s.indexOf(n)>>>0,1)}emit(t,n){this.getHandlers(t).forEach(r=>r(n))}}const Vd=e=>["on","off","emit"].every(t=>vt(e,t)&&Ss(e[t]));var Pe;(function(e){e.SUCCESS="success",e.ERROR="error",e.WARNING="warning",e.INFO="info",e.DEFAULT="default"})(Pe||(Pe={}));var Os;(function(e){e.TOP_LEFT="top-left",e.TOP_CENTER="top-center",e.TOP_RIGHT="top-right",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_CENTER="bottom-center",e.BOTTOM_RIGHT="bottom-right"})(Os||(Os={}));var ke;(function(e){e.ADD="add",e.DISMISS="dismiss",e.UPDATE="update",e.CLEAR="clear",e.UPDATE_DEFAULTS="update_defaults"})(ke||(ke={}));const st="Vue-Toastification",Be={type:{type:String,default:Pe.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},ic={type:Be.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Ps={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Be.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},ti={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},oc={transition:{type:[Object,String],default:`${st}__bounce`}},zd={position:{type:String,default:Os.TOP_RIGHT},draggable:Be.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Be.trueBoolean,pauseOnHover:Be.trueBoolean,closeOnClick:Be.trueBoolean,timeout:ti.timeout,hideProgressBar:ti.hideProgressBar,toastClassName:Be.classNames,bodyClassName:Be.classNames,icon:ic.customIcon,closeButton:Ps.component,closeButtonClassName:Ps.classNames,showCloseButtonOnHover:Ps.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!0,default:new ei}},Wd={id:{type:[String,Number],required:!0,default:0},type:Be.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}}},Kd={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Be.trueBoolean,maxToasts:{type:Number,default:20},transition:oc.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:e=>e},filterToasts:{type:Function,default:e=>e},containerClassName:Be.classNames,onMounted:Function};var rt={CORE_TOAST:zd,TOAST:Wd,CONTAINER:Kd,PROGRESS_BAR:ti,ICON:ic,TRANSITION:oc,CLOSE_BUTTON:Ps},ni=Ze({name:"VtProgressBar",props:rt.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${st}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function qd(e,t,n,s,r,i){return de(),he("div",{style:e.style,class:e.cpClass},null,6)}ni.render=qd;ni.__file="src/components/VtProgressBar.vue";var si=Ze({name:"VtCloseButton",props:rt.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?Mn(this.component):"button"},classes(){const e=[`${st}__close-button`];return this.showOnHover&&e.push("show-on-hover"),e.concat(this.classNames)}}});const Gd=gs(" \xD7 ");function Jd(e,t,n,s,r,i){return de(),he(Ar(e.buttonComponent),vs({"aria-label":e.ariaLabel,class:e.classes},e.$attrs),{default:vn(()=>[Gd]),_:1},16,["aria-label","class"])}si.render=Jd;si.__file="src/components/VtCloseButton.vue";var ri={};const Yd={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Xd=fe("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1);function Qd(e,t,n,s,r,i){return de(),he("svg",Yd,[Xd])}ri.render=Qd;ri.__file="src/components/icons/VtSuccessIcon.vue";var ks={};const Zd={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},eh=fe("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1);function th(e,t,n,s,r,i){return de(),he("svg",Zd,[eh])}ks.render=th;ks.__file="src/components/icons/VtInfoIcon.vue";var ii={};const nh={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},sh=fe("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1);function rh(e,t,n,s,r,i){return de(),he("svg",nh,[sh])}ii.render=rh;ii.__file="src/components/icons/VtWarningIcon.vue";var oi={};const ih={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},oh=fe("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1);function ah(e,t,n,s,r,i){return de(),he("svg",ih,[oh])}oi.render=ah;oi.__file="src/components/icons/VtErrorIcon.vue";var ai=Ze({name:"VtIcon",props:rt.ICON,computed:{customIconChildren(){return vt(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return As(this.customIcon)?this.trimValue(this.customIcon):vt(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return vt(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:nc(this.customIcon)?Mn(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Pe.DEFAULT]:ks,[Pe.INFO]:ks,[Pe.SUCCESS]:ri,[Pe.ERROR]:oi,[Pe.WARNING]:ii}[this.type]},iconClasses(){const e=[`${st}__icon`];return this.hasCustomIcon?e.concat(this.customIconClass):e}},methods:{trimValue(e,t=""){return Za(e)?e.trim():t}}});function ch(e,t,n,s,r,i){return de(),he(Ar(e.component),{class:e.iconClasses},{default:vn(()=>[gs(Mi(e.customIconChildren),1)]),_:1},8,["class"])}ai.render=ch;ai.__file="src/components/VtIcon.vue";var ci=Ze({name:"VtToast",components:{ProgressBar:ni,CloseButton:si,Icon:ai},inheritAttrs:!1,props:Object.assign({},rt.CORE_TOAST,rt.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const e=[`${st}__toast`,`${st}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&e.push("disable-transition"),this.rtl&&e.push(`${st}__toast--rtl`),e},bodyClasses(){return[`${st}__toast-${As(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return sc(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{getVueComponentFromObj:Mn,closeToast(){this.eventBus.emit(ke.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const e=this.$el;e.addEventListener("touchstart",this.onDragStart,{passive:!0}),e.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const e=this.$el;e.removeEventListener("touchstart",this.onDragStart),e.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(e){this.beingDragged=!0,this.dragPos={x:Zr(e),y:rc(e)},this.dragStart=Zr(e),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(e){this.beingDragged&&(e.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Zr(e),y:rc(e)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,sc(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}});function lh(e,t,n,s,r,i){const o=bn("Icon"),a=bn("CloseButton"),c=bn("ProgressBar");return de(),he("div",{class:e.classes,style:e.draggableStyle,onClick:t[1]||(t[1]=(...l)=>e.clickHandler(...l)),onMouseenter:t[2]||(t[2]=(...l)=>e.hoverPause(...l)),onMouseleave:t[3]||(t[3]=(...l)=>e.hoverPlay(...l))},[e.icon?(de(),he(o,{key:0,"custom-icon":e.icon,type:e.type},null,8,["custom-icon","type"])):Pr("v-if",!0),fe("div",{role:e.accessibility.toastRole||"alert",class:e.bodyClasses},[typeof e.content=="string"?(de(),he(be,{key:0},[gs(Mi(e.content),1)],64)):(de(),he(Ar(e.getVueComponentFromObj(e.content)),vs({key:1,"toast-id":e.id},e.content.props,Lu(e.content.listeners),{onCloseToast:e.closeToast}),null,16,["toast-id","onCloseToast"]))],10,["role"]),e.closeButton?(de(),he(a,{key:1,component:e.closeButton,"class-names":e.closeButtonClassName,"show-on-hover":e.showCloseButtonOnHover,"aria-label":e.accessibility.closeButtonLabel,onClick:Of(e.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Pr("v-if",!0),e.timeout?(de(),he(c,{key:2,"is-running":e.isRunning,"hide-progress-bar":e.hideProgressBar,timeout:e.timeout,onCloseToast:e.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Pr("v-if",!0)],38)}ci.render=lh;ci.__file="src/components/VtToast.vue";var li=Ze({name:"VtTransition",props:rt.TRANSITION,emits:["leave"],methods:{leave(e){e.style.left=e.offsetLeft+"px",e.style.top=e.offsetTop+"px",e.style.width=getComputedStyle(e).width,e.style.position="absolute"}}});function uh(e,t,n,s,r,i){return de(),he(bf,{tag:"div","enter-active-class":e.transition.enter?e.transition.enter:`${e.transition}-enter-active`,"move-class":e.transition.move?e.transition.move:`${e.transition}-move`,"leave-active-class":e.transition.leave?e.transition.leave:`${e.transition}-leave-active`,onLeave:e.leave},{default:vn(()=>[Mu(e.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}li.render=uh;li.__file="src/components/VtTransition.vue";var ui=Ze({name:"VueToastification",components:{Toast:ci,VtTransition:li},props:Object.assign({},rt.CORE_TOAST,rt.CONTAINER,rt.TRANSITION),data(){return{count:0,positions:Object.values(Os),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const e=this.eventBus;e.on(ke.ADD,this.addToast),e.on(ke.CLEAR,this.clearToasts),e.on(ke.DISMISS,this.dismissToast),e.on(ke.UPDATE,this.updateToast),e.on(ke.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(e){Ss(e)&&(e=await e()),Bd(this.$el),e.appendChild(this.$el)},setToast(e){Dt(e.id)||(this.toasts[e.id]=e)},addToast(e){e.content=Hd(e.content);const t=Object.assign({},this.defaults,e.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[e.type],e),n=this.defaults.filterBeforeCreate(t,this.toastArray);n&&this.setToast(n)},dismissToast(e){const t=this.toasts[e];!Dt(t)&&!Dt(t.onClose)&&t.onClose(),delete this.toasts[e]},clearToasts(){Object.keys(this.toasts).forEach(e=>{this.dismissToast(e)})},getPositionToasts(e){const t=this.filteredToasts.filter(n=>n.position===e).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?t.reverse():t},updateDefaults(e){Dt(e.container)||this.setup(e.container),this.defaults=Object.assign({},this.defaults,e)},updateToast({id:e,options:t,create:n}){this.toasts[e]?(t.timeout&&t.timeout===this.toasts[e].timeout&&t.timeout++,this.setToast(Object.assign({},this.toasts[e],t))):n&&this.addToast(Object.assign({},{id:e},t))},getClasses(e){return[`${st}__container`,e].concat(this.defaults.containerClassName)}}});function fh(e,t,n,s,r,i){const o=bn("Toast"),a=bn("VtTransition");return de(),he("div",null,[(de(!0),he(be,null,Ko(e.positions,c=>(de(),he("div",{key:c},[fe(a,{transition:e.defaults.transition,class:e.getClasses(c)},{default:vn(()=>[(de(!0),he(be,null,Ko(e.getPositionToasts(c),l=>(de(),he(o,vs({key:l.id},l),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}ui.render=fh;ui.__file="src/components/VtToastContainer.vue";const ac=(e={},t=!0)=>{const n=e.eventBus=e.eventBus||new ei;t&&Ur(()=>{const i=Nf(ui,Object.assign({},e)),o=i.mount(document.createElement("div")),a=e.onMounted;Dt(a)||a(o,i)});const s=(i,o)=>{const a=Object.assign({},{id:Fd(),type:Pe.DEFAULT},o,{content:i});return n.emit(ke.ADD,a),a.id};s.clear=()=>n.emit(ke.CLEAR,void 0),s.updateDefaults=i=>{n.emit(ke.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(ke.DISMISS,i)};function r(i,{content:o,options:a},c=!1){const l=Object.assign({},a,{content:o});n.emit(ke.UPDATE,{id:i,options:l,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:Pe.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:Pe.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:Pe.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:Pe.WARNING})),s},dh=()=>{const e=()=>console.warn("[Vue Toastification] This plugin does not support SSR!");return new Proxy(e,{get(){return e}})};function fi(e){return jd()?Vd(e)?ac({eventBus:e},!1):ac(e,!0):dh()}const cc=Symbol("VueToastification"),lc=new ei,Ig=(e,t)=>{const n=fi(Object.assign({eventBus:lc},t));e.provide(cc,n)},Tg=e=>{if(e)return fi(e);const t=Mr()?Ue(cc):void 0;return t||fi(lc)};/**
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
 */const hh=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)==55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)==56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},ph=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),s.push(n[u],n[d],n[h],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(hh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ph(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(s.push(h),l!==64){const g=a<<4&240|l>>2;if(s.push(g),d!==64){const w=l<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},gh=function(e){try{return mh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */class vh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Ee(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _h(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function yh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function bh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Eh(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}/**
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
 */const Ih="FirebaseError";class on extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=Ih,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ln.prototype.create)}}class Ln{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Th(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new on(r,a,s)}}function Th(e,t){return e.replace(wh,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const wh=/\{\$([^}]+)}/g;function Ch(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ns(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(uc(i)&&uc(o)){if(!Ns(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function uc(e){return e!==null&&typeof e=="object"}/**
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
 */function Dn(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Rh(e,t){const n=new Sh(e,t);return n.subscribe.bind(n)}class Sh{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let r;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ah(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:s},r.next===void 0&&(r.next=di),r.error===void 0&&(r.error=di),r.complete===void 0&&(r.complete=di);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(o){}}),this.observers.push(r),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ah(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function di(){}/**
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
 */function Ms(e){return e&&e._delegate?e._delegate:e}/*! *****************************************************************************
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
***************************************************************************** */function hi(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}function Oh(e,t,n,s){function r(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(u){try{l(s.next(u))}catch(d){o(d)}}function c(u){try{l(s.throw(u))}catch(d){o(d)}}function l(u){u.done?i(u.value):r(u.value).then(a,c)}l((s=s.apply(e,t||[])).next())})}function Ph(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},s,r,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,r=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(u){l=[6,u],r=0}finally{s=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function pi(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],s=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ls(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var s=n.call(e),r,i=[],o;try{for(;(t===void 0||t-- >0)&&!(r=s.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(o)throw o.error}}return i}function fc(e,t,n){if(n||arguments.length===2)for(var s=0,r=t.length,i;s<r;s++)(i||!(s in t))&&(i||(i=Array.prototype.slice.call(t,0,s)),i[s]=t[s]);return e.concat(i||Array.prototype.slice.call(t))}var xn=function(){function e(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},e.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},e.prototype.setServiceProps=function(t){return this.serviceProps=t,this},e.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},e}();/**
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
 */var kh=function(){function e(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(t){var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var s=new vh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch(i){}}return this.instancesDeferred.get(n).promise},e.prototype.getImmediate=function(t){var n,s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error("Service "+this.name+" is not available")}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(t){var n,s;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,!!this.shouldAutoInitialize()){if(Mh(t))try{this.getOrInitializeService({instanceIdentifier:xt})}catch(d){}try{for(var r=pi(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=Ls(i.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:l});c.resolve(u)}catch(d){}}}catch(d){n={error:d}}finally{try{i&&!i.done&&(s=r.return)&&s.call(r)}finally{if(n)throw n.error}}}},e.prototype.clearInstance=function(t){t===void 0&&(t=xt),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},e.prototype.delete=function(){return Oh(this,void 0,void 0,function(){var t;return Ph(this,function(n){switch(n.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(fc(fc([],Ls(t.filter(function(s){return"INTERNAL"in s}).map(function(s){return s.INTERNAL.delete()}))),Ls(t.filter(function(s){return"_delete"in s}).map(function(s){return s._delete()}))))];case 1:return n.sent(),[2]}})})},e.prototype.isComponentSet=function(){return this.component!=null},e.prototype.isInitialized=function(t){return t===void 0&&(t=xt),this.instances.has(t)},e.prototype.getOptions=function(t){return t===void 0&&(t=xt),this.instancesOptions.get(t)||{}},e.prototype.initialize=function(t){var n,s;t===void 0&&(t={});var r=t.options,i=r===void 0?{}:r,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=pi(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=Ls(l.value,2),d=u[0],h=u[1],g=this.normalizeInstanceIdentifier(d);o===g&&h.resolve(a)}}catch(w){n={error:w}}finally{try{l&&!l.done&&(s=c.return)&&s.call(c)}finally{if(n)throw n.error}}return a},e.prototype.onInit=function(t,n){var s,r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},e.prototype.invokeOnInitCallbacks=function(t,n){var s,r,i=this.onInitCallbacks.get(n);if(!!i)try{for(var o=pi(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(t,n)}catch(l){}}}catch(l){s={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(s)throw s.error}}},e.prototype.getOrInitializeService=function(t){var n=t.instanceIdentifier,s=t.options,r=s===void 0?{}:s,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Nh(n),options:r}),this.instances.set(n,i),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(o){}return i||null},e.prototype.normalizeInstanceIdentifier=function(t){return t===void 0&&(t=xt),this.component?this.component.multipleInstances?t:xt:t},e.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},e}();function Nh(e){return e===xt?void 0:e}function Mh(e){return e.instantiationMode==="EAGER"}/**
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
 */var Lh=function(){function e(t){this.name=t,this.providers=new Map}return e.prototype.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},e.prototype.addOrOverwriteComponent=function(t){var n=this.getProvider(t.name);n.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},e.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new kh(t,this);return this.providers.set(t,n),n},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();/**
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
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const Dh={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},xh=re.INFO,$h={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Uh=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=$h[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dc{constructor(t){this.name=t,this._logLevel=xh,this._logHandler=Uh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}/**
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
 */class Fh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Bh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const hc="@firebase/app",Hh="0.7.3";/**
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
 */const mi=new dc("@firebase/app"),jh="@firebase/app-compat",Vh="@firebase/analytics-compat",zh="@firebase/analytics",Wh="@firebase/app-check-compat",Kh="@firebase/app-check",qh="@firebase/auth",Gh="@firebase/auth-compat",Jh="@firebase/database",Yh="@firebase/database-compat",Xh="@firebase/functions",Qh="@firebase/functions-compat",Zh="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",sp="@firebase/performance",rp="@firebase/performance-compat",ip="@firebase/remote-config",op="@firebase/remote-config-compat",ap="@firebase/storage",cp="@firebase/storage-compat",lp="@firebase/firestore",up="@firebase/firestore-compat",fp="firebase",dp="9.1.2";/**
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
 */const pc="[DEFAULT]",hp={[hc]:"fire-core",[jh]:"fire-core-compat",[zh]:"fire-analytics",[Vh]:"fire-analytics-compat",[Kh]:"fire-app-check",[Wh]:"fire-app-check-compat",[qh]:"fire-auth",[Gh]:"fire-auth-compat",[Jh]:"fire-rtdb",[Yh]:"fire-rtdb-compat",[Xh]:"fire-fn",[Qh]:"fire-fn-compat",[Zh]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[sp]:"fire-perf",[rp]:"fire-perf-compat",[ip]:"fire-rc",[op]:"fire-rc-compat",[ap]:"fire-gcs",[cp]:"fire-gcs-compat",[lp]:"fire-fst",[up]:"fire-fst-compat","fire-js":"fire-js",[fp]:"fire-js-all"};/**
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
 */const Ds=new Map,gi=new Map;function pp(e,t){try{e.container.addComponent(t)}catch(n){mi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xs(e){const t=e.name;if(gi.has(t))return mi.debug(`There were multiple attempts to register component ${t}.`),!1;gi.set(t,e);for(const n of Ds.values())pp(n,e);return!0}function mc(e,t){return e.container.getProvider(t)}/**
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
 */const mp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},$s=new Ln("app","Firebase",mp);/**
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
 */class gp{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $s.create("app-deleted",{appName:this._name})}}/**
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
 */const Us=dp;function wg(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:pc,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw $s.create("bad-app-name",{appName:String(s)});const r=Ds.get(s);if(r){if(Ns(e,r.options)&&Ns(n,r.config))return r;throw $s.create("duplicate-app",{appName:s})}const i=new Lh(s);for(const a of gi.values())i.addComponent(a);const o=new gp(e,n,i);return Ds.set(s,o),o}function vp(e=pc){const t=Ds.get(e);if(!t)throw $s.create("no-app",{appName:e});return t}function Fs(e,t,n){var s;let r=(s=hp[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mi.warn(a.join(" "));return}xs(new xn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */function _p(e){xs(new xn("platform-logger",t=>new Fh(t),"PRIVATE")),Fs(hc,Hh,e),Fs("fire-js","")}_p();function gc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yp=gc,vc=new Ln("auth","Firebase",gc());/**
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
 */const _c=new dc("@firebase/auth");function Bs(e,...t){_c.logLevel<=re.ERROR&&_c.error(`Auth (${Us}): ${e}`,...t)}/**
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
 */function it(e,...t){throw vi(e,...t)}function Ge(e,...t){return vi(e,...t)}function bp(e,t,n){const s=Object.assign(Object.assign({},yp()),{[t]:n});return new Ln("auth","Firebase",s).create(t,{appName:e.name})}function vi(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return vc.create(e,...t)}function U(e,t,...n){if(!e)throw vi(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Bs(t),new Error(t)}function at(e,t){e||ot(t)}/**
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
 */const yc=new Map;function ct(e){at(e instanceof Function,"Expected a class definition");let t=yc.get(e);return t?(at(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,yc.set(e,t),t)}/**
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
 */function Ep(e,t){const n=mc(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ns(i,t!=null?t:{}))return r;it(r,"already-initialized")}return n.initialize({options:t})}function Ip(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ct);(t==null?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function _i(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Tp(){return bc()==="http:"||bc()==="https:"}function bc(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function wp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tp()||yh()||"connection"in navigator)?navigator.onLine:!0}function Cp(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class $n{constructor(t,n){this.shortDelay=t,this.longDelay=n,at(n>t,"Short delay should be less than long delay!"),this.isMobile=_h()||bh()}get(){return wp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yi(e,t){at(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class bi{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Sp=new $n(3e4,6e4);function Ap(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Hs(e,t,n,s,r={}){return Ec(e,r,()=>{let i={},o={};s&&(t==="GET"?o=s:i={body:JSON.stringify(s)});const a=Dn(Object.assign({key:e.config.apiKey},o)).slice(1),c=new(bi.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),bi.fetch()(Ic(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ec(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},Rp),t);try{const r=new Pp(e),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ei(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ei(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ei(e,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw bp(e,u,l);it(e,u)}}catch(r){if(r instanceof on)throw r;it(e,"network-request-failed")}}async function Op(e,t,n,s,r={}){const i=await Hs(e,t,n,s,r);return"mfaPendingCredential"in i&&it(e,"multi-factor-auth-required",{serverResponse:i}),i}function Ic(e,t,n,s){const r=`${t}${n}?${s}`;return e.config.emulator?yi(e.config,r):`${e.config.apiScheme}://${r}`}class Pp{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ge(this.auth,"timeout")),Sp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ei(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ge(e,t,s);return r.customData._tokenResponse=n,r}/**
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
 */async function kp(e,t){return Hs(e,"POST","/v1/accounts:delete",t)}async function Np(e,t){return Hs(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Un(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}async function Mp(e,t=!1){const n=Ms(e),s=await n.getIdToken(t),r=Ti(s);U(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Un(Ii(r.auth_time)),issuedAtTime:Un(Ii(r.iat)),expirationTime:Un(Ii(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ii(e){return Number(e)*1e3}function Ti(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return Bs("JWT malformed, contained fewer than 3 sections"),null;try{const r=gh(n);return r?JSON.parse(r):(Bs("Failed to decode base64 JWT payload"),null)}catch(r){return Bs("Caught error parsing JWT payload as JSON",r),null}}function Lp(e){const t=Ti(e);return U(t,"internal-error"),U(typeof t.exp!="undefined","internal-error"),U(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Fn(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof on&&Dp(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function Dp({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class xp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function js(e){var t;const n=e.auth,s=await e.getIdToken(),r=await Fn(e,Np(n,{idToken:s}));U(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=((t=i.providerUserInfo)===null||t===void 0?void 0:t.length)?Fp(i.providerUserInfo):[],a=Up(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Tc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function $p(e){const t=Ms(e);await js(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Up(e,t){return[...e.filter(s=>!t.some(r=>r.providerId===s.providerId)),...t]}function Fp(e){return e.map(t=>{var{providerId:n}=t,s=hi(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Bp(e,t){const n=await Ec(e,{},()=>{const s=Dn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=Ic(e,r,"/v1/token",`key=${i}`);return bi.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken!="undefined","internal-error"),U(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):Lp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Bp(t,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Bn;return s&&(U(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),r&&(U(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),i&&(U(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Bn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function _t(e,t){U(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class $t{constructor(t){var{uid:n,auth:s,stsTokenManager:r}=t,i=hi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new xp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,t));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Mp(this,t)}reload(){return $p(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new $t(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await js(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Fn(this,kp(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,r,i,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:V,isAnonymous:te,providerData:ae,stsTokenManager:z}=n;U(j&&z,t,"internal-error");const ce=Bn.fromJSON(this.name,z);U(typeof j=="string",t,"internal-error"),_t(d,t.name),_t(h,t.name),U(typeof V=="boolean",t,"internal-error"),U(typeof te=="boolean",t,"internal-error"),_t(g,t.name),_t(w,t.name),_t(D,t.name),_t(S,t.name),_t(A,t.name),_t(x,t.name);const J=new $t({uid:j,auth:t,email:h,emailVerified:V,displayName:d,isAnonymous:te,photoURL:w,phoneNumber:g,tenantId:D,stsTokenManager:ce,createdAt:A,lastLoginAt:x});return ae&&Array.isArray(ae)&&(J.providerData=ae.map(me=>Object.assign({},me))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(t,n,s=!1){const r=new Bn;r.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await js(i),i}}/**
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
 */class wc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}wc.type="NONE";const Cc=wc;/**
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
 */function Vs(e,t,n){return`firebase:${e}:${t}:${n}`}class an{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Vs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Vs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$t._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new an(ct(Cc),t,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ct(Cc);const o=Vs(s,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=$t._fromJSON(t,u);l!==i&&(a=d),i=l;break}}catch(u){}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new an(i,t,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch(u){}})),new an(i,t,s))}}/**
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
 */function Rc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Oc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Sc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(kc(t))return"Blackberry";if(Nc(t))return"Webos";if(wi(t))return"Safari";if((t.includes("chrome/")||Ac(t))&&!t.includes("edge/"))return"Chrome";if(Pc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Sc(e=Ee()){return/firefox\//i.test(e)}function wi(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ac(e=Ee()){return/crios\//i.test(e)}function Oc(e=Ee()){return/iemobile/i.test(e)}function Pc(e=Ee()){return/android/i.test(e)}function kc(e=Ee()){return/blackberry/i.test(e)}function Nc(e=Ee()){return/webos/i.test(e)}function zs(e=Ee()){return/iphone|ipad|ipod/i.test(e)}function Hp(e=Ee()){var t;return zs(e)&&!!((t=window.navigator)===null||t===void 0?void 0:t.standalone)}function jp(){return Eh()&&document.documentMode===10}function Mc(e=Ee()){return zs(e)||Pc(e)||Nc(e)||kc(e)||/windows phone/i.test(e)||Oc(e)}function Vp(){try{return!!(window&&window!==window.top)}catch(e){return!1}}/**
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
 */function Lc(e,t=[]){let n;switch(e){case"Browser":n=Rc(Ee());break;case"Worker":n=`${Rc(Ee())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${s}`}/**
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
 */class zp{constructor(t,n){this.app=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xc(this),this.idTokenSubscription=new xc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ct(n)),this._initializationPromise=this.queue(async()=>{var s;this._deleted||(this.persistenceManager=await an.create(this,t),!this._deleted&&(((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let s=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(t);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(s){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await js(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Cp()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ms(t):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ln("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ct(t)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,s,r):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Lc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Dc(e){return Ms(e)}class xc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Rh(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class $c{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}/**
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
 */async function cn(e,t){return Op(e,"POST","/v1/accounts:signInWithIdp",Ap(e,t))}/**
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
 */const Wp="http://localhost";class Ut extends $c{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new Ut(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r}=n,i=hi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ut(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return cn(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,cn(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,cn(t,n)}buildRequest(){const t={requestUri:Wp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Dn(n)}return t}}/**
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
 */class Uc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hn extends Uc{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class yt extends Hn{constructor(){super("facebook.com")}static credential(t){return Ut._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yt.credentialFromTaggedObject(t)}static credentialFromError(t){return yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yt.credential(t.oauthAccessToken)}catch(n){return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
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
 */class bt extends Hn{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return Ut._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return bt.credential(n,s)}catch(r){return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class Et extends Hn{constructor(){super("github.com")}static credential(t){return Ut._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch(n){return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class It extends Hn{constructor(){super("twitter.com")}static credential(t,n){return Ut._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return It.credential(n,s)}catch(r){return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */class ln{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,r=!1){const i=await $t._fromIdTokenResponse(t,s,r),o=Fc(s);return new ln({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const r=Fc(s);return new ln({user:t,providerId:r,_tokenResponse:s,operationType:n})}}function Fc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ws extends on{constructor(t,n,s,r){var i;super(n.code,n.message);this.operationType=s,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Ws.prototype),this.appName=t.name,this.code=n.code,this.tenantId=(i=t.tenantId)!==null&&i!==void 0?i:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(t,n,s,r){return new Ws(t,n,s,r)}}function Bc(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ws._fromErrorAndOperation(e,i,t,s):i})}async function Kp(e,t,n=!1){const s=await Fn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ln._forOperation(e,"link",s)}/**
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
 */async function qp(e,t,n=!1){const{auth:s}=e,r="reauthenticate";try{const i=await Fn(e,Bc(s,r,t,e),n);U(i.idToken,s,"internal-error");const o=Ti(i.idToken);U(o,s,"internal-error");const{sub:a}=o;return U(e.uid===a,s,"user-mismatch"),ln._forOperation(e,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&it(s,"user-mismatch"),i}}/**
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
 */async function Gp(e,t,n=!1){const s="signIn",r=await Bc(e,s,t),i=await ln._fromIdTokenResponse(e,s,r);return n||await e._updateCurrentUser(i.user),i}const Ks="__sak";/**
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
 */class Hc{constructor(t,n){this.storage=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}/**
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
 */function Jp(){const e=Ee();return wi(e)||zs(e)}const Yp=1e3,Xp=10;class jc extends Hc{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jp()&&Vp(),this.fallbackToPolling=Mc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&t(n,r,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(s,t.newValue):this.storage.removeItem(s);else if(this.localCache[s]===t.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);jp()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Xp):r()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},Yp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}jc.type="LOCAL";const Qp=jc;/**
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
 */class Vc extends Hc{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Vc.type="SESSION";const zc=Vc;/**
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
 */function Zp(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const s=new qs(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Zp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qs.receivers=[];/**
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
 */function Ci(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class em{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ci("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Je(){return window}function tm(e){Je().location.href=e}/**
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
 */function Wc(){return typeof Je().WorkerGlobalScope!="undefined"&&typeof Je().importScripts=="function"}async function nm(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}function sm(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function rm(){return Wc()?self:null}/**
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
 */const Kc="firebaseLocalStorageDb",im=1,Gs="firebaseLocalStorage",qc="fbase_key";class jn{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Js(e,t){return e.transaction([Gs],t?"readwrite":"readonly").objectStore(Gs)}function om(){const e=indexedDB.deleteDatabase(Kc);return new jn(e).toPromise()}function Ri(){const e=indexedDB.open(Kc,im);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(Gs,{keyPath:qc})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(Gs)?t(s):(s.close(),await om(),t(await Ri()))})})}async function Gc(e,t,n){const s=Js(e,!0).put({[qc]:t,value:n});return new jn(s).toPromise()}async function am(e,t){const n=Js(e,!1).get(t),s=await new jn(n).toPromise();return s===void 0?null:s.value}function Jc(e,t){const n=Js(e,!0).delete(t);return new jn(n).toPromise()}const cm=800,lm=3;class Yc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ri(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>lm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(rm()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await nm(),!this.activeServiceWorker)return;this.sender=new em(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((t=s[0])===null||t===void 0?void 0:t.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||sm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ri();return await Gc(t,Ks,"1"),await Jc(t,Ks),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gc(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>am(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const i=Js(r,!1).getAll();return new jn(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yc.type="LOCAL";const um=Yc;/**
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
 */function fm(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function dm(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=r=>{const i=Ge("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",fm().appendChild(s)})}function hm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new $n(3e4,6e4);/**
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
 */function pm(e,t){return t?ct(t):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Si extends $c{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return cn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return cn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return cn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function mm(e){return Gp(e.auth,new Si(e),e.bypassAuthState)}function gm(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),qp(n,new Si(e),e.bypassAuthState)}async function vm(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),Kp(n,new Si(e),e.bypassAuthState)}/**
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
 */class Xc{constructor(t,n,s,r,i=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mm;case"linkViaPopup":case"linkViaRedirect":return vm;case"reauthViaPopup":case"reauthViaRedirect":return gm;default:it(this.auth,"internal-error")}}resolve(t){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _m=new $n(2e3,1e4);class un extends Xc{constructor(t,n,s,r,i){super(t,n,r,i);this.provider=s,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const t=Ci();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,_m.get())};t()}}un.currentPopupAction=null;/**
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
 */const ym="pendingRedirect",Qc=new Map;class bm extends Xc{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let t=Qc.get(this.auth._key());if(!t){try{const s=await Em(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Qc.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Em(e,t){const n=Im(t),s=await Zc(e)._get(n)==="true";return await Zc(e)._remove(n),s}function Zc(e){return ct(e._redirectPersistence)}function Im(e){return Vs(ym,e.config.apiKey,e.name)}async function Tm(e,t,n=!1){const s=Dc(e),r=pm(s,t),o=await new bm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const wm=10*60*1e3;class Cm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Rm(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!tl(t)){const r=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wm&&this.cachedEventUids.clear(),this.cachedEventUids.has(el(t))}saveEventToCache(t){this.cachedEventUids.add(el(t)),this.lastProcessedEventTime=Date.now()}}function el(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function tl({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Rm(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tl(e);default:return!1}}/**
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
 */async function Sm(e,t={}){return Hs(e,"GET","/v1/projects",t)}/**
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
 */const Am=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Om=/^https?/;async function Pm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Sm(e);for(const n of t)try{if(km(n))return}catch(s){}it(e,"unauthorized-domain")}function km(e){const t=_i(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Om.test(n))return!1;if(Am.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Nm=new $n(3e4,6e4);function nl(){const e=Je().___jsl;if(e==null?void 0:e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Mm(e){return new Promise((t,n)=>{var s,r,i;function o(){nl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nl(),n(Ge(e,"network-request-failed"))},timeout:Nm.get()})}if((r=(s=Je().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0?void 0:r.Iframe)t(gapi.iframes.getContext());else if((i=Je().gapi)===null||i===void 0?void 0:i.load)o();else{const a=hm("iframefcb");return Je()[a]=()=>{gapi.load?o():n(Ge(e,"network-request-failed"))},dm(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(t=>{throw Ys=null,t})}let Ys=null;function Lm(e){return Ys=Ys||Mm(e),Ys}/**
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
 */const Dm=new $n(5e3,15e3),xm="__/auth/iframe",$m="emulator/auth/iframe",Um={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Fm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bm(e){const t=e.config;U(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?yi(t,$m):`https://${e.config.authDomain}/${xm}`,s={apiKey:t.apiKey,appName:e.name,v:Us},r=Fm.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Dn(s).slice(1)}`}async function Hm(e){const t=await Lm(e),n=Je().gapi;return U(n,e,"internal-error"),t.open({where:document.body,url:Bm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Um,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ge(e,"network-request-failed"),a=Je().setTimeout(()=>{i(o)},Dm.get());function c(){Je().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const jm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vm=500,zm=600,Wm="_blank",Km="http://localhost";class sl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function qm(e,t,n,s=Vm,r=zm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},jm),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=Ac(l)?Wm:n),Sc(l)&&(t=t||Km,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,w])=>`${h}${g}=${w},`,"");if(Hp(l)&&a!=="_self")return Gm(t||"",a),new sl(null);const d=window.open(t||"",a,u);U(d,e,"popup-blocked");try{d.focus()}catch(h){}return new sl(d)}function Gm(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Jm="__/auth/handler",Ym="emulator/auth/handler";function rl(e,t,n,s,r,i){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:Us,eventId:r};if(t instanceof Uc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ch(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(t instanceof Hn){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Xm(e)}?${Dn(a).slice(1)}`}function Xm({config:e}){return e.emulator?yi(e,Ym):`https://${e.authDomain}/${Jm}`}/**
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
 */const Ai="webStorageSupport";class Qm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zc,this._completeRedirectFn=Tm}async _openPopup(t,n,s,r){var i;at((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rl(t,n,s,_i(),r);return qm(t,o,Ci())}async _openRedirect(t,n,s,r){return await this._originValidation(t),tm(rl(t,n,s,_i(),r)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(at(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s}async initAndGetManager(t){const n=await Hm(t),s=new Cm(t);return n.register("authEvent",r=>(U(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ai,{type:Ai},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ai];o!==void 0&&n(!!o),it(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pm(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mc()||wi()||zs()}}const Zm=Qm;var eg="@firebase/auth",tg="0.18.2";/**
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
 */class ng{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{var r;t(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sg(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rg(e){xs(new xn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=s.options;return(o=>{U(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),U(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lc(e)},c=new zp(o,a);return Ip(c,n),c})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),xs(new xn("auth-internal",t=>{const n=Dc(t.getProvider("auth").getImmediate());return(s=>new ng(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fs(eg,tg,sg(e))}/**
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
 */function Cg(e=vp()){const t=mc(e,"auth");return t.isInitialized()?t.getImmediate():Ep(e,{popupRedirectResolver:Zm,persistence:[um,Qp,zc]})}rg("Browser");var ig="firebase",og="9.1.2";/**
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
 */Fs(ig,og,"app");var ag=!1;/*!
  * pinia v2.0.0-rc.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const cg=Symbol();var il;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(il||(il={}));function Rg(){const e=_l(!0),t=e.run(()=>lo({}));let n=[];const s=[],r=mr({install(i){r._a=i,i.provide(cg,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o))},use(i){return!this._a&&!ag?s.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}export{Mu as A,Of as B,gs as C,wg as D,Cg as E,be as F,Tg as G,yg as H,_g as I,Nf as J,Rg as K,hg as L,gg as M,lg as N,ug as O,ql as P,vg as Q,pa as T,Ig as V,fe as a,Wo as b,pg as c,mg as d,Ze as e,bg as f,lo as g,lu as h,We as i,bo as j,Ko as k,er as l,qt as m,Ur as n,de as o,he as p,Ar as q,bn as r,Zs as s,Mi as t,Eg as u,fg as v,Is as w,dg as x,vn as y,Pr as z};
