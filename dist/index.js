"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=u(function(g,v){
var l=require('@stdlib/constants-float32-smallest-normal/dist'),A=require('@stdlib/constants-float32-pinf/dist'),L=require('@stdlib/constants-float32-ninf/dist'),m=require('@stdlib/math-base-special-absf/dist'),F=require('@stdlib/number-float64-base-to-float32/dist'),N=8388608;function p(r,e,a,i){return r!==r||r===A||r===L?(e[i]=r,e[i+a]=0,e):r!==0&&m(r)<l?(r=F(r*N),e[i]=r,e[i+a]=-23,e):(e[i]=r,e[i+a]=0,e)}v.exports=p
});var s=u(function(I,q){
var t=n();function z(r){return t(r,[0,0],1,0)}q.exports=z
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=s(),R=n();O(c,"assign",R);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
