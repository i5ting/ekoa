const Koa = require('.')
const app = new Koa()

app.hm(function(req, res, next){
  console.log('start')
  
  return next().then(function (){
    console.log('end')
  })
})

app.hm(function(req, res, next){
  console.log('process')
  res.body = "sss";
})

// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

module.exports = app

app.listen(4000)