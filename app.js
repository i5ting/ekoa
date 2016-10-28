const Koa = require('koa')
const app = new Koa()

var hm = require('.')

app.use(hm(function(req, res, next){
  console.log('start')
  res.body = "sss";

  // return next().then(function (){
  //   console.log('end')

    
  // })
  
}))

// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

module.exports = app

app.listen(4000)