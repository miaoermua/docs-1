"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[366],{

/***/ 9795:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ o),
/* harmony export */   b: () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var _chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3990);
/* harmony import */ var _chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(503);
var o=class extends Error{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(this,"OramaClientNotInitializedError")}constructor(){super("Orama Client is not initialized")}},C=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(this,"ChatService")}constructor(w){this.sendQuestion=(d,h)=>{if(!this.oramaClient)throw new o;return this.answerSession||(this.answerSession=this.oramaClient.createAnswerSession({events:{onStateChange:(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(n=>{let a=n.filter(e=>!!e.query);_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.b.interactions=a.map((e,c)=>{var l;let t=_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.a.loading;e.aborted?t=_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.a.aborted:e.loading&&e.sources?t=_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.a.rendering:e.loading&&e.response?t=_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.a.streaming:!e.loading&&e.response&&(t=_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.a.done);let S=(l=e.sources)===null||l===void 0?void 0:l.map(g=>g.document);return{query:e.query,interactionId:e.interactionId,response:e.response,relatedQueries:e.relatedQueries,status:t,latest:n.length-1===c,sources:S}})},"onStateChange")}}),h&&this.answerSession.setSystemPromptConfiguration({systemPrompts:h})),this.answerSession.ask({term:d,related:{howMany:3,format:"question"}}).catch(n=>{_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.b.interactions=_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.b.interactions.map((a,e)=>e===_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.b.interactions.length-1?Object.assign(Object.assign({},a),{status:_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.a.error}):a),console.error(n)})},this.abortAnswer=()=>{if(!this.answerSession)throw new o;this.answerSession.abortAnswer()},this.regenerateLatest=async()=>{if(!this.answerSession)throw new o;this.answerSession.regenerateLast({stream:!1})},this.resetChat=async()=>{if(!this.answerSession)throw new o;_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.b.interactions.length<1||(["loading","rendering","streaming"].includes(_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.b.interactions[_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_0__.b.interactions.length-1].status)&&this.answerSession.abortAnswer(),this.answerSession.clearSession())},this.oramaClient=w}};
//# sourceMappingURL=chunk-74JT73GG.mjs.map

/***/ }),

/***/ 3990:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ i),
/* harmony export */   b: () => (/* binding */ p),
/* harmony export */   c: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _chunk_HZ6LNPTR_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2886);
var l=function(e,n){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(o[r[t]]=e[r[t]]);return o},i;(function(e){e.idle="idle",e.loading="loading",e.rendering="rendering",e.streaming="streaming",e.error="error",e.aborted="aborted",e.done="done"})(i||(i={}));var c=(0,_chunk_HZ6LNPTR_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({chatService:null,interactions:[],sourceBaseURL:"",linksTarget:"_blank",linksRel:"noopener noreferrer",sourcesMap:{title:"title",description:"description",path:"path"}}),{state:p}=c,f=l(c,["state"]);
//# sourceMappingURL=chunk-77A7Q26N.mjs.map

/***/ }),

