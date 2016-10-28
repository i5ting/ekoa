
'use strict';

/**
 * Module dependencies.
 */

module.exports = (ctx, next) => {
  var req = ctx.request
  var res = ctx.response
  
  hm(req, res, next)
}