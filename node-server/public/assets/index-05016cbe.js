(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const He="/assets/javascript-8dac5379.svg";function Ie(e){let t=0;const n=r=>{t=r,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>n(t+1)),n(0)}function me(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ee}=Object.prototype,{getPrototypeOf:X}=Object,Z=(e=>t=>{const n=Ee.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>Z(t)===e),M=e=>t=>typeof t===e,{isArray:x}=Array,B=M("undefined");function ke(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ye=R("ArrayBuffer");function Me(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ye(e.buffer),t}const qe=M("string"),T=M("function"),we=M("number"),$=e=>e!==null&&typeof e=="object",Je=e=>e===!0||e===!1,j=e=>{if(Z(e)!=="object")return!1;const t=X(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_e=R("Date"),ze=R("File"),Ke=R("Blob"),We=R("FileList"),Qe=e=>$(e)&&T(e.pipe),Ge=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ee.call(e)===t||T(e.toString)&&e.toString()===t)},ve=R("URLSearchParams"),Ve=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),x(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function Ae(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const be=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Oe=e=>!B(e)&&e!==be;function G(){const{caseless:e}=Oe(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ae(t,s)||s;j(t[o])&&j(r)?t[o]=G(t[o],r):j(r)?t[o]=G({},r):x(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const Ye=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,o)=>{n&&T(s)?e[o]=me(s,n):e[o]=s},{allOwnKeys:r}),e),Xe=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ze=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$e=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&X(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},et=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},tt=e=>{if(!e)return null;if(x(e))return e;let t=e.length;if(!we(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},nt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&X(Uint8Array)),rt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},st=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ot=R("HTMLFormElement"),it=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),se=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),at=R("RegExp"),Se=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},ct=e=>{Se(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ut=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return x(e)?r(e):r(String(e).split(t)),n},lt=()=>{},ft=(e,t)=>(e=+e,Number.isFinite(e)?e:t),z="abcdefghijklmnopqrstuvwxyz",oe="0123456789",Re={DIGIT:oe,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+oe},dt=(e=16,t=Re.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function pt(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const ht=e=>{const t=new Array(10),n=(r,s)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=x(r)?[]:{};return D(r,(i,u)=>{const d=n(i,s+1);!B(d)&&(o[u]=d)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:x,isArrayBuffer:ye,isBuffer:ke,isFormData:Ge,isArrayBufferView:Me,isString:qe,isNumber:we,isBoolean:Je,isObject:$,isPlainObject:j,isUndefined:B,isDate:_e,isFile:ze,isBlob:Ke,isRegExp:at,isFunction:T,isStream:Qe,isURLSearchParams:ve,isTypedArray:nt,isFileList:We,forEach:D,merge:G,extend:Ye,trim:Ve,stripBOM:Xe,inherits:Ze,toFlatObject:$e,kindOf:Z,kindOfTest:R,endsWith:et,toArray:tt,forEachEntry:rt,matchAll:st,isHTMLForm:ot,hasOwnProperty:se,hasOwnProp:se,reduceDescriptors:Se,freezeMethods:ct,toObjectSet:ut,toCamelCase:it,noop:lt,toFiniteNumber:ft,findKey:Ae,global:be,isContextDefined:Oe,ALPHABET:Re,generateString:dt,isSpecCompliantForm:pt,toJSONObject:ht};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ge=m.prototype,Te={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Te[e]={value:e}});Object.defineProperties(m,Te);Object.defineProperty(ge,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(ge);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const mt=null;function v(e){return a.isPlainObject(e)||a.isArray(e)}function Ne(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ie(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ne(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Et(e){return a.isArray(e)&&!e.some(v)}const yt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,O){return!a.isUndefined(O[h])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,O){let A=f;if(f&&!O&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Et(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(A=a.toArray(f)))return h=Ne(h),A.forEach(function(U,Fe){!(a.isUndefined(U)||U===null)&&t.append(i===!0?ie([h],Fe,o):i===null?h:h+"[]",c(U))}),!1}return v(f)?!0:(t.append(ie(O,h,o),c(f)),!1)}const p=[],w=Object.assign(yt,{defaultVisitor:l,convertValue:c,isVisitable:v});function E(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(A,N){(!(a.isUndefined(A)||A===null)&&s.call(t,A,a.isString(N)?N.trim():N,h,w))===!0&&E(A,h?h.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ee(e,t){this._pairs=[],e&&q(e,this,t)}const Pe=ee.prototype;Pe.append=function(t,n){this._pairs.push([t,n])};Pe.toString=function(t){const n=t?function(r){return t.call(this,r,ae)}:ae;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function wt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xe(e,t,n){if(!t)return e;const r=n&&n.encode||wt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ee(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class At{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ce=At,Ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bt=typeof URLSearchParams<"u"?URLSearchParams:ee,Ot=typeof FormData<"u"?FormData:null,St=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Rt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),b={isBrowser:!0,classes:{URLSearchParams:bt,FormData:Ot,Blob},isStandardBrowserEnv:St,isStandardBrowserWebWorkerEnv:Rt,protocols:["http","https","file","blob","url","data"]};function gt(e,t){return q(e,new b.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return b.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Tt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Nt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Be(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Nt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Tt(r),s,n,0)}),n}return null}const Pt={"Content-Type":void 0};function xt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const J={transitional:Ce,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Be(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return gt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return q(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),xt(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:b.classes.FormData,Blob:b.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){J.headers[t]={}});a.forEach(["post","put","patch"],function(t){J.headers[t]=a.merge(Pt)});const te=J,Ct=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Bt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Ct[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ue=Symbol("internals");function C(e){return e&&String(e).trim().toLowerCase()}function F(e){return e===!1||e==null?e:a.isArray(e)?e.map(F):String(e)}function Dt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Lt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function K(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Ut(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function jt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class _{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,d,c){const l=C(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=F(u))}const i=(u,d)=>a.forEach(u,(c,l)=>o(c,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Lt(t)?i(Bt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=C(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Dt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=C(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||K(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=C(i),i){const u=a.findKey(r,i);u&&(!n||K(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||K(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=F(s),delete n[o];return}const u=t?Ut(o):String(o).trim();u!==o&&delete n[o],n[u]=F(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ue]=this[ue]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=C(i);r[u]||(jt(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}_.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(_.prototype);a.freezeMethods(_);const S=_;function W(e,t){const n=this||te,r=t||n,s=S.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function De(e){return!!(e&&e.__CANCEL__)}function L(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(L,m,{__CANCEL__:!0});function Ft(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ht=b.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function It(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Le(e,t){return e&&!It(t)?kt(e,t):t}const Mt=b.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function qt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Jt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=r[o];i||(i=c),n[s]=d,r[s]=c;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const E=l&&c-l;return E?Math.round(w*1e3/E):void 0}}function le(e,t){let n=0;const r=Jt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,d=r(u),c=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const _t=typeof XMLHttpRequest<"u",zt=_t&&function(e){return new Promise(function(n,r){let s=e.data;const o=S.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(b.isStandardBrowserEnv||b.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const E=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(E+":"+f))}const l=Le(e.baseURL,e.url);c.open(e.method.toUpperCase(),xe(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const E=S.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:E,config:e,request:c};Ft(function(A){n(A),d()},function(A){r(A),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Ce;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},b.isStandardBrowserEnv){const E=(e.withCredentials||Mt(l))&&e.xsrfCookieName&&Ht.read(e.xsrfCookieName);E&&o.set(e.xsrfHeaderName,E)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",le(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",le(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=E=>{c&&(r(!E||E.type?new L(null,e,c):E),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const w=qt(l);if(w&&b.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},H={http:mt,xhr:zt};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Kt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?H[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function fe(e){return Q(e),e.headers=S.from(e.headers),e.data=W.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Kt.getAdapter(e.adapter||te.adapter)(e).then(function(r){return Q(e),r.data=W.call(e,e.transformResponse,r),r.headers=S.from(r.headers),r},function(r){return De(r)||(Q(e),r&&r.response&&(r.response.data=W.call(e,e.transformResponse,r.response),r.response.headers=S.from(r.response.headers))),Promise.reject(r)})}const de=e=>e instanceof S?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(c,l,p){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:p},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(c,l,p){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function o(c,l){if(!a.isUndefined(l))return r(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>s(de(c),de(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=d[l]||s,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==u||(n[l]=w)}),n}const Ue="1.3.3",ne={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ne[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const pe={};ne.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ue+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!pe[i]&&(pe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function Wt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],d=u===void 0||i(u,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const V={assertOptions:Wt,validators:ne},g=V.validators;class k{constructor(t){this.defaults=t,this.interceptors={request:new ce,response:new ce}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&V.assertOptions(r,{silentJSONParsing:g.transitional(g.boolean),forcedJSONParsing:g.transitional(g.boolean),clarifyTimeoutError:g.transitional(g.boolean)},!1),s!==void 0&&V.assertOptions(s,{encode:g.function,serialize:g.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=S.concat(i,o);const u=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,p=0,w;if(!d){const f=[fe.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),w=f.length,l=Promise.resolve(n);p<w;)l=l.then(f[p++],f[p++]);return l}w=u.length;let E=n;for(p=0;p<w;){const f=u[p++],h=u[p++];try{E=f(E)}catch(O){h.call(this,O);break}}try{l=fe.call(this,E)}catch(f){return Promise.reject(f)}for(p=0,w=c.length;p<w;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=P(this.defaults,t);const n=Le(t.baseURL,t.url);return xe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){k.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(P(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}k.prototype[t]=n(),k.prototype[t+"Form"]=n(!0)});const I=k;class re{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new L(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new re(function(s){t=s}),cancel:t}}}const Qt=re;function Gt(e){return function(n){return e.apply(null,n)}}function vt(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const Vt=Y;function je(e){const t=new I(e),n=me(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return je(P(e,s))},n}const y=je(te);y.Axios=I;y.CanceledError=L;y.CancelToken=Qt;y.isCancel=De;y.VERSION=Ue;y.toFormData=q;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=Gt;y.isAxiosError=vt;y.mergeConfig=P;y.AxiosHeaders=S;y.formToJSON=e=>Be(a.isHTMLForm(e)?new FormData(e):e);y.HttpStatusCode=Vt;y.default=y;const he=y,Yt={},Xt=async()=>{try{const e=`-----BEGIN CERTIFICATE-----

    MIIC8TCCAdkCCQC3PyBehKcu+TANBgkqhkiG9w0BAQsFADAyMTAwLgYDVQQKDCdU

    TFMgUHJvamVjdCBEb2RneSBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcNMjMwMjA5

    MDc1MjQwWhcNMjQwNjIzMDc1MjQwWjBDMScwJQYDVQQKDB5UTFMgUHJvamVjdCBE

    ZXZpY2UgQ2VydGlmaWNhdGUxGDAWBgNVBAMMDzE5Mi4xNjguMTExLjEwMTCCASIw

    DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMDjAjhbJEJxO6o4tV6nBEJ5O08S

    HWUWyTwTut/dJvnLZevTdAY8lMitgrNR0qIu+BlbK1kItYa1LyW6D/fr9255u2eN

    RuDxxBKjfZ0oy02uXCUJQYnqfrgDuGOYpt5dnJd+T+kJPIgoAOrpVKc5JruGzRtu

    5G+ewu69bXozeIjDU/AExCwo+o+86zwHZYEHtQqR8tK2D6/uV5BPllZcmPlPJXUh

    q5NQhxjAIiantfnBQUXFeX2Lb4BOTwQGjzdBp8rEx1LgYRO4B6quBn/7yHt+oQAH

    ShGJR+q4ZT8ezB7rO3GsVsdJIU9CbnROKbyLO4u3ANBiwzgjVFI1wm6H7csCAwEA

    ATANBgkqhkiG9w0BAQsFAAOCAQEAlGG820gKrDO3dxpfYfiz2iLObYa7Yjo7QWRn

    8qR3mB2ITqHvKBH90x1SBjDgJ489OpNP3jYiJQlaXp6Rp4A1sZTCT0ijj3Yt61B8

    su3pZcYfZuTKuBzzehPizi+I9NxcyhOBN8cID0EzvJMxkjRvxY5sw0jZWEyfdtz8

    /DLS8ffsW9DXxrHaotp+oSpsPwTgimJfBGFUrYvimbJL5PQSphqqh+1fCvZHWHBr

    j2BHr/58/Jo31BKuggVGUEKoxvfIyubW5AG4278XkKvznTEnBaerluFABaw8xOGl

    s5oEkycAiYhn7STkB0hxFachZNkIF2ObcpmXqgdZcIsxTAENRw==

    -----END CERTIFICATE-----

    `,t=`-----BEGIN RSA PRIVATE KEY-----

    MIIEogIBAAKCAQEAwOMCOFskQnE7qji1XqcEQnk7TxIdZRbJPBO6390m+ctl69N0

    BjyUyK2Cs1HSoi74GVsrWQi1hrUvJboP9+v3bnm7Z41G4PHEEqN9nSjLTa5cJQlB

    iep+uAO4Y5im3l2cl35P6Qk8iCgA6ulUpzkmu4bNG27kb57C7r1tejN4iMNT8ATE

    LCj6j7zrPAdlgQe1CpHy0rYPr+5XkE+WVlyY+U8ldSGrk1CHGMAiJqe1+cFBRcV5

    fYtvgE5PBAaPN0GnysTHUuBhE7gHqq4Gf/vIe36hAAdKEYlH6rhlPx7MHus7caxW

    x0khT0JudE4pvIs7i7cA0GLDOCNUUjXCboftywIDAQABAoIBADJsJWxuBvCHgT1i

    TadMqcRmxKZK6fw/FKPr1HIo8cNi9GXNhQsMUyiSkxQlU5aqCJk4SACiUjHAs259

    USdSPABZOjA7skeja8ojivbGbz8DUXstDEDtV+rqrgz7HsQKXKENl/4nN/ev3W2L

    SWHdgs6K0ptVRcoYCoU2Z6QGSIAXevr20UgnZJFOAiqYf4ypcKgtPMmFOqWdUDD3

    xVdJVWWg58Bo+GiyyXb+pExlr2M3IbVnRaBfcjuzAQK/jc3OObHozxkBew2jqCUb

    uUjEZCTC12Jqmuyiq0y2uGTOwOeD29Doco5rLK1Eryr0jL22cU0BimeZWz3TiiXo

    cpMBdsECgYEA8s5unMSH+gUn1Y9tw/WEkhub0RhqWcX8VcUNMNS8ArlxRtbD1K6n

    4fctdtuOWKZRF/ETMakY5wtD5XQX8NYKF5OV6ic/Qd2woRT8sLE9UPWoGAxvJfXP

    DzZp8zivyOm0GK9sx/bzAtbjSGHKHfw7DaHLviUI4xWs04IVsQ9xw0kCgYEAy14q

    67Vw4CKKwI0Pllm1Q8iPXuRngG+YJNh4J/TEM0itrGQjfZHyjLfGvYm1q1+nUQLL

    lAsfO5qtk7wI6OTkfSWDXYglg6PJv/2yUMeL4wixPE5bZLt41THLtZLZUeSDS1T7

    i9eaRY3PJ0XsWeXr5eXP5N8OhXlUIpeK/cZPlHMCgYBJanG3pRUYXAa3ZC7kWZBE

    PWTXzHIbwumRZYufgDN4/2lo6fc8j7LjeEGe9rQLyf4rJxGOqnqFIbrd3kR+5bkX

    d+CUdFmEKOwHSLk/E9heamjxHJFfAPwitWlDyZgdP8zcye4yaFECQsdmU2sxtdqF

    PK7GR5xwTVV8fpDggLL9QQKBgDLcHBPSzqXfPaAmJw3M5Z5MHD75FEF0pzIfyP0F

    I8RHmteQO6f9xhEXLObd98ciJvAFqPAfT/JSHrLhxcCo7dO2fAH6OJeRcLVJNz0o

    in1/AQQ5/HVWxUNcLrv8O8lVQtimKjqw8u4OJw6FWDSrYbGfJbzxY+pRi48TIzmQ

    TPqtAoGABf9wG0Xbw+eyIYLHvlLHOiqMqv9RrFGZTdNkfalWY5X7dhPAc1fDjLL7

    5mGulra/v1Zb+jTa5rajjKbwK5seSR25kbw9cIYOtbiu/eiq90rURdQLL9QKxRo5

    YXDbQjIsRMppHBfWWn6hZzzPJWWyhZMp66Wg/KLEo0wcQhv4w80=

    -----END RSA PRIVATE KEY-----

    `,n="34.92.220.98",r=await he.get(`https://${n}/api/cert`,{httpAgent:new Yt.Agent({cert:e,key:t,rejectUnauthorized:!1,keepAlive:!0})});console.log(r.data),console.log("succeccfull")}catch(e){const t=e;he.isAxiosError(t)?(t.request&&console.log("request error"),t.response&&console.log("response error")):(console.log("native error"),console.log(t))}};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${He}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;Ie(document.querySelector("#counter"));setTimeout(()=>{Xt()},10);async function Zt(){const e="34.92.220.98",t=await axios.get(`https://${e}/`);console.log(t.data),console.log("succeccfull")}Zt();