
'use strict';

/**
 * Module dependencies.
 */

module.exports = (fn) => {
  if (fn.length == 3) {
    return (ctx, next) => {
      var req = ctx.req
      var res = ctx.response
  
      fn.call(this, req, res, next)
    } 
  }
  
  return (ctx, next) => {
    fn.apply(this, arguments) 
  }
}
//
// function gWrapper(fn) {
//     if (fn.length == 4) return function(err, req, res, next) {
//         return co(fn.call(this, err, req, res, next)).catch(next);
//     }
//     return function() {
//         return co(fn.apply(this, arguments)).catch(arguments[arguments.length - 1]);
//     }
// }