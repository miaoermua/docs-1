"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[425],{

/***/ 5425:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ke),
/* harmony export */   b: () => (/* binding */ xe),
/* harmony export */   c: () => (/* binding */ Ie),
/* harmony export */   d: () => (/* binding */ Se),
/* harmony export */   e: () => (/* binding */ Ce),
/* harmony export */   f: () => (/* binding */ Ae)
/* harmony export */ });
/* harmony import */ var _chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(503);
var G=Object.create,X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,ee=Object.getOwnPropertyNames,te=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty,U=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),"w"),se=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((e,t,o,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ee(t))!re.call(e,a)&&a!==o&&X(e,a,{get:(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(()=>t[a],"get"),enumerable:!(c=Z(t,a))||c.enumerable});return e},"Et"),$=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((e,t,o)=>(o=e!=null?G(te(e)):{},se(t||!e||!e.__esModule?X(o,"default",{value:e,enumerable:!0}):o,e)),"K"),ie=U(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.output=e.exists=e.hash=e.bytes=e.bool=e.number=void 0;function t(u){if(!Number.isSafeInteger(u)||u<0)throw new Error(`Wrong positive integer: ${u}`)}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(t,"k"),e.number=t;function o(u){if(typeof u!="boolean")throw new Error(`Expected boolean, not ${u}`)}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(o,"de"),e.bool=o;function c(u,...f){if(!(u instanceof Uint8Array))throw new Error("Expected Uint8Array");if(f.length>0&&!f.includes(u.length))throw new Error(`Expected Uint8Array of length ${f}, not of length=${u.length}`)}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(c,"Y"),e.bytes=c;function a(u){if(typeof u!="function"||typeof u.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");t(u.outputLen),t(u.blockLen)}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(a,"he"),e.hash=a;function m(u,f=!0){if(u.destroyed)throw new Error("Hash instance has been destroyed");if(f&&u.finished)throw new Error("Hash#digest() has already been called")}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(m,"fe"),e.exists=m;function w(u,f){c(u);let v=f.outputLen;if(u.length<v)throw new Error(`digestInto() expects output buffer of length at least ${v}`)}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(w,"ye"),e.output=w;var k={number:t,bool:o,bytes:c,hash:a,exists:m,output:w};e.default=k}),ne=U(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;var t=BigInt(2**32-1),o=BigInt(32);function c(n,i=!1){return i?{h:Number(n&t),l:Number(n>>o&t)}:{h:Number(n>>o&t)|0,l:Number(n&t)|0}}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(c,"z"),e.fromBig=c;function a(n,i=!1){let h=new Uint32Array(n.length),S=new Uint32Array(n.length);for(let C=0;C<n.length;C++){let{h:L,l:_}=c(n[C],i);[h[C],S[C]]=[L,_]}return[h,S]}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(a,"ge"),e.split=a;var m=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i)=>BigInt(n>>>0)<<o|BigInt(i>>>0),"Ct");e.toBig=m;var w=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>n>>>h,"Pt"),k=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>n<<32-h|i>>>h,"_t"),u=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>n>>>h|i<<32-h,"vt"),f=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>n<<32-h|i>>>h,"kt"),v=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>n<<64-h|i>>>h-32,"Nt"),T=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>n>>>h-32|i<<64-h,"Dt"),P=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i)=>i,"Mt"),A=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i)=>n,"Rt"),B=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>n<<h|i>>>32-h,"Lt"),O=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>i<<h|n>>>32-h,"Bt"),g=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>i<<h-32|n>>>64-h,"Ut"),I=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>n<<h-32|i>>>64-h,"$t");function b(n,i,h,S){let C=(i>>>0)+(S>>>0);return{h:n+h+(C/2**32|0)|0,l:C|0}}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(b,"be"),e.add=b;var x=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h)=>(n>>>0)+(i>>>0)+(h>>>0),"jt"),E=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h,S)=>i+h+S+(n/2**32|0)|0,"Ht"),y=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h,S)=>(n>>>0)+(i>>>0)+(h>>>0)+(S>>>0),"Gt"),r=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h,S,C)=>i+h+S+C+(n/2**32|0)|0,"Ft"),l=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h,S,C)=>(n>>>0)+(i>>>0)+(h>>>0)+(S>>>0)+(C>>>0),"qt"),d=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((n,i,h,S,C,L)=>i+h+S+C+L+(n/2**32|0)|0,"Wt"),p={fromBig:c,split:a,toBig:e.toBig,shrSH:w,shrSL:k,rotrSH:u,rotrSL:f,rotrBH:v,rotrBL:T,rotr32H:P,rotr32L:A,rotlSH:B,rotlSL:O,rotlBH:g,rotlBL:I,add:b,add3L:x,add3H:E,add4L:y,add4H:r,add5H:d,add5L:l};e.default=p}),oe=U(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.crypto=void 0,e.crypto=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0}),ae=U(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapXOFConstructorWithOpts=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;var t=oe(),o=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>r instanceof Uint8Array,"Z"),c=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>new Uint8Array(r.buffer,r.byteOffset,r.byteLength),"Vt");e.u8=c;var a=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>new Uint32Array(r.buffer,r.byteOffset,Math.floor(r.byteLength/4)),"Yt");e.u32=a;var m=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>new DataView(r.buffer,r.byteOffset,r.byteLength),"Xt");e.createView=m;var w=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((r,l)=>r<<32-l|r>>>l,"zt");if(e.rotr=w,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");var k=Array.from({length:256},(r,l)=>l.toString(16).padStart(2,"0"));function u(r){if(!o(r))throw new Error("Uint8Array expected");let l="";for(let d=0;d<r.length;d++)l+=k[r[d]];return l}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(u,"Jt"),e.bytesToHex=u;function f(r){if(typeof r!="string")throw new Error("hex string expected, got "+typeof r);let l=r.length;if(l%2)throw new Error("padded hex string expected, got unpadded hex of length "+l);let d=new Uint8Array(l/2);for(let p=0;p<d.length;p++){let n=p*2,i=r.slice(n,n+2),h=Number.parseInt(i,16);if(Number.isNaN(h)||h<0)throw new Error("Invalid byte sequence");d[p]=h}return d}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(f,"Zt"),e.hexToBytes=f;var v=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(async()=>{},"en");e.nextTick=v;async function T(r,l,d){let p=Date.now();for(let n=0;n<r;n++){d(n);let i=Date.now()-p;i>=0&&i<l||(await(0,e.nextTick)(),p+=i)}}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(T,"tn"),e.asyncLoop=T;function P(r){if(typeof r!="string")throw new Error(`utf8ToBytes expected string, got ${typeof r}`);return new Uint8Array(new TextEncoder().encode(r))}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(P,"xe"),e.utf8ToBytes=P;function A(r){if(typeof r=="string"&&(r=P(r)),!o(r))throw new Error(`expected Uint8Array, got ${typeof r}`);return r}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(A,"M"),e.toBytes=A;function B(...r){let l=new Uint8Array(r.reduce((p,n)=>p+n.length,0)),d=0;return r.forEach(p=>{if(!o(p))throw new Error("Uint8Array expected");l.set(p,d),d+=p.length}),l}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(B,"nn"),e.concatBytes=B;var O=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"J")}clone(){return this._cloneInto()}};e.Hash=O;var g=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(r=>Object.prototype.toString.call(r)==="[object Object]"&&r.constructor===Object,"rn");function I(r,l){if(l!==void 0&&(typeof l!="object"||!g(l)))throw new Error("Options should be object or undefined");return Object.assign(r,l)}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(I,"sn"),e.checkOpts=I;function b(r){let l=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(p=>r().update(A(p)).digest(),"e"),d=r();return l.outputLen=d.outputLen,l.blockLen=d.blockLen,l.create=()=>r(),l}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(b,"on"),e.wrapConstructor=b;function x(r){let l=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((p,n)=>r(n).update(A(p)).digest(),"e"),d=r({});return l.outputLen=d.outputLen,l.blockLen=d.blockLen,l.create=p=>r(p),l}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(x,"an"),e.wrapConstructorWithOpts=x;function E(r){let l=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((p,n)=>r(n).update(A(p)).digest(),"e"),d=r({});return l.outputLen=d.outputLen,l.blockLen=d.blockLen,l.create=p=>r(p),l}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(E,"cn"),e.wrapXOFConstructorWithOpts=E;function y(r=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(r));throw new Error("crypto.getRandomValues must be defined")}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(y,"ln"),e.randomBytes=y}),le=U(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.shake256=e.shake128=e.keccak_512=e.keccak_384=e.keccak_256=e.keccak_224=e.sha3_512=e.sha3_384=e.sha3_256=e.sha3_224=e.Keccak=e.keccakP=void 0;var t=ie(),o=ne(),c=ae(),[a,m,w]=[[],[],[]],k=BigInt(0),u=BigInt(1),f=BigInt(2),v=BigInt(7),T=BigInt(256),P=BigInt(113);for(let y=0,r=u,l=1,d=0;y<24;y++){[l,d]=[d,(2*l+3*d)%5],a.push(2*(5*d+l)),m.push((y+1)*(y+2)/2%64);let p=k;for(let n=0;n<7;n++)r=(r<<u^(r>>v)*P)%T,r&f&&(p^=u<<(u<<BigInt(n))-u);w.push(p)}var[A,B]=o.default.split(w,!0),O=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((y,r,l)=>l>32?o.default.rotlBH(y,r,l):o.default.rotlSH(y,r,l),"Te"),g=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((y,r,l)=>l>32?o.default.rotlBL(y,r,l):o.default.rotlSL(y,r,l),"Ae");function I(y,r=24){let l=new Uint32Array(10);for(let d=24-r;d<24;d++){for(let i=0;i<10;i++)l[i]=y[i]^y[i+10]^y[i+20]^y[i+30]^y[i+40];for(let i=0;i<10;i+=2){let h=(i+8)%10,S=(i+2)%10,C=l[S],L=l[S+1],_=O(C,L,1)^l[h],Y=g(C,L,1)^l[h+1];for(let j=0;j<50;j+=10)y[i+j]^=_,y[i+j+1]^=Y}let p=y[2],n=y[3];for(let i=0;i<24;i++){let h=m[i],S=O(p,n,h),C=g(p,n,h),L=a[i];p=y[L],n=y[L+1],y[L]=S,y[L+1]=C}for(let i=0;i<50;i+=10){for(let h=0;h<10;h++)l[h]=y[i+h];for(let h=0;h<10;h++)y[i+h]^=~l[(h+2)%10]&l[(h+4)%10]}y[0]^=A[d],y[1]^=B[d]}l.fill(0)}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(I,"Pe"),e.keccakP=I;var b=class Q extends c.Hash{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"t")}constructor(r,l,d,p=!1,n=24){if(super(),this.blockLen=r,this.suffix=l,this.outputLen=d,this.enableXOF=p,this.rounds=n,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,t.default.number(d),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,c.u32)(this.state)}keccak(){I(this.state32,this.rounds),this.posOut=0,this.pos=0}update(r){t.default.exists(this);let{blockLen:l,state:d}=this;r=(0,c.toBytes)(r);let p=r.length;for(let n=0;n<p;){let i=Math.min(l-this.pos,p-n);for(let h=0;h<i;h++)d[this.pos++]^=r[n++];this.pos===l&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:r,suffix:l,pos:d,blockLen:p}=this;r[d]^=l,l&128&&d===p-1&&this.keccak(),r[p-1]^=128,this.keccak()}writeInto(r){t.default.exists(this,!1),t.default.bytes(r),this.finish();let l=this.state,{blockLen:d}=this;for(let p=0,n=r.length;p<n;){this.posOut>=d&&this.keccak();let i=Math.min(d-this.posOut,n-p);r.set(l.subarray(this.posOut,this.posOut+i),p),this.posOut+=i,p+=i}return r}xofInto(r){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(r)}xof(r){return t.default.number(r),this.xofInto(new Uint8Array(r))}digestInto(r){if(t.default.output(r,this),this.finished)throw new Error("digest() was already called");return this.writeInto(r),this.destroy(),r}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(r){let{blockLen:l,suffix:d,outputLen:p,rounds:n,enableXOF:i}=this;return r||(r=new Q(l,d,p,i,n)),r.state32.set(this.state32),r.pos=this.pos,r.posOut=this.posOut,r.finished=this.finished,r.rounds=n,r.suffix=d,r.outputLen=p,r.enableXOF=i,r.destroyed=this.destroyed,r}};e.Keccak=b;var x=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((y,r,l)=>(0,c.wrapConstructor)(()=>new b(r,y,l)),"g");e.sha3_224=x(6,144,224/8),e.sha3_256=x(6,136,256/8),e.sha3_384=x(6,104,384/8),e.sha3_512=x(6,72,512/8),e.keccak_224=x(1,144,224/8),e.keccak_256=x(1,136,256/8),e.keccak_384=x(1,104,384/8),e.keccak_512=x(1,72,512/8);var E=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((y,r,l)=>(0,c.wrapXOFConstructorWithOpts)((d={})=>new b(r,y,d.dkLen===void 0?l:d.dkLen,!0)),"_e");e.shake128=E(31,168,128/8),e.shake256=E(31,136,256/8)}),he=U((e,t)=>{var{sha3_512:o}=le(),c=24,a=32,m=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((g=4,I=Math.random)=>{let b="";for(;b.length<g;)b=b+Math.floor(I()*36).toString(36);return b},"ee");function w(g){let I=8n,b=0n;for(let x of g.values()){let E=BigInt(x);b=(b<<I)+E}return b}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(w,"De");var k=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((g="")=>w(o(g)).toString(36).slice(1),"Me"),u=Array.from({length:26},(g,I)=>String.fromCharCode(I+97)),f=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(g=>u[Math.floor(g()*u.length)],"bn"),v=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(({globalObj:g=typeof global<"u"?global:typeof window<"u"?window:{},random:I=Math.random}={})=>{let b=Object.keys(g).toString(),x=b.length?b+m(a,I):m(a,I);return k(x).substring(0,a)},"Re"),T=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(g=>()=>g++,"Le"),P=476782367,A=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(({random:g=Math.random,counter:I=T(Math.floor(g()*P)),length:b=c,fingerprint:x=v({random:g})}={})=>function(){let E=f(g),y=Date.now().toString(36),r=I().toString(36),l=m(b,g),d=`${y+l+r+x}`;return`${E+k(d).substring(1,b)}`},"Be"),B=A(),O=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((g,{minLength:I=2,maxLength:b=a}={})=>{let x=g.length,E=/^[0-9a-z]+$/;try{if(typeof g=="string"&&x>=I&&x<=b&&E.test(g))return!0}finally{}return!1},"xn");t.exports.getConstants=()=>({defaultLength:c,bigLength:a}),t.exports.init=A,t.exports.createId=B,t.exports.bufToBigInt=w,t.exports.createCounter=T,t.exports.createFingerprint=v,t.exports.isCuid=O}),D=U((e,t)=>{var{createId:o,init:c,getConstants:a,isCuid:m}=he();t.exports.createId=o,t.exports.init=c,t.exports.getConstants=a,t.exports.isCuid=m});Date.now().toString().slice(5);var q=BigInt(1e3),R=BigInt(1e6),H=BigInt(1e9);async function ce(e){return typeof e=="number"&&(e=BigInt(e)),e<q?`${e}ns`:e<R?`${e/q}\u03BCs`:e<H?`${e/R}ms`:`${e/H}s`}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(ce,"pe");async function K(e){return{raw:Number(e),formatted:await ce(e)}}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(K,"V");var ue=$(D(),1),F=$(D(),1),de="https://answer.api.orama.com",J="orama_user_id";function pe(e){let[t,...o]=e.split(`
`),c=o.join(`
`).replace("data: ","");return{event:t.replace("event: ",""),data:c}}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(pe,"qe");function z(e){return typeof e=="object"?JSON.stringify(e):`${e}`}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(z,"ne");var fe=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"L")}messages;inferenceType;oramaClient;endpoint;abortController;events;userContext;conversationID;lastInteractionParams;state=[];systemPrompts;constructor(e){let t=e.oramaClient.answersApiBaseURL||de;this.messages=e.initialMessages||[],this.inferenceType=e.inferenceType,this.oramaClient=e.oramaClient,this.endpoint=`${t}/v1/answer?api-key=${this.oramaClient.api_key}`,this.events=e.events,this.conversationID=(0,F.createId)(),this.userContext=e.userContext}async askStream(e){return this.messages.push({role:"user",content:e.term??""}),this.fetchAnswer(e)}async ask(e){let t=await this.askStream(e),o="";for await(let c of t)o=c;return this.events?.onMessageChange&&this.events.onMessageChange(this.messages),o}getMessages(){return this.messages}clearSession(){this.messages=[],this.state=[],this.events?.onMessageChange&&this.events.onMessageChange(this.messages),this.events?.onStateChange&&this.events.onStateChange(this.state)}abortAnswer(){if(!this.abortController)throw new Error("AbortController is not ready");this.abortController.abort(),this.abortController=void 0,this.state[this.state.length-1].aborted=!0}async regenerateLast({stream:e=!0}={}){if(this.state.length===0||this.messages.length===0)throw new Error("No messages to regenerate");if(this.messages.at(-1)?.role!=="assistant")throw new Error("Last message is not an assistant message");return this.messages.pop(),this.state.pop(),e?this.askStream(this.lastInteractionParams):this.ask(this.lastInteractionParams)}addNewEmptyAssistantMessage(){this.messages.push({role:"assistant",content:""})}async*fetchAnswer(e){this.abortController=new AbortController,this.lastInteractionParams=e;let t=(0,F.createId)(),o=null,c=this.state.length;this.state.push({interactionId:t,query:e.term??"",response:"",relatedQueries:null,sources:null,translatedQuery:null,aborted:!1,loading:!0,error:!1,errorMessage:null});try{this.events?.onNewInteractionStarted&&this.events.onNewInteractionStarted(t),this.events?.onStateChange&&this.events.onStateChange(this.state);let a=new URLSearchParams;a.append("type",this.inferenceType),a.append("messages",JSON.stringify(this.messages)),a.append("query",e.term??""),a.append("conversationId",this.conversationID),a.append("userId",this.oramaClient.getUserId()),a.append("endpoint",this.oramaClient.endpoint),a.append("searchParams",JSON.stringify(e)),a.append("identity",this.oramaClient.getIdentity()??""),a.append("interactionId",t),a.append("alias",this.oramaClient.getAlias()??"");let m=this.getSystemPromptConfiguration();if(m&&a.append("systemPrompts",JSON.stringify(m)),this.userContext&&a.append("userContext",z(this.userContext)),e.userData&&a.append("userData",z(e.userData)),e.related){if(e.related?.howMany&&e.related?.howMany>5)throw new Error("Can generate at most 5 related queries");a.append("related",JSON.stringify({enabled:!0,howMany:e.related.howMany??3,format:e.related.format??"question"}))}let w=await fetch(this.endpoint,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a.toString(),signal:this.abortController.signal});if(!w.ok||!w.body)throw new Error(w.statusText);o=w.body.getReader();let k=new TextDecoder,u=[],f="";this.events?.onMessageLoading&&this.events.onMessageLoading(!0),this.addNewEmptyAssistantMessage();let v=this.messages.at(-1);for(;;){let{value:T,done:P}=await o.read();if(P)break;f+=k.decode(T,{stream:!0});let A;for(;(A=f.indexOf(`

`))!==-1;){let B=f.slice(0,A);f=f.slice(A+2);try{let O=pe(B),g=JSON.parse(O.data);if(g.type==="sources")this.state[c].sources=g.message,this.events?.onSourceChange&&this.events.onSourceChange(g.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if(g.type==="query-translated")this.state[c].translatedQuery=g.message,this.events?.onQueryTranslated&&this.events.onQueryTranslated(g.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if(g.type==="related-queries")this.state[c].relatedQueries=g.message,this.events?.onRelatedQueries&&this.events.onRelatedQueries(g.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if(g.type==="text")for(u.push(g.message);u.length>0;)v.content+=u.shift(),this.state[c].response=v.content,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onMessageChange&&this.events.onMessageChange(this.messages),yield v.content}catch(O){console.error("Error parsing SSE event:",O),console.error("Raw message:",B)}}}}catch(a){if(a.name==="AbortError")this.state[c].aborted=!0,this.events?.onAnswerAborted&&this.events.onAnswerAborted(!0);else throw this.state[c].error=!0,this.state[c].errorMessage=a.message??"Unknown error",a}finally{o?.releaseLock(),this.state[c].loading=!1,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onMessageLoading&&this.events.onMessageLoading(!1)}}setSystemPromptConfiguration(e){if(Array.isArray(e.systemPrompts)){if(!e.systemPrompts.every(t=>typeof t=="string"))throw new Error("Invalid system prompt configuration");this.systemPrompts=e.systemPrompts}return this}getSystemPromptConfiguration(){return this.systemPrompts}},ge=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"B")}cache;config;constructor(e){this.cache=new Map,this.config=e}set(e,t){this.cache.set(e,t)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){return this.cache.delete(e)}clear(){this.cache.clear()}size(){return this.cache.size}},V="1.3.17",ye={name:"@oramacloud/client",version:V,description:"Orama SDK for Node.js, Deno, and Browsers",type:"module",sideEffects:!1,main:"./dist/index.cjs",module:"./dist/index.js",types:"./dist/index.d.ts",runkitExampleFilename:"./example/runkit.js",exports:{".":{require:"./dist/index.cjs",import:"./dist/index.js",types:"./dist/index.d.ts",browser:"./dist/index.global.js"},"./react":{require:"./dist/react/index.cjs",import:"./dist/react/index.js",types:"./dist/react/index.d.ts"},"./vue":{require:"./dist/vue/index.cjs",import:"./dist/vue/index.js",types:"./dist/vue/index.d.ts"}},scripts:{format:"bunx @biomejs/biome format src --write",build:"npm run build:lib && npm run build:react && npm run build:vue",dev:"run-p watch:lib watch:react watch:vue","watch:lib":"tsup --config tsup.lib.js --watch","watch:react":"tsup --config tsup.react.js --watch","watch:vue":"tsup --config tsup.vue.js --watch","build:lib":"tsup --config tsup.lib.js","build:react":"tsup --config tsup.react.js","build:vue":"tsup --config tsup.vue.js",test:"node --no-warnings --loader tsx --test **/*.test.ts","serve:example":"esbuild src/index.ts --bundle --outfile=example/out.js --format=esm --watch --servedir=example",prepare:"husky install"},keywords:["orama","search engine","sdk"],files:["dist","example/runkit.js"],author:{name:"Michele Riva",email:"michele.riva@oramasearch.com",url:"https://github.com/MicheleRiva"},license:"ISC",dependencies:{"@orama/orama":"^2.0.16","@paralleldrive/cuid2":"^2.2.1",lodash:"^4.17.21",openai:"^4.24.1",react:"^18.2.0",vue:"^3.4.25"},devDependencies:{"@biomejs/biome":"^1.4.1","@fastify/formbody":"^7.4.0","@types/lodash":"^4.14.202","@types/node":"^20.3.1","@types/react":"^18.2.14",dotenv:"^16.3.1",esbuild:"0.18.5",fastify:"^4.19.2",husky:"^8.0.3","npm-run-all":"^4.1.5","ts-standard":"^12.0.2",tsup:"^7.1.0",tsx:"^3.12.7",typescript:"^5.1.3"},"ts-standard":{ignore:["dist","node_modules"]}};function N(e,t){if(typeof navigator<"u"){typeof navigator.sendBeacon<"u"&&navigator.sendBeacon(e,t);return}fetch(e,{method:"POST",body:t,headers:{"Content-Type":"application/json"}}).then(()=>{},o=>console.log(o))}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(N,"x");var me=class W{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"t")}data;params;config;profile;constructor(t,o){this.data=[],this.config=t,this.profile=o}setParams(t){this.params=t}static create(t,o){let c=new W(t,o);return c.start(),c}add(t){this.data.push({rawSearchString:t.rawSearchString,query:t.query,resultsCount:t.resultsCount,roundTripTime:t.roundTripTime,searchedAt:t.searchedAt,userId:this.profile.getUserId(),identity:this.profile.getIdentity(),alias:this.profile.getAlias(),referer:typeof location<"u"?location.toString():void 0}),this.params!=null&&this.data.length>=this.config.flushSize&&this.flush()}flush(){if(this.params==null||this.data.length===0)return;let t=this.data;this.data=[];let o={source:"fe",deploymentID:this.params.deploymentID,index:this.params.index,oramaId:this.config.id,oramaVersion:ye.version,userAgent:typeof navigator<"u"?navigator.userAgent:void 0,events:t};N(this.params.endpoint+`?api-key=${this.config.api_key}`,JSON.stringify(o))?.catch(c=>console.log(c))}start(){let t=setInterval(this.flush.bind(this),this.config.flushInterval);t.unref!=null&&t.unref()}},we=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"$")}constructor(e){this.params=e}intervalId;start(){this.stop(),this.intervalId=setInterval(this.beat.bind(this),this.params.frequency)}stop(){this.intervalId!==void 0&&clearInterval(this.intervalId)}beat(){N(this.params.endpoint)?.catch(e=>console.log(e))}},M=$(D(),1),ve=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"H")}endpoint;apiKey;userId;identity;userAlias;params;constructor({endpoint:e,apiKey:t}){if(!e||!t)throw new Error("Endpoint and API Key are required to create a Profile");if(typeof e!="string"||typeof t!="string")throw new Error("Endpoint and API Key must be strings");if(typeof localStorage<"u"){let o=localStorage.getItem(J);o?this.userId=o:(this.userId=(0,M.createId)(),localStorage.setItem(J,this.userId))}else this.userId=(0,M.createId)();this.endpoint=e,this.apiKey=t}setParams(e){let{protocol:t,host:o}=new URL(e.identifyUrl),c=`${t}//${o}/identify`;this.params={identifyUrl:c,index:e.index}}getIdentity(){return this.identity}getUserId(){return this.userId}getAlias(){return this.userAlias}async sendProfileData(e){if(!this.params)throw new Error("Orama Profile is not initialized");let t=JSON.stringify({...e,visitorId:this.getUserId(),index:this.params.index});await N(`${this.params?.identifyUrl}?api-key=${this.apiKey}`,t)}async identify(e,t){if(typeof t!="string")throw new Error("Identity must be a string");await e,await this.sendProfileData({entity:"identity",id:t}),this.identity=t}async alias(e,t){if(typeof t!="string")throw new Error("Identity must be a string");await e,await this.sendProfileData({entity:"alias",id:t}),this.userAlias=t}reset(){this.userId=(0,M.createId)(),this.identity=void 0,this.userAlias=void 0}},be=class{static{(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(this,"Ye")}id=(0,ue.createId)();api_key;endpoint;answersApiBaseURL;collector;cache;profile;searchDebounceTimer;searchRequestCounter=0;blockSearchTillAuth=!1;heartbeat;initPromise;constructor(e){if(this.api_key=e.api_key,this.endpoint=e.endpoint,this.answersApiBaseURL=e.answersApiBaseURL,this.profile=new ve({endpoint:this.endpoint,apiKey:this.api_key}),e.telemetry!==!1){let t={id:this.id,api_key:this.api_key,flushInterval:e.telemetry?.flushInterval??5e3,flushSize:e.telemetry?.flushSize??25};this.collector=me.create(t,this.profile)}if(e.cache!==!1){let t={};this.cache=new ge(t)}this.init()}customerUserToken=void 0;searchToken=void 0;setAuthToken(e){e===null?(this.customerUserToken=void 0,this.searchToken=void 0):(this.customerUserToken=e,this.searchToken=void 0),this.init()}onAuthTokenExpired;setOnAuthTokenExpired(e){this.onAuthTokenExpired=e}async search(e,t){if(await this.initPromise,this.blockSearchTillAuth)return console.warn("Search request blocked until user is authenticated"),null;let o=++this.searchRequestCounter,c=`search-${JSON.stringify(e)}`,a=null,m,w=!1,k=t?.fresh!==!0&&this.cache?.has(c),u=(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(async()=>{try{let f=Date.now();a=await this.fetch("search","POST",{q:e,sst:this.searchToken},t?.abortController);let v=Date.now();a.elapsed=await K(BigInt(v*1e6-f*1e6)),m=v-f,this.cache?.set(c,a)}catch(f){if(f.name!=="AbortError")throw console.error("Search request failed",f),f}return this.collector&&this.collector.add({rawSearchString:e.term,resultsCount:a?.hits?.length??0,roundTripTime:m,query:e,cached:w,searchedAt:new Date,userId:this.profile.getUserId()}),a},"l");if(k&&this.cache)m=0,a=this.cache.get(c),w=!0,this.collector&&this.collector.add({rawSearchString:e.term,resultsCount:a?.hits?.length??0,roundTripTime:m,query:e,cached:w,searchedAt:new Date,userId:this.profile.getUserId()});else return t?.debounce?new Promise((f,v)=>{clearTimeout(this.searchDebounceTimer),this.searchDebounceTimer=setTimeout(async()=>{try{await u(),f(a)}catch(T){T.name!=="AbortError"&&(console.error("Search request failed",T),v(T))}},t?.debounce||300),"unref"in this.searchDebounceTimer&&this.searchDebounceTimer.unref()}):u();return o===this.searchRequestCounter?a:null}async vectorSearch(e,t){await this.initPromise;let o=`vectorSearch-${JSON.stringify(e)}`,c,a,m=!1;if((t?.fresh!==!0&&this.cache?.has(o))===!0&&this.cache!=null)c=0,a=this.cache.get(o),m=!0;else{let w=Date.now();a=await this.fetch("vector-search2","POST",{q:e},t?.abortController);let k=Date.now();a.elapsed=await K(BigInt(k*1e6-w*1e6)),c=k-w,this.cache?.set(o,a)}return this.collector!=null&&this.collector.add({rawSearchString:e.term,resultsCount:a.hits?.length??0,roundTripTime:c,query:e,cached:m,searchedAt:new Date,userId:this.profile.getUserId()}),a}createAnswerSession(e){return new fe({inferenceType:e?.inferenceType||"documentation",initialMessages:e?.initialMessages||[],oramaClient:this,events:e?.events,userContext:e?.userContext,systemPrompts:e?.systemPrompts??[]})}startHeartBeat(e){this.heartbeat?.stop(),this.heartbeat=new we({...e,endpoint:`${this.endpoint}/health?api-key=${this.api_key}`}),this.heartbeat.start()}stopHeartBeat(){this.heartbeat?.stop()}async getPop(){return(await this.initPromise)?.pop??""}expirationTimer;init(){this.initPromise=this.fetch("init","GET",void 0,void 0,{token:this.customerUserToken}).then(e=>{if(this.collector?.setParams({endpoint:e.collectUrl,deploymentID:e.deploymentID,index:e.index}),this.profile?.setParams({identifyUrl:e.collectUrl,index:e.index}),e.searchSession){if("required"in e.searchSession&&e.searchSession.required===!0)this.blockSearchTillAuth=!0;else if("token"in e.searchSession){let t=e.searchSession.token;this.searchToken=t;let o=e.searchSession.maxAge;this.blockSearchTillAuth=!1,this.expirationTimer&&clearTimeout(this.expirationTimer),this.expirationTimer=setTimeout(()=>{this.searchToken===t&&(this.searchToken=void 0,this.blockSearchTillAuth=!0,this.onAuthTokenExpired?.(t))},o*1e3),"unref"in this.expirationTimer&&this.expirationTimer.unref()}}return e}).catch(e=>(console.log(e),null))}async fetch(e,t,o,c,a){if(c?.signal.aborted===!0)throw new Error("Request aborted");let m={method:t,headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:c?.signal};if(t==="POST"&&o!==void 0){let u=o;u.version=V,u.id=this.id,u.visitorId=this.profile.getUserId(),m.body=Object.entries(u).filter(([f,v])=>!!v).map(([f,v])=>`${f}=${encodeURIComponent(JSON.stringify(v))}`).join("&")}let w=new URL(`${this.endpoint}/${e}`);if(w.searchParams.append("api-key",this.api_key),a)for(let[u,f]of Object.entries(a))f&&w.searchParams.append(u,f);let k=await fetch(w,m);if(!k.ok){let u=new Error;throw u.httpResponse=k,u}return await k.json()}getIdentity(){return this.profile.getIdentity()}getUserId(){return this.profile.getUserId()}getAlias(){return this.profile.getAlias()}async identify(e){if(this.initPromise===void 0)throw new Error("OramaClient not initialized");await this.profile.identify(this.initPromise,e)}async alias(e){if(this.initPromise===void 0)throw new Error("OramaClient not initialized");await this.profile.alias(this.initPromise,e)}reset(){this.profile.reset()}};function ke(e,t,o="[focus-on-arrow-nav]"){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.stopPropagation(),t.preventDefault();let c=e.querySelectorAll(o),a=Array.from(c);a=a.filter(v=>v.tabIndex!==-1);let m=a[0],w=a[a.length-1],k=e.querySelector(":focus"),u=a.indexOf(k),f;t.key==="ArrowDown"?(f=u===a.length-1?m:a[u+1],f?.focus()):t.key==="ArrowUp"&&(f=u===0?w:a[u-1],f?.focus())}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(ke,"arrowKeysNavigation");function xe(e){var t;if(!((t=navigator.clipboard)===null||t===void 0)&&t.writeText)navigator.clipboard.writeText(e).catch(o=>{console.error("Could not copy text: ",o)});else{let o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)}}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(xe,"copyToClipboard");function Ie(e,t){return Array.from(e.attributes).reduce((c,a)=>(t.includes(a.name)||(c[a.name]=a.value),c),{})}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(Ie,"getNonExplicitAttributes");function Se(e,t,o){let c=`
    Component: ${e.tagName.toLowerCase()}
    Id: ${e.id}
  `;if(!t&&!o)throw new Error(`Invalid component configuration. Please provide a valid index or instance prop. ${c}`);if(o&&!t&&o.search({term:"test"}).catch(()=>{throw new Error(`Invalid cloud instance configuration. Please provide a valid api_key and endpoint ${c}`)}),t&&!o){if(!t.api_key||!t.endpoint)throw new Error(`Invalid cloud index configuration. Please provide a valid api_key and endpoint ${c}`);return}t&&o&&console.warn(`Both index and instance props are provided. Instance prop will be used. ${c}`)}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(Se,"validateCloudIndexConfig");function Ce(e){return new be({api_key:e.api_key,endpoint:e.endpoint})}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(Ce,"initOramaClient");function Ae(e){return`${`orama-ui-${e}`}-${Math.random().toString(36).substring(2,15)}`}(0,_chunk_RPAKKUMI_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(Ae,"generateRandomID");
/*! Bundled license information:

@noble/hashes/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=chunk-62FT22TU.mjs.map

/***/ })

}]);