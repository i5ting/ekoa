const Koa = require('.')
const app = new Koa()

app.em(function(req, res, next){
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    console.log(`${req.method} ${req.url} - ${ms}ms`);
  });
})

app.em(function(req, res, next){
  console.log('start')
  
  return next().then(function (){
    console.log('end')
  })
})

app.em(function(req, res, next){
  console.log('process')
  res.body = "Hello Koa";
})

// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

module.exports = app

app.listen(4000)