const Koa = require('.')
const app = new Koa()

// log1
app.em(function(req, res, next){
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    console.log(`${req.method} ${req.url} - ${ms}ms`);
  });
})

// log2
// app.em(function(req){
//   console.log('start')
// 
// })

app.em(function(req, res, next){
  console.log('process')
  res.body = "Hello Koa";
})

// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

module.exports = app
