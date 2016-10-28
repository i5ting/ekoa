# ekoa

koa 2.x use express-style middlewares 

[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/i5ting/ekoa?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://img.shields.io/npm/v/ekoa.svg?style=flat-square)](https://www.npmjs.com/package/ekoa)
[![Build](https://travis-ci.org/i5ting/ekoa.svg?branch=master)](https://travis-ci.org/i5ting/ekoa)
[![codecov.io](https://codecov.io/github/i5ting/ekoa/coverage.svg?branch=master)](https://codecov.io/github/i5ting/ekoa?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Features

- app.em = app.hm 支持Express风格的中间件
- app.use依然可以使用Koa 2.x的三种中间件

## Install

```
$ npm i -S ekoa
```

## Usages

```
const Koa = require('ekoa')
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
  res.body = "sss";
})

// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

app.listen(4000)
```

## 可使用的express风格的中间件

> app.em = app.hm

### 正常写法

```
function(req, res, next){
  console.log('start')
  
  return next().then(function (){
    console.log('end')
  })
}
```

next和koa commonfunction中的next是一样的。

### 中间件正常写法

```
function(req, res){
  res.body = "xxx"
}
``` 

此种写法有先后顺序，没有next中间件就不会向下传递。

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
