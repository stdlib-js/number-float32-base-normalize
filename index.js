// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(t){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||f.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,e,r.get),p&&l&&l.call(t,e,r.set),t};var c,y=e,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"";c=p&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n,o,a;if(null==t)return b.call(t);r=t[s],a=s,e=null!=(o=t)&&d.call(o,a);try{t[s]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[s]=r:delete t[s],n}:function(t){return b.call(t)};var _,v=c,m="function"==typeof Float32Array,w=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null,h="function"==typeof Float32Array?Float32Array:void 0;_=function(){var t,e,r;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,5e40]),r=e,t=(m&&r instanceof Float32Array||"[object Float32Array]"===v(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===w}catch(e){t=!1}return t}()?h:function(){throw new Error("not implemented")};var j,A=_,S="function"==typeof Uint32Array,F="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var t,e,r;if("function"!=typeof F)return!1;try{e=new F(e=[1,3.14,-3.14,4294967296,4294967297]),r=e,t=(S&&r instanceof Uint32Array||"[object Uint32Array]"===v(r))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?O:function(){throw new Error("not implemented")};var T=j,P=new A(1);new T(P.buffer)[0]=2139095040;var U=P[0],E=new A(1);new T(E.buffer)[0]=4286578688;var I=E[0],x="function"==typeof Math.fround?Math.fround:null,M=new A(1),N="function"==typeof x?x:function(t){return M[0]=t,M[0]};function V(t,e,r,n){return t!=t||t===U||t===I?(e[n]=t,e[n+r]=0,e):0!==t&&function(t){return Math.abs(t)}(t)<11754943508222875e-54?(t=N(8388608*t),e[n]=t,e[n+r]=-23,e):(e[n]=t,e[n+r]=0,e)}function k(t){return V(t,[0,0],1,0)}y(k,"assign",{configurable:!1,enumerable:!1,writable:!1,value:V}),t.assign=V,t.default=k,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).normalizef={});
//# sourceMappingURL=index.js.map
