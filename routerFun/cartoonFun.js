const sqlQuery=require('../sqlQuery').sqlQuery

//单本漫画详情
let colum='id,name,introduction,author,isEnd,updateTime,coverHref,chapter,Collection,highly,browse'

function cartoonFun(req,res){
  let id=req.query.id?req.query.id:2001
  let sql=`SELECT ${colum} FROM car WHERE id=${id}`
  sqlQuery(sql).then(resolve=>{
    if(resolve===false){
      res.sendStatus(500)
    }else{
      res.send(resolve)
    }
  })
}

exports.cartoonFun=cartoonFun