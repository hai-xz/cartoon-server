const rcrecFun=require('./routerFun/rcrecFun').rcrecFun
const btrecFun=require('./routerFun/btrecFun').btrecFun
const alrendFun=require('./routerFun/alrendFun').alrendFun
const hotFun=require('./routerFun/hotFun').hotFun
const fabulFun=require('./routerFun/fabulFun').fabulFun
const collectionFun=require('./routerFun/collectionFun').collectionFun
const cartoonFun=require('./routerFun/cartoonFun').cartoonFun
const carlistFun=require('./routerFun/carlistFun').carlistFun
const randFun=require('./routerFun/randFun').randFun
const searchFun=require('./routerFun/searchFun').searchFun
const latelyFun=require('./routerFun/latelyFun').latelyFun
const addBrowFun=require('./routerFun/addBrow').addBrow

const router={
  rcrec:{
    path:'/data/rcrec',
    text:'获取顶部轮播图推荐',
    fun:(req,res)=>{
      rcrecFun(req,res)
    }
  },
  btrec:{
    path:'/data/btrec',
    text:'精品推荐',
    fun:(req,res)=>{
      btrecFun(req,res)
    }
  },
  alrend:{
    path:'/data/alrend',
    text:'获取已完结漫画',
    fun:(req,res)=>{
      alrendFun(req,res)
    }
  },
  hot:{
    path:'/data/hot',
    text:'按热度排序漫画',
    fun:(req,res)=>{
      hotFun(req,res)
    }
  },
  fabul:{
    path:'/data/fabul',
    text:'按点赞数量排序',
    fun:(req,res)=>{
      fabulFun(req,res)
    }
  },
  collection:{
    path:'/data/collection',
    text:'按收藏数量排序',
    fun:(req,res)=>{
      collectionFun(req,res)
    }
  },
  cartoon:{
    path:'/data/cartoon',
    text:'查看漫画的详情',
    fun:(req,res)=>{
      cartoonFun(req,res)
    }
  },
  carlist:{
    path:'/data/carlist',
    text:'获取漫画章节图片',
    fun:(req,res)=>{
      carlistFun(req,res)
      addBrowFun(req)
    }
  },
  rand:{
    path:'/data/rand',
    text:'随机推荐一本',
    fun:(req,res)=>{
      randFun(req,res)
    }
  },
  search:{
    path:'/data/search',
    text:'搜索',
    fun:(req,res)=>{
      searchFun(req,res)
    }
  },
  lately:{
    path:'/data/lately',
    text:'最近更新',
    fun:(req,res)=>{
      latelyFun(req,res)
    }
  }
}

exports.router=router