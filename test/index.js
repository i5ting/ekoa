import test from 'ava'

var path = require('path')
var app = path.resolve(__dirname , '../app.js')

var superkoa = require('superkoa')

test.cb("superkoa()", t => {
  superkoa(app)
    .get("/")
    .expect(200, function (err, res) {
      t.ifError(err)
      var userId = res.body.id;
      t.is(res.text, 'Hello Koa 1', 'res.text == Hello Koa 1')
      t.end()
    });
});
