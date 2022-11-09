const sqlQuery=require('../sqlQuery').sqlQuery

//单本漫画详情
let colum='id,name,introduction,author,isEnd,updateTime,coverHref,chapter,Collection,highly,browse'

function randFun(req,res){
  let sql=`SELECT ${colum} FROM car ORDER BY RAND() LIMIT 1`
  sqlQuery(sql).then(resolve=>{
    if(resolve===false){
      res.sendStatus(500)
    }else{
      res.send(resolve)
    }
  })
}

exports.randFun=randFun