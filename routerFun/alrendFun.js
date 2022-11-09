const sqlQuery=require('../sqlQuery').sqlQuery

//获取已完结漫画
let sql2='select COUNT(*) as quantity from car WHERE isEnd=0'
let colum='id,name,introduction,author,isEnd,updateTime,coverHref,chapter,Collection,highly,browse'

function alrendFun(req,res){
  let limit=req.query.limit?req.query.limit:12
  let offset=req.query.offset?req.query.offset:0
  let sql=`SELECT ${colum} FROM car WHERE isEnd=0 LIMIT ${limit} OFFSET ${offset}`

  Promise.all([sqlQuery(sql),sqlQuery(sql2)]).then(resolve=>{
    let data={
      data:resolve[0],
      quantity:resolve[1][0]?.quantity
    }
    res.send(data)
  })
}

exports.alrendFun=alrendFun