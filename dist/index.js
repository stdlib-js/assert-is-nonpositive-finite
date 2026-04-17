"use strict";var e=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var t=e(function(d,n){
var N=require('@stdlib/constants-float64-ninf/dist'),a=require('@stdlib/assert-is-number/dist').isPrimitive;function m(i){return a(i)&&i<=0&&i!==N}n.exports=m
});var s=e(function(y,v){
var O=require('@stdlib/constants-float64-ninf/dist'),P=require('@stdlib/assert-is-number/dist').isObject;function b(i){return P(i)&&i.valueOf()<=0&&i.valueOf()!==O}v.exports=b
});var c=e(function(g,o){
var R=require('@stdlib/constants-float64-ninf/dist'),F=t(),f=s();function j(i){return F(i)||f(i)}o.exports=j
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),p=t(),x=s();q(u,"isPrimitive",p);q(u,"isObject",x);module.exports=u;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
