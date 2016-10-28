const Koa = require('.')
const app = new Koa()

// var hm = require('.')

app.hm(function(req, res, next){
  console.log('start')
  res.body = "sss";

  // return next().then(function (){
  //   console.log('end')

    
  // })
  
})

// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

module.exports = app

app.listen(4000)