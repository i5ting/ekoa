const Koa = require('.')
const app = new Koa('sss',{})

// log1
app.use(async function(req, res, next){
  const start = new Date();
  await next()
  
  const ms = new Date() - start;
  console.log(`${req.method} ${req.url} - ${ms}ms`);
})

// log2
app.use(async function(req, res, next){
  console.log('start')
  await next()
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
