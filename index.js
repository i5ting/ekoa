
'use strict';

/**
 * Module dependencies.
 */



const Koa = require('koa')


/**
 * Expose `Application` class.
 * Inherits from `Emitter.prototype`.
 */

module.exports = class MyKoa extends Koa {

  /**
   * Initialize a new `Application`.
   *
   * @api public
   */

  constructor() {
    super();
    
    let app = this;
    
    this.em = this.hm = (fn) => {
      if (fn.length == 3) {
        return app.use((ctx, next) => {
          var req = ctx.req
          var res = ctx.response
  
          fn.call(this, req, res, next)
        })
      }
  
      return app.use((ctx, next) => {
        fn.apply(this, arguments) 
      })
    }
  } 
}