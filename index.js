
'use strict'

/**
 * Module dependencies.
 */

const Koa = require('koa')

/**
 * Expose `Application` class.
 * Inherits from `Emitter.prototype`.
 */

module.exports = class EKoa extends Koa {

  /**
   * Initialize a new `Application`.
   *
   * @api public
   */

  constructor () {
    super()

    this.run = this.start = this.listen

    this._use = this.use

    let app = this

    this.use = this.em = this.expressmiddleware = (fn) => {
      if (fn.length <= 3) {
        return app._use((ctx, next) => {
          var req = ctx.req
          var res = ctx.response

          fn.call(this, req, res, next)
        })
      }

      throw new new TypeError('You may only use express-style middleware or koa 2.x middleware!')
    }
  }
}
