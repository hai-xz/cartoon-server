const sqlQuery=require('../sqlQuery').sqlQuery

//精品推荐
let colum='id,name,introduction,author,isEnd,updateTime,coverHref,chapter,Collection,highly,browse'
let sql=`SELECT ${colum} FROM car ORDER BY RAND() LIMIT 12`

function btrecFun(req,res){
  sqlQuery(sql).then(resolve=>{
    if(resolve===false){
      res.sendStatus(500)
    }else{
      res.send(resolve)
    }
  })
}

exports.btrecFun=btrecFun