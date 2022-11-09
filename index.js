const express = require('express')
const router = require('./router').router
const routerUser = require('./routerUser').routerUser
const cookieParser = require('cookie-parser')

const fs=require('fs')

//漫画存放路径
const cartoonPath = 'F:/我的漫画/'

const app = express()
app.use(cookieParser())

app.use('/img', express.static(cartoonPath))

//app.use('/', express.static('E:/server/build/'))

for (let val in router) {
  app.all(router[val].path, router[val].fun)
}

for (let val in routerUser) {
  app.all(routerUser[val].path, routerUser[val].fun)
}

app.get('/kkkkkkk',(req,res)=>{
  fs.createReadStream('./atest/index.html').pipe(res)
})

app.listen(5656, () => {
  console.log('访问端口为5656')
})