/***/ 2886:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ V)
/* harmony export */ });
/* harmony import */ var _chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4831);
/* harmony import */ var _chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(503);
var O=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)((e,r,s)=>{let f=e.get(r);f?f.includes(s)||f.push(s):e.set(r,[s])},"appendToMap"),_=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)((e,r)=>{let s;return(...f)=>{s&&clearTimeout(s),s=setTimeout(()=>{s=0,e(...f)},r)}},"debounce"),T=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(e=>!("isConnected"in e)||e.isConnected,"isConnected"),E=_(e=>{for(let r of e.keys())e.set(r,e.get(r).filter(T))},2e3),U=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(()=>{if(typeof _chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_0__.f!="function")return{};let e=new Map;return{dispose:(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(()=>e.clear(),"dispose"),get:(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(r=>{let s=(0,_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_0__.f)();s&&O(e,r,s)},"get"),set:(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(r=>{let s=e.get(r);s&&e.set(r,s.filter(_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_0__.g)),E(e)},"set"),reset:(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(()=>{e.forEach(r=>r.forEach(_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_0__.g)),E(e)},"reset")}},"stencilSubscription"),l=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(e=>typeof e=="function"?e():e,"unwrap"),P=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)((e,r=(s,f)=>s!==f)=>{let s=l(e),f=new Map(Object.entries(s??{})),u={dispose:[],get:[],set:[],reset:[]},a=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(()=>{var t;f=new Map(Object.entries((t=l(e))!==null&&t!==void 0?t:{})),u.reset.forEach(n=>n())},"reset"),y=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(()=>{u.dispose.forEach(t=>t()),a()},"dispose"),p=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(t=>(u.get.forEach(n=>n(t)),f.get(t)),"get"),w=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)((t,n)=>{let c=f.get(t);r(n,c,t)&&(f.set(t,n),u.set.forEach(i=>i(t,n,c)))},"set"),x=typeof Proxy>"u"?{}:new Proxy(s,{get(t,n){return p(n)},ownKeys(t){return Array.from(f.keys())},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},has(t,n){return f.has(n)},set(t,n,c){return w(n,c),!0}}),d=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)((t,n)=>(u[t].push(n),()=>{R(u[t],n)}),"on");return{state:x,get:p,set:w,on:d,onChange:(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)((t,n)=>{let c=d("set",(C,M)=>{C===t&&n(M)}),i=d("reset",()=>n(l(e)[t]));return()=>{c(),i()}},"onChange"),use:(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)((...t)=>{let n=t.reduce((c,i)=>(i.set&&c.push(d("set",i.set)),i.get&&c.push(d("get",i.get)),i.reset&&c.push(d("reset",i.reset)),i.dispose&&c.push(d("dispose",i.dispose)),c),[]);return()=>n.forEach(c=>c())},"use"),dispose:y,reset:a,forceUpdate:(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(t=>{let n=f.get(t);u.set.forEach(c=>c(t,n,n))},"forceUpdate")}},"createObservableMap"),R=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)((e,r)=>{let s=e.indexOf(r);s>=0&&(e[s]=e[e.length-1],e.length--)},"removeFromArray"),V=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_1__.a)((e,r)=>{let s=P(e,r);return s.use(U()),s},"createStore");
//# sourceMappingURL=chunk-HZ6LNPTR.mjs.map

/***/ }),

