const Koa = require('.')
const app = new Koa()

// log1
app.use(function(req, res, next){
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    console.log(`${req.method} ${req.url} - ${ms}ms`);
  });
})

// log2
app.em(function(req, res, next){
  console.log('start')
  next()
})

app.use(function(req, res, next){
  console.log('process')
  res.body = "Hello Koa 1";
})

// response
app._use(ctx => {
  ctx.body = 'Hello Koa 2'
})

module.exports = app

app.run(4000)
