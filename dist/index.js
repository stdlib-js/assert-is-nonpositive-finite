"use strict";var e=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(N){throw (r=0, N)}};};var t=e(function(y,n){
var a=require('@stdlib/constants-float64-ninf/dist'),m=require('@stdlib/assert-is-number/dist').isPrimitive;function O(i){return m(i)&&i<=0&&i!==a}n.exports=O
});var s=e(function(R,v){
var P=require('@stdlib/constants-float64-ninf/dist'),b=require('@stdlib/assert-is-number/dist').isObject;function F(i){return b(i)&&i.valueOf()<=0&&i.valueOf()!==P}v.exports=F
});var c=e(function(h,o){
var g=require('@stdlib/constants-float64-ninf/dist'),f=t(),j=s();function p(i){return f(i)||j(i)}o.exports=p
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),x=t(),I=s();q(u,"isPrimitive",x);q(u,"isObject",I);module.exports=u;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