/***/ 8201:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Vt),
/* harmony export */   b: () => (/* binding */ qt),
/* harmony export */   c: () => (/* binding */ Jt),
/* harmony export */   d: () => (/* binding */ x),
/* harmony export */   e: () => (/* binding */ te),
/* harmony export */   f: () => (/* binding */ ee)
/* harmony export */ });
/* harmony import */ var _chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(503);
var O=globalThis,k=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),I=new WeakMap,ot=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"l$2")}constructor(t,e,s){if(this._$cssResult$=!0,s!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(k&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=I.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&I.set(e,t))}return t}toString(){return this.cssText}},_t=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>new ot(typeof r=="string"?r:r+"",void 0,z),"h$1"),Vt=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new ot(e,r,z)},"p$3"),vt=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r,t)=>{if(k)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=O.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},"d$2"),B=k?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return _t(e)})(r):r;var{is:ft,defineProperty:At,getOwnPropertyDescriptor:yt,getOwnPropertyNames:mt,getOwnPropertySymbols:gt,getPrototypeOf:bt}=Object,g=globalThis,V=g.trustedTypes,Et=V?V.emptyScript:"",W=g.reactiveElementPolyfillSupport,w=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r,t)=>r,"l$1"),T={toAttribute(r,t){switch(t){case Boolean:r=r?Et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},D=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r,t)=>!ft(r,t),"y$2"),q={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:D};Symbol.metadata!=null||(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata!=null||(g.litPropertyMetadata=new WeakMap);var m=class extends HTMLElement{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"c")}static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&At(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){var i;let{get:o,set:n}=(i=yt(this.prototype,t))!=null?i:{get(){return this[e]},set(l){this[e]=l}};return{get(){return o?.call(this)},set(l){let a=o?.call(this);n.call(this,l),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:q}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;let t=bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){let e=this.properties,s=[...mt(e),...gt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(B(i))}else t!==void 0&&e.push(B(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return vt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){let n=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:T).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){var s;let i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let n=i.getPropertyOptions(o),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:T;this._$Em=o,this[o]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){var i;if(t!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(t)),!((i=s.hasChanged)!=null?i:D)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){var i;this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&((i=this._$Ej)!=null?i:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}},J;m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[w("elementProperties")]=new Map,m[w("finalized")]=new Map,W?.({ReactiveElement:m}),((J=g.reactiveElementVersions)!=null?J:g.reactiveElementVersions=[]).push("2.0.4");var H=globalThis,M=H.trustedTypes,K=M?M.createPolicy("lit-html",{createHTML:(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>r,"createHTML")}):void 0,lt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+v,St=`<${at}>`,y=document,P=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(()=>y.createComment(""),"x"),C=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>r===null||typeof r!="object"&&typeof r!="function","H"),ht=Array.isArray,wt=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>ht(r)||typeof r?.[Symbol.iterator]=="function","Z"),R=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,F=/>/g,f=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,Q=/"/g,ct=/^(?:script|style|textarea|title)$/i,dt=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),"O$1"),qt=dt(1),Jt=dt(2),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),X=new WeakMap,A=y.createTreeWalker(y,129);function ut(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return K!==void 0?K.createHTML(t):t}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(ut,"z");var Pt=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":"",n=S;for(let l=0;l<e;l++){let a=r[l],c,u,d=-1,$=0;for(;$<a.length&&(n.lastIndex=$,u=n.exec(a),u!==null);)$=n.lastIndex,n===S?u[1]==="!--"?n=Z:u[1]!==void 0?n=F:u[2]!==void 0?(ct.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=f):u[3]!==void 0&&(n=f):n===f?u[0]===">"?(n=i??S,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?f:u[3]==='"'?Q:G):n===Q||n===G?n=f:n===Z||n===F?n=S:(n=f,i=void 0);let _=n===f&&r[l+1].startsWith("/>")?" ":"";o+=n===S?a+St:d>=0?(s.push(c),a.slice(0,d)+lt+a.slice(d)+v+_):a+v+(d===-2?l:_)}return[ut(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),s]},"q"),j=class pt{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"T")}constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[c,u]=Pt(t,e);if(this.el=pt.createElement(c,s),A.currentNode=this.el.content,e===2){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=A.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(lt)){let $=u[n++],_=i.getAttribute(d).split(v),U=/([.?@])?(.*)/.exec($);a.push({type:1,index:o,name:U[2],strings:_,ctor:U[1]==="."?Ut:U[1]==="?"?Ot:U[1]==="@"?xt:N}),i.removeAttribute(d)}else d.startsWith(v)&&(a.push({type:6,index:o}),i.removeAttribute(d));if(ct.test(i.tagName)){let d=i.textContent.split(v),$=d.length-1;if($>0){i.textContent=M?M.emptyScript:"";for(let _=0;_<$;_++)i.append(d[_],P()),A.nextNode(),a.push({type:2,index:++o});i.append(d[$],P())}}}else if(i.nodeType===8)if(i.data===at)a.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(v,d+1))!==-1;)a.push({type:7,index:o}),d+=v.length-1}o++}}static createElement(t,e){let s=y.createElement("template");return s.innerHTML=t,s}};function E(r,t,e=r,s){var i,o,n;if(t===b)return t;let l=s!==void 0?(i=e._$Co)==null?void 0:i[s]:e._$Cl,a=C(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((o=l?._$AO)==null||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((n=e._$Co)!=null?n:e._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=E(r,l._$AS(r,t.values),l,s)),t}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(E,"f$1");var Ct=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"G")}constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,o=((e=t?.creationScope)!=null?e:y).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,a=0,c=i[0];for(;c!==void 0;){if(l===c.index){let u;c.type===2?u=new L(n,n.nextSibling,this,t):c.type===1?u=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(u=new Tt(n,this,t)),this._$AV.push(u),c=i[++a]}l!==c?.index&&(n=A.nextNode(),l++)}return A.currentNode=y,o}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},L=class $t{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"b$1")}get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,i){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(o=i?.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),C(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==p&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var e;let{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=j.createElement(ut(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)==null?void 0:e._$AD)===o)this._$AH.p(s);else{let n=new Ct(o,this),l=n.u(this.options);n.p(s),this.T(l),this._$AH=n}}_$AC(t){let e=X.get(t.strings);return e===void 0&&X.set(t.strings,e=new j(t)),e}k(t){ht(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new $t(this.S(P()),this.S(P()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},N=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"M")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=E(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{let l=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=E(this,l[s+a],e,a),c===b&&(c=this._$AH[a]),n||(n=!C(c)||c!==this._$AH[a]),c===p?t=p:t!==p&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ut=class extends N{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"J")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},Ot=class extends N{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"K")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},xt=class extends N{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"Q")}constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=E(this,t,e,0))!=null?s:p)===b)return;let i=this._$AH,o=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},Tt=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"X")}constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}},Y=H.litHtmlPolyfillSupport,tt;Y?.(j,L),((tt=H.litHtmlVersions)!=null?tt:H.litHtmlVersions=[]).push("3.1.4");var Ht=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r,t,e)=>{var s,i;let o=(s=e?.renderBefore)!=null?s:t,n=o._$litPart$;if(n===void 0){let l=(i=e?.renderBefore)!=null?i:null;o._$litPart$=n=new L(t.insertBefore(P(),l),l,void 0,e??{})}return n._$AI(r),n},"et");var x=class extends m{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"n")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore!=null||(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}},et;x._$litElement$=!0,x.finalized=!0,(et=globalThis.litElementHydrateSupport)==null||et.call(globalThis,{LitElement:x});var st=globalThis.litElementPolyfillSupport;st?.({LitElement:x});var it;((it=globalThis.litElementVersions)!=null?it:globalThis.litElementVersions=[]).push("4.0.6");var te=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)},"s"),Mt=Object.defineProperty,Nt=Object.defineProperties,Rt=Object.getOwnPropertyDescriptors,rt=Object.getOwnPropertySymbols,jt=Object.prototype.hasOwnProperty,kt=Object.prototype.propertyIsEnumerable,nt=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r,t,e)=>t in r?Mt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,"d"),zt=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r,t)=>{for(var e in t||(t={}))jt.call(t,e)&&nt(r,e,t[e]);if(rt)for(var e of rt(t))kt.call(t,e)&&nt(r,e,t[e]);return r},"l"),Dt=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r,t)=>Nt(r,Rt(t)),"u");var Lt={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:D},It=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r=Lt,t,e)=>{let{kind:s,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,r),s==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.P(n,void 0,r),l}}}if(s==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)},"w");function ee(r){return(t,e)=>typeof e=="object"?It(r,t,e):((s,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?Dt(zt({},s),{wrapped:!0}):s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(ee,"O");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk-ZAJNXYBM.mjs.map

/***/ }),

/***/ 5366:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orama_chat_box: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var _chunk_74JT73GG_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9795);
/* harmony import */ var _chunk_62FT22TU_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5425);
/* harmony import */ var _chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3990);
/* harmony import */ var _chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8201);
/* harmony import */ var _chunk_HZ6LNPTR_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2886);
/* harmony import */ var _chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4831);
/* harmony import */ var _chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(503);
var M=Object.defineProperty,k=Object.getOwnPropertyDescriptor,i=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_6__.a)((t,n,l,c)=>{for(var a=c>1?void 0:c?k(n,l):n,d=t.length-1,p;d>=0;d--)(p=t[d])&&(a=(c?p(n,l,a):p(a))||a);return c&&a&&M(n,l,a),a},"o"),e=class extends _chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.d{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_6__.a)(this,"t")}constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return (0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.b)`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${e.weightsMap.get((t=this.weight)!=null?t:"regular")}
    </svg>`}};e.weightsMap=new Map([["thin",(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.c)`<path d="M236,56v48a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h37.7L187.53,68.69l-.13-.12a84,84,0,1,0-1.75,120.51,4,4,0,0,1,5.5,5.82A91.43,91.43,0,0,1,128,220h-1.26A92,92,0,1,1,193,62.84l35,32.05V56a4,4,0,1,1,8,0Z"/>`],["light",(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.c)`<path d="M238,56v48a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82,82,0,1,0-1.7,117.65,6,6,0,0,1,8.24,8.73A93.46,93.46,0,0,1,128,222h-1.28A94,94,0,1,1,194.37,61.4L226,90.35V56a6,6,0,1,1,12,0Z"/>`],["regular",(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.c)`<path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"/>`],["bold",(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.c)`<path d="M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z"/>`],["fill",(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.c)`<path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,1,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z"/>`],["duotone",(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.c)`<path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"/><path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"/>`]]);e.styles=(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.a)`
    :host {
      display: contents;
    }
  `;i([(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.f)({type:String,reflect:!0})],e.prototype,"size",2);i([(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.f)({type:String,reflect:!0})],e.prototype,"weight",2);i([(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.f)({type:String,reflect:!0})],e.prototype,"color",2);i([(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.f)({type:Boolean,reflect:!0})],e.prototype,"mirrored",2);e=i([(0,_chunk_ZAJNXYBM_mjs__WEBPACK_IMPORTED_MODULE_3__.e)("ph-arrow-clockwise")],e);var H=":host{display:flex;flex-grow:1}.header{background:#fbfbfb;background:var(--background-color-primary,#fbfbfb);padding:.75rem 1rem;padding:var(--spacing-m,calc(12rem/var(--orama-base-font-size, 16))) var(--spacing-l,calc(16rem/var(--orama-base-font-size, 16)));text-align:end;transition:opacity .2s}.header.hidden button{opacity:0;pointer-events:none}.header button{align-items:center;background-color:transparent;border:none;border-radius:.5rem;border-radius:var(--radius-s,calc(8rem/var(--orama-base-font-size, 16)));cursor:pointer;display:inline-flex;font-size:.875rem;font-size:var(--font-size-sm,calc(14rem/var(--orama-base-font-size, 16)));gap:.25rem;gap:var(--spacing-xs,calc(4rem/var(--orama-base-font-size, 16)));padding:.125rem .25rem;padding:var(--spacing-2xs,calc(2rem/var(--orama-base-font-size, 16))) var(--spacing-xs,calc(4rem/var(--orama-base-font-size, 16)));transition:color .2s;transition:background-color .2s}.header button,.header button:hover{color:#99989d;color:var(--text-color-tertiary,#99989d)}.header button:hover{background-color:#eee9f6;background-color:var(--background-color-tertiary,#eee9f6)}",S=H,I=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_6__.a)(this,"ChatBox")}constructor(t){;(0,_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_5__.a)(this,t),this.index=void 0,this.clientInstance=void 0,this.sourceBaseUrl=void 0,this.linksTarget=void 0,this.linksRel=void 0,this.placeholder=void 0,this.sourcesMap=void 0,this.suggestions=void 0,this.autoFocus=!0,this.systemPrompts=void 0,this.oramaClient=void 0,this.componentID=(0,_chunk_62FT22TU_mjs__WEBPACK_IMPORTED_MODULE_1__.f)("chat-box")}indexChanged(){this.startChatService()}componentWillLoad(){this.el.id=this.componentID,this.startChatService()}startChatService(){(0,_chunk_62FT22TU_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(this.el,this.index,this.clientInstance),this.oramaClient=this.clientInstance||(0,_chunk_62FT22TU_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(this.index),_chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_2__.b.chatService=new _chunk_74JT73GG_mjs__WEBPACK_IMPORTED_MODULE_0__.b(this.oramaClient)}render(){return _chunk_77A7Q26N_mjs__WEBPACK_IMPORTED_MODULE_2__.b.chatService?(0,_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_5__.b)(_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_5__.c,{class:"theme-dark"},(0,_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_5__.b)("orama-chat",{placeholder:this.placeholder,sourceBaseUrl:this.sourceBaseUrl,sourcesMap:this.sourcesMap,suggestions:this.suggestions,focusInput:this.autoFocus,systemPrompts:this.systemPrompts},(0,_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_5__.b)("div",{slot:"chat-empty-state"},(0,_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_5__.b)("slot",{name:"empty-state"})))):(0,_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_5__.b)("orama-text",{as:"p"},"Unable to initialize chat service")}get el(){return (0,_chunk_P4VOAUD5_mjs__WEBPACK_IMPORTED_MODULE_5__.d)(this)}static get watchers(){return{index:["indexChanged"]}}};I.style=S;
//# sourceMappingURL=orama-chat-box.entry-V4KQQ4UT.mjs.map

/***/ })

}]);