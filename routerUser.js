const createUserFun = require('./routerUser/createUser').createUser
const signinFun = require('./routerUser/signin').signin
const isSigninFun = require('./routerUser/isSignin').isSignin
const outSigninFun = require('./routerUser/outSignin').outSignin
const myBrowFun = require('./routerUser/myBrow').myBrow
const myCollFun = require('./routerUser/myColl').myColl
const addCollFun = require('./routerUser/addColl').addColl
const removeCollFun = require('./routerUser/removeColl').removeColl
const addFocusFun = require('./routerUser/addFocus').addFocus
const uploadpicture = require('./routerUser/uploadpicture').uploadpicture

const routerUser = {
  createUser: {
    path: '/data/createUser',
    text: '注册账户',
    fun: (req, res) => {
      createUserFun(req, res)
    }
  },
  signin: {
    path: '/data/signin',
    text: '登录',
    fun: (req, res) => {
      signinFun(req, res)
    }
  },
  isSignin: {
    path: '/data/isSignin',
    text: '是否登录',
    fun: (req, res) => {
      isSigninFun(req, res)
    }
  },
  outSignin: {
    path: '/data/outSignin',
    text: '退出登录',
    fun: (req, res) => {
      outSigninFun(req, res)
    }
  },
  myBrow: {
    path: '/data/mybrow',
    text: '获取用户浏览记录',
    fun: (req, res) => {
      myBrowFun(req, res)
    }
  },
  myColl: {
    path: '/data/myColl',
    text: '获取用户收藏',
    fun: (req, res) => {
      myCollFun(req, res)
    }
  },
  addColl: {
    path: '/data/addColl',
    text: '添加收藏',
    fun: (req, res) => {
      addCollFun(req, res)
    }
  },
  removeColl: {
    path: '/data/removeColl',
    text: '取消收藏',
    fun: (req, res) => {
      removeCollFun(req, res)
    }
  },
  addFocus: {
    path: '/data/focus',
    text: '点赞',
    fun: (req, res) => {
      addFocusFun(req, res)
    }
  },


  //以下为新增接口
  uploadpicture: {
    path: '/data/uploadpicture',
    text: '上传图片',
    fun: (req, res) => {
      uploadpicture(req, res)
    }
  }
}

exports.routerUser = routerUser